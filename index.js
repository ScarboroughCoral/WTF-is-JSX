"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
exports.render = exports.hyper = void 0;
function hyper(nodeName, attributes) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var children = args.length > 0 ? __spreadArray([], args) : null;
    return { nodeName: nodeName, attributes: attributes, children: children };
}
exports.hyper = hyper;
function render(vnode) {
    if (typeof vnode === 'string')
        return document.createTextNode(vnode);
    var node = document.createElement(vnode.nodeName);
    var _a = vnode.attributes, attributes = _a === void 0 ? {} : _a, _b = vnode.children, children = _b === void 0 ? [] : _b;
    Object.entries(attributes).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        node.setAttribute(key, value);
    });
    children.forEach(function (child) { return node.append(render(child)); });
    return node;
}
exports.render = render;
