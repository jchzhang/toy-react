class Elementwrapper {
    constructor(type) {
        this.element = document.createElement(type);
    }
    setAttribute(name, value) {
        if (name.match(/^on([\s\S]+)$/)) {
            let eventName = RegExp.$1.replace(/^[\s\S]/, s => s.toLowerCase());
            this.element.addEventListener(eventName, value)
        }
        if (name === 'className') {
            name = 'class'
        }
        this.element.setAttribute(name, value)
    }
    appendChild(vchild) {
        // console.log(vchild);
        // console.log(1111)
        // console.log(vchild + '........')

        let range = document.createRange();
        if (this.element.children.length) {
            range.setStartAfter(this.element.lastChild);
            range.setEndAfter(this.element.lastChild)
        } else {
            range.setStart(this.element, 0);
            range.setEnd(this.element, 0);
        }
        vchild.mountTo(range);
    }
    mountTo(range) {
        range.deleteContents();
        range.insertNode(this.element);
        // parent.appendChild(this.element);
    }
};
class TextWrapper {
    constructor(type) {
        this.element = document.createTextNode(type);
    }
    mountTo(range) {
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
        this.range.deleteContents();
        let vdom = this.render();
        vdom.mountTo(this.range);
    }
    appendChild(child) {
        this.children.push(child)
    }
    setState(state) {
        let merge = (oldState, newState) => {
            for (let p in newState) {
                if (typeof newState[p] === 'object') {
                    if (typeof oldState[p] !== 'object') {
                        oldState[p] = {}
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
