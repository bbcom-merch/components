var lpTextBox = document.createElement('template');
lpTextBox.innerHTML = `
    <style>
        .bb__text__box {
            width: 100%;
            max-width: 900px;
            margin: 20px auto 0;
            padding: 20px;
            display: grid;
            grid-gap: 14px;
            text-align: center;
            font-family: "Proxima Nova", ProximaNova, Helvetica, Arial, sans-serif;
            font-size: 16px;
            line-height: 16px;
            box-sizing: border-box;
        }
        :host ::slotted(h1) {
            font-size: 2.4em;
            line-height: 2.4em;
        }
    </style>
    <div class="bb__text__box">
        <slot></slot>
    </div>
`;
customElements.define('bb-text-box', class extends HTMLElement {
    constructor() {
        super();
        var shadowRoot = this.attachShadow({mode: 'open'}); // Attach a shadow root to the element.
        shadowRoot.appendChild(lpTextBox.content.cloneNode(true));
    }
    connectedCallback() {
        var sroot = this.shadowRoot;
        var cont = sroot.children[1];
        var a = [].filter.call(this.attributes, function(at) { return /^data-/.test(at.name); });
        a.forEach(function (dataitem) {
            if (dataitem.name.indexOf("data-bb") < 0) {
                cont.setAttribute(dataitem.name.toLowerCase(), dataitem.value.toLowerCase());
            }
        });
        var container = this.shadowRoot.querySelector('.bb__text__box');
        var children = this.childNodes;
        if (children.length > 0 && container) {
            while(container.firstChild) {
                container.removeChild(container.firstChild);
            }
            for (var i = 0; i < children.length; i++) {
                container.appendChild(children[i].cloneNode(true));
            }
        }
    }
});