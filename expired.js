var lpExpired = document.createElement('template');
lpExpired.innerHTML = `
    <style>
        bb-expired, .bb__expired {
            width: auto;
            max-width: 900px;
            margin: 0 auto;
            padding: 20px 0;
            font: 300 16px/20px ProximaNova, 'Proxima Nova', Helvetica, Arial, sans-serif;
            color: #232323;
            display: block;
        }
        bb-expired[hidden] {
            display: none;
        }
        .bb__expired h1 {
            width: 94%;
            max-width: 525px;
            margin: 10px auto 0;
            text-align: center;
            text-transform: uppercase;
            padding: 0;
            font: 900 3em/1em ProximaNova, 'Proxima Nova', Helvetica, Arial, sans-serif;
        }
        .bb__expired p {
            width: 94%;
            margin: 10px auto;
            padding: 0;
            color: #202020;
            text-align: center;
            font: 300 1em/1.3em ProximaNova, 'Proxima Nova', Helvetica, Arial, sans-serif;
        }
        .bb__expired__banner__href {
            width: 100%;
            max-width: 800px;
            margin: 10px auto;
            display: flex;
            flex-direction: row;
            align-content: center;
            justify-content: center;
        }
        .bb__expired__banner__img__src {
            width: auto;
            max-width: 100%;
            margin: 0 auto;
            align-self: center;
            object-fit: contain;
        }
        /* -----------------------------------  MEDIA QUERY ----------------------------------- */
        @media screen and (max-width:703px) {
            .bb__expired h1 {
                font: 900 2em/1em ProximaNova, 'Proxima Nova', sans-serif;
            }
    
        }
    </style>
    <div class="bb__expired">
        <h1 class="bb__expired__text__header__1"></h1>
        <p class="bb__expired__text__para__1"></p>
        <a class="bb__expired__banner__href">
            <img class="bb__expired__banner__img__src"/>
        </a>
    </div>
`;
customElements.define('bb-expired', class extends HTMLElement {
    constructor() {
        super();
        var shadowRoot = this.attachShadow({mode: 'open'}); // Attach a shadow root to the element.
        shadowRoot.appendChild(lpExpired.content.cloneNode(true));
    }
    connectedCallback() {
        var th = this;
        var elementName = this.tagName.toLowerCase().replace("-", "__");
        var container = this.shadowRoot.querySelector("." + elementName);
        function checkDST () {
            Date.prototype.stdTimezoneOffset = function () {
                var jan = new Date(this.getFullYear(), 0, 1);
                var jul = new Date(this.getFullYear(), 6, 1);
                return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
            };
            Date.prototype.isDstObserved = function () {
                return this.getTimezoneOffset() < this.stdTimezoneOffset();
            };
            var today = new Date();
            if (today.isDstObserved()) {
                return true;
            }
            return false;
        }
        function correctTimeString(time, dst) {
            var endtime = time.toLowerCase();
            if (endtime.indexOf(":") === -1 && endtime.length > 0) {
                return endtime + " 00:00:00 " + dst;
                
            } else if (endtime.toLowerCase().indexOf("mst") > -1 || endtime.toLowerCase().indexOf("mdt") > -1) {
                if (endtime.toLowerCase().indexOf("mst") > -1) {
                    return endtime.replace("mst", dst);
                } else if (endtime.toLowerCase().indexOf("mdt") > -1) {
                    return endtime.replace("mdt", dst);
                }
            } else if (endtime.indexOf(":") > -1 && endtime.toLowerCase().indexOf("mst") === -1 || endtime.toLowerCase().indexOf("mdt") === -1) {
                return endtime + " " + dst;
            }
            return endtime;
        }
        function timeLeft(endtime, now) {
            return Date.parse(endtime) - Date.parse(now);
        }
        function hideOnPage() {
            var app = document.getElementById("js-bbcom-app");
            if (app) {
                for (var item of app.children) {
                    console.log(item);
                    if (item.tagName.toLowerCase().indexOf("bb-") === -1) {
                        item.style.display = "none";
                    }
                }
            }
        }
        var a = [].filter.call(this.attributes, function(at) { return /^data-/.test(at.name); });
        a.forEach(function (dataitem) {
            if (th.hasAttribute(dataitem.name)) {
                if (dataitem.name.indexOf("expire-date") >= 0) {
                    var time = correctTimeString(dataitem.value, checkDST() ? "MDT" : "MST");
                    var timeRemaining = timeLeft(time, new Date().toString());
                    if (timeRemaining <= 0) {
                        th.removeAttribute("hidden");
                        if (document.readyState === "complete" || document.readyState === "loaded" || document.readyState === "interactive") {
                            hideOnPage();
                        } else {
                            document.addEventListener("DOMContentLoaded", function () {
                                hideOnPage();
                            });
                        }
                    }
                } else { //SET ATTRIBUTES AND TEXT HERE
                    var change = dataitem.name.replace(/-/g, "__").replace("data__", elementName + "__");
                    if (dataitem.name.indexOf("data-text") >= 0) {
                        container.getElementsByClassName(change)[0].textContent = th.getAttribute(dataitem.name).trim();
                    } else if (dataitem.name.indexOf("data-banner") >= 0) {
                        var key = change.split("__")[change.split("__").length - 1];
                        container.getElementsByClassName(change)[0].setAttribute(key, dataitem.value);
                    }
                }
            }  
        });
    }
});