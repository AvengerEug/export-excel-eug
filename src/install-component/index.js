import Components from '../components'

Components.forEach(component => {
  // Vue.js 的插件应当有一个公开方法 install 。
  // 第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象
// 参考：https://cn.vuejs.org/v2/guide/plugins.html#%E5%BC%80%E5%8F%91%E6%8F%92%E4%BB%B6
  /**
   * Vue.js 的插件应当有一个公开方法 install
   * 第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象
   * 参考：https://cn.vuejs.org/v2/guide/plugins.html#%E5%BC%80%E5%8F%91%E6%8F%92%E4%BB%B6
   * 
   * install 方法在Vue.use() 时被调用
   */
  console.log('component :', component)
  component.install = Vue => Vue.component(component.name, component)
})

console.log('Components :', Components)

export default Components