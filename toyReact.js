class Elementwrapper {
    constructor(type) {
        this.type = type;
        this.props = Object.create(null);
        this.children = [];
        // this.element = document.createElement(type);
    }
    setAttribute(name, value) {
        // if (name.match(/^on([\s\S]+)$/)) {
        //     let eventName = RegExp.$1.replace(/^[\s\S]/, s => s.toLowerCase());
        //     this.element.addEventListener(eventName, value)
        // }
        // if (name === 'className') {
        //     name = 'class'
        // }
        // this.element.setAttribute(name, value)
        this.props[name] = value;
    }
    appendChild(vchild) {
        // console.log(vchild);
        // console.log(1111)
        // console.log(vchild + '........')
        this.children.push(vchild);
        // let range = document.createRange();
        // if (this.element.children.length) {
        //     range.setStartAfter(this.element.lastChild);
        //     range.setEndAfter(this.element.lastChild)
        // } else {
        //     range.setStart(this.element, 0);
        //     range.setEnd(this.element, 0);
        // }
        // vchild.mountTo(range);
    }
    mountTo(range) {
        range.deleteContents();
        this.range = range
        let element = document.createElement(this.type);
        for (let name in this.props) {
            let value = this.props[name];
            if (name.match(/^on([\s\S]+)$/)) {
                let eventName = RegExp.$1.replace(/^[\s\S]/, s => s.toLowerCase());
                element.addEventListener(eventName, value)
            } else if (name === 'className') {
                name = 'class'
            }
            element.setAttribute(name, value);
        }
        for (let child of this.children) {
            let range = document.createRange();
            if (element.children.length) {
                range.setStartAfter(element.lastChild);
                range.setEndAfter(element.lastChild)
            } else {
                range.setStart(element, 0);
                range.setEnd(element, 0);
            }
            child.mountTo(range);
        }
        range.insertNode(element);
        // parent.appendChild(this.element);
    }
};
class TextWrapper {
    constructor(type) {
        this.type = '#text';
        this.children = [];
        this.props = Object.create(null);
        this.element = document.createTextNode(type);
    }
    mountTo(range) {
        this.range = range;
        // parent.appendChild(this.element);
        range.deleteContents();
        range.insertNode(this.element);
    }
};
export class Component {
    constructor() {
        this.children = [];
        this.props = Object.create(null);
    }
    get type() {
        // console.log(this.constructor.v)
        return this.constructor.name
    }
    setAttribute(name, value) {

        this[name] = value;
        this.props[name] = value;
    }
    mountTo(range) {
        // range.
        this.range = range;
        this.update()
        // let vdom = this.render();
        // // console.log(this,vdom)
        // // console.log(1111)
        // vdom.mountTo(range);
        // let range = document.createRange();
        // range.setStartAfter()
    }
    update() {
        // let 
        // this.range.deleteContents();
        let vdom = this.render();
        if (this.vdom) {
            // console.log('new' , vdom);
            // console.log('old',this.vdom);
            let isSameNode = (node1, node2) => {
                if (node1.type !== node2.type) {
                    return false
                }
                for (let name in node1.props) {
                    if (typeof node1.props[name] === 'function' && typeof node2.props[name] === 'function' && node1.props[name].toString() === node2.props[name].toString()) {
                        continue
                    }
                    if (typeof node1.props[name] === 'object' && typeof node2.props[name] === 'object' && JSON.stringify(node1.props[name]) === JSON.stringify(node2.props[name])) {
                        continue
                    }
                    if (node1.props[name] !== node2.props[name]) {
                        return false
                    }
                }
                if (Object.keys(node1.props).length !== Object.keys(node2.props).length) {
                    return false
                }
                return true
            }
            let isSameTree = (node1, node2) => {
                if (!isSameNode(node1, node2)) {
                    return false
                }
                if (node1.children.length !== node2.children.length) {
                    return false
                }
                for (let i = 0; i < node1.children.length; i++) {
                    if (!isSameTree(node1.children[i], node2.children[i])) {
                        return false
                    }
                }
                return true
            }
            let replace = (newTree, oldTree) => {
                if (isSameTree(newTree, oldTree)) {
                    return;
                }
                if (!isSameNode(newTree, oldTree)) {
                    newTree.mountTo(oldTree.range)
                } else {
                    for (let i = 0; i < newTree.children.length; i++) {
                        replace(newTree.children[i], oldTree.children[i]);
                    }
                }
            };
            replace(vdom, this.vdom);

        } else {
            vdom.mountTo(this.range);
        }

        this.vdom = vdom;
    }
    appendChild(child) {
        this.children.push(child)
    }
    setState(state) {
        let merge = (oldState, newState) => {
            for (let p in newState) {
                if (typeof newState[p] === 'object' && newState[p] !== null) {
                    if (typeof oldState[p] !== 'object') {
                        if (newState[p] instanceof Array) {
                            oldState[p] = []
                        } else {
                            oldState[p] = {}
                        }

                    }
                    merge(oldState[p], newState[p]);
                } else {
                    oldState[p] = newState[p]
                }
            }
        }
        if (!this.state && state) {
            this.state = {}
        }
        merge(this.state, state);
        console.log(this.state)
        this.update()
    }
}
export const React = {
    createElement(type, attributes, ...children) {
        // console.log(arguments)
        // debugger;
        let el;

        if (typeof type === 'string') {
            // console.log(type)
            el = new Elementwrapper(type);
        } else {
            el = new type;
        }
        // console.log(el)
        // let el;
        for (let k in attributes) {
            el.setAttribute(k, attributes[k]);
        }
        // for (let child of children) {
        //     // console.log(child)
        //     if (typeof child === 'string') {
        //         // const ele = document.createTextNode(child);
        //         console.log(child)
        //         // console.log(new TextWrapper(child))
        //         el.appendChild(new TextWrapper(child));
        //         // el.appendChild(ele);
        //         //  el = new Elementwrapper(type);
        //     } else {
        //         el.appendChild(child);
        //         //  el = new TextWrapper(type);
        //     }
        //     // document.body.appendChild(el);

        // }
        let insertNode = (children) => {
            for (let child of children) {
                if (typeof child === 'object' && child instanceof Array) {
                    insertNode(child)
                } else {
                    if (child === null || child === void 0) {
                        child = ''
                    }
                    if (!(child instanceof Component)
                        && !(child instanceof Elementwrapper)
                        && !(child instanceof TextWrapper)) {
                        child = String(child)
                    }
                    if (typeof child === 'string') {
                        child = new TextWrapper(child)
                    }
                    el.appendChild(child)
                }
            }
        }
        insertNode(children)
        return el;
    },
    render(vdom, el) {
        console.log(el);
        let range = document.createRange();
        if (el.children.length) {
            range.setStartAfter(el.lastChild);
            range.setEndAfter(el.lastChild)
        } else {
            range.setStart(el, 0);
            range.setEnd(el, 0);
        }
        vdom.mountTo(range);
    }
}
