var timedComponent = document.createElement('template');
    timedComponent.innerHTML = `
        <style>
            bb-timed {
                width: 100%;
                max-width: 1170px;
                margin: 0 auto;
                display: none;
            }
        </style>
        <div class="lp__component lp__timed__component">
            <slot></slot>
        </div>
    `;
    customElements.define('bb-timed', class extends HTMLElement {
        constructor() {
            super();
            var shadowRoot = this.attachShadow({mode: 'open'});
            shadowRoot.appendChild(timedComponent.content.cloneNode(true));
        }
        connectedCallback() {
            var container = this.shadowRoot.querySelector(".lp__timed__component");
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
            var times = {};
            [].filter.call(this.attributes, function(at) { return /^data-/.test(at.name); }).forEach(function (dataitem) {
                container.setAttribute(dataitem.name, dataitem.value);
                var correctTime = correctTimeString(dataitem.value, checkDST() ? "MDT" : "MST");
                times[dataitem.name.split("-")[2]]= {
                    time: correctTime,
                    timeLeft: timeLeft(correctTime, new Date().toString())
                };
            });
            times.timesSame = times.start.time === times.end.time ? true : false;
            times.isBetweenDates = times.start.timeLeft <= 0 ? times.end.timeLeft >= 0 ? true : false : false;
            times.overRidden = times.override.time.indexOf("GMT") < 0 ? times.override.timeLeft >= 0 ? true : false: false;
            this.style.display = times.timesSame || times.isBetweenDates || times.overRidden ?  "block" : "none";
        }
    });