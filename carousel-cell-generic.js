var lpCarouselCardGeneric = document.createElement('template');
lpCarouselCardGeneric.innerHTML = `
    <style>
        :host {
            height: 100%;
        }
        .carousel__generic__card {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: center;
            align-items: center;
            height: 100%;
            text-decoration: none;
        }
        .carousel__generic__card__image__container {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-content: center;
            flex: 2;
        }
        .carousel__generic__card__image {
            max-width: 90%;
            max-height: 96%;
            object-fit: contain;
            align-self: center;
        }
        .carousel__generic__card__text__container {
            width: 100%;
            padding: 5px;
            text-align: center;
            font-family: ProximaNova, "Proxima Nova", Helvetica, Arial, sans-serif;
            color: #232323;
            flex: 1;
        }
        .carousel__generic__card__text__header {
            font-family: ProximaNova, "Proxima Nova", Helvetica, Arial, sans-serif;
            font-weight: 400;
            color: #232323;
            margin: 10px auto;
        }
    </style>
    <a class="carousel__generic__card">
        <div class="carousel__generic__card__image__container">
            <img class="carousel__generic__card__image">
        </div>
        <div class="carousel__generic__card__text__container">
            <h4 class="carousel__generic__card__text__header"></h4>
        </div>
    </a>
`;
customElements.define('bb-carousel-card-generic', class extends HTMLElement {
    constructor() {
        super();
        var shadowRoot = this.attachShadow({mode: 'open'}); // Attach a shadow root to the element.
        shadowRoot.appendChild(lpCarouselCardGeneric.content.cloneNode(true));
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
            container.getElementsByClassName("carousel__generic__card__image")[0].setAttribute("src", container.getAttribute("data-image"));
            container.getElementsByClassName("carousel__generic__card__image")[0].setAttribute("alt", container.getAttribute("data-image-alt"));
            container.setAttribute("href", container.getAttribute("data-link"));
        });
    }
});