# choo-chartist

A little component for using Chartist with the `choo` framework!

### features

- works with the `choo` framework
- quickly puts fully sick SVG charts within reach

## Installation

`$ npm install choo-chartist`

## Usage

```javascript
const html = require('choo/html')
const chartist = require('choo-chartist')

const chartType = 'Line'

module.exports = (state, prev, send) => html`
  <main>
    ${ chartist(chartType, state.chart.data, state.chart.options) }
  </main>
`
```

## Styles

The stylesheets for `Chartist` are distributed with the `Chartist` npm package (a dependency of **this** package) and can be imported, for example, with `sheetify`:

```javascript
const sf = require('sheetify')
sf('chartist', { global: true })
```
## Internals

As per the design of `Chartist`, `choo-chartist` creates a "container" element (a `<div>`) with an `onload` event that initializes `Chartist` (and some other stuff).

The new `Chartist` object is then attached to the "container" element.

The component then caches the `Chartist` object and the "container" element.

Subsequent changes in state are passed through to the cached `Chartist` object, in particular to [Chartist.update()](https://gionkunz.github.io/chartist-js/api-documentation.html#chartistbase-function-update), which constrains us to updating only the `data` and `options`, e.g. you cannot subsequently change the chart type.

After `update()` has been called and the SVG has been updated, the component returns the cached "container" element and what you see is the updated chart! :boom:

## Known Issues

- At this point, the only known issue is that there are an indeteminate amount of *unknown unknown* issues.

## FAQ

- Are charts awesome?

Yes, correct.

- Is choo awesome?

Oh hells yeah!

## See Also

- [Charist](https://gionkunz.github.io/chartist-js/)
- [Choo](https://github.com/yoshuawuyts/choo)

## License

MIT
