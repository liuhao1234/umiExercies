// 运行时配置
export function render(oldRender) {
  oldRender()
}

export function onRouteChange(params) {
  console.log(params)
}