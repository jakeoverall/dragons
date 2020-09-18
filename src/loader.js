import Vue from 'vue'

// https://webpack.js.org/guides/dependency-management/#require-context
// @ts-ignore
const requireComponent = require.context('./components', true, /[a-z0-9]+\.(jsx?|vue)$/i)

// For each matching file name...
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = fileName
    .substr(fileName.lastIndexOf('/') + 1)
    .replace(/\.\w+$/, '')

  const component = componentConfig.default || componentConfig
  component.name = componentName
  // Globally register the component
  Vue.component(componentName, component)
})