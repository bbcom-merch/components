var couponCode = document.createElement('template');
couponCode.innerHTML = `
    <style>
        :host {
            width: 100%;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            font-family: ProximaNova, "Proima Nova", Arial, 'Helvetica Neue', Helvetica, sans-serif;
            margin: 24px auto 0;
            padding: 0;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            flex-wrap: wrap;
            padding: 0 8px;
        }
        :host .coupon__text__container p {
            font-size: 16px;
            line-height: 1;
            text-align: center;
            margin: 5px 20px;
        }
        .coupon__code__inputs {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: center;
            border: 1px solid #232323;
            border-radius: 5px;
        }
        :host .coupon__copy__code,
        :host .coupon__code {
            width: 155px;
            height: 47px;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            font-size: 20px;
            line-height: 1;
            font-weight: 600;
        }
        :host .coupon__code {
            // border: 1px solid #232323;
            border-right: 1px solid #232323;
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
        }
        :host .coupon__copy__code {
            background-color: #00aeef;
            color: #FFF;
            border-top-right-radius: 4px;
            border-bottom: 4px;
            cursor: pointer;
            transition: .4s all;
        }
        :host .coupon__copy__success {
            background-color: #05bb34 !important;
            transition: .4s all;
        }
        :host .coupon__copy__code:hover {
            -webkit-transform: 200;
            transform: 200;
            background-color: #009ad2;
        }
        .coupon__input__copy {
            position: absolute;
            top: -10000px;
            left: -10000px
        }
        /* ------------------ MEDIA QUERY ------------------ */
        @media screen and (max-width: 550px) {
            .coupon__code__inputs {
                margin-top: 5px
            }
            :host .coupon__copy__code {
                width: 125px;
            }
        }
    </style>

    <div class="coupon__text__container">
        <p>Use Coupon Code:</p>
        <p>Discount Applied in Cart</p>
    </div>
    <div class="coupon__code__inputs">
        <div class="coupon__code js__coupon__code"></div>
        <div class="coupon__copy__code js__copy__code">Copy Code</div>
        <input type="text" class="coupon__input__copy js__coupon__input__copy"/>
    </div>
`;
customElements.define('bb-coupon-code', class extends HTMLElement {
    constructor() {
        super();
        var shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(couponCode.content.cloneNode(true));
    }
    connectedCallback() {
        var sroot = this.shadowRoot;
        var container = sroot.querySelector(".coupon__code__inputs");
        var couponVal = this.attributes[0].value;
        if (couponVal.length > 0) {
            container.querySelector(".js__coupon__code").innerHTML = this.attributes[0].value;
            container.querySelector(".js__coupon__input__copy").value = this.attributes[0].value;
            container.querySelector(".js__copy__code").addEventListener('click', function(event) {
                event.preventDefault();
                var code = sroot.querySelector(".js__coupon__input__copy");
                code.focus();
                code.select();
                try {
                    document.execCommand('copy');
                    sroot.querySelector(".coupon__copy__code").classList.add("coupon__copy__success");
                    sroot.querySelector(".coupon__copy__code").innerHTML = "Code Copied";
                    setTimeout(function() {
                        sroot.querySelector(".coupon__copy__code").classList.remove("coupon__copy__success");
                        sroot.querySelector(".coupon__copy__code").innerHTML = "Copy Code";
                    }, 4000);
                } catch(e) {
                    console.log('Unable to copy code');
                }
                window.getSelection().removeAllRanges();  
            });
        } else {
            container.style.display = "none";
        }
    }
});