const html = require('choo/html')
const Chartist = require('chartist')

const DEFAULT_CHART_TYPE = 'Line'

const cache = {
  chart: null,
  el: null
}

function onload (el, type, data, options) {
  if (!cache.chart) {
    cache.chart = initChart(el, { type: type, data: data, options: options })
  }
}

function initChart (el, config) {
  let type = config.type || DEFAULT_CHART_TYPE
  let data = config.data || { labels: [], series: [] }
  let options = config.options || {}
  let responsiveOptions = config.responsiveOptions || []
  return new Chartist[type](el, data, options, responsiveOptions)
}

module.exports = function (type, data, options, responsiveOptions) {
  if (!cache.el) {
    cache.el = html`<div class="ct-chart" onload=${(el) => { onload(el, type, data, options, responsiveOptions)} }></div>`
  } else {
    cache.chart.update(data, options)
  }
  return cache.el
}
