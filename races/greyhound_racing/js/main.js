(function() {
    var a = "undefined" !== typeof window && "undefined" !== typeof window.document ? window.document : {},
        d = "undefined" !== typeof module && module.exports,
        c = "undefined" !== typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
        b = function() {
            for (var b, e = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "),
                    "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "), "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")
                ], c = 0, d = e.length, m = {}; c < d; c++)
                if ((b = e[c]) && b[1] in a) {
                    for (c = 0; c < b.length; c++) m[e[0][c]] =
                        b[c];
                    return m
                }
            return !1
        }(),
        e = {
            change: b.fullscreenchange,
            error: b.fullscreenerror
        },
        k = {
            request: function(f) {
                var e = b.requestFullscreen;
                f = f || a.documentElement;
                if (/5\.1[.\d]* Safari/.test(navigator.userAgent)) f[e]();
                else f[e](c && Element.ALLOW_KEYBOARD_INPUT)
            },
            exit: function() {
                a[b.exitFullscreen]()
            },
            toggle: function(b) {
                this.isFullscreen ? this.exit() : this.request(b)
            },
            onchange: function(b) {
                this.on("change", b)
            },
            onerror: function(b) {
                this.on("error", b)
            },
            on: function(b, c) {
                var f = e[b];
                f && a.addEventListener(f, c, !1)
            },
            off: function(b,
                c) {
                var f = e[b];
                f && a.removeEventListener(f, c, !1)
            },
            raw: b
        };
    b ? (Object.defineProperties(k, {
        isFullscreen: {
            get: function() {
                return !!a[b.fullscreenElement]
            }
        },
        element: {
            enumerable: !0,
            get: function() {
                return a[b.fullscreenElement]
            }
        },
        enabled: {
            enumerable: !0,
            get: function() {
                return !!a[b.fullscreenEnabled]
            }
        }
    }), d ? module.exports = k : window.screenfull = k) : d ? module.exports = !1 : window.screenfull = !1
})();
var s_iScaleFactor = 1,
    s_oCanvasLeft, s_oCanvasTop, s_bIsIphone = !1;
(function(a) {
    (jQuery.browser = jQuery.browser || {}).mobile = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0,
        4))
})(navigator.userAgent || navigator.vendor || window.opera);
$(window).resize(function() {
    sizeHandler()
});

function trace(a) {
    console.log(a)
}

function isIOS() {
    var a = "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";");
    for (-1 !== navigator.userAgent.toLowerCase().indexOf("iphone") && (s_bIsIphone = !0); a.length;)
        if (navigator.platform === a.pop()) return !0;
    return s_bIsIphone = !1
}

function getSize(a) {
    var d = a.toLowerCase(),
        c = window.document,
        b = c.documentElement;
    if (void 0 === window["inner" + a]) a = b["client" + a];
    else if (window["inner" + a] != b["client" + a]) {
        var e = c.createElement("body");
        e.id = "vpw-test-b";
        e.style.cssText = "overflow:scroll";
        var k = c.createElement("div");
        k.id = "vpw-test-d";
        k.style.cssText = "position:absolute;top:-1000px";
        k.innerHTML = "<style>@media(" + d + ":" + b["client" + a] + "px){body#vpw-test-b div#vpw-test-d{" + d + ":7px!important}}</style>";
        e.appendChild(k);
        b.insertBefore(e, c.head);
        a = 7 == k["offset" + a] ? b["client" + a] : window["inner" + a];
        b.removeChild(e)
    } else a = window["inner" + a];
    return a
}
window.addEventListener("orientationchange", onOrientationChange);

function onOrientationChange() {
    window.matchMedia("(orientation: portrait)").matches && sizeHandler();
    window.matchMedia("(orientation: landscape)").matches && sizeHandler()
}

function getIOSWindowHeight() {
    return document.documentElement.clientWidth / window.innerWidth * window.innerHeight
}

function getHeightOfIOSToolbars() {
    var a = (0 === window.orientation ? screen.height : screen.width) - getIOSWindowHeight();
    return 1 < a ? a : 0
}

function sizeHandler() {
    window.scrollTo(0, 1);
    if ($("#canvas")) {
        var a = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? getIOSWindowHeight() : getSize("Height");
        var d = getSize("Width");
        _checkOrientation(d, a);
        var c = Math.min(a / CANVAS_HEIGHT, d / CANVAS_WIDTH),
            b = CANVAS_WIDTH * c;
        c *= CANVAS_HEIGHT;
        if (c < a) {
            var e = a - c;
            c += e;
            b += CANVAS_WIDTH / CANVAS_HEIGHT * e
        } else b < d && (e = d - b, b += e, c += CANVAS_HEIGHT / CANVAS_WIDTH * e);
        e = a / 2 - c / 2;
        var k = d / 2 - b / 2,
            f = CANVAS_WIDTH / b;
        if (k * f < -EDGEBOARD_X || e * f < -EDGEBOARD_Y) c = Math.min(a / (CANVAS_HEIGHT - 2 *
            EDGEBOARD_Y), d / (CANVAS_WIDTH - 2 * EDGEBOARD_X)), b = CANVAS_WIDTH * c, c *= CANVAS_HEIGHT, e = (a - c) / 2, k = (d - b) / 2, f = CANVAS_WIDTH / b;
        s_iOffsetX = -1 * k * f;
        s_iOffsetY = -1 * e * f;
        0 <= e && (s_iOffsetY = 0);
        0 <= k && (s_iOffsetX = 0);
        null !== s_oGame && s_oGame.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oBetPanel && s_oBetPanel.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        s_bIsIphone ? (canvas = document.getElementById("canvas"), s_oStage.canvas.width = 2 * b, s_oStage.canvas.height = 2 * c,
            canvas.style.width = b + "px", canvas.style.height = c + "px", a = Math.min(b / CANVAS_WIDTH, c / CANVAS_HEIGHT), s_iScaleFactor = 2 * a, s_oStage.scaleX = s_oStage.scaleY = 2 * a) : s_bMobile && !1 === isIOS() ? ($("#canvas").css("width", b + "px"), $("#canvas").css("height", c + "px")) : (s_oStage.canvas.width = b, s_oStage.canvas.height = c, s_iScaleFactor = Math.min(b / CANVAS_WIDTH, c / CANVAS_HEIGHT), s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor);
        0 > e ? $("#canvas").css("top", e + "px") : $("#canvas").css("top", "0px");
        $("#canvas").css("left", k + "px");
        fullscreenHandler()
    }
}

function _checkOrientation(a, d) {
    s_bMobile && ENABLE_CHECK_ORIENTATION && (a > d ? "landscape" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()) : "portrait" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"),
        s_oMain.stopUpdate()))
}

function inIframe() {
    try {
        return window.self !== window.top
    } catch (a) {
        return !0
    }
}

function createBitmap(a, d, c) {
    var b = new createjs.Bitmap(a),
        e = new createjs.Shape;
    d && c ? e.graphics.beginFill("#fff").drawRect(0, 0, d, c) : e.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
    b.hitArea = e;
    return b
}

function createSprite(a, d, c, b, e, k) {
    a = null !== d ? new createjs.Sprite(a, d) : new createjs.Sprite(a);
    d = new createjs.Shape;
    d.graphics.beginFill("#000000").drawRect(-c, -b, e, k);
    a.hitArea = d;
    return a
}

function randomFloatBetween(a, d, c) {
    "undefined" === typeof c && (c = 2);
    return parseFloat(Math.min(a + Math.random() * (d - a), d).toFixed(c))
}

function formatTime(a) {
    a /= 1E3;
    var d = Math.floor(a / 60);
    a = Math.floor(a - 60 * d);
    var c = "";
    c = 10 > d ? c + ("0" + d + ":") : c + (d + ":");
    return 10 > a ? c + ("0" + a) : c + a
}

function NoClickDelay(a) {
    this.element = a;
    window.Touch && this.element.addEventListener("touchstart", this, !1)
}

function shuffle(a) {
    for (var d = a.length, c, b; 0 < d;) b = Math.floor(Math.random() * d), d--, c = a[d], a[d] = a[b], a[b] = c;
    return a
}
NoClickDelay.prototype = {
    handleEvent: function(a) {
        switch (a.type) {
            case "touchstart":
                this.onTouchStart(a);
                break;
            case "touchmove":
                this.onTouchMove(a);
                break;
            case "touchend":
                this.onTouchEnd(a)
        }
    },
    onTouchStart: function(a) {
        a.preventDefault();
        this.moved = !1;
        this.element.addEventListener("touchmove", this, !1);
        this.element.addEventListener("touchend", this, !1)
    },
    onTouchMove: function(a) {
        this.moved = !0
    },
    onTouchEnd: function(a) {
        this.element.removeEventListener("touchmove", this, !1);
        this.element.removeEventListener("touchend",
            this, !1);
        if (!this.moved) {
            a = document.elementFromPoint(a.changedTouches[0].clientX, a.changedTouches[0].clientY);
            3 == a.nodeType && (a = a.parentNode);
            var d = document.createEvent("MouseEvents");
            d.initEvent("click", !0, !0);
            a.dispatchEvent(d)
        }
    }
};

function ctlArcadeResume() {
    null !== s_oMain && s_oMain.startUpdate()
}

function ctlArcadePause() {
    null !== s_oMain && s_oMain.stopUpdate()
}

function getParamValue(a) {
    for (var d = window.location.search.substring(1).split("&"), c = 0; c < d.length; c++) {
        var b = d[c].split("=");
        if (b[0] == a) return b[1]
    }
}
Array.prototype.sortOn = function() {
    var a = this.slice();
    if (!arguments.length) return a.sort();
    var d = Array.prototype.slice.call(arguments);
    return a.sort(function(a, b) {
        for (var e = d.slice(), c = e.shift(); a[c] == b[c] && e.length;) c = e.shift();
        return a[c] == b[c] ? 0 : a[c] > b[c] ? 1 : -1
    })
};

function playSound(a, d, c) {
    return !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (s_aSounds[a].play(), s_aSounds[a].volume(d), s_aSounds[a].loop(c), s_aSounds[a]) : null
}

function stopSound(a) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].stop()
}

function setVolume(a, d) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].volume(d)
}

function setMute(a, d) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].mute(d)
}

function pauseSound(a) {
    s_aSounds[a].pause()
}

function easeLinear(a, d, c, b) {
    return c * a / b + d
}

function collisionWithCircle(a, d, c) {
    var b = a.getX() - d.getX(),
        e = a.getY() - d.getY();
    return Math.sqrt(b * b + e * e) < a.getCollision() * c + d.getCollision() * c ? !0 : !1
}
(function() {
    function a(a) {
        var b = {
            focus: "visible",
            focusin: "visible",
            pageshow: "visible",
            blur: "hidden",
            focusout: "hidden",
            pagehide: "hidden"
        };
        a = a || window.event;
        a.type in b ? document.body.className = b[a.type] : (document.body.className = this[d] ? "hidden" : "visible", "hidden" === document.body.className ? s_oMain.stopUpdate() : s_oMain.startUpdate())
    }
    var d = "hidden";
    d in document ? document.addEventListener("visibilitychange", a) : (d = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", a) : (d = "webkitHidden") in
        document ? document.addEventListener("webkitvisibilitychange", a) : (d = "msHidden") in document ? document.addEventListener("msvisibilitychange", a) : "onfocusin" in document ? document.onfocusin = document.onfocusout = a : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = a
})();

function fullscreenHandler() {
    ENABLE_FULLSCREEN && !inIframe() && (s_bFullscreen = screen.height < window.innerHeight + 3 && screen.height > window.innerHeight - 3 ? !0 : !1, null !== s_oInterface && s_oInterface.resetFullscreenBut(), null !== s_oMenu && s_oMenu.resetFullscreenBut())
}
if (screenfull.enabled) screenfull.on("change", function() {
    s_bFullscreen = screenfull.isFullscreen;
    null !== s_oInterface && s_oInterface.resetFullscreenBut();
    null !== s_oMenu && s_oMenu.resetFullscreenBut()
});

function extractHostname(a) {
    a = -1 < a.indexOf("://") ? a.split("/")[2] : a.split("/")[0];
    a = a.split(":")[0];
    return a = a.split("?")[0]
}

function extractRootDomain(a) {
    a = extractHostname(a);
    var d = a.split("."),
        c = d.length;
    2 < c && (a = d[c - 2] + "." + d[c - 1]);
    return a
}
var getClosestTop = function() {
        var a = window,
            d = !1;
        try {
            for (; a.parent.document !== a.document;)
                if (a.parent.document) a = a.parent;
                else {
                    d = !0;
                    break
                }
        } catch (c) {
            d = !0
        }
        return {
            topFrame: a,
            err: d
        }
    },
    getBestPageUrl = function(a) {
        var d = a.topFrame,
            c = "";
        if (a.err) try {
            try {
                c = window.top.location.href
            } catch (e) {
                var b = window.location.ancestorOrigins;
                c = b[b.length - 1]
            }
        } catch (e) {
            c = d.document.referrer
        } else c = d.location.href;
        return c
    },
    TOPFRAMEOBJ = getClosestTop(),
    PAGE_URL = getBestPageUrl(TOPFRAMEOBJ);

function seekAndDestroy() {
    for (var a = extractRootDomain(PAGE_URL), d = [String.fromCharCode(99, 111, 100, 101, 116, 104, 105, 115, 108, 97, 98, 46, 99, 111, 109), String.fromCharCode(101, 110, 118, 97, 116, 111, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116)], c = 0; c < d.length; c++)
        if (d[c] === a) return !0;
    return !1
}

function CSpriteLibrary() {
    var a, d, c, b, e, k;
    this.init = function(f, g, h) {
        c = d = 0;
        b = f;
        e = g;
        k = h;
        a = {}
    };
    this.addSprite = function(b, e) {
        a.hasOwnProperty(b) || (a[b] = {
            szPath: e,
            oSprite: new Image
        }, d++)
    };
    this.getSprite = function(b) {
        return a.hasOwnProperty(b) ? a[b].oSprite : null
    };
    this._onSpritesLoaded = function() {
        e.call(k)
    };
    this._onSpriteLoaded = function() {
        b.call(k);
        ++c === d && this._onSpritesLoaded()
    };
    this.loadSprites = function() {
        for (var b in a) a[b].oSprite.oSpriteLibrary = this, a[b].oSprite.onload = function() {
                this.oSpriteLibrary._onSpriteLoaded()
            },
            a[b].oSprite.src = a[b].szPath
    };
    this.getNumSprites = function() {
        return d
    }
}
var CANVAS_WIDTH = 1024,
    CANVAS_HEIGHT = 768,
    EDGEBOARD_X = 0,
    EDGEBOARD_Y = 168,
    FPS = 30,
    FPS_TIME = 1E3 / FPS,
    DISABLE_SOUND_MOBILE = !1,
    PRIMARY_FONT = "impactregular",
    SECONDARY_FONT = "Digital-7",
    TERTIARY_FONT = "InfiniteJustice",
    STATE_LOADING = 0,
    STATE_MENU = 1,
    STATE_BET_PANEL = 2,
    STATE_GAME = 3,
    ON_MOUSE_DOWN = 0,
    ON_MOUSE_UP = 1,
    ON_MOUSE_OVER = 2,
    ON_MOUSE_OUT = 3,
    ON_DRAG_START = 4,
    ON_DRAG_END = 5,
    CHIP_VALUES, BET_PANEL_X = 70,
    BET_PANEL_Y = 165,
    BET_PANEL_WIDTH, BET_PANEL_HEIGHT, GREYHOUND_WIDTH = 338,
    GREYHOUND_HEIGHT = 170,
    NUM_CHIPS, NUM_GREYHOUNDS, MIN_BET,
    MAX_BET, WIN_OCCURRENCE, NUM_TRACK_BG = 416,
    RACE_TIME = Math.round(NUM_TRACK_BG / (FPS / 2)),
    ARRIVAL_X = 491,
    TIME_CHECK_RANK = 3E3,
    ENABLE_FULLSCREEN, ENABLE_CHECK_ORIENTATION, SHOW_CREDITS;

function CGameSettings(a) {
    var d, c, b, e, k, f, g, h, l;
    this._init = function(b) {
        l = b;
        b = l.greyhound_names;
        NUM_GREYHOUNDS = b.length;
        d = [];
        for (var a = 0; a < NUM_GREYHOUNDS; a++) d[a] = b[a];
        this._initSimpleOdd();
        this._initForecastOdd();
        this._initPaths();
        this._initGreyhoundInfo();
        f = CHIP_VALUES
    };
    this._initSimpleOdd = function() {
        var a = l.odd_win_bet,
            f = l.odd_place_bet,
            d = l.odd_show_bet;
        c = [];
        b = [];
        e = [];
        for (var g = 0; g < a.length; g++) c[g] = a[g], b[g] = f[g], e[g] = d[g]
    };
    this._initForecastOdd = function() {
        var b = l.forecast;
        k = [];
        for (var a = 0; a < NUM_GREYHOUNDS; a++) k[a] = [];
        for (a = 0; a < b.length; a++) k[b[a].first - 1][b[a].second - 1] = b[a].odd
    };
    this._initPaths = function() {
        g = [];
        var b = [{
                x: 230,
                frame: 30
            }, {
                x: 500,
                frame: 180
            }, {
                x: 600,
                frame: 180
            }, {
                x: 400,
                frame: 200
            }, {
                x: ARRIVAL_X - GREYHOUND_WIDTH / 2,
                frame: 210
            }, {
                x: CANVAS_WIDTH + GREYHOUND_WIDTH,
                frame: 30
            }],
            a = [{
                x: 250,
                frame: 30
            }, {
                x: 600,
                frame: 200
            }, {
                x: 650,
                frame: 180
            }, {
                x: 450,
                frame: 180
            }, {
                x: ARRIVAL_X - GREYHOUND_WIDTH / 2 - 150,
                frame: 210
            }, {
                x: CANVAS_WIDTH + GREYHOUND_WIDTH,
                frame: 35
            }],
            e = [{
                x: 170,
                frame: 30
            }, {
                x: 400,
                frame: 150
            }, {
                x: 450,
                frame: 210
            }, {
                x: 400,
                frame: 140
            }, {
                x: 300,
                frame: 130
            }, {
                x: ARRIVAL_X - GREYHOUND_WIDTH / 2 - 250,
                frame: 140
            }, {
                x: CANVAS_WIDTH + GREYHOUND_WIDTH,
                frame: 40
            }],
            c = [{
                x: 190,
                frame: 30
            }, {
                x: 340,
                frame: 150
            }, {
                x: 360,
                frame: 300
            }, {
                x: ARRIVAL_X - GREYHOUND_WIDTH / 2 - 390,
                frame: 320
            }, {
                x: CANVAS_WIDTH + GREYHOUND_WIDTH,
                frame: 45
            }],
            f = [{
                x: 220,
                frame: 30
            }, {
                x: 350,
                frame: 280
            }, {
                x: 480,
                frame: 190
            }, {
                x: 320,
                frame: 100
            }, {
                x: ARRIVAL_X - GREYHOUND_WIDTH / 2 - 450,
                frame: 200
            }, {
                x: CANVAS_WIDTH + GREYHOUND_WIDTH,
                frame: 50
            }],
            d = [{
                x: 210,
                frame: 30
            }, {
                x: 260,
                frame: 290
            }, {
                x: ARRIVAL_X - GREYHOUND_WIDTH / 2 - 600,
                frame: 480
            }, {
                x: CANVAS_WIDTH +
                    GREYHOUND_WIDTH,
                frame: 55
            }];
        g.push({
            place_1: b,
            place_2: a,
            place_3: e,
            place_4: c,
            place_5: f,
            place_6: d
        });
        b = [{
            x: 230,
            frame: 30
        }, {
            x: 450,
            frame: 180
        }, {
            x: 500,
            frame: 180
        }, {
            x: 400,
            frame: 200
        }, {
            x: ARRIVAL_X - GREYHOUND_WIDTH / 2,
            frame: 210
        }, {
            x: CANVAS_WIDTH + GREYHOUND_WIDTH,
            frame: 30
        }];
        a = [{
            x: 250,
            frame: 30
        }, {
            x: 600,
            frame: 200
        }, {
            x: 550,
            frame: 180
        }, {
            x: 350,
            frame: 180
        }, {
            x: ARRIVAL_X - GREYHOUND_WIDTH / 2 - 150,
            frame: 210
        }, {
            x: CANVAS_WIDTH + GREYHOUND_WIDTH,
            frame: 35
        }];
        e = [{
                x: 170,
                frame: 30
            }, {
                x: 450,
                frame: 150
            }, {
                x: 550,
                frame: 210
            }, {
                x: 500,
                frame: 140
            }, {
                x: 400,
                frame: 130
            },
            {
                x: ARRIVAL_X - GREYHOUND_WIDTH / 2 - 250,
                frame: 140
            }, {
                x: CANVAS_WIDTH + GREYHOUND_WIDTH,
                frame: 40
            }
        ];
        c = [{
            x: 190,
            frame: 30
        }, {
            x: 300,
            frame: 150
        }, {
            x: 360,
            frame: 300
        }, {
            x: ARRIVAL_X - GREYHOUND_WIDTH / 2 - 390,
            frame: 320
        }, {
            x: CANVAS_WIDTH + GREYHOUND_WIDTH,
            frame: 45
        }];
        f = [{
            x: 220,
            frame: 30
        }, {
            x: 350,
            frame: 280
        }, {
            x: 400,
            frame: 190
        }, {
            x: 320,
            frame: 100
        }, {
            x: ARRIVAL_X - GREYHOUND_WIDTH / 2 - 450,
            frame: 200
        }, {
            x: CANVAS_WIDTH + GREYHOUND_WIDTH,
            frame: 50
        }];
        d = [{
            x: 210,
            frame: 30
        }, {
            x: 360,
            frame: 290
        }, {
            x: ARRIVAL_X - GREYHOUND_WIDTH / 2 - 600,
            frame: 480
        }, {
            x: CANVAS_WIDTH + GREYHOUND_WIDTH,
            frame: 55
        }];
        g.push({
            place_1: b,
            place_2: a,
            place_3: e,
            place_4: c,
            place_5: f,
            place_6: d
        });
        b = [{
            x: 230,
            frame: 30
        }, {
            x: 500,
            frame: 180
        }, {
            x: 600,
            frame: 180
        }, {
            x: 600,
            frame: 200
        }, {
            x: ARRIVAL_X - GREYHOUND_WIDTH / 2,
            frame: 210
        }, {
            x: CANVAS_WIDTH + GREYHOUND_WIDTH,
            frame: 30
        }];
        a = [{
            x: 250,
            frame: 30
        }, {
            x: 600,
            frame: 200
        }, {
            x: 650,
            frame: 180
        }, {
            x: 500,
            frame: 180
        }, {
            x: ARRIVAL_X - GREYHOUND_WIDTH / 2 - 150,
            frame: 210
        }, {
            x: CANVAS_WIDTH + GREYHOUND_WIDTH,
            frame: 35
        }];
        e = [{
            x: 170,
            frame: 30
        }, {
            x: 400,
            frame: 150
        }, {
            x: 450,
            frame: 210
        }, {
            x: 600,
            frame: 140
        }, {
            x: 450,
            frame: 130
        }, {
            x: ARRIVAL_X -
                GREYHOUND_WIDTH / 2 - 250,
            frame: 140
        }, {
            x: CANVAS_WIDTH + GREYHOUND_WIDTH,
            frame: 40
        }];
        c = [{
            x: 190,
            frame: 30
        }, {
            x: 340,
            frame: 150
        }, {
            x: 360,
            frame: 300
        }, {
            x: ARRIVAL_X - GREYHOUND_WIDTH / 2 - 410,
            frame: 320
        }, {
            x: CANVAS_WIDTH + GREYHOUND_WIDTH,
            frame: 45
        }];
        f = [{
            x: 220,
            frame: 30
        }, {
            x: 350,
            frame: 280
        }, {
            x: 480,
            frame: 190
        }, {
            x: 320,
            frame: 100
        }, {
            x: ARRIVAL_X - GREYHOUND_WIDTH / 2 - 550,
            frame: 200
        }, {
            x: CANVAS_WIDTH + GREYHOUND_WIDTH,
            frame: 50
        }];
        d = [{
            x: 210,
            frame: 30
        }, {
            x: 260,
            frame: 290
        }, {
            x: ARRIVAL_X - GREYHOUND_WIDTH / 2 - 650,
            frame: 480
        }, {
            x: CANVAS_WIDTH + GREYHOUND_WIDTH,
            frame: 55
        }];
        g.push({
            place_1: b,
            place_2: a,
            place_3: e,
            place_4: c,
            place_5: f,
            place_6: d
        });
        b = [{
            x: 330,
            frame: 30
        }, {
            x: 450,
            frame: 180
        }, {
            x: 550,
            frame: 180
        }, {
            x: 650,
            frame: 200
        }, {
            x: ARRIVAL_X - GREYHOUND_WIDTH / 2,
            frame: 210
        }, {
            x: CANVAS_WIDTH + GREYHOUND_WIDTH,
            frame: 30
        }];
        a = [{
            x: 250,
            frame: 30
        }, {
            x: 350,
            frame: 200
        }, {
            x: 450,
            frame: 180
        }, {
            x: 600,
            frame: 180
        }, {
            x: ARRIVAL_X - GREYHOUND_WIDTH / 2 - 150,
            frame: 210
        }, {
            x: CANVAS_WIDTH + GREYHOUND_WIDTH,
            frame: 35
        }];
        e = [{
            x: 270,
            frame: 30
        }, {
            x: 400,
            frame: 150
        }, {
            x: 450,
            frame: 210
        }, {
            x: 600,
            frame: 140
        }, {
            x: 500,
            frame: 130
        }, {
            x: ARRIVAL_X - GREYHOUND_WIDTH /
                2 - 250,
            frame: 140
        }, {
            x: CANVAS_WIDTH + GREYHOUND_WIDTH,
            frame: 40
        }];
        c = [{
            x: 290,
            frame: 30
        }, {
            x: 340,
            frame: 150
        }, {
            x: 360,
            frame: 300
        }, {
            x: ARRIVAL_X - GREYHOUND_WIDTH / 2 - 410,
            frame: 320
        }, {
            x: CANVAS_WIDTH + GREYHOUND_WIDTH,
            frame: 45
        }];
        f = [{
            x: 220,
            frame: 30
        }, {
            x: 350,
            frame: 280
        }, {
            x: 400,
            frame: 190
        }, {
            x: 320,
            frame: 100
        }, {
            x: ARRIVAL_X - GREYHOUND_WIDTH / 2 - 550,
            frame: 200
        }, {
            x: CANVAS_WIDTH + GREYHOUND_WIDTH,
            frame: 50
        }];
        d = [{
            x: 210,
            frame: 30
        }, {
            x: 360,
            frame: 290
        }, {
            x: ARRIVAL_X - GREYHOUND_WIDTH / 2 - 650,
            frame: 480
        }, {
            x: CANVAS_WIDTH + GREYHOUND_WIDTH,
            frame: 55
        }];
        g.push({
            place_1: b,
            place_2: a,
            place_3: e,
            place_4: c,
            place_5: f,
            place_6: d
        });
        b = [{
            x: 230,
            frame: 30
        }, {
            x: 350,
            frame: 180
        }, {
            x: 400,
            frame: 180
        }, {
            x: 600,
            frame: 200
        }, {
            x: ARRIVAL_X - GREYHOUND_WIDTH / 2,
            frame: 210
        }, {
            x: CANVAS_WIDTH + GREYHOUND_WIDTH,
            frame: 30
        }];
        a = [{
            x: 250,
            frame: 30
        }, {
            x: 350,
            frame: 200
        }, {
            x: 450,
            frame: 180
        }, {
            x: 500,
            frame: 180
        }, {
            x: ARRIVAL_X - GREYHOUND_WIDTH / 2 - 150,
            frame: 210
        }, {
            x: CANVAS_WIDTH + GREYHOUND_WIDTH,
            frame: 35
        }];
        e = [{
            x: 270,
            frame: 30
        }, {
            x: 400,
            frame: 150
        }, {
            x: 450,
            frame: 210
        }, {
            x: 600,
            frame: 140
        }, {
            x: 500,
            frame: 130
        }, {
            x: ARRIVAL_X - GREYHOUND_WIDTH / 2 - 250,
            frame: 140
        }, {
            x: CANVAS_WIDTH + GREYHOUND_WIDTH,
            frame: 40
        }];
        c = [{
            x: 190,
            frame: 30
        }, {
            x: 340,
            frame: 150
        }, {
            x: 360,
            frame: 300
        }, {
            x: ARRIVAL_X - GREYHOUND_WIDTH / 2 - 390,
            frame: 320
        }, {
            x: CANVAS_WIDTH + GREYHOUND_WIDTH,
            frame: 45
        }];
        f = [{
            x: 220,
            frame: 30
        }, {
            x: 350,
            frame: 280
        }, {
            x: 400,
            frame: 190
        }, {
            x: 320,
            frame: 100
        }, {
            x: ARRIVAL_X - GREYHOUND_WIDTH / 2 - 550,
            frame: 200
        }, {
            x: CANVAS_WIDTH + GREYHOUND_WIDTH,
            frame: 50
        }];
        d = [{
            x: 210,
            frame: 30
        }, {
            x: 260,
            frame: 290
        }, {
            x: ARRIVAL_X - GREYHOUND_WIDTH / 2 - 650,
            frame: 480
        }, {
            x: CANVAS_WIDTH + GREYHOUND_WIDTH,
            frame: 55
        }];
        g.push({
            place_1: b,
            place_2: a,
            place_3: e,
            place_4: c,
            place_5: f,
            place_6: d
        });
        b = [{
            x: 230,
            frame: 50
        }, {
            x: 350,
            frame: 200
        }, {
            x: 400,
            frame: 100
        }, {
            x: 500,
            frame: 200
        }, {
            x: ARRIVAL_X - GREYHOUND_WIDTH / 2,
            frame: 250
        }, {
            x: CANVAS_WIDTH + GREYHOUND_WIDTH,
            frame: 30
        }];
        a = [{
            x: 250,
            frame: 100
        }, {
            x: 350,
            frame: 150
        }, {
            x: 450,
            frame: 150
        }, {
            x: 500,
            frame: 200
        }, {
            x: ARRIVAL_X - GREYHOUND_WIDTH / 2 - 150,
            frame: 200
        }, {
            x: CANVAS_WIDTH + GREYHOUND_WIDTH,
            frame: 35
        }];
        e = [{
            x: 270,
            frame: 50
        }, {
            x: 400,
            frame: 150
        }, {
            x: 450,
            frame: 200
        }, {
            x: 400,
            frame: 200
        }, {
            x: ARRIVAL_X - GREYHOUND_WIDTH / 2 - 250,
            frame: 200
        }, {
            x: CANVAS_WIDTH +
                GREYHOUND_WIDTH,
            frame: 40
        }];
        c = [{
            x: 190,
            frame: 30
        }, {
            x: 340,
            frame: 170
        }, {
            x: 360,
            frame: 300
        }, {
            x: 380,
            frame: 100
        }, {
            x: ARRIVAL_X - GREYHOUND_WIDTH / 2 - 390,
            frame: 200
        }, {
            x: CANVAS_WIDTH + GREYHOUND_WIDTH,
            frame: 45
        }];
        f = [{
            x: 220,
            frame: 100
        }, {
            x: 350,
            frame: 200
        }, {
            x: 400,
            frame: 200
        }, {
            x: 320,
            frame: 100
        }, {
            x: ARRIVAL_X - GREYHOUND_WIDTH / 2 - 550,
            frame: 200
        }, {
            x: CANVAS_WIDTH + GREYHOUND_WIDTH,
            frame: 50
        }];
        d = [{
            x: 210,
            frame: 50
        }, {
            x: 260,
            frame: 300
        }, {
            x: 300,
            frame: 200
        }, {
            x: 220,
            frame: 100
        }, {
            x: ARRIVAL_X - GREYHOUND_WIDTH / 2 - 650,
            frame: 150
        }, {
            x: CANVAS_WIDTH + GREYHOUND_WIDTH,
            frame: 55
        }];
        g.push({
            place_1: b,
            place_2: a,
            place_3: e,
            place_4: c,
            place_5: f,
            place_6: d
        });
        b = [{
            x: 230,
            frame: 50
        }, {
            x: 430,
            frame: 300
        }, {
            x: ARRIVAL_X - GREYHOUND_WIDTH / 2,
            frame: 450
        }, {
            x: CANVAS_WIDTH + GREYHOUND_WIDTH,
            frame: 30
        }];
        a = [{
            x: 250,
            frame: 100
        }, {
            x: 350,
            frame: 150
        }, {
            x: 450,
            frame: 150
        }, {
            x: 500,
            frame: 200
        }, {
            x: ARRIVAL_X - GREYHOUND_WIDTH / 2 - 150,
            frame: 200
        }, {
            x: CANVAS_WIDTH + GREYHOUND_WIDTH,
            frame: 35
        }];
        e = [{
            x: 270,
            frame: 50
        }, {
            x: 200,
            frame: 150
        }, {
            x: 450,
            frame: 400
        }, {
            x: ARRIVAL_X - GREYHOUND_WIDTH / 2 - 250,
            frame: 200
        }, {
            x: CANVAS_WIDTH + GREYHOUND_WIDTH,
            frame: 40
        }];
        c = [{
            x: 190,
            frame: 30
        }, {
            x: 340,
            frame: 170
        }, {
            x: 360,
            frame: 300
        }, {
            x: 380,
            frame: 100
        }, {
            x: ARRIVAL_X - GREYHOUND_WIDTH / 2 - 390,
            frame: 200
        }, {
            x: CANVAS_WIDTH + GREYHOUND_WIDTH,
            frame: 45
        }];
        f = [{
            x: 220,
            frame: 100
        }, {
            x: 350,
            frame: 200
        }, {
            x: 400,
            frame: 200
        }, {
            x: 320,
            frame: 100
        }, {
            x: ARRIVAL_X - GREYHOUND_WIDTH / 2 - 550,
            frame: 200
        }, {
            x: CANVAS_WIDTH + GREYHOUND_WIDTH,
            frame: 50
        }];
        d = [{
            x: 210,
            frame: 50
        }, {
            x: 260,
            frame: 300
        }, {
            x: 300,
            frame: 200
        }, {
            x: 220,
            frame: 100
        }, {
            x: ARRIVAL_X - GREYHOUND_WIDTH / 2 - 650,
            frame: 150
        }, {
            x: CANVAS_WIDTH + GREYHOUND_WIDTH,
            frame: 55
        }];
        g.push({
            place_1: b,
            place_2: a,
            place_3: e,
            place_4: c,
            place_5: f,
            place_6: d
        });
        b = [{
            x: 230,
            frame: 50
        }, {
            x: 250,
            frame: 300
        }, {
            x: ARRIVAL_X - GREYHOUND_WIDTH / 2,
            frame: 450
        }, {
            x: CANVAS_WIDTH + GREYHOUND_WIDTH,
            frame: 30
        }];
        a = [{
            x: 250,
            frame: 50
        }, {
            x: 430,
            frame: 300
        }, {
            x: ARRIVAL_X - GREYHOUND_WIDTH / 2 - 150,
            frame: 450
        }, {
            x: CANVAS_WIDTH + GREYHOUND_WIDTH,
            frame: 35
        }];
        e = [{
            x: 270,
            frame: 50
        }, {
            x: 330,
            frame: 300
        }, {
            x: ARRIVAL_X - GREYHOUND_WIDTH / 2 - 250,
            frame: 450
        }, {
            x: CANVAS_WIDTH + GREYHOUND_WIDTH,
            frame: 40
        }];
        c = [{
            x: 190,
            frame: 50
        }, {
            x: 230,
            frame: 300
        }, {
            x: ARRIVAL_X - GREYHOUND_WIDTH /
                2 - 390,
            frame: 450
        }, {
            x: CANVAS_WIDTH + GREYHOUND_WIDTH,
            frame: 45
        }];
        f = [{
            x: 220,
            frame: 50
        }, {
            x: 300,
            frame: 300
        }, {
            x: ARRIVAL_X - GREYHOUND_WIDTH / 2 - 550,
            frame: 450
        }, {
            x: CANVAS_WIDTH + GREYHOUND_WIDTH,
            frame: 50
        }];
        d = [{
            x: 210,
            frame: 50
        }, {
            x: 130,
            frame: 300
        }, {
            x: ARRIVAL_X - GREYHOUND_WIDTH / 2 - 650,
            frame: 450
        }, {
            x: CANVAS_WIDTH + GREYHOUND_WIDTH,
            frame: 55
        }];
        g.push({
            place_1: b,
            place_2: a,
            place_3: e,
            place_4: c,
            place_5: f,
            place_6: d
        });
        b = [{
            x: 210,
            frame: 50
        }, {
            x: 130,
            frame: 300
        }, {
            x: ARRIVAL_X - GREYHOUND_WIDTH / 2,
            frame: 450
        }, {
            x: CANVAS_WIDTH + GREYHOUND_WIDTH,
            frame: 30
        }];
        a = [{
            x: 220,
            frame: 50
        }, {
            x: 300,
            frame: 300
        }, {
            x: ARRIVAL_X - GREYHOUND_WIDTH / 2 - 150,
            frame: 450
        }, {
            x: CANVAS_WIDTH + GREYHOUND_WIDTH,
            frame: 35
        }];
        e = [{
            x: 270,
            frame: 50
        }, {
            x: 330,
            frame: 300
        }, {
            x: ARRIVAL_X - GREYHOUND_WIDTH / 2 - 250,
            frame: 450
        }, {
            x: CANVAS_WIDTH + GREYHOUND_WIDTH,
            frame: 40
        }];
        c = [{
            x: 250,
            frame: 50
        }, {
            x: 430,
            frame: 300
        }, {
            x: ARRIVAL_X - GREYHOUND_WIDTH / 2 - 390,
            frame: 450
        }, {
            x: CANVAS_WIDTH + GREYHOUND_WIDTH,
            frame: 45
        }];
        f = [{
            x: 190,
            frame: 50
        }, {
            x: 190,
            frame: 300
        }, {
            x: ARRIVAL_X - GREYHOUND_WIDTH / 2 - 550,
            frame: 450
        }, {
            x: CANVAS_WIDTH + GREYHOUND_WIDTH,
            frame: 50
        }];
        d = [{
            x: 230,
            frame: 50
        }, {
            x: 250,
            frame: 300
        }, {
            x: ARRIVAL_X - GREYHOUND_WIDTH / 2 - 650,
            frame: 450
        }, {
            x: CANVAS_WIDTH + GREYHOUND_WIDTH,
            frame: 55
        }];
        g.push({
            place_1: b,
            place_2: a,
            place_3: e,
            place_4: c,
            place_5: f,
            place_6: d
        });
        b = [{
            x: 330,
            frame: 30
        }, {
            x: 450,
            frame: 180
        }, {
            x: 550,
            frame: 180
        }, {
            x: 650,
            frame: 200
        }, {
            x: ARRIVAL_X - GREYHOUND_WIDTH / 2,
            frame: 210
        }, {
            x: CANVAS_WIDTH + GREYHOUND_WIDTH,
            frame: 30
        }];
        a = [{
            x: 250,
            frame: 90
        }, {
            x: 450,
            frame: 300
        }, {
            x: 600,
            frame: 200
        }, {
            x: ARRIVAL_X - GREYHOUND_WIDTH / 2 - 150,
            frame: 210
        }, {
            x: CANVAS_WIDTH + GREYHOUND_WIDTH,
            frame: 35
        }];
        e = [{
            x: 270,
            frame: 30
        }, {
            x: 400,
            frame: 150
        }, {
            x: 450,
            frame: 210
        }, {
            x: 600,
            frame: 140
        }, {
            x: 500,
            frame: 130
        }, {
            x: ARRIVAL_X - GREYHOUND_WIDTH / 2 - 250,
            frame: 140
        }, {
            x: CANVAS_WIDTH + GREYHOUND_WIDTH,
            frame: 40
        }];
        c = [{
            x: 290,
            frame: 30
        }, {
            x: 340,
            frame: 150
        }, {
            x: 360,
            frame: 300
        }, {
            x: ARRIVAL_X - GREYHOUND_WIDTH / 2 - 410,
            frame: 320
        }, {
            x: CANVAS_WIDTH + GREYHOUND_WIDTH,
            frame: 45
        }];
        f = [{
            x: 220,
            frame: 30
        }, {
            x: 350,
            frame: 280
        }, {
            x: 400,
            frame: 190
        }, {
            x: 320,
            frame: 100
        }, {
            x: ARRIVAL_X - GREYHOUND_WIDTH / 2 - 550,
            frame: 200
        }, {
            x: CANVAS_WIDTH + GREYHOUND_WIDTH,
            frame: 50
        }];
        d = [{
                x: 310,
                frame: 30
            },
            {
                x: 400,
                frame: 290
            }, {
                x: ARRIVAL_X - GREYHOUND_WIDTH / 2 - 650,
                frame: 480
            }, {
                x: CANVAS_WIDTH + GREYHOUND_WIDTH,
                frame: 55
            }
        ];
        g.push({
            place_1: b,
            place_2: a,
            place_3: e,
            place_4: c,
            place_5: f,
            place_6: d
        })
    };
    this._initGreyhoundInfo = function() {
        h = [];
        h[0] = {
            start: new createjs.Point(208, 342),
            scale: .66
        };
        h[1] = {
            start: new createjs.Point(186, 352),
            scale: .7
        };
        h[2] = {
            start: new createjs.Point(163, 363),
            scale: .74
        };
        h[3] = {
            start: new createjs.Point(134, 376),
            scale: .8
        };
        h[4] = {
            start: new createjs.Point(99, 394),
            scale: .9
        };
        h[5] = {
            start: new createjs.Point(53,
                415),
            scale: 1
        }
    };
    this.getIndexForFiches = function(b) {
        for (var a = 0, e = 0; e < f.length; e++) f[e] === b && (a = e);
        return a
    };
    this.getGreyhoundPercentageArray = function() {
        for (var b = [], a = 0; a < c.length; a++)
            for (var e = Math.floor(c[a]), f = 0; f < e; f++) b.push(a);
        return b = shuffle(b)
    };
    this.getGreyhoundName = function(b) {
        return d[b]
    };
    this.getAllGreyhoundNames = function() {
        return d
    };
    this.getOddWin = function(b) {
        return c[b]
    };
    this.getOddPlace = function(a) {
        return b[a]
    };
    this.getOddShow = function(b) {
        return e[b]
    };
    this.getForecastOdd = function(b,
        a) {
        return k[b][a]
    };
    this.getRandomPath = function() {
        return g[Math.floor(Math.random() * g.length)]
    };
    this.getGreyhoundInfo = function(b) {
        return h[b]
    };
    s_oGameSettings = this;
    this._init(a)
}
var s_oGameSettings = null,
    TEXT_CURRENCY = "$",
    TEXT_START_RACE = "START RACE",
    TEXT_CLEAR_BET = "CLEAR BET",
    TEXT_MONEY = "MONEY",
    TEXT_BET = "BET",
    TEXT_MIN_BET = "MIN BET",
    TEXT_MAX_BET = "MAX BET",
    TEXT_TRAP = "TRAP",
    TEXT_GREYHOUND_NAME = "GREYHOUND NAME",
    TEXT_ODDS = "ODDS",
    TEXT_WINS = "WINS",
    TEXT_PLACE = "PLACE",
    TEXT_SHOW = "SHOW",
    TEXT_WIN = "WIN",
    TEXT_NO_WIN = "NO WIN",
    TEXT_CREDITS_DEVELOPED = "DEVELOPED BY",
    TEXT_NO_MONEY = "NOT ENOUGH MONEY!!",
    TEXT_ERR_MAX_BET = "YOUR BET IS HIGHER THAN MAXIMUM ONE!!",
    TEXT_ERR_MIN_BET = "YOUR BET IS LOWER THAN MINIMUM ONE!!",
    TEXT_ARE_YOU_SURE = "ALL YOUR BETS WILL BE LOST!! ARE YOU SURE?";
TEXT_SHARE_IMAGE = "200x200.jpg";
TEXT_SHARE_TITLE = "Congratulations!";
TEXT_SHARE_MSG1 = "You collected <strong>";
TEXT_SHARE_MSG2 = " points</strong>!<br><br>Share your score with your friends!";
TEXT_SHARE_SHARE1 = "My score is ";
TEXT_SHARE_SHARE2 = " points! Can you do better";

function CPreloader() {
    var a, d, c, b, e, k, f;
    this._init = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("bg_preloader", "./sprites/bg_preloader.jpg");
        s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
        s_oSpriteLibrary.loadSprites();
        f = new createjs.Container;
        s_oStage.addChild(f)
    };
    this.unload = function() {
        f.removeAllChildren()
    };
    this.hide = function() {
        var b = this;
        setTimeout(function() {
            createjs.Tween.get(k).to({
                alpha: 1
            }, 500).call(function() {
                b.unload();
                s_oMain.gotoMenu()
            })
        }, 1E3)
    };
    this._onImagesLoaded = function() {};
    this._onAllImagesLoaded = function() {
        this.attachSprites();
        s_oMain.preloaderReady()
    };
    this.attachSprites = function() {
        var g = createBitmap(s_oSpriteLibrary.getSprite("bg_preloader"));
        f.addChild(g);
        g = s_oSpriteLibrary.getSprite("progress_bar");
        b = createBitmap(g);
        b.x = CANVAS_WIDTH / 2 - g.width / 2;
        b.y = CANVAS_HEIGHT - 240;
        f.addChild(b);
        a = g.width;
        d = g.height;
        e = new createjs.Shape;
        e.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(b.x, b.y, 1, d);
        f.addChild(e);
        b.mask = e;
        c = new createjs.Text("", "30px " + PRIMARY_FONT, "#fff");
        c.x = CANVAS_WIDTH / 2;
        c.y = CANVAS_HEIGHT - 250;
        c.shadow = new createjs.Shadow("#000", 2, 2, 2);
        c.textBaseline = "alphabetic";
        c.textAlign = "center";
        f.addChild(c);
        k = new createjs.Shape;
        k.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        k.alpha = 0;
        f.addChild(k)
    };
    this.refreshLoader = function(f) {
        c.text = f + "%";
        e.graphics.clear();
        f = Math.floor(f * a / 100);
        e.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(b.x, b.y, f, d)
    };
    this._init()
}

function CMain(a) {
    var d, c = 0,
        b = 0,
        e = STATE_LOADING,
        k, f;
    this.initContainer = function() {
        s_oCanvas = document.getElementById("canvas");
        s_oStage = new createjs.Stage(s_oCanvas);
        s_oStage.preventSelection = !1;
        createjs.Touch.enable(s_oStage);
        s_bMobile = jQuery.browser.mobile;
        !1 === s_bMobile && (s_oStage.enableMouseOver(20), $("body").on("contextmenu", "#canvas", function(b) {
            return !1
        }));
        s_iPrevTime = (new Date).getTime();
        createjs.Ticker.addEventListener("tick", this._update);
        createjs.Ticker.setFPS(FPS);
        navigator.userAgent.match(/Windows Phone/i) &&
            (DISABLE_SOUND_MOBILE = !0);
        s_oSpriteLibrary = new CSpriteLibrary;
        k = new CPreloader
        // seekAndDestroy() ? k = new CPreloader : window.location.href = "http://www.codethislab.com/contact-us.html"
    };
    this.preloaderReady = function() {
        jQuery.getJSON("greyhound_info.json", this.onLoadedJSON);
        // this.onLoadedJSON
        d = !0
    };
    this.onLoadedJSON = function(b) {
        // let zz = JSON.parse(' { "greyhound_names":["psycho","all saturdays","the norman","t-rex","nice tuft","baloo"],    "odd_win_bet":[3.7,5.5,2.2,11.75,17.25,8.75],    "odd_place_bet":[1.95,2.55,1.25,5.5,7.75,3.05],    "odd_show_bet":[1.25,1.7,1.09,2.55,4,1.75],    "forecast":[{"first":1,"second":2,"odd":20},{"first":1,"second":3,"odd":6.25},{"first":1,"second":4,"odd":60},{"first":1,"second":5,"odd":80},{"first":1,"second":6,"odd":23},                {"first":2,"second":1,"odd":28},{"first":2,"second":3,"odd":10.25},{"first":2,"second":4,"odd":65},{"first":2,"second":5,"odd":68},{"first":2,"second":6,"odd":38},                {"first":3,"second":1,"odd":5.75},{"first":3,"second":2,"odd":8.75},{"first":3,"second":4,"odd":26},{"first":3,"second":5,"odd":31},{"first":3,"second":6,"odd":9},                {"first":4,"second":1,"odd":84},{"first":4,"second":2,"odd":56},{"first":4,"second":3,"odd":23},{"first":4,"second":5,"odd":80},{"first":4,"second":6,"odd":65},                {"first":5,"second":1,"odd":70},{"first":5,"second":2,"odd":70},{"first":5,"second":3,"odd":68},{"first":5,"second":4,"odd":84},{"first":5,"second":6,"odd":80},                {"first":6,"second":1,"odd":48},{"first":6,"second":2,"odd":58},{"first":6,"second":3,"odd":13},{"first":6,"second":4,"odd":70},{"first":6,"second":5,"odd":80}] }')
        // s_oGameSettings = new CGameSettings(zz);
        s_oGameSettings = new CGameSettings(b);
        s_oBetList = new CBetList;
        s_oMain._loadImages();
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_oMain._initSounds()
    };
    this.soundLoaded = function() {
        c++;
        k.refreshLoader(Math.floor(c / b * 100));
        c === b && this._onRemovePreloader()
    };
    this._initSounds = function() {
        var a = [];
        a.push({
            path: "./sounds/",
            filename: "chip",
            loop: !1,
            volume: 1,
            ingamename: "chip"
        });
        a.push({
            path: "./sounds/",
            filename: "click",
            loop: !1,
            volume: 1,
            ingamename: "click"
        });
        a.push({
            path: "./sounds/",
            filename: "start_race",
            loop: !1,
            volume: 1,
            ingamename: "start_race"
        });
        a.push({
            path: "./sounds/",
            filename: "photo",
            loop: !1,
            volume: 1,
            ingamename: "photo"
        });
        a.push({
            path: "./sounds/",
            filename: "soundtrack",
            loop: !0,
            volume: 1,
            ingamename: "soundtrack"
        });
        b += a.length;
        s_aSounds = [];
        for (var e = 0; e < a.length; e++) s_aSounds[a[e].ingamename] = new Howl({
            src: [a[e].path + a[e].filename + ".mp3", a[e].path + a[e].filename + ".ogg"],
            autoplay: !1,
            preload: !0,
            loop: a[e].loop,
            volume: a[e].volume,
            onload: s_oMain.soundLoaded()
        })
    };
    this._loadImages = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
        s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
        s_oSpriteLibrary.addSprite("audio_icon",
            "./sprites/audio_icon.png");
        s_oSpriteLibrary.addSprite("but_play", "./sprites/but_play.png");
        s_oSpriteLibrary.addSprite("but_restart", "./sprites/but_restart.png");
        s_oSpriteLibrary.addSprite("but_home", "./sprites/but_home.png");
        s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
        s_oSpriteLibrary.addSprite("but_credits", "./sprites/but_credits.png");
        s_oSpriteLibrary.addSprite("logo_ctl", "./sprites/logo_ctl.png");
        s_oSpriteLibrary.addSprite("but_fullscreen", "./sprites/but_fullscreen.png");
        s_oSpriteLibrary.addSprite("but_no",
            "./sprites/but_no.png");
        s_oSpriteLibrary.addSprite("but_yes", "./sprites/but_yes.png");
        s_oSpriteLibrary.addSprite("arrow_left", "./sprites/arrow_left.png");
        s_oSpriteLibrary.addSprite("arrow_right", "./sprites/arrow_right.png");
        s_oSpriteLibrary.addSprite("fiche_0", "./sprites/fiche_0.png");
        s_oSpriteLibrary.addSprite("fiche_1", "./sprites/fiche_1.png");
        s_oSpriteLibrary.addSprite("fiche_2", "./sprites/fiche_2.png");
        s_oSpriteLibrary.addSprite("fiche_3", "./sprites/fiche_3.png");
        s_oSpriteLibrary.addSprite("fiche_4",
            "./sprites/fiche_4.png");
        s_oSpriteLibrary.addSprite("fiche_5", "./sprites/fiche_5.png");
        s_oSpriteLibrary.addSprite("bg_bet_panel", "./sprites/bg_bet_panel.jpg");
        s_oSpriteLibrary.addSprite("money_panel", "./sprites/money_panel.png");
        s_oSpriteLibrary.addSprite("simple_bet_panel", "./sprites/simple_bet_panel.png");
        s_oSpriteLibrary.addSprite("forecast_panel", "./sprites/forecast_panel.png");
        s_oSpriteLibrary.addSprite("bet_place", "./sprites/bet_place.png");
        s_oSpriteLibrary.addSprite("fiche_highlight", "./sprites/fiche_highlight.png");
        s_oSpriteLibrary.addSprite("odd_bg", "./sprites/odd_bg.png");
        s_oSpriteLibrary.addSprite("rank_panel", "./sprites/rank_panel.png");
        s_oSpriteLibrary.addSprite("panel_arrival", "./sprites/panel_arrival.png");
        s_oSpriteLibrary.addSprite("bibs", "./sprites/bibs.png");
        s_oSpriteLibrary.addSprite("but_skip", "./sprites/but_skip.png");
        s_oSpriteLibrary.addSprite("logo_menu", "./sprites/logo_menu.png");
        s_oSpriteLibrary.addSprite("but_start_race", "./sprites/but_start_race.png");
        s_oSpriteLibrary.addSprite("but_clear_bet",
            "./sprites/but_clear_bet.png");
        s_oSpriteLibrary.addSprite("fiche_panel", "./sprites/fiche_panel.png");
        s_oSpriteLibrary.addSprite("fill_bar", "./sprites/fill_bar.png");
        s_oSpriteLibrary.addSprite("win_panel", "./sprites/win_panel.png");
        s_oSpriteLibrary.addSprite("lose_panel", "./sprites/lose_panel.png");
        for (var a = 0; a < NUM_GREYHOUNDS; a++) s_oSpriteLibrary.addSprite("bib_gui_" + a, "./sprites/bib_gui_" + a + ".png"), s_oSpriteLibrary.addSprite("greyhound_" + (a + 1), "./sprites/greyhound_" + (a + 1) + ".png");
        for (a = 0; a < NUM_TRACK_BG; a++) s_oSpriteLibrary.addSprite("bg_track_" +
            a, "./sprites/bg_track/bg_track_" + a + ".jpg");
        b += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites()
    };
    this._onImagesLoaded = function() {
        c++;
        k.refreshLoader(Math.floor(c / b * 100));
        c === b && this._onRemovePreloader()
    };
    this._onAllImagesLoaded = function() {};
    this.onAllPreloaderImagesLoaded = function() {
        this._loadImages()
    };
    this._onRemovePreloader = function() {
        try {
            saveItem("ls_available", "ok")
        } catch (g) {
            s_bStorageAvailable = !1
        }
        k.unload();
        isIOS() || !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || (s_oSoundTrack = playSound("soundtrack",
            1, !0));
        this.gotoMenu()
    };
    this.gotoMenu = function() {
        new CMenu;
        e = STATE_MENU
    };
    this.gotoBetPanel = function() {
        new CBetPanel;
        e = STATE_BET_PANEL;
        $(s_oMain).trigger("start_session")
    };
    this.gotoGame = function(b) {
        f = new CGame(b);
        e = STATE_GAME
    };
    this.stopUpdate = function() {
        d = !1;
        createjs.Ticker.paused = !0;
        $("#block_game").css("display", "block");
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || Howler.mute(!0)
    };
    this.startUpdate = function() {
        s_iPrevTime = (new Date).getTime();
        d = !0;
        createjs.Ticker.paused = !1;
        $("#block_game").css("display",
            "none");
        (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) && s_bAudioActive && Howler.mute(!1)
    };
    this._update = function(b) {
        if (!1 !== d) {
            var a = (new Date).getTime();
            s_iTimeElaps = a - s_iPrevTime;
            s_iCntTime += s_iTimeElaps;
            s_iCntFps++;
            s_iPrevTime = a;
            1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps, s_iCntTime -= 1E3, s_iCntFps = 0);
            e === STATE_GAME && f.update();
            s_oStage.update(b)
        }
    };
    s_oMain = this;
    s_iCurMoney = a.money;
    s_iGameCash = a.game_cash;
    CHIP_VALUES = a.chip_values;
    MIN_BET = a.min_bet;
    MAX_BET = a.max_bet;
    WIN_OCCURRENCE = a.win_occurrence;
    AD_SHOW_COUNTER =
        a.num_levels_for_ads;
    SHOW_CREDITS = a.show_credits;
    ENABLE_FULLSCREEN = a.fullscreen;
    ENABLE_CHECK_ORIENTATION = a.check_orientation;
    NUM_CHIPS = CHIP_VALUES.length;
    this.initContainer()
}
var s_bMobile, s_bAudioActive = !0,
    s_bFullscreen = !1,
    s_iCntTime = 0,
    s_iTimeElaps = 0,
    s_iPrevTime = 0,
    s_iCntFps = 0,
    s_iCurFps = 0,
    s_oDrawLayer, s_oStage, s_oMain, s_oSpriteLibrary, s_oSoundTrack = null,
    s_oCanvas, s_bStorageAvailable = !0,
    s_iCurMoney, s_iGameCash, s_iAdCounter = 0,
    s_aSounds;

function CTextButton(a, d, c, b, e, k, f, g) {
    var h, l, m, n, q, u, t;
    this._init = function(b, a, e, f, c, d, k) {
        h = [];
        l = [];
        var g = createBitmap(e),
            r = Math.ceil(k / 20);
        q = new createjs.Text(f, k + "px " + c, "#000000");
        q.textAlign = "center";
        q.textBaseline = "alphabetic";
        var w = q.getBounds();
        q.x = e.width / 2 + r;
        q.y = Math.floor(e.height / 2) + w.height / 3 + r;
        n = new createjs.Text(f, k + "px " + c, d);
        n.textAlign = "center";
        n.textBaseline = "alphabetic";
        w = n.getBounds();
        n.x = e.width / 2;
        n.y = Math.floor(e.height / 2) + w.height / 3;
        m = new createjs.Container;
        m.x = b;
        m.y = a;
        m.regX =
            e.width / 2;
        m.regY = e.height / 2;
        m.addChild(g, q, n);
        p.addChild(m);
        s_bMobile || (m.cursor = "pointer");
        this._initListener()
    };
    this.unload = function() {
        m.off("mousedown", u);
        m.off("pressup", t);
        p.removeChild(m)
    };
    this.setVisible = function(b) {
        m.visible = b
    };
    this._initListener = function() {
        u = m.on("mousedown", this.buttonDown);
        t = m.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(b, a, e) {
        h[b] = a;
        l[b] = e
    };
    this.buttonRelease = function() {
        m.scaleX = 1;
        m.scaleY = 1;
        playSound("click", 1, 0);
        h[ON_MOUSE_UP] && h[ON_MOUSE_UP].call(l[ON_MOUSE_UP])
    };
    this.buttonDown = function() {
        m.scaleX = .9;
        m.scaleY = .9;
        h[ON_MOUSE_DOWN] && h[ON_MOUSE_DOWN].call(l[ON_MOUSE_DOWN])
    };
    this.setTextPosition = function(b) {
        n.y = b;
        q.y = b + 2
    };
    this.setPosition = function(b, a) {
        m.x = b;
        m.y = a
    };
    this.setX = function(b) {
        m.x = b
    };
    this.setY = function(b) {
        m.y = b
    };
    this.getButtonImage = function() {
        return m
    };
    this.getX = function() {
        return m.x
    };
    this.getY = function() {
        return m.y
    };
    var p = g;
    this._init(a, d, c, b, e, k, f);
    return this
}

function CToggle(a, d, c, b, e) {
    var k, f, g, h, l, m, n;
    this._init = function(b, a, e, c, d) {
        n = void 0 !== d ? d : s_oStage;
        f = [];
        g = [];
        d = new createjs.SpriteSheet({
            images: [e],
            frames: {
                width: e.width / 2,
                height: e.height,
                regX: e.width / 2 / 2,
                regY: e.height / 2
            },
            animations: {
                state_true: [0],
                state_false: [1]
            }
        });
        k = c;
        h = createSprite(d, "state_" + k, e.width / 2 / 2, e.height / 2, e.width / 2, e.height);
        h.x = b;
        h.y = a;
        h.stop();
        s_bMobile || (h.cursor = "pointer");
        n.addChild(h);
        this._initListener()
    };
    this.unload = function() {
        h.off("mousedown", l);
        h.off("pressup", m);
        n.removeChild(h)
    };
    this._initListener = function() {
        l = h.on("mousedown", this.buttonDown);
        m = h.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(b, a, e) {
        f[b] = a;
        g[b] = e
    };
    this.setCursorType = function(b) {
        h.cursor = b
    };
    this.setActive = function(b) {
        k = b;
        h.gotoAndStop("state_" + k)
    };
    this.buttonRelease = function() {
        h.scaleX = 1;
        h.scaleY = 1;
        playSound("click", 1, 0);
        k = !k;
        h.gotoAndStop("state_" + k);
        f[ON_MOUSE_UP] && f[ON_MOUSE_UP].call(g[ON_MOUSE_UP], k)
    };
    this.buttonDown = function() {
        h.scaleX = .9;
        h.scaleY = .9;
        f[ON_MOUSE_DOWN] && f[ON_MOUSE_DOWN].call(g[ON_MOUSE_DOWN])
    };
    this.setPosition = function(b, a) {
        h.x = b;
        h.y = a
    };
    this._init(a, d, c, b, e)
}

function CGfxButton(a, d, c, b) {
    var e, k, f, g, h, l, m, n, q = !1;
    this._init = function(b, a, c) {
        e = [];
        k = [];
        g = [];
        f = createBitmap(c);
        f.x = b;
        f.y = a;
        l = h = 1;
        f.regX = c.width / 2;
        f.regY = c.height / 2;
        s_bMobile || (f.cursor = "pointer");
        u.addChild(f);
        this._initListener()
    };
    this.unload = function() {
        f.off("mousedown", m);
        f.off("pressup", n);
        u.removeChild(f)
    };
    this.setVisible = function(b) {
        f.visible = b
    };
    this.setCursorType = function(b) {
        f.cursor = b
    };
    this._initListener = function() {
        m = f.on("mousedown", this.buttonDown);
        n = f.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(b, a, c) {
        e[b] = a;
        k[b] = c
    };
    this.addEventListenerWithParams = function(b, a, c, f) {
        e[b] = a;
        k[b] = c;
        g[b] = f
    };
    this.buttonRelease = function() {
        q || (f.scaleX = 0 < h ? h : -h, f.scaleY = l, playSound("click", 1, 0), e[ON_MOUSE_UP] && e[ON_MOUSE_UP].call(k[ON_MOUSE_UP], g[ON_MOUSE_UP]))
    };
    this.buttonDown = function() {
        q || (f.scaleX = 0 < h ? .9 * h : .9 * -h, f.scaleY = .9 * l, e[ON_MOUSE_DOWN] && e[ON_MOUSE_DOWN].call(k[ON_MOUSE_DOWN], g[ON_MOUSE_DOWN]))
    };
    this.rotation = function(b) {
        f.rotation = b
    };
    this.getButton = function() {
        return f
    };
    this.setPosition = function(b, a) {
        f.x = b;
        f.y = a
    };
    this.setX = function(b) {
        f.x = b
    };
    this.setY = function(b) {
        f.y = b
    };
    this.getButtonImage = function() {
        return f
    };
    this.block = function(b) {
        q = b;
        f.scaleX = h;
        f.scaleY = l
    };
    this.setScaleX = function(b) {
        h = f.scaleX = b
    };
    this.setScale = function(b) {
        l = h = b;
        f.scaleX = f.scaleY = b
    };
    this.getX = function() {
        return f.x
    };
    this.getY = function() {
        return f.y
    };
    this.pulseAnimation = function() {
        createjs.Tween.get(f).to({
            scaleX: .9 * h,
            scaleY: .9 * l
        }, 850, createjs.Ease.quadOut).to({
            scaleX: h,
            scaleY: l
        }, 650, createjs.Ease.quadIn).call(function() {
            t.pulseAnimation()
        })
    };
    this.trebleAnimation = function() {
        createjs.Tween.get(f).to({
            rotation: 5
        }, 75, createjs.Ease.quadOut).to({
            rotation: -5
        }, 140, createjs.Ease.quadIn).to({
            rotation: 0
        }, 75, createjs.Ease.quadIn).wait(750).call(function() {
            t.trebleAnimation()
        })
    };
    this.removeAllTweens = function() {
        createjs.Tween.removeTweens(f)
    };
    var u = void 0 !== b ? b : s_oStage;
    this._init(a, d, c);
    var t = this;
    return this
}

function CMenu() {
    var a, d, c, b, e, k, f, g, h, l, m, n, q, u, t, p = null,
        r, v = null,
        w = null,
        x;
    this._init = function() {
        m = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        s_oStage.addChild(m);
        var p = s_oSpriteLibrary.getSprite("but_play");
        h = CANVAS_WIDTH / 2;
        l = CANVAS_HEIGHT - p.height / 2 - 10;
        n = new CGfxButton(h, l, p);
        n.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
        p = s_oSpriteLibrary.getSprite("but_credits");
        SHOW_CREDITS ? (e = 10 + p.width / 2, k = p.height / 2 + 10, t = new CGfxButton(e, k, p), t.addEventListener(ON_MOUSE_UP, this._onCredits,
            this), c = e + p.width + 10, b = k) : (c = 10 + p.width / 2, b = p.height / 2 + 10);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) p = s_oSpriteLibrary.getSprite("audio_icon"), f = CANVAS_WIDTH - p.width / 4 - 10, g = p.height / 2 + 10, u = new CToggle(f, g, p, s_bAudioActive, s_oStage), u.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        p = window.document;
        var z = p.documentElement;
        v = z.requestFullscreen || z.mozRequestFullScreen || z.webkitRequestFullScreen || z.msRequestFullscreen;
        w = p.exitFullscreen || p.mozCancelFullScreen || p.webkitExitFullscreen || p.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (v = !1);
        v && !1 === inIframe() && (p = s_oSpriteLibrary.getSprite("but_fullscreen"), r = new CToggle(c, b, p, s_bFullscreen, s_oStage), r.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        p = s_oSpriteLibrary.getSprite("logo_menu");
        a = CANVAS_WIDTH / 2;
        d = 10;
        x = createBitmap(p);
        x.regX = p.width / 2;
        x.x = a;
        x.y = d;
        s_oStage.addChild(x);
        q = new createjs.Shape;
        q.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(q);
        createjs.Tween.get(q).to({
            alpha: 0
        }, 1E3).call(function() {
            s_oStage.removeChild(q)
        });
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.unload = function() {
        n.unload();
        n = null;
        SHOW_CREDITS && t.unload();
        s_oStage.removeChild(m);
        m = null;
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) u.unload(), u = null;
        v && !1 === inIframe() && r.unload();
        s_oMenu = null
    };
    this.refreshButtonPos = function(a, q) {
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || u.setPosition(f - a, g + q);
        v && !1 === inIframe() && r.setPosition(c + a, b + q);
        n.setPosition(h, l - q);
        SHOW_CREDITS && t.setPosition(e + a, k + q);
        null !== p && p.refreshButtonPos(a, q);
        x.y = d + q
    };
    this.exitFromCredits =
        function() {
            p = null
        };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onCredits = function() {
        p = new CCreditsPanel
    };
    this._onButPlayRelease = function() {
        this.unload();
        s_oMain.gotoBetPanel();
        !isIOS() || null !== s_oSoundTrack || !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || (s_oSoundTrack = playSound("soundtrack", 1, !0))
    };
    this.resetFullscreenBut = function() {
        r.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? w.call(window.document) : v.call(window.document.documentElement);
        sizeHandler()
    };
    s_oMenu = this;
    this._init()
}
var s_oMenu = null;

function CGame(a) {
    var d, c, b, e, k, f, g, h, l, m, n, q, u, t, p, r, v;
    this._init = function() {
        e = b = d = !1;
        g = f = 0;
        n = s_oGameSettings.getAllGreyhoundNames();
        setVolume("soundtrack", 0);
        s_oTweenController = new CTweenController;
        q = new createjs.Container;
        s_oStage.addChild(q);
        t = new CTrackBg(q);
        r = new CRankingGui(n, s_oStage);
        v = new CArrivalPanel(CANVAS_WIDTH, 240, s_oStage);
        p = new CInterface;
        this.generateFinalRank();
        this._prepareGreyHounds();
        u = new createjs.Shape;
        u.graphics.beginFill("white").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        u.alpha = 0;
        s_oStage.addChild(u);
        $(s_oMain).trigger("start_level", 1);
        setTimeout(function() {
            s_oGame.startRace()
        }, 1E3);
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.unload = function() {
        stopSound("start_race");
        p.unload();
        createjs.Tween.removeAllTweens();
        s_oStage.removeAllChildren();
        s_oGame = null
    };
    this.refreshButtonPos = function(b, a) {
        p.refreshButtonPos(b, a);
        r.refreshButtonPos(b, a)
    };
    this.pause = function() {
        d = !1;
        pauseSound("start_race");
        for (var b = 0; b < NUM_GREYHOUNDS; b++) m[b].pauseAnim()
    };
    this.unpause = function() {
        d = !0;
        playSound("start_race");
        for (var b = 0; b < NUM_GREYHOUNDS; b++) m[b].unpauseAnim()
    };
    this.onExit = function() {
        setVolume("soundtrack", 1);
        s_oGame.unload();
        s_oMain.gotoMenu();
        $(s_oMain).trigger("end_session");
        $(s_oMain).trigger("show_interlevel_ad");
        $(s_oMain).trigger("share_event", [s_iCurMoney])
    };
    this.gotoBetPanel = function() {
        setVolume("soundtrack", 1);
        s_oGame.unload();
        s_oMain.gotoBetPanel()
    };
    this.startRace = function() {
        playSound("start_race", 1, 0);
        p.blockExit(!1);
        d = !0
    };
    this.generateFinalRank = function() {
        s_oBetList.getMinWin() >
            s_iGameCash ? this._generateLosingResult() : 100 * Math.random() < WIN_OCCURRENCE ? this._generateWinResult() : this._generateLosingResult()
    };
    this._generateWinResult = function() {
        c = !0;
        do {
            h = this._generateRandomRank();
            var b = s_oBetList.getTotWinWithCurRank(h);
            k = b.tot_win
        } while (k <= a);
        l = b.win_list
    };
    this._generateLosingResult = function() {
        c = !1;
        do {
            h = this._generateRandomRank();
            var b = s_oBetList.getTotWinWithCurRank(h);
            k = b.tot_win
        } while (k > a);
        l = b.win_list
    };
    this._generateRandomRank = function() {
        for (var b = [], a = s_oGameSettings.getGreyhoundPercentageArray(); b.length <
            NUM_GREYHOUNDS;) {
            var e = a[Math.floor(Math.random() * a.length)];
            b.unshift(e);
            for (var c = a.length - 1; 0 <= c;) a[c] === e && a.splice(c, 1), c--
        }
        return b
    };
    this._prepareGreyHounds = function() {
        m = [];
        for (var b = s_oGameSettings.getRandomPath(), a = 0; a < NUM_GREYHOUNDS; a++) {
            var e = s_oGameSettings.getGreyhoundInfo(a),
                c = h.indexOf(a);
            m[a] = new CGreyhound(e.start, a + 1, n[a], e.scale, b["place_" + (c + 1)], q)
        }
    };
    this.startGreyhounds = function() {
        for (var b = 0; b < NUM_GREYHOUNDS; b++) m[b].startRace()
    };
    this.greyhoundPhotofinish = function(b, a) {
        p.blockExit(!0);
        v.refreshRank(b, a);
        f++;
        4 > f ? (d = !1, g = TIME_CHECK_RANK, this._playFlashAnim()) : 6 === f && (c || 0 < k ? (s_iCurMoney += k, s_iCurMoney = parseFloat(s_iCurMoney.toFixed(2)), s_iGameCash -= k, s_iGameCash = parseFloat(s_iGameCash.toFixed(2)), p.showWinPanel(k, l, h)) : p.showLosePanel(h), stopSound("start_race"), setVolume("soundtrack", 1), $(s_oMain).trigger("save_score", s_iCurMoney))
    };
    this.checkGreyhoundArrival = function() {
        b = !0
    };
    this._playFlashAnim = function() {
        for (var b = 0; b < NUM_GREYHOUNDS; b++) m[b].pauseAnim();
        playSound("photo", 1, 0);
        createjs.Tween.get(u).to({
            alpha: .8
        }, 200).call(function() {
            var b = (new createjs.ColorMatrix).adjustSaturation(-100);
            q.filters = [new createjs.ColorMatrixFilter(b)];
            q.cache(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            e = !0;
            createjs.Tween.get(u).to({
                alpha: 0
            }, 400).call(function() {
                s_oGame.restoreRaceAfterFlash()
            })
        })
    };
    this.restoreRaceAfterFlash = function() {
        setTimeout(function() {
            for (var b = 0; b < NUM_GREYHOUNDS; b++) m[b].unpauseAnim();
            q.filters = [];
            q.cache(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            d = !0
        }, 1E3)
    };
    this._refreshRank = function() {
        for (var b = [], a = 0; a < NUM_GREYHOUNDS; a++) {
            var e = m[a].getX();
            b[a] = {
                index: a,
                x: e
            }
        }
        b.sort(this.compareXPos);
        r.refreshRank(b)
    };
    this.compareXPos = function(b, a) {
        return b.x > a.x ? -1 : b.x < a.x ? 1 : 0
    };
    this.returnInBetPanel = function() {
        s_iAdCounter++;
        s_iAdCounter === AD_SHOW_COUNTER && (s_iAdCounter = 0, $(s_oMain).trigger("show_interlevel_ad"));
        s_oGame.gotoBetPanel()
    };
    this.update = function() {
        if (d) {
            var a = t.update();
            r.refreshRadar(a - 16);
            for (a = 0; a < NUM_GREYHOUNDS; a++) m[a].update(b);
            e && q.updateCache();
            g += s_iTimeElaps;
            g > TIME_CHECK_RANK && !b &&
                (g = 0, this._refreshRank())
        }
    };
    s_oGame = this;
    this._init()
}
var s_oGame = null,
    s_oTweenController;

function CInterface() {
    var a, d, c, b, e, k, f, g, h = null,
        l = null,
        m, n, q, u;
    this._init = function() {
        var t = s_oSpriteLibrary.getSprite("but_exit");
        a = CANVAS_WIDTH - t.width / 2 - 10;
        d = t.height / 2 + 10;
        m = new CGfxButton(a, d, t);
        m.block(!0);
        m.addEventListener(ON_MOUSE_UP, this._onExit, this);
        !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (t = s_oSpriteLibrary.getSprite("audio_icon"), e = a - t.width / 2 - 10, k = d, f = new CToggle(e, k, t, s_bAudioActive, s_oStage), f.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this), c = e - t.width / 2 - 10, b = k) : (c = a - t.width -
            10, b = d);
        t = window.document;
        var p = t.documentElement;
        h = p.requestFullscreen || p.mozRequestFullScreen || p.webkitRequestFullScreen || p.msRequestFullscreen;
        l = t.exitFullscreen || t.mozCancelFullScreen || t.webkitExitFullscreen || t.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (h = !1);
        h && !1 === inIframe() && (t = s_oSpriteLibrary.getSprite("but_fullscreen"), g = new CToggle(c, b, t, s_bFullscreen, s_oStage), g.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        q = new CLosePanel(s_oStage);
        n = new CWinPanel(s_oStage);
        u = new CAreYouSurePanel(s_oStage)
    };
    this.refreshButtonPos = function(l, n) {
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || f.setPosition(e - l, k + n);
        h && !1 === inIframe() && g.setPosition(c - l, b + n);
        m.setPosition(a - l, d + n)
    };
    this.showWinPanel = function(b, a, e) {
        n.show(b, a, e)
    };
    this.showLosePanel = function(b) {
        q.show(b)
    };
    this.unload = function() {
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) f.unload(), f = null;
        h && !1 === inIframe() && g.unload();
        n.unload();
        q.unload();
        u.unload();
        s_oInterface = null
    };
    this.blockExit = function(b) {
        m.block(b)
    };
    this._onExit = function() {
        s_oGame.pause();
        u.show()
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this.resetFullscreenBut = function() {
        g.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? l.call(window.document) : h.call(window.document.documentElement);
        sizeHandler()
    };
    s_oInterface = this;
    this._init();
    return this
}
var s_oInterface = null;

function CCreditsPanel() {
    var a, d, c, b, e, k, f, g, h, l;
    this._init = function() {
        l = new createjs.Container;
        s_oStage.addChild(l);
        a = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
        l.addChild(a);
        k = new createjs.Shape;
        k.graphics.beginFill("#0f0f0f").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        k.alpha = .01;
        h = k.on("click", this._onLogoButRelease);
        l.addChild(k);
        var m = s_oSpriteLibrary.getSprite("but_exit");
        c = new CGfxButton(715, 250, m, l);
        c.addEventListener(ON_MOUSE_UP, this.unload, this);
        e = new createjs.Text(TEXT_CREDITS_DEVELOPED,
            "40px " + PRIMARY_FONT, "#000");
        e.textAlign = "center";
        e.textBaseline = "alphabetic";
        e.x = CANVAS_WIDTH / 2;
        e.y = CANVAS_HEIGHT / 2 - 60;
        e.outline = 4;
        l.addChild(e);
        b = new createjs.Text(TEXT_CREDITS_DEVELOPED, "40px " + PRIMARY_FONT, "#ffb400");
        b.textAlign = "center";
        b.textBaseline = "alphabetic";
        b.x = CANVAS_WIDTH / 2;
        b.y = CANVAS_HEIGHT / 2 - 60;
        l.addChild(b);
        m = s_oSpriteLibrary.getSprite("logo_ctl");
        d = createBitmap(m);
        d.regX = m.width / 2;
        d.regY = m.height / 2;
        d.x = CANVAS_WIDTH / 2;
        d.y = CANVAS_HEIGHT / 2;
        l.addChild(d);
        g = new createjs.Text("www.codethislab.com",
            "36px " + PRIMARY_FONT, "#000");
        g.textAlign = "center";
        g.textBaseline = "alphabetic";
        g.x = CANVAS_WIDTH / 2;
        g.y = CANVAS_HEIGHT / 2 + 80;
        g.outline = 4;
        l.addChild(g);
        f = new createjs.Text("www.codethislab.com", "36px " + PRIMARY_FONT, "#ffb400");
        f.textAlign = "center";
        f.textBaseline = "alphabetic";
        f.x = CANVAS_WIDTH / 2;
        f.y = CANVAS_HEIGHT / 2 + 80;
        l.addChild(f)
    };
    this.unload = function() {
        k.off("click", h);
        c.unload();
        c = null;
        s_oStage.removeChild(l);
        s_oMenu.exitFromCredits()
    };
    this._onLogoButRelease = function() {
        window.open("http://www.codethislab.com/index.php?&l=en",
            "_blank")
    };
    this._init()
}

function CBetPanel() {
    var a, d, c, b, e, k, f, g, h, l, m, n, q, u, t, p, r, v;
    this._init = function() {
        f = e = 0;
        h = [];
        v = new createjs.Container;
        s_oStage.addChild(v);
        var w = createBitmap(s_oSpriteLibrary.getSprite("bg_bet_panel"));
        v.addChild(w);
        w = s_oSpriteLibrary.getSprite("but_exit");
        c = CANVAS_WIDTH - w.width / 2 - 10;
        b = w.height / 2 + 10;
        t = new CGfxButton(c, b, w, v);
        t.addEventListener(ON_MOUSE_UP, this.onExit, this);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) {
            var x = s_oSpriteLibrary.getSprite("audio_icon");
            a = c - w.width - 10;
            d = x.height / 2 + 10;
            p = new CToggle(a, d, x, s_bAudioActive, s_oStage);
            p.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this)
        }
        w = s_oSpriteLibrary.getSprite("simple_bet_panel");
        BET_PANEL_WIDTH = w.width;
        BET_PANEL_HEIGHT = w.height;
        r = new createjs.Container;
        r.x = BET_PANEL_X;
        r.y = BET_PANEL_Y;
        v.addChild(r);
        g = [];
        g[0] = new CSimpleBetPanel(0, 0, r);
        g[1] = new CForecastPanel(BET_PANEL_WIDTH, 0, r);
        q = new CChipPanel(800, 263, v);
        l = new createjs.Shape;
        l.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(BET_PANEL_X + 6, BET_PANEL_Y, BET_PANEL_WIDTH -
            12, BET_PANEL_HEIGHT);
        v.addChild(l);
        r.mask = l;
        k = 0;
        m = new CGfxButton(BET_PANEL_X + 7, CANVAS_HEIGHT / 2, s_oSpriteLibrary.getSprite("arrow_left"), v);
        m.addEventListener(ON_MOUSE_UP, this._onArrowLeft, this);
        n = new CGfxButton(BET_PANEL_X + w.width - 7, CANVAS_HEIGHT / 2, s_oSpriteLibrary.getSprite("arrow_right"), v);
        n.addEventListener(ON_MOUSE_UP, this._onArrowRight, this);
        u = new CMsgBox;
        s_oBetList.reset();
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.unload = function() {
        m.unload();
        n.unload();
        t.unload();
        !1 !== DISABLE_SOUND_MOBILE &&
            !1 !== s_bMobile || p.unload();
        u.unload();
        q.unload();
        for (var b = 0; b < g.length; b++) g[b].unload();
        s_oStage.removeAllChildren()
    };
    this.refreshButtonPos = function(e, f) {
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || p.setPosition(a - e, d + f);
        t.setPosition(c - e, b + f)
    };
    this.setChipSelected = function(b) {
        f = b
    };
    this.setSimpleBet = function(b, a, c, f) {
        if (e + c > MAX_BET) return u.show(TEXT_ERR_MAX_BET), !1;
        if (c > s_iCurMoney) return u.show(TEXT_NO_MONEY), !1;
        s_oBetList.addSimpleBet(b, a, c);
        e += c;
        e = Number(e.toFixed(2));
        s_iCurMoney -= c;
        s_iCurMoney =
            parseFloat(s_iCurMoney.toFixed(2));
        s_iGameCash += c;
        s_iGameCash = parseFloat(s_iGameCash.toFixed(2));
        q.refreshMoney();
        q.refreshBet(e);
        h.push(f);
        return !0
    };
    this.setForecastBet = function(b, a, c, f) {
        if (e + c > MAX_BET) return u.show(TEXT_ERR_MAX_BET), !1;
        if (c > s_iCurMoney) return u.show(TEXT_NO_MONEY), !1;
        s_oBetList.addForecastBet(b, a, c);
        e += c;
        e = Number(e.toFixed(2));
        s_iCurMoney -= c;
        s_iCurMoney = parseFloat(s_iCurMoney.toFixed(2));
        s_iGameCash += c;
        s_iGameCash = parseFloat(s_iGameCash.toFixed(2));
        q.refreshMoney();
        q.refreshBet(e);
        h.push(f);
        return !0
    };
    this.refreshPagePos = function(b, a) {
        r.x = BET_PANEL_X;
        g[k].setX(0);
        g[b].setX(a)
    };
    this.clearBet = function() {
        for (var b = 0; b < h.length; b++) h[b].clearBet();
        s_iCurMoney += e;
        s_iCurMoney = parseFloat(s_iCurMoney.toFixed(2));
        s_iGameCash -= e;
        s_iGameCash = parseFloat(s_iGameCash.toFixed());
        e = 0;
        g[0].clearBet();
        s_oBetList.reset();
        q.refreshBet(0);
        q.refreshMoney()
    };
    this._onArrowLeft = function() {
        var b = k;
        k++;
        k === g.length && (k = 0, b = g.length - 1);
        g[k].setX(BET_PANEL_WIDTH);
        createjs.Tween.get(r).to({
            x: -BET_PANEL_WIDTH +
                BET_PANEL_X
        }, 500, createjs.Ease.cubicOut).call(function() {
            s_oBetPanel.refreshPagePos(b, BET_PANEL_WIDTH)
        })
    };
    this._onArrowRight = function() {
        var b = k;
        k--;
        0 > k && (k = g.length - 1);
        g[k].setX(-BET_PANEL_WIDTH);
        createjs.Tween.get(r).to({
            x: BET_PANEL_X + BET_PANEL_WIDTH
        }, 500, createjs.Ease.cubicOut).call(function() {
            s_oBetPanel.refreshPagePos(b, -BET_PANEL_WIDTH)
        })
    };
    this.onStartExit = function() {
        e < MIN_BET ? u.show(TEXT_ERR_MIN_BET) : (this.unload(), s_oMain.gotoGame(e), $(s_oMain).trigger("bet_placed", e))
    };
    this.onExit = function() {
        $(s_oMain).trigger("end_session");
        this.unload();
        s_oMain.gotoMenu()
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this.getChipSelected = function() {
        return f
    };
    s_oBetPanel = this;
    this._init()
}
var s_oBetPanel = null;

function CChipPanel(a, d, c) {
    var b, e, k, f, g, h, l, m, n;
    this._init = function(b, a) {
        n = new createjs.Container;
        n.x = b;
        n.y = a;
        q.addChild(n);
        m = new CTextButton(73, 2, s_oSpriteLibrary.getSprite("but_clear_bet"), TEXT_CLEAR_BET, PRIMARY_FONT, "#fff", 24, n);
        m.addEventListener(ON_MOUSE_UP, this._onClearBet, this);
        var e = s_oSpriteLibrary.getSprite("money_panel"),
            c = createBitmap(s_oSpriteLibrary.getSprite("money_panel"));
        c.regX = e.width / 2;
        c.x = 73;
        c.y = 22;
        n.addChild(c);
        f = new createjs.Text(TEXT_MIN_BET + ": " + MIN_BET + TEXT_CURRENCY, "14px " +
            SECONDARY_FONT, "#ffde00");
        f.textAlign = "center";
        f.textBaseline = "alphabetic";
        f.x = 73;
        f.y = 44;
        n.addChild(f);
        g = new createjs.Text(TEXT_MAX_BET + ": " + MAX_BET + TEXT_CURRENCY, "14px " + SECONDARY_FONT, "#ffde00");
        g.textAlign = "center";
        g.textBaseline = "alphabetic";
        g.x = 73;
        g.y = 56;
        n.addChild(g);
        c = createBitmap(s_oSpriteLibrary.getSprite("money_panel"));
        c.regX = e.width / 2;
        c.x = 73;
        c.y = 72;
        n.addChild(c);
        c = new createjs.Text(TEXT_BET, "11px " + TERTIARY_FONT, "#fff");
        c.textAlign = "left";
        c.textBaseline = "alphabetic";
        c.x = 3;
        c.y = 85;
        n.addChild(c);
        h = new createjs.Text("0" + TEXT_CURRENCY, "26px " + SECONDARY_FONT, "#ffde00");
        h.textAlign = "center";
        h.textBaseline = "alphabetic";
        h.x = 73;
        h.y = 104;
        n.addChild(h);
        c = createBitmap(e);
        c.regX = e.width / 2;
        c.x = 73;
        c.y = 122;
        n.addChild(c);
        c = new createjs.Text(TEXT_MONEY, "11px " + TERTIARY_FONT, "#fff");
        c.textAlign = "left";
        c.textBaseline = "alphabetic";
        c.x = 3;
        c.y = 136;
        n.addChild(c);
        k = new createjs.Text(s_iCurMoney + TEXT_CURRENCY, "26px " + SECONDARY_FONT, "#ffde00");
        k.textAlign = "center";
        k.textBaseline = "alphabetic";
        k.x = 73;
        k.y = 154;
        n.addChild(k);
        this._initChips();
        l = new CButStartRace(73, 304, s_oSpriteLibrary.getSprite("but_start_race"), TEXT_START_RACE, "#fff", 24, n);
        l.addEventListener(ON_MOUSE_UP, this._onStartRace, this)
    };
    this.unload = function() {
        for (var a = 0; a < b; a++) b[a].unload();
        l.unload()
    };
    this._initChips = function() {
        var a = createBitmap(s_oSpriteLibrary.getSprite("fiche_panel"));
        a.x = 0;
        a.y = 170;
        n.addChild(a);
        a = [{
            x: 25,
            y: 198
        }, {
            x: 76,
            y: 198
        }, {
            x: 124,
            y: 198
        }, {
            x: 25,
            y: 242
        }, {
            x: 76,
            y: 242
        }, {
            x: 124,
            y: 242
        }];
        b = [];
        for (var c = 0; c < NUM_CHIPS; c++) {
            var f = s_oSpriteLibrary.getSprite("fiche_" +
                c);
            b[c] = new CGfxButton(a[c].x, a[c].y, f, n);
            b[c].addEventListenerWithParams(ON_MOUSE_UP, this._onFicheClicked, this, c)
        }
        a = s_oSpriteLibrary.getSprite("fiche_highlight");
        e = createBitmap(a);
        e.regX = a.width / 2;
        e.regY = a.height / 2;
        e.x = b[0].getX() - 1;
        e.y = b[0].getY() - 1;
        n.addChild(e)
    };
    this.refreshMoney = function() {
        k.text = s_iCurMoney + TEXT_CURRENCY
    };
    this.refreshBet = function(b) {
        h.text = b + TEXT_CURRENCY
    };
    this._onStartRace = function() {
        s_oBetPanel.onStartExit()
    };
    this._onClearBet = function() {
        s_oBetPanel.clearBet()
    };
    this._onFicheClicked =
        function(a) {
            e.x = b[a].getX() - 1;
            e.y = b[a].getY() - 1;
            s_oBetPanel.setChipSelected(a)
        };
    var q = c;
    this._init(a, d)
}

function CSimpleBetPanel(a, d, c) {
    var b, e, k, f, g;
    this._init = function(b, a) {
        g = new createjs.Container;
        g.x = b;
        g.y = a;
        h.addChild(g);
        var c = createBitmap(s_oSpriteLibrary.getSprite("simple_bet_panel"));
        g.addChild(c);
        c = new createjs.Text(TEXT_TRAP, "20px " + PRIMARY_FONT, "#fff");
        c.textAlign = "center";
        c.textBaseline = "alphabetic";
        c.x = 56;
        c.y = 24;
        g.addChild(c);
        c = new createjs.Text(TEXT_GREYHOUND_NAME, "20px " + PRIMARY_FONT, "#fff");
        c.textAlign = "center";
        c.textBaseline = "alphabetic";
        c.x = 180;
        c.y = 24;
        g.addChild(c);
        c = new createjs.Text(TEXT_WINS,
            "20px " + PRIMARY_FONT, "#fff");
        c.textAlign = "center";
        c.textBaseline = "alphabetic";
        c.x = 360;
        c.y = 24;
        g.addChild(c);
        c = new createjs.Text(TEXT_PLACE, "20px " + PRIMARY_FONT, "#fff");
        c.textAlign = "center";
        c.textBaseline = "alphabetic";
        c.x = 500;
        c.y = 24;
        g.addChild(c);
        c = new createjs.Text(TEXT_SHOW, "20px " + PRIMARY_FONT, "#fff");
        c.textAlign = "center";
        c.textBaseline = "alphabetic";
        c.x = 630;
        c.y = 24;
        g.addChild(c);
        c = s_oSpriteLibrary.getSprite("bibs");
        for (var e = new createjs.SpriteSheet({
                images: [c],
                frames: {
                    width: c.width / 3,
                    height: c.height /
                        2
                },
                animations: {
                    bib_0: [0],
                    bib_1: [1],
                    bib_2: [2],
                    bib_3: [3],
                    bib_4: [4],
                    bib_5: [5]
                }
            }), f = 38, d = 0; d < NUM_GREYHOUNDS; d++) {
            var l = createSprite(e, "bib_" + d, 0, 0, c.width / 3, c.height / 2);
            l.x = 28;
            l.y = f;
            g.addChild(l);
            f += c.height / 2 + 11
        }
        this._initGreyhoundInfos();
        this._initBetPlaces()
    };
    this._initGreyhoundInfos = function() {
        var a = s_oGameSettings.getAllGreyhoundNames();
        b = [];
        for (var c = 104, e = 0; e < NUM_GREYHOUNDS; e++) {
            var f = {
                framerate: 40,
                images: [s_oSpriteLibrary.getSprite("greyhound_" + (e + 1))],
                frames: {
                    width: GREYHOUND_WIDTH,
                    height: GREYHOUND_HEIGHT,
                    regX: GREYHOUND_WIDTH / 2,
                    regY: GREYHOUND_HEIGHT
                },
                animations: {
                    idle: [0, 0],
                    anim: [0, 21],
                    start: [22],
                    anim_1: [5, 21, "anim"],
                    anim_2: [10, 21, "anim"],
                    anim_3: [15, 21, "anim"]
                }
            };
            f = new createjs.SpriteSheet(f);
            f = createSprite(f, "idle", GREYHOUND_WIDTH / 2, GREYHOUND_HEIGHT, GREYHOUND_WIDTH, GREYHOUND_HEIGHT);
            f.x = 150;
            f.y = c;
            f.scaleX = f.scaleY = .5;
            g.addChild(f);
            b.push(f);
            f = new createjs.Text(a[e].toUpperCase(), "14px " + TERTIARY_FONT, "#fff");
            f.textAlign = "right";
            f.textBaseline = "alphabetic";
            f.x = 286;
            f.y = c - 10;
            g.addChild(f);
            c += 67
        }
    };
    this._initBetPlaces =
        function() {
            k = [];
            f = [];
            e = [];
            for (var b = 66, a = s_oSpriteLibrary.getSprite("bet_place"), c = 0; c < NUM_GREYHOUNDS; c++) {
                var d = new createjs.Text(s_oGameSettings.getOddWin(c), "20px " + TERTIARY_FONT, "#fff");
                d.textAlign = "center";
                d.textBaseline = "middle";
                d.x = 325;
                d.y = b;
                g.addChild(d);
                d = new CButBet(d.x + 60, b, a, .7, g);
                d.addEventListenerWithParams(ON_MOUSE_UP, this._onWinClicked, this, c);
                e.push(d);
                d = new createjs.Text(s_oGameSettings.getOddPlace(c), "20px " + TERTIARY_FONT, "#fff");
                d.textAlign = "center";
                d.textBaseline = "middle";
                d.x =
                    465;
                d.y = b;
                g.addChild(d);
                d = new CButBet(d.x + 60, b, a, .7, g);
                d.addEventListenerWithParams(ON_MOUSE_UP, this._onPlaceClicked, this, c);
                k.push(d);
                d = new createjs.Text(s_oGameSettings.getOddShow(c), "20px " + TERTIARY_FONT, "#fff");
                d.textAlign = "center";
                d.textBaseline = "middle";
                d.x = 593;
                d.y = b;
                g.addChild(d);
                d = new CButBet(d.x + 60, b, a, .7, g);
                d.addEventListenerWithParams(ON_MOUSE_UP, this._onShowClicked, this, c);
                f.push(d);
                b += 67
            }
        };
    this.unload = function() {
        for (var b = 0; b < k.length; b++) e[b].unload(), f[b].unload(), k[b].unload()
    };
    this.setX =
        function(b) {
            g.x = b
        };
    this.clearBet = function() {
        for (var a = 0; a < b.length; a++) b[a].gotoAndStop("idle")
    };
    this._onWinClicked = function(a) {
        var c = CHIP_VALUES[s_oBetPanel.getChipSelected()];
        s_oBetPanel.setSimpleBet(a, 1, c, e[a]) && (0 === e[a].getTotBet() && b[a].gotoAndPlay("anim"), e[a].increaseBet(c))
    };
    this._onPlaceClicked = function(a) {
        var c = CHIP_VALUES[s_oBetPanel.getChipSelected()];
        s_oBetPanel.setSimpleBet(a, 2, c, k[a]) && (0 === k[a].getTotBet() && b[a].gotoAndPlay("anim"), k[a].increaseBet(c))
    };
    this._onShowClicked = function(a) {
        var c =
            CHIP_VALUES[s_oBetPanel.getChipSelected()];
        s_oBetPanel.setSimpleBet(a, 3, c, f[a]) && (0 === f[a].getTotBet() && b[a].gotoAndPlay("anim"), f[a].increaseBet(c))
    };
    this.getContainer = function() {
        return g
    };
    var h = c;
    this._init(a, d)
}

function CForecastPanel(a, d, c) {
    var b, e;
    this._init = function() {
        e = new createjs.Container;
        e.x = a;
        e.y = d;
        k.addChild(e);
        var b = createBitmap(s_oSpriteLibrary.getSprite("forecast_panel"));
        e.addChild(b);
        this._initForecastBets()
    };
    this.unload = function() {
        for (var a in b) - 1 < a.indexOf("forecast_") && b[a].unload()
    };
    this._initForecastBets = function() {
        b = [];
        for (var a = [{
                x: 26,
                y: 10
            }, {
                x: 256,
                y: 10
            }, {
                x: 486,
                y: 10
            }, {
                x: 26,
                y: 225
            }, {
                x: 256,
                y: 225
            }, {
                x: 486,
                y: 225
            }], c = 0; c < NUM_GREYHOUNDS; c++) this._placeForecastBetForGreyhound(c, a[c].x, a[c].y)
    };
    this._placeForecastBetForGreyhound = function(a, c, d) {
        var f = s_oSpriteLibrary.getSprite("odd_bg"),
            k = s_oSpriteLibrary.getSprite("bet_place"),
            h = s_oSpriteLibrary.getSprite("bibs"),
            g = h.width / 3,
            u = h.height / 2;
        h = new createjs.SpriteSheet({
            images: [h],
            frames: {
                width: g,
                height: u
            },
            animations: {
                bib_0: [0],
                bib_1: [1],
                bib_2: [2],
                bib_3: [3],
                bib_4: [4],
                bib_5: [5]
            }
        });
        for (var t = 0; t < NUM_GREYHOUNDS; t++)
            if (t !== a) {
                var p = createSprite(h, "bib_" + a, 0, 0, g, u);
                p.x = c;
                p.y = d;
                p.scaleX = p.scaleY = .65;
                e.addChild(p);
                var r = new createjs.Text("X", "12px " +
                    PRIMARY_FONT, "#fff");
                r.textAlign = "center";
                r.textBaseline = "middle";
                r.x = c + .65 * g + 10;
                r.y = d + .65 * u / 2;
                e.addChild(r);
                var v = createSprite(h, "bib_" + t, 0, 0, g / 3, u / 2);
                v.x = r.x + 10;
                v.y = p.y;
                v.scaleX = v.scaleY = .65;
                e.addChild(v);
                r = createBitmap(f);
                r.x = v.x + .65 * g + 10;
                r.y = p.y + 2;
                e.addChild(r);
                p = new createjs.Text(s_oGameSettings.getForecastOdd(a, t), "18px " + PRIMARY_FONT, "#fff");
                p.textAlign = "center";
                p.textBaseline = "alphabetic";
                p.x = r.x + f.width / 2;
                p.y = r.y + f.height / 2 + 6;
                e.addChild(p);
                p = new CButBet(r.x + f.width + .72 * k.width / 2 + 5, r.y + .72 *
                    k.height / 2, k, .45, e);
                p.setScale(.72);
                p.addEventListenerWithParams(ON_MOUSE_UP, this._onForecastClicked, this, {
                    first: a,
                    second: t
                });
                b["forecast_" + a + "_" + t] = p;
                d += .65 * u + 5
            }
    };
    this.setX = function(b) {
        e.x = b
    };
    this._onForecastClicked = function(a) {
        var c = CHIP_VALUES[s_oBetPanel.getChipSelected()];
        s_oBetPanel.setForecastBet(a.first, a.second, c, b["forecast_" + a.first + "_" + a.second]) && b["forecast_" + a.first + "_" + a.second].increaseBet(c)
    };
    var k = c;
    this._init(a, d)
}

function CBetList() {
    var a, d, c;
    this._init = function() {
        this.reset()
    };
    this.reset = function() {
        a = [];
        for (var b = 0; b < NUM_GREYHOUNDS; b++) a[b] = [], a[b].place_1 = 0, a[b].place_2 = 0, a[b].place_3 = 0;
        d = [];
        for (b = 0; b < NUM_GREYHOUNDS; b++) {
            d[b] = [];
            for (var e = 0; e < NUM_GREYHOUNDS; e++) d[b][e] = 0
        }
        c = []
    };
    this.addSimpleBet = function(b, e, d) {
        a[b]["place_" + e] += d;
        var f = 0;
        switch (e) {
            case 1:
                f = d * s_oGameSettings.getOddWin(b);
                break;
            case 2:
                f = d * s_oGameSettings.getOddPlace(b);
                break;
            case 3:
                f = d * s_oGameSettings.getOddShow(b)
        }
        c.push({
            type_bet: "simple",
            greyhounds: [{
                index: b,
                place: e
            }],
            bet: d,
            win: f
        })
    };
    this.addForecastBet = function(b, a, k) {
        d[b][a] += k;
        c.push({
            type_bet: "forecast",
            greyhounds: [{
                index: b,
                place: 1
            }, {
                index: a,
                place: 2
            }],
            bet: k,
            win: k * s_oGameSettings.getForecastOdd(b, a)
        })
    };
    this.getMinWin = function() {
        if (0 < c.length) {
            for (var b = c[0].win, a = 1; a < c.length; a++) b > c[a].win && (b = c[a].win);
            return b
        }
        return 0
    };
    this.getTotWinWithCurRank = function(b) {
        var c = 0,
            k = [];
        if (0 < a[b[0]].place_1) {
            var f = a[b[0]].place_1 * s_oGameSettings.getOddWin(b[0]);
            f = parseFloat(f.toFixed(2));
            c +=
                f;
            k.push({
                win: f,
                greyhounds: b[0],
                bet: a[b[0]].place_1,
                type: "win"
            })
        }
        0 < a[b[0]].place_2 && (f = a[b[0]].place_2 * s_oGameSettings.getOddPlace(b[0]), f = parseFloat(f.toFixed(2)), c += f, k.push({
            win: f,
            greyhounds: b[0],
            bet: a[b[0]].place_2,
            type: "place"
        }));
        0 < a[b[1]].place_2 && (f = a[b[1]].place_2 * s_oGameSettings.getOddPlace(b[1]), f = parseFloat(f.toFixed(2)), c += f, k.push({
            win: f,
            greyhounds: b[1],
            bet: a[b[1]].place_2,
            type: "place"
        }));
        0 < a[b[0]].place_3 && (f = a[b[0]].place_3 * parseFloat(s_oGameSettings.getOddShow(b[0])), f = parseFloat(f.toFixed(2)),
            c += f, k.push({
                win: f,
                greyhounds: b[0],
                bet: a[b[0]].place_3,
                type: "show"
            }));
        0 < a[b[1]].place_3 && (f = a[b[1]].place_3 * s_oGameSettings.getOddShow(b[1]), f = parseFloat(f.toFixed(2)), c += f, k.push({
            win: f,
            greyhounds: b[1],
            bet: a[b[1]].place_3,
            type: "show"
        }));
        0 < a[b[2]].place_3 && (f = a[b[2]].place_3 * s_oGameSettings.getOddShow(b[2]), f = parseFloat(f.toFixed(2)), c += f, k.push({
            win: f,
            greyhounds: b[2],
            bet: a[b[2]].place_3,
            type: "show"
        }));
        0 < d[b[0]][b[1]] && (f = d[b[0]][b[1]] * s_oGameSettings.getForecastOdd(b[0], b[1]), f = parseFloat(f.toFixed(2)),
            c += f, k.push({
                win: f,
                greyhounds: [b[0], b[1]],
                bet: d[b[0]][b[1]],
                type: "forecast"
            }));
        return {
            tot_win: c,
            win_list: k
        }
    };
    s_oBetList = this;
    this._init()
}
var s_oBetList = null;

function CFichesController(a, d) {
    var c, b, e, k, f, g, h, l, m, n, q, u;
    this._init = function(a) {
        k = a;
        m = new createjs.Container;
        t.addChild(m);
        g = new CVector2;
        g.set(m.x, m.y);
        n = new createjs.Container;
        t.addChild(n);
        a *= 18;
        u = new createjs.Text("", a + "px " + TERTIARY_FONT, "#000");
        u.textAlign = "center";
        n.addChild(u);
        q = new createjs.Text("", a + "px " + TERTIARY_FONT, "#fff");
        q.textAlign = "center";
        n.addChild(q);
        e = f = b = 0;
        c = !1
    };
    this.addEventListener = function(b, a, c) {};
    this.reset = function() {
        c = !1;
        e = 0;
        m.removeAllChildren();
        m.x = g.getX();
        m.y =
            g.getY();
        u.text = "";
        q.text = ""
    };
    this.setPrevValue = function(b) {
        f = b
    };
    this.refreshFiches = function(b, c, f) {
        b = b.sortOn("value", "index");
        for (var d = c, h = f, g = e = 0, l = 0; l < b.length; l++) {
            var n = s_oSpriteLibrary.getSprite("fiche_" + b[l].index),
                p = createBitmap(n);
            p.regX = n.width / 2;
            p.regY = n.height / 2;
            p.scaleX = a;
            p.scaleY = a;
            m.addChild(p);
            p.x = d;
            p.y = h;
            h -= 5;
            g++;
            9 < g && (g = 0, d += FICHE_WIDTH, h = f);
            e += b[l].value
        }
        playSound("chip", 1, 0);
        q.x = c;
        q.y = f + 25 * k;
        q.text = e.toFixed(2) + TEXT_CURRENCY;
        u.x = c + 2;
        u.y = f + 27 * k;
        u.text = e.toFixed(2) + TEXT_CURRENCY
    };
    this.createFichesPile = function(b, a, c) {
        this.reset();
        var e = CHIP_VALUES,
            f = [];
        do {
            var d = e[e.length - 1];
            for (var h = e.length - 1; d > b;) h--, d = e[h];
            h = Math.floor(b / d);
            for (var g = 0; g < h; g++) f.push({
                value: d,
                index: s_oGameSettings.getIndexForFiches(d)
            });
            d = Math.floor(b / d) === b / d ? 0 : b % d;
            b = d.toFixed(2)
        } while (0 < d);
        this.refreshFiches(f, a, c * k)
    };
    this.initMovement = function(b, a) {
        f = e;
        h = new CVector2(m.x, m.y);
        l = new CVector2(b, a);
        q.text = "";
        u.text = "";
        c = !0
    };
    this.getValue = function() {
        return e
    };
    this.getPrevBet = function() {
        return f
    };
    this.update =
        function(a) {
            if (c)
                if (b += a, b > TIME_FICHES_MOV) b = 0, c = !1;
                else {
                    a = easeInOutCubic(b, 0, 1, TIME_FICHES_MOV);
                    var e = new CVector2;
                    e = tweenVectors(h, l, a, e);
                    m.x = e.getX();
                    m.y = e.getY()
                }
        };
    var t = d;
    this._init(a)
}

function CButBet(a, d, c, b, e) {
    var k, f, g, h, l, m, n, q, u, t = !1,
        p, r;
    this._init = function(b, a, c, e) {
        k = 0;
        f = [];
        g = [];
        l = [];
        r = new createjs.Container;
        r.x = b;
        r.y = a;
        v.addChild(r);
        h = createBitmap(c);
        n = m = 1;
        h.regX = c.width / 2;
        h.regY = c.height / 2;
        s_bMobile || (h.cursor = "pointer");
        r.addChild(h);
        this._initListener();
        p = new CFichesController(e, r)
    };
    this.unload = function() {
        h.off("mousedown", q);
        h.off("pressup", u);
        v.removeChild(r)
    };
    this.setVisible = function(b) {
        h.visible = b
    };
    this.setCursorType = function(b) {
        h.cursor = b
    };
    this._initListener = function() {
        q =
            h.on("mousedown", this.buttonDown);
        u = h.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(b, a, c) {
        f[b] = a;
        g[b] = c
    };
    this.addEventListenerWithParams = function(b, a, c, e) {
        f[b] = a;
        g[b] = c;
        l[b] = e
    };
    this.buttonRelease = function() {
        t || (h.scaleX = 0 < m ? m : -m, h.scaleY = n, playSound("chip", 1, 0), f[ON_MOUSE_UP] && f[ON_MOUSE_UP].call(g[ON_MOUSE_UP], l[ON_MOUSE_UP]))
    };
    this.buttonDown = function() {
        t || (h.scaleX = 0 < m ? .9 * m : .9 * -m, h.scaleY = .9 * n, f[ON_MOUSE_DOWN] && f[ON_MOUSE_DOWN].call(g[ON_MOUSE_DOWN], l[ON_MOUSE_DOWN]))
    };
    this.rotation =
        function(b) {
            h.rotation = b
        };
    this.getButton = function() {
        return h
    };
    this.setPosition = function(b, a) {
        h.x = b;
        h.y = a
    };
    this.setX = function(b) {
        h.x = b
    };
    this.setY = function(b) {
        h.y = b
    };
    this.getButtonImage = function() {
        return h
    };
    this.block = function(b) {
        t = b;
        h.scaleX = m;
        h.scaleY = n
    };
    this.setScaleX = function(b) {
        m = h.scaleX = b
    };
    this.setScale = function(b) {
        n = m = b;
        h.scaleX = h.scaleY = b
    };
    this.increaseBet = function(b) {
        k += b;
        p.createFichesPile(k.toFixed(2), 0, -4)
    };
    this.clearBet = function() {
        k = 0;
        p.reset()
    };
    this.getX = function() {
        return h.x
    };
    this.getY =
        function() {
            return h.y
        };
    this.pulseAnimation = function() {
        createjs.Tween.get(h).to({
            scaleX: .9 * m,
            scaleY: .9 * n
        }, 850, createjs.Ease.quadOut).to({
            scaleX: m,
            scaleY: n
        }, 650, createjs.Ease.quadIn).call(function() {
            w.pulseAnimation()
        })
    };
    this.trebleAnimation = function() {
        createjs.Tween.get(h).to({
            rotation: 5
        }, 75, createjs.Ease.quadOut).to({
            rotation: -5
        }, 140, createjs.Ease.quadIn).to({
            rotation: 0
        }, 75, createjs.Ease.quadIn).wait(750).call(function() {
            w.trebleAnimation()
        })
    };
    this.removeAllTweens = function() {
        createjs.Tween.removeTweens(h)
    };
    this.getTotBet = function() {
        return k
    };
    var v = void 0 !== e ? e : s_oStage;
    this._init(a, d, c, b);
    var w = this;
    return this
}

function CVector2(a, d) {
    var c, b;
    this._init = function(a, d) {
        c = a;
        b = d
    };
    this.add = function(a, d) {
        c += a;
        b += d
    };
    this.addV = function(a) {
        c += a.getX();
        b += a.getY()
    };
    this.scalarDivision = function(a) {
        c /= a;
        b /= a
    };
    this.subV = function(a) {
        c -= a.getX();
        b -= a.getY()
    };
    this.scalarProduct = function(a) {
        c *= a;
        b *= a
    };
    this.invert = function() {
        c *= -1;
        b *= -1
    };
    this.dotProduct = function(a) {
        return c * a.getX() + b * a.getY()
    };
    this.set = function(a, d) {
        c = a;
        b = d
    };
    this.setV = function(a) {
        c = a.getX();
        b = a.getY()
    };
    this.length = function() {
        return Math.sqrt(c * c + b * b)
    };
    this.length2 =
        function() {
            return c * c + b * b
        };
    this.normalize = function() {
        var a = this.length();
        0 < a && (c /= a, b /= a)
    };
    this.getNormalize = function(a) {
        this.length();
        a.set(c, b);
        a.normalize()
    };
    this.rot90CCW = function() {
        var a = c;
        c = -b;
        b = a
    };
    this.rot90CW = function() {
        var a = c;
        c = b;
        b = -a
    };
    this.getRotCCW = function(a) {
        a.set(c, b);
        a.rot90CCW()
    };
    this.getRotCW = function(a) {
        a.set(c, b);
        a.rot90CW()
    };
    this.ceil = function() {
        c = Math.ceil(c);
        b = Math.ceil(b)
    };
    this.round = function() {
        c = Math.round(c);
        b = Math.round(b)
    };
    this.toString = function() {
        return "Vector2: " + c + ", " +
            b
    };
    this.print = function() {
        trace("Vector2: " + c + ", " + b + "")
    };
    this.getX = function() {
        return c
    };
    this.getY = function() {
        return b
    };
    this._init(a, d)
}

function CMsgBox() {
    var a, d, c, b;
    this._init = function() {
        a = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
        c = new createjs.Text("", "34px " + PRIMARY_FONT, "#000");
        c.x = CANVAS_WIDTH / 2 + 2;
        c.y = CANVAS_HEIGHT / 2 - 28;
        c.textAlign = "center";
        c.lineWidth = 400;
        c.textBaseline = "middle";
        d = new createjs.Text("", "34px " + PRIMARY_FONT, "#ffffff");
        d.x = CANVAS_WIDTH / 2;
        d.y = CANVAS_HEIGHT / 2 - 30;
        d.textAlign = "center";
        d.lineWidth = 400;
        d.textBaseline = "middle";
        b = new createjs.Container;
        b.alpha = 0;
        b.visible = !1;
        b.addChild(a, c, d);
        s_oStage.addChild(b)
    };
    this.unload = function() {
        b.off("mousedown", this._onExit)
    };
    this._initListener = function() {
        b.on("mousedown", this._onExit)
    };
    this.show = function(a) {
        c.text = a;
        d.text = a;
        b.visible = !0;
        var e = this;
        createjs.Tween.get(b).to({
            alpha: 1
        }, 500).call(function() {
            e._initListener()
        });
        setTimeout(function() {
            e._onExit()
        }, 3E3)
    };
    this._onExit = function() {
        b.visible && (b.off("mousedown"), b.visible = !1)
    };
    this._init();
    return this
}

function CTrackBg(a) {
    var d, c, b, e, k, f;
    this._init = function() {
        f = new createjs.Container;
        g.addChild(f);
        c = 0;
        b = 2;
        e = 0;
        k = [];
        for (var a = 0; a < NUM_TRACK_BG; a++) {
            var l = createBitmap(s_oSpriteLibrary.getSprite("bg_track_" + a));
            0 < a && (l.visible = !1);
            f.addChild(l);
            k[a] = l
        }
        d = !0
    };
    this.update = function() {
        if (!d) return c;
        e++;
        e === b && (e = 0, c++, k[c].visible = !0, k[c - 1].visible = !1, c === k.length - 1 ? (d = !1, s_oGame.checkGreyhoundArrival()) : 17 === c && s_oGame.startGreyhounds());
        return c
    };
    var g = a;
    this._init()
}

function CGreyhound(a, d, c, b, e, k) {
    var f, g, h, l, m, n, q, u, t, p, r;
    this._init = function(a, b, c, e, d) {
        g = !1;
        h = b;
        q = 0;
        u = ARRIVAL_X - GREYHOUND_WIDTH / 2 * e + 30;
        t = c;
        p = d;
        b = {
            framerate: 40,
            images: [s_oSpriteLibrary.getSprite("greyhound_" + b)],
            frames: {
                width: GREYHOUND_WIDTH,
                height: GREYHOUND_HEIGHT,
                regX: GREYHOUND_WIDTH / 2,
                regY: GREYHOUND_HEIGHT
            },
            animations: {
                idle: [0, 0],
                anim: [0, 21],
                start: [22],
                anim_1: [5, 21, "anim"],
                anim_2: [10, 21, "anim"],
                anim_3: [15, 21, "anim"]
            }
        };
        b = new createjs.SpriteSheet(b);
        r = createSprite(b, "start", GREYHOUND_WIDTH / 2, GREYHOUND_HEIGHT,
            GREYHOUND_WIDTH, GREYHOUND_HEIGHT);
        r.x = a.x;
        r.y = a.y;
        r.scaleX = r.scaleY = e;
        r.alpha = 0;
        v.addChild(r)
    };
    this.startRace = function() {
        var a = "anim_" + (Math.floor(3 * Math.random()) + 1);
        createjs.Tween.get(r).to({
            alpha: 1
        }, 150).call(function() {
            r.gotoAndPlay(a)
        });
        n = r.x;
        l = 0;
        m = p[q].frame;
        f = !0
    };
    this.pauseAnim = function() {
        r.paused = !0
    };
    this.unpauseAnim = function() {
        r.paused = !1
    };
    this.getX = function() {
        return r.x
    };
    this.update = function(a) {
        if (f) {
            l++;
            if (l >= m) q++, q < p.length ? (l = 0, m = p[q].frame, n = r.x) : f = !1;
            else {
                var b = s_oTweenController.easeLinear(l,
                    0, 1, m);
                b = s_oTweenController.tweenValue(n, p[q].x, b);
                r.x = b
            }
            a && !g && r.x >= u && (g = !0, s_oGame.greyhoundPhotofinish(h - 1, t))
        }
    };
    var v = k;
    this._init(a, d, c, b, e)
}

function CTweenController() {
    this.tweenValue = function(a, d, c) {
        return a + c * (d - a)
    };
    this.easeLinear = function(a, d, c, b) {
        return c * a / b + d
    };
    this.easeInCubic = function(a, d, c, b) {
        b = (a /= b) * a * a;
        return d + c * b
    };
    this.easeBackInQuart = function(a, d, c, b) {
        b = (a /= b) * a;
        return d + c * (2 * b * b + 2 * b * a + -3 * b)
    };
    this.easeInBack = function(a, d, c, b) {
        return c * (a /= b) * a * (2.70158 * a - 1.70158) + d
    };
    this.easeOutCubic = function(a, d, c, b) {
        return c * ((a = a / b - 1) * a * a + 1) + d
    };
    this.getTrajectoryPoint = function(a, d) {
        var c = new createjs.Point,
            b = (1 - a) * (1 - a),
            e = a * a;
        c.x = b *
            d.start.x + 2 * (1 - a) * a * d.traj.x + e * d.end.x;
        c.y = b * d.start.y + 2 * (1 - a) * a * d.traj.y + e * d.end.y;
        return c
    }
}

function CRankingGui(a, d) {
    var c, b, e, k, f, g, h;
    this._init = function(a) {
        var e = s_oSpriteLibrary.getSprite("rank_panel");
        c = CANVAS_HEIGHT - e.height + 6;
        h = new createjs.Container;
        h.x = 0;
        h.y = c;
        l.addChild(h);
        e = createBitmap(e);
        h.addChild(e);
        k = [];
        k[0] = new createjs.Point(780, 48);
        k[1] = new createjs.Point(642, 48);
        k[2] = new createjs.Point(504, 48);
        k[3] = new createjs.Point(366, 48);
        k[4] = new createjs.Point(228, 48);
        k[5] = new createjs.Point(90, 48);
        this._initBibs(a);
        b = 2;
        f = createBitmap(s_oSpriteLibrary.getSprite("fill_bar"));
        f.x =
            107;
        f.y = 116;
        h.addChild(f);
        g = new createjs.Shape;
        g.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(f.x, f.y - 2, .01, 10);
        h.addChild(g);
        f.mask = g;
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.refreshButtonPos = function(a, b) {
        h.y = c - b
    };
    this._initBibs = function(a) {
        e = [];
        for (var b = 0; b < NUM_GREYHOUNDS; b++) {
            var c = new createjs.Container;
            c.x = k[b].x;
            c.y = k[b].y;
            h.addChild(c);
            var d = createBitmap(s_oSpriteLibrary.getSprite("bib_gui_" + b));
            c.addChild(d);
            d = new createjs.Text(a[b].toUpperCase(), "12px " + PRIMARY_FONT,
                "#fff");
            d.textAlign = "right";
            d.textBaseline = "alphabetic";
            d.x = 50;
            d.y = 10;
            c.addChild(d);
            e.push(c)
        }
    };
    this.refreshRank = function(a) {
        for (var b = 0; b < a.length; b++) createjs.Tween.get(e[a[b].index]).to({
            x: k[b].x
        }, 1E3, createjs.Ease.cubicOut)
    };
    this.refreshRadar = function(a) {
        g.graphics.clear();
        g.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(f.x, f.y - 2, b * a, 10)
    };
    var l = d;
    this._init(a)
}

function CArrivalPanel(a, d, c) {
    var b, e, k, f, g, h, l;
    this._init = function(a, c) {
        f = 0;
        e = a;
        k = c;
        l = new createjs.Container;
        l.x = e;
        l.y = k;
        m.addChild(l);
        var d = s_oSpriteLibrary.getSprite("panel_arrival");
        d = createBitmap(d);
        l.addChild(d);
        d = s_oSpriteLibrary.getSprite("bibs");
        var q = d.width / 3,
            n = d.height / 2,
            r = new createjs.SpriteSheet({
                images: [d],
                frames: {
                    width: q,
                    height: n
                },
                animations: {
                    bib_0: [0],
                    bib_1: [1],
                    bib_2: [2],
                    bib_3: [3],
                    bib_4: [4],
                    bib_5: [5]
                }
            });
        g = [];
        h = [];
        for (var v = 6, w = 0; w < NUM_GREYHOUNDS; w++) {
            var x = createSprite(r, "bib_0",
                0, 0, q, n);
            x.x = 10;
            x.y = v;
            x.visible = !1;
            x.scaleX = x.scaleY = .5;
            l.addChild(x);
            h.push(x);
            var y = new createjs.Text("", "15px " + TERTIARY_FONT, "#fff");
            y.textAlign = "left";
            y.textBaseline = "alphabetic";
            y.x = x.x + .5 * q + 5;
            y.y = x.y + 26;
            l.addChild(y);
            g.push(y);
            v += .5 * n + 4
        }
        b = CANVAS_WIDTH - d.width
    };
    this.show = function() {
        createjs.Tween.get(l).to({
            x: b
        }, 500, createjs.Ease.cubicOut)
    };
    this.hide = function() {
        createjs.Tween.get(l).to({
            x: e
        }, 500, createjs.Ease.cubicOut)
    };
    this.refreshRank = function(a, b) {
        g[f].text = b;
        h[f].gotoAndStop("bib_" + a);
        h[f].visible = !0;
        0 === f && this.show();
        f++
    };
    var m = c;
    this._init(a, d)
}

function CWinPanel(a) {
    var d, c, b, e, k, f;
    this._init = function() {
        f = new createjs.Container;
        f.visible = !1;
        g.addChild(f);
        var a = createBitmap(s_oSpriteLibrary.getSprite("win_panel"));
        f.addChild(a);
        a = s_oSpriteLibrary.getSprite("bibs");
        d = a.width / 3;
        c = a.height / 2;
        b = new createjs.SpriteSheet({
            images: [a],
            frames: {
                width: d,
                height: c
            },
            animations: {
                bib_0: [0],
                bib_1: [1],
                bib_2: [2],
                bib_3: [3],
                bib_4: [4],
                bib_5: [5]
            }
        });
        k = new createjs.Text(TEXT_WIN, "30px " + SECONDARY_FONT, "#ffde00");
        k.textAlign = "center";
        k.textBaseline = "alphabetic";
        k.x =
            CANVAS_WIDTH / 2 + 70;
        k.y = 476;
        k.lineHeight = 42;
        f.addChild(k);
        e = new CGfxButton(700, 491, s_oSpriteLibrary.getSprite("but_skip"), f);
        e.addEventListener(ON_MOUSE_UP, this.onSkip, this)
    };
    this.unload = function() {
        e.unload()
    };
    this.show = function(a, e, g) {
        k.text = TEXT_WIN + "\n" + a + TEXT_CURRENCY;
        a = 310;
        for (var h = 0; 3 > h; h++) {
            var l = {
                images: [s_oSpriteLibrary.getSprite("greyhound_" + (g[h] + 1))],
                frames: {
                    width: GREYHOUND_WIDTH,
                    height: GREYHOUND_HEIGHT,
                    regX: GREYHOUND_WIDTH / 2,
                    regY: GREYHOUND_HEIGHT
                },
                animations: {
                    idle: [18, 18],
                    anim: [0, 21],
                    start: [22],
                    anim_1: [5, 21, "anim"],
                    anim_2: [10, 21, "anim"],
                    anim_3: [15, 21, "anim"]
                }
            };
            l = new createjs.SpriteSheet(l);
            l = createSprite(l, "idle", GREYHOUND_WIDTH / 2, GREYHOUND_HEIGHT, GREYHOUND_WIDTH, GREYHOUND_HEIGHT);
            l.scaleX = l.scaleY = .5;
            l.x = CANVAS_WIDTH / 2 + 150;
            l.y = a;
            f.addChild(l);
            a += 68
        }
        a = CANVAS_HEIGHT / 2 - 150;
        for (g = 0; g < e.length; g++) {
            if ("forecast" === e[g].type) {
                var m = e[g].greyhounds;
                l = createSprite(b, "bib_" + m[0], 0, 0, d, c);
                l.x = 280;
                l.y = a;
                l.scaleX = l.scaleY = .5;
                f.addChild(l);
                h = new createjs.Text("X", "20px " + PRIMARY_FONT, "#fff");
                h.textAlign = "center";
                h.textBaseline = "middle";
                h.x = l.x + .5 * d + 10;
                h.y = a + 15;
                f.addChild(h);
                l = createSprite(b, "bib_" + m[1], 0, 0, d, c);
                l.x = h.x + 10
            } else l = createSprite(b, "bib_" + e[g].greyhounds, 0, 0, d, c), l.x = 280;
            l.y = a;
            l.scaleX = l.scaleY = .5;
            f.addChild(l);
            l = l.x + 35;
            h = new createjs.Text(e[g].type.toUpperCase(), "16px " + PRIMARY_FONT, "#ffb400");
            h.textAlign = "left";
            h.textBaseline = "alphabetic";
            h.x = l;
            h.y = a + 22;
            f.addChild(h);
            l = new createjs.Text(TEXT_WIN + ": " + e[g].win + TEXT_CURRENCY, "16px " + PRIMARY_FONT, "#fff");
            l.textAlign = "left";
            l.textBaseline = "alphabetic";
            l.x = h.x + h.getBounds().width + 10;
            l.y = a + 22;
            f.addChild(l);
            a += 35
        }
        f.visible = !0;
        f.alpha = 0;
        createjs.Tween.get(f).wait(1E3).to({
            alpha: 1
        }, 500, createjs.Ease.cubicOut)
    };
    this.onSkip = function() {
        s_oGame.returnInBetPanel()
    };
    var g = a;
    this._init()
}

function CLosePanel(a) {
    var d, c, b, e, k, f, g;
    this._init = function() {
        g = new createjs.Container;
        g.visible = !1;
        h.addChild(g);
        var a = createBitmap(s_oSpriteLibrary.getSprite("lose_panel"));
        g.addChild(a);
        a = new createjs.Text(TEXT_NO_WIN, "50px " + PRIMARY_FONT, "#fff");
        a.textAlign = "center";
        a.textBaseline = "alphabetic";
        a.x = CANVAS_WIDTH / 2;
        a.y = 285;
        g.addChild(a);
        a = s_oSpriteLibrary.getSprite("bibs");
        d = a.width / 3;
        c = a.height / 2;
        e = new createjs.SpriteSheet({
            images: [a],
            frames: {
                width: d,
                height: c
            },
            animations: {
                bib_0: [0],
                bib_1: [1],
                bib_2: [2],
                bib_3: [3],
                bib_4: [4],
                bib_5: [5]
            }
        });
        b = [];
        a = createSprite(e, "bib_0", 0, 0, d, c);
        a.x = CANVAS_WIDTH / 2 - 100 - d / 2;
        a.y = 350;
        g.addChild(a);
        b.push(a);
        a = createSprite(e, "bib_0", 0, 0, d, c);
        a.x = CANVAS_WIDTH / 2 - d / 2;
        a.y = 350;
        g.addChild(a);
        b.push(a);
        a = createSprite(e, "bib_0", 0, 0, d, c);
        a.x = CANVAS_WIDTH / 2 + 100 - d / 2;
        a.y = 350;
        g.addChild(a);
        b.push(a);
        f = new createjs.Text(TEXT_WIN + ": 0.00 " + TEXT_CURRENCY, "30px " + PRIMARY_FONT, "#fff");
        f.textAlign = "center";
        f.textBaseline = "alphabetic";
        f.x = CANVAS_WIDTH / 2;
        f.y = 510;
        g.addChild(f);
        k = new CGfxButton(700,
            480, s_oSpriteLibrary.getSprite("but_skip"), g);
        k.addEventListener(ON_MOUSE_UP, this.onSkip, this)
    };
    this.unload = function() {
        k.unload()
    };
    this.show = function(a) {
        for (var c = 0; 3 > c; c++) b[c].gotoAndStop("bib_" + a[c]);
        g.visible = !0;
        g.alpha = 0;
        createjs.Tween.get(g).wait(1E3).to({
            alpha: 1
        }, 500, createjs.Ease.cubicOut)
    };
    this.onSkip = function() {
        s_oGame.returnInBetPanel()
    };
    var h = a;
    this._init()
}

function CButStartRace(a, d, c, b, e, k, f) {
    var g, h, l, m, n, q, u;
    this._init = function(a, b, c, d, e, f) {
        g = [];
        h = [];
        var k = createBitmap(c),
            p = Math.ceil(f / 20);
        n = new createjs.Text(d, f + "px " + PRIMARY_FONT, "#000000");
        n.textAlign = "center";
        n.textBaseline = "alphabetic";
        n.x = c.width / 2 + p;
        n.y = 28;
        m = new createjs.Text(d, f + "px " + PRIMARY_FONT, e);
        m.textAlign = "center";
        m.textBaseline = "alphabetic";
        m.x = c.width / 2;
        m.y = 26;
        l = new createjs.Container;
        l.x = a;
        l.y = b;
        l.regX = c.width / 2;
        l.regY = c.height / 2;
        l.addChild(k, n, m);
        t.addChild(l);
        s_bMobile || (l.cursor =
            "pointer");
        this._initListener()
    };
    this.unload = function() {
        l.off("mousedown", q);
        l.off("pressup", u);
        t.removeChild(l)
    };
    this.setVisible = function(a) {
        l.visible = a
    };
    this._initListener = function() {
        q = l.on("mousedown", this.buttonDown);
        u = l.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        g[a] = b;
        h[a] = c
    };
    this.buttonRelease = function() {
        l.scaleX = 1;
        l.scaleY = 1;
        playSound("click", 1, 0);
        g[ON_MOUSE_UP] && g[ON_MOUSE_UP].call(h[ON_MOUSE_UP])
    };
    this.buttonDown = function() {
        l.scaleX = .9;
        l.scaleY = .9;
        g[ON_MOUSE_DOWN] &&
            g[ON_MOUSE_DOWN].call(h[ON_MOUSE_DOWN])
    };
    this.setTextPosition = function(a) {
        m.y = a;
        n.y = a + 2
    };
    this.setPosition = function(a, b) {
        l.x = a;
        l.y = b
    };
    this.setX = function(a) {
        l.x = a
    };
    this.setY = function(a) {
        l.y = a
    };
    this.getButtonImage = function() {
        return l
    };
    this.getX = function() {
        return l.x
    };
    this.getY = function() {
        return l.y
    };
    var t = f;
    this._init(a, d, c, b, e, k);
    return this
}

function CAreYouSurePanel(a) {
    var d, c, b, e;
    this._init = function() {
        e = new createjs.Container;
        e.visible = !1;
        d = e.on("click", function() {});
        k.addChild(e);
        _oBg = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
        e.addChild(_oBg);
        var a = new createjs.Text(TEXT_ARE_YOU_SURE, "50px " + PRIMARY_FONT, "#fff");
        a.textAlign = "center";
        a.textBaseline = "alphabetic";
        a.x = CANVAS_WIDTH / 2;
        a.y = 300;
        a.lineWidth = 400;
        a.lineHeight = 48;
        e.addChild(a);
        c = new CGfxButton(CANVAS_WIDTH / 2 + 170, 460, s_oSpriteLibrary.getSprite("but_yes"), e);
        c.addEventListener(ON_MOUSE_UP,
            this._onReleaseYes, this);
        b = new CGfxButton(CANVAS_WIDTH / 2 - 170, 460, s_oSpriteLibrary.getSprite("but_no"), e);
        b.addEventListener(ON_MOUSE_UP, this._onReleaseNo, this)
    };
    this.unload = function() {
        e.off("click", d);
        b.unload();
        c.unload()
    };
    this.show = function() {
        e.visible = !0;
        e.alpha = 0;
        createjs.Tween.get(e).to({
            alpha: 1
        }, 500, createjs.Ease.cubicOut)
    };
    this._onReleaseYes = function() {
        s_oGame.onExit()
    };
    this._onReleaseNo = function() {
        e.visible = !1;
        s_oGame.unpause()
    };
    var k = a;
    this._init(a)
};