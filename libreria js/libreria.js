export function createElement(type, atrList = {}, children = [  
]){
    let elem = document.createElement(type);
    let keys = Object.keys(atrList);
    keys.map(k => elem.setAttribute(k,atrList[k]));
    children.map(child => renderChild(elem,child));
    return elem;
}//createElement

function renderChild(elem,child){
    if(typeof child == "string"){
        elem.innerHTML += child;
        return
    }
    elem.appendChild(child);
}//renderChild

export function render(elemento, DOMelement){
    DOMelement.appendChild(elemento);
}//render

