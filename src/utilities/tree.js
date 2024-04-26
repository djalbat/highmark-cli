"use strict";

import { arrayUtilities } from "necessary";

const { filter } = arrayUtilities;

export function leafNodesFromNodeList(nodeList) {
  const nodes = [ ...nodeList ];

  filter(nodes, (node) => {
    const { childNodes: childNodeList } = node,
          childNodes = [ ...childNodeList ],
          childNodesIncludesNodes = nodes.some((node) => {
            const childNodesIncludesNode = childNodes.includes(node);

            if (childNodesIncludesNode) {
              return true;
            }
          });

    if (!childNodesIncludesNodes) {
      return true;
    }
  });

  const leafNodes = nodes;  ///

  return leafNodes;
}
