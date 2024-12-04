# Lightning Multi-Select

This is a simple multi-select component for Salesforce Lightning.

## How to install

1. Clone or download this repository
2. Copy the `multiSelect` component directory into your project's `lwc` directory
3. Deploy the component
4. You can now use the `<c-multi-select>` component

```js
  get colorOptions() {
    return [
      {
        value: 'black',
        label: 'Black',
      },
      {
        value: 'red',
        label: 'Red',
      }
    ]
  }

  get defaultColors() {
    return [
      'black'
    ];
  }

  onSelectColors(event) {
    const { options } = event.detail;
    console.log('Selected colors', options);
  }
```

```html
<c-multi-select
  options="{colorOptions}"
  value="{defaultColors}"
  onselected="{onSelectColors}"
>
</c-multi-select>
```
