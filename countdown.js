var merchCountdown = document.createElement('template');
merchCountdown.innerHTML = `
    <style>
        :host {
            width: 100%;
            max-width: 1170px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            font-family: ProximaNova, "Proima Nova", Arial, 'Helvetica Neue', Helvetica, sans-serif;
            margin: 20px auto;
            padding: 10px;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
        }
        .lp__countdown__timer {
            width: 100%;
        }
        .lp__countdown__timer__inner h2 {
            width: auto;
            max-width: 94%;
            margin: 10px auto;
            display: block;
            font-family: ProximaNova, "Proima Nova", Arial, 'Helvetica Neue', Helvetica, sans-serif;
            font-size: 2.4em;
            font-weight: 400;
            text-align: center;
        }
            .lp__countdown__timer__inner p {
            width: auto;
            max-width: 96%;
            margin: 14px auto;
            display: block;
            font-family: ProximaNova, "Proima Nova", Arial, 'Helvetica Neue', Helvetica, sans-serif;
            font-size: 1.3em;
            font-weight: 300;
            text-align: center;
        }
        .lp__countdown__timer__container {
            width: 100%;
            max-width: 1170px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            font-family: ProximaNova, "Proima Nova", Arial, 'Helvetica Neue', Helvetica, sans-serif;
            margin: 20px auto;
            padding: 0px;
            flex-direction: row;
            flex-wrap: wrap;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
        }
        .lp__countdown__timer__intro {
            flex: 0 0 auto;
        }
        .lp__countdown__text__time__until {
            font-family: ProximaNova, "Proima Nova", Arial, 'Helvetica Neue', Helvetica, sans-serif;
            font-size: 1.3em;
            font-weight: 400;
            text-align: center;
            padding: 6px;
            margin: 0;
        }
        .lp__countdown__timer__container__inner {
            flex: 0;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            font-family: ProximaNova, "Proima Nova", Arial, 'Helvetica Neue', Helvetica, sans-serif;
            margin: 0;
            padding: 4px 6px;
            flex-direction: row;
            flex-wrap: no-wrap;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
        }
        .lp__countdown__timer__time__cell {
            flex: 0 1 50px;
            display: flex;
            flex-direction: row;
            flex-wrap: no-wrap;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            padding: 2px 6px;
            text-align: center;
        }
        .lp__countdown__timer__numbers {
            font-family: ProximaNova, "Proima Nova", Arial, 'Helvetica Neue', Helvetica, sans-serif;
            font-size: 2em;
            font-weight: 300;
            line-height: 1em;
        }
        .lp__countdown__timer__increments {
            font-family: ProximaNova, "Proima Nova", Arial, 'Helvetica Neue', Helvetica, sans-serif;
            font-size: 1em;
            font-weight: 400;
            align-self: flex-end;
            margin-top: auto;
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
    </style>
    <div class="lp__countdown__timer lp__component">
        <div class="lp__countdown__timer__inner">
            <div class="lp__countdown__timer__text lp__countdown__timer__text__top">
                <h2 class="lp__countdown__timer__header lp__countdown__text__header__top"></h2>
                <p class="lp__countdown__timer__para lp__countdown__text__para__top"></p>
            </div>
            <div class="lp__countdown__timer__container">
                <div class="lp__countdown__timer__intro">
                    <h3 class="lp__countdown__text__time__until"></h3>
                </div>
                <div class="lp__countdown__timer__container__inner">
                    <div class="lp__countdown__timer__time__cell">
                        <span class="lp__countdown__timer__numbers lp__countdown__timer__numbers--days"></span>
                        <span class="lp__countdown__timer__increments">D</span>
                    </div>
                    <div class="lp__countdown__timer__time__cell">
                        <span class="lp__countdown__timer__numbers lp__countdown__timer__numbers--hours"></span>
                        <span class="lp__countdown__timer__increments">H</span>
                    </div>
                    <div class="lp__countdown__timer__time__cell">
                        <span class="lp__countdown__timer__numbers lp__countdown__timer__numbers--minutes"></span>
                        <span class="lp__countdown__timer__increments">M</span>
                    </div>
                    <div class="lp__countdown__timer__time__cell">
                        <span class="lp__countdown__timer__numbers lp__countdown__timer__numbers--seconds"></span>
                        <span class="lp__countdown__timer__increments">S</span>
                    </div>
                </div>
            </div>
            <div class="lp__countdown__timer__text lp__countdown__timer__text__bottom">
                <h2 class="lp__countdown__timer__header lp__countdown__text__header__bottom"></h2>
                <p class="lp__countdown__timer__para lp__countdown__text__para__bottom"></p>
            </div>
        </div>
    </div>
`;
customElements.define('bb-countdown', class extends HTMLElement {
    constructor() {
        super();
        var shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(merchCountdown.content.cloneNode(true));
    }
    connectedCallback() {
        var sroot = this.shadowRoot;
        var th = this;
        var container = sroot.querySelector(".lp__countdown__timer");
        function initCount(endtime, stableParent, th) {
            var timerInterval;
            function updateClock(p) {
                var d = p.getElementsByClassName("lp__countdown__timer__numbers--days")[0];
                var h = p.getElementsByClassName("lp__countdown__timer__numbers--hours")[0];
                var m = p.getElementsByClassName("lp__countdown__timer__numbers--minutes")[0];
                var s = p.getElementsByClassName("lp__countdown__timer__numbers--seconds")[0];
                var time = timeLeft(endtime);
                if (time.days > 0) {
                    d.innerHTML = time.days;
                } else {
                    d.parentNode.style.display = "none";
                }
                if (time.hours <= 0) {
                    h.innerHTML = "0";
                } else {
                    h.innerHTML = ("0" + time.hours).slice(-2);
                }
                m.innerHTML = ("0" + time.minutes).slice(-2);
                s.innerHTML = ("0" + time.seconds).slice(-2);
                if (time.total <= 0) {
                    clearInterval(creeperInterval);
                }
            }
            var timeToGo = timeLeft(endtime).total;
            if (timeToGo >= 0) {
                updateClock(stableParent);
                timerInterval = setInterval(function () {
                    updateClock(stableParent);
                }, 1000);
                var mut = function (mutationsList, observer) {
                    window.clearInterval(timerInterval);
                    timerInterval = setInterval(function () {
                        updateClock(stableParent);
                    }, 1000);
                };
                var observer = new MutationObserver(mut);
                observer.observe(stableParent.parentNode, { attributes: true, childList: true, subtree: false });
            } else {
                th.style.display = "none";
                var others = document.querySelectorAll(".lp__component--countdown");
                if (others.length > 0) {
                    others.forEach(function (el) {
                        el.style.display = "none";
                    });
                }
            }
        }
        function timeLeft(endtime) {
            var t = Date.parse(endtime) - Date.parse(new Date());
            var s = Math.floor((t / 1000) % 60);
            var m = Math.floor((t / 1000 / 60) % 60);
            var h = Math.floor((t / (1000 * 60 * 60)) % 24);
            var d = Math.floor(t / (1000 * 60 * 60 * 24));
            return { "total": t, "days": d, "hours": h, "minutes": m, "seconds": s };
        }
        var a = [].filter.call(this.attributes, function(at) { return /^data-/.test(at.name); });
        a.forEach(function (dataitem) {
            if (dataitem.name.indexOf("data-bb") < 0) {
                container.setAttribute(dataitem.name.toLowerCase(), dataitem.value.toLowerCase());
            }
            if (dataitem.name.indexOf("-text-") >= 0) {
                var change = dataitem.name.replace(/-/g, "__").replace("data__", "lp__");
                if (th.hasAttribute(dataitem.name) && th.getAttribute(dataitem.name).trim().length > 0) {
                    container.getElementsByClassName(change)[0].textContent = th.getAttribute(dataitem.name).trim();
                } else {
                    container.getElementsByClassName(change)[0].style.display = "none";
                }
            }
            if (dataitem.name.indexOf("countdown-expires") >= 0) {
                initCount(dataitem.value, container, th);
            }
        });
    }
});