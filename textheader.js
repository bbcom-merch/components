var lpTextHeader = document.createElement('template');
lpTextHeader.innerHTML = `
    <style>
        :host {
            width: 100%;
            padding: 0;
        }
        .lp__text__header {
            width: 100%;
            margin: 10px auto 14px;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-between;
            font-family: ProximaNova, "Proxima Nova", Helvetica, Arial, sans-serif;
            font-size: 16px;
            line-height: 16px;
        }
        .lp__text__header h3 {
            display: block;
            margin: 0;
            font-size: 1.6em;
            line-height: 1em;
            font-weight: 700;
        }
        .lp__text__header a {
            display: block;
            margin: 0 0 0 5px;
            text-decoration: none;
            font-size: 1em;
            font-weight: 400;
            align-self: center;
        }
        .lp__hide__on__desktop {
            display: none;
        }
        /* ------------------ MEDIA QUERY ------------------ */
        @media screen and (max-width: 768px) {
            .lp__text__header {
                padding: 0 6px;
            }
            .lp__hide__on__desktop {
                display: flex;
            }
            .lp__text__header h3 {
                font-size: 1.3em;
                font-weight: 600;
            }
        }
    </style>
    <div class="lp__text__header">
        <h3 class="lp__text__header__text__header"></h3>
        <a class="lp__text__header__text__link lp__text__header__link"></a>
    </div>
`;
customElements.define('bb-text-header', class extends HTMLElement {
    constructor() {
        super();
        var shadowRoot = this.attachShadow({mode: 'open'}); // Attach a shadow root to the element.
        shadowRoot.appendChild(lpTextHeader.content.cloneNode(true));
    }
    connectedCallback() {
        var elClassName = "lp__text__header";
        var sroot = this.shadowRoot;
        var th = this;
        var container = sroot.children[1];
        var a = [].filter.call(this.attributes, function(at) { return /^data-/.test(at.name); });
        a.forEach(function (dataitem) {
            if (dataitem.name.indexOf("data-bb") < 0) {
                container.setAttribute(dataitem.name.toLowerCase(), dataitem.value.toLowerCase());
            }
            var className = dataitem.name.replace(/-/g, "__").replace("data", elClassName);
            if (dataitem.name.indexOf("data-options") >= 0) {
                if (dataitem.name === "data-options-hide-on-desktop" && dataitem.value === "true") {
                    container.classList.add("lp__hide__on__desktop");
                }
            } else if (dataitem.name.indexOf("data-text") >= 0) {
                if (th.hasAttribute(dataitem.name) && dataitem.value.length > 0) {
                    container.getElementsByClassName(className)[0].textContent = th.getAttribute(dataitem.name).trim();
                } else if (container.getElementsByClassName(className).length > 0) {
                    container.getElementsByClassName(className)[0].style.display = "none";
                }
            } else if (dataitem.name.indexOf("data-link") >= 0 && dataitem.value.length > 0) {
                container.querySelector(".lp__text__header__link").setAttribute("href", dataitem.value);
            }
        });
    }
});