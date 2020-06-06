/*
 Platform.js <https://mths.be/platform>
 Copyright 2014-2018 Benjamin Tan <https://bnjmnt4n.now.sh/>
 Copyright 2011-2013 John-David Dalton
 Available under MIT license <https://mths.be/mit>
*/
(function () {
    function a(a) {
        a = String(a);
        return a.charAt(0).toUpperCase() + a.slice(1)
    }

    function f(a, e) {
        var g = -1,
            c = a ? a.length : 0;
        if ("number" == typeof c && -1 < c && c <= m)
            for (; ++g < c;) e(a[g], g, a);
        else b(a, e)
    }

    function c(e) {
        e = String(e).replace(/^ +| +$/g, "");
        return /^(?:webOS|i(?:OS|P))/.test(e) ? e : a(e)
    }

    function b(a, e) {
        for (var g in a) y.call(a, g) && e(a[g], g, a)
    }

    function l(e) {
        return null == e ? a(e) : D.call(e).slice(8, -1)
    }

    function k(a, e) {
        var g = null != a ? typeof a[e] : "number";
        return !/^(?:boolean|number|string|undefined)$/.test(g) &&
            ("object" == g ? !!a[e] : !0)
    }

    function q(a) {
        return String(a).replace(/([ -])(?!$)/g, "$1?")
    }

    function g(a, e) {
        var g = null;
        f(a, function (b, c) {
            g = e(g, b, c, a)
        });
        return g
    }

    function n(a) {
        function e(d) {
            return g(d, function (d, e) {
                var g = e.pattern || q(e);
                !d && (d = RegExp("\\b" + g + " *\\d+[.\\w_]*", "i").exec(a) || RegExp("\\b" + g + " *\\w+-[\\w]*", "i").exec(a) || RegExp("\\b" + g + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(a)) && ((d = String(e.label && !RegExp(g, "i").test(e.label) ? e.label : d).split("/"))[1] && !/[\d.]+/.test(d[0]) && (d[0] +=
                    " " + d[1]), e = e.label || e, d = c(d[0].replace(RegExp(g, "i"), e).replace(RegExp("; *(?:" + e + "[_-])?", "i"), " ").replace(RegExp("(" + e + ")[-_.]?(\\w)", "i"), "$1 $2")));
                return d
            })
        }

        function f(d) {
            return g(d, function (d, e) {
                return d || (RegExp(e + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(a) || 0)[1] || null
            })
        }
        var h = r,
            m = a && "object" == typeof a && "String" != l(a);
        m && (h = a, a = null);
        var x = h.navigator || {},
            v = x.userAgent || "";
        a || (a = v);
        var y = m ? !!x.likeChrome : /\bChrome\b/.test(a) && !/internal|\n/i.test(D.toString()),
            B = m ? "Object" : "ScriptBridgingProxyObject",
            A = m ? "Object" : "Environment",
            w = m && h.java ? "JavaPackage" : l(h.java),
            T = m ? "Object" : "RuntimeObject";
        A = (w = /\bJava/.test(w) && h.java) && l(h.environment) == A;
        var z = w ? "a" : "\u03b1",
            M = w ? "b" : "\u03b2",
            Q = h.document || {},
            N = h.operamini || h.opera,
            J = p.test(J = m && N ? N["[[Class]]"] : l(N)) ? J : N = null,
            d, U = a;
        m = [];
        var V = null,
            P = a == v;
        v = P && N && "function" == typeof N.version && N.version();
        var E = function (d) {
            return g(d, function (d, e) {
                return d || RegExp("\\b" + (e.pattern || q(e)) + "\\b", "i").exec(a) && (e.label ||
                    e)
            })
        }([{
            label: "EdgeHTML",
            pattern: "Edge"
        }, "Trident", {
            label: "WebKit",
            pattern: "AppleWebKit"
        }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]),
            t = function (d) {
                return g(d, function (d, e) {
                    return d || RegExp("\\b" + (e.pattern || q(e)) + "\\b", "i").exec(a) && (e.label || e)
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
            F = e([{
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
            K = function (d) {
                return g(d, function (d, e, g) {
                    return d || (e[F] || e[/^[a-z]+(?: +[a-z]+\b)*/i.exec(F)] || RegExp("\\b" + q(g) + "(?:\\b|\\w*\\d)", "i").exec(a)) && g
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
            u = function (d) {
                return g(d, function (d, e) {
                    var g = e.pattern || q(e);
                    if (!d && (d = RegExp("\\b" + g + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(a))) {
                        var J = d,
                            b = e.label || e,
                            h = {
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
                        g && b && /^Win/i.test(J) && !/^Windows Phone /i.test(J) && (h = h[/[\d.]+$/.exec(J)]) && (J = "Windows " + h);
                        J = String(J);
                        g && b && (J = J.replace(RegExp(g, "i"), b));
                        d = J = c(J.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/,
                            " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
                    }
                    return d
                })
            }(["Windows Phone", "Android", "CentOS", {
                label: "Chrome OS",
                pattern: "CrOS"
            }, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac",
                "Windows 98;", "Windows "
            ]);
        E && (E = [E]);
        K && !F && (F = e([K]));
        if (d = /\bGoogle TV\b/.exec(F)) F = d[0];
        /\bSimulator\b/i.test(a) && (F = (F ? F + " " : "") + "Simulator");
        "Opera Mini" == t && /\bOPiOS\b/.test(a) && m.push("running in Turbo/Uncompressed mode");
        "IE" == t && /\blike iPhone OS\b/.test(a) ? (d = n(a.replace(/like iPhone OS/, "")), K = d.manufacturer, F = d.product) : /^iP/.test(F) ? (t || (t = "Safari"), u = "iOS" + ((d = / OS ([\d_]+)/i.exec(a)) ? " " + d[1].replace(/_/g, ".") : "")) : "Konqueror" != t || /buntu/i.test(u) ? K && "Google" != K && (/Chrome/.test(t) &&
            !/\bMobile Safari\b/i.test(a) || /\bVita\b/.test(F)) || /\bAndroid\b/.test(u) && /^Chrome/.test(t) && /\bVersion\//i.test(a) ? (t = "Android Browser", u = /\bAndroid\b/.test(u) ? u : "Android") : "Silk" == t ? (/\bMobi/i.test(a) || (u = "Android", m.unshift("desktop mode")), /Accelerated *= *true/i.test(a) && m.unshift("accelerated")) : "PaleMoon" == t && (d = /\bFirefox\/([\d.]+)\b/.exec(a)) ? m.push("identifying as Firefox " + d[1]) : "Firefox" == t && (d = /\b(Mobile|Tablet|TV)\b/i.exec(a)) ? (u || (u = "Firefox OS"), F || (F = d[1])) : !t || (d = !/\bMinefield\b/i.test(a) &&
                /\b(?:Firefox|Safari)\b/.exec(t)) ? (t && !F && /[\/,]|^[^(]+?\)/.test(a.slice(a.indexOf(d + "/") + 8)) && (t = null), (d = F || K || u) && (F || K || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(u)) && (t = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(u) ? u : d) + " Browser")) : "Electron" == t && (d = (/\bChrome\/([\d.]+)\b/.exec(a) || 0)[1]) && m.push("Chromium " + d) : u = "Kubuntu";
        v || (v = f(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", q(t), "(?:Firefox|Minefield|NetFront)"]));
        if (d = "iCab" == E && 3 < parseFloat(v) && "WebKit" || /\bOpera\b/.test(t) && (/\bOPR\b/.test(a) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(a) && !/^(?:Trident|EdgeHTML)$/.test(E) && "WebKit" || !E && /\bMSIE\b/i.test(a) && ("Mac OS" == u ? "Tasman" : "Trident") || "WebKit" == E && /\bPlayStation\b(?! Vita\b)/i.test(t) && "NetFront") E = [d];
        "IE" == t && (d = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(a) || 0)[1]) ? (t += " Mobile", u = "Windows Phone " + (/\+$/.test(d) ? d : d + ".x"), m.unshift("desktop mode")) : /\bWPDesktop\b/i.test(a) ? (t = "IE Mobile", u = "Windows Phone 8.x",
            m.unshift("desktop mode"), v || (v = (/\brv:([\d.]+)/.exec(a) || 0)[1])) : "IE" != t && "Trident" == E && (d = /\brv:([\d.]+)/.exec(a)) && (t && m.push("identifying as " + t + (v ? " " + v : "")), t = "IE", v = d[1]);
        if (P) {
            if (k(h, "global"))
                if (w && (d = w.lang.System, U = d.getProperty("os.arch"), u = u || d.getProperty("os.name") + " " + d.getProperty("os.version")), A) {
                    try {
                        v = h.require("ringo/engine").version.join("."), t = "RingoJS"
                    } catch (X) {
                        (d = h.system) && d.global.system == h.system && (t = "Narwhal", u || (u = d[0].os || null))
                    }
                    t || (t = "Rhino")
                } else "object" == typeof h.process &&
                    !h.process.browser && (d = h.process) && ("object" == typeof d.versions && ("string" == typeof d.versions.electron ? (m.push("Node " + d.versions.node), t = "Electron", v = d.versions.electron) : "string" == typeof d.versions.nw && (m.push("Chromium " + v, "Node " + d.versions.node), t = "NW.js", v = d.versions.nw)), t || (t = "Node.js", U = d.arch, u = d.platform, v = (v = /[\d.]+/.exec(d.version)) ? v[0] : null));
            else l(d = h.runtime) == B ? (t = "Adobe AIR", u = d.flash.system.Capabilities.os) : l(d = h.phantom) == T ? (t = "PhantomJS", v = (d = d.version || null) && d.major + "." + d.minor +
                "." + d.patch) : "number" == typeof Q.documentMode && (d = /\bTrident\/(\d+)/i.exec(a)) ? (v = [v, Q.documentMode], (d = +d[1] + 4) != v[1] && (m.push("IE " + v[1] + " mode"), E && (E[1] = ""), v[1] = d), v = "IE" == t ? String(v[1].toFixed(1)) : v[0]) : "number" == typeof Q.documentMode && /^(?:Chrome|Firefox)\b/.test(t) && (m.push("masking as " + t + " " + v), t = "IE", v = "11.0", E = ["Trident"], u = "Windows");
            u = u && c(u)
        }
        v && (d = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(v) || /(?:alpha|beta)(?: ?\d)?/i.exec(a + ";" + (P && x.appMinorVersion)) || /\bMinefield\b/i.test(a) &&
            "a") && (V = /b/i.test(d) ? "beta" : "alpha", v = v.replace(RegExp(d + "\\+?$"), "") + ("beta" == V ? M : z) + (/\d+\+?/.exec(d) || ""));
        if ("Fennec" == t || "Firefox" == t && /\b(?:Android|Firefox OS)\b/.test(u)) t = "Firefox Mobile";
        else if ("Maxthon" == t && v) v = v.replace(/\.[\d.]+/, ".x");
        else if (/\bXbox\b/i.test(F)) "Xbox 360" == F && (u = null), "Xbox 360" == F && /\bIEMobile\b/.test(a) && m.unshift("mobile mode");
        else if (!/^(?:Chrome|IE|Opera)$/.test(t) && (!t || F || /Browser|Mobi/.test(t)) || "Windows CE" != u && !/Mobi/i.test(a))
            if ("IE" == t && P) try {
                null === h.external &&
                    m.unshift("platform preview")
            } catch (X) {
                m.unshift("embedded")
            } else (/\bBlackBerry\b/.test(F) || /\bBB10\b/.test(a)) && (d = (RegExp(F.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(a) || 0)[1] || v) ? (d = [d, /BB10/.test(a)], u = (d[1] ? (F = null, K = "BlackBerry") : "Device Software") + " " + d[0], v = null) : this != b && "Wii" != F && (P && N || /Opera/.test(t) && /\b(?:MSIE|Firefox)\b/i.test(a) || "Firefox" == t && /\bOS X (?:\d+\.){2,}/.test(u) || "IE" == t && (u && !/^Win/.test(u) && 5.5 < v || /\bWindows XP\b/.test(u) && 8 < v || 8 == v && !/\bTrident\b/.test(a))) && !p.test(d =
                n.call(b, a.replace(p, "") + ";")) && d.name && (d = "ing as " + d.name + ((d = d.version) ? " " + d : ""), p.test(t) ? (/\bIE\b/.test(d) && "Mac OS" == u && (u = null), d = "identify" + d) : (d = "mask" + d, t = J ? c(J.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(d) && (u = null), P || (v = null)), E = ["Presto"], m.push(d));
        else t += " Mobile";
        if (d = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(a) || 0)[1]) {
            d = [parseFloat(d.replace(/\.(\d)$/, ".0$1")), d];
            if ("Safari" == t && "+" == d[1].slice(-1)) t = "WebKit Nightly", V = "alpha", v = d[1].slice(0, -1);
            else if (v == d[1] || v == (d[2] =
                (/\bSafari\/([\d.]+\+?)/i.exec(a) || 0)[1])) v = null;
            d[1] = (/\bChrome\/([\d.]+)/i.exec(a) || 0)[1];
            537.36 == d[0] && 537.36 == d[2] && 28 <= parseFloat(d[1]) && "WebKit" == E && (E = ["Blink"]);
            P && (y || d[1]) ? (E && (E[1] = "like Chrome"), d = d[1] || (d = d[0], 530 > d ? 1 : 532 > d ? 2 : 532.05 > d ? 3 : 533 > d ? 4 : 534.03 > d ? 5 : 534.07 > d ? 6 : 534.1 > d ? 7 : 534.13 > d ? 8 : 534.16 > d ? 9 : 534.24 > d ? 10 : 534.3 > d ? 11 : 535.01 > d ? 12 : 535.02 > d ? "13+" : 535.07 > d ? 15 : 535.11 > d ? 16 : 535.19 > d ? 17 : 536.05 > d ? 18 : 536.1 > d ? 19 : 537.01 > d ? 20 : 537.11 > d ? "21+" : 537.13 > d ? 23 : 537.18 > d ? 24 : 537.24 > d ? 25 : 537.36 > d ? 26 : "Blink" !=
                E ? "27" : "28")) : (E && (E[1] = "like Safari"), d = (d = d[0], 400 > d ? 1 : 500 > d ? 2 : 526 > d ? 3 : 533 > d ? 4 : 534 > d ? "4+" : 535 > d ? 5 : 537 > d ? 6 : 538 > d ? 7 : 601 > d ? 8 : "8"));
            E && (E[1] += " " + (d += "number" == typeof d ? ".x" : /[.+]/.test(d) ? "" : "+"));
            "Safari" == t && (!v || 45 < parseInt(v)) && (v = d)
        }
        "Opera" == t && (d = /\bzbov|zvav$/.exec(u)) ? (t += " ", m.unshift("desktop mode"), "zvav" == d ? (t += "Mini", v = null) : t += "Mobile", u = u.replace(RegExp(" *" + d + "$"), "")) : "Safari" == t && /\bChrome\b/.exec(E && E[1]) && (m.unshift("desktop mode"), t = "Chrome Mobile", v = null, /\bOS X\b/.test(u) ? (K =
            "Apple", u = "iOS 4.3+") : u = null);
        v && 0 == v.indexOf(d = /[\d.]+$/.exec(u)) && -1 < a.indexOf("/" + d + "-") && (u = String(u.replace(d, "")).replace(/^ +| +$/g, ""));
        E && !/\b(?:Avant|Nook)\b/.test(t) && (/Browser|Lunascape|Maxthon/.test(t) || "Safari" != t && /^iOS/.test(u) && /\bSafari\b/.test(E[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(t) && E[1]) && (d = E[E.length - 1]) && m.push(d);
        m.length && (m = ["(" + m.join("; ") + ")"]);
        K && F && 0 > F.indexOf(K) && m.push("on " + K);
        F && m.push((/^on /.test(m[m.length -
            1]) ? "" : "on ") + F);
        if (u) {
            var W = (d = / ([\d.+]+)$/.exec(u)) && "/" == u.charAt(u.length - d[0].length - 1);
            u = {
                architecture: 32,
                family: d && !W ? u.replace(d[0], "") : u,
                version: d ? d[1] : null,
                toString: function () {
                    var a = this.version;
                    return this.family + (a && !W ? " " + a : "") + (64 == this.architecture ? " 64-bit" : "")
                }
            }
        } (d = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(U)) && !/\bi686\b/i.test(U) ? (u && (u.architecture = 64, u.family = u.family.replace(RegExp(" *" + d), "")), t && (/\bWOW64\b/i.test(a) || P && /\w(?:86|32)$/.test(x.cpuClass || x.platform) && !/\bWin64; x64\b/i.test(a)) &&
            m.unshift("32-bit")) : u && /^OS X/.test(u.family) && "Chrome" == t && 39 <= parseFloat(v) && (u.architecture = 64);
        a || (a = null);
        h = {};
        h.description = a;
        h.layout = E && E[0];
        h.manufacturer = K;
        h.name = t;
        h.prerelease = V;
        h.product = F;
        h.ua = a;
        h.version = t && v;
        h.os = u || {
            architecture: null,
            family: null,
            version: null,
            toString: function () {
                return "null"
            }
        };
        h.parse = n;
        h.toString = function () {
            return this.description || ""
        };
        h.version && m.unshift(v);
        h.name && m.unshift(t);
        u && t && (u != String(u).split(" ")[0] || u != t.split(" ")[0] && !F) && m.push(F ? "(" + u + ")" : "on " +
            u);
        m.length && (h.description = m.join(" "));
        return h
    }
    var e = {
        "function": !0,
        object: !0
    },
        r = e[typeof window] && window || this,
        x = e[typeof exports] && exports;
    e = e[typeof module] && module && !module.nodeType && module;
    var h = x && e && "object" == typeof global && global;
    !h || h.global !== h && h.window !== h && h.self !== h || (r = h);
    var m = Math.pow(2, 53) - 1,
        p = /\bOpera/;
    h = Object.prototype;
    var y = h.hasOwnProperty,
        D = h.toString,
        B = n();
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (r.platform = B, define(function () {
        return B
    })) : x &&
        e ? b(B, function (a, e) {
            x[e] = a
        }) : r.platform = B
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
    }], f = 0; f < a.length; f++) {
        var c = document.createElement("meta");
        c.name = a[f].name;
        c.content = a[f].content;
        var b = window.document.head.querySelector('meta[name="' + c.name + '"]');
        b && b.parentNode.removeChild(b);
        window.document.head.appendChild(c)
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
    console.log(window.devicePixelRatio);
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    if ("iPhone" === platform.product) switch (window.devicePixelRatio) {
        case 2:
            switch (window.innerWidth) {
                case 568:
                    320 !== window.innerHeight && jQuery(".xxx-game-iframe-full").addClass("xxx-game-iframe-iphone-se");
                    break;
                case 667:
                    375 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                    break;
                case 808:
                    414 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
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
                case 808:
                    414 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
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
    setTimeout(function () {
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
$(document).ready(function () {
    platform && "iPhone" === platform.product && "safari" !== platform.name.toLowerCase() && (buildIOSFullscreenPanel(), buildIOSMeta())
});
jQuery(window).resize(function () {
    platform && "iPhone" === platform.product && "safari" !== platform.name.toLowerCase() && iosResize()
});
(function () {
    var a = "undefined" !== typeof window && "undefined" !== typeof window.document ? window.document : {},
        f = "undefined" !== typeof module && module.exports,
        c = "undefined" !== typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
        b = function () {
            for (var b, g = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "),
            "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "), "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")
            ], c = 0, e = g.length, f = {}; c < e; c++)
                if ((b = g[c]) && b[1] in a) {
                    for (c = 0; c < b.length; c++) f[g[0][c]] =
                        b[c];
                    return f
                }
            return !1
        }(),
        l = {
            change: b.fullscreenchange,
            error: b.fullscreenerror
        },
        k = {
            request: function (f) {
                var g = b.requestFullscreen;
                f = f || a.documentElement;
                if (/5\.1[.\d]* Safari/.test(navigator.userAgent)) f[g]();
                else f[g](c && Element.ALLOW_KEYBOARD_INPUT)
            },
            exit: function () {
                a[b.exitFullscreen]()
            },
            toggle: function (a) {
                this.isFullscreen ? this.exit() : this.request(a)
            },
            onchange: function (a) {
                this.on("change", a)
            },
            onerror: function (a) {
                this.on("error", a)
            },
            on: function (b, g) {
                var c = l[b];
                c && a.addEventListener(c, g, !1)
            },
            off: function (b,
                g) {
                var c = l[b];
                c && a.removeEventListener(c, g, !1)
            },
            raw: b
        };
    b ? (Object.defineProperties(k, {
        isFullscreen: {
            get: function () {
                return !!a[b.fullscreenElement]
            }
        },
        element: {
            enumerable: !0,
            get: function () {
                return a[b.fullscreenElement]
            }
        },
        enabled: {
            enumerable: !0,
            get: function () {
                return !!a[b.fullscreenEnabled]
            }
        }
    }), f ? module.exports = k : window.screenfull = k) : f ? module.exports = !1 : window.screenfull = !1
})();
var s_iScaleFactor = 1,
    s_bIsIphone = !1;
(function (a) {
    (jQuery.browser = jQuery.browser || {}).mobile = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0,
        4))
})(navigator.userAgent || navigator.vendor || window.opera);
$(window).resize(function () {
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
    var f = a.toLowerCase(),
        c = window.document,
        b = c.documentElement;
    if (void 0 === window["inner" + a]) a = b["client" + a];
    else if (window["inner" + a] != b["client" + a]) {
        var l = c.createElement("body");
        l.id = "vpw-test-b";
        l.style.cssText = "overflow:scroll";
        var k = c.createElement("div");
        k.id = "vpw-test-d";
        k.style.cssText = "position:absolute;top:-1000px";
        k.innerHTML = "<style>@media(" + f + ":" + b["client" + a] + "px){body#vpw-test-b div#vpw-test-d{" + f + ":7px!important}}</style>";
        l.appendChild(k);
        b.insertBefore(l, c.head);
        a = 7 == k["offset" + a] ? b["client" + a] : window["inner" + a];
        b.removeChild(l)
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
        var a = "safari" === platform.name.toLowerCase() ? getIOSWindowHeight() : getSize("Height");
        var f = getSize("Width");
        _checkOrientation(f, a);
        var c = Math.min(a / CANVAS_HEIGHT, f / CANVAS_WIDTH),
            b = CANVAS_WIDTH * c;
        c *= CANVAS_HEIGHT;
        if (c < a) {
            var l = a - c;
            c += l;
            b += CANVAS_WIDTH / CANVAS_HEIGHT * l
        } else b < f && (l = f - b, b += l, c += CANVAS_HEIGHT / CANVAS_WIDTH * l);
        l = a / 2 - c / 2;
        var k = f / 2 - b / 2,
            q = CANVAS_WIDTH / b;
        if (k * q < -EDGEBOARD_X || l * q < -EDGEBOARD_Y) c = Math.min(a / (CANVAS_HEIGHT - 2 * EDGEBOARD_Y),
            f / (CANVAS_WIDTH - 2 * EDGEBOARD_X)), b = CANVAS_WIDTH * c, c *= CANVAS_HEIGHT, l = (a - c) / 2, k = (f - b) / 2, q = CANVAS_WIDTH / b;
        s_iOffsetX = -1 * k * q;
        s_iOffsetY = -1 * l * q;
        0 <= l && (s_iOffsetY = 0);
        0 <= k && (s_iOffsetX = 0);
        null !== s_oInterface && s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        s_bIsIphone ? (canvas = document.getElementById("canvas"), s_oStage.canvas.width = 2 * b, s_oStage.canvas.height = 2 * c, canvas.style.width = b + "px", canvas.style.height = c + "px", f = Math.min(b / CANVAS_WIDTH,
            c / CANVAS_HEIGHT), s_iScaleFactor = 2 * f, s_oStage.scaleX = s_oStage.scaleY = 2 * f) : s_bMobile && !1 === isIOS() ? ($("#canvas").css("width", b + "px"), $("#canvas").css("height", c + "px")) : (s_oStage.canvas.width = b, s_oStage.canvas.height = c, s_iScaleFactor = Math.min(b / CANVAS_WIDTH, c / CANVAS_HEIGHT), s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor);
        0 > l || (l = (a - c) / 2);
        $("#canvas").css("top", l + "px");
        $("#canvas").css("left", k + "px");
        fullscreenHandler()
    }
}

function _checkOrientation(a, f) {
    s_bMobile && ENABLE_CHECK_ORIENTATION && (a > f ? "landscape" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()) : "portrait" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"),
        s_oMain.stopUpdate()))
}

function createBitmap(a, f, c) {
    var b = new createjs.Bitmap(a),
        l = new createjs.Shape;
    f && c ? l.graphics.beginFill("#fff").drawRect(0, 0, f, c) : l.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
    b.hitArea = l;
    return b
}

function createSprite(a, f, c, b, l, k) {
    a = null !== f ? new createjs.Sprite(a, f) : new createjs.Sprite(a);
    f = new createjs.Shape;
    f.graphics.beginFill("#000000").drawRect(-c, -b, l, k);
    a.hitArea = f;
    return a
}

function randomFloatBetween(a, f, c) {
    "undefined" === typeof c && (c = 2);
    return parseFloat(Math.min(a + Math.random() * (f - a), f).toFixed(c))
}

function shuffle(a) {
    for (var f = a.length, c, b; 0 !== f;) b = Math.floor(Math.random() * f), --f, c = a[f], a[f] = a[b], a[b] = c;
    return a
}

function formatTime(a) {
    a /= 1E3;
    var f = Math.floor(a / 60);
    a = parseFloat(a - 60 * f).toFixed(1);
    var c = "";
    c = 10 > f ? c + ("0" + f + ":") : c + (f + ":");
    return 10 > a ? c + ("0" + a) : c + a
}

function NoClickDelay(a) {
    this.element = a;
    window.Touch && this.element.addEventListener("touchstart", this, !1)
}
NoClickDelay.prototype = {
    handleEvent: function (a) {
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
    onTouchStart: function (a) {
        a.preventDefault();
        this.moved = !1;
        this.element.addEventListener("touchmove", this, !1);
        this.element.addEventListener("touchend", this, !1)
    },
    onTouchMove: function (a) {
        this.moved = !0
    },
    onTouchEnd: function (a) {
        this.element.removeEventListener("touchmove", this, !1);
        this.element.removeEventListener("touchend",
            this, !1);
        if (!this.moved) {
            a = document.elementFromPoint(a.changedTouches[0].clientX, a.changedTouches[0].clientY);
            3 === a.nodeType && (a = a.parentNode);
            var f = document.createEvent("MouseEvents");
            f.initEvent("click", !0, !0);
            a.dispatchEvent(f)
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
    for (var f = window.location.search.substring(1).split("&"), c = 0; c < f.length; c++) {
        var b = f[c].split("=");
        if (b[0] == a) return b[1]
    }
}

function playSound(a, f, c) {
    return !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (s_aSounds[a].play(), s_aSounds[a].volume(f), s_aSounds[a].loop(c), s_aSounds[a]) : null
}

function stopSound(a) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].stop()
}

function setVolume(a, f) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].volume(f)
}

function setMute(a, f) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].mute(f)
}
(function () {
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
        a.type in b ? document.body.className = b[a.type] : (document.body.className = this[f] ? "hidden" : "visible", "hidden" === document.body.className ? s_oMain.stopUpdate() : s_oMain.startUpdate())
    }
    var f = "hidden";
    f in document ? document.addEventListener("visibilitychange", a) : (f = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", a) : (f = "webkitHidden") in
        document ? document.addEventListener("webkitvisibilitychange", a) : (f = "msHidden") in document ? document.addEventListener("msvisibilitychange", a) : "onfocusin" in document ? document.onfocusin = document.onfocusout = a : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = a
})();

function fullscreenHandler() {
    ENABLE_FULLSCREEN && screenfull.enabled && (s_bFullscreen = screenfull.isFullscreen, null !== s_oInterface && s_oInterface.resetFullscreenBut(), null !== s_oMenu && s_oMenu.resetFullscreenBut())
}
if (screenfull.enabled) screenfull.on("change", function () {
    s_bFullscreen = screenfull.isFullscreen;
    null !== s_oInterface && s_oInterface.resetFullscreenBut();
    null !== s_oMenu && s_oMenu.resetFullscreenBut()
});

function CSpriteLibrary() {
    var a = {},
        f, c, b, l, k, q;
    this.init = function (a, n, e) {
        f = {};
        b = c = 0;
        l = a;
        k = n;
        q = e
    };
    this.addSprite = function (g, b) {
        if (!a.hasOwnProperty(g)) {
            var e = new Image;
            a[g] = f[g] = {
                szPath: b,
                oSprite: e,
                bLoaded: !1
            };
            c++
        }
    };
    this.getSprite = function (g) {
        return a.hasOwnProperty(g) ? a[g].oSprite : null
    };
    this._onSpritesLoaded = function () {
        c = 0;
        k.call(q)
    };
    this._onSpriteLoaded = function () {
        l.call(q);
        ++b === c && this._onSpritesLoaded()
    };
    this.loadSprites = function () {
        for (var a in f) f[a].oSprite.oSpriteLibrary = this, f[a].oSprite.szKey =
            a, f[a].oSprite.onload = function () {
                this.oSpriteLibrary.setLoaded(this.szKey);
                this.oSpriteLibrary._onSpriteLoaded(this.szKey)
            }, f[a].oSprite.onerror = function (a) {
                var e = a.currentTarget;
                setTimeout(function () {
                    f[e.szKey].oSprite.src = f[e.szKey].szPath
                }, 500)
            }, f[a].oSprite.src = f[a].szPath
    };
    this.setLoaded = function (b) {
        a[b].bLoaded = !0
    };
    this.isLoaded = function (b) {
        return a[b].bLoaded
    };
    this.getNumSprites = function () {
        return c
    }
}
var CANVAS_WIDTH = 1500,
    CANVAS_HEIGHT = 640,
    EDGEBOARD_X = 300,
    EDGEBOARD_Y = 0,
    FONT_GAME = "adonaisregular",
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
    REEL_OFFSET_Y = 118,
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
    TIME_SHOW_WIN, TIME_SHOW_ALL_WINS, MIN_BET, MAX_BET, TOTAL_MONEY, MAX_NUM_HOLD, BONUS_ITEM_WIDTH = 304,
    BONUS_ITEM_HEIGHT = 250,
    NUM_PRIZES = 3,
    NUM_SYMBOLS_FOR_BONUS = 3,
    PERC_WIN_PRIZE_1, PERC_WIN_PRIZE_2, PERC_WIN_PRIZE_3, SOUNDTRACK_VOLUME_IN_GAME = .2,
    WIN_OCCURRENCE, SLOT_CASH, MIN_WIN, BONUS_OCCURRENCE,
    PAYTABLE_VALUES, ENABLE_FULLSCREEN, ENABLE_CHECK_ORIENTATION, SHOW_CREDITS, BONUS_PRIZE = [];

function CSlotSettings() {
    this._init = function () {
        this._initSymbolSpriteSheets();
        this._initPaylines();
        this._initSymbolWin();
        this._initSymbolAnims();
        this._initSymbolsOccurence();
        this._initBonus()
    };
    this._initSymbolSpriteSheets = function () {
        s_aSymbolData = [];
        for (var a = 1; a < NUM_SYMBOLS + 1; a++) {
            var f = {
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
            s_aSymbolData[a] = new createjs.SpriteSheet(f)
        }
    };
    this._initPaylines =
        function () {
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
    this._initSymbolAnims = function () {
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
    this._initSymbolWin = function () {
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
    this._initSymbolsOccurence = function () {
        s_aRandSymbols = [];
        var a;
        for (a = 0; 1 > a; a++) s_aRandSymbols.push(1);
        for (a = 0; 2 > a; a++) s_aRandSymbols.push(2);
        for (a = 0; 3 > a; a++) s_aRandSymbols.push(3);
        for (a = 0; 4 > a; a++) s_aRandSymbols.push(4);
        for (a = 0; 4 > a; a++) s_aRandSymbols.push(5);
        for (a = 0; 6 > a; a++) s_aRandSymbols.push(6);
        for (a = 0; 7 > a; a++) s_aRandSymbols.push(7);
        for (a = 0; 7 > a; a++) s_aRandSymbols.push(8);
        for (a = 0; 2 > a; a++) s_aRandSymbols.push(9);
        for (a = 0; 2 > a; a++) s_aRandSymbols.push(10)
    };
    this._initBonus = function () {
        s_aPrizeOccurence = [];
        var a;
        for (a = 0; a < PERC_WIN_PRIZE_1; a++) s_aPrizeOccurence.push(0);
        for (a = 0; a < PERC_WIN_PRIZE_2; a++) s_aPrizeOccurence.push(1);
        for (a = 0; a < PERC_WIN_PRIZE_3; a++) s_aPrizeOccurence.push(2)
    };
    this._init()
}
var s_aSymbolData, s_aPaylineCombo, s_aSymbolWin, s_aSymbolAnims, s_aRandSymbols, s_aPrizeOccurence;
TEXT_MONEY = "SALDO";
TEXT_PLAY = "EMPEZAR";
TEXT_BACK = "LOBBY";
TEXT_BET = "APUESTA";
TEXT_COIN = "FICHA";
TEXT_MAX_BET = "APUESTA MAX";
TEXT_INFO = "INFO";
TEXT_LINES = "LINEAS";
TEXT_SPIN = "GIRAR";
TEXT_WIN = "GANO";
TEXT_HOLD = "BLOQUEAR";
TEXT_HELP_WILD = "LOS SAGRADOS REEMPLAZAN OTROS SIMBOLOS PARA FORMAR UN COMBO";
TEXT_HELP_BONUS = "3 O MAS PIRAMIDES TE DEJA JUGAR EL BONUS!";
TEXT_CREDITS_DEVELOPED = "DESARROLLADO POR";
TEXT_CURRENCY = "$";
var TEXT_PRELOADER_CONTINUE = "EMPEZAR";
TEXT_CONGRATULATIONS = "FELICIDADES!";
TEXT_MSG_SHARE1 = "You collected <strong>";
TEXT_MSG_SHARE2 = " points</strong>!<br><br>Share your score with your friends!";
TEXT_MSG_SHARING1 = "My score is ";
TEXT_MSG_SHARING2 = " points! Can you do better?";

function CPreloader() {
    var a, f, c, b, l, k, q, g, n, e;
    this._init = function () {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
        s_oSpriteLibrary.addSprite("200x200", "./sprites/200x200.jpg");
        s_oSpriteLibrary.addSprite("but_start", "./sprites/but_start.png");
        s_oSpriteLibrary.loadSprites();
        e = new createjs.Container;
        s_oStage.addChild(e)
    };
    this.unload = function () {
        e.removeAllChildren();
        n.unload()
    };
    this._onImagesLoaded = function () { };
    this._onAllImagesLoaded = function () {
        this.attachSprites();
        s_oMain.preloaderReady()
    };
    this.attachSprites = function () {
        var r = new createjs.Shape;
        r.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        e.addChild(r);
        r = s_oSpriteLibrary.getSprite("200x200");
        q = createBitmap(r);
        q.regX = .5 * r.width;
        q.regY = .5 * r.height;
        q.x = CANVAS_WIDTH / 2;
        q.y = CANVAS_HEIGHT / 2 - 180;
        e.addChild(q);
        g = new createjs.Shape;
        g.graphics.beginFill("rgba(0,0,0,0.01)").drawRoundRect(q.x - 100, q.y - 100, 200, 200, 10);
        e.addChild(g);
        q.mask = g;
        r = s_oSpriteLibrary.getSprite("progress_bar");
        b = createBitmap(r);
        b.x = CANVAS_WIDTH / 2 - r.width / 2;
        b.y = CANVAS_HEIGHT / 2 + 50;
        e.addChild(b);
        a = r.width;
        f = r.height;
        l = new createjs.Shape;
        l.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(b.x, b.y, 1, f);
        e.addChild(l);
        b.mask = l;
        c = new createjs.Text("", "30px " + FONT_GAME, "#fff");
        c.x = CANVAS_WIDTH / 2;
        c.y = CANVAS_HEIGHT / 2 + 100;
        c.textBaseline = "alphabetic";
        c.textAlign = "center";
        e.addChild(c);
        r = s_oSpriteLibrary.getSprite("but_start");
        n = new CTextButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT /
            2, r, TEXT_PRELOADER_CONTINUE, "Arial", "#000", "bold 40", e);
        n.addEventListener(ON_MOUSE_UP, this._onButStartRelease, this);
        n.setVisible(!1);
        k = new createjs.Shape;
        k.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        e.addChild(k);
        createjs.Tween.get(k).to({
            alpha: 0
        }, 500).call(function () {
            createjs.Tween.removeTweens(k);
            e.removeChild(k)
        })
    };
    this._onButStartRelease = function () {
        s_oMain._onRemovePreloader()
    };
    this.refreshLoader = function (e) {
        c.text = e + "%";
        100 === e && (s_oMain._onRemovePreloader(), c.visible = !1, b.visible = !1);
        l.graphics.clear();
        e = Math.floor(e * a / 100);
        l.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(b.x, b.y, e, f)
    };
    this._init()
}

function CMain(a) {
    var f, c = 0,
        b = 0,
        l = STATE_LOADING,
        k, q;
    this.initContainer = function () {
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
        k = new CPreloader
        // seekAndDestroy() ? k =  new CPreloader : window.location.href = "http://www.codethislab.com/contact-us.html"
    };
    this.preloaderReady = function () {
        this._loadImages();
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || this._initSounds();
        f = !0
    };
    this.soundLoaded = function () {
        c++;
        k.refreshLoader(Math.floor(c / b * 100))
    };
    this._initSounds = function () {
        Howler.mute(!s_bAudioActive);
        s_aSoundsInfo = [];
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "win",
            loop: !0,
            volume: 1,
            ingamename: "win"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "press_but",
            loop: !1,
            volume: 1,
            ingamename: "press_but"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "reel_stop",
            loop: !1,
            volume: 1,
            ingamename: "reel_stop"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "reels",
            loop: !1,
            volume: 1,
            ingamename: "reels"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "choose_bonus_item",
            loop: !1,
            volume: 1,
            ingamename: "choose_bonus_item"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "start_reel",
            loop: !1,
            volume: 1,
            ingamename: "start_reel"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "press_hold",
            loop: !1,
            volume: 1,
            ingamename: "press_hold"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "soundtrack",
            loop: !0,
            volume: 1,
            ingamename: "soundtrack"
        });
        b += s_aSoundsInfo.length;
        s_aSounds = [];
        for (var a = 0; a < s_aSoundsInfo.length; a++) this.tryToLoadSound(s_aSoundsInfo[a], !1)
    };
    this.tryToLoadSound = function (a, b) {
        setTimeout(function () {
            s_aSounds[a.ingamename] = new Howl({
                src: [a.path + a.filename + ".mp3"],
                autoplay: !1,
                preload: !0,
                loop: a.loop,
                volume: a.volume,
                onload: s_oMain.soundLoaded,
                onloaderror: function (a, e) {
                    for (var b = 0; b < s_aSoundsInfo.length; b++)
                        if (a ===
                            s_aSounds[s_aSoundsInfo[b].ingamename]._sounds[0]._id) {
                            s_oMain.tryToLoadSound(s_aSoundsInfo[b], !0);
                            break
                        }
                },
                onplayerror: function (a) {
                    for (var e = 0; e < s_aSoundsInfo.length; e++)
                        if (a === s_aSounds[s_aSoundsInfo[e].ingamename]._sounds[0]._id) {
                            s_aSounds[s_aSoundsInfo[e].ingamename].once("unlock", function () {
                                s_aSounds[s_aSoundsInfo[e].ingamename].play();
                                "soundtrack" === s_aSoundsInfo[e].ingamename && null !== s_oGame && setVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME)
                            });
                            break
                        }
                }
            })
        }, b ? 200 : 0)
    };
    this._loadImages = function () {
        s_oSpriteLibrary.init(this._onImagesLoaded,
            this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
        s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
        s_oSpriteLibrary.addSprite("bg_game", "./sprites/bg_game.jpg");
        s_oSpriteLibrary.addSprite("paytable", "./sprites/paytable.jpg");
        s_oSpriteLibrary.addSprite("but_play_bg", "./sprites/but_play_bg.png");
        s_oSpriteLibrary.addSprite("mask_slot", "./sprites/mask_slot.png");
        s_oSpriteLibrary.addSprite("spin_but", "./sprites/but_spin_bg.png");
        s_oSpriteLibrary.addSprite("coin_but",
            "./sprites/but_coin_bg.png");
        s_oSpriteLibrary.addSprite("info_but", "./sprites/but_info_bg.png");
        s_oSpriteLibrary.addSprite("bet_but", "./sprites/bet_but.png");
        s_oSpriteLibrary.addSprite("win_frame_anim", "./sprites/win_frame_anim.png");
        s_oSpriteLibrary.addSprite("but_lines_bg", "./sprites/but_lines_bg.png");
        s_oSpriteLibrary.addSprite("but_maxbet_bg", "./sprites/but_maxbet_bg.png");
        s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
        s_oSpriteLibrary.addSprite("hit_area_col", "./sprites/hit_area_col.png");
        s_oSpriteLibrary.addSprite("hold_col", "./sprites/hold_col.png");
        s_oSpriteLibrary.addSprite("bonus_bg", "./sprites/bonus_bg.jpg");
        s_oSpriteLibrary.addSprite("bonus_item", "./sprites/bonus_item.png");
        s_oSpriteLibrary.addSprite("bonus_prize", "./sprites/bonus_prize.png");
        s_oSpriteLibrary.addSprite("but_fullscreen", "./sprites/but_fullscreen.png");
        s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
        s_oSpriteLibrary.addSprite("logo_ctl", "./sprites/logo_ctl.png");
        s_oSpriteLibrary.addSprite("but_credits",
            "./sprites/but_credits.png");
        for (var a = 1; a < NUM_SYMBOLS + 1; a++) s_oSpriteLibrary.addSprite("symbol_" + a, "./sprites/symbol_" + a + ".png"), s_oSpriteLibrary.addSprite("symbol_" + a + "_anim", "./sprites/symbol_" + a + "_anim.png");
        for (a = 1; a < NUM_PAYLINES + 1; a++) s_oSpriteLibrary.addSprite("payline_" + a, "./sprites/payline_" + a + ".png");
        b += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites()
    };
    this._onImagesLoaded = function () {
        c++;
        k.refreshLoader(Math.floor(c / b * 100))
    };
    this._onAllImagesLoaded = function () { };
    this.onAllPreloaderImagesLoaded =
        function () {
            this._loadImages()
        };
    this._onRemovePreloader = function () {
        k.unload();
        s_oSoundTrack = playSound("soundtrack", 1, !0);
        this.gotoMenu()
    };
    this.gotoMenu = function () {
        new CMenu;
        l = STATE_MENU
    };
    this.gotoGame = function () {
        q = new CGame(g);
        l = STATE_GAME
    };
    this.gotoHelp = function () {
        new CHelp;
        l = STATE_HELP
    };
    this.stopUpdate = function () {
        f = !1;
        createjs.Ticker.paused = !0;
        $("#block_game").css("display", "block");
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || Howler.mute(!0)
    };
    this.startUpdate = function () {
        s_iPrevTime = (new Date).getTime();
        f = !0;
        createjs.Ticker.paused = !1;
        $("#block_game").css("display", "none");
        (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) && s_bAudioActive && Howler.mute(!1)
    };
    this._update = function (a) {
        if (!1 !== f) {
            var e = (new Date).getTime();
            s_iTimeElaps = e - s_iPrevTime;
            s_iCntTime += s_iTimeElaps;
            s_iCntFps++;
            s_iPrevTime = e;
            1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps, s_iCntTime -= 1E3, s_iCntFps = 0);
            l === STATE_GAME && q.update();
            s_oStage.update(a)
        }
    };
    s_oMain = this;
    var g = a;
    PAYTABLE_VALUES = [];
    for (var n = 0; 8 > n; n++) PAYTABLE_VALUES[n] = a["paytable_symbol_" +
        (n + 1)];
    ENABLE_FULLSCREEN = a.fullscreen;
    ENABLE_CHECK_ORIENTATION = a.check_orientation;
    SHOW_CREDITS = g.show_credits;
    this.initContainer()
}
var s_bMobile, s_bAudioActive = true,
    s_iCntTime = 0,
    s_iTimeElaps = 0,
    s_iPrevTime = 0,
    s_iCntFps = 0,
    s_iCurFps = 0,
    s_oDrawLayer, s_oStage, s_oMain, s_oSpriteLibrary, s_oSoundTrack = null,
    s_bFullscreen = !1,
    s_aSoundsInfo;

function CTextButton(a, f, c, b, l, k, q) {
    var g, n, e, r, x, h, m, p, y, D;
    this._init = function (a, b, c, f, h, m, k) {
        g = !1;
        r = [];
        x = [];
        D = createBitmap(c);
        n = c.width;
        e = c.height;
        y = new createjs.Text(f, k + "px " + h, m);
        y.textAlign = "center";
        y.shadow = new createjs.Shadow("#000", 2, 2, 2);
        y.textBaseline = "middle";
        y.lineHeight = 24;
        y.x = c.width / 2;
        y.y = c.height / 2;
        p = new createjs.Container;
        p.x = a;
        p.y = b;
        p.regX = c.width / 2;
        p.regY = c.height / 2;
        p.addChild(D, y);
        p.cursor = "pointer";
        s_oStage.addChild(p);
        this._initListener()
    };
    this.unload = function () {
        p.off("mousedown",
            h);
        p.off("pressup", m);
        s_oStage.removeChild(p)
    };
    this.setVisible = function (a) {
        p.visible = a
    };
    this.enable = function () {
        g = !1;
        D.filters = [];
        D.cache(0, 0, n, e)
    };
    this.disable = function () {
        g = !0;
        var a = (new createjs.ColorMatrix).adjustSaturation(-100);
        D.filters = [new createjs.ColorMatrixFilter(a)];
        D.cache(0, 0, n, e)
    };
    this._initListener = function () {
        h = p.on("mousedown", this.buttonDown);
        m = p.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function (a, e, b) {
        r[a] = e;
        x[a] = b
    };
    this.buttonRelease = function () {
        g || (playSound("press_but",
            1, !1), p.scaleX = 1, p.scaleY = 1, r[ON_MOUSE_UP] && r[ON_MOUSE_UP].call(x[ON_MOUSE_UP]))
    };
    this.buttonDown = function () {
        g || (p.scaleX = .9, p.scaleY = .9, r[ON_MOUSE_DOWN] && r[ON_MOUSE_DOWN].call(x[ON_MOUSE_DOWN]))
    };
    this.setPosition = function (a, e) {
        p.x = a;
        p.y = e
    };
    this.changeText = function (a) {
        y.text = a
    };
    this.setX = function (a) {
        p.x = a
    };
    this.setY = function (a) {
        p.y = a
    };
    this.getButtonImage = function () {
        return p
    };
    this.getX = function () {
        return p.x
    };
    this.getY = function () {
        return p.y
    };
    this._init(a, f, c, b, l, k, q);
    return this
}

function CGfxButton(a, f, c, b) {
    var l, k, q, g, n, e, r, x, h;
    this._init = function (a, e, b, c) {
        l = !1;
        g = [];
        n = [];
        h = createBitmap(b);
        h.x = a;
        h.y = e;
        k = b.width;
        q = b.height;
        h.regX = b.width / 2;
        h.regY = b.height / 2;
        h.cursor = "pointer";
        !1 !== c && s_oStage.addChild(h);
        this._initListener()
    };
    this.unload = function () {
        h.off("mousedown", r);
        h.off("pressup", x);
        s_oStage.removeChild(h)
    };
    this.setVisible = function (a) {
        h.visible = a
    };
    this.enable = function () {
        l = !1;
        h.filters = [];
        h.cache(0, 0, k, q)
    };
    this.disable = function () {
        l = !0;
        var a = (new createjs.ColorMatrix).adjustSaturation(-100).adjustBrightness(40);
        h.filters = [new createjs.ColorMatrixFilter(a)];
        h.cache(0, 0, k, q)
    };
    this._initListener = function () {
        r = h.on("mousedown", this.buttonDown);
        x = h.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function (a, e, b) {
        g[a] = e;
        n[a] = b
    };
    this.addEventListenerWithParams = function (a, b, c, f) {
        g[a] = b;
        n[a] = c;
        e = f
    };
    this.buttonRelease = function () {
        l || (playSound("press_but", 1, !1), h.scaleX = 1, h.scaleY = 1, g[ON_MOUSE_UP] && g[ON_MOUSE_UP].call(n[ON_MOUSE_UP], e))
    };
    this.buttonDown = function () {
        l || (h.scaleX = .9, h.scaleY = .9, g[ON_MOUSE_DOWN] &&
            g[ON_MOUSE_DOWN].call(n[ON_MOUSE_DOWN], e))
    };
    this.setPosition = function (a, e) {
        h.x = a;
        h.y = e
    };
    this.setX = function (a) {
        h.x = a
    };
    this.setY = function (a) {
        h.y = a
    };
    this.getButtonImage = function () {
        return h
    };
    this.getX = function () {
        return h.x
    };
    this.getY = function () {
        return h.y
    };
    this.getSprite = function () {
        return h
    };
    this._init(a, f, c, b);
    return this
}

function CToggle(a, f, c, b, l) {
    var k, q, g, n, e, r, x;
    this._init = function (a, e, b, c, f) {
        x = void 0 !== f ? f : s_oStage;
        q = [];
        g = [];
        f = new createjs.SpriteSheet({
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
        k = c;
        n = createSprite(f, "state_" + k, b.width / 2 / 2, b.height / 2, b.width / 2, b.height);
        n.x = a;
        n.y = e;
        n.stop();
        s_bMobile || (n.cursor = "pointer");
        x.addChild(n);
        this._initListener()
    };
    this.unload = function () {
        n.off("mousedown", e);
        n.off("pressup", r);
        x.removeChild(n)
    };
    this._initListener = function () {
        e = n.on("mousedown", this.buttonDown);
        r = n.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function (a, e, b) {
        q[a] = e;
        g[a] = b
    };
    this.setCursorType = function (a) {
        n.cursor = a
    };
    this.setActive = function (a) {
        k = a;
        n.gotoAndStop("state_" + k)
    };
    this.buttonRelease = function () {
        n.scaleX = 1;
        n.scaleY = 1;
        playSound("press_but", 1, !1);
        k = !k;
        n.gotoAndStop("state_" + k);
        q[ON_MOUSE_UP] && q[ON_MOUSE_UP].call(g[ON_MOUSE_UP], k)
    };
    this.buttonDown = function () {
        n.scaleX = .9;
        n.scaleY = .9;
        q[ON_MOUSE_DOWN] && q[ON_MOUSE_DOWN].call(g[ON_MOUSE_DOWN])
    };
    this.setPosition = function (a, e) {
        n.x = a;
        n.y = e
    };
    this._init(a, f, c, b, l)
}

function CBetBut(a, f, c) {
    var b, l, k, q = [],
        g;
    this._init = function (a, e, c) {
        b = !1;
        l = [];
        k = [];
        c = s_oSpriteLibrary.getSprite("bet_but");
        var f = new createjs.SpriteSheet({
            images: [c],
            frames: {
                width: c.width / 2,
                height: c.height,
                regX: 0,
                regY: 0
            },
            animations: {
                on: [0, 1],
                off: [1, 2]
            }
        });
        g = createSprite(f, "on", 0, 0, c.width / 2, c.height);
        g.stop();
        g.x = a;
        g.y = e;
        g.regX = c.width / 2;
        g.regY = c.height / 2;
        g.cursor = "pointer";
        s_oStage.addChild(g);
        this._initListener()
    };
    this.unload = function () {
        g.off("mousedown", this.buttonDown);
        g.off("pressup", this.buttonRelease);
        s_oStage.removeChild(g)
    };
    this.disable = function (a) {
        b = a
    };
    this.setVisible = function (a) {
        g.visible = a
    };
    this.setOn = function () {
        g.gotoAndStop("on")
    };
    this.setOff = function () {
        g.gotoAndStop("off")
    };
    this._initListener = function () {
        g.on("mousedown", this.buttonDown);
        g.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function (a, e, b) {
        l[a] = e;
        k[a] = b
    };
    this.addEventListenerWithParams = function (a, e, b, c) {
        l[a] = e;
        k[a] = b;
        q = c
    };
    this.buttonRelease = function () {
        l[ON_MOUSE_UP] && !1 === b && (playSound("press_but", 1, !1), l[ON_MOUSE_UP].call(k[ON_MOUSE_UP],
            q))
    };
    this.buttonDown = function () {
        l[ON_MOUSE_DOWN] && !1 === b && l[ON_MOUSE_DOWN].call(k[ON_MOUSE_DOWN], q)
    };
    this.setPosition = function (a, e) {
        g.x = a;
        g.y = e
    };
    this.setX = function (a) {
        g.x = a
    };
    this.setY = function (a) {
        g.y = a
    };
    this.getButtonImage = function () {
        return g
    };
    this.getX = function () {
        return g.x
    };
    this.getY = function () {
        return g.y
    };
    this._init(a, f, c)
}

function CMenu() {
    var a, f, c, b, l, k, q, g = null,
        n = null,
        e, r, x, h, m;
    this._init = function () {
        e = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        s_oStage.addChild(e);
        var p = s_oSpriteLibrary.getSprite("but_play_bg");

        r = new CTextButton((CANVAS_WIDTH / 2) + 150, CANVAS_HEIGHT - 80, p, TEXT_PLAY, FONT_GAME, "#aade00", 58);
        back = new CTextButton((CANVAS_WIDTH / 2) - 150, CANVAS_HEIGHT - 80, p, TEXT_BACK, FONT_GAME, "#ffde00", 58);

        r.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
        back.addEventListener(ON_MOUSE_UP, this._backLobby, this)
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) p = s_oSpriteLibrary.getSprite("audio_icon"), l = CANVAS_WIDTH - p.width / 4 - 10, k = p.height / 2 + 10, h = new CToggle(l, k, p,
            s_bAudioActive, s_oStage), h.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this), setVolume("soundtrack", 1);
        SHOW_CREDITS ? (p = s_oSpriteLibrary.getSprite("but_credits"), a = p.height / 2 + 10, f = p.height / 2 + 10, x = new CGfxButton(a, f, p, s_oStage), x.addEventListener(ON_MOUSE_UP, this._onButCreditsRelease, this), c = a + p.width + 10, b = f) : (c = p.height / 2 + 10, b = p.height / 2 + 10);
        p = window.document;
        var y = p.documentElement;
        g = y.requestFullscreen || y.mozRequestFullScreen || y.webkitRequestFullScreen || y.msRequestFullscreen;
        n = p.exitFullscreen ||
            p.mozCancelFullScreen || p.webkitExitFullscreen || p.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (g = !1);
        g && screenfull.enabled && (p = s_oSpriteLibrary.getSprite("but_fullscreen"), q = new CToggle(c, b, p, s_bFullscreen, s_oStage), q.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        m = new createjs.Shape;
        m.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(m);
        createjs.Tween.get(m).to({
            alpha: 0
        }, 600).call(function () {
            m.visible = !1
        });
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.refreshButtonPos = function (e, r) {
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || h.setPosition(l - e, r + k);
        g && screenfull.enabled && q.setPosition(c + e, b + r);
        SHOW_CREDITS && x.setPosition(a + e, f + r)
    };
    this.unload = function () {
        r.unload();
        r = null;
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) h.unload(), h = null;
        SHOW_CREDITS && x.unload();
        g && screenfull.enabled && q.unload();
        s_oStage.removeAllChildren();
        s_oMenu = null
    };
    this._onButPlayRelease = function () {
        this.unload();
        s_oMain.gotoGame();
        $(s_oMain).trigger("start_session")
    };
    this._backLobby = function () {
        this.unload();
        window.location.href = 'https://kingdeportes.com'
    };
    this._onAudioToggle =
        function () {
            Howler.mute(s_bAudioActive);
            s_bAudioActive = !s_bAudioActive
        };
    this._onButCreditsRelease = function () {
        new CCreditsPanel
    };
    this.resetFullscreenBut = function () {
        g && screenfull.enabled && q.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function () {
        s_bFullscreen ? n.call(window.document) : g.call(window.document.documentElement);
        sizeHandler()
    };
    s_oMenu = this;
    this._init()
}
var s_oMenu = null;

function CGame(a) {
    var f = !1,
        c, b, l = !0,
        k, q, g, n, e, r, x, h, m, p, y, D = 0,
        B, A, C, I, G, L, H, v, O, S, R, w, T, z, M = null,
        Q;
    this._init = function () {
        k = GAME_STATE_IDLE;
        c = !0;
        A = y = n = q = 0;
        L = [0, 1, 2, 3, 4];
        g = L[0];
        e = NUM_PAYLINES;
        p = TOTAL_MONEY;
        h = MIN_BET;
        m = h * e;
        H = [];
        for (var a = 0; a < NUM_ROWS; a++) {
            H[a] = [];
            for (var d = 0; d < NUM_REELS; d++) H[a][d] = 0
        }
        s_oTweenController = new CTweenController;
        w = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
        s_oStage.addChild(w);
        this._initReels();
        T = createBitmap(s_oSpriteLibrary.getSprite("mask_slot"));
        s_oStage.addChild(T);
        this._initStaticSymbols();
        this._initHitAreaColumn();
        z = new CInterface(h, m, p);
        Q = new CBonusPanel;
        M = new CPayTablePanel;
        p < m && z.disableSpin();
        setVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME);
        f = !0
    };
    this.unload = function () {
        stopSound("reels");
        s_oStage.removeChild(w);
        s_oStage.removeChild(T);
        z.unload();
        M.unload();
        for (var a = 0; a < C.length; a++) C[a].unload();
        for (a = 0; a < NUM_ROWS; a++)
            for (var d = 0; d < NUM_REELS; d++) I[a][d].unload();
        Q.unload()
    };
    this._initReels = function () {
        var a = REEL_OFFSET_X,
            d = REEL_OFFSET_Y,
            e = 0;
        C = [];
        for (var b =
            0; b < NUM_REELS; b++) C[b] = new CReelColumn(b, a, d, e), C[b + NUM_REELS] = new CReelColumn(b + NUM_REELS, a, d + SYMBOL_SIZE * NUM_ROWS, e), a += SYMBOL_SIZE + SPACE_BETWEEN_SYMBOLS, e += REEL_DELAY
    };
    this._initStaticSymbols = function () {
        var a = REEL_OFFSET_X,
            d = REEL_OFFSET_Y;
        I = [];
        for (var e = 0; e < NUM_ROWS; e++) {
            I[e] = [];
            for (var b = 0; b < NUM_REELS; b++) {
                var c = new CStaticSymbolCell(e, b, a, d);
                I[e][b] = c;
                a += SYMBOL_SIZE + SPACE_BETWEEN_SYMBOLS
            }
            a = REEL_OFFSET_X;
            d += SYMBOL_SIZE
        }
    };
    this._initHitAreaColumn = function () {
        R = [];
        S = [];
        e = 376;
        b = 116;
        for (var a = 0; a < NUM_REELS; a++) {
            var d =
                createBitmap(s_oSpriteLibrary.getSprite("hold_col"));
            d.x = e;
            d.y = b;
            d.visible = !1;
            s_oStage.addChild(d);
            e += 150;
            S.push(d);
            R[a] = !1
        }
        v = [];
        O = [];
        var e = 381,
            b = 108;
        a = s_oSpriteLibrary.getSprite("hit_area_col");
        for (d = 0; d < NUM_REELS; d++) {
            var c = new createjs.Text(TEXT_HOLD, "30px " + FONT_GAME, "#ffffff");
            c.visible = !1;
            c.x = e + a.width / 2;
            c.y = b + a.height - 20;
            c.shadow = new createjs.Shadow("#000", 1, 1, 2);
            c.textAlign = "center";
            s_oStage.addChild(c);
            v[d] = c;
            c = new CGfxButton(e + a.width / 2, b + a.height / 2, a);
            c.setVisible(!1);
            c.addEventListenerWithParams(ON_MOUSE_UP,
                this._onHitAreaCol, this, {
                index: d
            });
            e += 150;
            O.push(c)
        }
    };

    this.generateFinalSymbols = function () {
        for (var a = 0; a < NUM_ROWS; a++)
            for (var d = 0; d < NUM_REELS; d++){
                !1 === C[d].isHold() && (H[a][d] = s_aRandSymbols[Math.floor(Math.random() * s_aRandSymbols.length)]);
            } 
        
        
            a = this._checkForCombos();
        // console.log(a)
        this._checkForBonus();
        return a
    };


    this._checkForCombos = function () {
        G = [];
        console.log("Matriz final:", H)
        // console.log("e:",e) e=5 number of lines
        for (var a = B = 0; a < e; a++) {
            var d = s_aPaylineCombo[a],
                b = [],
                c = H[d[0].row][d[0].col];

            if (c !== BONUS_SYMBOL) {
                var f = 1,
                    g = 1;
                for (b.push({
                    row: d[0].row,
                    col: d[0].col,
                    value: H[d[0].row][d[0].col]
                }); c ===
                WILD_SYMBOL && g < NUM_REELS;) f++, c = H[d[g].row][d[g].col], b.push({
                    row: d[g].row,
                    col: d[g].col,
                    value: H[d[g].row][d[g].col]
                }), g++;
                for (; g < d.length; g++)
                    if (H[d[g].row][d[g].col] === c || H[d[g].row][d[g].col] === WILD_SYMBOL) {
                        if (H[d[g].row][d[g].col] === BONUS_SYMBOL) break;
                        f++;
                        b.push({
                            row: d[g].row,
                            col: d[g].col,
                            value: H[d[g].row][d[g].col]
                        })
                    } else break;
                c !== BONUS_SYMBOL && 0 < s_aSymbolWin[c - 1][f - 1] && (B += s_aSymbolWin[c - 1][f - 1], G.push({
                    line: a + 1,
                    amount: s_aSymbolWin[c - 1][f - 1],
                    num_win: f,
                    value: c,
                    list: b
                }))
            }
        }
        console.log("G", G);
        return B > m ? !0 : !1
    };
    this._checkForBonus =
        function () {
            b = !1;
            D = 0;
            for (var a = [], d = 0; d < NUM_ROWS; d++)
                for (var e = 0; e < NUM_REELS; e++) H[d][e] === BONUS_SYMBOL && (a.push({
                    row: d,
                    col: e,
                    value: H[d][e]
                }), D++);
            D >= NUM_SYMBOLS_FOR_BONUS && (G.push({
                line: -1,
                amount: 0,
                num_win: D,
                value: BONUS_SYMBOL,
                list: a
            }), 5 < D && (D = 5), b = !0)
        };
    this._generateRandSymbols = function () {
        for (var a = [], d = 0; d < NUM_ROWS; d++) a[d] = s_aRandSymbols[Math.floor(Math.random() * s_aRandSymbols.length)];
        // console.log("a:",a);
        return a
    };
    this.reelArrived = function (a, d) {
        if (q > MIN_REEL_LOOPS)
            if (g === d) {
                if (!1 === C[a].isReadyToStop()) {
                    var e = a;
                    a < NUM_REELS ? (e += NUM_REELS, C[e].setReadyToStop(), C[a].restart([H[0][a], H[1][a], H[2][a]], !0)) : (e -= NUM_REELS, C[e].setReadyToStop(), C[a].restart([H[0][e], H[1][e], H[2][e]], !0))
                }
            } else C[a].restart(this._generateRandSymbols(), !1);
        else C[a].restart(this._generateRandSymbols(), !1), 0 === a && q++
    };
    this.increaseReelLoops = function () {
        q += 2
    };
    this.stopNextReel = function () {
        n++;
        0 === n % 2 && (playSound("reel_stop", .3, !1), g = L[n / 2], n === 2 * NUM_REELS && this._endReelAnimation())
    };
    this._endReelAnimation = function () {
        stopSound("reels");
        n = q = 0;
        g = L[0];
        for (var a = 0; a < NUM_REELS; a++) R[a] = !1, S[a].visible = !1, C[a].setHold(!1), C[a + NUM_REELS].setHold(!1);
        y = 0;
        if (0 < G.length) {
            for (var d = 0; d < G.length; d++) {
                M.highlightCombo(G[d].value, G[d].num_win); - 1 !== G[d].line && z.showLine(G[d].line);
                var e = G[d].list;
                for (a = 0; a < e.length; a++) I[e[a].row][e[a].col].show(e[a].value)
            }
            B *= h;
            p += B;
            SLOT_CASH -= B;
            0 < B && (z.refreshMoney(p), z.refreshWinText(B));
            r = 0;
            k = GAME_STATE_SHOW_ALL_WIN;
            playSound("win", 1, !1);
            c = !0;
            !1 === b && (z.disableBetBut(!1), z.enableGuiButtons())
        } else c ? (this.enableColumnHitArea(),
            c = !1, z.enableSpin(), z.disableMaxBet()) : (z.disableBetBut(!1), z.enableGuiButtons(), c = !0), z.refreshWinText(0), k = GAME_STATE_IDLE;
        p < m && z.disableSpin();
        A++;
        A === N && (A = 0, $(s_oMain).trigger("show_interlevel_ad"));
        $(s_oMain).trigger("save_score", p)
        // console.log("G", G)
    };
    this.hidePayTable = function () {
        M.hide()
    };
    this._showWin = function () {
        if (0 < x) {
            stopSound("win");
            if (-1 !== G[x - 1].line) {
                var a = G[x - 1].line;
                z.hideLine(a)
            }
            a = G[x - 1].list;
            for (var d = 0; d < a.length; d++) I[a[d].row][a[d].col].stopAnim()
        }
        x === G.length && (x = 0); - 1 !== G[x].line && (a = G[x].line,
            z.showLine(a));
        a = G[x].list;
        for (d = 0; d < a.length; d++) I[a[d].row][a[d].col].show(a[d].value);
        x++
    };
    this._hideAllWins = function () {
        for (var a = 0; a < G.length; a++)
            for (var d = G[a].list, e = 0; e < d.length; e++) I[d[e].row][d[e].col].stopAnim();
        z.hideAllLines();
        x = r = 0;
        r = TIME_SHOW_WIN;
        k = GAME_STATE_SHOW_WIN;
        b && Q.show(D, h)
    };
    this.enableColumnHitArea = function () {
        for (var a = 0; a < NUM_REELS; a++) v[a].visible = !0, O[a].setVisible(!0)
    };
    this.disableColumnHitArea = function () {
        for (var a = 0; a < NUM_REELS; a++) v[a].visible = !1, O[a].setVisible(!1)
    };
    this.activateLines = function (a) {
        e = a;
        this.removeWinShowing();
        m = a = h * e;
        z.refreshTotalBet(m);
        z.refreshNumLines(e);
        a > p ? z.disableSpin() : z.enableSpin()
    };
    this.addLine = function () {
        e === NUM_PAYLINES ? e = 1 : e++;
        var a = h * e;
        m = a;
        m = Math.floor(100 * m) / 100;
        z.refreshTotalBet(m);
        z.refreshNumLines(e);
        a > p ? z.disableSpin() : z.enableSpin()
    };
    this.changeCoinBet = function () {
        var a = Math.floor(100 * (h + 100)) / 100;
        a > MAX_BET ? (h = MIN_BET, m = h * e, m = Math.floor(100 * m) / 100, z.refreshBet(h), z.refreshTotalBet(m), a = m) : (a *= e, h += 100, h = Math.floor(100 * h) / 100,
            m = a, m = Math.floor(100 * m) / 100, z.refreshBet(h), z.refreshTotalBet(m));
        a > p ? z.disableSpin() : z.enableSpin()
    };
    this.onMaxBet = function () {
        var a = MAX_BET;
        e = NUM_PAYLINES;
        a *= e;
        h = MAX_BET;
        m = a;
        z.refreshBet(h);
        z.refreshTotalBet(m);
        z.refreshNumLines(e);
        a > p ? z.disableSpin() : (z.enableSpin(), this.onSpin())
    };
    this._onHitAreaCol = function (a) {
        a = a.index;
        !0 === R[a] ? (R[a] = !1, S[a].visible = !1, v[a].visible = !0, y--, C[a].setHold(!1), C[a + NUM_REELS].setHold(!1)) : y < MAX_NUM_HOLD && (R[a] = !0, y++, S[a].visible = !0, v[a].visible = !1, C[a].setHold(!0),
            C[a + NUM_REELS].setHold(!0), playSound("press_hold", 1, !1))
    };
    this.removeWinShowing = function () {
        M.resetHighlightCombo();
        z.resetWin();
        for (var a = 0; a < NUM_ROWS; a++)
            for (var d = 0; d < NUM_REELS; d++) I[a][d].hide();
        for (a = 0; a < C.length; a++) C[a].activate();
        k = GAME_STATE_IDLE
    };
    this.endBonus = function (a) {
        a *= h;
        p += a;
        z.refreshMoney(p);
        SLOT_CASH -= a;
        z.disableBetBut(!1);
        z.enableGuiButtons();
        $(s_oMain).trigger("bonus_end", p);
        $(s_oMain).trigger("save_score", p)
    };
    this.onSpin = function () {
        stopSound("win");
        playSound("reels", .3, !1);
        this.disableColumnHitArea();
        z.disableBetBut(!0);
        this.removeWinShowing();
        MIN_WIN = s_aSymbolWin[0][s_aSymbolWin[0].length - 1];

        for (var a = 0; a < s_aSymbolWin.length; a++)
            for (var d = s_aSymbolWin[a], e = 0; e < d.length; e++) 0 !== d[e] && d[e] < MIN_WIN && (MIN_WIN = d[e]);

        MIN_WIN *= h;

        c && (p -= m, z.refreshMoney(p), SLOT_CASH += m, $(s_oMain).trigger("bet_placed", {
            bet: h,
            tot_bet: m
        }));
//********** oclean66 */
        console.log("C:",C)
        if (!l && C[0].visible && C[1].visible && this._checkForCombos()){
            console.log("op1")
            this._assignWin(); //estudiando
        } 
        else if (SLOT_CASH < MIN_WIN) {
            console.log("op2")
            do a = this.generateFinalSymbols(); while (!0 === a || b) //full ramdon
            console.log(!0,a,b)
            
        } else if (Math.floor(100 * Math.random()) >  WIN_OCCURRENCE) {
            console.log("op3")
            do a = this.generateFinalSymbols(); while (!0 === a || b) //full ramdon
            console.log(!0,a,b)
        } else{
            this._assignWin(); //estudiando
            console.log("op4")
        } 
            
//************** */
        console.log("PayTable: ", s_aSymbolWin)
        console.log("MIN_WIN: ", MIN_WIN)
        console.log("WIN_OCCURRENCE: ", WIN_OCCURRENCE)

        z.hideAllLines();
        z.disableGuiButtons();
        l = !1;
        k = GAME_STATE_SPINNING

        console.log("SLOT_CASH: ", SLOT_CASH)
    };
    this._assignWin = function () {
        if (SLOT_CASH < BONUS_PRIZE[0][0] * h) {
            var a = 0;
            do {
                var d = this.generateFinalSymbols();
                a++
            } while ((!1 === d || B * h > SLOT_CASH || b) && 1E4 >= a)
        } else if (Math.floor(100 * Math.random()) >= BONUS_OCCURRENCE) {
            a = 0;
            do d = this.generateFinalSymbols(), a++; while ((!1 === d || B * h > SLOT_CASH || b) && 1E4 >= a)
        } else {
            a = 0;
            do {
                d = this.generateFinalSymbols();
                var e = 0;
                b &&
                    (e = D - 3);
                a++
            } while ((!1 === d || B * h + BONUS_PRIZE[e][0] * h > SLOT_CASH || !1 === b) && 1E4 >= a)
        }
        if (1E4 < a) {
            do d = this.generateFinalSymbols(); while (!0 === d || b)
        }
    };
    this.onInfoClicked = function () {
        k !== GAME_STATE_SPINNING && (M.isVisible() ? M.hide() : M.show())
    };
    this.onExit = function () {
        this.unload();
        s_oMain.gotoMenu();
        $(s_oMain).trigger("end_session");
        $(s_oMain).trigger("share_event", {
            img: "200x200.jpg",
            title: TEXT_CONGRATULATIONS,
            msg: TEXT_MSG_SHARE1 + p + TEXT_MSG_SHARE2,
            msg_share: TEXT_MSG_SHARING1 + p + TEXT_MSG_SHARING2
        })
    };
    this.getState =
        function () {
            return k
        };
    this.update = function () {
        if (!1 !== f) switch (k) {
            case GAME_STATE_SPINNING:
                for (var a = 0; a < C.length; a++) C[a].update(g);
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
    TIME_SHOW_ALL_WINS =
        a.time_show_all_wins;
    TOTAL_MONEY = a.money;
    MIN_BET = a.min_bet;
    MAX_BET = a.max_bet;
    MAX_NUM_HOLD = a.max_hold;
    BONUS_PRIZE[0] = a.bonus_prize_for_3_symbol;
    BONUS_PRIZE[1] = a.bonus_prize_for_4_symbol;
    BONUS_PRIZE[2] = a.bonus_prize_for_5_symbol;
    PERC_WIN_PRIZE_1 = a.perc_win_prize_1;
    PERC_WIN_PRIZE_2 = a.perc_win_prize_2;
    PERC_WIN_PRIZE_3 = a.perc_win_prize_3;
    var N = a.num_spin_ads_showing;
    new CSlotSettings;
    this._init()
}
var s_oGame, s_oTweenController;

function CReelColumn(a, f, c, b) {
    var l, k, q, g, n, e, r, x, h, m, p, y, D, B, A;
    this._init = function (a, b, c, f) {
        g = q = k = l = !1;
        x = 0;
        n = a;
        r = f;
        e = n < NUM_REELS ? n : n - NUM_REELS;
        m = 0;
        p = MAX_FRAMES_REEL_EASE;
        h = REEL_STATE_START;
        y = c;
        D = y + SYMBOL_SIZE * NUM_ROWS;
        this.initContainer(b, c)
    };
    this.initContainer = function (a, e) {
        A = new createjs.Container;
        A.x = a;
        A.y = e;
        var b = 0;
        B = [];
        for (var c = 0; c < NUM_ROWS; c++) {
            var g = createSprite(s_aSymbolData[s_aRandSymbols[Math.floor(Math.random() * s_aRandSymbols.length)]], "static", 0, 0, SYMBOL_SIZE, SYMBOL_SIZE);
            g.stop();
            g.x =
                0;
            g.y = b;
            A.addChild(g);
            B[c] = g;
            b += SYMBOL_SIZE
        }
        s_oStage.addChild(A)
    };
    this.unload = function () {
        s_oStage.removeChild(A)
    };
    this.activate = function () {
        y = A.y;
        D = y + SYMBOL_SIZE * NUM_ROWS;
        l = !0
    };
    this._setSymbol = function (a) {
        A.removeAllChildren();
        for (var e = 0, b = 0; b < a.length; b++) {
            var c = new createSprite(s_aSymbolData[a[b]], "static", 0, 0, SYMBOL_SIZE, SYMBOL_SIZE);
            c.stop();
            c.x = 0;
            c.y = e;
            A.addChild(c);
            B[b] = c;
            e += SYMBOL_SIZE
        }
    };
    this.setHold = function (a) {
        l = !1;
        g = a;
        x = 0
    };
    this.restart = function (a, e) {
        A.y = y = REEL_START_Y;
        D = y + SYMBOL_SIZE * NUM_ROWS;
        this._setSymbol(a);
        if (k = e) {
            m = 0;
            p = MAX_FRAMES_REEL_EASE;
            h = REEL_STATE_STOP;
            for (var b = 0; b < NUM_ROWS; b++) B[b].gotoAndStop("static");
            q = !0
        } else
            for (b = 0; b < NUM_ROWS; b++) B[b].gotoAndStop("moving")
    };
    this.setReadyToStop = function () {
        m = 0;
        p = MAX_FRAMES_REEL_EASE;
        h = REEL_STATE_STOP
    };
    this.isReadyToStop = function () {
        return k
    };
    this.isHold = function () {
        return g
    };
    this._updateStart = function () {
        0 === m && n < NUM_REELS && playSound("start_reel", .3, !1);
        m++;
        m > p && (m = 0, p /= 2, h++, y = A.y, D = y + SYMBOL_SIZE * NUM_ROWS);
        var a = s_oTweenController.easeInBack(m,
            0, 1, p);
        a = s_oTweenController.tweenValue(y, D, a);
        A.y = a
    };
    this._updateMoving = function () {
        m++;
        m > p && (m = 0, y = A.y, D = y + SYMBOL_SIZE * NUM_ROWS);
        var a = s_oTweenController.easeLinear(m, 0, 1, p);
        a = s_oTweenController.tweenValue(y, D, a);
        A.y = a
    };
    this._updateStopping = function () {
        m++;
        if (m >= p) l = !1, m = 0, p = MAX_FRAMES_REEL_EASE, h = REEL_STATE_START, x = 0, k = !1, q && (q = !1, A.y = REEL_OFFSET_Y), s_oGame.stopNextReel();
        else {
            var a = s_oTweenController.easeOutCubic(m, 0, 1, p);
            a = s_oTweenController.tweenValue(y, D, a);
            A.y = a
        }
    };
    this.update = function (a) {
        if (!1 !==
            l && (x++, x > r))
            if (g) a === n && (l = !1, s_oGame.stopNextReel(), s_oGame.stopNextReel(), 0 === n && s_oGame.increaseReelLoops());
            else switch (!1 === k && A.y > REEL_ARRIVAL_Y && s_oGame.reelArrived(n, e), h) {
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
    this._init(a, f, c, b)
}

function CInterface(a, f, c) {
    var b, l, k, q, g, n, e, r, x, h, m, p, y, D, B, A, C, I, G, L, H = null,
        v = null;
    this._init = function (a, c, f) {
        var w = s_oSpriteLibrary.getSprite("but_exit");
        k = CANVAS_WIDTH - w.width / 2 - 10;
        q = w.height / 2 + 10;
        x = new CGfxButton(k, q, w, !0);
        x.addEventListener(ON_MOUSE_UP, this._onExit, this);
        !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (g = x.getX() - w.width, n = w.height / 2 + 10, y = new CToggle(g, n, s_oSpriteLibrary.getSprite("audio_icon"), s_bAudioActive, s_oStage), y.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this), b = g -
            w.width) : b = k - w.width;
        l = w.height / 2 + 10;
        w = window.document;
        var O = w.documentElement;
        H = O.requestFullscreen || O.mozRequestFullScreen || O.webkitRequestFullScreen || O.msRequestFullscreen;
        v = w.exitFullscreen || w.mozCancelFullScreen || w.webkitExitFullscreen || w.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (H = !1);
        H && screenfull.enabled && (w = s_oSpriteLibrary.getSprite("but_fullscreen"), L = new CToggle(b, l, w, s_bFullscreen, s_oStage), L.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        w = s_oSpriteLibrary.getSprite("spin_but");
        h = new CTextButton(1094 + w.width / 2, CANVAS_HEIGHT - w.height / 2 - 4, w, TEXT_WIN + "\n0.00", FONT_GAME, "#ffde00", 26);
        h.addEventListener(ON_MOUSE_UP, this._onSpin, this);
        w = s_oSpriteLibrary.getSprite("info_but");
        m = new CTextButton(320 + w.width / 2, CANVAS_HEIGHT - w.height / 2 - 4, w, TEXT_INFO, FONT_GAME, "#ffffff", 32);
        m.addEventListener(ON_MOUSE_UP, this._onInfo, this);
        w = s_oSpriteLibrary.getSprite("but_lines_bg");
        p = new CTextButton(490 + w.width / 2, CANVAS_HEIGHT - w.height / 2 - 4, w, TEXT_LINES, FONT_GAME, "#ffffff", 32);
        p.addEventListener(ON_MOUSE_UP,
            this._onAddLine, this);
        w = s_oSpriteLibrary.getSprite("coin_but");
        D = new CTextButton(678 + w.width / 2, CANVAS_HEIGHT - w.height / 2 - 4, w, TEXT_COIN, FONT_GAME, "#ffffff", 32);
        D.addEventListener(ON_MOUSE_UP, this._onBet, this);
        w = s_oSpriteLibrary.getSprite("but_maxbet_bg");
        B = new CTextButton(866 + w.width / 2, CANVAS_HEIGHT - w.height / 2 - 4, w, TEXT_MAX_BET, FONT_GAME, "#ffffff", 32);
        B.addEventListener(ON_MOUSE_UP, this._onMaxBet, this);
        C = new createjs.Text(TEXT_MONEY + "\n" + f.toFixed(2) + TEXT_CURRENCY, "34px " + FONT_GAME, "#ffde00");
        C.x = 450;
        C.y = 46;
        C.textBaseline = "alphabetic";
        C.lineHeight = 28;
        C.textAlign = "center";
        s_oStage.addChild(C);
        G = new createjs.Text(NUM_PAYLINES, "24px " + FONT_GAME, "#ffde00");
        G.x = 584;
        G.y = CANVAS_HEIGHT - 77;
        G.shadow = new createjs.Shadow("#000", 2, 2, 2);
        G.textAlign = "center";
        G.textBaseline = "alphabetic";
        s_oStage.addChild(G);
        A = new createjs.Text(a.toFixed(2), "24px " + FONT_GAME, "#ffde00");
        A.x = 776;
        A.y = CANVAS_HEIGHT - 77;
        A.shadow = new createjs.Shadow("#000", 2, 2, 2);
        A.textAlign = "center";
        A.textBaseline = "alphabetic";
        s_oStage.addChild(A);
        I = new createjs.Text(TEXT_BET + ": " + c.toFixed(2), "24px " + FONT_GAME, "#ffde00");
        I.x = 980;
        I.y = CANVAS_HEIGHT - 77;
        I.shadow = new createjs.Shadow("#000", 2, 2, 2);
        I.textAlign = "center";
        I.textBaseline = "alphabetic";
        s_oStage.addChild(I);
        w = s_oSpriteLibrary.getSprite("bet_but");
        e = [];
        a = new CBetBut(334 + w.width / 2, 282 + w.height / 2, w, !0);
        a.addEventListenerWithParams(ON_MOUSE_UP, this._onBetLineClicked, this, 1);
        e[0] = a;
        a = new CBetBut(334 + w.width / 2, 180 + w.height / 2, w, !0);
        a.addEventListenerWithParams(ON_MOUSE_UP, this._onBetLineClicked,
            this, 2);
        e[1] = a;
        a = new CBetBut(334 + w.width / 2, 432 + w.height / 2, w, !0);
        a.addEventListenerWithParams(ON_MOUSE_UP, this._onBetLineClicked, this, 3);
        e[2] = a;
        a = new CBetBut(334 + w.width / 2, 114 + w.height / 2, w, !0);
        a.addEventListenerWithParams(ON_MOUSE_UP, this._onBetLineClicked, this, 4);
        e[3] = a;
        a = new CBetBut(334 + w.width / 2, 502 + w.height / 2, w, !0);
        a.addEventListenerWithParams(ON_MOUSE_UP, this._onBetLineClicked, this, 5);
        e[4] = a;
        r = [];
        for (a = 0; a < NUM_PAYLINES; a++) c = new createjs.Bitmap(s_oSpriteLibrary.getSprite("payline_" + (a + 1))), c.visible = !1, s_oStage.addChild(c), r[a] = c;
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.unload = function () {
        x.unload();
        x = null;
        h.unload();
        h = null;
        m.unload();
        m = null;
        p.unload();
        p = null;
        D.unload();
        D = null;
        B.unload();
        B = null;
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) y.unload(), y = null;
        H && screenfull.enabled && L.unload();
        for (var a = 0; a < NUM_PAYLINES; a++) e[a].unload();
        s_oStage.removeAllChildren();
        s_oInterface = null
    };
    this.refreshButtonPos = function (a, e) {
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || y.setPosition(g - a, e + n);
        H &&
            screenfull.enabled && L.setPosition(b - a, l + e);
        x.setPosition(k - a, e + q)
    };
    this.refreshMoney = function (a) {
        C.text = TEXT_MONEY + "\n" + a.toFixed(2) + TEXT_CURRENCY
    };
    this.refreshBet = function (a) {
        A.text = a.toFixed(2)
    };
    this.refreshTotalBet = function (a) {
        I.text = TEXT_BET + ": " + a.toFixed(2)
    };
    this.refreshNumLines = function (a) {
        G.text = a;
        for (var b = 0; b < NUM_PAYLINES; b++) b < a ? (e[b].setOn(), r[b].visible = !0) : e[b].setOff();
        setTimeout(function () {
            for (var a = 0; a < NUM_PAYLINES; a++) r[a].visible = !1
        }, 1E3)
    };
    this.resetWin = function () {
        h.changeText("")
    };
    this.refreshWinText = function (a) {
        h.changeText(TEXT_WIN + "\n" + a.toFixed(2))
    };
    this.showLine = function (a) {
        r[a - 1].visible = !0
    };
    this.hideLine = function (a) {
        r[a - 1].visible = !1
    };
    this.hideAllLines = function () {
        for (var a = 0; a < NUM_PAYLINES; a++) r[a].visible = !1
    };
    this.disableBetBut = function (a) {
        for (var b = 0; b < NUM_PAYLINES; b++) e[b].disable(a)
    };
    this.enableGuiButtons = function () {
        h.enable();
        B.enable();
        D.enable();
        p.enable();
        m.enable()
    };
    this.enableSpin = function () {
        h.enable();
        B.enable()
    };
    this.disableSpin = function () {
        h.disable();
        B.disable()
    };
    this.enableMaxBet = function () {
        B.enable()
    };
    this.disableMaxBet = function () {
        B.disable()
    };
    this.disableGuiButtons = function () {
        h.disable();
        B.disable();
        D.disable();
        p.disable();
        m.disable()
    };
    this._onBetLineClicked = function (a) {
        this.refreshNumLines(a);
        s_oGame.activateLines(a)
    };
    this._onExit = function () {
        s_oGame.onExit()
    };
    this._onSpin = function () {
        s_oGame.onSpin()
    };
    this._onAddLine = function () {
        s_oGame.addLine()
    };
    this._onInfo = function () {
        s_oGame.onInfoClicked()
    };
    this._onBet = function () {
        s_oGame.changeCoinBet()
    };
    this._onMaxBet =
        function () {
            s_oGame.onMaxBet()
        };
    this._onAudioToggle = function () {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this.resetFullscreenBut = function () {
        H && screenfull.enabled && L.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function () {
        s_bFullscreen ? v.call(window.document) : H.call(window.document.documentElement);
        sizeHandler()
    };
    s_oInterface = this;
    this._init(a, f, c);
    return this
}
var s_oInterface = null;

function CPayTablePanel() {
    var a, f, c, b, l, k;
    this._init = function () {
        k = new createjs.Container;
        l = createBitmap(s_oSpriteLibrary.getSprite("paytable"));
        k.addChild(l);
        this._createPayouts();
        c = new createjs.Text(TEXT_HELP_WILD, "21px " + FONT_GAME, "#ffff00");
        c.textAlign = "center";
        c.lineWidth = 220;
        c.lineHeight = 22;
        c.x = 635;
        c.y = 290;
        k.addChild(c);
        b = new createjs.Text(TEXT_HELP_BONUS, "21px " + FONT_GAME, "#ffff00");
        b.textAlign = "center";
        b.lineHeight = 22;
        b.lineWidth = 210;
        b.x = 976;
        b.y = 294;
        k.addChild(b);
        k.visible = !1;
        s_oStage.addChild(k);
        var a = this;
        k.on("pressup", function () {
            a._onExit()
        })
    };
    this.unload = function () {
        var b = this;
        k.off("pressup", function () {
            b._onExit()
        });
        s_oStage.removeChild(k);
        for (var c = 0; c < a.length; c++) k.removeChild(a[c]);
        for (c = 0; c < f.length; c++) k.removeChild(f[c])
    };
    this._createPayouts = function () {
        a = [];
        f = [];
        for (var b = [{
            x: 446,
            y: 106
        }, {
            x: 654,
            y: 106
        }, {
            x: 860,
            y: 106
        }, {
            x: 1070,
            y: 106
        }, {
            x: 446,
            y: 195
        }, {
            x: 654,
            y: 195
        }, {
            x: 860,
            y: 195
        }, {
            x: 1070,
            y: 195
        }], c = 0, l = 0; l < s_aSymbolWin.length; l++) {
            for (var e = [], r = 0; r < s_aSymbolWin[l].length; r++) e[r] = s_aSymbolWin[l][r];
            do r = e.indexOf(0), -1 !== r && e.splice(r, 1); while (-1 !== r);
            r = e.length;
            if (0 !== r) {
                var x = 30;
                4 === r && (x = 22);
                var h = b[c].y;
                a[l] = [];
                f[l] = [];
                for (var m = 0; m < r; m++) {
                    var p = new createjs.Text("X" + (5 - m), "25px " + FONT_GAME, "#ffffff");
                    p.textAlign = "center";
                    p.x = b[c].x;
                    p.y = h;
                    p.textBaseline = "alphabetic";
                    k.addChild(p);
                    a[l][m] = p;
                    var y = new createjs.Text(e[r - m - 1], "25px " + FONT_GAME, "#ffff00");
                    y.textAlign = "center";
                    y.x = p.x + 50;
                    y.y = p.y;
                    y.textBaseline = "alphabetic";
                    k.addChild(y);
                    f[l][m] = y;
                    h += x
                }
                c++
            }
        }
    };
    this.show = function () {
        k.visible = !0
    };
    this.hide = function () {
        k.visible = !1
    };
    this.resetHighlightCombo = function () {
        for (var b = 0; b < a.length; b++)
            for (var c = 0; c < a[b].length; c++) a[b][c].color = "#ffffff", f[b][c].color = "#ffff00", createjs.Tween.removeTweens(f[b][c]), f[b][c].alpha = 1
    };
    this.highlightCombo = function (a, b) {
        a !== BONUS_SYMBOL && (f[a - 1][NUM_REELS - b].color = "#ff0000", this.tweenAlpha(f[a - 1][NUM_REELS - b], 0))
    };
    this.tweenAlpha = function (a, b) {
        var c = this;
        createjs.Tween.get(a).to({
            alpha: b
        }, 200).call(function () {
            1 === b ? c.tweenAlpha(a, 0) : c.tweenAlpha(a, 1)
        })
    };
    this._onExit = function () {
        s_oGame.hidePayTable()
    };
    this.isVisible = function () {
        return k.visible
    };
    this._init()
}

function CStaticSymbolCell(a, f, c, b) {
    var l = -1,
        k, q, g, n;
    this._init = function (a, b, c, f) {
        n = new createjs.Container;
        n.visible = !1;
        q = [];
        for (a = 0; a < NUM_SYMBOLS; a++) b = createSprite(s_aSymbolAnims[a], "static", 0, 0, SYMBOL_SIZE, SYMBOL_SIZE), b.stop(), b.x = c, b.y = f, b.on("animationend", this._onAnimEnded, null, !1, {
            index: a
        }), n.addChild(b), q[a] = b, q[a].visible = !1;
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
        g = new createSprite(a, "static", 0, 0, SYMBOL_SIZE, SYMBOL_SIZE);
        g.stop();
        g.x = c;
        g.y = f;
        n.addChild(g);
        s_oStage.addChild(n)
    };
    this.unload = function () {
        s_oStage.removeChild(n)
    };
    this.hide = function () {
        -1 < l && (g.gotoAndStop("static"), g.visible = !1, q[l].gotoAndPlay("static"), n.visible = !1)
    };
    this.show = function (a) {
        g.gotoAndPlay("anim");
        g.visible = !0;
        for (var b = 0; b < NUM_SYMBOLS; b++) q[b].visible = b + 1 === a ? !0 : !1;
        q[a - 1].gotoAndPlay("anim");
        l = a - 1;
        k = q[a - 1].spriteSheet.getNumFrames();
        n.visible = !0
    };
    this._onAnimEnded = function (a, b) {
        q[b.index].currentFrame !== k && (q[b.index].stop(), setTimeout(function () {
            q[b.index].gotoAndPlay(1)
        }, 100))
    };
    this.stopAnim = function () {
        q[l].gotoAndStop("static");
        q[l].visible = !1;
        g.gotoAndStop("static");
        g.visible = !1
    };
    this._init(a, f, c, b)
}

function CTweenController() {
    this.tweenValue = function (a, f, c) {
        return a + c * (f - a)
    };
    this.easeLinear = function (a, f, c, b) {
        return c * a / b + f
    };
    this.easeInCubic = function (a, f, c, b) {
        b = (a /= b) * a * a;
        return f + c * b
    };
    this.easeBackInQuart = function (a, f, c, b) {
        b = (a /= b) * a;
        return f + c * (2 * b * b + 2 * b * a + -3 * b)
    };
    this.easeInBack = function (a, f, c, b) {
        return c * (a /= b) * a * (2.70158 * a - 1.70158) + f
    };
    this.easeOutCubic = function (a, f, c, b) {
        return c * ((a = a / b - 1) * a * a + 1) + f
    }
}

function CBonusPanel() {
    var a, f, c, b, l, k, q, g, n;
    this._init = function () {
        n = new createjs.Container;
        s_oStage.addChild(n);
        var a = createBitmap(s_oSpriteLibrary.getSprite("bonus_bg"));
        n.alpha = 0;
        n.visible = !1;
        n.addChild(a);
        a = {
            framerate: 6,
            images: [s_oSpriteLibrary.getSprite("bonus_item")],
            frames: {
                width: BONUS_ITEM_WIDTH,
                height: BONUS_ITEM_HEIGHT
            },
            animations: {
                idle: [0],
                item_clicked: [1, 14, "idle"]
            }
        };
        a = new createjs.SpriteSheet(a);
        b = [];
        for (var c = [{
            x: 253,
            y: 30
        }, {
            x: 577,
            y: 118
        }, {
            x: 946,
            y: 19
        }, {
            x: 262,
            y: 305
        }, {
            x: 927,
            y: 305
        }], f = 0; 5 >
            f; f++) {
            var h = createSprite(a, "idle", 0, 0, BONUS_ITEM_WIDTH, BONUS_ITEM_HEIGHT);
            h.on("click", this._onBonusItemReleased, this, !1, f);
            h.x = c[f].x;
            h.y = c[f].y;
            h.visible = !1;
            n.addChild(h);
            b[f] = h
        }
        a = s_oSpriteLibrary.getSprite("bonus_prize");
        k = [];
        q = [];
        k[0] = createBitmap(a);
        k[0].x = 300;
        k[0].y = CANVAS_HEIGHT - 90;
        n.addChild(k[0]);
        c = new createjs.Text("100", "44px " + FONT_GAME, "#ffff00");
        c.textAlign = "left";
        c.x = k[0].x + a.width + 10;
        c.y = k[0].y + a.height / 2;
        c.textBaseline = "middle";
        n.addChild(c);
        q.push(c);
        k[1] = createBitmap(a);
        k[1].x =
            600;
        k[1].y = CANVAS_HEIGHT - 90;
        n.addChild(k[1]);
        c = new createjs.Text("200", "44px " + FONT_GAME, "#ffff00");
        c.textAlign = "left";
        c.x = k[1].x + a.width + 10;
        c.y = k[1].y + a.height / 2;
        c.textBaseline = "middle";
        n.addChild(c);
        q.push(c);
        k[2] = createBitmap(a);
        k[2].x = 900;
        k[2].y = CANVAS_HEIGHT - 90;
        n.addChild(k[2]);
        c = new createjs.Text("300", "44px " + FONT_GAME, "#ffff00");
        c.textAlign = "left";
        c.x = k[2].x + a.width + 10;
        c.y = k[2].y + a.height / 2;
        c.textBaseline = "middle";
        n.addChild(c);
        q.push(c);
        g = [{
            x: 440,
            y: 129
        }, {
            x: 765,
            y: 219
        }, {
            x: 1134,
            y: 129
        }, {
            x: 450,
            y: 405
        }, {
            x: 1114,
            y: 405
        }]
    };
    this.unload = function () {
        for (var a = 0; 5 > a; a++) b[a].off("click", this._onBonusItemReleased)
    };
    this.show = function (e, f) {
        $(s_oMain).trigger("bonus_start");
        c = f;
        a = !1;
        switch (e) {
            case 3:
                l = BONUS_PRIZE[0];
                break;
            case 4:
                l = BONUS_PRIZE[1];
                break;
            case 5:
                l = BONUS_PRIZE[2];
                break;
            default:
                l = BONUS_PRIZE[0]
        }
        q[0].text = "X" + l[0];
        q[1].text = "X" + l[1];
        q[2].text = "X" + l[2];
        for (var g = 0; g < e; g++) b[g].visible = !0;
        n.visible = !0;
        createjs.Tween.get(n).to({
            alpha: 1
        }, 1E3)
    };
    this._onBonusItemReleased = function (e, g) {
        if (!a) {
            a = !0;
            do var k = Math.floor(Math.random() * s_aPrizeOccurence.length); while (l[s_aPrizeOccurence[k]] * c > SLOT_CASH);
            f = l[s_aPrizeOccurence[k]];
            b[g].gotoAndPlay("item_clicked");
            playSound("choose_bonus_item", 1, !1);
            this.endBonus(g)
        }
    };
    this.endBonus = function (a) {
        new CScoreText("X" + f, g[a].x, g[a].y);
        setTimeout(function () {
            n.alpha = 0;
            n.visible = !1;
            for (var a = 0; a < b.length; a++) b[a].visible = !1;
            s_oGame.endBonus(f)
        }, 4E3)
    };
    this._init()
}

function CScoreText(a, f, c) {
    var b;
    this._init = function (a, c, f) {
        b = new createjs.Text("00000", "50px " + FONT_GAME, "#ff0000");
        b.textAlign = "center";
        b.text = a;
        b.x = c;
        b.y = f;
        b.alpha = 0;
        b.shadow = new createjs.Shadow("#000000", 2, 2, 2);
        s_oStage.addChild(b);
        var g = this;
        createjs.Tween.get(b).to({
            alpha: 1
        }, 400, createjs.Ease.quadIn).call(function () {
            g.moveUp()
        })
    };
    this.moveUp = function () {
        var a = b.y - 100,
            c = this;
        createjs.Tween.get(b).to({
            y: a
        }, 1E3, createjs.Ease.sineIn).call(function () {
            c.unload()
        })
    };
    this.unload = function () {
        s_oStage.removeChild(b)
    };
    this._init(a, f, c)
}

function CCreditsPanel() {
    var a, f, c, b, l, k, q, g, n, e;
    this._init = function () {
        e = new createjs.Container;
        e.alpha = 0;
        s_oStage.addChild(e);
        var r = new createjs.Shape;
        r.graphics.beginFill("rgba(0,0,0,0.7)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        e.addChild(r);
        f = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
        e.addChild(f);
        q = new createjs.Shape;
        q.graphics.beginFill("#0f0f0f").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        q.alpha = .01;
        q.on("click", this._onLogoButRelease);
        e.addChild(q);
        r = s_oSpriteLibrary.getSprite("but_exit");
        a =
            CANVAS_WIDTH / 2 + 310;
        b = new CGfxButton(a, 195, r, e);
        b.addEventListener(ON_MOUSE_UP, this.unload, this);
        k = new createjs.Text(TEXT_CREDITS_DEVELOPED, "40px " + FONT_GAME, "#000");
        k.textAlign = "center";
        k.textBaseline = "alphabetic";
        k.x = CANVAS_WIDTH / 2;
        k.y = 270;
        k.outline = 2;
        e.addChild(k);
        l = new createjs.Text(TEXT_CREDITS_DEVELOPED, "40px " + FONT_GAME, "#fff");
        l.textAlign = "center";
        l.textBaseline = "alphabetic";
        l.x = CANVAS_WIDTH / 2;
        l.y = 270;
        e.addChild(l);
        r = s_oSpriteLibrary.getSprite("logo_ctl");
        c = createBitmap(r);
        c.regX = r.width / 2;
        c.regY = r.height / 2;
        c.x = CANVAS_WIDTH / 2;
        c.y = CANVAS_HEIGHT / 2;
        e.addChild(c);
        // n = new createjs.Text("GeekSkull Studio", "34px " + FONT_GAME, "#000");
        // n.textAlign = "center";
        // n.textBaseline = "alphabetic";
        // n.x = CANVAS_WIDTH / 2;
        // n.y = 395;
        // n.outline = 2;
        // e.addChild(n);
        // g = new createjs.Text("GeekSkull Studio", "34px " + FONT_GAME, "#fff");
        // g.textAlign = "center";
        // g.textBaseline = "alphabetic";
        // g.x = CANVAS_WIDTH / 2;
        // g.y = 395;
        // e.addChild(g);
        createjs.Tween.get(e).to({
            alpha: 1
        }, 600, createjs.Ease.cubicOut);
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.refreshButtonPos = function (a, b) { };
    this.unload = function () {
        q.off("click", this._onLogoButRelease);
        b.unload();
        b = null;
        s_oStage.removeChild(e)
    };
    this._onLogoButRelease = function () {
        window.open("https://kingdeportes.com/", "_blank")
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
    var f = a.split("."),
        c = f.length;
    2 < c && (a = f[c - 2] + "." + f[c - 1]);
    return a
}
var getClosestTop = function () {
    var a = window,
        f = !1;
    try {
        for (; a.parent.document !== a.document;)
            if (a.parent.document) a = a.parent;
            else {
                f = !0;
                break
            }
    } catch (c) {
        f = !0
    }
    return {
        topFrame: a,
        err: f
    }
},
    getBestPageUrl = function (a) {
        var f = a.topFrame,
            c = "";
        if (a.err) try {
            try {
                c = window.top.location.href
            } catch (l) {
                var b = window.location.ancestorOrigins;
                c = b[b.length - 1]
            }
        } catch (l) {
            c = f.document.referrer
        } else c = f.location.href;
        return c
    },
    TOPFRAMEOBJ = getClosestTop(),
    PAGE_URL = getBestPageUrl(TOPFRAMEOBJ);

function seekAndDestroy() {
    for (var a = extractRootDomain(PAGE_URL), f = [String.fromCharCode(99, 111, 100, 101, 116, 104, 105, 115, 108, 97, 98, 46, 99, 111, 109), String.fromCharCode(101, 110, 118, 97, 116, 111, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116)], c = 0; c < f.length; c++)
        if (f[c] === a) return !0;
    return !1
};