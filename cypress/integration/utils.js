// https://stackoverflow.com/questions/29321742/react-getting-a-component-from-a-dom-element-for-debugging/39165137#39165137
export const getReactFiber = (el) => {
  const key = Object.keys(el).find((key) => {
    return (
      key.startsWith('__reactFiber$') || // react 17+
      key.startsWith('__reactInternalInstance$') // react <17
    )
  })
  if (!key) {
    return
  }
  return el[key]
}

// react 16+
export const getComponent = (fiber) => {
  let parentFiber = fiber.return
  while (typeof parentFiber.type == 'string') {
    parentFiber = parentFiber.return
  }
  return parentFiber
}
