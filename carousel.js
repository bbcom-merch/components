var lpCarouselGlide = document.createElement('template');
lpCarouselGlide.innerHTML = `
    <style>
        :host {
            margin: 40px auto 20px;
        }
        :host, .lp__carousel {
            width: 100%;
            font-family: ProximaNova, "Proxima Nova", Helvetica, Arial, sans-serif;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
        }
        .lp__carousel__banner {
            width: 250px;
            min-width: 250px;
            background-image: url("https://www.bodybuilding.com/images/home/2019/carousel-2.jpg");
            background-repeat: no-repeat;
            background-size: cover;
            padding: 34px 10px;
            display: flex;
            flex-direction: column;
            align-content: center;
            justify-content: center;
            box-sizing: border-box;
        }
        .lp__carousel__banner--false .lp__carousel__banner {
            display: none;
        }
        .lp__carousel__glide__text__header {
            width: 100%;
            text-align: center;
            color: #FFF;
            text-transform: uppercase;
            font-family: ProximaNovaSemiBold,Arial,sans-serif;
            font-size: 1.8em;
            line-height: 1.1em;
            margin: 14px auto;
        }
        .lp__carousel__banner--true .lp__carousel__glide__text__header--mobile {
            display: none;
        }
        .lp__carousel__banner--false .lp__carousel__glide__text__header {
            color: initial;
        }
        .lp__carousel__glide__text__button {
            margin: 10px auto;
            display: inline-block;
            border: 2px solid #fff;
            padding: 10px 25px;
            color: #fff;
            border-radius: 4px;
            font-family: ProximaNovaSemiBold,Arial,sans-serif;
            font-size: 1.2em;
            text-align: center;
            transition: background-color .2s,color .2s;
            text-transform: uppercase;
            text-decoration: none;
        }
        .lp__carousel__glide__text__button:hover {
            background-color: #FFF;
            color: #00aeef;
        }
        :host .lp__carousel__outer {
            width: calc(100% - 250px);
        }
        :host .lp__carousel__banner--false .lp__carousel__outer {
            width: 100%;
        }
        .glide {
            position: relative;
            width: 100%;
            box-sizing: border-box;
            -ms-flex: 1 1 auto;
        }
        .glide * {
            box-sizing: inherit;
        }
        .glide__track {
            height: 100%;
        }
        .glide__slides,
        .glide__track {
            overflow: hidden;
            width: 100%;
        }
        .glide__slides {
            position: relative;
            width: 100%;
            height: 100%;
            flex: 1;
            list-style: none;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
            -ms-touch-action: pan-Y;
            touch-action: pan-Y;
            padding: 0;
            white-space: nowrap;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
            will-change: transform;
        }
        .glide__slide,
        .glide__slides--dragging {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
        .glide__arrows,
        .glide__bullets {
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
        .glide--rtl {
            direction: rtl;
        }
        .glide__arrow {
            position: absolute;
            display: block;
            top: 50%;
            z-index: 2;
            color: #fff;
            text-transform: uppercase;
            padding: 9px 12px;
            background-color: rgba(255, 255, 255, .8);
            border: 2px solid hsla(0, 0%, 100%, .5);
            border-radius: 4px;
            box-shadow: 0 .25em .5em 0 rgba(0, 0, 0, .1);
            text-shadow: 0 .25em .5em rgba(0, 0, 0, .1);
            opacity: 1;
            cursor: pointer;
            transition: opacity .15s ease, border .3s ease-in-out;
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
            line-height: 1;
        }
        .glide__arrow:focus {
            outline: none;
        }
        .glide__arrow:hover {
            border-color: #fff;
        }
        .glide__arrow--left {
            left: 2em;
        }
        .glide__arrow--right {
            right: 2em;
        }
        .glide__arrow--disabled {
            opacity: .33;
        }
        .glide__bullets {
            position: absolute;
            z-index: 2;
            bottom: 2em;
            left: 50%;
            display: -ms-inline-flexbox;
            display: inline-flex;
            list-style: none;
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
        }
        .glide__bullet {
            background-color: hsla(0, 0%, 100%, .5);
            width: 9px;
            height: 9px;
            padding: 0;
            border-radius: 50%;
            border: 2px solid transparent;
            transition: all .3s ease-in-out;
            cursor: pointer;
            line-height: 0;
            box-shadow: 0 .25em .5em 0 rgba(0, 0, 0, .1);
            margin: 0 .25em;
        }
        .glide__bullet:focus {
            outline: none;
        }
        .glide__bullet:focus,
        .glide__bullet:hover {
            border: 2px solid #fff;
            background-color: hsla(0, 0%, 100%, .5);
        }
        .glide__bullet--active {
            background-color: #fff;
        }
        .glide--swipeable {
            cursor: grab;
            cursor: -webkit-grab;
        }
        .glide--dragging {
            cursor: grabbing;
            cursor: -webkit-grabbing;
        }
        .glide__slides {
            padding: 0;
            margin: 0;
        }
        .glide__arrow--disabled {
            opacity: 0;
        }
        .Carousel-leftArrow {
            left: 0;
            border: none;
            border-radius: 0 4px 4px 0;
            width: 40px;
            height: 60px;
            padding: 0;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-pack: center;
            justify-content: center;
            -ms-flex-align: center;
            align-items: center;
            text-indent: -999px;
            box-shadow: 3px 3px 6px rgba(0, 0, 0, .23);
            margin-top: -30px;
        }
        .Carousel-leftArrow:after {
            content: "";
            display: block;
            width: 15px;
            height: 15px;
            border-left: 2px solid #00aeef;
            border-bottom: 2px solid #00aeef;
            -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
        }
        .Carousel-rightArrow {
            right: 0;
            border: none;
            border-radius: 4px 0 0 4px;
            color: #00aeef;
            width: 40px;
            height: 60px;
            padding: 0;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-pack: center;
            justify-content: center;
            -ms-flex-align: center;
            align-items: center;
            text-indent: -999px;
            box-shadow: -3px 3px 6px rgba(0, 0, 0, .23);
            margin-top: -30px;
        }
        .Carousel-rightArrow:after {
            content: "";
            display: block;
            width: 15px;
            height: 15px;
            border-right: 2px solid #00aeef;
            border-bottom: 2px solid #00aeef;
            -webkit-transform: rotate(-45deg);
            transform: rotate(-45deg);
        }
        .ProductCard, .top10__product-inner {
            display: -ms-flexbox;
            display: flex;
            -ms-flex-direction: column;
            flex-direction: column;
            -ms-flex-align: start;
            align-items: flex-start;
            -ms-flex-pack: start;
            justify-content: flex-start;
            background-color: #fff;
            height: 100%;
            padding: 15px;
            border: 1px solid #d8d8d8;
            transition: box-shadow .2s;
            text-decoration: none;
            overflow-wrap: break-word;
        }
        .ProductCard:hover {
            box-shadow: 2px 4px 4px 0 rgba(0, 0, 0, .2)
        }
        .ProductCard-imgContainer, .product__img-wrapper {
            display: -ms-flexbox;
            display: flex;
            margin: 0 auto;
            -ms-flex-align: center;
            align-items: center;
            height: 130px;
            order: 1;
        }
        .glide__slides {
            white-space: normal;
        }
        .ProductCard-name, .product__name {
            color: #00aeef;
            margin: 10px 0 5px;
            font-size: 16px;
            width: 100%;
            text-decoration: none;
            order: 2;
        }
        .ProductCard-brand,
        .ProductCard-name {
            font-family: ProximaNova, Arial, sans-serif
        }
        .ProductCard-brand, .product__brand {
            color: #3f3f3f;
            font-size: 14px;
            margin: 5px 0 10px;
            order: 3;
        }
        .ProductCard-flexSpacer {
            -ms-flex: 1 1 auto;
            flex: 1 1 auto
        }
        .ProductCard-violator, .product__vio-text {
            color: #62bd19;
            font-size: 14px;
            margin: 0;
            font-family: ProximaNova, Arial, sans-serif;
            order: 4;
        }
        .ProductCard-price, .product__price {
            font-size: 24px;
            margin: 5px 0;
            font-weight: 600;
            color: #3f3f3f;
            font-family: ProximaNovaSemiBold, Arial, sans-serif;
            order: 5;
        }
        .product__price {
            margin: 10px 0;
        }
        .ProductCard-ratingContainer, .ProductCard-ratingContainer {
            margin: 0 5px 0 0;
            color: #303030;
            font-size: 12px;
            font-family: ProximaNova, Arial, sans-serif;
            order: 6;
        }
        .product .product__rating-n-view-product {
            order: 6;
        }
        .ProductCard-rating, .product__rating__rating-badge {
            padding: 5px;
            border: 1px solid #979797;
            border-radius: 50%/15%;
            margin: 0 5px 0 0;
            display: inline-block;
            font-family: ProximaNovaSemiBold, Arial, sans-serif
        }
        .ProductCard-totalRatings {
            display: inline-block;
            margin: 5px 0 0 3px
        }
        .product {
            height: 100%;
        }
        .product .product__view-product-link, .product .product__description {
            display: none;
        }
        /* ------------------ MEDIA QUERY ------------------ */
        @media screen and (max-width: 870px) {
            .lp__carousel__banner {
                width: 200px;
                min-width: 200px;
                padding: 20px 8px;
            }
            :host .lp__carousel__outer {
                width: calc(100% - 216px);
            }
        }
        /* ------------------ MEDIA QUERY ------------------ */
        @media screen and (max-width: 768px) {
            .lp__carousel__banner--true .lp__carousel__glide__text__header--mobile {
                display: inherit;
            }
            .lp__carousel__banner {
                display: none
            }
            :host .lp__carousel__outer {
                width: 100%;
            }
        }
    </style>
    <div class="lp__carousel lp__carousel__glide">
        <bb-text-header class="lp__carousel__glide__text__header--mobile"
            data-text-header=""
            data-text-link=""
            data-link=""
            data-options-hide-on-desktop="true"
        >
        </bb-text-header>
        <div class="lp__carousel__banner">
            <h2 class="lp__carousel__glide__text__header"></h2>
            <a class="lp__carousel__glide__text__button"></a>
        </div>
        <div class="lp__carousel__outer glide">
            <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
            </ul>
            <div class="glide__arrows" data-glide-el="controls">
                <button data-bb-action="previous" data-bb-label="carousel-previous" class="glide__arrow glide__arrow--left Carousel-leftArrow" data-glide-dir="<">
                </button>
                <button data-bb-action="next" data-bb-label="carousel-next" class="glide__arrow glide__arrow--right Carousel-rightArrow" data-glide-dir=">">
                </button>
            </div>
        </div>
    </a>
`;
customElements.define('bb-carousel-glide', class extends HTMLElement {
    constructor() {
        super();
        var shadowRoot = this.attachShadow({
            mode: 'open'
        });
        shadowRoot.appendChild(lpCarouselGlide.content.cloneNode(true));
    }
    connectedCallback() {
        var elClassName = "lp__carousel__glide";
        var carouselBaseConfig = {
            type: 'slider',
            bound: true,
            startAt: 0,
            perTouch: 1,
            swipeThreshold: 40,
            animationDuration: 300,
            gap: 15,
            rewind: false
        };
        var carouselConfigPerView = {
            6: {
                perView: 6,
                breakpoints: {
                    900: {
                        perView: 5,
                        peek: {before: 0, after: 40}
                    },
                    700: {
                        perView: 4,
                        peek: {before: 0, after: 60}
                    },
                    500: {
                        perView: 2,
                        peek: {before: 0, after: 0}
                    }
                }
            },
            5: {
                perView: 5,
                breakpoints: {
                    900: {
                        perView: 4,
                        peek: {before: 0, after: 40}
                    },
                    700: {
                        perView: 3,
                        peek: {before: 0, after: 60}
                    },
                    500: {
                        perView: 2,
                        peek: {before: 0, after: 0}
                    }
                }
            },
            4: {
                perView: 4,
                breakpoints: {
                    900: {
                        perView: 3,
                        peek: {before: 0, after: 40}
                    },
                    700: {
                        perView: 2,
                        peek: {before: 0, after: 60}
                    },
                    500: {
                        perView: 2,
                        peek: {before: 0, after: 0}
                    }
                }
            },
            3: {
                perView: 3,
                breakpoints: {
                    900: {
                        perView: 2,
                        peek: {before: 0, after: 40}
                    },
                    500: {
                        perView: 1,
                        peek: {before: 0, after: 40}
                    }
                }
            },
            2: {
                perView: 2,
                breakpoints: {
                    500: {
                        perView: 1,
                        peek: {before: 0, after: 40}
                    }
                }
            }
        };
        var sroot = this.shadowRoot;
        var th = this;
        var container = sroot.children[1];
        var perView = this.getAttribute("data-option-number-per-view") ? this.getAttribute("data-option-number-per-view") : 4;
        var perViewObj = Object.assign(carouselConfigPerView[perView], carouselBaseConfig);
        var a = [].filter.call(this.attributes, function (at) {
            return /^data-/.test(at.name);
        });
        a.forEach(function (dataitem) {
            var className = dataitem.name.replace(/-/g, "__").replace("data", elClassName);
            if (dataitem.name.indexOf("data-bb") < 0) {
                container.setAttribute(dataitem.name.toLowerCase(), dataitem.value.toLowerCase());
            }
            if (dataitem.name.indexOf("data-options") >= 0) {
                if (dataitem.name === "data-options-show-banner") {
                    container.classList.add("lp__carousel__banner--" + dataitem.value);
                    sroot.querySelector(".lp__carousel__glide__text__header--mobile").setAttribute("data-options-hide-on-desktop", "false");
                }
            }
            if (dataitem.name.indexOf("data-text") >= 0) {
                if (th.hasAttribute(dataitem.name) && dataitem.value.length > 0) {
                    container.getElementsByClassName(className)[0].textContent = th.getAttribute(dataitem.name).trim();
                    if (container.getElementsByClassName("lp__carousel__glide__text__header--mobile")[0].hasAttribute(dataitem.name)) {
                        container.getElementsByClassName("lp__carousel__glide__text__header--mobile")[0].setAttribute(dataitem.name, dataitem.value);
                    }
                    if (dataitem.name === "data-text-button") {
                        container.getElementsByClassName("lp__carousel__glide__text__header--mobile")[0].setAttribute("data-text-link", dataitem.value);
                    }
                } else if (container.getElementsByClassName(className).length > 0) {
                    container.getElementsByClassName(className)[0].style.display = "none";
                }
            }
            if (dataitem.name.indexOf("data-link") >= 0 && dataitem.value.length > 0) {
                container.getElementsByTagName("a")[0].setAttribute("href", dataitem.value);
                container.getElementsByClassName("lp__carousel__glide__text__header--mobile")[0].setAttribute("data-link", dataitem.value);
            }
        });
        setTimeout(function () {
            var list = sroot.querySelector(".glide__slides");
            for (var c in th.children) {
                var child = th.children[c];
                if (typeof child === "object") {
                    var clone = child.cloneNode(true);
                    list.appendChild(clone);
                }
            }
            new Glide(sroot.querySelector('.glide'), perViewObj).mount();
        }, 150);
    }
});