import request from '@/utils/request'



// keyboard
export function echartKeyboardChartAPI() {
    return request({
      url: '/echart/keyboard',
      method: 'get'
    })
  }

  // LineMarker
export function echartLineMarkerAPI() {
    return request({
      url: '/echart/LineMarker',
      method: 'get'
    })
  }

  // MixChart
export function echartMixChartAPI() {
    return request({
      url: '/echart/MixChart',
      method: 'get'
    })
  }



/* // line
export function echartLineAPI() {
    let res = fetch('/echart/line')
    return res
}

// Radar
export function echartRadarAPI() {
    let res = fetch('/echart/radar')
    return res
}

// Pie
export function echartPieAPI() {
    let res = fetch('/echart/pie')
    return res
}

// Map
export function echartMapAPI() {
    let res = fetch('/echart/map')
    return res
}

// MapArea
export function echartMapAreaAPI() {
    let res = fetch('/echart/area')
    return res
}

// Funnel
export function echartFunnelAPI() {
    let res = fetch('/echart/funnel')
    return res
}

// Gauge
export function echartGaugeAPI() {
    let res = fetch('/echart/gauge')
    return res
}

// Treemap
export function echartTreemapAPI() {
    let res = fetch('/echart/treemap')
    return res
}

// Boxplot
export function echartBoxplotAPI() {
    let res = fetch('/echart/boxplot')
    return res
}

// Scatter
export function echartScatterAPI() {
    let res = fetch('/echart/scatter')
    return res
} */