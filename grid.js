var lpGrid = document.createElement('template');
lpGrid.innerHTML = `
    <style>
        .lp__grid {
            width: 100%;
            margin: 40px auto 0;
            display: grid;
            grid-gap: 14px;
            text-align: center;
            padding: 0;
        }
        [data-options-cells-per-row="6"] {
            grid-template-columns: repeat(6, 1fr);
        }
        [data-options-cells-per-row="5"] {
            grid-template-columns: repeat(5, 1fr);
        }
        [data-options-cells-per-row="4"] {
            grid-template-columns: repeat(4, 1fr);
        }
        [data-options-cells-per-row="3"] {
            grid-template-columns: repeat(3, 1fr);
        }
        [data-options-cells-per-row="2"] {
            grid-template-columns: repeat(2, 1fr);
        }
        [data-options-cells-per-row="1"] {
            grid-template-columns: repeat(1, 1fr);
        }
        @media screen and (max-width: 768px) {
            .lp__grid {
                margin: 30px auto 0;
                grid-gap: 8px;
            }
            [data-options-cells-per-row="6"],
            [data-options-cells-per-row="5"] {
                grid-template-columns: repeat(4, 1fr);
            }
            [data-options-cells-per-row="4"] {
                grid-template-columns: repeat(3, 1fr);
            }
            [data-options-cells-per-row="3"] {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        @media screen and (max-width: 500px) {
            .lp__grid {
                grid-gap: 4px;
            }

            [data-options-cells-per-row="6"] {
                grid-template-columns: repeat(3, 33.3333%);
            }
            
            [data-options-cells-per-row="5"],
            [data-options-cells-per-row="4"] {
                grid-template-columns: repeat(2, 1fr);
            }
            [data-options-cells-per-row="3"] {
                grid-template-columns: repeat(1, 1fr);
            }
        }
    </style>
    <div class="lp__grid">
        <slot></slot>
    </div>
`;
customElements.define('bb-grid', class extends HTMLElement {
    constructor() {
        super();
        var shadowRoot = this.attachShadow({mode: 'open'}); // Attach a shadow root to the element.
        shadowRoot.appendChild(lpGrid.content.cloneNode(true));
    }
    connectedCallback() {
        var sroot = this.shadowRoot;
        var container = sroot.children[1];
        var a = [].filter.call(this.attributes, function(at) { return /^data-/.test(at.name); });
        a.forEach(function (dataitem) {
            if (dataitem.name.indexOf("data-bb") < 0) {
                container.setAttribute(dataitem.name.toLowerCase(), dataitem.value.toLowerCase());
            }
        });
    }
});