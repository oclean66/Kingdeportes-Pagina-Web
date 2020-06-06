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
            for (var c, b = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "),
                    "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "), "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")
                ], d = 0, f = b.length, e = {}; d < f; d++)
                if ((c = b[d]) && c[1] in a) {
                    for (d = 0; d < c.length; d++) e[b[0][d]] =
                        c[d];
                    return e
                }
            return !1
        }(),
        f = {
            change: c.fullscreenchange,
            error: c.fullscreenerror
        },
        e = {
            request: function(b) {
                var f = c.requestFullscreen;
                b = b || a.documentElement;
                if (/5\.1[.\d]* Safari/.test(navigator.userAgent)) b[f]();
                else b[f](d && Element.ALLOW_KEYBOARD_INPUT)
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
            on: function(c, b) {
                var d = f[c];
                d && a.addEventListener(d, b, !1)
            },
            off: function(c,
                b) {
                var d = f[c];
                d && a.removeEventListener(d, b, !1)
            },
            raw: c
        };
    c ? (Object.defineProperties(e, {
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
    }), b ? module.exports = e : window.screenfull = e) : b ? module.exports = !1 : window.screenfull = !1
})();
(function() {
    function a(a) {
        a = String(a);
        return a.charAt(0).toUpperCase() + a.slice(1)
    }

    function b(a, b) {
        var d = -1,
            f = a ? a.length : 0;
        if ("number" == typeof f && -1 < f && f <= v)
            for (; ++d < f;) b(a[d], d, a);
        else c(a, b)
    }

    function d(c) {
        c = String(c).replace(/^ +| +$/g, "");
        return /^(?:webOS|i(?:OS|P))/.test(c) ? c : a(c)
    }

    function c(a, c) {
        for (var b in a) D.call(a, b) && c(a[b], b, a)
    }

    function f(c) {
        return null == c ? a(c) : A.call(c).slice(8, -1)
    }

    function e(a, c) {
        var b = null != a ? typeof a[c] : "number";
        return !/^(?:boolean|number|string|undefined)$/.test(b) &&
            ("object" == b ? !!a[c] : !0)
    }

    function g(a) {
        return String(a).replace(/([ -])(?!$)/g, "$1?")
    }

    function m(a, c) {
        var d = null;
        b(a, function(b, f) {
            d = c(d, b, f, a)
        });
        return d
    }

    function r(a) {
        function b(c) {
            return m(c, function(c, b) {
                var f = b.pattern || g(b);
                !c && (c = RegExp("\\b" + f + " *\\d+[.\\w_]*", "i").exec(a) || RegExp("\\b" + f + " *\\w+-[\\w]*", "i").exec(a) || RegExp("\\b" + f + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(a)) && ((c = String(b.label && !RegExp(f, "i").test(b.label) ? b.label : c).split("/"))[1] && !/[\d.]+/.test(c[0]) && (c[0] +=
                    " " + c[1]), b = b.label || b, c = d(c[0].replace(RegExp(f, "i"), b).replace(RegExp("; *(?:" + b + "[_-])?", "i"), " ").replace(RegExp("(" + b + ")[-_.]?(\\w)", "i"), "$1 $2")));
                return c
            })
        }

        function n(c) {
            return m(c, function(c, b) {
                return c || (RegExp(b + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(a) || 0)[1] || null
            })
        }
        var l = x,
            k = a && "object" == typeof a && "String" != f(a);
        k && (l = a, a = null);
        var v = l.navigator || {},
            u = v.userAgent || "";
        a || (a = u);
        var D = k ? !!v.likeChrome : /\bChrome\b/.test(a) && !/internal|\n/i.test(A.toString()),
            H = k ? "Object" : "ScriptBridgingProxyObject",
            F = k ? "Object" : "Environment",
            E = k && l.java ? "JavaPackage" : f(l.java),
            y = k ? "Object" : "RuntimeObject";
        F = (E = /\bJava/.test(E) && l.java) && f(l.environment) == F;
        var R = E ? "a" : "\u03b1",
            G = E ? "b" : "\u03b2",
            V = l.document || {},
            z = l.operamini || l.opera,
            w = p.test(w = k && z ? z["[[Class]]"] : f(z)) ? w : z = null,
            h, T = a;
        k = [];
        var L = null,
            U = a == u;
        u = U && z && "function" == typeof z.version && z.version();
        var B = function(c) {
                return m(c, function(c, b) {
                    return c || RegExp("\\b" + (b.pattern || g(b)) + "\\b", "i").exec(a) && (b.label ||
                        b)
                })
            }([{
                label: "EdgeHTML",
                pattern: "Edge"
            }, "Trident", {
                label: "WebKit",
                pattern: "AppleWebKit"
            }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]),
            q = function(c) {
                return m(c, function(c, b) {
                    return c || RegExp("\\b" + (b.pattern || g(b)) + "\\b", "i").exec(a) && (b.label || b)
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
            C = b([{
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
            M = function(c) {
                return m(c, function(c, b, d) {
                    return c || (b[C] || b[/^[a-z]+(?: +[a-z]+\b)*/i.exec(C)] || RegExp("\\b" + g(d) + "(?:\\b|\\w*\\d)", "i").exec(a)) && d
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
            t = function(c) {
                return m(c, function(c, b) {
                    var f = b.pattern || g(b);
                    if (!c && (c = RegExp("\\b" + f + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(a))) {
                        var e = c,
                            h = b.label || b,
                            k = {
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
                        f && h && /^Win/i.test(e) && !/^Windows Phone /i.test(e) && (k = k[/[\d.]+$/.exec(e)]) && (e = "Windows " + k);
                        e = String(e);
                        f && h && (e = e.replace(RegExp(f, "i"), h));
                        c = e = d(e.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/,
                            " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
                    }
                    return c
                })
            }(["Windows Phone", "Android", "CentOS", {
                    label: "Chrome OS",
                    pattern: "CrOS"
                }, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac",
                "Windows 98;", "Windows "
            ]);
        B && (B = [B]);
        M && !C && (C = b([M]));
        if (h = /\bGoogle TV\b/.exec(C)) C = h[0];
        /\bSimulator\b/i.test(a) && (C = (C ? C + " " : "") + "Simulator");
        "Opera Mini" == q && /\bOPiOS\b/.test(a) && k.push("running in Turbo/Uncompressed mode");
        "IE" == q && /\blike iPhone OS\b/.test(a) ? (h = r(a.replace(/like iPhone OS/, "")), M = h.manufacturer, C = h.product) : /^iP/.test(C) ? (q || (q = "Safari"), t = "iOS" + ((h = / OS ([\d_]+)/i.exec(a)) ? " " + h[1].replace(/_/g, ".") : "")) : "Konqueror" != q || /buntu/i.test(t) ? M && "Google" != M && (/Chrome/.test(q) &&
            !/\bMobile Safari\b/i.test(a) || /\bVita\b/.test(C)) || /\bAndroid\b/.test(t) && /^Chrome/.test(q) && /\bVersion\//i.test(a) ? (q = "Android Browser", t = /\bAndroid\b/.test(t) ? t : "Android") : "Silk" == q ? (/\bMobi/i.test(a) || (t = "Android", k.unshift("desktop mode")), /Accelerated *= *true/i.test(a) && k.unshift("accelerated")) : "PaleMoon" == q && (h = /\bFirefox\/([\d.]+)\b/.exec(a)) ? k.push("identifying as Firefox " + h[1]) : "Firefox" == q && (h = /\b(Mobile|Tablet|TV)\b/i.exec(a)) ? (t || (t = "Firefox OS"), C || (C = h[1])) : !q || (h = !/\bMinefield\b/i.test(a) &&
            /\b(?:Firefox|Safari)\b/.exec(q)) ? (q && !C && /[\/,]|^[^(]+?\)/.test(a.slice(a.indexOf(h + "/") + 8)) && (q = null), (h = C || M || t) && (C || M || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(t)) && (q = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(t) ? t : h) + " Browser")) : "Electron" == q && (h = (/\bChrome\/([\d.]+)\b/.exec(a) || 0)[1]) && k.push("Chromium " + h) : t = "Kubuntu";
        u || (u = n(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", g(q), "(?:Firefox|Minefield|NetFront)"]));
        if (h = "iCab" == B && 3 < parseFloat(u) && "WebKit" || /\bOpera\b/.test(q) && (/\bOPR\b/.test(a) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(a) && !/^(?:Trident|EdgeHTML)$/.test(B) && "WebKit" || !B && /\bMSIE\b/i.test(a) && ("Mac OS" == t ? "Tasman" : "Trident") || "WebKit" == B && /\bPlayStation\b(?! Vita\b)/i.test(q) && "NetFront") B = [h];
        "IE" == q && (h = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(a) || 0)[1]) ? (q += " Mobile", t = "Windows Phone " + (/\+$/.test(h) ? h : h + ".x"), k.unshift("desktop mode")) : /\bWPDesktop\b/i.test(a) ? (q = "IE Mobile", t = "Windows Phone 8.x",
            k.unshift("desktop mode"), u || (u = (/\brv:([\d.]+)/.exec(a) || 0)[1])) : "IE" != q && "Trident" == B && (h = /\brv:([\d.]+)/.exec(a)) && (q && k.push("identifying as " + q + (u ? " " + u : "")), q = "IE", u = h[1]);
        if (U) {
            if (e(l, "global"))
                if (E && (h = E.lang.System, T = h.getProperty("os.arch"), t = t || h.getProperty("os.name") + " " + h.getProperty("os.version")), F) {
                    try {
                        u = l.require("ringo/engine").version.join("."), q = "RingoJS"
                    } catch (X) {
                        (h = l.system) && h.global.system == l.system && (q = "Narwhal", t || (t = h[0].os || null))
                    }
                    q || (q = "Rhino")
                } else "object" == typeof l.process &&
                    !l.process.browser && (h = l.process) && ("object" == typeof h.versions && ("string" == typeof h.versions.electron ? (k.push("Node " + h.versions.node), q = "Electron", u = h.versions.electron) : "string" == typeof h.versions.nw && (k.push("Chromium " + u, "Node " + h.versions.node), q = "NW.js", u = h.versions.nw)), q || (q = "Node.js", T = h.arch, t = h.platform, u = (u = /[\d.]+/.exec(h.version)) ? u[0] : null));
            else f(h = l.runtime) == H ? (q = "Adobe AIR", t = h.flash.system.Capabilities.os) : f(h = l.phantom) == y ? (q = "PhantomJS", u = (h = h.version || null) && h.major + "." + h.minor +
                "." + h.patch) : "number" == typeof V.documentMode && (h = /\bTrident\/(\d+)/i.exec(a)) ? (u = [u, V.documentMode], (h = +h[1] + 4) != u[1] && (k.push("IE " + u[1] + " mode"), B && (B[1] = ""), u[1] = h), u = "IE" == q ? String(u[1].toFixed(1)) : u[0]) : "number" == typeof V.documentMode && /^(?:Chrome|Firefox)\b/.test(q) && (k.push("masking as " + q + " " + u), q = "IE", u = "11.0", B = ["Trident"], t = "Windows");
            t = t && d(t)
        }
        u && (h = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(u) || /(?:alpha|beta)(?: ?\d)?/i.exec(a + ";" + (U && v.appMinorVersion)) || /\bMinefield\b/i.test(a) &&
            "a") && (L = /b/i.test(h) ? "beta" : "alpha", u = u.replace(RegExp(h + "\\+?$"), "") + ("beta" == L ? G : R) + (/\d+\+?/.exec(h) || ""));
        if ("Fennec" == q || "Firefox" == q && /\b(?:Android|Firefox OS)\b/.test(t)) q = "Firefox Mobile";
        else if ("Maxthon" == q && u) u = u.replace(/\.[\d.]+/, ".x");
        else if (/\bXbox\b/i.test(C)) "Xbox 360" == C && (t = null), "Xbox 360" == C && /\bIEMobile\b/.test(a) && k.unshift("mobile mode");
        else if (!/^(?:Chrome|IE|Opera)$/.test(q) && (!q || C || /Browser|Mobi/.test(q)) || "Windows CE" != t && !/Mobi/i.test(a))
            if ("IE" == q && U) try {
                null === l.external &&
                    k.unshift("platform preview")
            } catch (X) {
                k.unshift("embedded")
            } else(/\bBlackBerry\b/.test(C) || /\bBB10\b/.test(a)) && (h = (RegExp(C.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(a) || 0)[1] || u) ? (h = [h, /BB10/.test(a)], t = (h[1] ? (C = null, M = "BlackBerry") : "Device Software") + " " + h[0], u = null) : this != c && "Wii" != C && (U && z || /Opera/.test(q) && /\b(?:MSIE|Firefox)\b/i.test(a) || "Firefox" == q && /\bOS X (?:\d+\.){2,}/.test(t) || "IE" == q && (t && !/^Win/.test(t) && 5.5 < u || /\bWindows XP\b/.test(t) && 8 < u || 8 == u && !/\bTrident\b/.test(a))) && !p.test(h =
                r.call(c, a.replace(p, "") + ";")) && h.name && (h = "ing as " + h.name + ((h = h.version) ? " " + h : ""), p.test(q) ? (/\bIE\b/.test(h) && "Mac OS" == t && (t = null), h = "identify" + h) : (h = "mask" + h, q = w ? d(w.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(h) && (t = null), U || (u = null)), B = ["Presto"], k.push(h));
            else q += " Mobile";
        if (h = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(a) || 0)[1]) {
            h = [parseFloat(h.replace(/\.(\d)$/, ".0$1")), h];
            if ("Safari" == q && "+" == h[1].slice(-1)) q = "WebKit Nightly", L = "alpha", u = h[1].slice(0, -1);
            else if (u == h[1] || u == (h[2] =
                    (/\bSafari\/([\d.]+\+?)/i.exec(a) || 0)[1])) u = null;
            h[1] = (/\bChrome\/([\d.]+)/i.exec(a) || 0)[1];
            537.36 == h[0] && 537.36 == h[2] && 28 <= parseFloat(h[1]) && "WebKit" == B && (B = ["Blink"]);
            U && (D || h[1]) ? (B && (B[1] = "like Chrome"), h = h[1] || (h = h[0], 530 > h ? 1 : 532 > h ? 2 : 532.05 > h ? 3 : 533 > h ? 4 : 534.03 > h ? 5 : 534.07 > h ? 6 : 534.1 > h ? 7 : 534.13 > h ? 8 : 534.16 > h ? 9 : 534.24 > h ? 10 : 534.3 > h ? 11 : 535.01 > h ? 12 : 535.02 > h ? "13+" : 535.07 > h ? 15 : 535.11 > h ? 16 : 535.19 > h ? 17 : 536.05 > h ? 18 : 536.1 > h ? 19 : 537.01 > h ? 20 : 537.11 > h ? "21+" : 537.13 > h ? 23 : 537.18 > h ? 24 : 537.24 > h ? 25 : 537.36 > h ? 26 : "Blink" !=
                B ? "27" : "28")) : (B && (B[1] = "like Safari"), h = (h = h[0], 400 > h ? 1 : 500 > h ? 2 : 526 > h ? 3 : 533 > h ? 4 : 534 > h ? "4+" : 535 > h ? 5 : 537 > h ? 6 : 538 > h ? 7 : 601 > h ? 8 : "8"));
            B && (B[1] += " " + (h += "number" == typeof h ? ".x" : /[.+]/.test(h) ? "" : "+"));
            "Safari" == q && (!u || 45 < parseInt(u)) && (u = h)
        }
        "Opera" == q && (h = /\bzbov|zvav$/.exec(t)) ? (q += " ", k.unshift("desktop mode"), "zvav" == h ? (q += "Mini", u = null) : q += "Mobile", t = t.replace(RegExp(" *" + h + "$"), "")) : "Safari" == q && /\bChrome\b/.exec(B && B[1]) && (k.unshift("desktop mode"), q = "Chrome Mobile", u = null, /\bOS X\b/.test(t) ? (M =
            "Apple", t = "iOS 4.3+") : t = null);
        u && 0 == u.indexOf(h = /[\d.]+$/.exec(t)) && -1 < a.indexOf("/" + h + "-") && (t = String(t.replace(h, "")).replace(/^ +| +$/g, ""));
        B && !/\b(?:Avant|Nook)\b/.test(q) && (/Browser|Lunascape|Maxthon/.test(q) || "Safari" != q && /^iOS/.test(t) && /\bSafari\b/.test(B[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(q) && B[1]) && (h = B[B.length - 1]) && k.push(h);
        k.length && (k = ["(" + k.join("; ") + ")"]);
        M && C && 0 > C.indexOf(M) && k.push("on " + M);
        C && k.push((/^on /.test(k[k.length -
            1]) ? "" : "on ") + C);
        if (t) {
            var W = (h = / ([\d.+]+)$/.exec(t)) && "/" == t.charAt(t.length - h[0].length - 1);
            t = {
                architecture: 32,
                family: h && !W ? t.replace(h[0], "") : t,
                version: h ? h[1] : null,
                toString: function() {
                    var a = this.version;
                    return this.family + (a && !W ? " " + a : "") + (64 == this.architecture ? " 64-bit" : "")
                }
            }
        }(h = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(T)) && !/\bi686\b/i.test(T) ? (t && (t.architecture = 64, t.family = t.family.replace(RegExp(" *" + h), "")), q && (/\bWOW64\b/i.test(a) || U && /\w(?:86|32)$/.test(v.cpuClass || v.platform) && !/\bWin64; x64\b/i.test(a)) &&
            k.unshift("32-bit")) : t && /^OS X/.test(t.family) && "Chrome" == q && 39 <= parseFloat(u) && (t.architecture = 64);
        a || (a = null);
        l = {};
        l.description = a;
        l.layout = B && B[0];
        l.manufacturer = M;
        l.name = q;
        l.prerelease = L;
        l.product = C;
        l.ua = a;
        l.version = q && u;
        l.os = t || {
            architecture: null,
            family: null,
            version: null,
            toString: function() {
                return "null"
            }
        };
        l.parse = r;
        l.toString = function() {
            return this.description || ""
        };
        l.version && k.unshift(u);
        l.name && k.unshift(q);
        t && q && (t != String(t).split(" ")[0] || t != q.split(" ")[0] && !C) && k.push(C ? "(" + t + ")" : "on " +
            t);
        k.length && (l.description = k.join(" "));
        return l
    }
    var n = {
            "function": !0,
            object: !0
        },
        x = n[typeof window] && window || this,
        k = n[typeof exports] && exports;
    n = n[typeof module] && module && !module.nodeType && module;
    var l = k && n && "object" == typeof global && global;
    !l || l.global !== l && l.window !== l && l.self !== l || (x = l);
    var v = Math.pow(2, 53) - 1,
        p = /\bOpera/;
    l = Object.prototype;
    var D = l.hasOwnProperty,
        A = l.toString,
        H = r();
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (x.platform = H, define(function() {
            return H
        })) : k &&
        n ? c(H, function(a, c) {
            k[c] = a
        }) : x.platform = H
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
var s_iOffsetX, s_iOffsetY, s_iScaleFactor = 1,
    s_bIsIphone = !1;
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

function getSize(a) {
    var b = a.toLowerCase(),
        d = window.document,
        c = d.documentElement;
    if (void 0 === window["inner" + a]) a = c["client" + a];
    else if (window["inner" + a] != c["client" + a]) {
        var f = d.createElement("body");
        f.id = "vpw-test-b";
        f.style.cssText = "overflow:scroll";
        var e = d.createElement("div");
        e.id = "vpw-test-d";
        e.style.cssText = "position:absolute;top:-1000px";
        e.innerHTML = "<style>@media(" + b + ":" + c["client" + a] + "px){body#vpw-test-b div#vpw-test-d{" + b + ":7px!important}}</style>";
        f.appendChild(e);
        c.insertBefore(f, d.head);
        a = 7 == e["offset" + a] ? c["client" + a] : window["inner" + a];
        c.removeChild(f)
    } else a = window["inner" + a];
    return a
}
window.addEventListener("orientationchange", onOrientationChange);

function onOrientationChange() {
    window.matchMedia("(orientation: portrait)").matches && sizeHandler();
    window.matchMedia("(orientation: landscape)").matches && sizeHandler()
}

function isIOS() {
    var a = "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";");
    for (-1 !== navigator.userAgent.toLowerCase().indexOf("iphone") && (s_bIsIphone = !0); a.length;)
        if (navigator.platform === a.pop()) return !0;
    return s_bIsIphone = !1
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
            var f = a - d;
            d += f;
            c += CANVAS_WIDTH / CANVAS_HEIGHT * f
        } else c < b && (f = b - c, c += f, d += CANVAS_HEIGHT / CANVAS_WIDTH * f);
        f = a / 2 - d / 2;
        var e = b / 2 - c / 2,
            g = CANVAS_WIDTH / c;
        if (e * g < -EDGEBOARD_X || f * g < -EDGEBOARD_Y) d = Math.min(a / (CANVAS_HEIGHT - 2 *
            EDGEBOARD_Y), b / (CANVAS_WIDTH - 2 * EDGEBOARD_X)), c = CANVAS_WIDTH * d, d *= CANVAS_HEIGHT, f = (a - d) / 2, e = (b - c) / 2, g = CANVAS_WIDTH / c;
        s_iOffsetX = -1 * e * g;
        s_iOffsetY = -1 * f * g;
        0 <= f && (s_iOffsetY = 0);
        0 <= e && (s_iOffsetX = 0);
        null !== s_oInterface && s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        s_bIsIphone ? (canvas = document.getElementById("canvas"), s_oStage.canvas.width = 2 * c, s_oStage.canvas.height = 2 * d, canvas.style.width = c + "px", canvas.style.height = d + "px", a = Math.min(c /
            CANVAS_WIDTH, d / CANVAS_HEIGHT), s_iScaleFactor = 2 * a, s_oStage.scaleX = s_oStage.scaleY = 2 * a) : s_bMobile && !1 === isIOS() ? ($("#canvas").css("width", c + "px"), $("#canvas").css("height", d + "px")) : (s_oStage.canvas.width = c, s_oStage.canvas.height = d, s_iScaleFactor = Math.min(c / CANVAS_WIDTH, d / CANVAS_HEIGHT), s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor);
        0 > f ? $("#canvas").css("top", f + "px") : $("#canvas").css("top", "0px");
        $("#canvas").css("left", e + "px");
        fullscreenHandler()
    }
}

function _checkOrientation(a, b) {
    s_bMobile && ENABLE_CHECK_ORIENTATION && (a > b ? "landscape" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()) : "portrait" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"),
        s_oMain.stopUpdate()))
}

function createBitmap(a, b, d) {
    var c = new createjs.Bitmap(a),
        f = new createjs.Shape;
    b && d ? f.graphics.beginFill("#fff").drawRect(0, 0, b, d) : f.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
    c.hitArea = f;
    return c
}

function createSprite(a, b, d, c, f, e) {
    a = null !== b ? new createjs.Sprite(a, b) : new createjs.Sprite(a);
    b = new createjs.Shape;
    b.graphics.beginFill("#000000").drawRect(-d, -c, f, e);
    a.hitArea = b;
    return a
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
Array.prototype.sortOn = function() {
    var a = this.slice();
    if (!arguments.length) return a.sort();
    var b = Array.prototype.slice.call(arguments);
    return a.sort(function(a, c) {
        for (var d = b.slice(), e = d.shift(); a[e] == c[e] && d.length;) e = d.shift();
        return a[e] == c[e] ? 0 : a[e] > c[e] ? 1 : -1
    })
};

function roundDecimal(a, b) {
    var d = Math.pow(10, b);
    return Math.round(d * a) / d
}

function tweenVectors(a, b, d, c) {
    c.set(a.getX() + d * (b.getX() - a.getX()), a.getY() + d * (b.getY() - a.getY()));
    return c
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

function fullscreenHandler() {
    ENABLE_FULLSCREEN && screenfull.enabled && (s_bFullscreen = screen.height < window.innerHeight + 3 && screen.height > window.innerHeight - 3 ? !0 : !1, null !== s_oInterface && s_oInterface.resetFullscreenBut(), null !== s_oMenu && s_oMenu.resetFullscreenBut())
}
if (screenfull.enabled) screenfull.on("change", function() {
    s_bFullscreen = screenfull.isFullscreen;
    null !== s_oInterface && s_oInterface.resetFullscreenBut();
    null !== s_oMenu && s_oMenu.resetFullscreenBut()
});

function CSpriteLibrary() {
    var a, b, d, c, f, e;
    this.init = function(g, m, r) {
        d = b = 0;
        c = g;
        f = m;
        e = r;
        a = {}
    };
    this.addSprite = function(c, d) {
        a.hasOwnProperty(c) || (a[c] = {
            szPath: d,
            oSprite: new Image
        }, b++)
    };
    this.getSprite = function(c) {
        return a.hasOwnProperty(c) ? a[c].oSprite : null
    };
    this._onSpritesLoaded = function() {
        f.call(e)
    };
    this._onSpriteLoaded = function() {
        c.call(e);
        ++d === b && this._onSpritesLoaded()
    };
    this.loadSprites = function() {
        for (var c in a) a[c].oSprite.oSpriteLibrary = this, a[c].oSprite.onload = function() {
                this.oSpriteLibrary._onSpriteLoaded()
            },
            a[c].oSprite.src = a[c].szPath
    };
    this.getNumSprites = function() {
        return b
    }
}
var CANVAS_WIDTH = 1700,
    CANVAS_HEIGHT = 768,
    EDGEBOARD_X = 250,
    EDGEBOARD_Y = 0,
    FPS_TIME = 1E3 / 24,
    DISABLE_SOUND_MOBILE = !1,
    FONT_GAME_1 = "arialbold",
    FONT_GAME_2 = "Digital-7",
    STATE_LOADING = 0,
    STATE_MENU = 1,
    STATE_HELP = 1,
    STATE_GAME = 3,
    STATE_GAME_WAITING_FOR_BET = 0,
    STATE_GAME_DEALING = 1,
    STATE_GAME_PLAYER_TURN = 2,
    STATE_GAME_SHOWDOWN = 3,
    STATE_GAME_DISTRIBUTE_FICHES = 4,
    STATE_GAME_SHOW_WINNER = 5,
    STATE_CARD_DEALING = 0,
    STATE_CARD_REMOVING = 1,
    ON_MOUSE_DOWN = 0,
    ON_MOUSE_UP = 1,
    ON_MOUSE_OVER = 2,
    ON_MOUSE_OUT = 3,
    ON_DRAG_START = 4,
    ON_DRAG_END = 5,
    ASSIGN_FICHES =
    "ASSIGN_FICHES",
    END_HAND = "END_HAND",
    ON_CARD_SHOWN = "ON_CARD_SHOWN",
    ON_CARD_ANIMATION_ENDING = "ON_CARD_ANIMATION_ENDING",
    ON_CARD_TO_REMOVE = "ON_CARD_TO_REMOVE",
    NUM_FICHES = 6,
    CARD_WIDTH = 66,
    CARD_HEIGHT = 102,
    MIN_BET, MAX_BET, TOTAL_MONEY, FICHE_WIDTH, WIN_OCCURRENCE, BET_OCCURRENCE, TIME_FICHES_MOV = 600,
    TIME_CARD_DEALING = 250,
    TIME_CARD_REMOVE = 1E3,
    TIME_SHOW_FINAL_CARDS = 4E3,
    TIME_END_HAND, BET_TIME = 1E4,
    AD_SHOW_COUNTER, NUM_DECKS = 4,
    PAYOUT_MULT, ROYAL_FLUSH = 0,
    STRAIGHT_FLUSH = 1,
    FOUR_OF_A_KIND = 2,
    FULL_HOUSE = 3,
    FLUSH = 4,
    STRAIGHT =
    5,
    THREE_OF_A_KIND = 6,
    TWO_PAIR = 7,
    ONE_PAIR = 8,
    HIGH_CARD = 9,
    NO_HAND = 10,
    CARD_TWO = 2,
    CARD_THREE = 3,
    CARD_FOUR = 4,
    CARD_FIVE = 5,
    CARD_SIX = 6,
    CARD_SEVEN = 7,
    CARD_EIGHT = 8,
    CARD_NINE = 9,
    CARD_TEN = 10,
    CARD_JACK = 11,
    CARD_QUEEN = 12,
    CARD_KING = 13,
    CARD_ACE = 14,
    BET_ANTE = 0,
    BET_RAISE = 1,
    POS_BET = [],
    MULTIPLIERS = [],
    ENABLE_FULLSCREEN, ENABLE_CHECK_ORIENTATION, SHOW_CREDITS, TEXT_DEAL = "DEAL",
    TEXT_MIN_BET = "MIN BET",
    TEXT_MAX_BET = "MAX BET",
    TEXT_RECHARGE = "RECHARGE",
    TEXT_EXIT = "EXIT",
    TEXT_MONEY = "MONEY",
    TEXT_CURRENCY = "$",
    TEXT_RAISE = "RAISE",
    TEXT_FOLD =
    "FOLD",
    TEXT_CREDITS_DEVELOPED = "DEVELOPED BY",
    TEXT_PRELOADER_CONTINUE = "START",
    TEXT_DISPLAY_MSG_WAITING_BET = "WAITING FOR YOUR BET",
    TEXT_DISPLAY_MSG_PLAYER_LOSE = "PLAYER LOSES THIS HAND!",
    TEXT_DISPLAY_MSG_STANDOFF = "STAND OFF",
    TEXT_DISPLAY_MSG_PLAYER_WIN = "PLAYER WINS",
    TEXT_DISPLAY_MSG_USER_TURN = "PLAYER TURN. RAISE OR FOLD?",
    TEXT_DISPLAY_MSG_SHOWDOWN = "SHOWDOWN!",
    TEXT_DISPLAY_MSG_DEALING = "DEALING...",
    TEXT_DISPLAY_MSG_NOT_QUALIFY = "DEALER DOES NOT QUALIFY",
    TEXT_NO_MONEY = "YOU DON'T HAVE ENOUGH MONEY!!!",
    TEXT_NO_MONEY_FOR_RAISE =
    "YOU DON'T HAVE ENOUGH MONEY FOR RAISE BET EVENTUALLY!!!",
    TEXT_HAND_WON_PLAYER = "HAND WON BY THE PLAYER",
    TEXT_HAND_WON_DEALER = "HAND WON BY THE DEALER",
    TEXT_ERROR_MIN_BET = "YOUR BET IS LOWER THAN MINIMUM BET!!",
    TEXT_ERROR_MAX_BET = "YOUR BET IS HIGHER THAN MAXIMUM BET!!",
    TEXT_EVALUATOR = "ROYAL FLUSH;STRAIGHT FLUSH;FOUR OF A KIND;FULL HOUSE;FLUSH;STRAIGHT;THREE OF A KIND;TWO PAIR;ONE PAIR;HIGH CARD;NO HAND".split(";"),
    TEXT_SHARE_IMAGE = "200x200.jpg",
    TEXT_SHARE_TITLE = "Congratulations!",
    TEXT_SHARE_MSG1 = "You collected <strong>",
    TEXT_SHARE_MSG2 = " points</strong>!<br><br>Share your score with your friends!",
    TEXT_SHARE_SHARE1 = "My score is ",
    TEXT_SHARE_SHARE2 = " points! Can you do better?";

function CPreloader() {
    var a, b, d, c, f, e, g, m, r, n;
    this._init = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
        s_oSpriteLibrary.addSprite("200x200", "./sprites/200x200.jpg");
        s_oSpriteLibrary.addSprite("but_start", "./sprites/but_start.png");
        s_oSpriteLibrary.loadSprites();
        n = new createjs.Container;
        s_oStage.addChild(n)
    };
    this.unload = function() {
        n.removeAllChildren();
        r.unload()
    };
    this._onImagesLoaded = function() {};
    this._onAllImagesLoaded = function() {
        this.attachSprites();
        s_oMain.preloaderReady()
    };
    this.attachSprites = function() {
        var x = new createjs.Shape;
        x.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        n.addChild(x);
        x = s_oSpriteLibrary.getSprite("200x200");
        g = createBitmap(x);
        g.regX = .5 * x.width;
        g.regY = .5 * x.height;
        g.x = CANVAS_WIDTH / 2;
        g.y = CANVAS_HEIGHT / 2 - 180;
        n.addChild(g);
        m = new createjs.Shape;
        m.graphics.beginFill("rgba(0,0,0,0.01)").drawRoundRect(g.x - 100, g.y - 100, 200, 200, 10);
        n.addChild(m);
        g.mask = m;
        x = s_oSpriteLibrary.getSprite("progress_bar");
        c = createBitmap(x);
        c.x = CANVAS_WIDTH / 2 - x.width / 2;
        c.y = CANVAS_HEIGHT / 2 + 50;
        n.addChild(c);
        a = x.width;
        b = x.height;
        f = new createjs.Shape;
        f.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(c.x, c.y, 1, b);
        n.addChild(f);
        c.mask = f;
        d = new createjs.Text("", "30px " + FONT_GAME_1, "#fff");
        d.x = CANVAS_WIDTH / 2;
        d.y = CANVAS_HEIGHT / 2 + 100;
        d.textBaseline = "alphabetic";
        d.textAlign = "center";
        n.addChild(d);
        x = s_oSpriteLibrary.getSprite("but_start");
        r = new CTextButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT /
            2, x, TEXT_PRELOADER_CONTINUE, "Arial", "#000", "bold 50", n);
        r.addEventListener(ON_MOUSE_UP, this._onButStartRelease, this);
        r.setVisible(!1);
        e = new createjs.Shape;
        e.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        n.addChild(e);
        createjs.Tween.get(e).to({
            alpha: 0
        }, 500).call(function() {
            createjs.Tween.removeTweens(e);
            n.removeChild(e)
        })
    };
    this._onButStartRelease = function() {
        s_oMain._onRemovePreloader()
    };
    this.refreshLoader = function(e) {
        d.text = e + "%";
        100 === e && (r.setVisible(!0), d.visible = !1, c.visible = !1);
        f.graphics.clear();
        e = Math.floor(e * a / 100);
        f.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(c.x, c.y, e, b)
    };
    this._init()
}

function CMain(a) {
    var b, d = 0,
        c = 0,
        f = STATE_LOADING,
        e, g;
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
        e = new CPreloader
        // seekAndDestroy() ? e = new CPreloader : window.location.href = "http://www.codethislab.com/contact-us.html";
        s_oGameSettings = new CGameSettings;
        b = !0
    };
    this.preloaderReady = function() {
        this._loadImages();
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || this._initSounds()
    };
    this.soundLoaded = function() {
        d++;
        e.refreshLoader(Math.floor(d / c * 100))
    };
    this._initSounds = function() {
        var a = [];
        a.push({
            path: "./sounds/",
            filename: "card",
            loop: !1,
            volume: 1,
            ingamename: "card"
        });
        a.push({
            path: "./sounds/",
            filename: "chip",
            loop: !1,
            volume: 1,
            ingamename: "chip"
        });
        a.push({
            path: "./sounds/",
            filename: "fiche_collect",
            loop: !1,
            volume: 1,
            ingamename: "fiche_collect"
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
            filename: "win",
            loop: !1,
            volume: 1,
            ingamename: "win"
        });
        a.push({
            path: "./sounds/",
            filename: "lose",
            loop: !1,
            volume: 1,
            ingamename: "lose"
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
        s_oSpriteLibrary.addSprite("but_menu_bg", "./sprites/but_menu_bg.png");
        s_oSpriteLibrary.addSprite("but_game_bg", "./sprites/but_game_bg.png");
        s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
        s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
        s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
        s_oSpriteLibrary.addSprite("bg_game", "./sprites/bg_game.jpg");
        s_oSpriteLibrary.addSprite("card_spritesheet",
            "./sprites/card_spritesheet.png");
        s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
        s_oSpriteLibrary.addSprite("display_bg", "./sprites/display_bg.png");
        s_oSpriteLibrary.addSprite("fiche_highlight", "./sprites/fiche_highlight.png");
        s_oSpriteLibrary.addSprite("win_bg", "./sprites/win_bg.png");
        s_oSpriteLibrary.addSprite("but_clear", "./sprites/but_clear.png");
        s_oSpriteLibrary.addSprite("but_generic", "./sprites/but_generic.png");
        s_oSpriteLibrary.addSprite("but_rebet", "./sprites/but_rebet.png");
        s_oSpriteLibrary.addSprite("gui_bg", "./sprites/gui_bg.png");
        s_oSpriteLibrary.addSprite("bet_ante", "./sprites/bet_ante.png");
        s_oSpriteLibrary.addSprite("bet_raise", "./sprites/bet_raise.png");
        s_oSpriteLibrary.addSprite("paytable_bg", "./sprites/paytable_bg.png");
        s_oSpriteLibrary.addSprite("help_cursor", "./sprites/help_cursor.png");
        s_oSpriteLibrary.addSprite("but_fullscreen", "./sprites/but_fullscreen.png");
        s_oSpriteLibrary.addSprite("but_credits", "./sprites/but_credits.png");
        s_oSpriteLibrary.addSprite("logo_ctl",
            "./sprites/logo_ctl.png");
        for (var a = 0; a < NUM_FICHES; a++) s_oSpriteLibrary.addSprite("fiche_" + a, "./sprites/fiche_" + a + ".png");
        c += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites()
    };
    this._onImagesLoaded = function() {
        d++;
        e.refreshLoader(Math.floor(d / c * 100))
    };
    this._onAllImagesLoaded = function() {};
    this.onAllPreloaderImagesLoaded = function() {
        this._loadImages()
    };
    this._onRemovePreloader = function() {
        e.unload();
        this.gotoMenu()
    };
    this.gotoMenu = function() {
        new CMenu;
        f = STATE_MENU
    };
    this.gotoGame = function() {
        g =
            new CGame(m);
        f = STATE_GAME
    };
    this.gotoHelp = function() {
        new CHelp;
        f = STATE_HELP
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
        if (b) {
            var c = (new Date).getTime();
            s_iTimeElaps = c - s_iPrevTime;
            s_iCntTime += s_iTimeElaps;
            s_iCntFps++;
            s_iPrevTime = c;
            1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps, s_iCntTime -= 1E3, s_iCntFps = 0);
            f === STATE_GAME && g.update();
            s_oStage.update(a)
        }
    };
    s_oMain = this;
    var m = a;
    ENABLE_CHECK_ORIENTATION = m.check_orientation;
    ENABLE_FULLSCREEN = m.fullscreen;
    SHOW_CREDITS = a.show_credits;
    this.initContainer()
}
var s_bMobile, s_bAudioActive = !0,
    s_iCntTime = 0,
    s_iTimeElaps = 0,
    s_iPrevTime = 0,
    s_iCntFps = 0,
    s_iCurFps = 0,
    s_bFullscreen = !1,
    s_oDrawLayer, s_oStage, s_oMain, s_oSpriteLibrary, s_oGameSettings;

function CTextButton(a, b, d, c, f, e, g, m) {
    var r, n, x, k, l, v, p, D, A, H;
    this._init = function(a, c, b, d, f, e, g, k) {
        r = !1;
        n = [];
        x = [];
        H = k;
        p = createBitmap(b);
        k = Math.ceil(g / 20);
        D = new createjs.Text(d, g + "px " + f, "#000000");
        var l = D.getBounds();
        D.textAlign = "center";
        D.textBaseline = "alphabetic";
        D.x = b.width / 2 + k;
        D.y = Math.floor(b.height / 2) + l.height / 3 + k;
        A = new createjs.Text(d, g + "px " + f, e);
        A.textAlign = "center";
        A.textBaseline = "alphabetic";
        A.x = b.width / 2;
        A.y = Math.floor(b.height / 2) + l.height / 3;
        v = new createjs.Container;
        v.x = a;
        v.y = c;
        v.regX =
            b.width / 2;
        v.regY = b.height / 2;
        v.cursor = "pointer";
        v.addChild(p, A);
        H.addChild(v);
        this._initListener()
    };
    this.unload = function() {
        v.off("mousedown", k);
        v.off("pressup", l);
        H.removeChild(v)
    };
    this.setVisible = function(a) {
        v.visible = a
    };
    this.enable = function() {
        r = !1;
        A.color = "#fff"
    };
    this.disable = function() {
        r = !0;
        A.color = "#a39b9d"
    };
    this._initListener = function() {
        k = v.on("mousedown", this.buttonDown);
        l = v.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, c, b) {
        n[a] = c;
        x[a] = b
    };
    this.buttonRelease = function() {
        r ||
            (playSound("press_but", 1, !1), v.scaleX = 1, v.scaleY = 1, n[ON_MOUSE_UP] && n[ON_MOUSE_UP].call(x[ON_MOUSE_UP]))
    };
    this.buttonDown = function() {
        r || (v.scaleX = .9, v.scaleY = .9, n[ON_MOUSE_DOWN] && n[ON_MOUSE_DOWN].call(x[ON_MOUSE_DOWN]))
    };
    this.setPosition = function(a, c) {
        v.x = a;
        v.y = c
    };
    this.changeText = function(a) {
        A.text = a;
        D.text = a
    };
    this.setX = function(a) {
        v.x = a
    };
    this.setY = function(a) {
        v.y = a
    };
    this.getButtonImage = function() {
        return v
    };
    this.getX = function() {
        return v.x
    };
    this.getY = function() {
        return v.y
    };
    this._init(a, b, d, c, f, e, g,
        m);
    return this
}

function CGfxButton(a, b, d, c) {
    var f, e, g, m, r, n = [],
        x, k, l;
    this._init = function(a, c, b) {
        f = !1;
        m = [];
        r = [];
        e = b.width;
        g = b.height;
        l = createBitmap(b);
        l.x = a;
        l.y = c;
        l.regX = b.width / 2;
        l.regY = b.height / 2;
        l.cursor = "pointer";
        v.addChild(l);
        this._initListener()
    };
    this.unload = function() {
        l.off("mousedown", x);
        l.off("pressup", k);
        v.removeChild(l)
    };
    this.setVisible = function(a) {
        l.visible = a
    };
    this._initListener = function() {
        x = l.on("mousedown", this.buttonDown);
        k = l.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, c, b) {
        m[a] =
            c;
        r[a] = b
    };
    this.addEventListenerWithParams = function(a, c, b, d) {
        m[a] = c;
        r[a] = b;
        n = d
    };
    this.buttonRelease = function() {
        f || (playSound("press_but", 1, !1), l.scaleX = l.scaleY = 1, m[ON_MOUSE_UP] && m[ON_MOUSE_UP].call(r[ON_MOUSE_UP], n))
    };
    this.buttonDown = function() {
        f || (l.scaleX = l.scaleY = .9, m[ON_MOUSE_DOWN] && m[ON_MOUSE_DOWN].call(r[ON_MOUSE_DOWN], n))
    };
    this.setPosition = function(a, c) {
        l.x = a;
        l.y = c
    };
    this.setX = function(a) {
        l.x = a
    };
    this.setY = function(a) {
        l.y = a
    };
    this.enable = function() {
        f = !1;
        l.filters = [];
        l.cache(0, 0, e, g)
    };
    this.disable =
        function() {
            f = !0;
            var a = (new createjs.ColorMatrix).adjustSaturation(-100);
            l.filters = [new createjs.ColorMatrixFilter(a)];
            l.cache(0, 0, e, g)
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
    var v = c;
    this._init(a, b, d);
    return this
}

function CToggle(a, b, d, c, f) {
    var e, g, m, r = [],
        n, x, k;
    this._init = function(a, c, b, d) {
        g = [];
        m = [];
        var l = new createjs.SpriteSheet({
            images: [b],
            frames: {
                width: b.width / 2,
                height: b.height,
                regX: b.width / 2 / 2,
                regY: b.height / 2
            },
            animations: {
                state_true: [0],
                state_false: [1]
            }
        });
        e = d;
        k = createSprite(l, "state_" + e, b.width / 2 / 2, b.height / 2, b.width / 2, b.height);
        k.x = a;
        k.y = c;
        k.cursor = "pointer";
        k.stop();
        f.addChild(k);
        this._initListener()
    };
    this.unload = function() {
        k.off("mousedown", n);
        k.off("pressup", x);
        f.removeChild(k)
    };
    this._initListener =
        function() {
            n = k.on("mousedown", this.buttonDown);
            x = k.on("pressup", this.buttonRelease)
        };
    this.addEventListener = function(a, c, b) {
        g[a] = c;
        m[a] = b
    };
    this.addEventListenerWithParams = function(a, c, b, d) {
        g[a] = c;
        m[a] = b;
        r = d
    };
    this.setActive = function(a) {
        e = a;
        k.gotoAndStop("state_" + e)
    };
    this.buttonRelease = function() {
        k.scaleX = 1;
        k.scaleY = 1;
        playSound("press_but", 1, !1);
        e = !e;
        k.gotoAndStop("state_" + e);
        g[ON_MOUSE_UP] && g[ON_MOUSE_UP].call(m[ON_MOUSE_UP], r)
    };
    this.buttonDown = function() {
        k.scaleX = .9;
        k.scaleY = .9;
        g[ON_MOUSE_DOWN] && g[ON_MOUSE_DOWN].call(m[ON_MOUSE_DOWN],
            r)
    };
    this.setPosition = function(a, c) {
        k.x = a;
        k.y = c
    };
    this.setVisible = function(a) {
        k.visible = a
    };
    this.getY = function() {
        return k.y
    };
    this._init(a, b, d, c)
}

function CMenu() {
    var a, b, d, c, f, e, g, m, r, n, x, k = null,
        l = null,
        v;
    this._init = function() {
        g = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        s_oStage.addChild(g);
        var p = s_oSpriteLibrary.getSprite("but_menu_bg");
        m = new CGfxButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 164, p, s_oStage);
        m.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) p = s_oSpriteLibrary.getSprite("audio_icon"), f = CANVAS_WIDTH - p.width / 4 - 10, e = p.height / 2 + 10, r = new CToggle(f, e, p, s_bAudioActive, s_oStage),
            r.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        p = s_oSpriteLibrary.getSprite("but_credits");
        SHOW_CREDITS ? (a = 10 + p.width / 2, b = p.height / 2 + 10, n = new CGfxButton(a, b, p, s_oStage), n.addEventListener(ON_MOUSE_UP, this._onCredits, this), d = a + p.width + 10, c = b) : (d = 10 + p.width / 2, c = p.height / 2 + 10);
        p = window.document;
        var D = p.documentElement;
        k = D.requestFullscreen || D.mozRequestFullScreen || D.webkitRequestFullScreen || D.msRequestFullscreen;
        l = p.exitFullscreen || p.mozCancelFullScreen || p.webkitExitFullscreen || p.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (k = !1);
        k && screenfull.enabled && (p = s_oSpriteLibrary.getSprite("but_fullscreen"), x = new CToggle(d, c, p, s_bFullscreen, s_oStage), x.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        v = new createjs.Shape;
        v.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(v);
        createjs.Tween.get(v).to({
            alpha: 0
        }, 400).call(function() {
            v.visible = !1
        });
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.refreshButtonPos = function(g, l) {
        !1 !== DISABLE_SOUND_MOBILE &&
            !1 !== s_bMobile || r.setPosition(f - g, l + e);
        k && screenfull.enabled && x.setPosition(d + g, c + l);
        SHOW_CREDITS && n.setPosition(a + g, b + l)
    };
    this.unload = function() {
        m.unload();
        m = null;
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) r.unload(), r = null;
        SHOW_CREDITS && n.unload();
        k && screenfull.enabled && x.unload();
        s_oStage.removeAllChildren();
        s_oMenu = null
    };
    this._onButPlayRelease = function() {
        this.unload();
        s_oMain.gotoGame();
        $(s_oMain).trigger("start_session")
    };
    this._onAudioToggle = function() {
        createjs.Sound.setMute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onCredits = function() {
        _oCreditsPanel = new CCreditsPanel
    };
    this.resetFullscreenBut = function() {
        k && screenfull.enabled && x.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? l.call(window.document) : k.call(window.document.documentElement);
        sizeHandler()
    };
    s_oMenu = this;
    this._init()
}
var s_oMenu = null;

function CGame(a) {
    var b = !1,
        d, c, f, e, g, m, r, n, x, k, l, v, p, D, A, H, F, O, N, K, J, S, u, P, I, Q, E, y, R, G, V, z, w, h, T;
    this._init = function() {
        f = MAX_BET;
        e = -1;
        g = v = c = 0;
        s_oTweenController = new CTweenController;
        V = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
        s_oStage.addChild(V);
        z = new CInterface(TOTAL_MONEY);
        y = new createjs.Container;
        s_oStage.addChild(y);
        R = new CHandEvaluator;
        w = new CSeat;
        w.setCredit(TOTAL_MONEY);
        G = new CHelpCursor(520, 416, s_oSpriteLibrary.getSprite("help_cursor"), s_oStage);
        this.reset(!1);
        u = new CVector2;
        u.set(1214,
            228);
        P = new CVector2;
        P.set(CANVAS_WIDTH / 2 - 199, 230);
        I = new CVector2;
        I.set(418, 820);
        Q = new CVector2;
        Q.set(0, -CANVAS_HEIGHT);
        E = new CVector2(454, 230);
        N = [w.getCardOffset(), P];
        T = new CGameOver;
        w.getCredit() < s_oGameSettings.getFichesValueAt(0) ? (this._gameOver(), this.changeState(-1)) : b = !0;
        S = new CVector2(u.getX(), u.getY());
        h = new CMsgBox;
        this.changeState(STATE_GAME_WAITING_FOR_BET)
    };
    this.unload = function() {
        b = !1;
        for (var a = 0; a < A.length; a++) A[a].unload();
        z.unload();
        T.unload();
        h.unload();
        s_oStage.removeAllChildren()
    };
    this.reset = function(a) {
        m = g = c = 0;
        w.reset();
        A = [];
        A.splice(0);
        H = [];
        O = [];
        z.reset();
        z.enableBetFiches(a);
        this.shuffleCard()
    };
    this.shuffleCard = function() {
        F = [];
        F = s_oGameSettings.getShuffledCardDeck()
    };
    this.changeState = function(a) {
        e = a;
        switch (a) {
            case STATE_GAME_WAITING_FOR_BET:
                z.displayMsg(TEXT_DISPLAY_MSG_WAITING_BET, TEXT_MIN_BET + ": " + MIN_BET + "\n" + TEXT_MAX_BET + ": " + MAX_BET);
                break;
            case STATE_GAME_DEALING:
                z.disableButtons(), z.displayMsg(TEXT_DISPLAY_MSG_DEALING), this._dealing()
        }
    };
    this.cardFromDealerArrived =
        function(a, c, b) {
            (!1 === c || c && 9 === b) && a.showCard();
            10 > b && s_oGame._dealing()
        };
    this._showWin = function() {
        d ? this._playerLose() : k === NO_HAND && "dealer" !== p ? this._playerWin(TEXT_DISPLAY_MSG_NOT_QUALIFY) : "player" === p ? this._playerWin(TEXT_HAND_WON_PLAYER) : "dealer" === p && k !== NO_HAND ? this._playerLose() : this._standOff();
        "player" === p ? playSound("win", 1, !1) : playSound("lose", 1, !1);
        this.changeState(STATE_GAME_DISTRIBUTE_FICHES);
        z.refreshCredit(w.getCredit());
        setTimeout(function() {
            w.clearBet();
            s_oGame.changeState(STATE_GAME_WAITING_FOR_BET);
            z.enableBetFiches(!0)
        }, 3 * TIME_CARD_REMOVE)
    };
    this._playerWin = function(a) {
        w.increaseCredit(n);
        L -= n;
        z.displayMsg(TEXT_DISPLAY_MSG_SHOWDOWN, TEXT_DISPLAY_MSG_PLAYER_WIN + " " + n + TEXT_CURRENCY);
        w.initMovement(0, I.getX(), I.getY());
        w.initMovement(1, I.getX(), I.getY());
        z.showResultText(a)
    };
    this._playerLose = function(a) {
        z.displayMsg(TEXT_DISPLAY_MSG_SHOWDOWN, TEXT_DISPLAY_MSG_PLAYER_LOSE);
        w.initMovement(0, Q.getX(), Q.getY());
        a || w.initMovement(1, Q.getX(), Q.getY());
        z.showResultText(TEXT_HAND_WON_DEALER)
    };
    this._standOff =
        function() {
            w.increaseCredit(n);
            L -= n;
            z.displayMsg(TEXT_DISPLAY_MSG_SHOWDOWN, TEXT_DISPLAY_MSG_STANDOFF);
            w.initMovement(0, I.getX(), I.getY());
            w.initMovement(1, I.getX(), I.getY());
            z.showResultText(TEXT_DISPLAY_MSG_STANDOFF)
        };
    this._dealing = function() {
        if (10 > m) {
            var a = new CCard(u.getX(), u.getY(), y);
            if (1 === m % N.length) {
                var c = new CVector2(P.getX() + (CARD_WIDTH / 2 + 7) * m, P.getY());
                var b = J.splice(0, 1),
                    d = b[0].fotogram;
                b = b[0].rank;
                a.setInfo(S, c, d, b, !0, m);
                a.addEventListener(ON_CARD_SHOWN, this._onCardShown);
                H.push(a)
            } else b =
                K.splice(0, 1), d = b[0].fotogram, b = b[0].rank, a.setInfo(S, w.getAttachCardOffset(), d, b, !1, m), w.newCardDealed(), O.push(a);
            A.push(a);
            m++;
            a.addEventListener(ON_CARD_ANIMATION_ENDING, this.cardFromDealerArrived);
            playSound("card", 1, !1)
        } else setTimeout(function() {
            s_oGame.changeState(STATE_GAME_PLAYER_TURN);
            z.displayMsg(TEXT_DISPLAY_MSG_USER_TURN);
            z.enable(!1, !0, !0)
        }, 1E3)
    };
    this._onEndHand = function() {
        for (var a = new CVector2(E.getX(), E.getY()), b = 0; b < A.length; b++) A[b].initRemoving(a), A[b].hideCard();
        z.clearCardValueText();
        c = 0;
        s_oGame.changeState(STATE_GAME_SHOW_WINNER);
        playSound("fiche_collect", 1, !1);
        v++;
        v === AD_SHOW_COUNTER && (v = 0, $(s_oMain).trigger("show_interlevel_ad"));
        $(s_oMain).trigger("save_score", [w.getCredit()])
    };
    this._onCardShown = function() {
        e === STATE_GAME_PLAYER_TURN && (4 === x ? (z.showHandValue(k, l), e = STATE_GAME_SHOWDOWN, s_oGame._showWin()) : s_oGame._showNextDealerCard())
    };
    this.setBet = function(a, b) {
        if (z.isResultPanelvisible()) z.disableBetFiches(), w.clearBet(), D = this.setBet, this._onEndHand();
        else {
            var d = s_oGameSettings.getFichesValues()[b];
            if (a === BET_ANTE) {
                c = 0;
                G.hide();
                var e = w.getBetAnte() + d;
                if (2 * e > w.getCredit() - d) {
                    z.displayMsg(TEXT_NO_MONEY_FOR_RAISE);
                    return
                }
                if (e > f) {
                    h.show(TEXT_ERROR_MAX_BET);
                    return
                }
            } else e = 2 * w.getBetAnte();
            $(s_oMain).trigger("bet_placed", e);
            a === BET_ANTE ? (w.decreaseCredit(d), L += d, w.betAnte(d), z.enable(!0, !1, !1)) : (w.decreaseCredit(e), L += e, w.betRaise());
            z.refreshCredit(w.getCredit())
        }
    };
    this._gameOver = function() {
        T.show()
    };
    this._calculateTotalWin = function() {
        n = k === NO_HAND && "dealer" !== p ? 2 * w.getBetAnte() + 2 * w.getBetAnte() :
            "player" === p ? 2 * w.getBetAnte() + 2 * w.getBetAnte() + 2 * w.getBetAnte() * PAYOUT_MULT[l] : "dealer" === p && k !== NO_HAND ? 0 : w.getBetAnte() + 2 * w.getBetAnte()
    };
    this.onRebet = function() {
        z.isResultPanelvisible() && (D = this.rebet, this._onEndHand())
    };
    this.onDeal = function() {
        r = w.getBetAnte() * PAYOUT_MULT[PAYOUT_MULT.length - 1];
        if (w.getBetAnte() < MIN_BET) h.show(TEXT_ERROR_MIN_BET), z.enableBetFiches(!1), z.enable(!1, !1, !1);
        else {
            y.removeAllChildren();
            if ((L + 2 * w.getBetAnte() < r ? WIN_OCCURRENCE + 1 : Math.floor(101 * Math.random())) > WIN_OCCURRENCE) {
                do {
                    K =
                        this._generateRandPlayerCards();
                    J = this._generateRandDealerCards();
                    var a = R.evaluate(J),
                        c = R.evaluate(K);
                    k = a.ret;
                    l = c.ret;
                    p = R.getWinnerComparingHands(c.sort_hand, a.sort_hand, l, k);
                    this._calculateTotalWin()
                } while (k === NO_HAND || "player" === p || "dealer_no_hand" === p)
            } else {
                do K = this._generateRandPlayerCards(), J = this._generateRandDealerCards(), a = R.evaluate(J), c = R.evaluate(K), k = a.ret, l = c.ret, p = R.getWinnerComparingHands(c.sort_hand, a.sort_hand, l, k), this._calculateTotalWin(); while ("dealer" === p || n > L + 2 * w.getBetAnte())
            }
            w.setPrevBet();
            playSound("card", 1, !1);
            d = !1;
            this.changeState(STATE_GAME_DEALING)
        }
    };
    this.onFold = function() {
        d = !0;
        p = "dealer";
        x = 0;
        this._showNextDealerCard()
    };
    this.onRaise = function() {
        e !== STATE_GAME_DISTRIBUTE_FICHES && (this.setBet(BET_RAISE, z.getFicheSelected()), x = 0, this._showNextDealerCard())
    };
    this._showNextDealerCard = function() {
        H[x].showCard();
        x++
    };
    this._generateRandDealerCards = function() {
        for (var a = [], c = 0; 5 > c; c++) a.push({
            fotogram: F[g].fotogram,
            rank: F[g].rank,
            suit: F[g].suit
        }), g++, this._checkDeckLength();
        return a
    };
    this._generateRandPlayerCards = function() {
        for (var a = [], c = 0; 5 > c; c++) a.push({
            fotogram: F[g].fotogram,
            rank: F[g].rank,
            suit: F[g].suit
        }), g++, this._checkDeckLength();
        return a
    };
    this._checkDeckLength = function() {
        g >= F.length && (F = s_oGameSettings.getShuffledCardDeck(), g = 0)
    };
    this.clearBets = function() {
        if (e === STATE_GAME_WAITING_FOR_BET) {
            z.enable(!1, !1, !1);
            var a = w.getStartingBet();
            0 < a && (w.clearBet(), w.increaseCredit(a), L -= a, z.refreshCredit(w.getCredit()), a = w.checkIfRebetIsPossible(), z.enableBetFiches(a))
        }
    };
    this.rebet = function() {
        this.clearBets();
        var a = w.rebet();
        L -= a;
        z.enable(!0, !1, !1);
        z.refreshCredit(w.getCredit());
        c = BET_TIME
    };
    this.onExit = function() {
        this.unload();
        $(s_oMain).trigger("save_score", [w.getCredit()]);
        $(s_oMain).trigger("end_session");
        $(s_oMain).trigger("share_event", w.getCredit());
        s_oMain.gotoMenu()
    };
    this.getState = function() {
        return e
    };
    this._updateDealing = function() {
        for (var a = 0; a < A.length; a++) A[a].update()
    };
    this._updateFiches = function() {
        w.updateFichesController()
    };
    this._updateShowWinner = function() {
        for (var a =
                0; a < A.length; a++) A[a].update();
        c += s_iTimeElaps;
        c > TIME_END_HAND && (c = 0, a = w.checkIfRebetIsPossible(), this.reset(a), z.reset(), w.getCredit() < s_oGameSettings.getFichesValueAt(0) ? (this._gameOver(), this.changeState(-1)) : w.getCredit() < s_oGameSettings.getFichesValueAt(0) ? (this._gameOver(), this.changeState(-1)) : (this.changeState(STATE_GAME_WAITING_FOR_BET), D.call(this, 0, z.getFicheSelected())))
    };
    this.update = function() {
        if (!1 !== b) switch (e) {
            case STATE_GAME_WAITING_FOR_BET:
                c += s_iTimeElaps;
                6E3 < c && (c = 0, G.isVisible() ||
                    0 !== w.getBetAnte() || G.show(1));
                break;
            case STATE_GAME_DEALING:
                this._updateDealing();
                break;
            case STATE_GAME_DISTRIBUTE_FICHES:
                this._updateFiches();
                break;
            case STATE_GAME_SHOW_WINNER:
                this._updateShowWinner()
        }
    };
    s_oGame = this;
    TOTAL_MONEY = a.money;
    MIN_BET = a.min_bet;
    MAX_BET = a.max_bet;
    MULTIPLIERS = a.multiplier;
    BET_TIME = a.bet_time;
    BLACKJACK_PAYOUT = a.blackjack_payout;
    WIN_OCCURRENCE = a.win_occurrence;
    BET_OCCURRENCE = a.bet_occurrence;
    var L = a.game_cash;
    PAYOUT_MULT = a.payout;
    TIME_END_HAND = a.time_show_hand;
    AD_SHOW_COUNTER =
        a.ad_show_counter;
    this._init()
}
var s_oGame, s_oTweenController;

function CInterface(a) {
    var b, d, c, f, e, g, m, r, n, x, k, l, v, p, D, A = null,
        H, F, O, N, K, J, S, u, P, I = null,
        Q = null;
    this._init = function(a) {
        var y = s_oSpriteLibrary.getSprite("but_exit");
        c = CANVAS_WIDTH - y.width / 2 - 10;
        f = y.height / 2 + 10;
        n = new CGfxButton(c, f, y, s_oStage);
        n.addEventListener(ON_MOUSE_UP, this._onExit, this);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) e = n.getX() - y.width - 10, g = y.height / 2 + 10, A = new CToggle(e, g, s_oSpriteLibrary.getSprite("audio_icon"), s_bAudioActive, s_oStage), A.addEventListener(ON_MOUSE_UP, this._onAudioToggle,
            this);
        y = window.document;
        var E = y.documentElement;
        I = E.requestFullscreen || E.mozRequestFullScreen || E.webkitRequestFullScreen || E.msRequestFullscreen;
        Q = y.exitFullscreen || y.mozCancelFullScreen || y.webkitExitFullscreen || y.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (I = !1);
        I && screenfull.enabled && (y = s_oSpriteLibrary.getSprite("but_fullscreen"), null === A ? (b = n.getX() - y.width / 2 - 10, d = y.height / 2 + 10) : (b = e - y.width / 2 - 10, d = y.height / 2 + 10), P = new CToggle(b, d, y, s_bFullscreen, s_oStage), P.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease,
            this));
        y = createBitmap(s_oSpriteLibrary.getSprite("display_bg"));
        y.x = 290;
        y.y = 6;
        s_oStage.addChild(y);
        y = s_oSpriteLibrary.getSprite("gui_bg");
        E = createBitmap(y);
        E.y = CANVAS_HEIGHT - y.height;
        s_oStage.addChild(E);
        y = s_oSpriteLibrary.getSprite("but_clear");
        x = new CGfxButton(830, CANVAS_HEIGHT - y.height / 2, y, s_oStage);
        x.disable();
        x.addEventListener(ON_MOUSE_UP, this._onButClearRelease, this);
        y = s_oSpriteLibrary.getSprite("but_rebet");
        k = new CGfxButton(890, CANVAS_HEIGHT - y.height / 2, y, s_oStage);
        k.disable();
        k.addEventListener(ON_MOUSE_UP,
            this._onButRebetRelease, this);
        y = s_oSpriteLibrary.getSprite("but_generic");
        v = new CTextButton(1012, CANVAS_HEIGHT - y.height / 2, y, TEXT_DEAL, FONT_GAME_1, "#ffffff", 30, s_oStage);
        v.addEventListener(ON_MOUSE_UP, this._onButDealRelease, this);
        y = s_oSpriteLibrary.getSprite("but_generic");
        p = new CTextButton(1196, CANVAS_HEIGHT - y.height / 2, y, TEXT_RAISE, FONT_GAME_1, "#ffffff", 30, s_oStage);
        p.addEventListener(ON_MOUSE_UP, this._onButRaiseRelease, this);
        y = s_oSpriteLibrary.getSprite("but_generic");
        D = new CTextButton(1380, CANVAS_HEIGHT -
            y.height / 2, y, TEXT_FOLD, FONT_GAME_1, "#ffffff", 30, s_oStage);
        D.addEventListener(ON_MOUSE_UP, this._onButFoldRelease, this);
        POS_BET[BET_ANTE] = {
            x: CANVAS_WIDTH / 2 - 100,
            y: 440
        };
        POS_BET[BET_RAISE] = {
            x: CANVAS_WIDTH / 2 + 100,
            y: 440
        };
        l = new CGfxButton(POS_BET[BET_ANTE].x, POS_BET[BET_ANTE].y, s_oSpriteLibrary.getSprite("bet_ante"), s_oStage);
        l.addEventListener(ON_MOUSE_UP, this._onButAnteRelease, this);
        E = s_oSpriteLibrary.getSprite("bet_raise");
        var G = createBitmap(E);
        G.x = POS_BET[BET_RAISE].x;
        G.y = POS_BET[BET_RAISE].y;
        G.regX = E.width /
            2;
        G.regY = E.height / 2;
        s_oStage.addChild(G);
        N = new createjs.Text("", "24px " + FONT_GAME_2, "#ffde00");
        N.x = 412;
        N.y = 16;
        N.lineWidth = 150;
        N.textAlign = "left";
        N.lineHeight = 20;
        s_oStage.addChild(N);
        K = new createjs.Text("", "19px " + FONT_GAME_2, "#ffde00");
        K.x = 412;
        K.y = 66;
        N.lineWidth = 180;
        K.textAlign = "left";
        K.lineHeight = 18;
        s_oStage.addChild(K);
        F = new createjs.Text("", "21px " + FONT_GAME_1, "#fff");
        F.x = CANVAS_WIDTH / 2;
        F.y = 290;
        F.textAlign = "center";
        s_oStage.addChild(F);
        O = new createjs.Text("", "21px " + FONT_GAME_1, "#fff");
        O.x = CANVAS_WIDTH /
            2;
        O.y = 650;
        O.textAlign = "center";
        s_oStage.addChild(O);
        E = new createjs.Text(TEXT_MONEY + ":", "30px " + FONT_GAME_2, "#ffde00");
        E.x = 320;
        E.y = CANVAS_HEIGHT - 84;
        E.textAlign = "left";
        s_oStage.addChild(E);
        H = new createjs.Text(TEXT_CURRENCY + a.toFixed(3), "30px " + FONT_GAME_2, "#ffde00");
        H.x = 410;
        H.y = CANVAS_HEIGHT - 84;
        H.textAlign = "left";
        s_oStage.addChild(H);
        a = [{
            x: 337,
            y: CANVAS_HEIGHT - 24
        }, {
            x: 417,
            y: CANVAS_HEIGHT - 24
        }, {
            x: 497,
            y: CANVAS_HEIGHT - 24
        }, {
            x: 577,
            y: CANVAS_HEIGHT - 24
        }, {
            x: 657,
            y: CANVAS_HEIGHT - 24
        }, {
            x: 737,
            y: CANVAS_HEIGHT - 24
        }];
        r = [];
        E = s_oGameSettings.getFichesValues();
        for (G = 0; G < NUM_FICHES; G++) y = s_oSpriteLibrary.getSprite("fiche_" + G), r[G] = new CGfxButton(a[G].x, a[G].y, y, s_oStage), r[G].addEventListenerWithParams(ON_MOUSE_UP, this._onFicheClicked, this, [E[G], G]);
        a = s_oSpriteLibrary.getSprite("fiche_highlight");
        J = createBitmap(a);
        J.regX = a.width / 2;
        J.regY = a.height / 2;
        J.x = r[0].getX();
        J.y = r[0].getY();
        s_oStage.addChild(J);
        m = 0;
        FICHE_WIDTH = y.width;
        S = new CAnimText(CANVAS_WIDTH, CANVAS_HEIGHT, s_oStage);
        u = new CPaytablePanel(CANVAS_WIDTH - 303, 450,
            s_oStage);
        this.disableButtons();
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.unload = function() {
        n.unload();
        n = null;
        !1 === DISABLE_SOUND_MOBILE && (A.unload(), A = null);
        I && screenfull.enabled && P.unload();
        x.unload();
        v.unload();
        k.unload();
        s_oInterface = null
    };
    this.refreshButtonPos = function(a, k) {
        n.setPosition(c - a, k + f);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || A.setPosition(e - a, k + g);
        I && screenfull.enabled && P.setPosition(b - a, d + k);
        u.refreshButtonPos(a, k)
    };
    this.reset = function() {
        this.disableButtons()
    };
    this.enableBetFiches =
        function(a) {
            for (var c = 0; c < NUM_FICHES; c++) r[c].enable();
            x.enable();
            l.enable();
            a && k.enable()
        };
    this.disableBetFiches = function() {
        for (var a = 0; a < NUM_FICHES; a++) r[a].disable();
        x.disable();
        k.disable();
        l.disable()
    };
    this.disableButtons = function() {
        v.disable();
        D.disable();
        p.disable()
    };
    this.enable = function(a, c, b) {
        a ? v.enable() : v.disable();
        c ? p.enable() : p.disable();
        b ? D.enable() : D.disable()
    };
    this.refreshCredit = function(a) {
        H.text = TEXT_CURRENCY + a.toFixed(3)
    };
    this.refreshCardValue = function(a, c) {
        F.text = "" + a;
        O.text = "" +
            c
    };
    this.displayMsg = function(a, c) {
        N.text = a;
        K.text = c
    };
    this.clearCardValueText = function() {
        F.text = "";
        O.text = "";
        S.hide()
    };
    this._onFicheClicked = function(a) {
        J.x = r[a[1]].getX();
        J.y = r[a[1]].getY();
        m = a[1]
    };
    this.showResultText = function(a) {
        S.show({
            x: -200,
            y: CANVAS_HEIGHT / 2 + 160
        }, {
            x: CANVAS_WIDTH / 2 - 450,
            y: CANVAS_HEIGHT / 2 + 160
        }, a)
    };
    this.showHandValue = function(a, c) {
        F.text = TEXT_EVALUATOR[a];
        O.text = TEXT_EVALUATOR[c]
    };
    this._onButClearRelease = function() {
        s_oGame.clearBets()
    };
    this._onButRebetRelease = function() {
        k.disable();
        s_oGame.onRebet()
    };
    this._onButAnteRelease = function() {
        s_oGame.setBet(BET_ANTE, m)
    };
    this._onButDealRelease = function() {
        this.disableBetFiches();
        this.disableButtons();
        s_oGame.onDeal()
    };
    this._onButRaiseRelease = function() {
        this.disableBetFiches();
        this.disableButtons();
        s_oGame.onRaise()
    };
    this._onButFoldRelease = function() {
        this.disableBetFiches();
        this.disableButtons();
        s_oGame.onFold()
    };
    this._onExit = function() {
        s_oGame.onExit()
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this.resetFullscreenBut = function() {
        I && screenfull.enabled && P.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? Q.call(window.document) : I.call(window.document.documentElement);
        sizeHandler()
    };
    this.getFicheSelected = function() {
        return m
    };
    this.isResultPanelvisible = function() {
        return S.isVisible()
    };
    s_oInterface = this;
    this._init(a);
    return this
}
var s_oInterface = null;

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

function CSeat() {
    var a, b, d, c, f, e, g, m, r, n;
    this._init = function() {
        m = new createjs.Container;
        m.x = CANVAS_WIDTH / 2 - 160;
        m.y = 586;
        s_oStage.addChild(m);
        n = [];
        for (var c = 0; 2 > c; c++) n[c] = new CFichesController;
        b = a = f = 0;
        this.reset();
        r = new CVector2;
        r.set(0, 0);
        g = new CVector2(r.getX(), r.getY())
    };
    this.unload = function() {
        s_oStage.removeChild(m)
    };
    this.addEventListener = function(a, c, b) {};
    this.reset = function() {
        for (var a = c = 0; a < n.length; a++) n[a].reset();
        e = [];
        for (a = 0; 3 > a; a++) e[a] = []
    };
    this.clearBet = function() {
        b = a = 0;
        e = [];
        for (var c =
                0; c < n.length; c++) n[c].reset(), e[c] = []
    };
    this.resetBet = function() {
        b = a = 0
    };
    this.setCredit = function(a) {
        f = a
    };
    this.increaseCredit = function(a) {
        f += a
    };
    this.betAnte = function(c) {
        a += c;
        n[0].createFichesPile(a, POS_BET[0].x, POS_BET[0].y)
    };
    this.betRaise = function() {
        b = 2 * a;
        n[1].createFichesPile(b, POS_BET[1].x, POS_BET[1].y)
    };
    this.setPrevBet = function() {
        d = a
    };
    this.decreaseCredit = function(a) {
        f -= a;
        f = parseFloat(f.toFixed(2))
    };
    this.refreshFiches = function(a, c, b, d, f) {
        e[f].push({
            value: a,
            index: c
        });
        n[f].refreshFiches(e[f], b, d)
    };
    this.initMovement = function(a, c, b) {
        n[a].initMovement(c, b)
    };
    this.newCardDealed = function() {
        c++
    };
    this.rebet = function() {
        b = 0;
        a = d;
        this.decreaseCredit(d);
        n[BET_ANTE].createFichesPile(d, POS_BET[BET_ANTE].x, POS_BET[BET_ANTE].y);
        return d
    };
    this.checkIfRebetIsPossible = function() {
        for (var a = 0, c = 0; c < n.length; c++) {
            var b = parseFloat(n[c].getPrevBet().toFixed(2));
            a += b
        }
        return a > f ? !1 : !0
    };
    this.updateFichesController = function() {
        for (var a = 0; a < n.length; a++) n[a].update()
    };
    this.getAttachCardOffset = function() {
        g.set(m.x + r.getX() +
            (CARD_WIDTH + 14) * c, m.y + r.getY());
        return g
    };
    this.getBetAnte = function() {
        return a
    };
    this.getBetRaise = function() {
        return b
    };
    this.getCredit = function() {
        return f
    };
    this.getCardOffset = function() {
        return r
    };
    this.getPotentialWin = function(a) {
        return (void 0)[a]
    };
    this.getStartingBet = function() {
        for (var a = 0, c = 0; c < n.length; c++) a += n[c].getValue();
        return a
    };
    this._init()
}

function CFichesController() {
    var a, b, d, c, f, e, g, m, r, n;
    this._init = function() {
        m = new createjs.Container;
        s_oStage.addChild(m);
        f = new CVector2;
        f.set(m.x, m.y);
        r = new createjs.Container;
        s_oStage.addChild(r);
        n = new createjs.Text("", "28px " + FONT_GAME_1, "#fff");
        n.textAlign = "center";
        r.addChild(n);
        d = c = b = 0;
        a = !1
    };
    this.addEventListener = function(a, c, b) {};
    this.reset = function() {
        a = !1;
        d = 0;
        m.removeAllChildren();
        m.x = f.getX();
        m.y = f.getY();
        n.text = ""
    };
    this.setPrevValue = function(a) {
        c = a
    };
    this.refreshFiches = function(a, c, b) {
        a = a.sortOn("value",
            "index");
        for (var f = c, e = b + 10, g = d = 0, k = 0; k < a.length; k++) {
            var l = s_oSpriteLibrary.getSprite("fiche_" + a[k].index);
            l = createBitmap(l);
            l.scaleX = .7;
            l.scaleY = .7;
            m.addChild(l);
            l.x = f - 12;
            l.y = e;
            e -= 5;
            g++;
            9 < g && (g = 0, f += FICHE_WIDTH, e = b);
            d += a[k].value
        }
        playSound("chip", 1, !1);
        n.x = c;
        n.y = b + 35;
        n.text = d.toFixed(2) + TEXT_CURRENCY
    };
    this.createFichesPile = function(a, c, b) {
        this.reset();
        var d = s_oGameSettings.getFichesValues(),
            f = [];
        do {
            for (var e = d[d.length - 1], g = d.length - 1; e > a;) g--, e = d[g];
            g = Math.floor(a / e);
            for (var k = 0; k < g; k++) f.push({
                value: e,
                index: s_oGameSettings.getIndexForFiches(e)
            });
            e = Math.floor(a / e) === a / e ? 0 : a % e;
            a = e.toFixed(2)
        } while (0 < e);
        this.refreshFiches(f, c, b)
    };
    this.initMovement = function(b, f) {
        c = d;
        e = new CVector2(m.x, m.y);
        g = new CVector2(b, f);
        n.text = "";
        a = !0
    };
    this.getValue = function() {
        return d
    };
    this.getPrevBet = function() {
        return c
    };
    this.update = function() {
        if (a)
            if (b += s_iTimeElaps, b > TIME_FICHES_MOV) b = 0, a = !1;
            else {
                var c = easeInOutCubic(b, 0, 1, TIME_FICHES_MOV),
                    d = new CVector2;
                d = tweenVectors(e, g, c, d);
                m.x = d.getX();
                m.y = d.getY()
            }
    };
    this._init()
}

function CVector2(a, b) {
    var d, c;
    this._init = function(a, b) {
        d = a;
        c = b
    };
    this.add = function(a, b) {
        d += a;
        c += b
    };
    this.addV = function(a) {
        d += a.getX();
        c += a.getY()
    };
    this.scalarDivision = function(a) {
        d /= a;
        c /= a
    };
    this.subV = function(a) {
        d -= a.getX();
        c -= a.getY()
    };
    this.scalarProduct = function(a) {
        d *= a;
        c *= a
    };
    this.invert = function() {
        d *= -1;
        c *= -1
    };
    this.dotProduct = function(a) {
        return d * a.getX() + c * a.getY()
    };
    this.set = function(a, b) {
        d = a;
        c = b
    };
    this.setV = function(a) {
        d = a.getX();
        c = a.getY()
    };
    this.length = function() {
        return Math.sqrt(d * d + c * c)
    };
    this.length2 =
        function() {
            return d * d + c * c
        };
    this.normalize = function() {
        var a = this.length();
        0 < a && (d /= a, c /= a)
    };
    this.getNormalize = function(a) {
        this.length();
        a.set(d, c);
        a.normalize()
    };
    this.rot90CCW = function() {
        var a = d;
        d = -c;
        c = a
    };
    this.rot90CW = function() {
        var a = d;
        d = c;
        c = -a
    };
    this.getRotCCW = function(a) {
        a.set(d, c);
        a.rot90CCW()
    };
    this.getRotCW = function(a) {
        a.set(d, c);
        a.rot90CW()
    };
    this.ceil = function() {
        d = Math.ceil(d);
        c = Math.ceil(c)
    };
    this.round = function() {
        d = Math.round(d);
        c = Math.round(c)
    };
    this.toString = function() {
        return "Vector2: " + d + ", " +
            c
    };
    this.print = function() {
        trace("Vector2: " + d + ", " + c)
    };
    this.getX = function() {
        return d
    };
    this.getY = function() {
        return c
    };
    this._init(a, b)
}

function CGameSettings() {
    var a, b, d;
    this._init = function() {
        var c = -1;
        a = [];
        for (var b = 0; 52 > b; b++) {
            var e = (b + 1) % 13;
            1 === e ? (e = 14, c++) : 0 === e && (e = 13);
            a.push({
                fotogram: b,
                rank: e,
                suit: c
            })
        }
        d = [.1, 1, 5, 10, 25, 100]
    };
    this.getFichesValues = function() {
        return d
    };
    this.getFichesValueAt = function(a) {
        return d[a]
    };
    this.getIndexForFiches = function(a) {
        for (var c = 0, b = 0; b < d.length; b++) d[b] === a && (c = b);
        return c
    };
    this.generateFichesPile = function(a) {
        var c = [],
            b = d.length - 1,
            g = d[b];
        do {
            var m = a % g;
            m = CMath.roundDecimal(m, 1);
            a = Math.floor(a / g);
            for (var r =
                    0; r < a; r++) c.push(g);
            b--;
            g = d[b];
            a = m
        } while (0 < m && -1 < b);
        return c
    };
    this.timeToString = function(a) {
        a = Math.round(a / 1E3);
        var c = Math.floor(a / 60);
        a -= 60 * c;
        var b = "";
        b = 10 > c ? b + ("0" + c + ":") : b + (c + ":");
        return 10 > a ? b + ("0" + a) : b + a
    };
    this.getShuffledCardDeck = function() {
        for (var c = [], d = 0; d < a.length; d++) c[d] = a[d];
        for (b = []; 0 < c.length;) b.push(c.splice(Math.round(Math.random() * (c.length - 1)), 1)[0]);
        return b
    };
    this.getCardDeck = function() {
        return a
    };
    this._init()
}
var TYPE_LINEAR = 0,
    TYPE_OUT_CUBIC = 1,
    TYPE_IN_CUBIC = 2,
    TYPE_OUT_BACK = 3,
    TYPE_IN_BACK = 4;

function ease(a, b, d, c, f, e) {
    switch (a) {
        case TYPE_LINEAR:
            var g = easeLinear(b, d, c, f, e);
            break;
        case TYPE_IN_CUBIC:
            g = easeInCubic(b, d, c, f, e);
            break;
        case TYPE_OUT_CUBIC:
            g = easeOutCubic(b, d, c, f, e);
            break;
        case TYPE_IN_BACK:
            g = easeInBack(b, d, c, f, e);
            break;
        case TYPE_OUT_BACK:
            g = easeInBack(b, d, c, f, e)
    }
    return g
}

function easeOutBounce(a, b, d, c) {
    return (a /= c) < 1 / 2.75 ? 7.5625 * d * a * a + b : a < 2 / 2.75 ? d * (7.5625 * (a -= 1.5 / 2.75) * a + .75) + b : a < 2.5 / 2.75 ? d * (7.5625 * (a -= 2.25 / 2.75) * a + .9375) + b : d * (7.5625 * (a -= 2.625 / 2.75) * a + .984375) + b
}

function easeInBounce(a, b, d, c) {
    return d - easeOutBounce(c - a, 0, d, c) + b
}

function easeInOutBounce(a, b, d, c) {
    return a < c / 2 ? .5 * easeInBounce(2 * a, 0, d, c) + b : .5 * easeOutBounce(2 * a - c, 0, d, c) + .5 * d + b
}

function easeInCirc(a, b, d, c) {
    return -d * (Math.sqrt(1 - (a /= c) * a) - 1) + b
}

function easeOutCirc(a, b, d, c) {
    return d * Math.sqrt(1 - (a = a / c - 1) * a) + b
}

function easeInOutCirc(a, b, d, c) {
    return 1 > (a /= c / 2) ? -d / 2 * (Math.sqrt(1 - a * a) - 1) + b : d / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + b
}

function easeInCubic(a, b, d, c, f) {
    return d * (a /= c) * a * a + b
}

function easeOutCubic(a, b, d, c, f) {
    return d * ((a = a / c - 1) * a * a + 1) + b
}

function easeInOutCubic(a, b, d, c, f) {
    return 1 > (a /= c / 2) ? d / 2 * a * a * a + b : d / 2 * ((a -= 2) * a * a + 2) + b
}

function easeInElastic(a, b, d, c, f, e, g) {
    if (0 == a) return b;
    if (1 == (a /= c)) return b + d;
    g || (g = .3 * c);
    !e || e < Math.abs(d) ? (e = d, f = g / 4) : f = g / (2 * Math.PI) * Math.asin(d / e);
    return -(e * Math.pow(2, 10 * --a) * Math.sin(2 * (a * c - f) * Math.PI / g)) + b
}

function easeOutElastic(a, b, d, c, f, e, g) {
    if (0 == a) return b;
    if (1 == (a /= c)) return b + d;
    g || (g = .3 * c);
    !e || e < Math.abs(d) ? (e = d, f = g / 4) : f = g / (2 * Math.PI) * Math.asin(d / e);
    return e * Math.pow(2, -10 * a) * Math.sin(2 * (a * c - f) * Math.PI / g) + d + b
}

function easeInOutElastic(a, b, d, c, f, e, g) {
    if (0 == a) return b;
    if (1 == (a /= c)) return b + d;
    g || (g = .3 * c);
    !e || e < Math.abs(d) ? (e = d, f = g / 4) : f = g / (2 * Math.PI) * Math.asin(d / e);
    return 1 > a ? -.5 * e * Math.pow(2, 10 * --a) * Math.sin(2 * (a * c - f) * Math.PI / g) + b : e * Math.pow(2, -10 * --a) * Math.sin(2 * (a * c - f) * Math.PI / g) * .5 + d + b
}

function easeInExpo(a, b, d, c) {
    return 0 == a ? b : d * Math.pow(2, 10 * (a / c - 1)) + b
}

function easeOutExpo(a, b, d, c) {
    return a == c ? b + d : d * (-Math.pow(2, -10 * a / c) + 1) + b
}

function easeInOutExpo(a, b, d, c) {
    return 0 == a ? b : a == c ? b + d : 1 > (a /= c / 2) ? d / 2 * Math.pow(2, 10 * (a - 1)) + b : d / 2 * (-Math.pow(2, -10 * --a) + 2) + b
}

function easeLinear(a, b, d, c) {
    return d * a / c + b
}

function easeInQuad(a, b, d, c) {
    return d * (a /= c) * a + b
}

function easeOutQuad(a, b, d, c) {
    return -d * (a /= c) * (a - 2) + b
}

function easeInOutQuad(a, b, d, c) {
    return 1 > (a /= c / 2) ? d / 2 * a * a + b : -d / 2 * (--a * (a - 2) - 1) + b
}

function easeInQuart(a, b, d, c) {
    return d * (a /= c) * a * a * a + b
}

function easeOutQuart(a, b, d, c) {
    return -d * ((a = a / c - 1) * a * a * a - 1) + b
}

function easeInOutQuart(a, b, d, c) {
    return 1 > (a /= c / 2) ? d / 2 * a * a * a * a + b : -d / 2 * ((a -= 2) * a * a * a - 2) + b
}

function easeInQuint(a, b, d, c) {
    return d * (a /= c) * a * a * a * a + b
}

function easeOutQuint(a, b, d, c) {
    return d * ((a = a / c - 1) * a * a * a * a + 1) + b
}

function easeInOutQuint(a, b, d, c) {
    return 1 > (a /= c / 2) ? d / 2 * a * a * a * a * a + b : d / 2 * ((a -= 2) * a * a * a * a + 2) + b
}

function easeInSine(a, b, d, c) {
    return -d * Math.cos(a / c * (Math.PI / 2)) + d + b
}

function easeOutSine(a, b, d, c) {
    return d * Math.sin(a / c * (Math.PI / 2)) + b
}

function easeInOutSine(a, b, d, c) {
    return -d / 2 * (Math.cos(Math.PI * a / c) - 1) + b
}

function easeInBack(a, b, d, c) {
    return d * (a /= c) * a * (2.70158 * a - 1.70158) + b
}

function easeOutBack(a, b, d, c) {
    return d * ((a = a / c - 1) * a * (2.70158 * a + 1.70158) + 1) + b
}

function CCard(a, b, d) {
    var c, f, e = -1,
        g, m, r, n, x, k, l, v, p, D;
    this._init = function(a, c, b) {
        D = b;
        b = {
            images: [s_oSpriteLibrary.getSprite("card_spritesheet")],
            frames: {
                width: CARD_WIDTH,
                height: CARD_HEIGHT,
                regX: CARD_WIDTH / 2,
                regY: CARD_HEIGHT / 2
            },
            animations: {
                card_1_1: [0],
                card_1_2: [1],
                card_1_3: [2],
                card_1_4: [3],
                card_1_5: [4],
                card_1_6: [5],
                card_1_7: [6],
                card_1_8: [7],
                card_1_9: [8],
                card_1_10: [9],
                card_1_J: [10],
                card_1_Q: [11],
                card_1_K: [12],
                card_2_1: [13],
                card_2_2: [14],
                card_2_3: [15],
                card_2_4: [16],
                card_2_5: [17],
                card_2_6: [18],
                card_2_7: [19],
                card_2_8: [20],
                card_2_9: [21],
                card_2_10: [22],
                card_2_J: [23],
                card_2_Q: [24],
                card_2_K: [25],
                card_3_1: [26],
                card_3_2: [27],
                card_3_3: [28],
                card_3_4: [29],
                card_3_5: [30],
                card_3_6: [31],
                card_3_7: [32],
                card_3_8: [33],
                card_3_9: [34],
                card_3_10: [35],
                card_3_J: [36],
                card_3_Q: [37],
                card_3_K: [38],
                card_4_1: [39],
                card_4_2: [40],
                card_4_3: [41],
                card_4_4: [42],
                card_4_5: [43],
                card_4_6: [44],
                card_4_7: [45],
                card_4_8: [46],
                card_4_9: [47],
                card_4_10: [48],
                card_4_J: [49],
                card_4_Q: [50],
                card_4_K: [51],
                back: [52]
            }
        };
        b = new createjs.SpriteSheet(b);
        p = createSprite(b,
            "back", CARD_WIDTH / 2, CARD_HEIGHT / 2, CARD_WIDTH, CARD_HEIGHT);
        p.x = a;
        p.y = c;
        p.rotation = 120;
        p.stop();
        D.addChild(p);
        l = [];
        v = []
    };
    this.unload = function() {
        k = x = null;
        D.removeChild(p)
    };
    this.addEventListener = function(a, c, b) {
        l[a] = c;
        v[a] = b
    };
    this.setInfo = function(a, b, d, l, p, v) {
        f = !1;
        n = 0;
        g = d;
        m = l;
        x = a;
        k = b;
        r = v;
        c = p;
        e = STATE_CARD_DEALING
    };
    this.initRemoving = function(a) {
        x = new CVector2(p.x, p.y);
        k = a;
        n = 0;
        e = STATE_CARD_REMOVING
    };
    this.setValue = function() {
        p.gotoAndStop(g);
        var a = this;
        createjs.Tween.get(p).to({
            scaleX: 1
        }, 100).call(function() {
            a.cardShown()
        })
    };
    this.showCard = function() {
        var a = this;
        createjs.Tween.get(p).to({
            scaleX: .1
        }, 100).call(function() {
            a.setValue()
        })
    };
    this.hideCard = function() {
        var a = this;
        createjs.Tween.get(p).to({
            scaleX: .1
        }, 100).call(function() {
            a.setBack()
        })
    };
    this.setBack = function() {
        p.gotoAndStop("back");
        var a = this;
        createjs.Tween.get(p).to({
            scaleX: 1
        }, 100).call(function() {
            a.cardHidden()
        })
    };
    this.cardShown = function() {
        l[ON_CARD_SHOWN] && l[ON_CARD_SHOWN].call(v[ON_CARD_SHOWN])
    };
    this.cardHidden = function() {
        f = !0
    };
    this.getValue = function() {
        return m
    };
    this.getFotogram = function() {
        return g
    };
    this._updateDealing = function() {
        n += s_iTimeElaps;
        if (n > TIME_CARD_DEALING) e = -1, n = 0, p.x = k.getX(), p.y = k.getY(), p.rotation = 360, l[ON_CARD_ANIMATION_ENDING] && l[ON_CARD_ANIMATION_ENDING].call(v[ON_CARD_ANIMATION_ENDING], this, c, r);
        else {
            this.visible = !0;
            var a = easeInOutCubic(n, 0, 1, TIME_CARD_DEALING),
                b = new CVector2;
            b = tweenVectors(x, k, a, b);
            p.x = b.getX();
            p.y = b.getY();
            p.rotation = 120 + 24E3 * a / 100
        }
    };
    this._updateRemoving = function() {
        n += s_iTimeElaps;
        if (n > TIME_CARD_REMOVE) n = 0, f = !1, e = -1,
            this.unload();
        else {
            var a = easeInOutCubic(n, 0, 1, TIME_CARD_REMOVE),
                b = new CVector2;
            b = tweenVectors(x, k, a, b);
            p.x = b.getX();
            p.y = b.getY();
            p.rotation = 4500 * a / 100
        }
    };
    this.update = function() {
        switch (e) {
            case STATE_CARD_DEALING:
                this._updateDealing();
                break;
            case STATE_CARD_REMOVING:
                !0 === f && this._updateRemoving()
        }
    };
    s_oCard = this;
    this._init(a, b, d)
}
var s_oCard;

function CGameOver() {
    var a, b, d, c;
    this._init = function() {
        c = new createjs.Container;
        s_oStage.addChild(c);
        c.on("click", function() {});
        var f = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
        c.addChild(f);
        a = new createjs.Text(TEXT_NO_MONEY, "32px " + FONT_GAME_1, "#fff");
        a.textAlign = "center";
        a.x = CANVAS_WIDTH / 2;
        a.y = 290;
        a.lineWidth = 300;
        a.shadow = new createjs.Shadow("#000000", 2, 2, 2);
        c.addChild(a);
        b = new CTextButton(CANVAS_WIDTH / 2 - 100, 450, s_oSpriteLibrary.getSprite("but_game_bg"), TEXT_RECHARGE, FONT_GAME_1, "#fff",
            14, c);
        b.addEventListener(ON_MOUSE_UP, this._onRecharge, this);
        d = new CTextButton(CANVAS_WIDTH / 2 + 100, 450, s_oSpriteLibrary.getSprite("but_game_bg"), TEXT_EXIT, FONT_GAME_1, "#fff", 14, c);
        d.addEventListener(ON_MOUSE_UP, this._onExit, this);
        this.hide()
    };
    this.unload = function() {
        b.unload();
        d.unload();
        c.off("click", function() {})
    };
    this.show = function() {
        c.visible = !0;
        $(s_oMain).trigger("end_session")
    };
    this.hide = function() {
        c.visible = !1
    };
    this._onRecharge = function() {
        $(s_oMain).trigger("recharge")
    };
    this._onExit = function() {
        s_oGame.onExit()
    };
    this._init()
}

function CMsgBox() {
    var a, b, d, c;
    this._init = function() {
        a = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
        d = new createjs.Text("", "34px " + FONT_GAME_1, "#000");
        d.x = CANVAS_WIDTH / 2 + 2;
        d.y = CANVAS_HEIGHT / 2 - 28;
        d.textAlign = "center";
        d.lineWidth = 400;
        d.textBaseline = "middle";
        b = new createjs.Text("", "34px " + FONT_GAME_1, "#ffffff");
        b.x = CANVAS_WIDTH / 2;
        b.y = CANVAS_HEIGHT / 2 - 30;
        b.textAlign = "center";
        b.lineWidth = 400;
        b.textBaseline = "middle";
        c = new createjs.Container;
        c.alpha = 0;
        c.visible = !1;
        c.addChild(a, d, b);
        s_oStage.addChild(c)
    };
    this.unload =
        function() {
            c.off("mousedown", this._onExit)
        };
    this._initListener = function() {
        c.on("mousedown", this._onExit)
    };
    this.show = function(a) {
        d.text = a;
        b.text = a;
        c.visible = !0;
        var e = this;
        createjs.Tween.get(c).to({
            alpha: 1
        }, 500).call(function() {
            e._initListener()
        });
        setTimeout(function() {
            e._onExit()
        }, 3E3)
    };
    this._onExit = function() {
        c.visible && (c.off("mousedown"), c.visible = !1)
    };
    this._init();
    return this
}

function CHandEvaluator() {
    var a, b, d;
    this.evaluate = function(c) {
        b = [];
        a = [];
        for (var f = 0; f < c.length; f++) b[f] = {
            rank: c[f].rank,
            suit: c[f].suit
        }, a[f] = {
            rank: c[f].rank,
            suit: c[f].suit
        };
        b.sort(this.compareRank);
        a.sort(this.compareRank);
        d = [0, 1, 2, 3, 4];
        return {
            ret: this.rankHand(),
            sort_hand: a
        }
    };
    this.rankHand = function() {
        return this._checkForRoyalFlush() ? ROYAL_FLUSH : this._checkForStraightFlush() ? STRAIGHT_FLUSH : this._checkForFourOfAKind() ? FOUR_OF_A_KIND : this._checkForFullHouse() ? FULL_HOUSE : this._checkForFlush() ? FLUSH :
            this._checkForStraight() ? STRAIGHT : this._checkForThreeOfAKind() ? THREE_OF_A_KIND : this._checkForTwoPair() ? TWO_PAIR : this._checkForOnePair() ? ONE_PAIR : this._checkHighCard() ? HIGH_CARD : NO_HAND
    };
    this._checkForRoyalFlush = function() {
        return this._isRoyalStraight() && this._isFlush() ? !0 : !1
    };
    this._checkForStraightFlush = function() {
        return this._isStraight() && this._isFlush() ? !0 : !1
    };
    this._checkForFourOfAKind = function() {
        return b[0].rank === b[3].rank ? (b.splice(4, 1), d.splice(4, 1), !0) : b[1].rank === b[4].rank ? (b.splice(0, 1),
            d.splice(0, 1), !0) : !1
    };
    this._checkForFullHouse = function() {
        return b[0].rank === b[1].rank && b[2].rank === b[4].rank || b[0].rank === b[2].rank && b[3].rank === b[4].rank ? !0 : !1
    };
    this._checkForFlush = function() {
        return this._isFlush() ? !0 : !1
    };
    this._checkForStraight = function() {
        return this._isStraight() ? !0 : !1
    };
    this._checkForThreeOfAKind = function() {
        return b[0].rank === b[1].rank && b[0].rank === b[2].rank ? (b.splice(3, 1), b.splice(3, 1), d.splice(3, 1), d.splice(3, 1), !0) : b[1].rank === b[2].rank && b[1].rank === b[3].rank ? (b.splice(0, 1),
            b.splice(3, 1), d.splice(0, 1), d.splice(3, 1), !0) : b[2].rank === b[3].rank && b[2].rank === b[4].rank ? (b.splice(0, 1), b.splice(0, 1), d.splice(0, 1), d.splice(0, 1), !0) : !1
    };
    this._checkForTwoPair = function() {
        return b[0].rank === b[1].rank && b[2].rank === b[3].rank ? (b.splice(4, 1), d.splice(4, 1), !0) : b[1].rank === b[2].rank && b[3].rank === b[4].rank ? (b.splice(0, 1), d.splice(0, 1), !0) : b[0].rank === b[1].rank && b[3].rank === b[4].rank ? (b.splice(2, 1), d.splice(2, 1), !0) : !1
    };
    this._checkForOnePair = function() {
        for (var a = 0; 4 > a; a++)
            if (b[a].rank ===
                b[a + 1].rank) {
                var f = b[a],
                    e = b[a + 1];
                b = [];
                b.push(f);
                b.push(e);
                d = [a, a + 1];
                return !0
            }
        return !1
    };
    this._checkHighCard = function() {
        for (var a = !1, d = !1, e = 0; 5 > e; e++) b[e].rank === CARD_ACE && (a = !0), b[e].rank === CARD_KING && (d = !0);
        return a || d ? !0 : !1
    };
    this._isFlush = function() {
        return b[0].suit === b[1].suit && b[0].suit === b[2].suit && b[0].suit === b[3].suit && b[0].suit === b[4].suit ? !0 : !1
    };
    this._isRoyalStraight = function() {
        return b[0].rank === CARD_TEN && b[1].rank === CARD_JACK && b[2].rank === CARD_QUEEN && b[3].rank === CARD_KING && b[4].rank === CARD_ACE ?
            !0 : !1
    };
    this._isStraight = function() {
        var a = b[0].rank + 1 === b[1].rank && b[1].rank + 1 === b[2].rank && b[2].rank + 1 === b[3].rank;
        return a && b[0].rank === CARD_TWO && b[4].rank === CARD_ACE ? !0 : a && b[3].rank + 1 === b[4].rank ? !0 : !1
    };
    this.compareRank = function(a, b) {
        return a.rank < b.rank ? -1 : a.rank > b.rank ? 1 : 0
    };
    this.getWinnerComparingHands = function(a, b, d, g) {
        if (d === g) switch (d) {
            case STRAIGHT_FLUSH:
                return a[0].suit > b[0].suit ? "dealer" : a[0].suit < b[0].suit ? "player" : "standoff";
            case FOUR_OF_A_KIND:
                return a[1].rank > b[1].rank ? "player" : a[1].rank <
                    b[1].rank ? "dealer" : "standoff";
            case FULL_HOUSE:
                return a[4].rank > b[4].rank ? "player" : a[4].rank < b[4].rank ? "dealer" : "standoff";
            case FLUSH:
                return a[0].suit > b[0].suit ? "dealer" : a[0].suit < b[0].suit ? "player" : "standoff";
            case STRAIGHT:
                return a[4].rank > b[4].rank ? "player" : a[4].rank < b[4].rank ? "dealer" : "standoff";
            case THREE_OF_A_KIND:
                return a[2].rank > b[2].rank ? "player" : a[2].rank < b[2].rank ? "dealer" : "standoff";
            case TWO_PAIR:
                d = 0;
                for (g = a.length - 1; 0 < g; g--)
                    if (a[g].rank === a[g - 1].rank) {
                        d = a[g].rank;
                        break
                    }
                a = 0;
                for (g = b.length -
                    1; 0 < g; g--)
                    if (b[g].rank === b[g - 1].rank) {
                        a = b[g].rank;
                        break
                    }
                return d > a ? "player" : d < a ? "dealer" : "standoff";
            case ONE_PAIR:
                for (g = d = 0; g < a.length - 1; g++)
                    if (a[g].rank === a[g + 1].rank) {
                        d = a[g].rank;
                        break
                    }
                for (g = a = 0; g < b.length - 1; g++)
                    if (b[g].rank === b[g + 1].rank) {
                        a = b[g].rank;
                        break
                    }
                return d > a ? "player" : d < a ? "dealer" : "standoff";
            case NO_HAND:
                break;
            default:
                return "standoff"
        } else return g === NO_HAND ? "dealer_no_hand" : d > g ? "dealer" : "player"
    }
}

function CAnimText(a, b, d) {
    var c, f, e;
    this._init = function(a, b) {
        e = new createjs.Container;
        e.visible = !1;
        e.x = a;
        e.y = b;
        g.addChild(e);
        var c = s_oSpriteLibrary.getSprite("win_bg"),
            d = createBitmap(c);
        e.addChild(d);
        f = new createjs.Text("", "28px " + FONT_GAME_1, "#fff");
        f.x = c.width / 2;
        f.y = 4;
        f.alphabetic = "alphabetic";
        f.textAlign = "center";
        f.lineWidth = c.width;
        e.addChild(f)
    };
    this.show = function(a, b, d) {
        c = a;
        f.text = d;
        e.x = a.x;
        e.y = a.y;
        e.visible = !0;
        createjs.Tween.get(e).to({
            x: b.x,
            y: b.y
        }, 1E3, createjs.Ease.elasticOut)
    };
    this.hide =
        function() {
            e.visible = !1;
            e.x = c.x;
            e.y = c.y
        };
    this.isVisible = function() {
        return e.visible
    };
    var g = d;
    this._init(a, b)
}

function CPaytablePanel(a, b, d) {
    var c, f, e, g, m;
    this._init = function(a, b) {
        c = a;
        f = b;
        m = new createjs.Container;
        m.x = c;
        m.y = f;
        r.addChild(m);
        var d = s_oSpriteLibrary.getSprite("paytable_bg"),
            l = createBitmap(d);
        m.addChild(l);
        for (var n = l = "", p = 0; p < PAYOUT_MULT.length; p++) l += TEXT_EVALUATOR[p] + "\n", n += PAYOUT_MULT[p] + ":1\n";
        e = new createjs.Text(l, "20px " + FONT_GAME_1, "#ffde00");
        e.x = 10;
        e.y = 10;
        e.textAlign = "left";
        e.lineHeight = 20;
        m.addChild(e);
        g = new createjs.Text(n, "20px " + FONT_GAME_1, "#ffde00");
        g.x = d.width - 10;
        g.y = 10;
        g.textAlign =
            "right";
        g.lineHeight = 20;
        m.addChild(g)
    };
    this.refreshButtonPos = function(a, b) {
        m.x = c - a
    };
    var r = d;
    this._init(a, b)
}

function CHelpCursor(a, b, d, c) {
    var f, e;
    this._init = function(a, b, d) {
        f = a;
        e = createBitmap(d);
        e.visible = !1;
        e.x = a;
        e.y = b;
        c.addChild(e)
    };
    this.show = function(a) {
        0 > a && (e.scaleX *= -1);
        this._move(a, f + 30 * a, 600);
        e.visible = !0
    };
    this.hide = function() {
        createjs.Tween.removeTweens(e);
        e.x = f;
        e.visible = !1
    };
    this._move = function(a, b, c) {
        var d = 0 < a ? createjs.Ease.cubicIn : createjs.Ease.cubicOut;
        createjs.Tween.get(e).to({
            x: b
        }, c, d).call(function() {
            a *= -1;
            g._move(a, b + 15 * a, 400)
        })
    };
    this.isVisible = function() {
        return e.visible
    };
    var g = this;
    this._init(a,
        b, d)
}

function CCreditsPanel() {
    var a, b, d, c, f, e, g, m;
    this._init = function() {
        m = new createjs.Container;
        s_oStage.addChild(m);
        a = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
        m.addChild(a);
        f = new createjs.Shape;
        f.graphics.beginFill("#0f0f0f").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        f.alpha = .01;
        g = f.on("click", this._onLogoButRelease);
        m.addChild(f);
        var r = s_oSpriteLibrary.getSprite("but_exit");
        d = new CGfxButton(615, 270, r, m);
        d.addEventListener(ON_MOUSE_UP, this.unload, this);
        c = new createjs.Text(TEXT_CREDITS_DEVELOPED, "40px " +
            FONT_GAME_1, "#fff");
        c.textAlign = "center";
        c.textBaseline = "alphabetic";
        c.x = CANVAS_WIDTH / 2;
        c.y = CANVAS_HEIGHT / 2 - 54;
        m.addChild(c);
        r = s_oSpriteLibrary.getSprite("logo_ctl");
        b = createBitmap(r);
        b.regX = r.width / 2;
        b.regY = r.height / 2;
        b.x = CANVAS_WIDTH / 2;
        b.y = CANVAS_HEIGHT / 2;
        m.addChild(b);
        e = new createjs.Text("www.codethislab.com", "36px " + FONT_GAME_1, "#fff");
        e.textAlign = "center";
        e.textBaseline = "alphabetic";
        e.x = CANVAS_WIDTH / 2;
        e.y = CANVAS_HEIGHT / 2 + 70;
        m.addChild(e)
    };
    this.unload = function() {
        f.off("click", g);
        d.unload();
        d =
            null;
        s_oStage.removeChild(m)
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
            } catch (f) {
                var c = window.location.ancestorOrigins;
                d = c[c.length - 1]
            }
        } catch (f) {
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