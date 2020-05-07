var lpBanner = document.createElement('template');
lpBanner.innerHTML = `
    <style>
        :host{
            overflow: hidden;
            margin: 0 auto 20px;
            display: block;
            width: 100%;
        }
        .lp__banner {
            width: 100%;
            max-width: 1920px;
            background-color: #00aeef;
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
            position: relative;
            box-sizing: border-box;
            font-family: ProximaNova, "Proxima Nova", Helvetica, Arial, sans-serif;
            text-align: center;
            display: block;
            text-decoration: none;
            position: relative;
            color: #FFF;
            font-size: 16px;
            line-height: 16px;
        }
        .lp__banner__style__hero {
            margin: 0 auto;
        }
        .lp__banner__style__banner {
            margin: 40px auto 0;
        }
        .lp__banner__background {
            width: 100%;
            height: 100%;
            min-height: 100%;
            overflow: hidden;
            display: flex;
            flex: 1;
        }
        .lp__banner__background__picture {
            width: 100%;
            height: 100%;
            display: flex;
        }
        .lp__banner__template__background__true .lp__banner__background__picture {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        .lp__banner__background__img {
            width: 100%;
            object-fit: cover; 
            height: auto;
        }
        .lp__banner__template__background__true .lp__banner__background__img {
            object-fit: inherit;
        }
        .lp__banner__text__overlay {
            position: relative;
            top: 0;
            left: 0;
            transform: none;
        }
        .lp__banner__user__background__true .lp__banner__text__overlay {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        .lp__banner__text {
            width: 100%;
            margin: 0 auto;
            padding: 20px 14px;
            display: none;
            box-sizing: border-box;
        }
        .lp__banner__text__header {
            width: 100%;
            margin: 10px auto;
            font-size: 1em;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            align-content: center;
            padding: 0;
        }
        .lp__banner__text__line1 {
            font-size: 2.6em;
            line-height: 1em;
            margin: 4px auto;
        }
        .lp__banner__text__line2 {
            font-size: 3.4em;
            line-height: 1em;
            margin: 4px auto;
        }
        .lp__banner__text__line3 {
            font-size: 2.2em;
            line-height: 1em;
            margin: 4px auto;
        }
        .lp__banner__text__line4 {
            max-width: 800px;
            font-size: 1.2em;
            line-height: 1.2em;
            margin: 6px auto;
            text-align: center;
        }
        .lp__banner__text__disclaimer {
            position: absolute;
            bottom: 4px;
            right: 6px;
            margin: 0;
            padding: 0;
        }
        .lp__banner__text__button {
            display: inline-block;
            padding: 10px 20px;
            margin: 8px auto;
            font-size: 1.2em;
            line-height: 1em;
            border-radius: 4px;
            background-color: #00aeef;
        }
        [data-color-background="bb-blue"] {
            background-color: #00aeef;
        }
        [data-color-background="blue"] {
            background-color: #1A3D79;
        }
        [data-color-background="green"] {
            background-color: #2ECC70;
        }
        [data-color-background="disabled"] {
            background-color: #c8c8c8;
        }
        [data-color-background="disabled"]:hover {
            background-color: #c8c8c8;
        }
        [data-color-background="white"] {
            background-color: #FFF;
        }
        [data-color-background="black"] {
            background-color: #000;
        }
        [data-color-text="bb-blue"] {
            color: #00aeef;
        }
        [data-color-text="blue"] {
            color: #1A3D79;
        }
        [data-color-text="green"] {
            color: #2ECC70;
        }
        [data-color-text="disabled"] {
            color: #c8c8c8;
        }
        [data-color-text="white"] {
            color: #FFF;
        }
        [data-color-text="black"] {
            color: #000;
        }
        /* ------------------ MEDIA QUERY ------------------ */
        @media screen and (max-width: 950px) {
            .lp__banner__text__line1 {
                font-size: 2.2em;
            }
            .lp__banner__text__line2 {
                font-size: 2.8em;
            }
            .lp__banner__text__line3 {
                font-size: 2em;
            }
        }
        /* ------------------ MEDIA QUERY ------------------ */
        @media screen and (max-width: 768px) {
            .lp__banner__text__line1 {
                font-size: 2em;
            }
            .lp__banner__text__line2 {
                font-size: 2.4em;
            }
            .lp__banner__text__line3 {
                font-size: 1.8em;
            }
        }
        /* ------------------ MEDIA QUERY ------------------ */
        @media screen and (max-width: 500px) {
            .lp__banner__text {
                padding: 14px 8px;
            }
            .lp__banner__text__header {
                margin: 6px auto 6px;
            }
            .lp__banner__text__line1 {
                font-size: 1.6em;
            }
            .lp__banner__text__line2 {
                font-size: 1.7em;
            }
            .lp__banner__text__line3 {
                font-size: 1.5em;
            }
            .lp__banner__text__line4 {
                font-size: 1em;
                line-height: 1.3em;
            }
        }
    </style>
    <a class="lp__banner">
        <div class="lp__banner__background">
            <picture class="lp__banner__background__picture">
                <source class="lp__banner__image__background__desktop" srcset="" media="(min-width: 768px)">
                <img class="lp__banner__background__img lp__banner__image__background__mobile"/>
            </picture>
        </div>
        <div class="lp__banner__text">
            <h1 class="lp__banner__text__header">
                <span class="lp__banner__text__line1"></span>
                <span class="lp__banner__text__line2"></span>
                <span class="lp__banner__text__line3"></span>
            </h1>
            <p class="lp__banner__text__line4"></p>
            <div class="lp__banner__text__button lp__banner__button__link"></div>
            <p class="lp__banner__text__disclaimer"></p>
        </div>
    </a>
`;
customElements.define('bb-lp-banner', class extends HTMLElement {
    constructor() {
        super();
        var shadowRoot = this.attachShadow({mode: 'open'}); // Attach a shadow root to the element.
        shadowRoot.appendChild(lpBanner.content.cloneNode(true));
    }
    connectedCallback() {
        var backgrounds = {
            "birthday": {
                desktop: "https://www.bodybuilding.com/images/2020/april/04-01-customer-apprec-headers-desktop.jpg",
                mobile: "https://www.bodybuilding.com/images/2020/april/04-01-customer-apprec-headers-mobile.jpg"
            },
            1: {
                desktop: "https://www.bodybuilding.com/images/lpimages/optimization/evergreen-header-01.jpg",
                mobile: "https://www.bodybuilding.com/images/merch/landingpages/components/header-bg/2020-evergreen-header-01-mobile.jpg"
            },
            2: {
                desktop: "https://www.bodybuilding.com/images/lpimages/optimization/evergreen-header-02.jpg",
                mobile: "https://www.bodybuilding.com/images/merch/landingpages/components/header-bg/2020-evergreen-header-02-mobile.jpg"
            },
            3: {
                desktop: "https://www.bodybuilding.com/images/lpimages/optimization/evergreen-header-03.jpg",
                mobile: "https://www.bodybuilding.com/images/merch/landingpages/components/header-bg/2020-evergreen-header-03-mobile.jpg"
            },
            4: {
                desktop: "https://www.bodybuilding.com/images/lpimages/optimization/evergreen-header-04.jpg",
                mobile: "https://www.bodybuilding.com/images/merch/landingpages/components/header-bg/2020-evergreen-header-04-mobile.jpg"
            },
            5: {
                desktop: "https://www.bodybuilding.com/images/lpimages/optimization/evergreen-header-05.jpg",
                mobile: "https://www.bodybuilding.com/images/merch/landingpages/components/header-bg/2020-evergreen-header-05-mobile.jpg"
            },
            6: {
                desktop: "https://www.bodybuilding.com/images/lpimages/optimization/evergreen-header-06.jpg",
                mobile: "https://www.bodybuilding.com/images/merch/landingpages/components/header-bg/evergreen-header-06-mobile.jpg"
            },
            7: {
                desktop: "https://www.bodybuilding.com/images/lpimages/optimization/evergreen-header-07.jpg",
                mobile: "https://www.bodybuilding.com/images/merch/landingpages/components/header-bg/evergreen-header-07-mobile.jpg"
            },
            8: {
                desktop: "https://www.bodybuilding.com/images/lpimages/optimization/evergreen-header-08.jpg",
                mobile: "https://www.bodybuilding.com/images/merch/landingpages/components/header-bg/2020-evergreen-header-08-mobile.jpg"
            },
            9: {
                desktop: "https://www.bodybuilding.com/images/lpimages/optimization/evergreen-header-09.jpg",
                mobile: "https://www.bodybuilding.com/images/merch/landingpages/components/header-bg/2020-evergreen-header-09-mobile.jpg"
            },
            10: {
                desktop: "https://www.bodybuilding.com/images/lpimages/optimization/evergreen-header-10.jpg",
                mobile: "https://www.bodybuilding.com/images/merch/landingpages/components/header-bg/2020-evergreen-header-10-mobile.jpg"
            },
            11: {
                desktop: "https://www.bodybuilding.com/images/lpimages/optimization/evergreen-header-11.jpg",
                mobile: "https://www.bodybuilding.com/images/merch/landingpages/components/header-bg/2020-evergreen-header-11-mobile.jpg"
            },
        };
        var elClassName = "lp__banner";
        var sroot = this.shadowRoot;
        var th = this;
        var container = sroot.children[1];
        var a = [].filter.call(this.attributes, function(at) { return /^data-/.test(at.name); });
        var templated = this.getAttribute("data-template-background").length > 0 ? true : false;
        a.forEach(function (dataitem) {
            if (dataitem.name.indexOf("data-bb") < 0) {
                container.setAttribute(dataitem.name.toLowerCase(), dataitem.value.toLowerCase());
            }
            var className = dataitem.name.replace(/-/g, "__").replace("data", elClassName);
            if (dataitem.name.indexOf("data-options") >= 0) {
                if (dataitem.name === "data-options-type") {
                    container.classList.add(elClassName + "__style__" + dataitem.value);
                }
            } else if (dataitem.name.indexOf("data-text") >= 0) {
                if (th.hasAttribute(dataitem.name) && dataitem.value.length > 0) {
                    container.getElementsByClassName(className)[0].textContent = th.getAttribute(dataitem.name).trim();
                    container.querySelector(".lp__banner__text").style.display = "block";
                    container.querySelector("." + elClassName + "__text").classList.add(elClassName + "__text__overlay");
                } else if (container.getElementsByClassName(className).length > 0) {
                    container.getElementsByClassName(className)[0].style.display = "none";
                }
            } else if (dataitem.name.indexOf("data-link") >= 0 && dataitem.value.length > 0) {
                container.setAttribute("href", dataitem.value);
            }
            if (dataitem.name.indexOf("data-image-background") >= 0 && dataitem.value.length > 0 &&
            !templated) { //USER SET BACKGROUND
                var whichBackground = dataitem.name.split("-")[dataitem.name.split("-").length - 1];
                container.querySelector("." + elClassName + "__image__background__" + whichBackground).setAttribute("srcset", dataitem.value);
                container.classList.add(elClassName + "__user__background__true");
                th.setAttribute("data-bb-promo-creative", dataitem.value);
                if (whichBackground === "desktop" && dataitem.value === th.getAttribute("data-image-background-mobile")) {
                    container.classList.add("lp__banner__background--same");
                }
            }
            container.setAttribute("data-bb-category", "promotion");
            container.setAttribute("data-bb-action", "promotionClick");
            container.setAttribute("data-bb-impression", "promotion");
        });
        if (templated) { //TEMPLATED BACKGROUND
            var backs = backgrounds[this.getAttribute("data-template-background")];
            container.classList.add(elClassName + "__template__background__true");
            container.querySelector("." + elClassName + "__image__background__desktop").setAttribute("srcset", backs.desktop);
            container.querySelector("." + elClassName + "__image__background__mobile").setAttribute("src", backs.mobile);
        }
    }
});