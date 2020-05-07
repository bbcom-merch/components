var lpLandingPage = document.createElement('template');
lpLandingPage.innerHTML = `
    <style>
        :host {
            padding-bottom: 40px;
            box-sizing: border-box;
        }
        :host > * {
            box-sizing: border-box;
        }
        :host, .landing__page {
            width: 100%;
            max-width: 1170px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-content: center;
            justify-content: flex-start;
            position: relative;
            font-size: 16px;
            line-height: 16px;
            box-sizing: border-box;
        }
        :host h1 {
            font-size: 8em;
        }
    </style>
    <div class='landing__page'>
        <slot></slot>
    </div>
`;
customElements.define('bb-landing-page', class extends HTMLElement {
    constructor() {
        super();
        var shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(lpLandingPage.content.cloneNode(true));
    }
    connectedCallback() {
        var sroot = this.shadowRoot;
        var container = sroot.children[1];
        var a = [].filter.call(this.attributes, function(at) { return /^data-/.test(at.name); });
        a.forEach(function (dataitem) {
            container.setAttribute(dataitem.name.toLowerCase(), dataitem.value.toLowerCase());
        });
    }
});