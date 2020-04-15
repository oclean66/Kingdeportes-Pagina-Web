/*
 Platform.js <https://mths.be/platform>
 Copyright 2014-2018 Benjamin Tan <https://bnjmnt4n.now.sh/>
 Copyright 2011-2013 John-David Dalton
 Available under MIT license <https://mths.be/mit>
*/
(function() {
    var a = "undefined" !== typeof window && "undefined" !== typeof window.document ? window.document : {},
        b = "undefined" !== typeof module && module.exports,
        d = "undefined" !== typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
        c = function() {
            for (var c, d = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "),
                    "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "), "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")
                ], l = 0, f = d.length, r = {}; l < f; l++)
                if ((c = d[l]) && c[1] in a) {
                    for (l = 0; l < c.length; l++) r[d[0][l]] =
                        c[l];
                    return r
                }
            return !1
        }(),
        n = {
            change: c.fullscreenchange,
            error: c.fullscreenerror
        },
        h = {
            request: function(b) {
                var p = c.requestFullscreen;
                b = b || a.documentElement;
                if (/5\.1[.\d]* Safari/.test(navigator.userAgent)) b[p]();
                else b[p](d && Element.ALLOW_KEYBOARD_INPUT)
            },
            exit: function() {
                a[c.exitFullscreen]()
            },
            toggle: function(a) {
                this.isFullscreen ? this.exit() : this.request(a)
            },
            onchange: function(a) {
                this.on("change", a)
            },
            onerror: function(a) {
                this.on("error", a)
            },
            on: function(c, d) {
                var b = n[c];
                b && a.addEventListener(b, d, !1)
            },
            off: function(c,
                d) {
                var b = n[c];
                b && a.removeEventListener(b, d, !1)
            },
            raw: c
        };
    c ? (Object.defineProperties(h, {
        isFullscreen: {
            get: function() {
                return !!a[c.fullscreenElement]
            }
        },
        element: {
            enumerable: !0,
            get: function() {
                return a[c.fullscreenElement]
            }
        },
        enabled: {
            enumerable: !0,
            get: function() {
                return !!a[c.fullscreenEnabled]
            }
        }
    }), b ? module.exports = h : window.screenfull = h) : b ? module.exports = !1 : window.screenfull = !1
})();
(function() {
    function a(a) {
        a = String(a);
        return a.charAt(0).toUpperCase() + a.slice(1)
    }

    function b(a, f) {
        var d = -1,
            g = a ? a.length : 0;
        if ("number" == typeof g && -1 < g && g <= m)
            for (; ++d < g;) f(a[d], d, a);
        else c(a, f)
    }

    function d(f) {
        f = String(f).replace(/^ +| +$/g, "");
        return /^(?:webOS|i(?:OS|P))/.test(f) ? f : a(f)
    }

    function c(a, f) {
        for (var c in a) k.call(a, c) && f(a[c], c, a)
    }

    function n(f) {
        return null == f ? a(f) : A.call(f).slice(8, -1)
    }

    function h(a, f) {
        var c = null != a ? typeof a[f] : "number";
        return !/^(?:boolean|number|string|undefined)$/.test(c) &&
            ("object" == c ? !!a[f] : !0)
    }

    function q(a) {
        return String(a).replace(/([ -])(?!$)/g, "$1?")
    }

    function p(a, f) {
        var c = null;
        b(a, function(d, g) {
            c = f(c, d, g, a)
        });
        return c
    }

    function l(a) {
        function f(e) {
            return p(e, function(e, b) {
                var f = b.pattern || q(b);
                !e && (e = RegExp("\\b" + f + " *\\d+[.\\w_]*", "i").exec(a) || RegExp("\\b" + f + " *\\w+-[\\w]*", "i").exec(a) || RegExp("\\b" + f + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(a)) && ((e = String(b.label && !RegExp(f, "i").test(b.label) ? b.label : e).split("/"))[1] && !/[\d.]+/.test(e[0]) && (e[0] +=
                    " " + e[1]), b = b.label || b, e = d(e[0].replace(RegExp(f, "i"), b).replace(RegExp("; *(?:" + b + "[_-])?", "i"), " ").replace(RegExp("(" + b + ")[-_.]?(\\w)", "i"), "$1 $2")));
                return e
            })
        }

        function g(e) {
            return p(e, function(e, b) {
                return e || (RegExp(b + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(a) || 0)[1] || null
            })
        }
        var b = r,
            m = a && "object" == typeof a && "String" != n(a);
        m && (b = a, a = null);
        var x = b.navigator || {},
            k = x.userAgent || "";
        a || (a = k);
        var J = m ? !!x.likeChrome : /\bChrome\b/.test(a) && !/internal|\n/i.test(A.toString()),
            C = m ? "Object" : "ScriptBridgingProxyObject",
            z = m ? "Object" : "Environment",
            w = m && b.java ? "JavaPackage" : n(b.java),
            T = m ? "Object" : "RuntimeObject";
        z = (w = /\bJava/.test(w) && b.java) && n(b.environment) == z;
        var y = w ? "a" : "\u03b1",
            L = w ? "b" : "\u03b2",
            Q = b.document || {},
            M = b.operamini || b.opera,
            O = t.test(O = m && M ? M["[[Class]]"] : n(M)) ? O : M = null,
            e, U = a;
        m = [];
        var V = null,
            P = a == k;
        k = P && M && "function" == typeof M.version && M.version();
        var D = function(e) {
                return p(e, function(e, b) {
                    return e || RegExp("\\b" + (b.pattern || q(b)) + "\\b", "i").exec(a) && (b.label ||
                        b)
                })
            }([{
                label: "EdgeHTML",
                pattern: "Edge"
            }, "Trident", {
                label: "WebKit",
                pattern: "AppleWebKit"
            }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]),
            u = function(e) {
                return p(e, function(e, b) {
                    return e || RegExp("\\b" + (b.pattern || q(b)) + "\\b", "i").exec(a) && (b.label || b)
                })
            }(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
                    label: "Microsoft Edge",
                    pattern: "Edge"
                }, "Midori", "Nook Browser",
                "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
                    label: "Samsung Internet",
                    pattern: "SamsungBrowser"
                }, "SeaMonkey", {
                    label: "Silk",
                    pattern: "(?:Cloud9|Silk-Accelerated)"
                }, "Sleipnir", "SlimBrowser", {
                    label: "SRWare Iron",
                    pattern: "Iron"
                }, "Sunrise", "Swiftfox", "Waterfox", "WebPositive", "Opera Mini", {
                    label: "Opera Mini",
                    pattern: "OPiOS"
                }, "Opera", {
                    label: "Opera",
                    pattern: "OPR"
                }, "Chrome", {
                    label: "Chrome Mobile",
                    pattern: "(?:CriOS|CrMo)"
                }, {
                    label: "Firefox",
                    pattern: "(?:Firefox|Minefield)"
                }, {
                    label: "Firefox for iOS",
                    pattern: "FxiOS"
                },
                {
                    label: "IE",
                    pattern: "IEMobile"
                }, {
                    label: "IE",
                    pattern: "MSIE"
                }, "Safari"
            ]),
            E = f([{
                    label: "BlackBerry",
                    pattern: "BB10"
                }, "BlackBerry", {
                    label: "Galaxy S",
                    pattern: "GT-I9000"
                }, {
                    label: "Galaxy S2",
                    pattern: "GT-I9100"
                }, {
                    label: "Galaxy S3",
                    pattern: "GT-I9300"
                }, {
                    label: "Galaxy S4",
                    pattern: "GT-I9500"
                }, {
                    label: "Galaxy S5",
                    pattern: "SM-G900"
                }, {
                    label: "Galaxy S6",
                    pattern: "SM-G920"
                }, {
                    label: "Galaxy S6 Edge",
                    pattern: "SM-G925"
                }, {
                    label: "Galaxy S7",
                    pattern: "SM-G930"
                }, {
                    label: "Galaxy S7 Edge",
                    pattern: "SM-G935"
                }, "Google TV", "Lumia", "iPad",
                "iPod", "iPhone", "Kindle", {
                    label: "Kindle Fire",
                    pattern: "(?:Cloud9|Silk-Accelerated)"
                }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", {
                    label: "Wii U",
                    pattern: "WiiU"
                }, "Wii", "Xbox One", {
                    label: "Xbox 360",
                    pattern: "Xbox"
                }, "Xoom"
            ]),
            I = function(e) {
                return p(e, function(e, b, f) {
                    return e || (b[E] || b[/^[a-z]+(?: +[a-z]+\b)*/i.exec(E)] || RegExp("\\b" + q(f) + "(?:\\b|\\w*\\d)", "i").exec(a)) && f
                })
            }({
                Apple: {
                    iPad: 1,
                    iPhone: 1,
                    iPod: 1
                },
                Archos: {},
                Amazon: {
                    Kindle: 1,
                    "Kindle Fire": 1
                },
                Asus: {
                    Transformer: 1
                },
                "Barnes & Noble": {
                    Nook: 1
                },
                BlackBerry: {
                    PlayBook: 1
                },
                Google: {
                    "Google TV": 1,
                    Nexus: 1
                },
                HP: {
                    TouchPad: 1
                },
                HTC: {},
                LG: {},
                Microsoft: {
                    Xbox: 1,
                    "Xbox One": 1
                },
                Motorola: {
                    Xoom: 1
                },
                Nintendo: {
                    "Wii U": 1,
                    Wii: 1
                },
                Nokia: {
                    Lumia: 1
                },
                Samsung: {
                    "Galaxy S": 1,
                    "Galaxy S2": 1,
                    "Galaxy S3": 1,
                    "Galaxy S4": 1
                },
                Sony: {
                    PlayStation: 1,
                    "PlayStation Vita": 1
                }
            }),
            v = function(e) {
                return p(e, function(e, b) {
                    var f = b.pattern || q(b);
                    if (!e && (e = RegExp("\\b" + f + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(a))) {
                        var c = e,
                            O = b.label || b,
                            g = {
                                "10.0": "10",
                                "6.4": "10 Technical Preview",
                                "6.3": "8.1",
                                "6.2": "8",
                                "6.1": "Server 2008 R2 / 7",
                                "6.0": "Server 2008 / Vista",
                                "5.2": "Server 2003 / XP 64-bit",
                                "5.1": "XP",
                                "5.01": "2000 SP1",
                                "5.0": "2000",
                                "4.0": "NT",
                                "4.90": "ME"
                            };
                        f && O && /^Win/i.test(c) && !/^Windows Phone /i.test(c) && (g = g[/[\d.]+$/.exec(c)]) && (c = "Windows " + g);
                        c = String(c);
                        f && O && (c = c.replace(RegExp(f, "i"), O));
                        e = c = d(c.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/,
                            " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
                    }
                    return e
                })
            }(["Windows Phone", "Android", "CentOS", {
                    label: "Chrome OS",
                    pattern: "CrOS"
                }, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac",
                "Windows 98;", "Windows "
            ]);
        D && (D = [D]);
        I && !E && (E = f([I]));
        if (e = /\bGoogle TV\b/.exec(E)) E = e[0];
        /\bSimulator\b/i.test(a) && (E = (E ? E + " " : "") + "Simulator");
        "Opera Mini" == u && /\bOPiOS\b/.test(a) && m.push("running in Turbo/Uncompressed mode");
        "IE" == u && /\blike iPhone OS\b/.test(a) ? (e = l(a.replace(/like iPhone OS/, "")), I = e.manufacturer, E = e.product) : /^iP/.test(E) ? (u || (u = "Safari"), v = "iOS" + ((e = / OS ([\d_]+)/i.exec(a)) ? " " + e[1].replace(/_/g, ".") : "")) : "Konqueror" != u || /buntu/i.test(v) ? I && "Google" != I && (/Chrome/.test(u) &&
            !/\bMobile Safari\b/i.test(a) || /\bVita\b/.test(E)) || /\bAndroid\b/.test(v) && /^Chrome/.test(u) && /\bVersion\//i.test(a) ? (u = "Android Browser", v = /\bAndroid\b/.test(v) ? v : "Android") : "Silk" == u ? (/\bMobi/i.test(a) || (v = "Android", m.unshift("desktop mode")), /Accelerated *= *true/i.test(a) && m.unshift("accelerated")) : "PaleMoon" == u && (e = /\bFirefox\/([\d.]+)\b/.exec(a)) ? m.push("identifying as Firefox " + e[1]) : "Firefox" == u && (e = /\b(Mobile|Tablet|TV)\b/i.exec(a)) ? (v || (v = "Firefox OS"), E || (E = e[1])) : !u || (e = !/\bMinefield\b/i.test(a) &&
            /\b(?:Firefox|Safari)\b/.exec(u)) ? (u && !E && /[\/,]|^[^(]+?\)/.test(a.slice(a.indexOf(e + "/") + 8)) && (u = null), (e = E || I || v) && (E || I || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(v)) && (u = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(v) ? v : e) + " Browser")) : "Electron" == u && (e = (/\bChrome\/([\d.]+)\b/.exec(a) || 0)[1]) && m.push("Chromium " + e) : v = "Kubuntu";
        k || (k = g(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", q(u), "(?:Firefox|Minefield|NetFront)"]));
        if (e = "iCab" == D && 3 < parseFloat(k) && "WebKit" || /\bOpera\b/.test(u) && (/\bOPR\b/.test(a) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(a) && !/^(?:Trident|EdgeHTML)$/.test(D) && "WebKit" || !D && /\bMSIE\b/i.test(a) && ("Mac OS" == v ? "Tasman" : "Trident") || "WebKit" == D && /\bPlayStation\b(?! Vita\b)/i.test(u) && "NetFront") D = [e];
        "IE" == u && (e = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(a) || 0)[1]) ? (u += " Mobile", v = "Windows Phone " + (/\+$/.test(e) ? e : e + ".x"), m.unshift("desktop mode")) : /\bWPDesktop\b/i.test(a) ? (u = "IE Mobile", v = "Windows Phone 8.x",
            m.unshift("desktop mode"), k || (k = (/\brv:([\d.]+)/.exec(a) || 0)[1])) : "IE" != u && "Trident" == D && (e = /\brv:([\d.]+)/.exec(a)) && (u && m.push("identifying as " + u + (k ? " " + k : "")), u = "IE", k = e[1]);
        if (P) {
            if (h(b, "global"))
                if (w && (e = w.lang.System, U = e.getProperty("os.arch"), v = v || e.getProperty("os.name") + " " + e.getProperty("os.version")), z) {
                    try {
                        k = b.require("ringo/engine").version.join("."), u = "RingoJS"
                    } catch (X) {
                        (e = b.system) && e.global.system == b.system && (u = "Narwhal", v || (v = e[0].os || null))
                    }
                    u || (u = "Rhino")
                } else "object" == typeof b.process &&
                    !b.process.browser && (e = b.process) && ("object" == typeof e.versions && ("string" == typeof e.versions.electron ? (m.push("Node " + e.versions.node), u = "Electron", k = e.versions.electron) : "string" == typeof e.versions.nw && (m.push("Chromium " + k, "Node " + e.versions.node), u = "NW.js", k = e.versions.nw)), u || (u = "Node.js", U = e.arch, v = e.platform, k = (k = /[\d.]+/.exec(e.version)) ? k[0] : null));
            else n(e = b.runtime) == C ? (u = "Adobe AIR", v = e.flash.system.Capabilities.os) : n(e = b.phantom) == T ? (u = "PhantomJS", k = (e = e.version || null) && e.major + "." + e.minor +
                "." + e.patch) : "number" == typeof Q.documentMode && (e = /\bTrident\/(\d+)/i.exec(a)) ? (k = [k, Q.documentMode], (e = +e[1] + 4) != k[1] && (m.push("IE " + k[1] + " mode"), D && (D[1] = ""), k[1] = e), k = "IE" == u ? String(k[1].toFixed(1)) : k[0]) : "number" == typeof Q.documentMode && /^(?:Chrome|Firefox)\b/.test(u) && (m.push("masking as " + u + " " + k), u = "IE", k = "11.0", D = ["Trident"], v = "Windows");
            v = v && d(v)
        }
        k && (e = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(k) || /(?:alpha|beta)(?: ?\d)?/i.exec(a + ";" + (P && x.appMinorVersion)) || /\bMinefield\b/i.test(a) &&
            "a") && (V = /b/i.test(e) ? "beta" : "alpha", k = k.replace(RegExp(e + "\\+?$"), "") + ("beta" == V ? L : y) + (/\d+\+?/.exec(e) || ""));
        if ("Fennec" == u || "Firefox" == u && /\b(?:Android|Firefox OS)\b/.test(v)) u = "Firefox Mobile";
        else if ("Maxthon" == u && k) k = k.replace(/\.[\d.]+/, ".x");
        else if (/\bXbox\b/i.test(E)) "Xbox 360" == E && (v = null), "Xbox 360" == E && /\bIEMobile\b/.test(a) && m.unshift("mobile mode");
        else if (!/^(?:Chrome|IE|Opera)$/.test(u) && (!u || E || /Browser|Mobi/.test(u)) || "Windows CE" != v && !/Mobi/i.test(a))
            if ("IE" == u && P) try {
                null === b.external &&
                    m.unshift("platform preview")
            } catch (X) {
                m.unshift("embedded")
            } else(/\bBlackBerry\b/.test(E) || /\bBB10\b/.test(a)) && (e = (RegExp(E.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(a) || 0)[1] || k) ? (e = [e, /BB10/.test(a)], v = (e[1] ? (E = null, I = "BlackBerry") : "Device Software") + " " + e[0], k = null) : this != c && "Wii" != E && (P && M || /Opera/.test(u) && /\b(?:MSIE|Firefox)\b/i.test(a) || "Firefox" == u && /\bOS X (?:\d+\.){2,}/.test(v) || "IE" == u && (v && !/^Win/.test(v) && 5.5 < k || /\bWindows XP\b/.test(v) && 8 < k || 8 == k && !/\bTrident\b/.test(a))) && !t.test(e =
                l.call(c, a.replace(t, "") + ";")) && e.name && (e = "ing as " + e.name + ((e = e.version) ? " " + e : ""), t.test(u) ? (/\bIE\b/.test(e) && "Mac OS" == v && (v = null), e = "identify" + e) : (e = "mask" + e, u = O ? d(O.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(e) && (v = null), P || (k = null)), D = ["Presto"], m.push(e));
            else u += " Mobile";
        if (e = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(a) || 0)[1]) {
            e = [parseFloat(e.replace(/\.(\d)$/, ".0$1")), e];
            if ("Safari" == u && "+" == e[1].slice(-1)) u = "WebKit Nightly", V = "alpha", k = e[1].slice(0, -1);
            else if (k == e[1] || k == (e[2] =
                    (/\bSafari\/([\d.]+\+?)/i.exec(a) || 0)[1])) k = null;
            e[1] = (/\bChrome\/([\d.]+)/i.exec(a) || 0)[1];
            537.36 == e[0] && 537.36 == e[2] && 28 <= parseFloat(e[1]) && "WebKit" == D && (D = ["Blink"]);
            P && (J || e[1]) ? (D && (D[1] = "like Chrome"), e = e[1] || (e = e[0], 530 > e ? 1 : 532 > e ? 2 : 532.05 > e ? 3 : 533 > e ? 4 : 534.03 > e ? 5 : 534.07 > e ? 6 : 534.1 > e ? 7 : 534.13 > e ? 8 : 534.16 > e ? 9 : 534.24 > e ? 10 : 534.3 > e ? 11 : 535.01 > e ? 12 : 535.02 > e ? "13+" : 535.07 > e ? 15 : 535.11 > e ? 16 : 535.19 > e ? 17 : 536.05 > e ? 18 : 536.1 > e ? 19 : 537.01 > e ? 20 : 537.11 > e ? "21+" : 537.13 > e ? 23 : 537.18 > e ? 24 : 537.24 > e ? 25 : 537.36 > e ? 26 : "Blink" !=
                D ? "27" : "28")) : (D && (D[1] = "like Safari"), e = (e = e[0], 400 > e ? 1 : 500 > e ? 2 : 526 > e ? 3 : 533 > e ? 4 : 534 > e ? "4+" : 535 > e ? 5 : 537 > e ? 6 : 538 > e ? 7 : 601 > e ? 8 : "8"));
            D && (D[1] += " " + (e += "number" == typeof e ? ".x" : /[.+]/.test(e) ? "" : "+"));
            "Safari" == u && (!k || 45 < parseInt(k)) && (k = e)
        }
        "Opera" == u && (e = /\bzbov|zvav$/.exec(v)) ? (u += " ", m.unshift("desktop mode"), "zvav" == e ? (u += "Mini", k = null) : u += "Mobile", v = v.replace(RegExp(" *" + e + "$"), "")) : "Safari" == u && /\bChrome\b/.exec(D && D[1]) && (m.unshift("desktop mode"), u = "Chrome Mobile", k = null, /\bOS X\b/.test(v) ? (I =
            "Apple", v = "iOS 4.3+") : v = null);
        k && 0 == k.indexOf(e = /[\d.]+$/.exec(v)) && -1 < a.indexOf("/" + e + "-") && (v = String(v.replace(e, "")).replace(/^ +| +$/g, ""));
        D && !/\b(?:Avant|Nook)\b/.test(u) && (/Browser|Lunascape|Maxthon/.test(u) || "Safari" != u && /^iOS/.test(v) && /\bSafari\b/.test(D[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(u) && D[1]) && (e = D[D.length - 1]) && m.push(e);
        m.length && (m = ["(" + m.join("; ") + ")"]);
        I && E && 0 > E.indexOf(I) && m.push("on " + I);
        E && m.push((/^on /.test(m[m.length -
            1]) ? "" : "on ") + E);
        if (v) {
            var W = (e = / ([\d.+]+)$/.exec(v)) && "/" == v.charAt(v.length - e[0].length - 1);
            v = {
                architecture: 32,
                family: e && !W ? v.replace(e[0], "") : v,
                version: e ? e[1] : null,
                toString: function() {
                    var a = this.version;
                    return this.family + (a && !W ? " " + a : "") + (64 == this.architecture ? " 64-bit" : "")
                }
            }
        }(e = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(U)) && !/\bi686\b/i.test(U) ? (v && (v.architecture = 64, v.family = v.family.replace(RegExp(" *" + e), "")), u && (/\bWOW64\b/i.test(a) || P && /\w(?:86|32)$/.test(x.cpuClass || x.platform) && !/\bWin64; x64\b/i.test(a)) &&
            m.unshift("32-bit")) : v && /^OS X/.test(v.family) && "Chrome" == u && 39 <= parseFloat(k) && (v.architecture = 64);
        a || (a = null);
        b = {};
        b.description = a;
        b.layout = D && D[0];
        b.manufacturer = I;
        b.name = u;
        b.prerelease = V;
        b.product = E;
        b.ua = a;
        b.version = u && k;
        b.os = v || {
            architecture: null,
            family: null,
            version: null,
            toString: function() {
                return "null"
            }
        };
        b.parse = l;
        b.toString = function() {
            return this.description || ""
        };
        b.version && m.unshift(k);
        b.name && m.unshift(u);
        v && u && (v != String(v).split(" ")[0] || v != u.split(" ")[0] && !E) && m.push(E ? "(" + v + ")" : "on " +
            v);
        m.length && (b.description = m.join(" "));
        return b
    }
    var f = {
            "function": !0,
            object: !0
        },
        r = f[typeof window] && window || this,
        x = f[typeof exports] && exports;
    f = f[typeof module] && module && !module.nodeType && module;
    var g = x && f && "object" == typeof global && global;
    !g || g.global !== g && g.window !== g && g.self !== g || (r = g);
    var m = Math.pow(2, 53) - 1,
        t = /\bOpera/;
    g = Object.prototype;
    var k = g.hasOwnProperty,
        A = g.toString,
        z = l();
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (r.platform = z, define(function() {
            return z
        })) : x &&
        f ? c(z, function(a, b) {
            x[b] = a
        }) : r.platform = z
}).call(this);

function buildIOSMeta() {
    for (var a = [{
            name: "viewport",
            content: "width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
        }, {
            name: "apple-mobile-web-app-capable",
            content: "yes"
        }, {
            name: "apple-mobile-web-app-status-bar-style",
            content: "black"
        }], b = 0; b < a.length; b++) {
        var d = document.createElement("meta");
        d.name = a[b].name;
        d.content = a[b].content;
        var c = window.document.head.querySelector('meta[name="' + d.name + '"]');
        c && c.parentNode.removeChild(c);
        window.document.head.appendChild(d)
    }
}

function hideIOSFullscreenPanel() {
    jQuery(".xxx-ios-fullscreen-message").css("display", "none");
    jQuery(".xxx-ios-fullscreen-scroll").css("display", "none");
    jQuery(".xxx-game-iframe-full").removeClass("xxx-game-iframe-iphone-se")
}

function buildIOSFullscreenPanel() {
    jQuery("body").append('<div class="xxx-ios-fullscreen-message"><div class="xxx-ios-fullscreen-swipe"></div></div><div class="xxx-ios-fullscreen-scroll"></div>')
}

function showIOSFullscreenPanel() {
    jQuery(".xxx-ios-fullscreen-message").css("display", "block");
    jQuery(".xxx-ios-fullscreen-scroll").css("display", "block")
}

function __iosResize() {
    window.scrollTo(0, 0);
    if ("iPhone" === platform.product) switch (window.devicePixelRatio) {
        case 2:
            switch (window.innerWidth) {
                case 568:
                    320 !== window.innerHeight && jQuery(".xxx-game-iframe-full").addClass("xxx-game-iframe-iphone-se");
                    break;
                case 667:
                    375 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                    break;
                default:
                    hideIOSFullscreenPanel()
            }
            break;
        case 3:
            switch (window.innerWidth) {
                case 736:
                    414 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                    break;
                case 724:
                    375 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                    break;
                default:
                    hideIOSFullscreenPanel()
            }
            break;
        default:
            hideIOSFullscreenPanel()
    }
}

function iosResize() {
    __iosResize();
    setTimeout(function() {
        __iosResize()
    }, 500)
}

function iosInIframe() {
    try {
        return window.self !== window.top
    } catch (a) {
        return !0
    }
}
$(document).ready(function() {
    platform && "iPhone" === platform.product && !iosInIframe() && (buildIOSFullscreenPanel(), buildIOSMeta())
});
jQuery(window).resize(function() {
    platform && "iPhone" === platform.product && !iosInIframe() && iosResize()
});
var s_iScaleFactor = 1,
    s_bIsIphone = !1;
(function(a) {
    (jQuery.browser = jQuery.browser || {}).mobile = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
})(navigator.userAgent ||
    navigator.vendor || window.opera);
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
    var b = a.toLowerCase(),
        d = window.document,
        c = d.documentElement;
    if (void 0 === window["inner" + a]) a = c["client" + a];
    else if (window["inner" + a] != c["client" + a]) {
        var n = d.createElement("body");
        n.id = "vpw-test-b";
        n.style.cssText = "overflow:scroll";
        var h = d.createElement("div");
        h.id = "vpw-test-d";
        h.style.cssText = "position:absolute;top:-1000px";
        h.innerHTML = "<style>@media(" + b + ":" + c["client" + a] + "px){body#vpw-test-b div#vpw-test-d{" + b + ":7px!important}}</style>";
        n.appendChild(h);
        c.insertBefore(n, d.head);
        a = 7 == h["offset" + a] ? c["client" + a] : window["inner" + a];
        c.removeChild(n)
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
        var b = getSize("Width");
        _checkOrientation(b, a);
        var d = Math.min(a / CANVAS_HEIGHT, b / CANVAS_WIDTH),
            c = CANVAS_WIDTH * d;
        d *= CANVAS_HEIGHT;
        if (d < a) {
            var n = a - d;
            d += n;
            c += CANVAS_WIDTH / CANVAS_HEIGHT * n
        } else c < b && (n = b - c, c += n, d += CANVAS_HEIGHT / CANVAS_WIDTH * n);
        n = a / 2 - d / 2;
        var h = b / 2 - c / 2,
            q = CANVAS_WIDTH / c;
        if (h * q < -EDGEBOARD_X || n * q < -EDGEBOARD_Y) d = Math.min(a / (CANVAS_HEIGHT - 2 *
            EDGEBOARD_Y), b / (CANVAS_WIDTH - 2 * EDGEBOARD_X)), c = CANVAS_WIDTH * d, d *= CANVAS_HEIGHT, n = (a - d) / 2, h = (b - c) / 2, q = CANVAS_WIDTH / c;
        s_iOffsetX = -1 * h * q;
        s_iOffsetY = -1 * n * q;
        0 <= n && (s_iOffsetY = 0);
        0 <= h && (s_iOffsetX = 0);
        null !== s_oInterface && s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        s_bIsIphone ? (canvas = document.getElementById("canvas"), s_oStage.canvas.width = 2 * c, s_oStage.canvas.height = 2 * d, canvas.style.width = c + "px", canvas.style.height = d + "px", a = Math.min(c /
            CANVAS_WIDTH, d / CANVAS_HEIGHT), s_iScaleFactor = 2 * a, s_oStage.scaleX = s_oStage.scaleY = 2 * a) : s_bMobile && !1 === isIOS() ? ($("#canvas").css("width", c + "px"), $("#canvas").css("height", d + "px")) : (s_oStage.canvas.width = c, s_oStage.canvas.height = d, s_iScaleFactor = Math.min(c / CANVAS_WIDTH, d / CANVAS_HEIGHT), s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor);
        0 > n ? $("#canvas").css("top", n + "px") : $("#canvas").css("top", "0px");
        $("#canvas").css("left", h + "px");
        fullscreenHandler()
    }
}

function createBitmap(a, b, d) {
    var c = new createjs.Bitmap(a),
        n = new createjs.Shape;
    b && d ? n.graphics.beginFill("#fff").drawRect(0, 0, b, d) : n.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
    c.hitArea = n;
    return c
}

function createSprite(a, b, d, c, n, h) {
    a = null !== b ? new createjs.Sprite(a, b) : new createjs.Sprite(a);
    b = new createjs.Shape;
    b.graphics.beginFill("#000000").drawRect(-d, -c, n, h);
    a.hitArea = b;
    return a
}

function _checkOrientation(a, b) {
    s_bMobile && ENABLE_CHECK_ORIENTATION && (a > b ? "landscape" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()) : "portrait" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"),
        s_oMain.stopUpdate()))
}

function playSound(a, b, d) {
    return !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (s_aSounds[a].play(), s_aSounds[a].volume(b), s_aSounds[a].loop(d), s_aSounds[a]) : null
}

function stopSound(a) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].stop()
}

function setVolume(a, b) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].volume(b)
}

function setMute(a, b) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].mute(b)
}

function randomFloatBetween(a, b, d) {
    "undefined" === typeof d && (d = 2);
    return parseFloat(Math.min(a + Math.random() * (b - a), b).toFixed(d))
}

function shuffle(a) {
    for (var b = a.length, d, c; 0 !== b;) c = Math.floor(Math.random() * b), --b, d = a[b], a[b] = a[c], a[c] = d;
    return a
}

function formatTime(a) {
    a /= 1E3;
    var b = Math.floor(a / 60);
    a = parseFloat(a - 60 * b).toFixed(1);
    var d = "";
    d = 10 > b ? d + ("0" + b + ":") : d + (b + ":");
    return 10 > a ? d + ("0" + a) : d + a
}

function NoClickDelay(a) {
    this.element = a;
    window.Touch && this.element.addEventListener("touchstart", this, !1)
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
            3 === a.nodeType && (a = a.parentNode);
            var b = document.createEvent("MouseEvents");
            b.initEvent("click", !0, !0);
            a.dispatchEvent(b)
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
    for (var b = window.location.search.substring(1).split("&"), d = 0; d < b.length; d++) {
        var c = b[d].split("=");
        if (c[0] == a) return c[1]
    }
}
(function() {
    function a(a) {
        var c = {
            focus: "visible",
            focusin: "visible",
            pageshow: "visible",
            blur: "hidden",
            focusout: "hidden",
            pagehide: "hidden"
        };
        a = a || window.event;
        a.type in c ? document.body.className = c[a.type] : (document.body.className = this[b] ? "hidden" : "visible", "hidden" === document.body.className ? s_oMain.stopUpdate() : s_oMain.startUpdate())
    }
    var b = "hidden";
    b in document ? document.addEventListener("visibilitychange", a) : (b = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", a) : (b = "webkitHidden") in
        document ? document.addEventListener("webkitvisibilitychange", a) : (b = "msHidden") in document ? document.addEventListener("msvisibilitychange", a) : "onfocusin" in document ? document.onfocusin = document.onfocusout = a : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = a
})();

function fullscreenHandler() {
    ENABLE_FULLSCREEN && screenfull.enabled && (s_bFullscreen = screen.height < window.innerHeight + 3 && screen.height > window.innerHeight - 3 ? !0 : !1, null !== s_oInterface && s_oInterface.resetFullscreenBut(), null !== s_oMenu && s_oMenu.resetFullscreenBut())
}
if (screenfull.enabled) screenfull.on("change", function() {
    s_bFullscreen = screenfull.isFullscreen;
    null !== s_oInterface && s_oInterface.resetFullscreenBut();
    null !== s_oMenu && s_oMenu.resetFullscreenBut()
});

function CSpriteLibrary() {
    var a, b, d, c, n, h;
    this.init = function(q, p, l) {
        d = b = 0;
        c = q;
        n = p;
        h = l;
        a = {}
    };
    this.addSprite = function(c, d) {
        a.hasOwnProperty(c) || (a[c] = {
            szPath: d,
            oSprite: new Image
        }, b++)
    };
    this.getSprite = function(b) {
        return a.hasOwnProperty(b) ? a[b].oSprite : null
    };
    this._onSpritesLoaded = function() {
        n.call(h)
    };
    this._onSpriteLoaded = function() {
        c.call(h);
        ++d === b && this._onSpritesLoaded()
    };
    this.loadSprites = function() {
        for (var b in a) a[b].oSprite.oSpriteLibrary = this, a[b].oSprite.onload = function() {
                this.oSpriteLibrary._onSpriteLoaded()
            },
            a[b].oSprite.src = a[b].szPath
    };
    this.getNumSprites = function() {
        return b
    }
}
var CANVAS_WIDTH = 1500,
    CANVAS_HEIGHT = 640,
    EDGEBOARD_X = 300,
    EDGEBOARD_Y = 0,
    FONT_GAME = "walibi0615bold",
    FPS_TIME = 1E3 / 24,
    DISABLE_SOUND_MOBILE = !1,
    STATE_LOADING = 0,
    STATE_MENU = 1,
    STATE_HELP = 1,
    STATE_GAME = 3,
    GAME_STATE_IDLE = 0,
    GAME_STATE_SPINNING = 1,
    GAME_STATE_SHOW_ALL_WIN = 2,
    GAME_STATE_SHOW_WIN = 3,
    REEL_STATE_START = 0,
    REEL_STATE_MOVING = 1,
    REEL_STATE_STOP = 2,
    ON_MOUSE_DOWN = 0,
    ON_MOUSE_UP = 1,
    ON_MOUSE_OVER = 2,
    ON_MOUSE_OUT = 3,
    ON_DRAG_START = 4,
    ON_DRAG_END = 5,
    REEL_OFFSET_X = 380,
    REEL_OFFSET_Y = 123,
    NUM_REELS = 5,
    NUM_ROWS = 3,
    NUM_SYMBOLS = 10,
    WILD_SYMBOL = 10,
    BONUS_SYMBOL = 9,
    NUM_PAYLINES = 5,
    SYMBOL_SIZE = 140,
    SPACE_BETWEEN_SYMBOLS = 10,
    MAX_FRAMES_REEL_EASE = 16,
    MIN_REEL_LOOPS, REEL_DELAY, REEL_START_Y = REEL_OFFSET_Y - 3 * SYMBOL_SIZE,
    REEL_ARRIVAL_Y = REEL_OFFSET_Y + 3 * SYMBOL_SIZE,
    TIME_SHOW_WIN, TIME_SHOW_ALL_WINS, MIN_BET, MAX_BET, TOTAL_MONEY, MAX_NUM_HOLD, UFO_WIDTH = 174,
    UFO_HEIGHT = 248,
    NUM_ALIEN = 3,
    NUM_SYMBOLS_FOR_BONUS = 3,
    PERC_WIN_BONUS_PRIZE_1, PERC_WIN_BONUS_PRIZE_2, PERC_WIN_BONUS_PRIZE_3, SOUNDTRACK_VOLUME = .5,
    WIN_OCCURRENCE, SLOT_CASH, MIN_WIN, BONUS_OCCURRENCE, PAYTABLE_VALUES,
    BONUS_PRIZE = [
        [5, 50, 100],
        [10, 100, 200],
        [50, 200, 500]
    ],
    ENABLE_FULLSCREEN, ENABLE_CHECK_ORIENTATION, SHOW_CREDITS;

function CSlotSettings() {
    this._init = function() {
        this._initSymbolSpriteSheets();
        this._initPaylines();
        this._initSymbolWin();
        this._initSymbolAnims();
        this._initSymbolsOccurence();
        this._initBonus()
    };
    this._initSymbolSpriteSheets = function() {
        s_aSymbolData = [];
        for (var a = 1; a < NUM_SYMBOLS + 1; a++) {
            var b = {
                images: [s_oSpriteLibrary.getSprite("symbol_" + a)],
                frames: {
                    width: SYMBOL_SIZE,
                    height: SYMBOL_SIZE,
                    regX: 0,
                    regY: 0
                },
                animations: {
                    "static": [0, 1],
                    moving: [1, 2]
                }
            };
            s_aSymbolData[a] = new createjs.SpriteSheet(b)
        }
    };
    this._initPaylines =
        function() {
            s_aPaylineCombo = [
                [{
                    row: 1,
                    col: 0
                }, {
                    row: 1,
                    col: 1
                }, {
                    row: 1,
                    col: 2
                }, {
                    row: 1,
                    col: 3
                }, {
                    row: 1,
                    col: 4
                }],
                [{
                    row: 0,
                    col: 0
                }, {
                    row: 0,
                    col: 1
                }, {
                    row: 0,
                    col: 2
                }, {
                    row: 0,
                    col: 3
                }, {
                    row: 0,
                    col: 4
                }],
                [{
                    row: 2,
                    col: 0
                }, {
                    row: 2,
                    col: 1
                }, {
                    row: 2,
                    col: 2
                }, {
                    row: 2,
                    col: 3
                }, {
                    row: 2,
                    col: 4
                }],
                [{
                    row: 0,
                    col: 0
                }, {
                    row: 1,
                    col: 1
                }, {
                    row: 2,
                    col: 2
                }, {
                    row: 1,
                    col: 3
                }, {
                    row: 0,
                    col: 4
                }],
                [{
                    row: 2,
                    col: 0
                }, {
                    row: 1,
                    col: 1
                }, {
                    row: 0,
                    col: 2
                }, {
                    row: 1,
                    col: 3
                }, {
                    row: 2,
                    col: 4
                }]
            ]
        };
    this._initSymbolAnims = function() {
        s_aSymbolAnims = [];
        var a = {
            framerate: 20,
            images: [s_oSpriteLibrary.getSprite("symbol_1_anim")],
            frames: {
                width: SYMBOL_SIZE,
                height: SYMBOL_SIZE,
                regX: 0,
                regY: 0
            },
            animations: {
                "static": [0, 1],
                anim: [1, 14]
            }
        };
        s_aSymbolAnims[0] = new createjs.SpriteSheet(a);
        a = {
            framerate: 20,
            images: [s_oSpriteLibrary.getSprite("symbol_2_anim")],
            frames: {
                width: SYMBOL_SIZE,
                height: SYMBOL_SIZE,
                regX: 0,
                regY: 0
            },
            animations: {
                "static": [0, 1],
                anim: [1, 14]
            }
        };
        s_aSymbolAnims[1] = new createjs.SpriteSheet(a);
        a = {
            framerate: 20,
            images: [s_oSpriteLibrary.getSprite("symbol_3_anim")],
            frames: {
                width: SYMBOL_SIZE,
                height: SYMBOL_SIZE,
                regX: 0,
                regY: 0
            },
            animations: {
                "static": [0,
                    1
                ],
                anim: [1, 14]
            }
        };
        s_aSymbolAnims[2] = new createjs.SpriteSheet(a);
        a = {
            framerate: 20,
            images: [s_oSpriteLibrary.getSprite("symbol_4_anim")],
            frames: {
                width: SYMBOL_SIZE,
                height: SYMBOL_SIZE,
                regX: 0,
                regY: 0
            },
            animations: {
                "static": [0, 1],
                anim: [1, 14]
            }
        };
        s_aSymbolAnims[3] = new createjs.SpriteSheet(a);
        a = {
            framerate: 20,
            images: [s_oSpriteLibrary.getSprite("symbol_5_anim")],
            frames: {
                width: SYMBOL_SIZE,
                height: SYMBOL_SIZE,
                regX: 0,
                regY: 0
            },
            animations: {
                "static": [0, 1],
                anim: [1, 14]
            }
        };
        s_aSymbolAnims[4] = new createjs.SpriteSheet(a);
        a = {
            framerate: 20,
            images: [s_oSpriteLibrary.getSprite("symbol_6_anim")],
            frames: {
                width: SYMBOL_SIZE,
                height: SYMBOL_SIZE,
                regX: 0,
                regY: 0
            },
            animations: {
                "static": [0, 1],
                anim: [1, 14]
            }
        };
        s_aSymbolAnims[5] = new createjs.SpriteSheet(a);
        a = {
            framerate: 20,
            images: [s_oSpriteLibrary.getSprite("symbol_7_anim")],
            frames: {
                width: SYMBOL_SIZE,
                height: SYMBOL_SIZE,
                regX: 0,
                regY: 0
            },
            animations: {
                "static": [0, 1],
                anim: [1, 14]
            }
        };
        s_aSymbolAnims[6] = new createjs.SpriteSheet(a);
        a = {
            framerate: 20,
            images: [s_oSpriteLibrary.getSprite("symbol_8_anim")],
            frames: {
                width: SYMBOL_SIZE,
                height: SYMBOL_SIZE,
                regX: 0,
                regY: 0
            },
            animations: {
                "static": [0, 1],
                anim: [1, 14]
            }
        };
        s_aSymbolAnims[7] = new createjs.SpriteSheet(a);
        a = {
            framerate: 20,
            images: [s_oSpriteLibrary.getSprite("symbol_9_anim")],
            frames: {
                width: SYMBOL_SIZE,
                height: SYMBOL_SIZE,
                regX: 0,
                regY: 0
            },
            animations: {
                "static": [0, 1],
                anim: [1, 14]
            }
        };
        s_aSymbolAnims[8] = new createjs.SpriteSheet(a);
        a = {
            framerate: 20,
            images: [s_oSpriteLibrary.getSprite("symbol_10_anim")],
            frames: {
                width: SYMBOL_SIZE,
                height: SYMBOL_SIZE,
                regX: 0,
                regY: 0
            },
            animations: {
                "static": [0, 1],
                anim: [1,
                    14
                ]
            }
        };
        s_aSymbolAnims[9] = new createjs.SpriteSheet(a)
    };
    this._initSymbolWin = function() {
        s_aSymbolWin = [];
        s_aSymbolWin[0] = PAYTABLE_VALUES[0];
        s_aSymbolWin[1] = PAYTABLE_VALUES[1];
        s_aSymbolWin[2] = PAYTABLE_VALUES[2];
        s_aSymbolWin[3] = PAYTABLE_VALUES[3];
        s_aSymbolWin[4] = PAYTABLE_VALUES[4];
        s_aSymbolWin[5] = PAYTABLE_VALUES[5];
        s_aSymbolWin[6] = PAYTABLE_VALUES[6];
        s_aSymbolWin[7] = PAYTABLE_VALUES[7]
    };
    this._initSymbolsOccurence = function() {
        s_aRandSymbols = [];
        var a;
        for (a = 0; 1 > a; a++) s_aRandSymbols.push(1);
        for (a = 0; 2 > a; a++) s_aRandSymbols.push(2);
        for (a = 0; 3 > a; a++) s_aRandSymbols.push(3);
        for (a = 0; 4 > a; a++) s_aRandSymbols.push(4);
        for (a = 0; 4 > a; a++) s_aRandSymbols.push(5);
        for (a = 0; 6 > a; a++) s_aRandSymbols.push(6);
        for (a = 0; 7 > a; a++) s_aRandSymbols.push(7);
        for (a = 0; 8 > a; a++) s_aRandSymbols.push(8);
        for (a = 0; 2 > a; a++) s_aRandSymbols.push(9);
        for (a = 0; 1 > a; a++) s_aRandSymbols.push(10)
    };
    this._initBonus = function() {
        s_aAlienOccurence = [];
        var a;
        for (a = 0; a < PERC_WIN_BONUS_PRIZE_1; a++) s_aAlienOccurence.push(0);
        for (a = 0; a < PERC_WIN_BONUS_PRIZE_2; a++) s_aAlienOccurence.push(1);
        for (a = 0; a <
            PERC_WIN_BONUS_PRIZE_3; a++) s_aAlienOccurence.push(2)
    };
    this._init()
}
var s_aSymbolData, s_aPaylineCombo, s_aSymbolWin, s_aSymbolAnims, s_aRandSymbols, s_aAlienOccurence;
TEXT_MONEY = "MONEY";
TEXT_PLAY = "PLAY";
TEXT_BET = "BET";
TEXT_COIN = "COIN";
TEXT_MAX_BET = "MAX BET";
TEXT_INFO = "INFO";
TEXT_LINES = "LINES";
TEXT_SPIN = "SPIN";
TEXT_WIN = "WIN";
TEXT_HOLD = "HOLD";
TEXT_HELP_WILD = "JOLLY SYMBOL CAN REPLACE ANY OTHER SYMBOL TO MAKE UP A COMBO";
TEXT_HELP_BONUS = "3 OR MORE STARS LET YOU PLAY THE BONUS GAME!";
TEXT_CREDITS_DEVELOPED = "DEVELOPED BY";
TEXT_CURRENCY = "$";
var TEXT_PRELOADER_CONTINUE = "START";
TEXT_CONGRATULATIONS = "Congratulations!";
TEXT_MSG_SHARE1 = "You collected <strong>";
TEXT_MSG_SHARE2 = " points</strong>!<br><br>Share your score with your friends!";
TEXT_MSG_SHARING1 = "My score is ";
TEXT_MSG_SHARING2 = " points! Can you do better?";

function CPreloader() {
    var a, b, d, c, n, h, q, p, l, f;
    this._init = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
        s_oSpriteLibrary.addSprite("200x200", "./sprites/200x200.jpg");
        s_oSpriteLibrary.addSprite("but_start", "./sprites/but_start.png");
        s_oSpriteLibrary.loadSprites();
        f = new createjs.Container;
        s_oStage.addChild(f)
    };
    this.unload = function() {
        f.removeAllChildren();
        l.unload()
    };
    this._onImagesLoaded = function() {};
    this._onAllImagesLoaded = function() {
        this.attachSprites();
        s_oMain.preloaderReady()
    };
    this.attachSprites = function() {
        var r = new createjs.Shape;
        r.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        f.addChild(r);
        r = s_oSpriteLibrary.getSprite("200x200");
        q = createBitmap(r);
        q.regX = .5 * r.width;
        q.regY = .5 * r.height;
        q.x = CANVAS_WIDTH / 2;
        q.y = CANVAS_HEIGHT / 2 - 180;
        f.addChild(q);
        p = new createjs.Shape;
        p.graphics.beginFill("rgba(0,0,0,0.01)").drawRoundRect(q.x - 100, q.y - 100, 200, 200, 10);
        f.addChild(p);
        q.mask = p;
        r = s_oSpriteLibrary.getSprite("progress_bar");
        c = createBitmap(r);
        c.x = CANVAS_WIDTH / 2 - r.width / 2;
        c.y = CANVAS_HEIGHT / 2 + 50;
        f.addChild(c);
        a = r.width;
        b = r.height;
        n = new createjs.Shape;
        n.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(c.x, c.y, 1, b);
        f.addChild(n);
        c.mask = n;
        d = new createjs.Text("", "30px " + FONT_GAME, "#fff");
        d.x = CANVAS_WIDTH / 2;
        d.y = CANVAS_HEIGHT / 2 + 100;
        d.textBaseline = "alphabetic";
        d.textAlign = "center";
        f.addChild(d);
        r = s_oSpriteLibrary.getSprite("but_start");
        l = new CTextButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT /
            2, r, TEXT_PRELOADER_CONTINUE, "Arial", "#000", "bold 40", f);
        l.addEventListener(ON_MOUSE_UP, this._onButStartRelease, this);
        l.setVisible(!1);
        h = new createjs.Shape;
        h.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        f.addChild(h);
        createjs.Tween.get(h).to({
            alpha: 0
        }, 500).call(function() {
            createjs.Tween.removeTweens(h);
            f.removeChild(h)
        })
    };
    this._onButStartRelease = function() {
        s_oMain._onRemovePreloader()
    };
    this.refreshLoader = function(f) {
        d.text = f + "%";
        100 === f && (l.setVisible(!0), d.visible = !1, c.visible = !1);
        n.graphics.clear();
        f = Math.floor(f * a / 100);
        n.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(c.x, c.y, f, b)
    };
    this._init()
}

function CMain(a) {
    var b, d = 0,
        c = 0,
        n = STATE_LOADING,
        h, q;
    this.initContainer = function() {
        var a = document.getElementById("canvas");
        s_oStage = new createjs.Stage(a);
        createjs.Touch.enable(s_oStage);
        s_bMobile = jQuery.browser.mobile;
        !1 === s_bMobile && s_oStage.enableMouseOver(20);
        s_iPrevTime = (new Date).getTime();
        createjs.Ticker.setFPS(30);
        createjs.Ticker.addEventListener("tick", this._update);
        navigator.userAgent.match(/Windows Phone/i) && (DISABLE_SOUND_MOBILE = !0);
        s_oSpriteLibrary = new CSpriteLibrary;
        h =    new CPreloader 
        // seekAndDestroy() ? h =    new CPreloader : window.location.href = "http://www.codethislab.com/contact-us.html"
    };
    this.preloaderReady = function() {
        this._loadImages();
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || this._initSounds();
        b = !0
    };
    this.soundLoaded = function() {
        d++;
        h.refreshLoader(Math.floor(d / c * 100))
    };
    this._initSounds = function() {
        var a = [];
        a.push({
            path: "./sounds/",
            filename: "win",
            loop: !0,
            volume: 1,
            ingamename: "win"
        });
        a.push({
            path: "./sounds/",
            filename: "press_but",
            loop: !1,
            volume: 1,
            ingamename: "press_but"
        });
        a.push({
            path: "./sounds/",
            filename: "reel_stop",
            loop: !1,
            volume: 1,
            ingamename: "reel_stop"
        });
        a.push({
            path: "./sounds/",
            filename: "reels",
            loop: !1,
            volume: 1,
            ingamename: "reels"
        });
        a.push({
            path: "./sounds/",
            filename: "start_reel",
            loop: !1,
            volume: 1,
            ingamename: "start_reel"
        });
        a.push({
            path: "./sounds/",
            filename: "choose_ufo",
            loop: !1,
            volume: 1,
            ingamename: "choose_ufo"
        });
        a.push({
            path: "./sounds/",
            filename: "press_hold",
            loop: !1,
            volume: 1,
            ingamename: "press_hold"
        });
        a.push({
            path: "./sounds/",
            filename: "reveal_alien",
            loop: !1,
            volume: 1,
            ingamename: "reveal_alien"
        });
        a.push({
            path: "./sounds/",
            filename: "soundtrack_bonus",
            loop: !0,
            volume: 1,
            ingamename: "soundtrack_bonus"
        });
        a.push({
            path: "./sounds/",
            filename: "soundtrack",
            loop: !0,
            volume: 1,
            ingamename: "soundtrack"
        });
        c += a.length;
        s_aSounds = [];
        for (var b = 0; b < a.length; b++) s_aSounds[a[b].ingamename] = new Howl({
            src: [a[b].path + a[b].filename + ".mp3"],
            autoplay: !1,
            preload: !0,
            loop: a[b].loop,
            volume: a[b].volume,
            onload: s_oMain.soundLoaded
        })
    };
    this._loadImages = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("but_exit",
            "./sprites/but_exit.png");
        s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
        s_oSpriteLibrary.addSprite("bg_game", "./sprites/bg_game.jpg");
        s_oSpriteLibrary.addSprite("paytable", "./sprites/paytable.jpg");
        s_oSpriteLibrary.addSprite("but_play_bg", "./sprites/but_play_bg.png");
        s_oSpriteLibrary.addSprite("mask_slot", "./sprites/mask_slot.png");
        s_oSpriteLibrary.addSprite("spin_but", "./sprites/but_spin_bg.png");
        s_oSpriteLibrary.addSprite("coin_but", "./sprites/but_coin_bg.png");
        s_oSpriteLibrary.addSprite("info_but",
            "./sprites/but_info_bg.png");
        s_oSpriteLibrary.addSprite("bet_but", "./sprites/bet_but.png");
        s_oSpriteLibrary.addSprite("win_frame_anim", "./sprites/win_frame_anim.png");
        s_oSpriteLibrary.addSprite("but_lines_bg", "./sprites/but_lines_bg.png");
        s_oSpriteLibrary.addSprite("but_maxbet_bg", "./sprites/but_maxbet_bg.png");
        s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
        s_oSpriteLibrary.addSprite("hit_area_col", "./sprites/hit_area_col.png");
        s_oSpriteLibrary.addSprite("hold_col", "./sprites/hold_col.png");
        s_oSpriteLibrary.addSprite("bonus_bg", "./sprites/bonus_bg.jpg");
        s_oSpriteLibrary.addSprite("bonus_ufo", "./sprites/bonus_ufo.png");
        s_oSpriteLibrary.addSprite("bonus_prize", "./sprites/bonus_prize.png");
        s_oSpriteLibrary.addSprite("but_credits", "./sprites/but_credits.png");
        s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
        s_oSpriteLibrary.addSprite("logo_ctl", "./sprites/logo_ctl.png");
        s_oSpriteLibrary.addSprite("but_fullscreen", "./sprites/but_fullscreen.png");
        for (var a = 1; a < NUM_SYMBOLS + 1; a++) s_oSpriteLibrary.addSprite("symbol_" +
            a, "./sprites/symbol_" + a + ".png"), s_oSpriteLibrary.addSprite("symbol_" + a + "_anim", "./sprites/symbol_" + a + "_anim.png");
        for (a = 1; a < NUM_PAYLINES + 1; a++) s_oSpriteLibrary.addSprite("payline_" + a, "./sprites/payline_" + a + ".png");
        c += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites()
    };
    this._onImagesLoaded = function() {
        d++;
        h.refreshLoader(Math.floor(d / c * 100))
    };
    this._onAllImagesLoaded = function() {};
    this.onAllPreloaderImagesLoaded = function() {
        this._loadImages()
    };
    this._onRemovePreloader = function() {
        h.unload();
        s_oSoundTrack = playSound("soundtrack", 1, !0);
        this.gotoMenu()
    };
    this.gotoMenu = function() {
        new CMenu;
        n = STATE_MENU
    };
    this.gotoGame = function() {
        q = new CGame(p);
        n = STATE_GAME
    };
    this.gotoHelp = function() {
        new CHelp;
        n = STATE_HELP
    };
    this.stopUpdate = function() {
        b = !1;
        createjs.Ticker.paused = !0;
        $("#block_game").css("display", "block");
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || Howler.mute(!0)
    };
    this.startUpdate = function() {
        s_iPrevTime = (new Date).getTime();
        b = !0;
        createjs.Ticker.paused = !1;
        $("#block_game").css("display", "none");
        (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) && s_bAudioActive && Howler.mute(!1)
    };
    this._update = function(a) {
        if (!1 !== b) {
            var c = (new Date).getTime();
            s_iTimeElaps = c - s_iPrevTime;
            s_iCntTime += s_iTimeElaps;
            s_iCntFps++;
            s_iPrevTime = c;
            1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps, s_iCntTime -= 1E3, s_iCntFps = 0);
            n === STATE_GAME && q.update();
            s_oStage.update(a)
        }
    };
    s_oMain = this;
    var p = a;
    PAYTABLE_VALUES = [];
    for (var l = 0; 8 > l; l++) PAYTABLE_VALUES[l] = a["paytable_symbol_" + (l + 1)];
    ENABLE_FULLSCREEN = p.fullscreen;
    ENABLE_CHECK_ORIENTATION = p.check_orientation;
    SHOW_CREDITS = p.show_credits;
    this.initContainer()
}
var s_bMobile, s_bAudioActive = !0,
    s_bFullscreen = !1,
    s_iCntTime = 0,
    s_iTimeElaps = 0,
    s_iPrevTime = 0,
    s_iCntFps = 0,
    s_iCurFps = 0,
    s_oDrawLayer, s_oStage, s_oMain, s_oSpriteLibrary, s_oSoundTrack = null;

function CTextButton(a, b, d, c, n, h, q, p) {
    var l, f, r, x, g, m, t, k, A, z;
    this._init = function(a, b, c, d, m, h, q) {
        l = !1;
        x = [];
        g = [];
        z = createBitmap(c);
        f = c.width;
        r = c.height;
        A = new createjs.Text(d, q + "px " + m, h);
        A.textAlign = "center";
        A.shadow = new createjs.Shadow("#000", 2, 2, 2);
        A.textBaseline = "middle";
        A.lineHeight = 24;
        A.x = c.width / 2;
        A.y = c.height / 2;
        k = new createjs.Container;
        k.x = a;
        k.y = b;
        k.regX = c.width / 2;
        k.regY = c.height / 2;
        k.cursor = "pointer";
        k.addChild(z, A);
        p.addChild(k);
        this._initListener()
    };
    this.unload = function() {
        k.off("mousedown",
            m);
        k.off("pressup", t);
        p.removeChild(k)
    };
    this.setVisible = function(a) {
        k.visible = a
    };
    this.enable = function() {
        l = !1;
        z.filters = [];
        z.cache(0, 0, f, r)
    };
    this.disable = function() {
        l = !0;
        var a = (new createjs.ColorMatrix).adjustSaturation(-100);
        z.filters = [new createjs.ColorMatrixFilter(a)];
        z.cache(0, 0, f, r)
    };
    this._initListener = function() {
        m = k.on("mousedown", this.buttonDown);
        t = k.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        x[a] = b;
        g[a] = c
    };
    this.buttonRelease = function() {
        l || (playSound("press_but",
            1, !1), k.scaleX = 1, k.scaleY = 1, x[ON_MOUSE_UP] && x[ON_MOUSE_UP].call(g[ON_MOUSE_UP]))
    };
    this.buttonDown = function() {
        l || (k.scaleX = .9, k.scaleY = .9, x[ON_MOUSE_DOWN] && x[ON_MOUSE_DOWN].call(g[ON_MOUSE_DOWN]))
    };
    this.setPosition = function(a, b) {
        k.x = a;
        k.y = b
    };
    this.changeText = function(a) {
        A.text = a
    };
    this.setX = function(a) {
        k.x = a
    };
    this.setY = function(a) {
        k.y = a
    };
    this.getButtonImage = function() {
        return k
    };
    this.getX = function() {
        return k.x
    };
    this.getY = function() {
        return k.y
    };
    this._init(a, b, d, c, n, h, q);
    return this
}

function CGfxButton(a, b, d, c) {
    var n, h, q, p, l, f, r, x, g;
    this._init = function(a, b, c, f) {
        n = !1;
        p = [];
        l = [];
        g = createBitmap(c);
        g.x = a;
        g.y = b;
        h = c.width;
        q = c.height;
        g.cursor = "pointer";
        g.regX = c.width / 2;
        g.regY = c.height / 2;
        !1 !== f && s_oStage.addChild(g);
        this._initListener()
    };
    this.unload = function() {
        g.off("mousedown", r);
        g.off("pressup", x);
        s_oStage.removeChild(g)
    };
    this.setVisible = function(a) {
        g.visible = a
    };
    this.enable = function() {
        n = !1;
        g.filters = [];
        g.cache(0, 0, h, q)
    };
    this.disable = function() {
        n = !0;
        var a = (new createjs.ColorMatrix).adjustSaturation(-100).adjustBrightness(40);
        g.filters = [new createjs.ColorMatrixFilter(a)];
        g.cache(0, 0, h, q)
    };
    this._initListener = function() {
        r = g.on("mousedown", this.buttonDown);
        x = g.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        p[a] = b;
        l[a] = c
    };
    this.addEventListenerWithParams = function(a, b, c, g) {
        p[a] = b;
        l[a] = c;
        f = g
    };
    this.buttonRelease = function() {
        n || (playSound("press_but", 1, !1), g.scaleX = 1, g.scaleY = 1, p[ON_MOUSE_UP] && p[ON_MOUSE_UP].call(l[ON_MOUSE_UP], f))
    };
    this.buttonDown = function() {
        n || (g.scaleX = .9, g.scaleY = .9, p[ON_MOUSE_DOWN] &&
            p[ON_MOUSE_DOWN].call(l[ON_MOUSE_DOWN], f))
    };
    this.setPosition = function(a, b) {
        g.x = a;
        g.y = b
    };
    this.setX = function(a) {
        g.x = a
    };
    this.setY = function(a) {
        g.y = a
    };
    this.getButtonImage = function() {
        return g
    };
    this.getX = function() {
        return g.x
    };
    this.getY = function() {
        return g.y
    };
    this.getSprite = function() {
        return g
    };
    this._init(a, b, d, c);
    return this
}

function CToggle(a, b, d, c, n) {
    var h, q, p, l, f, r, x;
    this._init = function(a, b, c, f, d) {
        x = void 0 !== d ? d : s_oStage;
        q = [];
        p = [];
        d = new createjs.SpriteSheet({
            images: [c],
            frames: {
                width: c.width / 2,
                height: c.height,
                regX: c.width / 2 / 2,
                regY: c.height / 2
            },
            animations: {
                state_true: [0],
                state_false: [1]
            }
        });
        h = f;
        l = createSprite(d, "state_" + h, c.width / 2 / 2, c.height / 2, c.width / 2, c.height);
        l.x = a;
        l.y = b;
        l.stop();
        s_bMobile || (l.cursor = "pointer");
        x.addChild(l);
        this._initListener()
    };
    this.unload = function() {
        l.off("mousedown", f);
        l.off("pressup", r);
        x.removeChild(l)
    };
    this._initListener = function() {
        f = l.on("mousedown", this.buttonDown);
        r = l.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        q[a] = b;
        p[a] = c
    };
    this.setCursorType = function(a) {
        l.cursor = a
    };
    this.setActive = function(a) {
        h = a;
        l.gotoAndStop("state_" + h)
    };
    this.buttonRelease = function() {
        l.scaleX = 1;
        l.scaleY = 1;
        playSound("press_but", 1, !1);
        h = !h;
        l.gotoAndStop("state_" + h);
        q[ON_MOUSE_UP] && q[ON_MOUSE_UP].call(p[ON_MOUSE_UP], h)
    };
    this.buttonDown = function() {
        l.scaleX = .9;
        l.scaleY = .9;
        q[ON_MOUSE_DOWN] && q[ON_MOUSE_DOWN].call(p[ON_MOUSE_DOWN])
    };
    this.setPosition = function(a, b) {
        l.x = a;
        l.y = b
    };
    this._init(a, b, d, c, n)
}

function CBetBut(a, b, d) {
    var c, n, h, q = [],
        p;
    this._init = function(a, b, d) {
        c = !1;
        n = [];
        h = [];
        d = s_oSpriteLibrary.getSprite("bet_but");
        var f = new createjs.SpriteSheet({
            images: [d],
            frames: {
                width: d.width / 2,
                height: d.height,
                regX: 0,
                regY: 0
            },
            animations: {
                on: [0, 1],
                off: [1, 2]
            }
        });
        p = createSprite(f, "on", 0, 0, d.width / 2, d.height);
        p.stop();
        p.x = a;
        p.y = b;
        p.cursor = "pointer";
        p.regX = d.width / 2;
        p.regY = d.height / 2;
        s_oStage.addChild(p);
        this._initListener()
    };
    this.unload = function() {
        p.off("mousedown", this.buttonDown);
        p.off("pressup", this.buttonRelease);
        s_oStage.removeChild(p)
    };
    this.disable = function(a) {
        c = a
    };
    this.setVisible = function(a) {
        p.visible = a
    };
    this.setOn = function() {
        p.gotoAndStop("on")
    };
    this.setOff = function() {
        p.gotoAndStop("off")
    };
    this._initListener = function() {
        p.on("mousedown", this.buttonDown);
        p.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        n[a] = b;
        h[a] = c
    };
    this.addEventListenerWithParams = function(a, b, c, d) {
        n[a] = b;
        h[a] = c;
        q = d
    };
    this.buttonRelease = function() {
        n[ON_MOUSE_UP] && !1 === c && (playSound("press_but", 1, !1), n[ON_MOUSE_UP].call(h[ON_MOUSE_UP],
            q))
    };
    this.buttonDown = function() {
        n[ON_MOUSE_DOWN] && !1 === c && n[ON_MOUSE_DOWN].call(h[ON_MOUSE_DOWN], q)
    };
    this.setPosition = function(a, b) {
        p.x = a;
        p.y = b
    };
    this.setX = function(a) {
        p.x = a
    };
    this.setY = function(a) {
        p.y = a
    };
    this.getButtonImage = function() {
        return p
    };
    this.getX = function() {
        return p.x
    };
    this.getY = function() {
        return p.y
    };
    this._init(a, b, d)
}

function CMenu() {
    var a, b, d, c, n, h, q = null,
        p = null,
        l, f, r, x, g, m;
    this._init = function() {
        l = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        s_oStage.addChild(l);
        var t = s_oSpriteLibrary.getSprite("but_play_bg");
        f = new CTextButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 60, t, TEXT_PLAY, FONT_GAME, "#ffffff", 42, s_oStage);
        f.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) t = s_oSpriteLibrary.getSprite("audio_icon"), n = CANVAS_WIDTH - t.width / 4 - 10, h = t.height / 2 + 10, r = new CToggle(n,
            h, t, s_bAudioActive, s_oStage), r.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this), null === s_oSoundTrack ? s_oSoundTrack = playSound("soundtrack", SOUNDTRACK_VOLUME, !0) : setVolume("soundtrack", 1);
        SHOW_CREDITS ? (t = s_oSpriteLibrary.getSprite("but_credits"), a = t.height / 2 + 10, b = t.height / 2 + 10, x = new CGfxButton(a, b, t, s_oStage), x.addEventListener(ON_MOUSE_UP, this._onButCreditsRelease, this), d = a + t.width + 10, c = b) : (d = t.height / 2 + 10, c = t.height / 2 + 10);
        t = window.document;
        var k = t.documentElement;
        q = k.requestFullscreen || k.mozRequestFullScreen ||
            k.webkitRequestFullScreen || k.msRequestFullscreen;
        p = t.exitFullscreen || t.mozCancelFullScreen || t.webkitExitFullscreen || t.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (q = !1);
        q && screenfull.enabled && (t = s_oSpriteLibrary.getSprite("but_fullscreen"), g = new CToggle(d, c, t, s_bFullscreen, s_oStage), g.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        m = new createjs.Shape;
        m.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(m);
        createjs.Tween.get(m).to({
            alpha: 0
        }, 600).call(function() {
            m.visible = !1
        });
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.refreshButtonPos = function(f, p) {
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || r.setPosition(n - f, p + h);
        SHOW_CREDITS && x.setPosition(a + f, b + p);
        q && screenfull.enabled && g.setPosition(d + f, c + p)
    };
    this.unload = function() {
        f.unload();
        f = null;
        SHOW_CREDITS && x.unload();
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) r.unload(), r = null;
        q && screenfull.enabled && g.unload();
        s_oStage.removeAllChildren();
        s_oMenu = null
    };
    this._onButPlayRelease = function() {
        this.unload();
        s_oMain.gotoGame();
        $(s_oMain).trigger("start_session")
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onButCreditsRelease = function() {
        new CCreditsPanel
    };
    this.resetFullscreenBut = function() {
        q && screenfull.enabled && g.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? p.call(window.document) : q.call(window.document.documentElement);
        sizeHandler()
    };
    s_oMenu = this;
    this._init()
}
var s_oMenu = null;

function CGame(a) {
    var b = !1,
        d, c, n = !0,
        h, q, p, l, f, r, x, g, m, t, k, A = 0,
        z, C, B, H, F, K, G, N, J, S, R, w, T, y, L = null,
        Q;
    this._init = function() {
        h = GAME_STATE_IDLE;
        d = !0;
        C = k = l = q = 0;
        K = [0, 1, 2, 3, 4];
        p = K[0];
        f = NUM_PAYLINES;
        t = TOTAL_MONEY;
        g = MIN_BET;
        m = g * f;
        G = [];
        for (var a = 0; a < NUM_ROWS; a++) {
            G[a] = [];
            for (var e = 0; e < NUM_REELS; e++) G[a][e] = 0
        }
        s_oTweenController = new CTweenController;
        w = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
        s_oStage.addChild(w);
        this._initReels();
        T = createBitmap(s_oSpriteLibrary.getSprite("mask_slot"));
        s_oStage.addChild(T);
        this._initStaticSymbols();
        this._initHitAreaColumn();
        y = new CInterface(g, m, t);
        Q = new CBonusPanel;
        L = new CPayTablePanel;
        t < m && y.disableSpin();
        b = !0
    };
    this.unload = function() {
        stopSound("reels");
        s_oStage.removeChild(w);
        s_oStage.removeChild(T);
        y.unload();
        L.unload();
        for (var a = 0; a < B.length; a++) B[a].unload();
        for (a = 0; a < NUM_ROWS; a++)
            for (var e = 0; e < NUM_REELS; e++) H[a][e].unload();
        Q.unload()
    };
    this._initReels = function() {
        var a = REEL_OFFSET_X,
            e = REEL_OFFSET_Y,
            b = 0;
        B = [];
        for (var c = 0; c < NUM_REELS; c++) B[c] = new CReelColumn(c, a, e,
            b), B[c + NUM_REELS] = new CReelColumn(c + NUM_REELS, a, e + SYMBOL_SIZE * NUM_ROWS, b), a += SYMBOL_SIZE + SPACE_BETWEEN_SYMBOLS, b += REEL_DELAY
    };
    this._initStaticSymbols = function() {
        var a = REEL_OFFSET_X,
            e = REEL_OFFSET_Y;
        H = [];
        for (var b = 0; b < NUM_ROWS; b++) {
            H[b] = [];
            for (var c = 0; c < NUM_REELS; c++) {
                var d = new CStaticSymbolCell(b, c, a, e);
                H[b][c] = d;
                a += SYMBOL_SIZE + SPACE_BETWEEN_SYMBOLS
            }
            a = REEL_OFFSET_X;
            e += SYMBOL_SIZE
        }
    };
    this._initHitAreaColumn = function() {
        R = [];
        S = [];
        b = 376;
        c = 120;
        for (var a = 0; a < NUM_REELS; a++) {
            var e = createBitmap(s_oSpriteLibrary.getSprite("hold_col"));
            e.x = b;
            e.y = c;
            e.visible = !1;
            s_oStage.addChild(e);
            b += 150;
            S.push(e);
            R[a] = !1
        }
        N = [];
        J = [];
        var b = 381,
            c = 108;
        a = s_oSpriteLibrary.getSprite("hit_area_col");
        for (e = 0; e < NUM_REELS; e++) {
            var d = new createjs.Text(TEXT_HOLD, "22px " + FONT_GAME, "#ffffff");
            d.visible = !1;
            d.x = b + a.width / 2;
            d.y = c + a.height - 20;
            d.shadow = new createjs.Shadow("#000", 1, 1, 2);
            d.textAlign = "center";
            s_oStage.addChild(d);
            N[e] = d;
            d = new CGfxButton(b + a.width / 2, c + a.height / 2, a);
            d.setVisible(!1);
            d.addEventListenerWithParams(ON_MOUSE_UP, this._onHitAreaCol, this, {
                index: e
            });
            b += 150;
            J.push(d)
        }
    };
    this.generateFinalSymbols = function() {
        for (var a = 0; a < NUM_ROWS; a++)
            for (var e = 0; e < NUM_REELS; e++) !1 === B[e].isHold() && (G[a][e] = s_aRandSymbols[Math.floor(Math.random() * s_aRandSymbols.length)]);
        a = this._checkForCombos();
        this._checkForBonus();
        return a
    };
    this._checkForCombos = function() {
        F = [];
        for (var a = z = 0; a < f; a++) {
            var e = s_aPaylineCombo[a],
                b = [],
                c = G[e[0].row][e[0].col];
            if (c !== BONUS_SYMBOL) {
                var d = 1,
                    g = 1;
                for (b.push({
                        row: e[0].row,
                        col: e[0].col,
                        value: G[e[0].row][e[0].col]
                    }); c === WILD_SYMBOL && g < NUM_REELS;) d++,
                    c = G[e[g].row][e[g].col], b.push({
                        row: e[g].row,
                        col: e[g].col,
                        value: G[e[g].row][e[g].col]
                    }), g++;
                for (; g < e.length; g++)
                    if (G[e[g].row][e[g].col] === c || G[e[g].row][e[g].col] === WILD_SYMBOL) {
                        if (G[e[g].row][e[g].col] === BONUS_SYMBOL) break;
                        d++;
                        b.push({
                            row: e[g].row,
                            col: e[g].col,
                            value: G[e[g].row][e[g].col]
                        })
                    } else break;
                c !== BONUS_SYMBOL && 0 < s_aSymbolWin[c - 1][d - 1] && (z += s_aSymbolWin[c - 1][d - 1], F.push({
                    line: a + 1,
                    amount: s_aSymbolWin[c - 1][d - 1],
                    num_win: d,
                    value: c,
                    list: b
                }))
            }
        }
        return z > m ? !0 : !1
    };
    this._checkForBonus = function() {
        c = !1;
        A = 0;
        for (var a = [], e = 0; e < NUM_ROWS; e++)
            for (var b = 0; b < NUM_REELS; b++) G[e][b] === BONUS_SYMBOL && (a.push({
                row: e,
                col: b,
                value: G[e][b]
            }), A++);
        A >= NUM_SYMBOLS_FOR_BONUS && (F.push({
            line: -1,
            amount: 0,
            num_win: A,
            value: BONUS_SYMBOL,
            list: a
        }), 5 < A && (A = 5), c = !0)
    };
    this._generateRandSymbols = function() {
        for (var a = [], b = 0; b < NUM_ROWS; b++) a[b] = s_aRandSymbols[Math.floor(Math.random() * s_aRandSymbols.length)];
        return a
    };
    this.reelArrived = function(a, b) {
        if (q > MIN_REEL_LOOPS)
            if (p === b) {
                if (!1 === B[a].isReadyToStop()) {
                    var e = a;
                    a < NUM_REELS ? (e +=
                        NUM_REELS, B[e].setReadyToStop(), B[a].restart([G[0][a], G[1][a], G[2][a]], !0)) : (e -= NUM_REELS, B[e].setReadyToStop(), B[a].restart([G[0][e], G[1][e], G[2][e]], !0))
                }
            } else B[a].restart(this._generateRandSymbols(), !1);
        else B[a].restart(this._generateRandSymbols(), !1), 0 === a && q++
    };
    this.increaseReelLoops = function() {
        q += 2
    };
    this.stopNextReel = function() {
        l++;
        0 === l % 2 && (playSound("reel_stop", .3, !1), p = K[l / 2], l === 2 * NUM_REELS && this._endReelAnimation())
    };
    this._endReelAnimation = function() {
        stopSound("reels");
        l = q = 0;
        p = K[0];
        for (var a =
                0; a < NUM_REELS; a++) R[a] = !1, S[a].visible = !1, B[a].setHold(!1), B[a + NUM_REELS].setHold(!1);
        k = 0;
        if (0 < F.length) {
            for (var b = 0; b < F.length; b++) {
                L.highlightCombo(F[b].value, F[b].num_win); - 1 !== F[b].line && y.showLine(F[b].line);
                var f = F[b].list;
                for (a = 0; a < f.length; a++) H[f[a].row][f[a].col].show(f[a].value)
            }
            z *= g;
            t += z;
            SLOT_CASH -= z;
            0 < z && (y.refreshMoney(t), y.refreshWinText(z));
            r = 0;
            h = GAME_STATE_SHOW_ALL_WIN;
            playSound("win", 1, !1);
            d = !0;
            !1 === c && (y.disableBetBut(!1), y.enableGuiButtons())
        } else d ? (this.enableColumnHitArea(),
            d = !1, y.enableSpin(), y.disableMaxBet()) : (y.disableBetBut(!1), y.enableGuiButtons(), d = !0), h = GAME_STATE_IDLE;
        t < m && y.disableSpin();
        C++;
        C === M && (C = 0, $(s_oMain).trigger("show_interlevel_ad"));
        $(s_oMain).trigger("save_score", t)
    };
    this.hidePayTable = function() {
        L.hide()
    };
    this._showWin = function() {
        if (0 < x) {
            stopSound("win");
            if (-1 !== F[x - 1].line) {
                var a = F[x - 1].line;
                y.hideLine(a)
            }
            a = F[x - 1].list;
            for (var b = 0; b < a.length; b++) H[a[b].row][a[b].col].stopAnim()
        }
        x === F.length && (x = 0); - 1 !== F[x].line && (a = F[x].line, y.showLine(a));
        a =
            F[x].list;
        for (b = 0; b < a.length; b++) H[a[b].row][a[b].col].show(a[b].value);
        x++
    };
    this._hideAllWins = function() {
        for (var a = 0; a < F.length; a++)
            for (var b = F[a].list, d = 0; d < b.length; d++) H[b[d].row][b[d].col].stopAnim();
        y.hideAllLines();
        x = r = 0;
        r = TIME_SHOW_WIN;
        h = GAME_STATE_SHOW_WIN;
        c && Q.show(A, g)
    };
    this.enableColumnHitArea = function() {
        for (var a = 0; a < NUM_REELS; a++) N[a].visible = !0, J[a].setVisible(!0)
    };
    this.disableColumnHitArea = function() {
        for (var a = 0; a < NUM_REELS; a++) N[a].visible = !1, J[a].setVisible(!1)
    };
    this.activateLines =
        function(a) {
            f = a;
            this.removeWinShowing();
            m = a = g * f;
            y.refreshTotalBet(m);
            y.refreshNumLines(f);
            a > t ? y.disableSpin() : y.enableSpin()
        };
    this.addLine = function() {
        f === NUM_PAYLINES ? f = 1 : f++;
        var a = g * f;
        m = a;
        m = Math.floor(100 * m) / 100;
        y.refreshTotalBet(m);
        y.refreshNumLines(f);
        a > t ? y.disableSpin() : y.enableSpin()
    };
    this.changeCoinBet = function() {
        var a = Math.floor(100 * (g + .05)) / 100;
        a > MAX_BET ? (g = MIN_BET, m = g * f, m = Math.floor(100 * m) / 100, y.refreshBet(g), y.refreshTotalBet(m), a = m) : (a *= f, g += .05, g = Math.floor(100 * g) / 100, m = a, m = Math.floor(100 *
            m) / 100, y.refreshBet(g), y.refreshTotalBet(m));
        a > t ? y.disableSpin() : y.enableSpin()
    };
    this.onMaxBet = function() {
        var a = MAX_BET;
        f = NUM_PAYLINES;
        a *= f;
        g = MAX_BET;
        m = a;
        y.refreshBet(g);
        y.refreshTotalBet(m);
        y.refreshNumLines(f);
        a > t ? y.disableSpin() : (y.enableSpin(), this.onSpin())
    };
    this._onHitAreaCol = function(a) {
        a = a.index;
        !0 === R[a] ? (R[a] = !1, S[a].visible = !1, N[a].visible = !0, k--, B[a].setHold(!1), B[a + NUM_REELS].setHold(!1)) : k < MAX_NUM_HOLD && (R[a] = !0, k++, S[a].visible = !0, N[a].visible = !1, B[a].setHold(!0), B[a + NUM_REELS].setHold(!0),
            playSound("press_hold", 1, !1))
    };
    this.removeWinShowing = function() {
        L.resetHighlightCombo();
        y.resetWin();
        for (var a = 0; a < NUM_ROWS; a++)
            for (var b = 0; b < NUM_REELS; b++) H[a][b].hide();
        for (a = 0; a < B.length; a++) B[a].activate();
        h = GAME_STATE_IDLE
    };
    this.endBonus = function(a) {
        a *= g;
        t += a;
        y.refreshMoney(t);
        SLOT_CASH -= a;
        y.disableBetBut(!1);
        y.enableGuiButtons();
        $(s_oMain).trigger("bonus_end", t);
        $(s_oMain).trigger("save_score", t)
    };
    this.onSpin = function() {
        stopSound("win");
        playSound("reels", .3, !1);
        this.disableColumnHitArea();
        y.disableBetBut(!0);
        this.removeWinShowing();
        MIN_WIN = s_aSymbolWin[0][s_aSymbolWin[0].length - 1];
        for (var a = 0; a < s_aSymbolWin.length; a++)
            for (var b = s_aSymbolWin[a], f = 0; f < b.length; f++) 0 !== b[f] && b[f] < MIN_WIN && (MIN_WIN = b[f]);
        MIN_WIN *= g;
        d && (t -= m, y.refreshMoney(t), SLOT_CASH += m, $(s_oMain).trigger("bet_placed", {
            bet: g,
            tot_bet: m
        }));
        if (!n && B[0].visible && B[1].visible && this._checkForCombos()) this._assignWin();
        else if (SLOT_CASH < MIN_WIN) {
            do a = this.generateFinalSymbols(); while (!0 === a || c)
        } else if (Math.floor(100 * Math.random()) > WIN_OCCURRENCE) {
            do a =
                this.generateFinalSymbols(); while (!0 === a || c)
        } else this._assignWin();
        y.hideAllLines();
        y.disableGuiButtons();
        n = !1;
        h = GAME_STATE_SPINNING
    };
    this._assignWin = function() {
        if (SLOT_CASH < BONUS_PRIZE[0][0] * g) {
            var a = 0;
            do {
                var b = this.generateFinalSymbols();
                a++
            } while ((!1 === b || z * g > SLOT_CASH || c) && 1E4 >= a)
        } else if (Math.floor(100 * Math.random()) >= BONUS_OCCURRENCE) {
            a = 0;
            do b = this.generateFinalSymbols(), a++; while ((!1 === b || z * g > SLOT_CASH || c) && 1E4 >= a)
        } else {
            a = 0;
            do {
                b = this.generateFinalSymbols();
                var d = 0;
                c && (d = A - 3);
                a++
            } while ((!1 ===
                    b || z * g + BONUS_PRIZE[d][0] * g > SLOT_CASH || !1 === c) && 1E4 >= a)
        }
        if (1E4 < a) {
            do b = this.generateFinalSymbols(); while (!0 === b || c)
        }
    };
    this.onInfoClicked = function() {
        h !== GAME_STATE_SPINNING && (L.isVisible() ? L.hide() : L.show())
    };
    this.onExit = function() {
        this.unload();
        s_oMain.gotoMenu();
        $(s_oMain).trigger("end_session");
        $(s_oMain).trigger("share_event", {
            img: "200x200.jpg",
            title: TEXT_CONGRATULATIONS,
            msg: TEXT_MSG_SHARE1 + t + TEXT_MSG_SHARE2,
            msg_share: TEXT_MSG_SHARING1 + t + TEXT_MSG_SHARING2
        })
    };
    this.getState = function() {
        return h
    };
    this.update =
        function() {
            if (!1 !== b) switch (h) {
                case GAME_STATE_SPINNING:
                    for (var a = 0; a < B.length; a++) B[a].update(p);
                    break;
                case GAME_STATE_SHOW_ALL_WIN:
                    r += s_iTimeElaps;
                    r > TIME_SHOW_ALL_WINS && this._hideAllWins();
                    break;
                case GAME_STATE_SHOW_WIN:
                    r += s_iTimeElaps, r > TIME_SHOW_WIN && (r = 0, this._showWin())
            }
        };
    s_oGame = this;
    WIN_OCCURRENCE = a.win_occurrence;
    SLOT_CASH = a.slot_cash;
    BONUS_OCCURRENCE = a.bonus_occurrence;
    MIN_REEL_LOOPS = a.min_reel_loop;
    REEL_DELAY = a.reel_delay;
    TIME_SHOW_WIN = a.time_show_win;
    TIME_SHOW_ALL_WINS = a.time_show_all_wins;
    TOTAL_MONEY = a.money;
    MIN_BET = a.min_bet;
    MAX_BET = a.max_bet;
    MAX_NUM_HOLD = a.max_hold;
    PERC_WIN_BONUS_PRIZE_1 = a.perc_win_bonus_prize_1;
    PERC_WIN_BONUS_PRIZE_2 = a.perc_win_bonus_prize_2;
    PERC_WIN_BONUS_PRIZE_3 = a.perc_win_bonus_prize_3;
    var M = a.num_spin_ads_showing;
    new CSlotSettings;
    this._init()
}
var s_oGame, s_oTweenController;

function CReelColumn(a, b, d, c) {
    var n, h, q, p, l, f, r, x, g, m, t, k, A, z, C;
    this._init = function(a, b, c, d) {
        p = q = h = n = !1;
        x = 0;
        l = a;
        r = d;
        f = l < NUM_REELS ? l : l - NUM_REELS;
        m = 0;
        t = MAX_FRAMES_REEL_EASE;
        g = REEL_STATE_START;
        k = c;
        A = k + SYMBOL_SIZE * NUM_ROWS;
        this.initContainer(b, c)
    };
    this.initContainer = function(a, b) {
        C = new createjs.Container;
        C.x = a;
        C.y = b;
        var c = 0;
        z = [];
        for (var d = 0; d < NUM_ROWS; d++) {
            var f = createSprite(s_aSymbolData[s_aRandSymbols[Math.floor(Math.random() * s_aRandSymbols.length)]], "static", 0, 0, SYMBOL_SIZE, SYMBOL_SIZE);
            f.stop();
            f.x =
                0;
            f.y = c;
            C.addChild(f);
            z[d] = f;
            c += SYMBOL_SIZE
        }
        s_oStage.addChild(C)
    };
    this.unload = function() {
        s_oStage.removeChild(C)
    };
    this.activate = function() {
        k = C.y;
        A = k + SYMBOL_SIZE * NUM_ROWS;
        n = !0
    };
    this._setSymbol = function(a) {
        C.removeAllChildren();
        for (var b = 0, c = 0; c < a.length; c++) {
            var d = new createSprite(s_aSymbolData[a[c]], "static", 0, 0, SYMBOL_SIZE, SYMBOL_SIZE);
            d.stop();
            d.x = 0;
            d.y = b;
            C.addChild(d);
            z[c] = d;
            b += SYMBOL_SIZE
        }
    };
    this.setHold = function(a) {
        p = a
    };
    this.restart = function(a, b) {
        C.y = k = REEL_START_Y;
        A = k + SYMBOL_SIZE * NUM_ROWS;
        this._setSymbol(a);
        if (h = b) {
            m = 0;
            t = MAX_FRAMES_REEL_EASE;
            g = REEL_STATE_STOP;
            for (var c = 0; c < NUM_ROWS; c++) z[c].gotoAndStop("static");
            q = !0
        } else
            for (c = 0; c < NUM_ROWS; c++) z[c].gotoAndStop("moving")
    };
    this.setReadyToStop = function() {
        m = 0;
        t = MAX_FRAMES_REEL_EASE;
        g = REEL_STATE_STOP
    };
    this.isReadyToStop = function() {
        return h
    };
    this.isHold = function() {
        return p
    };
    this._updateStart = function() {
        0 === m && l < NUM_REELS && playSound("start_reel", .3, !1);
        m++;
        m > t && (m = 0, t /= 2, g++, k = C.y, A = k + SYMBOL_SIZE * NUM_ROWS);
        var a = s_oTweenController.easeInBack(m, 0, 1, t);
        a = s_oTweenController.tweenValue(k,
            A, a);
        C.y = a
    };
    this._updateMoving = function() {
        m++;
        m > t && (m = 0, k = C.y, A = k + SYMBOL_SIZE * NUM_ROWS);
        var a = s_oTweenController.easeLinear(m, 0, 1, t);
        a = s_oTweenController.tweenValue(k, A, a);
        C.y = a
    };
    this._updateStopping = function() {
        m++;
        if (m >= t) n = !1, m = 0, t = MAX_FRAMES_REEL_EASE, g = REEL_STATE_START, x = 0, h = !1, q && (q = !1, C.y = REEL_OFFSET_Y), s_oGame.stopNextReel();
        else {
            var a = s_oTweenController.easeOutCubic(m, 0, 1, t);
            a = s_oTweenController.tweenValue(k, A, a);
            C.y = a
        }
    };
    this.update = function(a) {
        if (!1 !== n && (x++, x > r))
            if (p) a === l && (n = !1, s_oGame.stopNextReel(),
                s_oGame.stopNextReel(), 0 === l && s_oGame.increaseReelLoops());
            else switch (!1 === h && C.y > REEL_ARRIVAL_Y && s_oGame.reelArrived(l, f), g) {
                case REEL_STATE_START:
                    this._updateStart();
                    break;
                case REEL_STATE_MOVING:
                    this._updateMoving();
                    break;
                case REEL_STATE_STOP:
                    this._updateStopping()
            }
    };
    this._init(a, b, d, c)
}

function CInterface(a, b, d) {
    var c, n, h, q, p, l, f, r, x, g, m, t, k, A, z, C, B, H, F, K, G = null,
        N = null;
    this._init = function(a, b, d) {
        var w = s_oSpriteLibrary.getSprite("but_exit");
        h = CANVAS_WIDTH - w.width / 2 - 10;
        q = w.height / 2 + 10;
        x = new CGfxButton(h, q, w, !0);
        x.addEventListener(ON_MOUSE_UP, this._onExit, this);
        !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (w = s_oSpriteLibrary.getSprite("audio_icon"), p = x.getX() - w.width / 2, l = w.height / 2 + 10, k = new CToggle(p, l, w, s_bAudioActive, s_oStage), k.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this),
            c = p - w.width / 2, n = l) : (c = x.getX() - w.width, n = w.height / 2 + 10);
        w = window.document;
        var J = w.documentElement;
        G = J.requestFullscreen || J.mozRequestFullScreen || J.webkitRequestFullScreen || J.msRequestFullscreen;
        N = w.exitFullscreen || w.mozCancelFullScreen || w.webkitExitFullscreen || w.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (G = !1);
        G && screenfull.enabled && (w = s_oSpriteLibrary.getSprite("but_fullscreen"), K = new CToggle(c, n, w, s_bFullscreen, s_oStage), K.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        w = s_oSpriteLibrary.getSprite("spin_but");
        g = new CTextButton(1090 + w.width / 2, CANVAS_HEIGHT - w.height / 2, w, "", FONT_GAME, "#f951aa", 22, s_oStage);
        g.addEventListener(ON_MOUSE_UP, this._onSpin, this);
        w = s_oSpriteLibrary.getSprite("info_but");
        m = new CTextButton(328 + w.width / 2, CANVAS_HEIGHT - w.height / 2, w, TEXT_INFO, FONT_GAME, "#ffffff", 24, s_oStage);
        m.addEventListener(ON_MOUSE_UP, this._onInfo, this);
        w = s_oSpriteLibrary.getSprite("but_lines_bg");
        t = new CTextButton(494 + w.width / 2, CANVAS_HEIGHT - w.height / 2, w, TEXT_LINES, FONT_GAME, "#ffffff", 24, s_oStage);
        t.addEventListener(ON_MOUSE_UP,
            this._onAddLine, this);
        w = s_oSpriteLibrary.getSprite("coin_but");
        A = new CTextButton(680 + w.width / 2, CANVAS_HEIGHT - w.height / 2, w, TEXT_COIN, FONT_GAME, "#ffffff", 24, s_oStage);
        A.addEventListener(ON_MOUSE_UP, this._onBet, this);
        w = s_oSpriteLibrary.getSprite("but_maxbet_bg");
        z = new CTextButton(866 + w.width / 2, CANVAS_HEIGHT - w.height / 2, w, TEXT_MAX_BET, FONT_GAME, "#ffffff", 24, s_oStage);
        z.addEventListener(ON_MOUSE_UP, this._onMaxBet, this);
        B = new createjs.Text(TEXT_MONEY + "\n" + d.toFixed(2) + TEXT_CURRENCY, "30px " + FONT_GAME, "#f951aa");
        B.x = 450;
        B.y = 46;
        B.textBaseline = "alphabetic";
        B.lineHeight = 28;
        B.textAlign = "center";
        s_oStage.addChild(B);
        F = new createjs.Text(NUM_PAYLINES, "26px " + FONT_GAME, "#ffffff");
        F.x = 584;
        F.y = CANVAS_HEIGHT - 58;
        F.shadow = new createjs.Shadow("#000", 2, 2, 2);
        F.textAlign = "center";
        F.textBaseline = "alphabetic";
        s_oStage.addChild(F);
        C = new createjs.Text(a.toFixed(2), "26px " + FONT_GAME, "#ffffff");
        C.x = 776;
        C.y = CANVAS_HEIGHT - 58;
        C.shadow = new createjs.Shadow("#000", 2, 2, 2);
        C.textAlign = "center";
        C.textBaseline = "alphabetic";
        s_oStage.addChild(C);
        H = new createjs.Text(TEXT_BET + ": " + b.toFixed(2), "26px " + FONT_GAME, "#ffffff");
        H.x = 980;
        H.y = CANVAS_HEIGHT - 58;
        H.shadow = new createjs.Shadow("#000", 2, 2, 2);
        H.textAlign = "center";
        H.textBaseline = "alphabetic";
        s_oStage.addChild(H);
        w = s_oSpriteLibrary.getSprite("bet_but");
        f = [];
        a = new CBetBut(334 + w.width / 2, 282 + w.height / 2, w, !0);
        a.addEventListenerWithParams(ON_MOUSE_UP, this._onBetLineClicked, this, 1);
        f[0] = a;
        a = new CBetBut(334 + w.width / 2, 180 + w.height / 2, w, !0);
        a.addEventListenerWithParams(ON_MOUSE_UP, this._onBetLineClicked,
            this, 2);
        f[1] = a;
        a = new CBetBut(334 + w.width / 2, 432 + w.height / 2, w, !0);
        a.addEventListenerWithParams(ON_MOUSE_UP, this._onBetLineClicked, this, 3);
        f[2] = a;
        a = new CBetBut(334 + w.width / 2, 114 + w.height / 2, w, !0);
        a.addEventListenerWithParams(ON_MOUSE_UP, this._onBetLineClicked, this, 4);
        f[3] = a;
        a = new CBetBut(334 + w.width / 2, 502 + w.height / 2, w, !0);
        a.addEventListenerWithParams(ON_MOUSE_UP, this._onBetLineClicked, this, 5);
        f[4] = a;
        r = [];
        for (a = 0; a < NUM_PAYLINES; a++) b = new createjs.Bitmap(s_oSpriteLibrary.getSprite("payline_" + (a + 1))), b.x =
            238, b.y = -40, b.visible = !1, s_oStage.addChild(b), r[a] = b;
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.unload = function() {
        x.unload();
        x = null;
        g.unload();
        g = null;
        m.unload();
        m = null;
        t.unload();
        t = null;
        A.unload();
        A = null;
        z.unload();
        z = null;
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) k.unload(), k = null;
        G && screenfull.enabled && K.unload();
        for (var a = 0; a < NUM_PAYLINES; a++) f[a].unload();
        s_oStage.removeAllChildren();
        s_oInterface = null
    };
    this.refreshButtonPos = function(a, b) {
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || k.setPosition(p -
            a, b + l);
        G && screenfull.enabled && K.setPosition(c - a, n + b);
        x.setPosition(h - a, b + q)
    };
    this.refreshMoney = function(a) {
        B.text = TEXT_MONEY + "\n" + a.toFixed(2) + TEXT_CURRENCY
    };
    this.refreshBet = function(a) {
        C.text = a.toFixed(2)
    };
    this.refreshTotalBet = function(a) {
        H.text = TEXT_BET + ": " + a.toFixed(2)
    };
    this.refreshNumLines = function(a) {
        F.text = a;
        for (var b = 0; b < NUM_PAYLINES; b++) b < a ? (f[b].setOn(), r[b].visible = !0) : f[b].setOff();
        setTimeout(function() {
            for (var a = 0; a < NUM_PAYLINES; a++) r[a].visible = !1
        }, 1E3)
    };
    this.resetWin = function() {
        g.changeText("")
    };
    this.refreshWinText = function(a) {
        g.changeText(TEXT_WIN + "\n" + a.toFixed(2))
    };
    this.showLine = function(a) {
        r[a - 1].visible = !0
    };
    this.hideLine = function(a) {
        r[a - 1].visible = !1
    };
    this.hideAllLines = function() {
        for (var a = 0; a < NUM_PAYLINES; a++) r[a].visible = !1
    };
    this.disableBetBut = function(a) {
        for (var b = 0; b < NUM_PAYLINES; b++) f[b].disable(a)
    };
    this.enableGuiButtons = function() {
        g.enable();
        z.enable();
        A.enable();
        t.enable();
        m.enable()
    };
    this.enableSpin = function() {
        g.enable();
        z.enable()
    };
    this.disableSpin = function() {
        g.disable();
        z.disable()
    };
    this.enableMaxBet = function() {
        z.enable()
    };
    this.disableMaxBet = function() {
        z.disable()
    };
    this.disableGuiButtons = function() {
        g.disable();
        z.disable();
        A.disable();
        t.disable();
        m.disable()
    };
    this._onBetLineClicked = function(a) {
        this.refreshNumLines(a);
        s_oGame.activateLines(a)
    };
    this._onExit = function() {
        s_oGame.onExit()
    };
    this._onSpin = function() {
        s_oGame.onSpin()
    };
    this._onAddLine = function() {
        s_oGame.addLine()
    };
    this._onInfo = function() {
        s_oGame.onInfoClicked()
    };
    this._onBet = function() {
        s_oGame.changeCoinBet()
    };
    this._onMaxBet =
        function() {
            s_oGame.onMaxBet()
        };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this.resetFullscreenBut = function() {
        G && screenfull.enabled && K.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? N.call(window.document) : G.call(window.document.documentElement);
        sizeHandler()
    };
    s_oInterface = this;
    this._init(a, b, d);
    return this
}
var s_oInterface = null;

function CPayTablePanel() {
    var a, b, d, c, n, h;
    this._init = function() {
        h = new createjs.Container;
        n = createBitmap(s_oSpriteLibrary.getSprite("paytable"));
        h.addChild(n);
        this._createPayouts();
        d = new createjs.Text(TEXT_HELP_WILD, "21px " + FONT_GAME, "#ffff00");
        d.textAlign = "center";
        d.lineWidth = 220;
        d.lineHeight = 22;
        d.x = 635;
        d.y = 316;
        h.addChild(d);
        c = new createjs.Text(TEXT_HELP_BONUS, "21px " + FONT_GAME, "#ffff00");
        c.textAlign = "center";
        c.lineHeight = 22;
        c.lineWidth = 216;
        c.x = 1012;
        c.y = 324;
        h.addChild(c);
        h.visible = !1;
        s_oStage.addChild(h);
        var a = this;
        h.on("pressup", function() {
            a._onExit()
        })
    };
    this.unload = function() {
        var c = this;
        h.off("pressup", function() {
            c._onExit()
        });
        s_oStage.removeChild(h);
        for (var d = 0; d < a.length; d++) h.removeChild(a[d]);
        for (d = 0; d < b.length; d++) h.removeChild(b[d])
    };
    this._createPayouts = function() {
        a = [];
        b = [];
        for (var c = [{
                x: 430,
                y: 130
            }, {
                x: 650,
                y: 130
            }, {
                x: 880,
                y: 130
            }, {
                x: 1100,
                y: 130
            }, {
                x: 430,
                y: 232
            }, {
                x: 650,
                y: 232
            }, {
                x: 880,
                y: 232
            }, {
                x: 1100,
                y: 232
            }], d = 0, l = 0; l < s_aSymbolWin.length; l++) {
            for (var f = [], r = 0; r < s_aSymbolWin[l].length; r++) f[r] = s_aSymbolWin[l][r];
            do r = f.indexOf(0), -1 !== r && f.splice(r, 1); while (-1 !== r);
            r = f.length;
            if (0 !== r) {
                var n = 30;
                4 === r && (n = 22);
                var g = c[d].y;
                a[l] = [];
                b[l] = [];
                for (var m = 0; m < r; m++) {
                    var t = new createjs.Text("X" + (5 - m), "25px " + FONT_GAME, "#ffffff");
                    t.textAlign = "center";
                    t.x = c[d].x;
                    t.y = g;
                    t.textBaseline = "alphabetic";
                    h.addChild(t);
                    a[l][m] = t;
                    var k = new createjs.Text(f[r - m - 1], "25px " + FONT_GAME, "#ffff00");
                    k.textAlign = "center";
                    k.x = t.x + 50;
                    k.y = t.y;
                    k.textBaseline = "alphabetic";
                    h.addChild(k);
                    b[l][m] = k;
                    g += n
                }
                d++
            }
        }
    };
    this.show = function() {
        h.visible = !0
    };
    this.hide = function() {
        h.visible = !1
    };
    this.resetHighlightCombo = function() {
        for (var c = 0; c < a.length; c++)
            for (var d = 0; d < a[c].length; d++) a[c][d].color = "#ffffff", b[c][d].color = "#ffff00", createjs.Tween.removeTweens(b[c][d]), b[c][d].alpha = 1
    };
    this.highlightCombo = function(a, c) {
        a !== BONUS_SYMBOL && (b[a - 1][NUM_REELS - c].color = "#ff0000", this.tweenAlpha(b[a - 1][NUM_REELS - c], 0))
    };
    this.tweenAlpha = function(a, b) {
        var c = this;
        createjs.Tween.get(a).to({
            alpha: b
        }, 200).call(function() {
            1 === b ? c.tweenAlpha(a, 0) : c.tweenAlpha(a, 1)
        })
    };
    this._onExit = function() {
        s_oGame.hidePayTable()
    };
    this.isVisible = function() {
        return h.visible
    };
    this._init()
}

function CStaticSymbolCell(a, b, d, c) {
    var n = -1,
        h, q, p, l;
    this._init = function(a, b, c, d) {
        l = new createjs.Container;
        l.visible = !1;
        q = [];
        for (a = 0; a < NUM_SYMBOLS; a++) b = createSprite(s_aSymbolAnims[a], "static", 0, 0, SYMBOL_SIZE, SYMBOL_SIZE), b.stop(), b.x = c, b.y = d, b.on("animationend", this._onAnimEnded, null, !1, {
            index: a
        }), l.addChild(b), q[a] = b, q[a].visible = !1;
        a = {
            framerate: 60,
            images: [s_oSpriteLibrary.getSprite("win_frame_anim")],
            frames: {
                width: SYMBOL_SIZE,
                height: SYMBOL_SIZE,
                regX: 0,
                regY: 0
            },
            animations: {
                "static": [0, 1],
                anim: [1,
                    19
                ]
            }
        };
        a = new createjs.SpriteSheet(a);
        p = new createSprite(a, "static", 0, 0, SYMBOL_SIZE, SYMBOL_SIZE);
        p.stop();
        p.x = c;
        p.y = d;
        l.addChild(p);
        s_oStage.addChild(l)
    };
    this.unload = function() {
        s_oStage.removeChild(l)
    };
    this.hide = function() {
        -1 < n && (p.gotoAndStop("static"), p.visible = !1, q[n].gotoAndPlay("static"), l.visible = !1)
    };
    this.show = function(a) {
        p.gotoAndPlay("anim");
        p.visible = !0;
        for (var b = 0; b < NUM_SYMBOLS; b++) q[b].visible = b + 1 === a ? !0 : !1;
        q[a - 1].gotoAndPlay("anim");
        n = a - 1;
        h = q[a - 1].spriteSheet.getNumFrames();
        l.visible = !0
    };
    this._onAnimEnded = function(a, b) {
        q[b.index].currentFrame !== h && (q[b.index].stop(), setTimeout(function() {
            q[b.index].gotoAndPlay(1)
        }, 100))
    };
    this.stopAnim = function() {
        q[n].gotoAndStop("static");
        q[n].visible = !1;
        p.gotoAndStop("static");
        p.visible = !1
    };
    this._init(a, b, d, c)
}

function CTweenController() {
    this.tweenValue = function(a, b, d) {
        return a + d * (b - a)
    };
    this.easeLinear = function(a, b, d, c) {
        return d * a / c + b
    };
    this.easeInCubic = function(a, b, d, c) {
        c = (a /= c) * a * a;
        return b + d * c
    };
    this.easeBackInQuart = function(a, b, d, c) {
        c = (a /= c) * a;
        return b + d * (2 * c * c + 2 * c * a + -3 * c)
    };
    this.easeInBack = function(a, b, d, c) {
        return d * (a /= c) * a * (2.70158 * a - 1.70158) + b
    };
    this.easeOutCubic = function(a, b, d, c) {
        return d * ((a = a / c - 1) * a * a + 1) + b
    }
}

function CBonusPanel() {
    var a, b, d, c, n, h, q, p, l, f;
    this._init = function() {
        f = new createjs.Container;
        s_oStage.addChild(f);
        var a = createBitmap(s_oSpriteLibrary.getSprite("bonus_bg"));
        f.alpha = 0;
        f.visible = !1;
        f.addChild(a);
        a = {
            framerate: 3,
            images: [s_oSpriteLibrary.getSprite("bonus_ufo")],
            frames: {
                width: UFO_WIDTH,
                height: UFO_HEIGHT,
                regX: UFO_WIDTH / 2,
                regY: UFO_HEIGHT / 2
            },
            animations: {
                idle: [0, 4, "idle"],
                lay_alien: [5, 9, "stop_lay"],
                idle_rand_0: [1, 4, "idle"],
                idle_rand_1: [2, 4, "idle"],
                idle_rand_2: [3, 4, "idle"],
                right: [3],
                left: [4],
                stop_lay: [9]
            }
        };
        a = new createjs.SpriteSheet(a);
        c = [];
        for (var b = 418, d = 0; 5 > d; d++) {
            var m = createSprite(a, "idle", UFO_WIDTH / 2, UFO_HEIGHT / 2, UFO_WIDTH, UFO_HEIGHT);
            m.on("click", this._onUfoReleased, this, !1, d);
            m.x = b;
            m.y = 376;
            m.stop();
            m.visible = !1;
            f.addChild(m);
            b += 164;
            c[d] = m
        }
        b = s_oSpriteLibrary.getSprite("bonus_prize");
        a = {
            framerate: 10,
            images: [b],
            frames: {
                width: Math.floor(b.width / NUM_ALIEN),
                height: b.height,
                regX: Math.floor(b.width / NUM_ALIEN) / 2,
                regY: b.height / 2
            },
            animations: {
                alien_0: [0],
                alien_1: [1],
                alien_2: [2]
            }
        };
        a = new createjs.SpriteSheet(a);
        p = createSprite(a, "alien_0", Math.floor(b.width / NUM_ALIEN) / 2, b.height / 2, Math.floor(b.width / NUM_ALIEN), b.height);
        f.addChild(p);
        d = new createjs.Shape;
        d.graphics.beginFill("rgba(255,0,0,0.01)").drawRect(348, 260, 800, 240);
        f.addChild(d);
        p.mask = d;
        h = [];
        q = [];
        h[0] = createSprite(a, "alien_0", Math.floor(b.width / NUM_ALIEN) / 2, b.height / 2, Math.floor(b.width / NUM_ALIEN), b.height);
        h[0].x = 348;
        h[0].y = CANVAS_HEIGHT - 75;
        f.addChild(h[0]);
        d = new createjs.Text("100", "34px walibi0615bold", "#e7008a");
        d.textAlign = "left";
        d.x = h[0].x +
            b.width / NUM_ALIEN / 2 + 6;
        d.y = h[0].y + 12;
        d.textBaseline = "alphabetic";
        f.addChild(d);
        q.push(d);
        h[1] = createSprite(a, "alien_1", Math.floor(b.width / NUM_ALIEN) / 2, b.height / 2, Math.floor(b.width / NUM_ALIEN), b.height);
        h[1].x = 638;
        h[1].y = CANVAS_HEIGHT - 75;
        f.addChild(h[1]);
        d = new createjs.Text("200", "34px walibi0615bold", "#e7008a");
        d.textAlign = "left";
        d.x = h[1].x + +(b.width / NUM_ALIEN) / 2 + 6;
        d.y = h[1].y + 12;
        d.textBaseline = "alphabetic";
        f.addChild(d);
        q.push(d);
        h[2] = createSprite(a, "alien_2", Math.floor(b.width / NUM_ALIEN) / 2, b.height /
            2, Math.floor(b.width / NUM_ALIEN), b.height);
        h[2].x = 938;
        h[2].y = CANVAS_HEIGHT - 75;
        f.addChild(h[2]);
        d = new createjs.Text("300", "34px walibi0615bold", "#e7008a");
        d.textAlign = "left";
        d.x = h[2].x + +(b.width / NUM_ALIEN) / 2 + 6;
        d.y = h[2].y + 12;
        d.textBaseline = "alphabetic";
        f.addChild(d);
        q.push(d);
        l = new createjs.Text("+ 300$", "80px " + FONT_GAME, "#ffff00");
        l.alpha = 0;
        l.textAlign = "center";
        l.shadow = new createjs.Shadow("#000", 2, 2, 2);
        l.x = CANVAS_WIDTH / 2;
        l.y = 150;
        l.textBaseline = "alphabetic";
        f.addChild(l)
    };
    this.unload = function() {
        for (var a =
                0; 5 > a; a++) c[a].off("click", this._onUfoReleased)
    };
    this.show = function(d, h) {
        b = h;
        a = !1;
        l.alpha = 0;
        switch (d) {
            case 3:
                n = BONUS_PRIZE[0];
                break;
            case 4:
                n = BONUS_PRIZE[1];
                break;
            case 5:
                n = BONUS_PRIZE[2];
                break;
            default:
                n = BONUS_PRIZE[0]
        }
        q[0].text = "X" + n[0];
        q[1].text = "X" + n[1];
        q[2].text = "X" + n[2];
        p.x = 118;
        p.y = 308;
        p.rotation = 0;
        p.gotoAndStop("alien_0");
        for (var g = 0; g < d; g++) {
            var m = Math.floor(3 * Math.random());
            c[g].framerate = 3;
            c[g].visible = !0;
            c[g].gotoAndPlay("idle_rand_" + m)
        }
        f.visible = !0;
        createjs.Tween.get(f).to({
            alpha: 1
        }, 1E3);
        setVolume("soundtrack", 0);
        playSound("soundtrack_bonus", 1, !0);
        $(s_oMain).trigger("bonus_start")
    };
    this._onUfoReleased = function(c, d) {
        if (!a) {
            a = !0;
            do var f = Math.floor(Math.random() * s_aAlienOccurence.length); while (n[s_aAlienOccurence[f]] * b > SLOT_CASH);
            this.playUfoLayAnim(d, s_aAlienOccurence[f]);
            playSound("choose_ufo", 1, !1)
        }
    };
    this.playUfoLayAnim = function(a, b) {
        d = n[b];
        p.gotoAndStop("alien_" + b);
        for (var f = 0; 5 > f; f++) f < a ? c[f].gotoAndStop("right") : f === a ? (c[a].framerate = 10, c[a].gotoAndPlay("lay_alien")) : c[f].gotoAndStop("left");
        this.layAlien(a)
    };
    this.layAlien = function(a) {
        p.x = c[a].x;
        var b = this;
        createjs.Tween.get(p).to({
            y: 460
        }, 300).call(function() {
            b.endBonus()
        });
        playSound("reveal_alien", 1, !1)
    };
    this.endBonus = function() {
        l.text = "X " + d;
        createjs.Tween.get(l).to({
            alpha: 1
        }, 500);
        setTimeout(function() {
            f.alpha = 0;
            f.visible = !1;
            for (var a = 0; a < c.length; a++) c[a].visible = !1;
            setVolume("soundtrack", SOUNDTRACK_VOLUME);
            stopSound("soundtrack_bonus");
            s_oGame.endBonus(d)
        }, 4E3)
    };
    this._init()
}

function CCreditsPanel() {
    var a, b, d, c, n, h, q, p, l, f;
    this._init = function() {
        f = new createjs.Container;
        f.alpha = 0;
        s_oStage.addChild(f);
        b = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
        f.addChild(b);
        q = new createjs.Shape;
        q.graphics.beginFill("#0f0f0f").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        q.alpha = .01;
        q.on("click", this._onLogoButRelease);
        f.addChild(q);
        var r = s_oSpriteLibrary.getSprite("but_exit");
        a = CANVAS_WIDTH / 2 + 250;
        c = new CGfxButton(a, 220, r, f);
        c.addEventListener(ON_MOUSE_UP, this.unload, this);
        h = new createjs.Text(TEXT_CREDITS_DEVELOPED,
            "34px " + FONT_GAME, "#000");
        h.textAlign = "center";
        h.textBaseline = "alphabetic";
        h.x = CANVAS_WIDTH / 2;
        h.y = 270;
        h.outline = 2;
        f.addChild(h);
        n = new createjs.Text(TEXT_CREDITS_DEVELOPED, "34px " + FONT_GAME, "#fff");
        n.textAlign = "center";
        n.textBaseline = "alphabetic";
        n.x = CANVAS_WIDTH / 2;
        n.y = 270;
        f.addChild(n);
        r = s_oSpriteLibrary.getSprite("logo_ctl");
        d = createBitmap(r);
        d.regX = r.width / 2;
        d.regY = r.height / 2;
        d.x = CANVAS_WIDTH / 2;
        d.y = CANVAS_HEIGHT / 2;
        f.addChild(d);
        l = new createjs.Text("www.codethislab.com", "30px " + FONT_GAME, "#000");
        l.textAlign = "center";
        l.textBaseline = "alphabetic";
        l.x = CANVAS_WIDTH / 2;
        l.y = 385;
        l.outline = 2;
        f.addChild(l);
        p = new createjs.Text("www.codethislab.com", "30px " + FONT_GAME, "#fff");
        p.textAlign = "center";
        p.textBaseline = "alphabetic";
        p.x = CANVAS_WIDTH / 2;
        p.y = 385;
        f.addChild(p);
        createjs.Tween.get(f).to({
            alpha: 1
        }, 600, createjs.Ease.cubicOut);
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.refreshButtonPos = function(a, b) {};
    this.unload = function() {
        q.off("click", this._onLogoButRelease);
        c.unload();
        c = null;
        s_oStage.removeChild(f)
    };
    this._onLogoButRelease = function() {
        window.open("http://www.codethislab.com/index.php?&l=en", "_blank")
    };
    this._init()
}

function extractHostname(a) {
    a = -1 < a.indexOf("://") ? a.split("/")[2] : a.split("/")[0];
    a = a.split(":")[0];
    return a = a.split("?")[0]
}

function extractRootDomain(a) {
    a = extractHostname(a);
    var b = a.split("."),
        d = b.length;
    2 < d && (a = b[d - 2] + "." + b[d - 1]);
    return a
}
var getClosestTop = function() {
        var a = window,
            b = !1;
        try {
            for (; a.parent.document !== a.document;)
                if (a.parent.document) a = a.parent;
                else {
                    b = !0;
                    break
                }
        } catch (d) {
            b = !0
        }
        return {
            topFrame: a,
            err: b
        }
    },
    getBestPageUrl = function(a) {
        var b = a.topFrame,
            d = "";
        if (a.err) try {
            try {
                d = window.top.location.href
            } catch (n) {
                var c = window.location.ancestorOrigins;
                d = c[c.length - 1]
            }
        } catch (n) {
            d = b.document.referrer
        } else d = b.location.href;
        return d
    },
    TOPFRAMEOBJ = getClosestTop(),
    PAGE_URL = getBestPageUrl(TOPFRAMEOBJ);

function seekAndDestroy() {
    for (var a = extractRootDomain(PAGE_URL), b = [String.fromCharCode(99, 111, 100, 101, 116, 104, 105, 115, 108, 97, 98, 46, 99, 111, 109), String.fromCharCode(101, 110, 118, 97, 116, 111, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116)], d = 0; d < b.length; d++)
        if (b[d] === a) return !0;
    return !1
};