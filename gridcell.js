var lpGridCell = document.createElement('template');
lpGridCell.innerHTML = `
    <style>
        :host {
            display: flex;
        }
        .lp__grid__cell {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-content: center;
            justify-content: flex-start;
            color: #232323;
            padding: 6px;
            text-decoration: none;
            font-family: ProximaNova, "Proxima Nova", Helvetica, Arial, sans-serif;
            position: relative;
        }
        .lp__grid__cell:hover {
            color: #232323;
        }
        .lp__grid__img__container__outer {
            background-size: cover;
            background-repeat: no-repeat;
            position: relative;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-content: center;
            justify-content: center;
        }
        [data-options-cells-type="550"] .lp__grid__img__container__outer {
            width: 100%;
            background: transparent;
        }
        [data-options-cells-type="free"] .lp__grid__img__container__outer {
            width: 100%;
            background: transparent;
        }
        [data-options-cells-type="full"] .lp__grid__img__container__outer,
        [data-options-cells-type="full-outer-text"] .lp__grid__img__container__outer,
        [data-options-cells-type="full-inner-text"] .lp__grid__img__container__outer {
            width: 100%;
            height: 0;
            padding-top: 76.25%;
            overflow: hidden;
            background: url("https://www.bodybuilding.com/images/lpimages/2019/jul/blue_background_mobile1.jpg");
        }
        [data-options-cells-type="product"] .lp__grid__img__container__outer {
            width: 100%;
            height: 0;
            padding-top: 76.25%;
            overflow: hidden;
            background: url("https://www.bodybuilding.com/images/lpimages/2019/jul/blue_background_mobile1.jpg");
        }
        .lp__grid__img__container__inner {
            width: 100%;
            height: 100%;
            margin: 0;
            display: flex;
            flex-direction: row;
            align-content: center;
            justify-content: center;
            overflow: hidden;
        }
        [data-options-cells-type="550"] .lp__grid__img__container__inner,
        [data-options-cells-type="free"] .lp__grid__img__container__inner  {
            align-self: center;
        }
        [data-options-cells-type="full"] .lp__grid__img__container__inner,
        [data-options-cells-type="full-outer-text"] .lp__grid__img__container__inner,
        [data-options-cells-type="full-inner-text"] .lp__grid__img__container__inner {
            align-self: flex-end;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;
        }
        [data-options-cells-type="product"] .lp__grid__img__container__inner {
            align-self: flex-end;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;
            min-height: 134px;
        }
        [data-options-cells-type="free"] .lp__grid__img {
            align-self: center;
            max-height: 94%;
            max-width: 94%;
            margin: 0 auto;
            object-fit: contain;
        }
        [data-options-cells-type="full"] .lp__grid__img,
        [data-options-cells-type="full-outer-text"] .lp__grid__img, 
        [data-options-cells-type="full-inner-text"] .lp__grid__img {
            align-self: center;
            height: 100%;
            max-height: 100%;
            width: 100%;
            max-width: 100%;
        }
        [data-options-cells-type="product"] .lp__grid__img {
            align-self: flex-end;
            max-height: 80%;
            max-width: 47%;
            margin: 0 auto;
            object-fit: contain;
        }
        .lp__grid__text__container {
            width: 96%;
            margin: 10px auto 0;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: center;
            align-content: center;
            align-items: center;
        }
        [data-options-cells-type="full-inner-text"] .lp__grid__text__container {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;
            padding: 12px;
            margin: 0;
        }
        .lp__grid__text__container h4, 
        .lp__grid__text__container h5, 
        .lp__grid__text__container h6, 
        .lp__grid__text__container p {
            width: 100%;
            text-align: center;
            display: block;
            margin: 5px auto;
            padding: 0;
            line-height: 1.1em;
            font-family: ProximaNova, "Proxima Nova", Helvetica, Arial, sans-serif;
        }
        .lp__grid__text__container h4 {
            color: #00aeef;
            font-size: 1.4em;
        }
        .lp__grid__text__container h5 {
            font-size: 1.1em;
            margin: 6px 0;
        }
        .lp__grid__text__container h6 {
            font-size: 1em;
        }
        .lp__grid__text__container p {
            font-size: .9em;
            line-height: 1.3em;
        }
        @media screen and (max-width: 768px) {
            [data-options-cells-type="free"] .lp__grid__img {
                max-height: 100%;
                max-width: 100%;
                width: auto;
            }
        }
    </style>
    <a class="lp__grid__cell">
        <div class="lp__grid__img__container__outer">
            <div class="lp__grid__img__container__inner">
                <img class="lp__grid__img lp__grid__img__src">
            </div>
        </div>
        <div class="lp__grid__text__container">
            <h4 class="lp__grid__cell__text__header__large"></h4>
            <h5 class="lp__grid__cell__text__header__small"></h5>
            <p class="lp__grid__cell__text__para"></p>
        </div>
    </a>
`;
customElements.define('bb-grid-cell', class extends HTMLElement {
    constructor() {
        super();
        var shadowRoot = this.attachShadow({mode: 'open'}); // Attach a shadow root to the element.
        shadowRoot.appendChild(lpGridCell.content.cloneNode(true));
    }
    connectedCallback() {
        var elClassName = "lp__grid__cell";
        var sroot = this.shadowRoot;
        var th = this;
        var container = sroot.children[1];
        var parentAttr = [].filter.call(this.parentElement.attributes, function(at) { return /^data-/.test(at.name); });
        parentAttr.forEach(function (dataitem) {
            container.setAttribute(dataitem.name.toLowerCase(), dataitem.value.toLowerCase());
            th.setAttribute(dataitem.name.toLowerCase(), dataitem.value.toLowerCase());
        });
        var a = [].filter.call(this.attributes, function(at) { return /^data-/.test(at.name); });
        a.forEach(function (dataitem) {
            if (dataitem.name.indexOf("data-bb") < 0) {
                container.setAttribute(dataitem.name.toLowerCase(), dataitem.value.toLowerCase());
            }
            var className = dataitem.name.replace(/-/g, "__").replace("data", elClassName);
            if (dataitem.name.indexOf("data-options") >= 0) {
                container.classList.add(dataitem.name.split("data-options-")[1].replace(/-/g, "__") + "--" + dataitem.value);
            } else if (dataitem.name.indexOf("data-text") >= 0) {
                if (th.hasAttribute(dataitem.name) && dataitem.value.length > 0) {
                    container.getElementsByClassName(className)[0].innerHTML = th.getAttribute(dataitem.name).trim();
                } else if (container.getElementsByClassName(className).length > 0) {
                    container.getElementsByClassName(className)[0].style.display = "none";
                }
            } else if (dataitem.name.indexOf("data-image") >= 0 && dataitem.value.length > 0) {
                container.querySelector(".lp__grid__img__src").setAttribute("src", dataitem.value);
            } else if (dataitem.name.indexOf("data-link") >= 0 && dataitem.value.length > 0) {
                container.setAttribute("href", dataitem.value);
            }
            container.setAttribute("data-bb-category", "promotion");
            container.setAttribute("data-bb-action", "promotionClick");
            container.setAttribute("data-bb-impression", "promotion");
        });
        var textElements = container.querySelectorAll("[class*=text]");
        textElements.forEach(function (el) {
            if (el.innerHTML.length === 0) {
                el.style.display = "none";
            }
        });
    }
});