class Elementwrapper {
    constructor(type) {
        this.element = document.createElement(type);
    }
    setAttribute(name, value) {
        this.element.setAttribute(name, value)
    }
    appendChild(vchild) {
        // console.log(vchild);
        // console.log(1111)
        // console.log(vchild + '........')
        vchild.mountTo(this.element);
    }
    mountTo(parent) {
        parent.appendChild(this.element);
    }
};
class TextWrapper {
    constructor(type) {
        this.element = document.createTextNode(type);
    }
    mountTo(parent) {
        parent.appendChild(this.element);
    }
};
export class Component {
    constructor() {
        this.children = []
    }
    setAttribute(name, value) {
        this[name] = value
    }
    mountTo(parent) {
        let vdom = this.render();
        // console.log(this,vdom)
        // console.log(1111)
        vdom.mountTo(parent);
    }
    appendChild(child) {
        this.children.push(child)
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
        for (let child of children) {
            // console.log(child)
            if (typeof child === 'string') {
                // const ele = document.createTextNode(child);
                console.log(child)
                // console.log(new TextWrapper(child))
                el.appendChild(new TextWrapper(child));
                // el.appendChild(ele);
                //  el = new Elementwrapper(type);
            } else {
                el.appendChild(child);
                //  el = new TextWrapper(type);
            }
            // document.body.appendChild(el);

        }

        return el;
    },
    render(vdom, el) {
        console.log(vdom);
        vdom.mountTo(el);
    }
}
