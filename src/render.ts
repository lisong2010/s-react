import { createNode } from './dom';
import VNode from './vnode';

export const render = (vnode, element) => {
  let node = createNode(vnode.nodeName, false);
};
