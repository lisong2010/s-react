export function createNode(nodeName, isSvg) {
  let node = isSvg
    ? document.createElementNS('http://www.w3.org/2000/svg', nodeName)
    : document.createElement(nodeName);
  node.normalizedNodeName = nodeName;
  return node;
}
