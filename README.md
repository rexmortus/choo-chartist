# choo-chartist

A little component for using Chartist with the `choo` framework!

## Usage

```
const html = require('choo/html')
const chartist = require('choo-chartist')

module.exports = (state, prev, send) => html`
  <main>
    ${ chartist(state.chart.type, state.chart.data, state.chart.options) }
  </main>
`
```

By the way, the css for `Chartist` is distributed with `Chartist` package and could be imported, for example, with `sheetify` ala:

```
const sf = require('sheetify')
sf('chartist', { global: true })
```
