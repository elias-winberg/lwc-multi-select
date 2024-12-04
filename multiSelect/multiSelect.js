import { api, LightningElement, track } from "lwc";

export default class MultiSelect extends LightningElement {
  @api value;
  @api options;

  open = false;

  @track selectedOptions = [];

  connectedCallback() {
    if (this.value) {
      const defaultOptions = Array.isArray(this.value)
        ? this.value
        : [this.value];

      this.selectedOptions = defaultOptions
        .map((value) => this.options.find((option) => option.value === value))
        .filter((option) => option !== undefined);
    }
  }

  hide() {
    this.open = false;
  }

  show() {
    this.open = true;
  }

  dispatchSelectedEvent() {
    this.dispatchEvent(
      new CustomEvent("selected", {
        detail: {
          options: this.selectedOptions,
        },
      }),
    );
  }

  removeSelectedOption(event) {
    this.selectedOptions = this.selectedOptions.filter(
      (option) => option.value !== event.target.dataset.option,
    );

    this.dispatchSelectedEvent();
  }

  addSelectedOption(event) {
    this.hide();

    const selectedOption = this.options.find(
      (option) => option.value === event.currentTarget.dataset.value,
    );

    if (!selectedOption) {
      return;
    }

    this.selectedOptions.push(selectedOption);

    this.dispatchSelectedEvent();
  }

  get remainingOptions() {
    const selectedOptionValues = this.selectedOptions.map(
      (option) => option.value,
    );

    return this.options.filter(
      (option) => !selectedOptionValues.includes(option.value),
    );
  }
}
