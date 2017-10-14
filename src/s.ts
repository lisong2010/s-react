import VNode from './vnode';

export const s = (nodeName, attributes) => {
  let p = new VNode();
  p.nodeName = 'xx';
  p.children = 'xxx';
  p.attributes = 'xxx';
  p.key = 'xxx';
  return p;
};
