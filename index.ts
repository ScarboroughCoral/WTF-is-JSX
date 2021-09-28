namespace WTFISJSX {
    export type Node = ElementNode | TextNode;
    type ElementNode = {
        nodeName: keyof HTMLElementTagNameMap,
        attributes: {
            [key: string]: string
        },
        children: Node[]
    }
    type TextNode = string;
}

export function hyper(nodeName: keyof HTMLElementTagNameMap, attributes, ...args: WTFISJSX.Node[]): WTFISJSX.Node {
    const children = args.length > 0 ? [...args] : null;
    return { nodeName, attributes, children };
}

export function render(vnode: WTFISJSX.Node) {
    if (typeof vnode === 'string') return document.createTextNode(vnode);

    const node = document.createElement(vnode.nodeName);

    const { attributes = {}, children = [] } = vnode;
    Object.entries(attributes).forEach(([key, value]) => {
        node.setAttribute(key, value);
    });
    children.forEach(child => node.append(render(child)));
    return node;
}