var lpCarouselCardBodyFit = document.createElement('template');
lpCarouselCardBodyFit.innerHTML = `
    <style>
        :host {
            height: 100%;
        }
        .carousel__card__link--bodyfit {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: center;
            align-items: center;
            height: 100%;
            text-decoration: none;
            text-align: center;
        }
        .carousel__bodyfit__card__image__container {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-content: center;
            flex: 2;
        }
        .carousel__bodyfit__card__image {
            width: 100%;
            object-fit: contain;
            align-self: center;
        }
        .carousel__bodyfit__card__text__container {
            width: 100%;
            padding: 5px;
            text-align: center;
            font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
            color: #232323;
            flex: 1;
        }
        .carousel__card__text__inner {
            border: 1px solid #E5E5E5;
            border-top: none;
            margin-top: 0px;
            padding: 14px 14px 6px;
            display: flex;
            flex-direction: column;
            align-content: center;
            justify-content: flex-start;
            flex: 1;
            width: 100%;
            box-sizing: border-box;
        }
        .carousel__card__link--bodyfit__text__header {
            font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
            font-weight: bold;
            color: #232323;
            margin: 10px auto;
            font-size: 1.1em;
        }
        .carousel__card__link--bodyfit__text__para {
            margin: 0;
            line-height: 1.1em;
            color: #232323;
        }
        .carousel__card__link--bodyfit__text__timeframe {
            font-weight: 600;
        }
    </style>
    <a class="carousel__card__link--bodyfit" data-bb-category="bodyfit" data-bb-impression="promotion" data-bb-action="promotionClick">
        <div class="carousel__card__img__container">
            <img class="carousel__bodyfit__card__image">
        </div>
        <div class="carousel__card__text">
            <div class="carousel__card__text__inner">
                <h3 class="carousel__card__link--bodyfit__text__header">Commit to Lifting</h3>
                <p class="carousel__card__link--bodyfit__text__para">Build strength, muscle, and confidence with one of our most
                    popular programs.</p>
                <p class="carousel__card__link--bodyfit__text__timeframe">Beginner | 12 Weeks</p>
            </div>
        </div>
    </a>
`;
customElements.define('bb-carousel-card-bodyfit', class extends HTMLElement {
    constructor() {
        super();
        var shadowRoot = this.attachShadow({mode: 'open'}); // Attach a shadow root to the element.
        shadowRoot.appendChild(lpCarouselCardBodyFit.content.cloneNode(true));
    }
    connectedCallback() {
        var sroot = this.shadowRoot;
        var th = this;
        var container = sroot.children[1];
        var containerClass = container.classList[0];
        var a = [].filter.call(this.attributes, function(at) { return /^data-/.test(at.name); });
        a.forEach(function (dataitem) {
            if (dataitem.name.indexOf("data-bb") < 0) {
                container.setAttribute(dataitem.name.toLowerCase(), dataitem.value.toLowerCase());
            }
            var className = dataitem.name.replace(/-/g, "__").replace("data", containerClass);
            if (dataitem.name.indexOf("data-text") >= 0) {
                if (th.hasAttribute(dataitem.name) && dataitem.value.length > 0) {
                    container.getElementsByClassName(className)[0].textContent = th.getAttribute(dataitem.name).trim();
                }
            }
            container.getElementsByClassName("carousel__bodyfit__card__image")[0].setAttribute("src", container.getAttribute("data-image"));
            container.getElementsByClassName("carousel__bodyfit__card__image")[0].setAttribute("alt", container.getAttribute("data-image-alt"));
            container.setAttribute("href", container.getAttribute("data-link"));
        });
    }
});