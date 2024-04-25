"use strict";

import { arrayUtilities } from "necessary";

const { extract } = arrayUtilities;

export function leafNodesFromNodeList(nodeList) {
  const nodes = [ ...nodeList ];

  extract(nodes, (node) => {
    const { childNodes: childNodeList } = node,
          childNodes = [ ...childNodeList ],
          nodesIncludeChildNode = childNodes.some((childNode) => {
            const nodesIncludesChildNode = nodes.includes(childNode);

            if (nodesIncludesChildNode) {
              return true;
            }
          });

    if (nodesIncludeChildNode) {
      return true;
    }
  });

  const leafNodes = nodes;  ///

  return leafNodes;
}
