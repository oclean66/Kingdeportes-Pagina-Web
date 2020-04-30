/*
 Platform.js <https://mths.be/platform>
 Copyright 2014-2018 Benjamin Tan <https://bnjmnt4n.now.sh/>
 Copyright 2011-2013 John-David Dalton
 Available under MIT license <https://mths.be/mit>
*/
(function() {
    function n(c) {
        c = String(c);
        return c.charAt(0).toUpperCase() + c.slice(1)
    }

    function b(c, a) {
        var d = -1,
            b = c ? c.length : 0;
        if ("number" == typeof b && -1 < b && b <= q)
            for (; ++d < b;) a(c[d], d, c);
        else h(c, a)
    }

    function g(c) {
        c = String(c).replace(/^ +| +$/g, "");
        return /^(?:webOS|i(?:OS|P))/.test(c) ? c : n(c)
    }

    function h(c, a) {
        for (var d in c) y.call(c, d) && a(c[d], d, c)
    }

    function a(c) {
        return null == c ? n(c) : A.call(c).slice(8, -1)
    }

    function e(c, a) {
        var d = null != c ? typeof c[a] : "number";
        return !/^(?:boolean|number|string|undefined)$/.test(d) &&
            ("object" == d ? !!c[a] : !0)
    }

    function c(c) {
        return String(c).replace(/([ -])(?!$)/g, "$1?")
    }

    function f(c, a) {
        var d = null;
        b(c, function(b, e) {
            d = a(d, b, e, c)
        });
        return d
    }

    function k(d) {
        function b(a) {
            return f(a, function(a, b) {
                var e = b.pattern || c(b);
                !a && (a = RegExp("\\b" + e + " *\\d+[.\\w_]*", "i").exec(d) || RegExp("\\b" + e + " *\\w+-[\\w]*", "i").exec(d) || RegExp("\\b" + e + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(d)) && ((a = String(b.label && !RegExp(e, "i").test(b.label) ? b.label : a).split("/"))[1] && !/[\d.]+/.test(a[0]) && (a[0] +=
                    " " + a[1]), b = b.label || b, a = g(a[0].replace(RegExp(e, "i"), b).replace(RegExp("; *(?:" + b + "[_-])?", "i"), " ").replace(RegExp("(" + b + ")[-_.]?(\\w)", "i"), "$1 $2")));
                return a
            })
        }

        function m(c) {
            return f(c, function(c, a) {
                return c || (RegExp(a + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(d) || 0)[1] || null
            })
        }
        var l = p,
            q = d && "object" == typeof d && "String" != a(d);
        q && (l = d, d = null);
        var t = l.navigator || {},
            w = t.userAgent || "";
        d || (d = w);
        var B = q ? !!t.likeChrome : /\bChrome\b/.test(d) && !/internal|\n/i.test(A.toString()),
            n = q ? "Object" : "ScriptBridgingProxyObject",
            y = q ? "Object" : "Environment",
            v = q && l.java ? "JavaPackage" : a(l.java),
            z = q ? "Object" : "RuntimeObject";
        y = (v = /\bJava/.test(v) && l.java) && a(l.environment) == y;
        var M = v ? "a" : "\u03b1",
            O = v ? "b" : "\u03b2",
            L = l.document || {},
            N = l.operamini || l.opera,
            X = r.test(X = q && N ? N["[[Class]]"] : a(N)) ? X : N = null,
            x, K = d;
        q = [];
        var U = null,
            S = d == w;
        w = S && N && "function" == typeof N.version && N.version();
        var P = function(a) {
                return f(a, function(a, b) {
                    return a || RegExp("\\b" + (b.pattern || c(b)) + "\\b", "i").exec(d) && (b.label ||
                        b)
                })
            }([{
                label: "EdgeHTML",
                pattern: "Edge"
            }, "Trident", {
                label: "WebKit",
                pattern: "AppleWebKit"
            }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]),
            G = function(a) {
                return f(a, function(a, b) {
                    return a || RegExp("\\b" + (b.pattern || c(b)) + "\\b", "i").exec(d) && (b.label || b)
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
            Q = b([{
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
            T = function(a) {
                return f(a, function(a, b, e) {
                    return a || (b[Q] || b[/^[a-z]+(?: +[a-z]+\b)*/i.exec(Q)] || RegExp("\\b" + c(e) + "(?:\\b|\\w*\\d)", "i").exec(d)) && e
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
            H = function(a) {
                return f(a, function(a, b) {
                    var e = b.pattern || c(b);
                    if (!a && (a = RegExp("\\b" + e + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(d))) {
                        var k = a,
                            f = b.label || b,
                            p = {
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
                        e && f && /^Win/i.test(k) && !/^Windows Phone /i.test(k) && (p = p[/[\d.]+$/.exec(k)]) && (k = "Windows " + p);
                        k = String(k);
                        e && f && (k = k.replace(RegExp(e, "i"), f));
                        a = k = g(k.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/,
                            " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
                    }
                    return a
                })
            }(["Windows Phone", "Android", "CentOS", {
                    label: "Chrome OS",
                    pattern: "CrOS"
                }, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac",
                "Windows 98;", "Windows "
            ]);
        P && (P = [P]);
        T && !Q && (Q = b([T]));
        if (x = /\bGoogle TV\b/.exec(Q)) Q = x[0];
        /\bSimulator\b/i.test(d) && (Q = (Q ? Q + " " : "") + "Simulator");
        "Opera Mini" == G && /\bOPiOS\b/.test(d) && q.push("running in Turbo/Uncompressed mode");
        "IE" == G && /\blike iPhone OS\b/.test(d) ? (x = k(d.replace(/like iPhone OS/, "")), T = x.manufacturer, Q = x.product) : /^iP/.test(Q) ? (G || (G = "Safari"), H = "iOS" + ((x = / OS ([\d_]+)/i.exec(d)) ? " " + x[1].replace(/_/g, ".") : "")) : "Konqueror" != G || /buntu/i.test(H) ? T && "Google" != T && (/Chrome/.test(G) &&
            !/\bMobile Safari\b/i.test(d) || /\bVita\b/.test(Q)) || /\bAndroid\b/.test(H) && /^Chrome/.test(G) && /\bVersion\//i.test(d) ? (G = "Android Browser", H = /\bAndroid\b/.test(H) ? H : "Android") : "Silk" == G ? (/\bMobi/i.test(d) || (H = "Android", q.unshift("desktop mode")), /Accelerated *= *true/i.test(d) && q.unshift("accelerated")) : "PaleMoon" == G && (x = /\bFirefox\/([\d.]+)\b/.exec(d)) ? q.push("identifying as Firefox " + x[1]) : "Firefox" == G && (x = /\b(Mobile|Tablet|TV)\b/i.exec(d)) ? (H || (H = "Firefox OS"), Q || (Q = x[1])) : !G || (x = !/\bMinefield\b/i.test(d) &&
            /\b(?:Firefox|Safari)\b/.exec(G)) ? (G && !Q && /[\/,]|^[^(]+?\)/.test(d.slice(d.indexOf(x + "/") + 8)) && (G = null), (x = Q || T || H) && (Q || T || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(H)) && (G = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(H) ? H : x) + " Browser")) : "Electron" == G && (x = (/\bChrome\/([\d.]+)\b/.exec(d) || 0)[1]) && q.push("Chromium " + x) : H = "Kubuntu";
        w || (w = m(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", c(G), "(?:Firefox|Minefield|NetFront)"]));
        if (x = "iCab" == P && 3 < parseFloat(w) && "WebKit" || /\bOpera\b/.test(G) && (/\bOPR\b/.test(d) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(d) && !/^(?:Trident|EdgeHTML)$/.test(P) && "WebKit" || !P && /\bMSIE\b/i.test(d) && ("Mac OS" == H ? "Tasman" : "Trident") || "WebKit" == P && /\bPlayStation\b(?! Vita\b)/i.test(G) && "NetFront") P = [x];
        "IE" == G && (x = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(d) || 0)[1]) ? (G += " Mobile", H = "Windows Phone " + (/\+$/.test(x) ? x : x + ".x"), q.unshift("desktop mode")) : /\bWPDesktop\b/i.test(d) ? (G = "IE Mobile", H = "Windows Phone 8.x",
            q.unshift("desktop mode"), w || (w = (/\brv:([\d.]+)/.exec(d) || 0)[1])) : "IE" != G && "Trident" == P && (x = /\brv:([\d.]+)/.exec(d)) && (G && q.push("identifying as " + G + (w ? " " + w : "")), G = "IE", w = x[1]);
        if (S) {
            if (e(l, "global"))
                if (v && (x = v.lang.System, K = x.getProperty("os.arch"), H = H || x.getProperty("os.name") + " " + x.getProperty("os.version")), y) {
                    try {
                        w = l.require("ringo/engine").version.join("."), G = "RingoJS"
                    } catch (Y) {
                        (x = l.system) && x.global.system == l.system && (G = "Narwhal", H || (H = x[0].os || null))
                    }
                    G || (G = "Rhino")
                } else "object" == typeof l.process &&
                    !l.process.browser && (x = l.process) && ("object" == typeof x.versions && ("string" == typeof x.versions.electron ? (q.push("Node " + x.versions.node), G = "Electron", w = x.versions.electron) : "string" == typeof x.versions.nw && (q.push("Chromium " + w, "Node " + x.versions.node), G = "NW.js", w = x.versions.nw)), G || (G = "Node.js", K = x.arch, H = x.platform, w = (w = /[\d.]+/.exec(x.version)) ? w[0] : null));
            else a(x = l.runtime) == n ? (G = "Adobe AIR", H = x.flash.system.Capabilities.os) : a(x = l.phantom) == z ? (G = "PhantomJS", w = (x = x.version || null) && x.major + "." + x.minor +
                "." + x.patch) : "number" == typeof L.documentMode && (x = /\bTrident\/(\d+)/i.exec(d)) ? (w = [w, L.documentMode], (x = +x[1] + 4) != w[1] && (q.push("IE " + w[1] + " mode"), P && (P[1] = ""), w[1] = x), w = "IE" == G ? String(w[1].toFixed(1)) : w[0]) : "number" == typeof L.documentMode && /^(?:Chrome|Firefox)\b/.test(G) && (q.push("masking as " + G + " " + w), G = "IE", w = "11.0", P = ["Trident"], H = "Windows");
            H = H && g(H)
        }
        w && (x = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(w) || /(?:alpha|beta)(?: ?\d)?/i.exec(d + ";" + (S && t.appMinorVersion)) || /\bMinefield\b/i.test(d) &&
            "a") && (U = /b/i.test(x) ? "beta" : "alpha", w = w.replace(RegExp(x + "\\+?$"), "") + ("beta" == U ? O : M) + (/\d+\+?/.exec(x) || ""));
        if ("Fennec" == G || "Firefox" == G && /\b(?:Android|Firefox OS)\b/.test(H)) G = "Firefox Mobile";
        else if ("Maxthon" == G && w) w = w.replace(/\.[\d.]+/, ".x");
        else if (/\bXbox\b/i.test(Q)) "Xbox 360" == Q && (H = null), "Xbox 360" == Q && /\bIEMobile\b/.test(d) && q.unshift("mobile mode");
        else if (!/^(?:Chrome|IE|Opera)$/.test(G) && (!G || Q || /Browser|Mobi/.test(G)) || "Windows CE" != H && !/Mobi/i.test(d))
            if ("IE" == G && S) try {
                null === l.external &&
                    q.unshift("platform preview")
            } catch (Y) {
                q.unshift("embedded")
            } else(/\bBlackBerry\b/.test(Q) || /\bBB10\b/.test(d)) && (x = (RegExp(Q.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(d) || 0)[1] || w) ? (x = [x, /BB10/.test(d)], H = (x[1] ? (Q = null, T = "BlackBerry") : "Device Software") + " " + x[0], w = null) : this != h && "Wii" != Q && (S && N || /Opera/.test(G) && /\b(?:MSIE|Firefox)\b/i.test(d) || "Firefox" == G && /\bOS X (?:\d+\.){2,}/.test(H) || "IE" == G && (H && !/^Win/.test(H) && 5.5 < w || /\bWindows XP\b/.test(H) && 8 < w || 8 == w && !/\bTrident\b/.test(d))) && !r.test(x =
                k.call(h, d.replace(r, "") + ";")) && x.name && (x = "ing as " + x.name + ((x = x.version) ? " " + x : ""), r.test(G) ? (/\bIE\b/.test(x) && "Mac OS" == H && (H = null), x = "identify" + x) : (x = "mask" + x, G = X ? g(X.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(x) && (H = null), S || (w = null)), P = ["Presto"], q.push(x));
            else G += " Mobile";
        if (x = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(d) || 0)[1]) {
            x = [parseFloat(x.replace(/\.(\d)$/, ".0$1")), x];
            if ("Safari" == G && "+" == x[1].slice(-1)) G = "WebKit Nightly", U = "alpha", w = x[1].slice(0, -1);
            else if (w == x[1] || w == (x[2] =
                    (/\bSafari\/([\d.]+\+?)/i.exec(d) || 0)[1])) w = null;
            x[1] = (/\bChrome\/([\d.]+)/i.exec(d) || 0)[1];
            537.36 == x[0] && 537.36 == x[2] && 28 <= parseFloat(x[1]) && "WebKit" == P && (P = ["Blink"]);
            S && (B || x[1]) ? (P && (P[1] = "like Chrome"), x = x[1] || (x = x[0], 530 > x ? 1 : 532 > x ? 2 : 532.05 > x ? 3 : 533 > x ? 4 : 534.03 > x ? 5 : 534.07 > x ? 6 : 534.1 > x ? 7 : 534.13 > x ? 8 : 534.16 > x ? 9 : 534.24 > x ? 10 : 534.3 > x ? 11 : 535.01 > x ? 12 : 535.02 > x ? "13+" : 535.07 > x ? 15 : 535.11 > x ? 16 : 535.19 > x ? 17 : 536.05 > x ? 18 : 536.1 > x ? 19 : 537.01 > x ? 20 : 537.11 > x ? "21+" : 537.13 > x ? 23 : 537.18 > x ? 24 : 537.24 > x ? 25 : 537.36 > x ? 26 : "Blink" !=
                P ? "27" : "28")) : (P && (P[1] = "like Safari"), x = (x = x[0], 400 > x ? 1 : 500 > x ? 2 : 526 > x ? 3 : 533 > x ? 4 : 534 > x ? "4+" : 535 > x ? 5 : 537 > x ? 6 : 538 > x ? 7 : 601 > x ? 8 : "8"));
            P && (P[1] += " " + (x += "number" == typeof x ? ".x" : /[.+]/.test(x) ? "" : "+"));
            "Safari" == G && (!w || 45 < parseInt(w)) && (w = x)
        }
        "Opera" == G && (x = /\bzbov|zvav$/.exec(H)) ? (G += " ", q.unshift("desktop mode"), "zvav" == x ? (G += "Mini", w = null) : G += "Mobile", H = H.replace(RegExp(" *" + x + "$"), "")) : "Safari" == G && /\bChrome\b/.exec(P && P[1]) && (q.unshift("desktop mode"), G = "Chrome Mobile", w = null, /\bOS X\b/.test(H) ? (T =
            "Apple", H = "iOS 4.3+") : H = null);
        w && 0 == w.indexOf(x = /[\d.]+$/.exec(H)) && -1 < d.indexOf("/" + x + "-") && (H = String(H.replace(x, "")).replace(/^ +| +$/g, ""));
        P && !/\b(?:Avant|Nook)\b/.test(G) && (/Browser|Lunascape|Maxthon/.test(G) || "Safari" != G && /^iOS/.test(H) && /\bSafari\b/.test(P[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(G) && P[1]) && (x = P[P.length - 1]) && q.push(x);
        q.length && (q = ["(" + q.join("; ") + ")"]);
        T && Q && 0 > Q.indexOf(T) && q.push("on " + T);
        Q && q.push((/^on /.test(q[q.length -
            1]) ? "" : "on ") + Q);
        if (H) {
            var W = (x = / ([\d.+]+)$/.exec(H)) && "/" == H.charAt(H.length - x[0].length - 1);
            H = {
                architecture: 32,
                family: x && !W ? H.replace(x[0], "") : H,
                version: x ? x[1] : null,
                toString: function() {
                    var c = this.version;
                    return this.family + (c && !W ? " " + c : "") + (64 == this.architecture ? " 64-bit" : "")
                }
            }
        }(x = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(K)) && !/\bi686\b/i.test(K) ? (H && (H.architecture = 64, H.family = H.family.replace(RegExp(" *" + x), "")), G && (/\bWOW64\b/i.test(d) || S && /\w(?:86|32)$/.test(t.cpuClass || t.platform) && !/\bWin64; x64\b/i.test(d)) &&
            q.unshift("32-bit")) : H && /^OS X/.test(H.family) && "Chrome" == G && 39 <= parseFloat(w) && (H.architecture = 64);
        d || (d = null);
        l = {};
        l.description = d;
        l.layout = P && P[0];
        l.manufacturer = T;
        l.name = G;
        l.prerelease = U;
        l.product = Q;
        l.ua = d;
        l.version = G && w;
        l.os = H || {
            architecture: null,
            family: null,
            version: null,
            toString: function() {
                return "null"
            }
        };
        l.parse = k;
        l.toString = function() {
            return this.description || ""
        };
        l.version && q.unshift(w);
        l.name && q.unshift(G);
        H && G && (H != String(H).split(" ")[0] || H != G.split(" ")[0] && !Q) && q.push(Q ? "(" + H + ")" : "on " +
            H);
        q.length && (l.description = q.join(" "));
        return l
    }
    var d = {
            "function": !0,
            object: !0
        },
        p = d[typeof window] && window || this,
        m = d[typeof exports] && exports;
    d = d[typeof module] && module && !module.nodeType && module;
    var l = m && d && "object" == typeof global && global;
    !l || l.global !== l && l.window !== l && l.self !== l || (p = l);
    var q = Math.pow(2, 53) - 1,
        r = /\bOpera/;
    l = Object.prototype;
    var y = l.hasOwnProperty,
        A = l.toString,
        v = k();
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (p.platform = v, define(function() {
            return v
        })) : m &&
        d ? h(v, function(c, d) {
            m[d] = c
        }) : p.platform = v
}).call(this);

function buildIOSMeta() {
    for (var n = [{
            name: "viewport",
            content: "width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
        }, {
            name: "apple-mobile-web-app-capable",
            content: "yes"
        }, {
            name: "apple-mobile-web-app-status-bar-style",
            content: "black"
        }], b = 0; b < n.length; b++) {
        var g = document.createElement("meta");
        g.name = n[b].name;
        g.content = n[b].content;
        var h = window.document.head.querySelector('meta[name="' + g.name + '"]');
        h && h.parentNode.removeChild(h);
        window.document.head.appendChild(g)
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
$(document).ready(function() {
    platform && "iPhone" === platform.product && "Safari" === platform.name && (buildIOSFullscreenPanel(), buildIOSMeta())
});
jQuery(window).resize(function() {
    platform && "iPhone" === platform.product && "Safari" === platform.name && iosResize()
});
(function() {
    var n = "undefined" !== typeof window && "undefined" !== typeof window.document ? window.document : {},
        b = "undefined" !== typeof module && module.exports,
        g = "undefined" !== typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
        h = function() {
            for (var c, a = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "),
                    "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "), "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")
                ], b = 0, d = a.length, e = {}; b < d; b++)
                if ((c = a[b]) && c[1] in n) {
                    for (b = 0; b < c.length; b++) e[a[0][b]] =
                        c[b];
                    return e
                }
            return !1
        }(),
        a = {
            change: h.fullscreenchange,
            error: h.fullscreenerror
        },
        e = {
            request: function(c) {
                var a = h.requestFullscreen;
                c = c || n.documentElement;
                if (/5\.1[.\d]* Safari/.test(navigator.userAgent)) c[a]();
                else c[a](g && Element.ALLOW_KEYBOARD_INPUT)
            },
            exit: function() {
                n[h.exitFullscreen]()
            },
            toggle: function(c) {
                this.isFullscreen ? this.exit() : this.request(c)
            },
            onchange: function(c) {
                this.on("change", c)
            },
            onerror: function(c) {
                this.on("error", c)
            },
            on: function(c, b) {
                var e = a[c];
                e && n.addEventListener(e, b, !1)
            },
            off: function(c,
                b) {
                var e = a[c];
                e && n.removeEventListener(e, b, !1)
            },
            raw: h
        };
    h ? (Object.defineProperties(e, {
        isFullscreen: {
            get: function() {
                return !!n[h.fullscreenElement]
            }
        },
        element: {
            enumerable: !0,
            get: function() {
                return n[h.fullscreenElement]
            }
        },
        enabled: {
            enumerable: !0,
            get: function() {
                return !!n[h.fullscreenEnabled]
            }
        }
    }), b ? module.exports = e : window.screenfull = e) : b ? module.exports = !1 : window.screenfull = !1
})();
var s_iOffsetX = 0,
    s_iOffsetY = 0,
    s_fInverseScaling, s_bLandscape = !1;
(function(n) {
    (jQuery.browser = jQuery.browser || {}).mobile = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(n) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(n.substr(0,
        4))
})(navigator.userAgent || navigator.vendor || window.opera);
$(window).resize(function() {
    sizeHandler()
});

function trace(n) {
    console.log(n)
}

function isIOS() {
    for (var n = "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";"); n.length;)
        if (navigator.platform === n.pop()) return s_bIsIphone = !0;
    return s_bIsIphone = !1
}
window.addEventListener("orientationchange", onOrientationChange);

function onOrientationChange() {
    window.matchMedia("(orientation: portrait)").matches && sizeHandler();
    window.matchMedia("(orientation: landscape)").matches && sizeHandler()
}

function getSize(n) {
    var b = n.toLowerCase(),
        g = window.document,
        h = g.documentElement;
    if (void 0 === window["inner" + n]) n = h["client" + n];
    else if (window["inner" + n] != h["client" + n]) {
        var a = g.createElement("body");
        a.id = "vpw-test-b";
        a.style.cssText = "overflow:scroll";
        var e = g.createElement("div");
        e.id = "vpw-test-d";
        e.style.cssText = "position:absolute;top:-1000px";
        e.innerHTML = "<style>@media(" + b + ":" + h["client" + n] + "px){body#vpw-test-b div#vpw-test-d{" + b + ":7px!important}}</style>";
        a.appendChild(e);
        h.insertBefore(a, g.head);
        n = 7 == e["offset" + n] ? h["client" + n] : window["inner" + n];
        h.removeChild(a)
    } else n = window["inner" + n];
    return n
}

function getIOSWindowHeight() {
    return document.documentElement.clientWidth / window.innerWidth * window.innerHeight
}

function getHeightOfIOSToolbars() {
    var n = (0 === window.orientation ? screen.height : screen.width) - getIOSWindowHeight();
    return 1 < n ? n : 0
}

function sizeHandler() {
    window.scrollTo(0, 1);
    if ($("#canvas")) {
        var n = "safari" === platform.name.toLowerCase() ? getIOSWindowHeight() : getSize("Height");
        var b = getSize("Width"),
            g = Math.min(n / CANVAS_HEIGHT, b / CANVAS_WIDTH);
        s_bLandscape = b > n ? !0 : !1;
        var h = Math.round(CANVAS_WIDTH * g);
        g = Math.round(CANVAS_HEIGHT * g);
        if (g < n) {
            var a = n - g;
            g += a;
            h += CANVAS_WIDTH / CANVAS_HEIGHT * a
        } else h < b && (a = b - h, h += a, g += CANVAS_HEIGHT / CANVAS_WIDTH * a);
        a = n / 2 - g / 2;
        var e = b / 2 - h / 2,
            c = CANVAS_WIDTH / h;
        if (e * c < -EDGEBOARD_X || a * c < -EDGEBOARD_Y) s_iScaleFactor =
            Math.min(n / (CANVAS_HEIGHT - 2 * EDGEBOARD_Y), b / (CANVAS_WIDTH - 2 * EDGEBOARD_X)), h = Math.round(CANVAS_WIDTH * s_iScaleFactor), g = Math.round(CANVAS_HEIGHT * s_iScaleFactor), a = (n - g) / 2, e = (b - h) / 2, c = CANVAS_WIDTH / h;
        s_fInverseScaling = c;
        s_iOffsetX = -1 * e * c;
        s_iOffsetY = -1 * a * c;
        0 <= a && (s_iOffsetY = 0);
        0 <= e && (s_iOffsetX = 0);
        null !== s_oInterface && s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        s_oGame && s_oGame.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        $("#canvas").css("width",
            h + "px");
        $("#canvas").css("height", g + "px");
        0 > a || (a = (n - g) / 2);
        $("#canvas").css("top", a + "px");
        s_iCanvasOffsetHeight = a;
        $("#canvas").css("left", e + "px");
        resizeCanvas3D();
        s_iCanvasResizeWidth = h;
        s_iCanvasResizeHeight = g;
        s_iCanvasOffsetWidth = e;
        fullscreenHandler()
    }
}

function _checkOrientation(n, b) {
    s_bMobile && ENABLE_CHECK_ORIENTATION && (n > b ? "landscape" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()) : "portrait" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"),
        s_oMain.stopUpdate()))
}

function createBitmap(n, b, g) {
    var h = new createjs.Bitmap(n),
        a = new createjs.Shape;
    b && g ? a.graphics.beginFill("#fff").drawRect(-b / 2, -g / 2, b, g) : a.graphics.beginFill("#ff0").drawRect(0, 0, n.width, n.height);
    h.hitArea = a;
    return h
}

function createSprite(n, b, g, h, a, e) {
    n = null !== b ? new createjs.Sprite(n, b) : new createjs.Sprite(n);
    b = new createjs.Shape;
    b.graphics.beginFill("#000000").drawRect(-g, -h, a, e);
    n.hitArea = b;
    return n
}

function smartResize(n, b, g) {
    (function(b, a) {
        if (null !== b.getBounds()) {
            var e = b.getBounds().width + a,
                c = CANVAS_WIDTH - 2 * s_iOffsetX;
            e > c && (b.scaleX = b.scaleY = c / e)
        }
    })(n, b);
    (function(b, a) {
        if (null !== b.getBounds()) {
            var e = b.getBounds().height + a,
                c = CANVAS_HEIGHT - 2 * s_iOffsetY;
            e > c && (b.scaleX = b.scaleY = c / e)
        }
    })(n, g)
}

function linearFunction(n, b, g, h, a) {
    return (n - b) * (a - h) / (g - b) + h
}

function randomFloatBetween(n, b, g) {
    "undefined" === typeof g && (g = 2);
    return parseFloat(Math.min(n + Math.random() * (b - n), b).toFixed(g))
}

function shuffle(n) {
    for (var b = n.length, g, h; 0 !== b;) h = Math.floor(Math.random() * b), --b, g = n[b], n[b] = n[h], n[h] = g;
    return n
}

function formatTime(n) {
    n /= 1E3;
    var b = Math.floor(n / 60);
    n = Math.floor(n - 60 * b);
    var g = "";
    g = 10 > b ? g + ("0" + b + ":") : g + (b + ":");
    return 10 > n ? g + ("0" + n) : g + n
}

function degreesToRadians(n) {
    return n * Math.PI / 180
}

function distance(n, b) {
    return Math.sqrt((b.x - n.x) * (b.x - n.x) + (b.y - n.y) * (b.y - n.y))
}

function distance2(n, b) {
    return (b.x - n.x) * (b.x - n.x) + (b.y - n.y) * (b.y - n.y)
}

function NoClickDelay(n) {
    this.element = n;
    window.Touch && this.element.addEventListener("touchstart", this, !1)
}

function shuffle(n) {
    for (var b = n.length, g, h; 0 < b;) h = Math.floor(Math.random() * b), b--, g = n[b], n[b] = n[h], n[h] = g;
    return n
}
NoClickDelay.prototype = {
    handleEvent: function(n) {
        switch (n.type) {
            case "touchstart":
                this.onTouchStart(n);
                break;
            case "touchmove":
                this.onTouchMove(n);
                break;
            case "touchend":
                this.onTouchEnd(n)
        }
    },
    onTouchStart: function(n) {
        n.preventDefault();
        this.moved = !1;
        this.element.addEventListener("touchmove", this, !1);
        this.element.addEventListener("touchend", this, !1)
    },
    onTouchMove: function(n) {
        this.moved = !0
    },
    onTouchEnd: function(n) {
        this.element.removeEventListener("touchmove", this, !1);
        this.element.removeEventListener("touchend",
            this, !1);
        if (!this.moved) {
            n = document.elementFromPoint(n.changedTouches[0].clientX, n.changedTouches[0].clientY);
            3 == n.nodeType && (n = n.parentNode);
            var b = document.createEvent("MouseEvents");
            b.initEvent("click", !0, !0);
            n.dispatchEvent(b)
        }
    }
};
(function() {
    function n(g) {
        var n = {
            focus: "visible",
            focusin: "visible",
            pageshow: "visible",
            blur: "hidden",
            focusout: "hidden",
            pagehide: "hidden"
        };
        g = g || window.event;
        g.type in n ? document.body.className = n[g.type] : (document.body.className = this[b] ? "hidden" : "visible", "hidden" === document.body.className ? s_oMain.stopUpdate() : s_oMain.startUpdate())
    }
    var b = "hidden";
    b in document ? document.addEventListener("visibilitychange", n) : (b = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", n) : (b = "webkitHidden") in
        document ? document.addEventListener("webkitvisibilitychange", n) : (b = "msHidden") in document ? document.addEventListener("msvisibilitychange", n) : "onfocusin" in document ? document.onfocusin = document.onfocusout = n : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = n
})();

function playSound(n, b, g) {
    return !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (s_aSounds[n].play(), s_aSounds[n].volume(b), s_aSounds[n].loop(g), s_aSounds[n]) : null
}

function stopSound(n) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[n].stop()
}

function setVolume(n, b) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[n].volume(b)
}

function setMute(n, b) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[n].mute(b)
}

function ctlArcadeResume() {
    null !== s_oMain && s_oMain.startUpdate()
}

function ctlArcadePause() {
    null !== s_oMain && s_oMain.stopUpdate()
}

function getParamValue(n) {
    for (var b = window.location.search.substring(1).split("&"), g = 0; g < b.length; g++) {
        var h = b[g].split("=");
        if (h[0] == n) return h[1]
    }
}

function rotateVector2D(n, b) {
    return {
        x: b.x * Math.cos(n) + b.y * Math.sin(n),
        y: b.x * -Math.sin(n) + b.y * Math.cos(n)
    }
}

function normalize(n, b) {
    0 < b && (n.x /= b, n.y /= b);
    return n
}

function length(n) {
    return Math.sqrt(n.x * n.x + n.y * n.y)
}

function findNearestIntersectingObject(n, b, g, h) {
    var a = CANVAS_RESIZE_WIDTH + 2 * OFFSET_WIDTH,
        e = CANVAS_RESIZE_HEIGHT + 2 * OFFSET_HEIGHT,
        c = new THREE.Raycaster,
        f = new THREE.Vector3;
    f.x = n / a * 2 - 1;
    f.y = 2 * -(b / e) + 1;
    f.z = .5;
    c.setFromCamera(f, g);
    n = c.intersectObjects(h, !0);
    b = !1;
    0 < n.length && (b = n[0]);
    return b
}

function distance(n, b, g, h) {
    n -= g;
    b -= h;
    return Math.sqrt(n * n + b * b)
}

function distance2(n, b, g, h) {
    n -= g;
    b -= h;
    return n * n + b * b
}

function resizeCanvas3D() {
    $("canvas").each(function() {
        "#canvas" != $(this).attr("id") && ($(this).css("width", $("#canvas").css("width")), $(this).css("height", $("#canvas").css("height")), $(this).css("position", $("#canvas").css("position")), $(this).css("left", $("#canvas").css("left")), $(this).css("top", $("#canvas").css("top")))
    })
}

function convert3dPosTo2dScreen(n, b) {
    var g = new THREE.Vector3;
    g.set(n.x, n.y, n.z);
    g.project(b);
    g.x = Math.round((g.x + 1) * CANVAS_WIDTH * .5);
    g.y = Math.round((-g.y + 1) * CANVAS_HEIGHT * .5);
    g.z = 0;
    return g
}

function convert2dPosTo3d(n, b) {
    var g = new THREE.Vector3;
    g.set(n.x / CANVAS_WIDTH * 2 - 1, 2 * -(n.y / CANVAS_HEIGHT) + 1, .5);
    g.unproject(b);
    g = g.sub(b.position).normalize();
    var h = -b.position.z / g.z;
    g = b.position.clone().add(g.multiplyScalar(h));
    return {
        x: g.x,
        y: g.y
    }
}

function createOrthoGraphicCamera() {
    var n = CANVAS_WIDTH / 2,
        b = CANVAS_HEIGHT / 2;
    n = new THREE.OrthographicCamera(-n, n, b, -b, NEAR, FAR);
    n.position.set(START_CAMERA_POSITION.x, START_CAMERA_POSITION.y, START_CAMERA_POSITION.z);
    n.zoom = CAMERA_ZOOM;
    n.updateProjectionMatrix();
    n.updateMatrixWorld();
    return n
}

function dotProductV2(n, b) {
    return n.getX() * b.getX() + n.getY() * b.getY()
}

function pointInPoly(n, b) {
    for (var g = !1, h = -1, a = b.length, e = a - 1; ++h < a; e = h)(b[h].y <= n.y && n.y < b[e].y || b[e].y <= n.y && n.y < b[h].y) && n.x < (b[e].x - b[h].x) * (n.y - b[h].y) / (b[e].y - b[h].y) + b[h].x && (g = !g);
    return g
}

function findPointOnCircle(n, b, g, h) {
    return {
        x: g * Math.cos(h) + n,
        y: g * Math.sin(h) + b
    }
}

function angleBetweenVectors(n, b) {
    var g = dotProductV2(n, b),
        h = n.getX() * b.getY() - n.getY() * b.getX();
    return Math.atan2(h, g)
}

function rotateVector2D(n, b) {
    var g = b.getX() * Math.cos(n) + b.getY() * Math.sin(n),
        h = b.getX() * -Math.sin(n) + b.getY() * Math.cos(n);
    return {
        x: g,
        y: h,
        z: 0
    }
}
Math.radians = function(n) {
    return n * Math.PI / 180
};
Math.degrees = function(n) {
    return 180 * n / Math.PI
};

function distanceV3(n, b, g, h, a, e) {
    n -= h;
    b -= a;
    g -= e;
    return Math.sqrt(n * n + b * b + g * g)
}

function distanceV2(n, b) {
    var g = n.x - b.x,
        h = n.y - b.y;
    return Math.sqrt(g * g + h * h)
}

function fullscreenHandler() {
    ENABLE_FULLSCREEN && screenfull.enabled && (s_bFullscreen = screenfull.isFullscreen, null !== s_oInterface && s_oInterface.resetFullscreenBut(), null !== s_oMenu && s_oMenu.resetFullscreenBut())
}
if (screenfull.enabled) screenfull.on("change", function() {
    s_bFullscreen = screenfull.isFullscreen;
    null !== s_oInterface && s_oInterface.resetFullscreenBut();
    null !== s_oMenu && s_oMenu.resetFullscreenBut()
});

function CSpriteLibrary() {
    var n = {},
        b, g, h, a, e, c;
    this.init = function(f, k, d) {
        b = {};
        h = g = 0;
        a = f;
        e = k;
        c = d
    };
    this.addSprite = function(c, a) {
        n.hasOwnProperty(c) || (n[c] = b[c] = {
            szPath: a,
            oSprite: new Image,
            bLoaded: !1
        }, g++)
    };
    this.getSprite = function(c) {
        return n.hasOwnProperty(c) ? n[c].oSprite : null
    };
    this._onSpritesLoaded = function() {
        g = 0;
        e.call(c)
    };
    this._onSpriteLoaded = function(b) {
        a.call(c, b);
        ++h === g && this._onSpritesLoaded()
    };
    this.loadSprites = function() {
        for (var c in b) b[c].oSprite.oSpriteLibrary = this, b[c].oSprite.szKey = c,
            b[c].oSprite.onload = function() {
                this.oSpriteLibrary.setLoaded(this.szKey);
                this.oSpriteLibrary._onSpriteLoaded(this.szKey)
            }, b[c].oSprite.src = b[c].szPath
    };
    this.setLoaded = function(c) {
        n[c].bLoaded = !0
    };
    this.isLoaded = function(c) {
        return n[c].bLoaded
    };
    this.getNumSprites = function() {
        return g
    }
}

function CTextButton(n, b, g, h, a, e, c, f) {
    var k, d, p, m, l, q, r, y, A, v;
    this._init = function(c, a, b, e, l, t, q) {
        k = !1;
        d = 1;
        p = [];
        m = [];
        v = createBitmap(b);
        y = new createjs.Container;
        y.x = c;
        y.y = a;
        y.regX = b.width / 2;
        y.regY = b.height / 2;
        s_bMobile || (y.cursor = "pointer");
        y.addChild(v, A);
        f.addChild(y);
        A = new CTLText(y, 20, 0, b.width - 40, b.height, q, "center", t, l, 1, 2, 2, e, !0, !0, !1, !1);
        this._initListener()
    };
    this.unload = function() {
        y.off("mousedown", l);
        y.off("pressup", q);
        f.removeChild(y)
    };
    this.setVisible = function(c) {
        y.visible = c
    };
    this.setAlign =
        function(c) {
            A.textAlign = c
        };
    this.setTextX = function(c) {
        A.x = c
    };
    this.setScale = function(c) {
        d = y.scaleX = y.scaleY = c
    };
    this.enable = function() {
        k = !1
    };
    this.disable = function() {
        k = !0
    };
    this._initListener = function() {
        l = y.on("mousedown", this.buttonDown);
        q = y.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(c, a, d) {
        p[c] = a;
        m[c] = d
    };
    this.addEventListenerWithParams = function(c, a, d, b) {
        p[c] = a;
        m[c] = d;
        r = b
    };
    this.buttonRelease = function() {
        k || (playSound("click", 1, !1), y.scaleX = d, y.scaleY = d, p[ON_MOUSE_UP] && p[ON_MOUSE_UP].call(m[ON_MOUSE_UP],
            r))
    };
    this.buttonDown = function() {
        k || (y.scaleX = .9 * d, y.scaleY = .9 * d, p[ON_MOUSE_DOWN] && p[ON_MOUSE_DOWN].call(m[ON_MOUSE_DOWN]))
    };
    this.setPosition = function(c, a) {
        y.x = c;
        y.y = a
    };
    this.tweenPosition = function(c, a, d, b, e, k, f) {
        createjs.Tween.get(y).wait(b).to({
            x: c,
            y: a
        }, d, e).call(function() {
            void 0 !== k && k.call(f)
        })
    };
    this.changeText = function(c) {
        A.refreshText(c)
    };
    this.setX = function(c) {
        y.x = c
    };
    this.setY = function(c) {
        y.y = c
    };
    this.getButtonImage = function() {
        return y
    };
    this.getX = function() {
        return y.x
    };
    this.getY = function() {
        return y.y
    };
    this.getSprite = function() {
        return y
    };
    this.getScale = function() {
        return y.scaleX
    };
    this._init(n, b, g, h, a, e, c)
}

function CToggle(n, b, g, h, a) {
    var e, c, f, k, d, p, m, l, q, r, y;
    this._init = function(a, b, l, q, g) {
        f = !1;
        c = k = !0;
        d = [];
        p = [];
        m = new createjs.Container;
        m.x = a;
        m.y = b;
        g.addChild(m);
        a = new createjs.SpriteSheet({
            images: [l],
            frames: {
                width: l.width / 2,
                height: l.height,
                regX: l.width / 2 / 2,
                regY: l.height / 2
            },
            animations: {
                state_true: [0],
                state_false: [1]
            }
        });
        e = q;
        r = createSprite(a, "state_" + e, l.width / 2 / 2, l.height / 2, l.width / 2, l.height);
        r.stop();
        s_bMobile || (m.cursor = "pointer");
        m.addChild(r);
        this._initListener()
    };
    this.unload = function() {
        m.off("mousedown",
            l);
        m.off("pressup", q);
        a.removeChild(m)
    };
    this._initListener = function() {
        l = m.on("mousedown", this.buttonDown);
        q = m.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(c, a, b) {
        d[c] = a;
        p[c] = b
    };
    this.setCursorType = function(c) {
        m.cursor = c
    };
    this.setActive = function(c) {
        e = c;
        r.gotoAndStop("state_" + e)
    };
    this.buttonRelease = function() {
        f || (m.scaleX = 1, m.scaleY = 1, playSound("click", 1, !1), c && (e = !e, r.gotoAndStop("state_" + e)), d[ON_MOUSE_UP] && d[ON_MOUSE_UP].call(p[ON_MOUSE_UP], e))
    };
    this.buttonDown = function() {
        f || (k &&
            (m.scaleX = .9, m.scaleY = .9), d[ON_MOUSE_DOWN] && d[ON_MOUSE_DOWN].call(p[ON_MOUSE_DOWN]))
    };
    this.setClickable = function(c) {
        f = !c;
        m.cursor = f ? "default" : "pointer"
    };
    this.setScaleOnClick = function(c) {
        k = c
    };
    this.setPosition = function(c, a) {
        m.x = c;
        m.y = a
    };
    this.setVisible = function(c) {
        m.visible = c
    };
    this.setToChangeStateAtClick = function(a) {
        c = a
    };
    this.getButtonImage = function() {
        return m
    };
    this.addText = function(c, a, d, b) {
        var e = g.width / 2 - 30,
            k = g.height;
        y = new CTLText(m, -e / 2, -k / 2, e, k, a, "center", d, b, 1, 2, 2, c, !0, !0, !1, !1)
    };
    this.setTextColor =
        function(c) {
            y.setColor(c)
        };
    this._init(n, b, g, h, a)
}

function CToggleExtraction(n, b, g, h, a) {
    var e, c, f, k, d, p, m, l, q;
    this._init = function(a, b, l, m, g) {
        c = !1;
        f = [];
        k = [];
        d = new createjs.Container;
        d.x = a;
        d.y = b;
        g.addChild(d);
        a = new createjs.SpriteSheet({
            images: [l],
            frames: {
                width: l.width / 2,
                height: l.height,
                regX: l.width / 2 / 2,
                regY: l.height / 2
            },
            animations: {
                state_true: [0],
                state_false: [1]
            }
        });
        e = m;
        p = createSprite(a, "state_" + e, l.width / 2 / 2, l.height / 2, l.width / 2, l.height);
        p.stop();
        d.addChild(p);
        l = l.width / 2 - 30;
        q = new CTLText(d, -(l / 2), -75, l, 70, 60, "center", "#71a8d7", SECONDARY_FONT, 1, 2,
            2, TEXT_START, !0, !0, !1, !1);
        q.getText().scaleY = .7;
        s_bMobile || (d.cursor = "pointer");
        this._initListener()
    };
    this.unload = function() {
        d.off("mousedown", m);
        d.off("pressup", l);
        a.removeChild(d)
    };
    this._initListener = function() {
        m = d.on("mousedown", this.buttonDown);
        l = d.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(c, a, d) {
        f[c] = a;
        k[c] = d
    };
    this.setCursorType = function(c) {
        d.cursor = c
    };
    this.setActive = function(c) {
        e = c;
        p.gotoAndStop("state_" + e);
        q.setY(-40);
        q.setColor("#71a8d7");
        q.getText().scaleY = .7
    };
    this.buttonRelease =
        function() {
            c || (playSound("click", 1, !1), e = !e, p.gotoAndStop("state_" + e), q.setY(-28), q.getText().scaleY = .65, q.setColor("#fff"), f[ON_MOUSE_UP] && f[ON_MOUSE_UP].call(k[ON_MOUSE_UP], e))
        };
    this.buttonDown = function() {
        c || f[ON_MOUSE_DOWN] && f[ON_MOUSE_DOWN].call(k[ON_MOUSE_DOWN])
    };
    this.setClickable = function(a) {
        c = !a
    };
    this.setScaleOnClick = function(c) {};
    this.setPosition = function(c, a) {
        d.x = c;
        d.y = a
    };
    this.getPosition = function() {
        return {
            x: d.x,
            y: d.y
        }
    };
    this.getButtonImage = function() {
        return p
    };
    this._init(n, b, g, h, a)
}

function CGfxButton(n, b, g, h) {
    var a, e, c, f, k, d, p, m;
    this._init = function(b, l, p, m) {
        a = 1;
        c = !1;
        e = !0;
        f = [];
        k = [];
        d = createBitmap(p);
        d.x = b;
        d.y = l;
        d.regX = p.width / 2;
        d.regY = p.height / 2;
        s_bMobile || (d.cursor = "pointer");
        m.addChild(d);
        this._initListener()
    };
    this.unload = function() {
        d.off("mousedown", p);
        d.off("pressup", m);
        h.removeChild(d)
    };
    this.setVisible = function(c) {
        d.visible = c
    };
    this.setCursorType = function(c) {
        d.cursor = c
    };
    this._initListener = function() {
        p = d.on("mousedown", this.buttonDown);
        m = d.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(c, a, d) {
        f[c] = a;
        k[c] = d
    };
    this.buttonRelease = function() {
        c || (e ? (d.scaleX = a, d.scaleY = a) : (new createjs.Tween.get(d)).to({
            y: d.y - 50
        }, 100), playSound("click", 1, !1), f[ON_MOUSE_UP] && f[ON_MOUSE_UP].call(k[ON_MOUSE_UP]))
    };
    this.buttonDown = function() {
        c || (e ? (d.scaleX = .9 * a, d.scaleY = .9 * a) : (new createjs.Tween.get(d)).to({
            y: d.y + 50
        }, 100), f[ON_MOUSE_DOWN] && f[ON_MOUSE_DOWN].call(k[ON_MOUSE_DOWN]))
    };
    this.pulseAnimation = function() {
        createjs.Tween.get(d).to({
            scaleX: .9 * a,
            scaleY: .9 * a
        }, 850, createjs.Ease.quadOut).to({
            scaleX: a,
            scaleY: a
        }, 650, createjs.Ease.quadIn).call(function() {
            l.pulseAnimation()
        })
    };
    this.trembleAnimation = function() {
        createjs.Tween.get(d).to({
            rotation: 2
        }, 75, createjs.Ease.quadOut).to({
            rotation: -2
        }, 140, createjs.Ease.quadIn).to({
            rotation: 0
        }, 75, createjs.Ease.quadIn).wait(750).call(function() {
            l.trembleAnimation()
        })
    };
    this.setPosition = function(c, a) {
        d.x = c;
        d.y = a
    };
    this.setX = function(c) {
        d.x = c
    };
    this.setY = function(c) {
        d.y = c
    };
    this.setScalable = function(c) {
        e = c
    };
    this.setScale = function(c) {
        a = c;
        d.scaleX = d.scaleY = a
    };
    this.getButtonImage =
        function() {
            return d
        };
    this.getX = function() {
        return d.x
    };
    this.getY = function() {
        return d.y
    };
    this.setClickable = function(a) {
        c = !a
    };
    this._init(n, b, g, h);
    var l = this;
    return this
}! function(n) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = n();
    else {
        var b;
        "undefined" != typeof window ? b = window : "undefined" != typeof global ? b = global : "undefined" != typeof self && (b = self);
        b.CANNON = n()
    }
}(function() {
    return function a(b, g, h) {
        function e(k, d) {
            if (!g[k]) {
                if (!b[k]) {
                    var f = "function" == typeof require && require;
                    if (!d && f) return f(k, !0);
                    if (c) return c(k, !0);
                    throw Error("Cannot find module '" + k + "'");
                }
                f = g[k] = {
                    exports: {}
                };
                b[k][0].call(f.exports, function(c) {
                    var a = b[k][1][c];
                    return e(a ?
                        a : c)
                }, f, f.exports, a, b, g, h)
            }
            return g[k].exports
        }
        for (var c = "function" == typeof require && require, f = 0; f < h.length; f++) e(h[f]);
        return e
    }({
        1: [function(b, g, h) {
            g.exports = {
                name: "cannon",
                version: "0.6.2",
                description: "A lightweight 3D physics engine written in JavaScript.",
                homepage: "https://github.com/schteppe/cannon.js",
                author: "Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",
                keywords: ["cannon.js", "cannon", "physics", "engine", "3d"],
                main: "./build/cannon.js",
                engines: {
                    node: "*"
                },
                repository: {
                    type: "git",
                    url: "https://github.com/schteppe/cannon.js.git"
                },
                bugs: {
                    url: "https://github.com/schteppe/cannon.js/issues"
                },
                licenses: [{
                    type: "MIT"
                }],
                devDependencies: {
                    jshint: "latest",
                    "uglify-js": "latest",
                    nodeunit: "^0.9.0",
                    grunt: "~0.4.0",
                    "grunt-contrib-jshint": "~0.1.1",
                    "grunt-contrib-nodeunit": "^0.4.1",
                    "grunt-contrib-concat": "~0.1.3",
                    "grunt-contrib-uglify": "^0.5.1",
                    "grunt-browserify": "^2.1.4",
                    "grunt-contrib-yuidoc": "^0.5.2",
                    browserify: "*"
                },
                dependencies: {}
            }
        }, {}],
        2: [function(b, g, h) {
            g.exports = {
                version: b("../package.json").version,
                AABB: b("./collision/AABB"),
                ArrayCollisionMatrix: b("./collision/ArrayCollisionMatrix"),
                Body: b("./objects/Body"),
                Box: b("./shapes/Box"),
                Broadphase: b("./collision/Broadphase"),
                Constraint: b("./constraints/Constraint"),
                ContactEquation: b("./equations/ContactEquation"),
                Narrowphase: b("./world/Narrowphase"),
                ConeTwistConstraint: b("./constraints/ConeTwistConstraint"),
                ContactMaterial: b("./material/ContactMaterial"),
                ConvexPolyhedron: b("./shapes/ConvexPolyhedron"),
                Cylinder: b("./shapes/Cylinder"),
                DistanceConstraint: b("./constraints/DistanceConstraint"),
                Equation: b("./equations/Equation"),
                EventTarget: b("./utils/EventTarget"),
                FrictionEquation: b("./equations/FrictionEquation"),
                GSSolver: b("./solver/GSSolver"),
                GridBroadphase: b("./collision/GridBroadphase"),
                Heightfield: b("./shapes/Heightfield"),
                HingeConstraint: b("./constraints/HingeConstraint"),
                LockConstraint: b("./constraints/LockConstraint"),
                Mat3: b("./math/Mat3"),
                Material: b("./material/Material"),
                NaiveBroadphase: b("./collision/NaiveBroadphase"),
                ObjectCollisionMatrix: b("./collision/ObjectCollisionMatrix"),
                Pool: b("./utils/Pool"),
                Particle: b("./shapes/Particle"),
                Plane: b("./shapes/Plane"),
                PointToPointConstraint: b("./constraints/PointToPointConstraint"),
                Quaternion: b("./math/Quaternion"),
                Ray: b("./collision/Ray"),
                RaycastVehicle: b("./objects/RaycastVehicle"),
                RaycastResult: b("./collision/RaycastResult"),
                RigidVehicle: b("./objects/RigidVehicle"),
                RotationalEquation: b("./equations/RotationalEquation"),
                RotationalMotorEquation: b("./equations/RotationalMotorEquation"),
                SAPBroadphase: b("./collision/SAPBroadphase"),
                SPHSystem: b("./objects/SPHSystem"),
                Shape: b("./shapes/Shape"),
                Solver: b("./solver/Solver"),
                Sphere: b("./shapes/Sphere"),
                SplitSolver: b("./solver/SplitSolver"),
                Spring: b("./objects/Spring"),
                Trimesh: b("./shapes/Trimesh"),
                Vec3: b("./math/Vec3"),
                Vec3Pool: b("./utils/Vec3Pool"),
                World: b("./world/World")
            }
        }, {
            "../package.json": 1,
            "./collision/AABB": 3,
            "./collision/ArrayCollisionMatrix": 4,
            "./collision/Broadphase": 5,
            "./collision/GridBroadphase": 6,
            "./collision/NaiveBroadphase": 7,
            "./collision/ObjectCollisionMatrix": 8,
            "./collision/Ray": 9,
            "./collision/RaycastResult": 10,
            "./collision/SAPBroadphase": 11,
            "./constraints/ConeTwistConstraint": 12,
            "./constraints/Constraint": 13,
            "./constraints/DistanceConstraint": 14,
            "./constraints/HingeConstraint": 15,
            "./constraints/LockConstraint": 16,
            "./constraints/PointToPointConstraint": 17,
            "./equations/ContactEquation": 19,
            "./equations/Equation": 20,
            "./equations/FrictionEquation": 21,
            "./equations/RotationalEquation": 22,
            "./equations/RotationalMotorEquation": 23,
            "./material/ContactMaterial": 24,
            "./material/Material": 25,
            "./math/Mat3": 27,
            "./math/Quaternion": 28,
            "./math/Vec3": 30,
            "./objects/Body": 31,
            "./objects/RaycastVehicle": 32,
            "./objects/RigidVehicle": 33,
            "./objects/SPHSystem": 34,
            "./objects/Spring": 35,
            "./shapes/Box": 37,
            "./shapes/ConvexPolyhedron": 38,
            "./shapes/Cylinder": 39,
            "./shapes/Heightfield": 40,
            "./shapes/Particle": 41,
            "./shapes/Plane": 42,
            "./shapes/Shape": 43,
            "./shapes/Sphere": 44,
            "./shapes/Trimesh": 45,
            "./solver/GSSolver": 46,
            "./solver/Solver": 47,
            "./solver/SplitSolver": 48,
            "./utils/EventTarget": 49,
            "./utils/Pool": 51,
            "./utils/Vec3Pool": 54,
            "./world/Narrowphase": 55,
            "./world/World": 56
        }],
        3: [function(b, g, h) {
            function a(c) {
                c = c || {};
                this.lowerBound = new e;
                c.lowerBound && this.lowerBound.copy(c.lowerBound);
                this.upperBound = new e;
                c.upperBound && this.upperBound.copy(c.upperBound)
            }
            var e = b("../math/Vec3");
            b("../utils/Utils");
            g.exports = a;
            var c = new e;
            a.prototype.setFromPoints = function(a, d, b, e) {
                var k = this.lowerBound,
                    f = this.upperBound;
                k.copy(a[0]);
                b && b.vmult(k, k);
                f.copy(k);
                for (var p = 1; p < a.length; p++) {
                    var m = a[p];
                    b && (b.vmult(m, c), m = c);
                    m.x > f.x && (f.x = m.x);
                    m.x < k.x && (k.x = m.x);
                    m.y > f.y && (f.y = m.y);
                    m.y < k.y && (k.y = m.y);
                    m.z > f.z && (f.z = m.z);
                    m.z < k.z && (k.z =
                        m.z)
                }
                d && (d.vadd(k, k), d.vadd(f, f));
                e && (k.x -= e, k.y -= e, k.z -= e, f.x += e, f.y += e, f.z += e);
                return this
            };
            a.prototype.copy = function(c) {
                this.lowerBound.copy(c.lowerBound);
                this.upperBound.copy(c.upperBound);
                return this
            };
            a.prototype.clone = function() {
                return (new a).copy(this)
            };
            a.prototype.extend = function(c) {
                var a = c.lowerBound.x;
                this.lowerBound.x > a && (this.lowerBound.x = a);
                a = c.upperBound.x;
                this.upperBound.x < a && (this.upperBound.x = a);
                a = c.lowerBound.y;
                this.lowerBound.y > a && (this.lowerBound.y = a);
                a = c.upperBound.y;
                this.upperBound.y <
                    a && (this.upperBound.y = a);
                a = c.lowerBound.z;
                this.lowerBound.z > a && (this.lowerBound.z = a);
                a = c.upperBound.z;
                this.upperBound.z < a && (this.upperBound.z = a)
            };
            a.prototype.overlaps = function(c) {
                var a = this.lowerBound,
                    b = this.upperBound,
                    e = c.lowerBound;
                c = c.upperBound;
                return (e.x <= b.x && b.x <= c.x || a.x <= c.x && c.x <= b.x) && (e.y <= b.y && b.y <= c.y || a.y <= c.y && c.y <= b.y) && (e.z <= b.z && b.z <= c.z || a.z <= c.z && c.z <= b.z)
            };
            a.prototype.contains = function(c) {
                var a = this.lowerBound,
                    b = this.upperBound,
                    e = c.lowerBound;
                c = c.upperBound;
                return a.x <= e.x &&
                    b.x >= c.x && a.y <= e.y && b.y >= c.y && a.z <= e.z && b.z >= c.z
            };
            a.prototype.getCorners = function(c, a, b, e, f, q, g, h) {
                var d = this.lowerBound,
                    k = this.upperBound;
                c.copy(d);
                a.set(k.x, d.y, d.z);
                b.set(k.x, k.y, d.z);
                e.set(d.x, k.y, k.z);
                f.set(k.x, d.y, d.z);
                q.set(d.x, k.y, d.z);
                g.set(d.x, d.y, k.z);
                h.copy(k)
            };
            var f = [new e, new e, new e, new e, new e, new e, new e, new e];
            a.prototype.toLocalFrame = function(c, a) {
                this.getCorners(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7]);
                for (var d = 0; 8 !== d; d++) {
                    var b = f[d];
                    c.pointToLocal(b, b)
                }
                return a.setFromPoints(f)
            };
            a.prototype.toWorldFrame = function(c, a) {
                this.getCorners(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7]);
                for (var d = 0; 8 !== d; d++) {
                    var b = f[d];
                    c.pointToWorld(b, b)
                }
                return a.setFromPoints(f)
            }
        }, {
            "../math/Vec3": 30,
            "../utils/Utils": 53
        }],
        4: [function(b, g, h) {
            function a() {
                this.matrix = []
            }
            g.exports = a;
            a.prototype.get = function(a, c) {
                a = a.index;
                c = c.index;
                if (c > a) {
                    var b = c;
                    c = a;
                    a = b
                }
                return this.matrix[(a * (a + 1) >> 1) + c - 1]
            };
            a.prototype.set = function(a, c, b) {
                a = a.index;
                c = c.index;
                if (c > a) {
                    var e = c;
                    c = a;
                    a = e
                }
                this.matrix[(a * (a + 1) >> 1) + c - 1] = b ? 1 : 0
            };
            a.prototype.reset = function() {
                for (var a = 0, c = this.matrix.length; a !== c; a++) this.matrix[a] = 0
            };
            a.prototype.setNumObjects = function(a) {
                this.matrix.length = a * (a - 1) >> 1
            }
        }, {}],
        5: [function(b, g, h) {
            function a() {
                this.world = null;
                this.useBoundingBoxes = !1;
                this.dirty = !0
            }
            var e = b("../objects/Body");
            h = b("../math/Vec3");
            var c = b("../math/Quaternion");
            b("../shapes/Shape");
            b("../shapes/Plane");
            g.exports = a;
            a.prototype.collisionPairs = function(c, a, d) {
                throw Error("collisionPairs not implemented for this BroadPhase class!");
            };
            var f =
                e.STATIC | e.KINEMATIC;
            a.prototype.needBroadphaseCollision = function(c, a) {
                return 0 !== (c.collisionFilterGroup & a.collisionFilterMask) && 0 !== (a.collisionFilterGroup & c.collisionFilterMask) && (0 === (c.type & f) && c.sleepState !== e.SLEEPING || 0 === (a.type & f) && a.sleepState !== e.SLEEPING) ? !0 : !1
            };
            a.prototype.intersectionTest = function(c, a, d, b) {
                this.useBoundingBoxes ? this.doBoundingBoxBroadphase(c, a, d, b) : this.doBoundingSphereBroadphase(c, a, d, b)
            };
            var k = new h;
            new h;
            new c;
            new h;
            a.prototype.doBoundingSphereBroadphase = function(c,
                a, d, b) {
                a.position.vsub(c.position, k);
                var e = Math.pow(c.boundingRadius + a.boundingRadius, 2);
                k.norm2() < e && (d.push(c), b.push(a))
            };
            a.prototype.doBoundingBoxBroadphase = function(c, a, d, b) {
                c.aabbNeedsUpdate && c.computeAABB();
                a.aabbNeedsUpdate && a.computeAABB();
                c.aabb.overlaps(a.aabb) && (d.push(c), b.push(a))
            };
            var d = {
                    keys: []
                },
                p = [],
                m = [];
            a.prototype.makePairsUnique = function(c, a) {
                for (var b = c.length, e = 0; e !== b; e++) p[e] = c[e], m[e] = a[e];
                c.length = 0;
                for (e = a.length = 0; e !== b; e++) {
                    var f = p[e].id,
                        k = m[e].id;
                    f = f < k ? f + "," + k : k + "," +
                        f;
                    d[f] = e;
                    d.keys.push(f)
                }
                for (e = 0; e !== d.keys.length; e++) f = d.keys.pop(), b = d[f], c.push(p[b]), a.push(m[b]), delete d[f]
            };
            a.prototype.setWorld = function(c) {};
            var l = new h;
            a.boundingSphereCheck = function(c, a) {
                c.position.vsub(a.position, l);
                return Math.pow(c.shape.boundingSphereRadius + a.shape.boundingSphereRadius, 2) > l.norm2()
            };
            a.prototype.aabbQuery = function(c, a, d) {
                console.warn(".aabbQuery is not implemented in this Broadphase subclass.");
                return []
            }
        }, {
            "../math/Quaternion": 28,
            "../math/Vec3": 30,
            "../objects/Body": 31,
            "../shapes/Plane": 42,
            "../shapes/Shape": 43
        }],
        6: [function(b, g, h) {
            function a(a, b, f, k, q) {
                e.apply(this);
                this.nx = f || 10;
                this.ny = k || 10;
                this.nz = q || 10;
                this.aabbMin = a || new c(100, 100, 100);
                this.aabbMax = b || new c(-100, -100, -100);
                a = this.nx * this.ny * this.nz;
                if (0 >= a) throw "GridBroadphase: Each dimension's n must be >0";
                this.bins = [];
                this.binLengths = [];
                this.bins.length = a;
                this.binLengths.length = a;
                for (b = 0; b < a; b++) this.bins[b] = [], this.binLengths[b] = 0
            }
            g.exports = a;
            var e = b("./Broadphase"),
                c = b("../math/Vec3"),
                f = b("../shapes/Shape");
            a.prototype = new e;
            a.prototype.constructor = a;
            var k = new c;
            new c;
            a.prototype.collisionPairs = function(c, a, b) {
                function d(c, a, d, b, e, f, k) {
                    c = (c - w) * C | 0;
                    a = (a - B) * J | 0;
                    d = (d - I) * R | 0;
                    b = K((b - w) * C);
                    e = K((e - B) * J);
                    f = K((f - I) * R);
                    0 > c ? c = 0 : c >= g && (c = g - 1);
                    0 > a ? a = 0 : a >= h && (a = h - 1);
                    0 > d ? d = 0 : d >= z && (d = z - 1);
                    0 > b ? b = 0 : b >= g && (b = g - 1);
                    0 > e ? e = 0 : e >= h && (e = h - 1);
                    0 > f ? f = 0 : f >= z && (f = z - 1);
                    c *= u;
                    a *= D;
                    d *= 1;
                    b *= u;
                    e *= D;
                    for (f *= 1; c <= b; c += u)
                        for (var m = a; m <= e; m += D)
                            for (var t = d; t <= f; t += 1) {
                                var l = c + m + t;
                                X[l][x[l]++] = k
                            }
                }
                var e = c.numObjects();
                c = c.bodies;
                var m = this.aabbMax,
                    p = this.aabbMin,
                    g = this.nx,
                    h = this.ny,
                    z = this.nz,
                    u = h * z,
                    D = z,
                    E = m.x,
                    F = m.y,
                    t = m.z,
                    w = p.x,
                    B = p.y,
                    I = p.z,
                    C = g / (E - w),
                    J = h / (F - B),
                    R = z / (t - I);
                E = (E - w) / g;
                var M = (F - B) / h;
                t = (t - I) / z;
                var O = .5 * Math.sqrt(E * E + M * M + t * t);
                F = f.types;
                var L = F.SPHERE,
                    N = F.PLANE,
                    X = this.bins,
                    x = this.binLengths;
                F = this.bins.length;
                for (p = 0; p !== F; p++) x[p] = 0;
                var K = Math.ceil;
                p = Math.min;
                m = Math.max;
                for (p = 0; p !== e; p++) {
                    m = c[p];
                    var U = m.shape;
                    switch (U.type) {
                        case L:
                            var S = m.position.x,
                                P = m.position.y,
                                G = m.position.z;
                            U = U.radius;
                            d(S - U, P - U, G - U, S + U, P + U, G + U, m);
                            break;
                        case N:
                            U.worldNormalNeedsUpdate &&
                                U.computeWorldNormal(m.quaternion);
                            G = U.worldNormal;
                            U = B + .5 * M - m.position.y;
                            var Q = I + .5 * t - m.position.z,
                                T = k;
                            T.set(w + .5 * E - m.position.x, U, Q);
                            for (var H = S = 0; S !== g; S++, H += u, T.y = U, T.x += E)
                                for (var W = P = 0; P !== h; P++, W += D, T.z = Q, T.y += M)
                                    for (var Y = 0, V = 0; Y !== z; Y++, V += 1, T.z += t)
                                        if (T.dot(G) < O) {
                                            var Z = H + W + V;
                                            X[Z][x[Z]++] = m
                                        }
                            break;
                        default:
                            m.aabbNeedsUpdate && m.computeAABB(), d(m.aabb.lowerBound.x, m.aabb.lowerBound.y, m.aabb.lowerBound.z, m.aabb.upperBound.x, m.aabb.upperBound.y, m.aabb.upperBound.z, m)
                    }
                }
                for (p = 0; p !== F; p++)
                    if (e = x[p],
                        1 < e)
                        for (c = X[p], S = 0; S !== e; S++)
                            for (m = c[S], P = 0; P !== S; P++) E = c[P], this.needBroadphaseCollision(m, E) && this.intersectionTest(m, E, a, b);
                this.makePairsUnique(a, b)
            }
        }, {
            "../math/Vec3": 30,
            "../shapes/Shape": 43,
            "./Broadphase": 5
        }],
        7: [function(b, g, h) {
            function a() {
                e.apply(this)
            }
            g.exports = a;
            var e = b("./Broadphase");
            b = b("./AABB");
            a.prototype = new e;
            a.prototype.constructor = a;
            a.prototype.collisionPairs = function(c, a, b) {
                c = c.bodies;
                var d = c.length,
                    e, f;
                for (e = 0; e !== d; e++)
                    for (f = 0; f !== e; f++) {
                        var k = c[e];
                        var q = c[f];
                        this.needBroadphaseCollision(k,
                            q) && this.intersectionTest(k, q, a, b)
                    }
            };
            new b;
            a.prototype.aabbQuery = function(c, a, b) {
                b = b || [];
                for (var d = 0; d < c.bodies.length; d++) {
                    var e = c.bodies[d];
                    e.aabbNeedsUpdate && e.computeAABB();
                    e.aabb.overlaps(a) && b.push(e)
                }
                return b
            }
        }, {
            "./AABB": 3,
            "./Broadphase": 5
        }],
        8: [function(b, g, h) {
            function a() {
                this.matrix = {}
            }
            g.exports = a;
            a.prototype.get = function(a, c) {
                a = a.id;
                c = c.id;
                if (c > a) {
                    var b = c;
                    c = a;
                    a = b
                }
                return a + "-" + c in this.matrix
            };
            a.prototype.set = function(a, c, b) {
                a = a.id;
                c = c.id;
                if (c > a) {
                    var e = c;
                    c = a;
                    a = e
                }
                b ? this.matrix[a + "-" + c] = !0 :
                    delete this.matrix[a + "-" + c]
            };
            a.prototype.reset = function() {
                this.matrix = {}
            };
            a.prototype.setNumObjects = function(a) {}
        }, {}],
        9: [function(b, g, h) {
            function a(d, b) {
                this.from = d ? d.clone() : new c;
                this.to = b ? b.clone() : new c;
                this._direction = new c;
                this.precision = 1E-4;
                this.checkCollisionResponse = !0;
                this.skipBackfaces = !1;
                this.collisionFilterGroup = this.collisionFilterMask = -1;
                this.mode = a.ANY;
                this.result = new k;
                this.hasHit = !1;
                this.callback = function(c) {}
            }

            function e(c, a, d, b) {
                b.vsub(a, L);
                d.vsub(a, m);
                c.vsub(a, l);
                c = L.dot(L);
                a = L.dot(m);
                d = L.dot(l);
                b = m.dot(m);
                var e = m.dot(l),
                    f, k;
                return 0 <= (f = b * d - a * e) && 0 <= (k = c * e - a * d) && f + k < c * b - a * a
            }
            g.exports = a;
            var c = b("../math/Vec3");
            g = b("../math/Quaternion");
            var f = b("../math/Transform");
            b("../shapes/ConvexPolyhedron");
            b("../shapes/Box");
            var k = b("../collision/RaycastResult");
            h = b("../shapes/Shape");
            b = b("../collision/AABB");
            a.prototype.constructor = a;
            a.CLOSEST = 1;
            a.ANY = 2;
            a.ALL = 4;
            var d = new b,
                p = [];
            a.prototype.intersectWorld = function(c, b) {
                this.mode = b.mode || a.ANY;
                this.result = b.result || new k;
                this.skipBackfaces = !!b.skipBackfaces;
                this.collisionFilterMask = "undefined" !== typeof b.collisionFilterMask ? b.collisionFilterMask : -1;
                this.collisionFilterGroup = "undefined" !== typeof b.collisionFilterGroup ? b.collisionFilterGroup : -1;
                b.from && this.from.copy(b.from);
                b.to && this.to.copy(b.to);
                this.callback = b.callback || function() {};
                this.hasHit = !1;
                this.result.reset();
                this._updateDirection();
                this.getAABB(d);
                p.length = 0;
                c.broadphase.aabbQuery(c, d, p);
                this.intersectBodies(p);
                return this.hasHit
            };
            var m = new c,
                l = new c;
            a.pointInTriangle = e;
            var q = new c,
                r = new g;
            a.prototype.intersectBody = function(c, a) {
                a && (this.result = a, this._updateDirection());
                var d = this.checkCollisionResponse;
                if ((!d || c.collisionResponse) && 0 !== (this.collisionFilterGroup & c.collisionFilterMask) && 0 !== (c.collisionFilterGroup & this.collisionFilterMask))
                    for (var b = 0, e = c.shapes.length; b < e; b++) {
                        var f = c.shapes[b];
                        if (!d || f.collisionResponse)
                            if (c.quaternion.mult(c.shapeOrientations[b], r), c.quaternion.vmult(c.shapeOffsets[b], q), q.vadd(c.position, q), this.intersectShape(f, r, q, c), this.result._shouldStop) break
                    }
            };
            a.prototype.intersectBodies = function(c, a) {
                a && (this.result = a, this._updateDirection());
                for (var d = 0, b = c.length; !this.result._shouldStop && d < b; d++) this.intersectBody(c[d])
            };
            a.prototype._updateDirection = function() {
                this.to.vsub(this.from, this._direction);
                this._direction.normalize()
            };
            a.prototype.intersectShape = function(c, a, d, b) {
                var e = this.from,
                    f = this._direction;
                d.vsub(e, L);
                var k = L.dot(f);
                f.mult(k, N);
                N.vadd(e, N);
                d.distanceTo(N) > c.boundingSphereRadius || (e = this[c.type]) && e.call(this, c, a, d, b)
            };
            new c;
            new c;
            var y =
                new c,
                A = new c,
                v = new c,
                z = new c;
            new c;
            new k;
            a.prototype.intersectBox = function(c, a, d, b) {
                return this.intersectConvex(c.convexPolyhedronRepresentation, a, d, b)
            };
            a.prototype[h.types.BOX] = a.prototype.intersectBox;
            a.prototype.intersectPlane = function(a, d, b, e) {
                var f = this.from,
                    k = this.to,
                    m = this._direction,
                    t = new c(0, 0, 1);
                d.vmult(t, t);
                var l = new c;
                f.vsub(b, l);
                d = l.dot(t);
                k.vsub(b, l);
                l = l.dot(t);
                if (!(0 < d * l || f.distanceTo(k) < d || (l = t.dot(m), Math.abs(l) < this.precision))) {
                    var p = new c;
                    k = new c;
                    d = new c;
                    f.vsub(b, p);
                    b = -t.dot(p) /
                        l;
                    m.scale(b, k);
                    f.vadd(k, d);
                    this.reportIntersection(t, d, a, e, -1)
                }
            };
            a.prototype[h.types.PLANE] = a.prototype.intersectPlane;
            a.prototype.getAABB = function(c) {
                var a = this.to,
                    d = this.from;
                c.lowerBound.x = Math.min(a.x, d.x);
                c.lowerBound.y = Math.min(a.y, d.y);
                c.lowerBound.z = Math.min(a.z, d.z);
                c.upperBound.x = Math.max(a.x, d.x);
                c.upperBound.y = Math.max(a.y, d.y);
                c.upperBound.z = Math.max(a.z, d.z)
            };
            var u = {
                faceList: [0]
            };
            a.prototype.intersectHeightfield = function(d, b, e, k) {
                var m = new c,
                    t = new a(this.from, this.to);
                f.pointToLocalFrame(e,
                    b, t.from, t.from);
                f.pointToLocalFrame(e, b, t.to, t.to);
                var l = [],
                    p = null,
                    q = null,
                    w = null,
                    g = null,
                    B = d.getIndexOfPosition(t.from.x, t.from.y, l, !1);
                B && (p = l[0], q = l[1], w = l[0], g = l[1]);
                if (B = d.getIndexOfPosition(t.to.x, t.to.y, l, !1)) {
                    if (null === p || l[0] < p) p = l[0];
                    if (null === w || l[0] > w) w = l[0];
                    if (null === q || l[1] < q) q = l[1];
                    if (null === g || l[1] > g) g = l[1]
                }
                if (null !== p)
                    for (d.getRectMinMax(p, q, w, g, []), t = p; t <= w; t++)
                        for (l = q; l <= g; l++) {
                            if (this.result._shouldStop) return;
                            d.getConvexTrianglePillar(t, l, !1);
                            f.pointToWorldFrame(e, b, d.pillarOffset,
                                m);
                            this.intersectConvex(d.pillarConvex, b, m, k, u);
                            if (this.result._shouldStop) return;
                            d.getConvexTrianglePillar(t, l, !0);
                            f.pointToWorldFrame(e, b, d.pillarOffset, m);
                            this.intersectConvex(d.pillarConvex, b, m, k, u)
                        }
            };
            a.prototype[h.types.HEIGHTFIELD] = a.prototype.intersectHeightfield;
            var D = new c,
                E = new c;
            a.prototype.intersectSphere = function(c, a, d, b) {
                a = this.from;
                var e = this.to,
                    f = Math.pow(e.x - a.x, 2) + Math.pow(e.y - a.y, 2) + Math.pow(e.z - a.z, 2),
                    k = 2 * ((e.x - a.x) * (a.x - d.x) + (e.y - a.y) * (a.y - d.y) + (e.z - a.z) * (a.z - d.z)),
                    t = Math.pow(k,
                        2) - 4 * f * (Math.pow(a.x - d.x, 2) + Math.pow(a.y - d.y, 2) + Math.pow(a.z - d.z, 2) - Math.pow(c.radius, 2));
                if (!(0 > t))
                    if (0 === t) a.lerp(e, t, D), D.vsub(d, E), E.normalize(), this.reportIntersection(E, D, c, b, -1);
                    else {
                        var l = (-k - Math.sqrt(t)) / (2 * f);
                        f = (-k + Math.sqrt(t)) / (2 * f);
                        0 <= l && 1 >= l && (a.lerp(e, l, D), D.vsub(d, E), E.normalize(), this.reportIntersection(E, D, c, b, -1));
                        !this.result._shouldStop && 0 <= f && 1 >= f && (a.lerp(e, f, D), D.vsub(d, E), E.normalize(), this.reportIntersection(E, D, c, b, -1))
                    }
            };
            a.prototype[h.types.SPHERE] = a.prototype.intersectSphere;
            var F = new c;
            new c;
            new c;
            var t = new c;
            a.prototype.intersectConvex = function(c, a, d, b, f) {
                f = f && f.faceList || null;
                for (var k = c.faces, l = c.vertices, m = c.faceNormals, p = this._direction, q = this.from, w = q.distanceTo(this.to), g = f ? f.length : k.length, B = this.result, r = 0; !B._shouldStop && r < g; r++) {
                    var I = f ? f[r] : r,
                        h = k[I],
                        C = m[I],
                        x = a,
                        J = d;
                    t.copy(l[h[0]]);
                    x.vmult(t, t);
                    t.vadd(J, t);
                    t.vsub(q, t);
                    x.vmult(C, F);
                    C = p.dot(F);
                    if (!(Math.abs(C) < this.precision || (C = F.dot(t) / C, 0 > C)))
                        for (p.mult(C, y), y.vadd(q, y), A.copy(l[h[0]]), x.vmult(A, A), J.vadd(A,
                                A), C = 1; !B._shouldStop && C < h.length - 1; C++) {
                            v.copy(l[h[C]]);
                            z.copy(l[h[C + 1]]);
                            x.vmult(v, v);
                            x.vmult(z, z);
                            J.vadd(v, v);
                            J.vadd(z, z);
                            var N = y.distanceTo(q);
                            !e(y, A, v, z) && !e(y, v, A, z) || N > w || this.reportIntersection(F, y, c, b, I)
                        }
                }
            };
            a.prototype[h.types.CONVEXPOLYHEDRON] = a.prototype.intersectConvex;
            var w = new c,
                B = new c,
                I = new c,
                C = new c,
                J = new c,
                R = new c;
            new b;
            var M = [],
                O = new f;
            a.prototype.intersectTrimesh = function(c, a, d, b, k) {
                k = c.indices;
                var l = this.from,
                    m = this.to,
                    p = this._direction;
                O.position.copy(d);
                O.quaternion.copy(a);
                f.vectorToLocalFrame(d, a, p, B);
                f.pointToLocalFrame(d, a, l, I);
                f.pointToLocalFrame(d, a, m, C);
                l = I.distanceSquared(C);
                c.tree.rayQuery(this, O, M);
                m = 0;
                for (p = M.length; !this.result._shouldStop && m !== p; m++) {
                    var q = M[m];
                    c.getNormal(q, w);
                    c.getVertex(k[3 * q], A);
                    A.vsub(I, t);
                    var g = B.dot(w);
                    g = w.dot(t) / g;
                    0 > g || (B.scale(g, y), y.vadd(I, y), c.getVertex(k[3 * q + 1], v), c.getVertex(k[3 * q + 2], z), g = y.distanceSquared(I), !e(y, v, A, z) && !e(y, A, v, z) || g > l || (f.vectorToWorldFrame(a, w, J), f.pointToWorldFrame(d, a, y, R), this.reportIntersection(J, R,
                        c, b, q)))
                }
                M.length = 0
            };
            a.prototype[h.types.TRIMESH] = a.prototype.intersectTrimesh;
            a.prototype.reportIntersection = function(c, d, b, e, f) {
                var k = this.from,
                    l = this.to,
                    t = k.distanceTo(d),
                    m = this.result;
                if (!(this.skipBackfaces && 0 < c.dot(this._direction))) switch (m.hitFaceIndex = "undefined" !== typeof f ? f : -1, this.mode) {
                    case a.ALL:
                        this.hasHit = !0;
                        m.set(k, l, c, d, b, e, t);
                        m.hasHit = !0;
                        this.callback(m);
                        break;
                    case a.CLOSEST:
                        if (t < m.distance || !m.hasHit) this.hasHit = !0, m.hasHit = !0, m.set(k, l, c, d, b, e, t);
                        break;
                    case a.ANY:
                        this.hasHit = !0, m.hasHit = !0, m.set(k, l, c, d, b, e, t), m._shouldStop = !0
                }
            };
            var L = new c,
                N = new c
        }, {
            "../collision/AABB": 3,
            "../collision/RaycastResult": 10,
            "../math/Quaternion": 28,
            "../math/Transform": 29,
            "../math/Vec3": 30,
            "../shapes/Box": 37,
            "../shapes/ConvexPolyhedron": 38,
            "../shapes/Shape": 43
        }],
        10: [function(b, g, h) {
            function a() {
                this.rayFromWorld = new e;
                this.rayToWorld = new e;
                this.hitNormalWorld = new e;
                this.hitPointWorld = new e;
                this.hasHit = !1;
                this.body = this.shape = null;
                this.distance = this.hitFaceIndex = -1;
                this._shouldStop = !1
            }
            var e =
                b("../math/Vec3");
            g.exports = a;
            a.prototype.reset = function() {
                this.rayFromWorld.setZero();
                this.rayToWorld.setZero();
                this.hitNormalWorld.setZero();
                this.hitPointWorld.setZero();
                this.hasHit = !1;
                this.body = this.shape = null;
                this.distance = this.hitFaceIndex = -1;
                this._shouldStop = !1
            };
            a.prototype.abort = function() {
                this._shouldStop = !0
            };
            a.prototype.set = function(c, a, b, d, e, m, l) {
                this.rayFromWorld.copy(c);
                this.rayToWorld.copy(a);
                this.hitNormalWorld.copy(b);
                this.hitPointWorld.copy(d);
                this.shape = e;
                this.body = m;
                this.distance =
                    l
            }
        }, {
            "../math/Vec3": 30
        }],
        11: [function(b, g, h) {
            function a(c) {
                e.apply(this);
                this.axisList = [];
                this.world = null;
                this.axisIndex = 0;
                var a = this.axisList;
                this._addBodyHandler = function(c) {
                    a.push(c.body)
                };
                this._removeBodyHandler = function(c) {
                    c = a.indexOf(c.body); - 1 !== c && a.splice(c, 1)
                };
                c && this.setWorld(c)
            }
            b("../shapes/Shape");
            var e = b("../collision/Broadphase");
            g.exports = a;
            a.prototype = new e;
            a.prototype.setWorld = function(c) {
                for (var a = this.axisList.length = 0; a < c.bodies.length; a++) this.axisList.push(c.bodies[a]);
                c.removeEventListener("addBody",
                    this._addBodyHandler);
                c.removeEventListener("removeBody", this._removeBodyHandler);
                c.addEventListener("addBody", this._addBodyHandler);
                c.addEventListener("removeBody", this._removeBodyHandler);
                this.world = c;
                this.dirty = !0
            };
            a.insertionSortX = function(c) {
                for (var a = 1, b = c.length; a < b; a++) {
                    for (var d = c[a], e = a - 1; 0 <= e && !(c[e].aabb.lowerBound.x <= d.aabb.lowerBound.x); e--) c[e + 1] = c[e];
                    c[e + 1] = d
                }
                return c
            };
            a.insertionSortY = function(c) {
                for (var a = 1, b = c.length; a < b; a++) {
                    for (var d = c[a], e = a - 1; 0 <= e && !(c[e].aabb.lowerBound.y <=
                            d.aabb.lowerBound.y); e--) c[e + 1] = c[e];
                    c[e + 1] = d
                }
                return c
            };
            a.insertionSortZ = function(c) {
                for (var a = 1, b = c.length; a < b; a++) {
                    for (var d = c[a], e = a - 1; 0 <= e && !(c[e].aabb.lowerBound.z <= d.aabb.lowerBound.z); e--) c[e + 1] = c[e];
                    c[e + 1] = d
                }
                return c
            };
            a.prototype.collisionPairs = function(c, b, e) {
                c = this.axisList;
                var d = c.length,
                    f = this.axisIndex,
                    m, k;
                this.dirty && (this.sortList(), this.dirty = !1);
                for (m = 0; m !== d; m++) {
                    var q = c[m];
                    for (k = m + 1; k < d; k++) {
                        var g = c[k];
                        if (this.needBroadphaseCollision(q, g)) {
                            if (!a.checkBounds(q, g, f)) break;
                            this.intersectionTest(q,
                                g, b, e)
                        }
                    }
                }
            };
            a.prototype.sortList = function() {
                for (var c = this.axisList, b = this.axisIndex, e = c.length, d = 0; d !== e; d++) {
                    var p = c[d];
                    p.aabbNeedsUpdate && p.computeAABB()
                }
                0 === b ? a.insertionSortX(c) : 1 === b ? a.insertionSortY(c) : 2 === b && a.insertionSortZ(c)
            };
            a.checkBounds = function(c, a, b) {
                if (0 === b) {
                    var d = c.position.x;
                    var e = a.position.x
                } else 1 === b ? (d = c.position.y, e = a.position.y) : 2 === b && (d = c.position.z, e = a.position.z);
                return e - a.boundingRadius < d + c.boundingRadius
            };
            a.prototype.autoDetectAxis = function() {
                for (var c = 0, a = 0, b = 0, d =
                        0, e = 0, m = 0, l = this.axisList, q = l.length, g = 1 / q, h = 0; h !== q; h++) {
                    var A = l[h],
                        v = A.position.x;
                    c += v;
                    a += v * v;
                    v = A.position.y;
                    b += v;
                    d += v * v;
                    A = A.position.z;
                    e += A;
                    m += A * A
                }
                c = a - c * c * g;
                b = d - b * b * g;
                e = m - e * e * g;
                this.axisIndex = c > b ? c > e ? 0 : 2 : b > e ? 1 : 2
            };
            a.prototype.aabbQuery = function(c, a, b) {
                b = b || [];
                this.dirty && (this.sortList(), this.dirty = !1);
                c = this.axisList;
                for (var d = 0; d < c.length; d++) {
                    var e = c[d];
                    e.aabbNeedsUpdate && e.computeAABB();
                    e.aabb.overlaps(a) && b.push(e)
                }
                return b
            }
        }, {
            "../collision/Broadphase": 5,
            "../shapes/Shape": 43
        }],
        12: [function(b,
            g, h) {
            function a(a, b, m) {
                m = m || {};
                var d = "undefined" !== typeof m.maxForce ? m.maxForce : 1E6,
                    p = m.pivotA ? m.pivotA.clone() : new k,
                    g = m.pivotB ? m.pivotB.clone() : new k;
                this.axisA = m.axisA ? m.axisA.clone() : new k;
                this.axisB = m.axisB ? m.axisB.clone() : new k;
                e.call(this, a, p, b, g, d);
                this.collideConnected = !!m.collideConnected;
                this.angle = "undefined" !== typeof m.angle ? m.angle : 0;
                p = this.coneEquation = new c(a, b, m);
                a = this.twistEquation = new f(a, b, m);
                this.twistAngle = "undefined" !== typeof m.twistAngle ? m.twistAngle : 0;
                p.maxForce = 0;
                p.minForce = -d;
                a.maxForce = 0;
                a.minForce = -d;
                this.equations.push(p, a)
            }
            g.exports = a;
            b("./Constraint");
            var e = b("./PointToPointConstraint"),
                c = b("../equations/ConeEquation"),
                f = b("../equations/RotationalEquation");
            b("../equations/ContactEquation");
            var k = b("../math/Vec3");
            a.prototype = new e;
            a.constructor = a;
            new k;
            new k;
            a.prototype.update = function() {
                var c = this.bodyA,
                    a = this.bodyB,
                    b = this.coneEquation,
                    f = this.twistEquation;
                e.prototype.update.call(this);
                c.vectorToWorldFrame(this.axisA, b.axisA);
                a.vectorToWorldFrame(this.axisB,
                    b.axisB);
                this.axisA.tangents(f.axisA, f.axisA);
                c.vectorToWorldFrame(f.axisA, f.axisA);
                this.axisB.tangents(f.axisB, f.axisB);
                a.vectorToWorldFrame(f.axisB, f.axisB);
                b.angle = this.angle;
                f.maxAngle = this.twistAngle
            }
        }, {
            "../equations/ConeEquation": 18,
            "../equations/ContactEquation": 19,
            "../equations/RotationalEquation": 22,
            "../math/Vec3": 30,
            "./Constraint": 13,
            "./PointToPointConstraint": 17
        }],
        13: [function(b, g, h) {
            function a(c, b, k) {
                k = e.defaults(k, {
                    collideConnected: !0,
                    wakeUpBodies: !0
                });
                this.equations = [];
                this.bodyA = c;
                this.bodyB = b;
                this.id = a.idCounter++;
                this.collideConnected = k.collideConnected;
                k.wakeUpBodies && (c && c.wakeUp(), b && b.wakeUp())
            }
            g.exports = a;
            var e = b("../utils/Utils");
            a.prototype.update = function() {
                throw Error("method update() not implmemented in this Constraint subclass!");
            };
            a.prototype.enable = function() {
                for (var c = this.equations, a = 0; a < c.length; a++) c[a].enabled = !0
            };
            a.prototype.disable = function() {
                for (var a = this.equations, b = 0; b < a.length; b++) a[b].enabled = !1
            };
            a.idCounter = 0
        }, {
            "../utils/Utils": 53
        }],
        14: [function(b,
                g, h) {
                function a(a, b, d, p) {
                    e.call(this, a, b);
                    "undefined" === typeof d && (d = a.position.distanceTo(b.position));
                    "undefined" === typeof p && (p = 1E6);
                    this.distance = d;
                    a = this.distanceEquation = new c(a, b);
                    this.equations.push(a);
                    a.minForce = -p;
                    a.maxForce = p
                }
                g.exports = a;
                var e = b("./Constraint"),
                    c = b("../equations/ContactEquation");
                a.prototype = new e;
                a.prototype.update = function() {
                    var a = this.distanceEquation,
                        c = .5 * this.distance,
                        d = a.ni;
                    this.bodyB.position.vsub(this.bodyA.position, d);
                    d.normalize();
                    d.mult(c, a.ri);
                    d.mult(-c, a.rj)
                }
            },
            {
                "../equations/ContactEquation": 19,
                "./Constraint": 13
            }
        ],
        15: [function(b, g, h) {
            function a(a, d, b) {
                b = b || {};
                var m = "undefined" !== typeof b.maxForce ? b.maxForce : 1E6,
                    l = b.pivotA ? b.pivotA.clone() : new k,
                    p = b.pivotB ? b.pivotB.clone() : new k;
                e.call(this, a, l, d, p, m);
                (this.axisA = b.axisA ? b.axisA.clone() : new k(1, 0, 0)).normalize();
                (this.axisB = b.axisB ? b.axisB.clone() : new k(1, 0, 0)).normalize();
                l = this.rotationalEquation1 = new c(a, d, b);
                b = this.rotationalEquation2 = new c(a, d, b);
                a = this.motorEquation = new f(a, d, m);
                a.enabled = !1;
                this.equations.push(l,
                    b, a)
            }
            g.exports = a;
            b("./Constraint");
            var e = b("./PointToPointConstraint"),
                c = b("../equations/RotationalEquation"),
                f = b("../equations/RotationalMotorEquation");
            b("../equations/ContactEquation");
            var k = b("../math/Vec3");
            a.prototype = new e;
            a.constructor = a;
            a.prototype.enableMotor = function() {
                this.motorEquation.enabled = !0
            };
            a.prototype.disableMotor = function() {
                this.motorEquation.enabled = !1
            };
            a.prototype.setMotorSpeed = function(a) {
                this.motorEquation.targetVelocity = a
            };
            a.prototype.setMotorMaxForce = function(a) {
                this.motorEquation.maxForce =
                    a;
                this.motorEquation.minForce = -a
            };
            var d = new k,
                p = new k;
            a.prototype.update = function() {
                var a = this.bodyA,
                    c = this.bodyB,
                    b = this.motorEquation,
                    f = this.rotationalEquation1,
                    k = this.rotationalEquation2,
                    g = this.axisA,
                    h = this.axisB;
                e.prototype.update.call(this);
                a.quaternion.vmult(g, d);
                c.quaternion.vmult(h, p);
                d.tangents(f.axisA, k.axisA);
                f.axisB.copy(p);
                k.axisB.copy(p);
                this.motorEquation.enabled && (a.quaternion.vmult(this.axisA, b.axisA), c.quaternion.vmult(this.axisB, b.axisB))
            }
        }, {
            "../equations/ContactEquation": 19,
            "../equations/RotationalEquation": 22,
            "../equations/RotationalMotorEquation": 23,
            "../math/Vec3": 30,
            "./Constraint": 13,
            "./PointToPointConstraint": 17
        }],
        16: [function(b, g, h) {
            function a(a, d, b) {
                b = b || {};
                var m = "undefined" !== typeof b.maxForce ? b.maxForce : 1E6,
                    l = new f,
                    k = new f,
                    p = new f;
                a.position.vadd(d.position, p);
                p.scale(.5, p);
                d.pointToLocalFrame(p, k);
                a.pointToLocalFrame(p, l);
                e.call(this, a, l, d, k, m);
                m = this.rotationalEquation1 = new c(a, d, b);
                l = this.rotationalEquation2 = new c(a, d, b);
                a = this.rotationalEquation3 = new c(a, d, b);
                this.equations.push(m, l, a)
            }
            g.exports =
                a;
            b("./Constraint");
            var e = b("./PointToPointConstraint"),
                c = b("../equations/RotationalEquation");
            b("../equations/RotationalMotorEquation");
            b("../equations/ContactEquation");
            var f = b("../math/Vec3");
            a.prototype = new e;
            a.constructor = a;
            new f;
            new f;
            a.prototype.update = function() {
                var a = this.bodyA,
                    c = this.bodyB,
                    b = this.rotationalEquation1,
                    m = this.rotationalEquation2,
                    l = this.rotationalEquation3;
                e.prototype.update.call(this);
                a.vectorToWorldFrame(f.UNIT_X, b.axisA);
                c.vectorToWorldFrame(f.UNIT_Y, b.axisB);
                a.vectorToWorldFrame(f.UNIT_Y,
                    m.axisA);
                c.vectorToWorldFrame(f.UNIT_Z, m.axisB);
                a.vectorToWorldFrame(f.UNIT_Z, l.axisA);
                c.vectorToWorldFrame(f.UNIT_X, l.axisB)
            }
        }, {
            "../equations/ContactEquation": 19,
            "../equations/RotationalEquation": 22,
            "../equations/RotationalMotorEquation": 23,
            "../math/Vec3": 30,
            "./Constraint": 13,
            "./PointToPointConstraint": 17
        }],
        17: [function(b, g, h) {
            function a(a, d, b, m, l) {
                e.call(this, a, b);
                l = "undefined" !== typeof l ? l : 1E6;
                this.pivotA = d ? d.clone() : new f;
                this.pivotB = m ? m.clone() : new f;
                d = this.equationX = new c(a, b);
                m = this.equationY =
                    new c(a, b);
                a = this.equationZ = new c(a, b);
                this.equations.push(d, m, a);
                d.minForce = m.minForce = a.minForce = -l;
                d.maxForce = m.maxForce = a.maxForce = l;
                d.ni.set(1, 0, 0);
                m.ni.set(0, 1, 0);
                a.ni.set(0, 0, 1)
            }
            g.exports = a;
            var e = b("./Constraint"),
                c = b("../equations/ContactEquation"),
                f = b("../math/Vec3");
            a.prototype = new e;
            a.prototype.update = function() {
                var a = this.bodyB,
                    c = this.equationX,
                    b = this.equationY,
                    e = this.equationZ;
                this.bodyA.quaternion.vmult(this.pivotA, c.ri);
                a.quaternion.vmult(this.pivotB, c.rj);
                b.ri.copy(c.ri);
                b.rj.copy(c.rj);
                e.ri.copy(c.ri);
                e.rj.copy(c.rj)
            }
        }, {
            "../equations/ContactEquation": 19,
            "../math/Vec3": 30,
            "./Constraint": 13
        }],
        18: [function(b, g, h) {
            function a(a, b, f) {
                f = f || {};
                var d = "undefined" !== typeof f.maxForce ? f.maxForce : 1E6;
                c.call(this, a, b, -d, d);
                this.axisA = f.axisA ? f.axisA.clone() : new e(1, 0, 0);
                this.axisB = f.axisB ? f.axisB.clone() : new e(0, 1, 0);
                this.angle = "undefined" !== typeof f.angle ? f.angle : 0
            }
            g.exports = a;
            var e = b("../math/Vec3");
            b("../math/Mat3");
            var c = b("./Equation");
            a.prototype = new c;
            a.prototype.constructor = a;
            var f = new e,
                k = new e;
            a.prototype.computeB = function(a) {
                var c = this.a,
                    b = this.b,
                    d = this.axisA,
                    e = this.axisB,
                    g = this.jacobianElementA,
                    h = this.jacobianElementB;
                d.cross(e, f);
                e.cross(d, k);
                g.rotational.copy(k);
                h.rotational.copy(f);
                d = Math.cos(this.angle) - d.dot(e);
                e = this.computeGW();
                g = this.computeGiMf();
                return -d * c - e * b - a * g
            }
        }, {
            "../math/Mat3": 27,
            "../math/Vec3": 30,
            "./Equation": 20
        }],
        19: [function(b, g, h) {
            function a(a, d, b) {
                e.call(this, a, d, 0, "undefined" !== typeof b ? b : 1E6);
                this.restitution = 0;
                this.ri = new c;
                this.rj = new c;
                this.ni = new c
            }
            g.exports =
                a;
            var e = b("./Equation"),
                c = b("../math/Vec3");
            b("../math/Mat3");
            a.prototype = new e;
            a.prototype.constructor = a;
            var f = new c,
                k = new c,
                d = new c;
            a.prototype.computeB = function(a) {
                var c = this.a,
                    b = this.b,
                    e = this.bi,
                    m = this.bj,
                    l = this.ri,
                    p = this.rj,
                    q = e.velocity,
                    t = e.angularVelocity,
                    g = m.velocity,
                    B = m.angularVelocity,
                    r = this.jacobianElementA,
                    h = this.jacobianElementB,
                    y = this.ni;
                l.cross(y, f);
                p.cross(y, k);
                y.negate(r.spatial);
                f.negate(r.rotational);
                h.spatial.copy(y);
                h.rotational.copy(k);
                d.copy(m.position);
                d.vadd(p, d);
                d.vsub(e.position,
                    d);
                d.vsub(l, d);
                e = y.dot(d);
                m = this.restitution + 1;
                q = m * g.dot(y) - m * q.dot(y) + B.dot(k) - t.dot(f);
                t = this.computeGiMf();
                return -e * c - q * b - a * t
            };
            var p = new c,
                m = new c,
                l = new c,
                q = new c,
                r = new c;
            a.prototype.getImpactVelocityAlongNormal = function() {
                this.bi.position.vadd(this.ri, l);
                this.bj.position.vadd(this.rj, q);
                this.bi.getVelocityAtWorldPoint(l, p);
                this.bj.getVelocityAtWorldPoint(q, m);
                p.vsub(m, r);
                return this.ni.dot(r)
            }
        }, {
            "../math/Mat3": 27,
            "../math/Vec3": 30,
            "./Equation": 20
        }],
        20: [function(b, g, h) {
            function a(c, b, d, f) {
                this.id =
                    a.id++;
                this.minForce = "undefined" === typeof d ? -1E6 : d;
                this.maxForce = "undefined" === typeof f ? 1E6 : f;
                this.bi = c;
                this.bj = b;
                this.eps = this.b = this.a = 0;
                this.jacobianElementA = new e;
                this.jacobianElementB = new e;
                this.enabled = !0;
                this.setSpookParams(1E7, 4, 1 / 60)
            }
            g.exports = a;
            var e = b("../math/JacobianElement");
            b = b("../math/Vec3");
            a.prototype.constructor = a;
            a.id = 0;
            a.prototype.setSpookParams = function(a, c, b) {
                this.a = 4 / (b * (1 + 4 * c));
                this.b = 4 * c / (1 + 4 * c);
                this.eps = 4 / (b * b * a * (1 + 4 * c))
            };
            a.prototype.computeB = function(a, c, b) {
                var d = this.computeGW(),
                    e = this.computeGq(),
                    f = this.computeGiMf();
                return -e * a - d * c - f * b
            };
            a.prototype.computeGq = function() {
                var a = this.jacobianElementB,
                    c = this.bj.position;
                return this.jacobianElementA.spatial.dot(this.bi.position) + a.spatial.dot(c)
            };
            var c = new b;
            a.prototype.computeGW = function() {
                var a = this.jacobianElementB,
                    b = this.bi,
                    d = this.bj,
                    e = d.velocity;
                d = d.angularVelocity || c;
                return this.jacobianElementA.multiplyVectors(b.velocity, b.angularVelocity || c) + a.multiplyVectors(e, d)
            };
            a.prototype.computeGWlambda = function() {
                var a = this.jacobianElementB,
                    b = this.bi,
                    d = this.bj,
                    e = d.vlambda;
                d = d.wlambda || c;
                return this.jacobianElementA.multiplyVectors(b.vlambda, b.wlambda || c) + a.multiplyVectors(e, d)
            };
            var f = new b,
                k = new b,
                d = new b,
                p = new b;
            a.prototype.computeGiMf = function() {
                var a = this.jacobianElementA,
                    c = this.jacobianElementB,
                    b = this.bi,
                    e = this.bj,
                    m = b.force,
                    l = b.torque,
                    g = e.force,
                    h = e.torque,
                    E = b.invMassSolve,
                    F = e.invMassSolve;
                b.invInertiaWorldSolve ? b.invInertiaWorldSolve.vmult(l, d) : d.set(0, 0, 0);
                e.invInertiaWorldSolve ? e.invInertiaWorldSolve.vmult(h, p) : p.set(0, 0, 0);
                m.mult(E,
                    f);
                g.mult(F, k);
                return a.multiplyVectors(f, d) + c.multiplyVectors(k, p)
            };
            var m = new b;
            a.prototype.computeGiMGt = function() {
                var a = this.jacobianElementA,
                    c = this.jacobianElementB,
                    b = this.bi,
                    d = this.bj,
                    e = b.invInertiaWorldSolve,
                    f = d.invInertiaWorldSolve;
                b = b.invMassSolve + d.invMassSolve;
                e && (e.vmult(a.rotational, m), b += m.dot(a.rotational));
                f && (f.vmult(c.rotational, m), b += m.dot(c.rotational));
                return b
            };
            var l = new b;
            new b;
            new b;
            new b;
            new b;
            new b;
            a.prototype.addToWlambda = function(a) {
                var c = this.jacobianElementA,
                    b = this.jacobianElementB,
                    d = this.bi,
                    e = this.bj;
                c.spatial.mult(d.invMassSolve * a, l);
                d.vlambda.vadd(l, d.vlambda);
                b.spatial.mult(e.invMassSolve * a, l);
                e.vlambda.vadd(l, e.vlambda);
                d.invInertiaWorldSolve && (d.invInertiaWorldSolve.vmult(c.rotational, l), l.mult(a, l), d.wlambda.vadd(l, d.wlambda));
                e.invInertiaWorldSolve && (e.invInertiaWorldSolve.vmult(b.rotational, l), l.mult(a, l), e.wlambda.vadd(l, e.wlambda))
            };
            a.prototype.computeC = function() {
                return this.computeGiMGt() + this.eps
            }
        }, {
            "../math/JacobianElement": 26,
            "../math/Vec3": 30
        }],
        21: [function(b,
            g, h) {
            function a(a, b, f) {
                e.call(this, a, b, -f, f);
                this.ri = new c;
                this.rj = new c;
                this.t = new c
            }
            g.exports = a;
            var e = b("./Equation"),
                c = b("../math/Vec3");
            b("../math/Mat3");
            a.prototype = new e;
            a.prototype.constructor = a;
            var f = new c,
                k = new c;
            a.prototype.computeB = function(a) {
                var c = this.b,
                    b = this.rj,
                    d = this.t;
                this.ri.cross(d, f);
                b.cross(d, k);
                b = this.jacobianElementA;
                var e = this.jacobianElementB;
                d.negate(b.spatial);
                f.negate(b.rotational);
                e.spatial.copy(d);
                e.rotational.copy(k);
                d = this.computeGW();
                b = this.computeGiMf();
                return -d *
                    c - a * b
            }
        }, {
            "../math/Mat3": 27,
            "../math/Vec3": 30,
            "./Equation": 20
        }],
        22: [function(b, g, h) {
            function a(a, b, f) {
                f = f || {};
                var d = "undefined" !== typeof f.maxForce ? f.maxForce : 1E6;
                c.call(this, a, b, -d, d);
                this.axisA = f.axisA ? f.axisA.clone() : new e(1, 0, 0);
                this.axisB = f.axisB ? f.axisB.clone() : new e(0, 1, 0);
                this.maxAngle = Math.PI / 2
            }
            g.exports = a;
            var e = b("../math/Vec3");
            b("../math/Mat3");
            var c = b("./Equation");
            a.prototype = new c;
            a.prototype.constructor = a;
            var f = new e,
                k = new e;
            a.prototype.computeB = function(a) {
                var c = this.a,
                    b = this.b,
                    d =
                    this.axisA,
                    e = this.axisB,
                    g = this.jacobianElementA,
                    h = this.jacobianElementB;
                d.cross(e, f);
                e.cross(d, k);
                g.rotational.copy(k);
                h.rotational.copy(f);
                d = Math.cos(this.maxAngle) - d.dot(e);
                e = this.computeGW();
                g = this.computeGiMf();
                return -d * c - e * b - a * g
            }
        }, {
            "../math/Mat3": 27,
            "../math/Vec3": 30,
            "./Equation": 20
        }],
        23: [function(b, g, h) {
            function a(a, b, d) {
                d = "undefined" !== typeof d ? d : 1E6;
                c.call(this, a, b, -d, d);
                this.axisA = new e;
                this.axisB = new e;
                this.targetVelocity = 0
            }
            g.exports = a;
            var e = b("../math/Vec3");
            b("../math/Mat3");
            var c = b("./Equation");
            a.prototype = new c;
            a.prototype.constructor = a;
            a.prototype.computeB = function(a) {
                var c = this.b,
                    b = this.axisB,
                    e = this.jacobianElementB;
                this.jacobianElementA.rotational.copy(this.axisA);
                b.negate(e.rotational);
                b = this.computeGW() - this.targetVelocity;
                e = this.computeGiMf();
                return -b * c - a * e
            }
        }, {
            "../math/Mat3": 27,
            "../math/Vec3": 30,
            "./Equation": 20
        }],
        24: [function(b, g, h) {
            function a(c, b, k) {
                k = e.defaults(k, {
                    friction: .3,
                    restitution: .3,
                    contactEquationStiffness: 1E7,
                    contactEquationRelaxation: 3,
                    frictionEquationStiffness: 1E7,
                    frictionEquationRelaxation: 3
                });
                this.id = a.idCounter++;
                this.materials = [c, b];
                this.friction = k.friction;
                this.restitution = k.restitution;
                this.contactEquationStiffness = k.contactEquationStiffness;
                this.contactEquationRelaxation = k.contactEquationRelaxation;
                this.frictionEquationStiffness = k.frictionEquationStiffness;
                this.frictionEquationRelaxation = k.frictionEquationRelaxation
            }
            var e = b("../utils/Utils");
            g.exports = a;
            a.idCounter = 0
        }, {
            "../utils/Utils": 53
        }],
        25: [function(b, g, h) {
            function a(b) {
                var c = "";
                b = b || {};
                "string" === typeof b ? (c = b, b = {}) : "object" ===
                    typeof b && (c = "");
                this.name = c;
                this.id = a.idCounter++;
                this.friction = "undefined" !== typeof b.friction ? b.friction : -1;
                this.restitution = "undefined" !== typeof b.restitution ? b.restitution : -1
            }
            g.exports = a;
            a.idCounter = 0
        }, {}],
        26: [function(b, g, h) {
                function a() {
                    this.spatial = new e;
                    this.rotational = new e
                }
                g.exports = a;
                var e = b("./Vec3");
                a.prototype.multiplyElement = function(a) {
                    return a.spatial.dot(this.spatial) + a.rotational.dot(this.rotational)
                };
                a.prototype.multiplyVectors = function(a, b) {
                    return a.dot(this.spatial) + b.dot(this.rotational)
                }
            },
            {
                "./Vec3": 30
            }
        ],
        27: [function(b, g, h) {
            function a(a) {
                this.elements = a ? a : [0, 0, 0, 0, 0, 0, 0, 0, 0]
            }
            g.exports = a;
            var e = b("./Vec3");
            a.prototype.identity = function() {
                var a = this.elements;
                a[0] = 1;
                a[1] = 0;
                a[2] = 0;
                a[3] = 0;
                a[4] = 1;
                a[5] = 0;
                a[6] = 0;
                a[7] = 0;
                a[8] = 1
            };
            a.prototype.setZero = function() {
                var a = this.elements;
                a[0] = 0;
                a[1] = 0;
                a[2] = 0;
                a[3] = 0;
                a[4] = 0;
                a[5] = 0;
                a[6] = 0;
                a[7] = 0;
                a[8] = 0
            };
            a.prototype.setTrace = function(a) {
                var c = this.elements;
                c[0] = a.x;
                c[4] = a.y;
                c[8] = a.z
            };
            a.prototype.getTrace = function(a) {
                a = a || new e;
                var c = this.elements;
                a.x = c[0];
                a.y = c[4];
                a.z = c[8]
            };
            a.prototype.vmult = function(a, b) {
                b = b || new e;
                var c = this.elements,
                    d = a.x,
                    f = a.y,
                    m = a.z;
                b.x = c[0] * d + c[1] * f + c[2] * m;
                b.y = c[3] * d + c[4] * f + c[5] * m;
                b.z = c[6] * d + c[7] * f + c[8] * m;
                return b
            };
            a.prototype.smult = function(a) {
                for (var c = 0; c < this.elements.length; c++) this.elements[c] *= a
            };
            a.prototype.mmult = function(c, b) {
                for (var e = b || new a, d = 0; 3 > d; d++)
                    for (var f = 0; 3 > f; f++) {
                        for (var m = 0, l = 0; 3 > l; l++) m += c.elements[d + 3 * l] * this.elements[l + 3 * f];
                        e.elements[d + 3 * f] = m
                    }
                return e
            };
            a.prototype.scale = function(c, b) {
                b = b || new a;
                for (var e =
                        this.elements, d = b.elements, f = 0; 3 !== f; f++) d[3 * f] = c.x * e[3 * f], d[3 * f + 1] = c.y * e[3 * f + 1], d[3 * f + 2] = c.z * e[3 * f + 2];
                return b
            };
            a.prototype.solve = function(a, b) {
                b = b || new e;
                for (var c = [], d = 0; 12 > d; d++) c.push(0);
                var f;
                for (d = 0; 3 > d; d++)
                    for (f = 0; 3 > f; f++) c[d + 4 * f] = this.elements[d + 3 * f];
                c[3] = a.x;
                c[7] = a.y;
                c[11] = a.z;
                var m = 3,
                    l = m;
                do {
                    d = l - m;
                    if (0 === c[d + 4 * d])
                        for (f = d + 1; f < l; f++)
                            if (0 !== c[d + 4 * f]) {
                                var g = 4;
                                do {
                                    var h = 4 - g;
                                    c[h + 4 * d] += c[h + 4 * f]
                                } while (--g);
                                break
                            }
                    if (0 !== c[d + 4 * d])
                        for (f = d + 1; f < l; f++) {
                            var y = c[d + 4 * f] / c[d + 4 * d];
                            g = 4;
                            do h = 4 - g, c[h + 4 * f] = h <=
                                d ? 0 : c[h + 4 * f] - c[h + 4 * d] * y; while (--g)
                        }
                } while (--m);
                b.z = c[11] / c[10];
                b.y = (c[7] - c[6] * b.z) / c[5];
                b.x = (c[3] - c[2] * b.z - c[1] * b.y) / c[0];
                if (isNaN(b.x) || isNaN(b.y) || isNaN(b.z) || Infinity === b.x || Infinity === b.y || Infinity === b.z) throw "Could not solve equation! Got x=[" + b.toString() + "], b=[" + a.toString() + "], A=[" + this.toString() + "]";
                return b
            };
            a.prototype.e = function(a, b, e) {
                if (void 0 === e) return this.elements[b + 3 * a];
                this.elements[b + 3 * a] = e
            };
            a.prototype.copy = function(a) {
                for (var c = 0; c < a.elements.length; c++) this.elements[c] =
                    a.elements[c];
                return this
            };
            a.prototype.toString = function() {
                for (var a = "", b = 0; 9 > b; b++) a += this.elements[b] + ",";
                return a
            };
            a.prototype.reverse = function(c) {
                c = c || new a;
                for (var b = [], e = 0; 18 > e; e++) b.push(0);
                var d;
                for (e = 0; 3 > e; e++)
                    for (d = 0; 3 > d; d++) b[e + 6 * d] = this.elements[e + 3 * d];
                b[3] = 1;
                b[9] = 0;
                b[15] = 0;
                b[4] = 0;
                b[10] = 1;
                b[16] = 0;
                b[5] = 0;
                b[11] = 0;
                b[17] = 1;
                var g = 3,
                    m = g;
                do {
                    e = m - g;
                    if (0 === b[e + 6 * e])
                        for (d = e + 1; d < m; d++)
                            if (0 !== b[e + 6 * d]) {
                                var l = 6;
                                do {
                                    var q = 6 - l;
                                    b[q + 6 * e] += b[q + 6 * d]
                                } while (--l);
                                break
                            }
                    if (0 !== b[e + 6 * e])
                        for (d = e + 1; d < m; d++) {
                            var h =
                                b[e + 6 * d] / b[e + 6 * e];
                            l = 6;
                            do q = 6 - l, b[q + 6 * d] = q <= e ? 0 : b[q + 6 * d] - b[q + 6 * e] * h; while (--l)
                        }
                } while (--g);
                e = 2;
                do {
                    d = e - 1;
                    do {
                        h = b[e + 6 * d] / b[e + 6 * e];
                        l = 6;
                        do q = 6 - l, b[q + 6 * d] -= b[q + 6 * e] * h; while (--l)
                    } while (d--)
                } while (--e);
                e = 2;
                do {
                    h = 1 / b[e + 6 * e];
                    l = 6;
                    do q = 6 - l, b[q + 6 * e] *= h; while (--l)
                } while (e--);
                e = 2;
                do {
                    d = 2;
                    do {
                        q = b[3 + d + 6 * e];
                        if (isNaN(q) || Infinity === q) throw "Could not reverse! A=[" + this.toString() + "]";
                        c.e(e, d, q)
                    } while (d--)
                } while (e--);
                return c
            };
            a.prototype.setRotationFromQuaternion = function(a) {
                var c = a.x,
                    b = a.y,
                    d = a.z,
                    e = a.w,
                    m = c + c,
                    l = b + b,
                    g = d + d;
                a = c * m;
                var h = c * l;
                c *= g;
                var y = b * l;
                b *= g;
                d *= g;
                m *= e;
                l *= e;
                e *= g;
                g = this.elements;
                g[0] = 1 - (y + d);
                g[1] = h - e;
                g[2] = c + l;
                g[3] = h + e;
                g[4] = 1 - (a + d);
                g[5] = b - m;
                g[6] = c - l;
                g[7] = b + m;
                g[8] = 1 - (a + y);
                return this
            };
            a.prototype.transpose = function(c) {
                c = c || new a;
                for (var b = c.elements, e = this.elements, d = 0; 3 !== d; d++)
                    for (var g = 0; 3 !== g; g++) b[3 * d + g] = e[3 * g + d];
                return c
            }
        }, {
            "./Vec3": 30
        }],
        28: [function(b, g, h) {
            function a(a, c, b, d) {
                this.x = void 0 !== a ? a : 0;
                this.y = void 0 !== c ? c : 0;
                this.z = void 0 !== b ? b : 0;
                this.w = void 0 !== d ? d : 1
            }
            g.exports = a;
            var e = b("./Vec3");
            a.prototype.set =
                function(a, c, b, d) {
                    this.x = a;
                    this.y = c;
                    this.z = b;
                    this.w = d
                };
            a.prototype.toString = function() {
                return this.x + "," + this.y + "," + this.z + "," + this.w
            };
            a.prototype.toArray = function() {
                return [this.x, this.y, this.z, this.w]
            };
            a.prototype.setFromAxisAngle = function(a, c) {
                var b = Math.sin(.5 * c);
                this.x = a.x * b;
                this.y = a.y * b;
                this.z = a.z * b;
                this.w = Math.cos(.5 * c)
            };
            a.prototype.toAxisAngle = function(a) {
                a = a || new e;
                this.normalize();
                var c = 2 * Math.acos(this.w),
                    b = Math.sqrt(1 - this.w * this.w);
                .001 > b ? (a.x = this.x, a.y = this.y, a.z = this.z) : (a.x = this.x /
                    b, a.y = this.y / b, a.z = this.z / b);
                return [a, c]
            };
            var c = new e,
                f = new e;
            a.prototype.setFromVectors = function(a, b) {
                if (a.isAntiparallelTo(b)) a.tangents(c, f), this.setFromAxisAngle(c, Math.PI);
                else {
                    var d = a.cross(b);
                    this.x = d.x;
                    this.y = d.y;
                    this.z = d.z;
                    this.w = Math.sqrt(Math.pow(a.norm(), 2) * Math.pow(b.norm(), 2)) + a.dot(b);
                    this.normalize()
                }
            };
            var k = new e,
                d = new e,
                p = new e;
            a.prototype.mult = function(c, b) {
                b = b || new a;
                var e = this.w;
                k.set(this.x, this.y, this.z);
                d.set(c.x, c.y, c.z);
                b.w = e * c.w - k.dot(d);
                k.cross(d, p);
                b.x = e * d.x + c.w * k.x + p.x;
                b.y = e * d.y + c.w * k.y + p.y;
                b.z = e * d.z + c.w * k.z + p.z;
                return b
            };
            a.prototype.inverse = function(c) {
                var b = this.x,
                    d = this.y,
                    e = this.z,
                    f = this.w;
                c = c || new a;
                this.conjugate(c);
                b = 1 / (b * b + d * d + e * e + f * f);
                c.x *= b;
                c.y *= b;
                c.z *= b;
                c.w *= b;
                return c
            };
            a.prototype.conjugate = function(c) {
                c = c || new a;
                c.x = -this.x;
                c.y = -this.y;
                c.z = -this.z;
                c.w = this.w;
                return c
            };
            a.prototype.normalize = function() {
                var a = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
                0 === a ? this.w = this.z = this.y = this.x = 0 : (a = 1 / a, this.x *= a, this.y *= a, this.z *= a, this.w *=
                    a)
            };
            a.prototype.normalizeFast = function() {
                var a = (3 - (this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)) / 2;
                0 === a ? this.w = this.z = this.y = this.x = 0 : (this.x *= a, this.y *= a, this.z *= a, this.w *= a)
            };
            a.prototype.vmult = function(a, c) {
                c = c || new e;
                var b = a.x,
                    d = a.y,
                    f = a.z,
                    l = this.x,
                    g = this.y,
                    m = this.z,
                    k = this.w,
                    p = k * b + g * f - m * d,
                    h = k * d + m * b - l * f,
                    F = k * f + l * d - g * b;
                b = -l * b - g * d - m * f;
                c.x = p * k + b * -l + h * -m - F * -g;
                c.y = h * k + b * -g + F * -l - p * -m;
                c.z = F * k + b * -m + p * -g - h * -l;
                return c
            };
            a.prototype.copy = function(a) {
                this.x = a.x;
                this.y = a.y;
                this.z = a.z;
                this.w = a.w;
                return this
            };
            a.prototype.toEuler = function(a, c) {
                c = c || "YZX";
                var b = this.x,
                    d = this.y,
                    e = this.z,
                    f = this.w;
                switch (c) {
                    case "YZX":
                        var l = b * d + e * f;
                        if (.499 < l) {
                            var g = 2 * Math.atan2(b, f);
                            var m = Math.PI / 2;
                            var k = 0
                        } - .499 > l && (g = -2 * Math.atan2(b, f), m = -Math.PI / 2, k = 0);
                        isNaN(g) && (k = e * e, g = Math.atan2(2 * d * f - 2 * b * e, 1 - 2 * d * d - 2 * k), m = Math.asin(2 * l), k = Math.atan2(2 * b * f - 2 * d * e, 1 - 2 * b * b - 2 * k));
                        break;
                    default:
                        throw Error("Euler order " + c + " not supported yet.");
                }
                a.y = g;
                a.z = m;
                a.x = k
            };
            a.prototype.setFromEuler = function(a, c, b, d) {
                d = d || "XYZ";
                var e = Math.cos(a / 2),
                    f =
                    Math.cos(c / 2),
                    g = Math.cos(b / 2);
                a = Math.sin(a / 2);
                c = Math.sin(c / 2);
                b = Math.sin(b / 2);
                "XYZ" === d ? (this.x = a * f * g + e * c * b, this.y = e * c * g - a * f * b, this.z = e * f * b + a * c * g, this.w = e * f * g - a * c * b) : "YXZ" === d ? (this.x = a * f * g + e * c * b, this.y = e * c * g - a * f * b, this.z = e * f * b - a * c * g, this.w = e * f * g + a * c * b) : "ZXY" === d ? (this.x = a * f * g - e * c * b, this.y = e * c * g + a * f * b, this.z = e * f * b + a * c * g, this.w = e * f * g - a * c * b) : "ZYX" === d ? (this.x = a * f * g - e * c * b, this.y = e * c * g + a * f * b, this.z = e * f * b - a * c * g, this.w = e * f * g + a * c * b) : "YZX" === d ? (this.x = a * f * g + e * c * b, this.y = e * c * g + a * f * b, this.z = e * f * b - a * c * g, this.w =
                    e * f * g - a * c * b) : "XZY" === d && (this.x = a * f * g - e * c * b, this.y = e * c * g - a * f * b, this.z = e * f * b + a * c * g, this.w = e * f * g + a * c * b);
                return this
            };
            a.prototype.clone = function() {
                return new a(this.x, this.y, this.z, this.w)
            }
        }, {
            "./Vec3": 30
        }],
        29: [function(b, g, h) {
            function a(a) {
                a = a || {};
                this.position = new e;
                a.position && this.position.copy(a.position);
                this.quaternion = new c;
                a.quaternion && this.quaternion.copy(a.quaternion)
            }
            var e = b("./Vec3"),
                c = b("./Quaternion");
            g.exports = a;
            var f = new c;
            a.pointToLocalFrame = function(a, c, b, g) {
                g = g || new e;
                b.vsub(a, g);
                c.conjugate(f);
                f.vmult(g, g);
                return g
            };
            a.prototype.pointToLocal = function(c, b) {
                return a.pointToLocalFrame(this.position, this.quaternion, c, b)
            };
            a.pointToWorldFrame = function(a, c, b, f) {
                f = f || new e;
                c.vmult(b, f);
                f.vadd(a, f);
                return f
            };
            a.prototype.pointToWorld = function(c, b) {
                return a.pointToWorldFrame(this.position, this.quaternion, c, b)
            };
            a.prototype.vectorToWorldFrame = function(a, c) {
                c = c || new e;
                this.quaternion.vmult(a, c);
                return c
            };
            a.vectorToWorldFrame = function(a, c, b) {
                a.vmult(c, b);
                return b
            };
            a.vectorToLocalFrame = function(a,
                c, b, f) {
                f = f || new e;
                c.w *= -1;
                c.vmult(b, f);
                c.w *= -1;
                return f
            }
        }, {
            "./Quaternion": 28,
            "./Vec3": 30
        }],
        30: [function(b, g, h) {
            function a(a, c, b) {
                this.x = a || 0;
                this.y = c || 0;
                this.z = b || 0
            }
            g.exports = a;
            var e = b("./Mat3");
            a.ZERO = new a(0, 0, 0);
            a.UNIT_X = new a(1, 0, 0);
            a.UNIT_Y = new a(0, 1, 0);
            a.UNIT_Z = new a(0, 0, 1);
            a.prototype.cross = function(c, b) {
                var d = c.x,
                    e = c.y,
                    f = c.z,
                    g = this.x,
                    k = this.y,
                    p = this.z;
                b = b || new a;
                b.x = k * f - p * e;
                b.y = p * d - g * f;
                b.z = g * e - k * d;
                return b
            };
            a.prototype.set = function(a, c, b) {
                this.x = a;
                this.y = c;
                this.z = b;
                return this
            };
            a.prototype.setZero =
                function() {
                    this.x = this.y = this.z = 0
                };
            a.prototype.vadd = function(c, b) {
                if (b) b.x = c.x + this.x, b.y = c.y + this.y, b.z = c.z + this.z;
                else return new a(this.x + c.x, this.y + c.y, this.z + c.z)
            };
            a.prototype.vsub = function(c, b) {
                if (b) b.x = this.x - c.x, b.y = this.y - c.y, b.z = this.z - c.z;
                else return new a(this.x - c.x, this.y - c.y, this.z - c.z)
            };
            a.prototype.crossmat = function() {
                return new e([0, -this.z, this.y, this.z, 0, -this.x, -this.y, this.x, 0])
            };
            a.prototype.normalize = function() {
                var a = this.x,
                    c = this.y,
                    b = this.z;
                a = Math.sqrt(a * a + c * c + b * b);
                0 < a ? (c = 1 /
                    a, this.x *= c, this.y *= c, this.z *= c) : this.z = this.y = this.x = 0;
                return a
            };
            a.prototype.unit = function(c) {
                c = c || new a;
                var b = this.x,
                    d = this.y,
                    e = this.z,
                    f = Math.sqrt(b * b + d * d + e * e);
                0 < f ? (f = 1 / f, c.x = b * f, c.y = d * f, c.z = e * f) : (c.x = 1, c.y = 0, c.z = 0);
                return c
            };
            a.prototype.norm = function() {
                var a = this.x,
                    c = this.y,
                    b = this.z;
                return Math.sqrt(a * a + c * c + b * b)
            };
            a.prototype.length = a.prototype.norm;
            a.prototype.norm2 = function() {
                return this.dot(this)
            };
            a.prototype.lengthSquared = a.prototype.norm2;
            a.prototype.distanceTo = function(a) {
                var c = this.x,
                    b = this.y,
                    d = this.z,
                    e = a.x,
                    f = a.y;
                a = a.z;
                return Math.sqrt((e - c) * (e - c) + (f - b) * (f - b) + (a - d) * (a - d))
            };
            a.prototype.distanceSquared = function(a) {
                var c = this.x,
                    b = this.y,
                    d = this.z,
                    e = a.x,
                    f = a.y;
                a = a.z;
                return (e - c) * (e - c) + (f - b) * (f - b) + (a - d) * (a - d)
            };
            a.prototype.mult = function(c, b) {
                b = b || new a;
                var d = this.y,
                    e = this.z;
                b.x = c * this.x;
                b.y = c * d;
                b.z = c * e;
                return b
            };
            a.prototype.scale = a.prototype.mult;
            a.prototype.dot = function(a) {
                return this.x * a.x + this.y * a.y + this.z * a.z
            };
            a.prototype.isZero = function() {
                return 0 === this.x && 0 === this.y && 0 === this.z
            };
            a.prototype.negate =
                function(c) {
                    c = c || new a;
                    c.x = -this.x;
                    c.y = -this.y;
                    c.z = -this.z;
                    return c
                };
            var c = new a,
                f = new a;
            a.prototype.tangents = function(a, b) {
                var d = this.norm();
                0 < d ? (d = 1 / d, c.set(this.x * d, this.y * d, this.z * d), .9 > Math.abs(c.x) ? f.set(1, 0, 0) : f.set(0, 1, 0), c.cross(f, a), c.cross(a, b)) : (a.set(1, 0, 0), b.set(0, 1, 0))
            };
            a.prototype.toString = function() {
                return this.x + "," + this.y + "," + this.z
            };
            a.prototype.toArray = function() {
                return [this.x, this.y, this.z]
            };
            a.prototype.copy = function(a) {
                this.x = a.x;
                this.y = a.y;
                this.z = a.z;
                return this
            };
            a.prototype.lerp =
                function(a, c, b) {
                    var d = this.x,
                        e = this.y,
                        f = this.z;
                    b.x = d + (a.x - d) * c;
                    b.y = e + (a.y - e) * c;
                    b.z = f + (a.z - f) * c
                };
            a.prototype.almostEquals = function(a, c) {
                void 0 === c && (c = 1E-6);
                return Math.abs(this.x - a.x) > c || Math.abs(this.y - a.y) > c || Math.abs(this.z - a.z) > c ? !1 : !0
            };
            a.prototype.almostZero = function(a) {
                void 0 === a && (a = 1E-6);
                return Math.abs(this.x) > a || Math.abs(this.y) > a || Math.abs(this.z) > a ? !1 : !0
            };
            var k = new a;
            a.prototype.isAntiparallelTo = function(a, c) {
                this.negate(k);
                return k.almostEquals(a, c)
            };
            a.prototype.clone = function() {
                return new a(this.x,
                    this.y, this.z)
            }
        }, {
            "./Mat3": 27
        }],
        31: [function(b, g, h) {
            function a(b) {
                b = b || {};
                e.apply(this);
                this.id = a.idCounter++;
                this.postStep = this.preStep = this.world = null;
                this.vlambda = new c;
                this.collisionFilterGroup = "number" === typeof b.collisionFilterGroup ? b.collisionFilterGroup : 1;
                this.collisionFilterMask = "number" === typeof b.collisionFilterMask ? b.collisionFilterMask : 1;
                this.collisionResponse = !0;
                this.position = new c;
                b.position && this.position.copy(b.position);
                this.previousPosition = new c;
                this.initPosition = new c;
                this.velocity =
                    new c;
                b.velocity && this.velocity.copy(b.velocity);
                this.initVelocity = new c;
                this.force = new c;
                var t = "number" === typeof b.mass ? b.mass : 0;
                this.mass = t;
                this.invMass = 0 < t ? 1 / t : 0;
                this.material = b.material || null;
                this.linearDamping = "number" === typeof b.linearDamping ? b.linearDamping : .01;
                this.type = 0 >= t ? a.STATIC : a.DYNAMIC;
                typeof b.type === typeof a.STATIC && (this.type = b.type);
                this.allowSleep = "undefined" !== typeof b.allowSleep ? b.allowSleep : !0;
                this.sleepState = 0;
                this.sleepSpeedLimit = "undefined" !== typeof b.sleepSpeedLimit ? b.sleepSpeedLimit :
                    .1;
                this.sleepTimeLimit = "undefined" !== typeof b.sleepTimeLimit ? b.sleepTimeLimit : 1;
                this.timeLastSleepy = 0;
                this._wakeUpAfterNarrowphase = !1;
                this.torque = new c;
                this.quaternion = new k;
                b.quaternion && this.quaternion.copy(b.quaternion);
                this.initQuaternion = new k;
                this.angularVelocity = new c;
                b.angularVelocity && this.angularVelocity.copy(b.angularVelocity);
                this.initAngularVelocity = new c;
                this.interpolatedPosition = new c;
                this.interpolatedQuaternion = new k;
                this.shapes = [];
                this.shapeOffsets = [];
                this.shapeOrientations = [];
                this.inertia =
                    new c;
                this.invInertia = new c;
                this.invInertiaWorld = new f;
                this.invMassSolve = 0;
                this.invInertiaSolve = new c;
                this.invInertiaWorldSolve = new f;
                this.fixedRotation = "undefined" !== typeof b.fixedRotation ? b.fixedRotation : !1;
                this.angularDamping = "undefined" !== typeof b.angularDamping ? b.angularDamping : .01;
                this.aabb = new d;
                this.aabbNeedsUpdate = !0;
                this.wlambda = new c;
                b.shape && this.addShape(b.shape);
                this.updateMassProperties()
            }
            g.exports = a;
            var e = b("../utils/EventTarget");
            b("../shapes/Shape");
            var c = b("../math/Vec3"),
                f = b("../math/Mat3"),
                k = b("../math/Quaternion");
            b("../material/Material");
            var d = b("../collision/AABB"),
                p = b("../shapes/Box");
            a.prototype = new e;
            a.prototype.constructor = a;
            a.DYNAMIC = 1;
            a.STATIC = 2;
            a.KINEMATIC = 4;
            a.AWAKE = 0;
            a.SLEEPY = 1;
            a.SLEEPING = 2;
            a.idCounter = 0;
            a.prototype.wakeUp = function() {
                var c = this.sleepState;
                this.sleepState = 0;
                c === a.SLEEPING && this.dispatchEvent({
                    type: "wakeup"
                })
            };
            a.prototype.sleep = function() {
                this.sleepState = a.SLEEPING;
                this.velocity.set(0, 0, 0);
                this.angularVelocity.set(0, 0, 0)
            };
            a.sleepyEvent = {
                type: "sleepy"
            };
            a.sleepEvent = {
                type: "sleep"
            };
            a.prototype.sleepTick = function(c) {
                if (this.allowSleep) {
                    var b = this.sleepState,
                        d = this.velocity.norm2() + this.angularVelocity.norm2(),
                        e = Math.pow(this.sleepSpeedLimit, 2);
                    b === a.AWAKE && d < e ? (this.sleepState = a.SLEEPY, this.timeLastSleepy = c, this.dispatchEvent(a.sleepyEvent)) : b === a.SLEEPY && d > e ? this.wakeUp() : b === a.SLEEPY && c - this.timeLastSleepy > this.sleepTimeLimit && (this.sleep(), this.dispatchEvent(a.sleepEvent))
                }
            };
            a.prototype.updateSolveMassProperties = function() {
                this.sleepState === a.SLEEPING || this.type ===
                    a.KINEMATIC ? (this.invMassSolve = 0, this.invInertiaSolve.setZero(), this.invInertiaWorldSolve.setZero()) : (this.invMassSolve = this.invMass, this.invInertiaSolve.copy(this.invInertia), this.invInertiaWorldSolve.copy(this.invInertiaWorld))
            };
            a.prototype.pointToLocalFrame = function(a, b) {
                b = b || new c;
                a.vsub(this.position, b);
                this.quaternion.conjugate().vmult(b, b);
                return b
            };
            a.prototype.vectorToLocalFrame = function(a, b) {
                b = b || new c;
                this.quaternion.conjugate().vmult(a, b);
                return b
            };
            a.prototype.pointToWorldFrame = function(a,
                b) {
                b = b || new c;
                this.quaternion.vmult(a, b);
                b.vadd(this.position, b);
                return b
            };
            a.prototype.vectorToWorldFrame = function(a, b) {
                b = b || new c;
                this.quaternion.vmult(a, b);
                return b
            };
            var m = new c,
                l = new k;
            a.prototype.addShape = function(a, b, d) {
                var e = new c,
                    f = new k;
                b && e.copy(b);
                d && f.copy(d);
                this.shapes.push(a);
                this.shapeOffsets.push(e);
                this.shapeOrientations.push(f);
                this.updateMassProperties();
                this.updateBoundingRadius();
                this.aabbNeedsUpdate = !0;
                return this
            };
            a.prototype.updateBoundingRadius = function() {
                for (var a = this.shapes,
                        c = this.shapeOffsets, b = a.length, d = 0, e = 0; e !== b; e++) {
                    var f = a[e];
                    f.updateBoundingSphereRadius();
                    var t = c[e].norm();
                    f = f.boundingSphereRadius;
                    t + f > d && (d = t + f)
                }
                this.boundingRadius = d
            };
            var q = new d;
            a.prototype.computeAABB = function() {
                for (var a = this.shapes, c = this.shapeOffsets, b = this.shapeOrientations, d = a.length, e = this.quaternion, f = this.aabb, t = 0; t !== d; t++) {
                    var g = a[t];
                    b[t].mult(e, l);
                    l.vmult(c[t], m);
                    m.vadd(this.position, m);
                    g.calculateWorldAABB(m, l, q.lowerBound, q.upperBound);
                    0 === t ? f.copy(q) : f.extend(q)
                }
                this.aabbNeedsUpdate = !1
            };
            var r = new f,
                y = new f;
            new f;
            a.prototype.updateInertiaWorld = function(a) {
                var c = this.invInertia;
                if (c.x !== c.y || c.y !== c.z || a) r.setRotationFromQuaternion(this.quaternion), r.transpose(y), r.scale(c, r), r.mmult(y, this.invInertiaWorld)
            };
            var A = new c,
                v = new c;
            a.prototype.applyForce = function(c, b) {
                this.type === a.DYNAMIC && (b.vsub(this.position, A), A.cross(c, v), this.force.vadd(c, this.force), this.torque.vadd(v, this.torque))
            };
            var z = new c,
                u = new c;
            a.prototype.applyLocalForce = function(c, b) {
                this.type === a.DYNAMIC && (this.vectorToWorldFrame(c,
                    z), this.pointToWorldFrame(b, u), this.applyForce(z, u))
            };
            var D = new c,
                E = new c,
                F = new c;
            a.prototype.applyImpulse = function(c, b) {
                this.type === a.DYNAMIC && (b.vsub(this.position, D), E.copy(c), E.mult(this.invMass, E), this.velocity.vadd(E, this.velocity), D.cross(c, F), this.invInertiaWorld.vmult(F, F), this.angularVelocity.vadd(F, this.angularVelocity))
            };
            var t = new c,
                w = new c;
            a.prototype.applyLocalImpulse = function(c, b) {
                this.type === a.DYNAMIC && (this.vectorToWorldFrame(c, t), this.pointToWorldFrame(b, w), this.applyImpulse(t, w))
            };
            var B = new c;
            a.prototype.updateMassProperties = function() {
                this.invMass = 0 < this.mass ? 1 / this.mass : 0;
                var a = this.inertia,
                    c = this.fixedRotation;
                this.computeAABB();
                B.set((this.aabb.upperBound.x - this.aabb.lowerBound.x) / 2, (this.aabb.upperBound.y - this.aabb.lowerBound.y) / 2, (this.aabb.upperBound.z - this.aabb.lowerBound.z) / 2);
                p.calculateInertia(B, this.mass, a);
                this.invInertia.set(0 < a.x && !c ? 1 / a.x : 0, 0 < a.y && !c ? 1 / a.y : 0, 0 < a.z && !c ? 1 / a.z : 0);
                this.updateInertiaWorld(!0)
            };
            a.prototype.getVelocityAtWorldPoint = function(a, b) {
                var d =
                    new c;
                a.vsub(this.position, d);
                this.angularVelocity.cross(d, b);
                this.velocity.vadd(b, b);
                return b
            }
        }, {
            "../collision/AABB": 3,
            "../material/Material": 25,
            "../math/Mat3": 27,
            "../math/Quaternion": 28,
            "../math/Vec3": 30,
            "../shapes/Box": 37,
            "../shapes/Shape": 43,
            "../utils/EventTarget": 49
        }],
        32: [function(b, g, h) {
            function a(a) {
                this.chassisBody = a.chassisBody;
                this.wheelInfos = [];
                this.sliding = !1;
                this.world = null;
                this.indexRightAxis = "undefined" !== typeof a.indexRightAxis ? a.indexRightAxis : 1;
                this.indexForwardAxis = "undefined" !==
                    typeof a.indexForwardAxis ? a.indexForwardAxis : 0;
                this.indexUpAxis = "undefined" !== typeof a.indexUpAxis ? a.indexUpAxis : 2
            }

            function e(a, c, b) {
                var d = E,
                    e = F,
                    f = t,
                    g = w;
                c.vsub(a.position, d);
                d.cross(b, e);
                a.invInertiaWorld.vmult(e, g);
                g.cross(d, f);
                return a.invMass + b.dot(f)
            }
            b("./Body");
            var c = b("../math/Vec3"),
                f = b("../math/Quaternion");
            b("../collision/RaycastResult");
            h = b("../collision/Ray");
            var k = b("../objects/WheelInfo");
            g.exports = a;
            new c;
            new c;
            new c;
            var d = new c,
                p = new c,
                m = new c;
            new h;
            a.prototype.addWheel = function(a) {
                a =
                    a || {};
                a = new k(a);
                var c = this.wheelInfos.length;
                this.wheelInfos.push(a);
                return c
            };
            a.prototype.setSteeringValue = function(a, c) {
                this.wheelInfos[c].steering = a
            };
            new c;
            a.prototype.applyEngineForce = function(a, c) {
                this.wheelInfos[c].engineForce = a
            };
            a.prototype.setBrake = function(a, c) {
                this.wheelInfos[c].brake = a
            };
            a.prototype.addToWorld = function(a) {
                a.add(this.chassisBody);
                var c = this;
                this.preStepCallback = function() {
                    c.updateVehicle(a.dt)
                };
                a.addEventListener("preStep", this.preStepCallback);
                this.world = a
            };
            a.prototype.getVehicleAxisWorld =
                function(a, c) {
                    c.set(0 === a ? 1 : 0, 1 === a ? 1 : 0, 2 === a ? 1 : 0);
                    this.chassisBody.vectorToWorldFrame(c, c)
                };
            a.prototype.updateVehicle = function(a) {
                for (var b = this.wheelInfos, d = b.length, e = this.chassisBody, f = 0; f < d; f++) this.updateWheelTransform(f);
                this.currentVehicleSpeedKmHour = 3.6 * e.velocity.norm();
                f = new c;
                this.getVehicleAxisWorld(this.indexForwardAxis, f);
                0 > f.dot(e.velocity) && (this.currentVehicleSpeedKmHour *= -1);
                for (f = 0; f < d; f++) this.castRay(b[f]);
                this.updateSuspension(a);
                var t = new c,
                    g = new c;
                for (f = 0; f < d; f++) {
                    var l = b[f],
                        k = l.suspensionForce;
                    k > l.maxSuspensionForce && (k = l.maxSuspensionForce);
                    l.raycastResult.hitNormalWorld.scale(k * a, t);
                    l.raycastResult.hitPointWorld.vsub(e.position, g);
                    e.applyImpulse(t, l.raycastResult.hitPointWorld)
                }
                this.updateFriction(a);
                t = new c;
                g = new c;
                k = new c;
                for (f = 0; f < d; f++) {
                    l = b[f];
                    e.getVelocityAtWorldPoint(l.chassisConnectionPointWorld, k);
                    var w = 1;
                    switch (this.indexUpAxis) {
                        case 1:
                            w = -1
                    }
                    if (l.isInContact) {
                        this.getVehicleAxisWorld(this.indexForwardAxis, g);
                        var m = g.dot(l.raycastResult.hitNormalWorld);
                        l.raycastResult.hitNormalWorld.scale(m,
                            t);
                        g.vsub(t, g);
                        m = g.dot(k);
                        l.deltaRotation = w * m * a / l.radius
                    }!l.sliding && l.isInContact || 0 === l.engineForce || !l.useCustomSlidingRotationalSpeed || (l.deltaRotation = (0 < l.engineForce ? 1 : -1) * l.customSlidingRotationalSpeed * a);
                    Math.abs(l.brake) > Math.abs(l.engineForce) && (l.deltaRotation = 0);
                    l.rotation += l.deltaRotation;
                    l.deltaRotation *= .99
                }
            };
            a.prototype.updateSuspension = function(a) {
                a = this.chassisBody.mass;
                for (var c = this.wheelInfos, b = c.length, d = 0; d < b; d++) {
                    var e = c[d];
                    if (e.isInContact) {
                        var f = e.suspensionStiffness * (e.suspensionRestLength -
                            e.suspensionLength) * e.clippedInvContactDotSuspension;
                        var t = e.suspensionRelativeVelocity;
                        f -= (0 > t ? e.dampingCompression : e.dampingRelaxation) * t;
                        e.suspensionForce = f * a;
                        0 > e.suspensionForce && (e.suspensionForce = 0)
                    } else e.suspensionForce = 0
                }
            };
            a.prototype.removeFromWorld = function(a) {
                a.remove(this.chassisBody);
                a.removeEventListener("preStep", this.preStepCallback);
                this.world = null
            };
            var l = new c,
                q = new c;
            a.prototype.castRay = function(a) {
                this.updateWheelTransformWorld(a);
                var b = this.chassisBody,
                    d = -1;
                a.directionWorld.scale(a.suspensionRestLength +
                    a.radius, l);
                var e = a.chassisConnectionPointWorld;
                e.vadd(l, q);
                var f = a.raycastResult;
                f.reset();
                var t = b.collisionResponse;
                b.collisionResponse = !1;
                this.world.rayTest(e, q, f);
                b.collisionResponse = t;
                e = f.body;
                a.raycastResult.groundObject = 0;
                e ? (d = f.distance, a.raycastResult.hitNormalWorld = f.hitNormalWorld, a.isInContact = !0, a.suspensionLength = f.distance - a.radius, f = a.suspensionRestLength - a.maxSuspensionTravel, e = a.suspensionRestLength + a.maxSuspensionTravel, a.suspensionLength < f && (a.suspensionLength = f), a.suspensionLength >
                    e && (a.suspensionLength = e, a.raycastResult.reset()), f = a.raycastResult.hitNormalWorld.dot(a.directionWorld), e = new c, b.getVelocityAtWorldPoint(a.raycastResult.hitPointWorld, e), b = a.raycastResult.hitNormalWorld.dot(e), -.1 <= f ? (a.suspensionRelativeVelocity = 0, a.clippedInvContactDotSuspension = 10) : (f = -1 / f, a.suspensionRelativeVelocity = b * f, a.clippedInvContactDotSuspension = f)) : (a.suspensionLength = a.suspensionRestLength + 0 * a.maxSuspensionTravel, a.suspensionRelativeVelocity = 0, a.directionWorld.scale(-1, a.raycastResult.hitNormalWorld),
                    a.clippedInvContactDotSuspension = 1);
                return d
            };
            a.prototype.updateWheelTransformWorld = function(a) {
                a.isInContact = !1;
                var c = this.chassisBody;
                c.pointToWorldFrame(a.chassisConnectionPointLocal, a.chassisConnectionPointWorld);
                c.vectorToWorldFrame(a.directionLocal, a.directionWorld);
                c.vectorToWorldFrame(a.axleLocal, a.axleWorld)
            };
            a.prototype.updateWheelTransform = function(a) {
                a = this.wheelInfos[a];
                this.updateWheelTransformWorld(a);
                a.directionLocal.scale(-1, d);
                p.copy(a.axleLocal);
                d.cross(p, m);
                m.normalize();
                p.normalize();
                var c = a.steering,
                    b = new f;
                b.setFromAxisAngle(d, c);
                c = new f;
                c.setFromAxisAngle(p, a.rotation);
                var e = a.worldTransform.quaternion;
                this.chassisBody.quaternion.mult(b, e);
                e.mult(c, e);
                e.normalize();
                b = a.worldTransform.position;
                b.copy(a.directionWorld);
                b.scale(a.suspensionLength, b);
                b.vadd(a.chassisConnectionPointWorld, b)
            };
            var r = [new c(1, 0, 0), new c(0, 1, 0), new c(0, 0, 1)];
            a.prototype.getWheelTransformWorld = function(a) {
                return this.wheelInfos[a].worldTransform
            };
            var y = new c,
                A = [],
                v = [];
            a.prototype.updateFriction = function(a) {
                for (var b =
                        this.wheelInfos, d = b.length, f = this.chassisBody, t = 0, g = 0; g < d; g++) {
                    var l = b[g],
                        k = l.raycastResult.body;
                    k && t++;
                    l.sideImpulse = 0;
                    l.forwardImpulse = 0;
                    v[g] || (v[g] = new c);
                    A[g] || (A[g] = new c)
                }
                for (g = 0; g < d; g++)
                    if (l = b[g], k = l.raycastResult.body) {
                        var w = A[g];
                        this.getWheelTransformWorld(g).vectorToWorldFrame(r[this.indexRightAxis], w);
                        t = l.raycastResult.hitNormalWorld;
                        var m = w.dot(t);
                        t.scale(m, y);
                        w.vsub(y, w);
                        w.normalize();
                        t.cross(w, v[g]);
                        v[g].normalize();
                        t = l;
                        m = f;
                        var p = l.raycastResult.hitPointWorld,
                            h = l.raycastResult.hitPointWorld;
                        if (1.1 < w.norm2()) k = 0;
                        else {
                            var q = B,
                                J = I,
                                E = C;
                            m.getVelocityAtWorldPoint(p, q);
                            k.getVelocityAtWorldPoint(h, J);
                            q.vsub(J, E);
                            k = -.2 * w.dot(E) * (1 / (m.invMass + k.invMass))
                        }
                        t.sideImpulse = k;
                        l.sideImpulse *= 1
                    }
                this.sliding = !1;
                for (g = 0; g < d; g++) {
                    l = b[g];
                    k = l.raycastResult.body;
                    m = 0;
                    l.slipInfo = 1;
                    if (k) {
                        t = l.brake ? l.brake : 0;
                        q = f;
                        p = k;
                        h = l.raycastResult.hitPointWorld;
                        w = v[g];
                        m = t;
                        J = h;
                        E = z;
                        var H = u,
                            W = D;
                        q.getVelocityAtWorldPoint(J, E);
                        p.getVelocityAtWorldPoint(J, H);
                        E.vsub(H, W);
                        J = w.dot(W);
                        q = e(q, h, w);
                        p = e(p, h, w);
                        p = 1 / (q + p) * -J;
                        m < p && (p = m);
                        p < -m &&
                            (p = -m);
                        m = p;
                        m += l.engineForce * a;
                        t /= m;
                        l.slipInfo *= t
                    }
                    l.forwardImpulse = 0;
                    l.skidInfo = 1;
                    k && (l.skidInfo = 1, k = l.suspensionForce * a * l.frictionSlip, t = k * k, l.forwardImpulse = m, m = .5 * l.forwardImpulse, p = 1 * l.sideImpulse, m = m * m + p * p, l.sliding = !1, m > t && (this.sliding = !0, l.sliding = !0, t = k / Math.sqrt(m), l.skidInfo *= t))
                }
                if (this.sliding)
                    for (g = 0; g < d; g++) l = b[g], 0 !== l.sideImpulse && 1 > l.skidInfo && (l.forwardImpulse *= l.skidInfo, l.sideImpulse *= l.skidInfo);
                for (g = 0; g < d; g++) l = b[g], a = new c, a.copy(l.raycastResult.hitPointWorld), 0 !== l.forwardImpulse &&
                    (k = new c, v[g].scale(l.forwardImpulse, k), f.applyImpulse(k, a)), 0 !== l.sideImpulse && (k = l.raycastResult.body, t = new c, t.copy(l.raycastResult.hitPointWorld), m = new c, A[g].scale(l.sideImpulse, m), f.pointToLocalFrame(a, a), a["xyz" [this.indexUpAxis]] *= l.rollInfluence, f.pointToWorldFrame(a, a), f.applyImpulse(m, a), m.scale(-1, m), k.applyImpulse(m, t))
            };
            var z = new c,
                u = new c,
                D = new c,
                E = new c,
                F = new c,
                t = new c,
                w = new c,
                B = new c,
                I = new c,
                C = new c
        }, {
            "../collision/Ray": 9,
            "../collision/RaycastResult": 10,
            "../math/Quaternion": 28,
            "../math/Vec3": 30,
            "../objects/WheelInfo": 36,
            "./Body": 31
        }],
        33: [function(b, g, h) {
            function a(a) {
                this.wheelBodies = [];
                this.coordinateSystem = "undefined" === typeof a.coordinateSystem ? new k(1, 2, 3) : a.coordinateSystem.clone();
                this.chassisBody = a.chassisBody;
                this.chassisBody || (a = new f(new k(5, 2, .5)), this.chassisBody = new e(1, a));
                this.constraints = [];
                this.wheelAxes = [];
                this.wheelForces = []
            }
            var e = b("./Body"),
                c = b("../shapes/Sphere"),
                f = b("../shapes/Box"),
                k = b("../math/Vec3"),
                d = b("../constraints/HingeConstraint");
            g.exports = a;
            a.prototype.addWheel =
                function(a) {
                    a = a || {};
                    var b = a.body;
                    b || (b = new e(1, new c(1.2)));
                    this.wheelBodies.push(b);
                    this.wheelForces.push(0);
                    new k;
                    var f = "undefined" !== typeof a.position ? a.position.clone() : new k,
                        g = new k;
                    this.chassisBody.pointToWorldFrame(f, g);
                    b.position.set(g.x, g.y, g.z);
                    a = "undefined" !== typeof a.axis ? a.axis.clone() : new k(0, 1, 0);
                    this.wheelAxes.push(a);
                    b = new d(this.chassisBody, b, {
                        pivotA: f,
                        axisA: a,
                        pivotB: k.ZERO,
                        axisB: a,
                        collideConnected: !1
                    });
                    this.constraints.push(b);
                    return this.wheelBodies.length - 1
                };
            a.prototype.setSteeringValue =
                function(a, c) {
                    var b = this.wheelAxes[c],
                        d = Math.cos(a),
                        e = Math.sin(a),
                        f = b.x;
                    b = b.y;
                    this.constraints[c].axisA.set(d * f - e * b, e * f + d * b, 0)
                };
            a.prototype.setMotorSpeed = function(a, c) {
                var b = this.constraints[c];
                b.enableMotor();
                b.motorTargetVelocity = a
            };
            a.prototype.disableMotor = function(a) {
                this.constraints[a].disableMotor()
            };
            var p = new k;
            a.prototype.setWheelForce = function(a, c) {
                this.wheelForces[c] = a
            };
            a.prototype.applyWheelForce = function(a, c) {
                var b = this.wheelBodies[c],
                    d = b.torque;
                this.wheelAxes[c].scale(a, p);
                b.vectorToWorldFrame(p,
                    p);
                d.vadd(p, d)
            };
            a.prototype.addToWorld = function(a) {
                for (var c = this.constraints, b = this.wheelBodies.concat([this.chassisBody]), d = 0; d < b.length; d++) a.add(b[d]);
                for (d = 0; d < c.length; d++) a.addConstraint(c[d]);
                a.addEventListener("preStep", this._update.bind(this))
            };
            a.prototype._update = function() {
                for (var a = this.wheelForces, c = 0; c < a.length; c++) this.applyWheelForce(a[c], c)
            };
            a.prototype.removeFromWorld = function(a) {
                for (var c = this.constraints, b = this.wheelBodies.concat([this.chassisBody]), d = 0; d < b.length; d++) a.remove(b[d]);
                for (d = 0; d < c.length; d++) a.removeConstraint(c[d])
            };
            var m = new k;
            a.prototype.getWheelSpeed = function(a) {
                var c = this.wheelBodies[a].angularVelocity;
                this.chassisBody.vectorToWorldFrame(this.wheelAxes[a], m);
                return c.dot(m)
            }
        }, {
            "../constraints/HingeConstraint": 15,
            "../math/Vec3": 30,
            "../shapes/Box": 37,
            "../shapes/Sphere": 44,
            "./Body": 31
        }],
        34: [function(b, g, h) {
            function a() {
                this.particles = [];
                this.speedOfSound = this.smoothingRadius = this.density = 1;
                this.viscosity = .01;
                this.eps = 1E-6;
                this.pressures = [];
                this.densities = [];
                this.neighbors = []
            }
            g.exports = a;
            b("../shapes/Shape");
            g = b("../math/Vec3");
            b("../math/Quaternion");
            b("../shapes/Particle");
            b("../objects/Body");
            b("../material/Material");
            a.prototype.add = function(a) {
                this.particles.push(a);
                this.neighbors.length < this.particles.length && this.neighbors.push([])
            };
            a.prototype.remove = function(a) {
                a = this.particles.indexOf(a); - 1 !== a && (this.particles.splice(a, 1), this.neighbors.length > this.particles.length && this.neighbors.pop())
            };
            var e = new g;
            a.prototype.getNeighbors = function(a, c) {
                for (var b = this.particles.length,
                        d = a.id, f = this.smoothingRadius * this.smoothingRadius, g = 0; g !== b; g++) {
                    var l = this.particles[g];
                    l.position.vsub(a.position, e);
                    d !== l.id && e.norm2() < f && c.push(l)
                }
            };
            var c = new g,
                f = new g,
                k = new g,
                d = new g,
                p = new g,
                m = new g;
            a.prototype.update = function() {
                for (var a = this.particles.length, b = this.speedOfSound, e = this.eps, g = 0; g !== a; g++) {
                    var h = this.particles[g],
                        v = this.neighbors[g];
                    v.length = 0;
                    this.getNeighbors(h, v);
                    v.push(this.particles[g]);
                    for (var z = v.length, u = 0, D = 0; D !== z; D++) {
                        h.position.vsub(v[D].position, c);
                        var E = c.norm();
                        E = this.w(E);
                        u += v[D].mass * E
                    }
                    this.densities[g] = u;
                    this.pressures[g] = b * b * (this.densities[g] - this.density)
                }
                for (g = 0; g !== a; g++) {
                    b = this.particles[g];
                    f.set(0, 0, 0);
                    k.set(0, 0, 0);
                    v = this.neighbors[g];
                    z = v.length;
                    for (D = 0; D !== z; D++) u = v[D], b.position.vsub(u.position, p), E = p.norm(), h = -u.mass * (this.pressures[g] / (this.densities[g] * this.densities[g] + e) + this.pressures[D] / (this.densities[D] * this.densities[D] + e)), this.gradw(p, d), d.mult(h, d), f.vadd(d, f), u.velocity.vsub(b.velocity, m), m.mult(1 / (1E-4 + this.densities[g] * this.densities[D]) *
                        this.viscosity * u.mass, m), h = this.nablaw(E), m.mult(h, m), k.vadd(m, k);
                    k.mult(b.mass, k);
                    f.mult(b.mass, f);
                    b.force.vadd(k, b.force);
                    b.force.vadd(f, b.force)
                }
            };
            a.prototype.w = function(a) {
                var c = this.smoothingRadius;
                return 315 / (64 * Math.PI * Math.pow(c, 9)) * Math.pow(c * c - a * a, 3)
            };
            a.prototype.gradw = function(a, c) {
                var b = a.norm(),
                    d = this.smoothingRadius;
                a.mult(945 / (32 * Math.PI * Math.pow(d, 9)) * Math.pow(d * d - b * b, 2), c)
            };
            a.prototype.nablaw = function(a) {
                var c = this.smoothingRadius;
                return 945 / (32 * Math.PI * Math.pow(c, 9)) * (c * c - a * a) * (7 *
                    a * a - 3 * c * c)
            }
        }, {
            "../material/Material": 25,
            "../math/Quaternion": 28,
            "../math/Vec3": 30,
            "../objects/Body": 31,
            "../shapes/Particle": 41,
            "../shapes/Shape": 43
        }],
        35: [function(b, g, h) {
            function a(a, c, b) {
                b = b || {};
                this.restLength = "number" === typeof b.restLength ? b.restLength : 1;
                this.stiffness = b.stiffness || 100;
                this.damping = b.damping || 1;
                this.bodyA = a;
                this.bodyB = c;
                this.localAnchorA = new e;
                this.localAnchorB = new e;
                b.localAnchorA && this.localAnchorA.copy(b.localAnchorA);
                b.localAnchorB && this.localAnchorB.copy(b.localAnchorB);
                b.worldAnchorA &&
                    this.setWorldAnchorA(b.worldAnchorA);
                b.worldAnchorB && this.setWorldAnchorB(b.worldAnchorB)
            }
            var e = b("../math/Vec3");
            g.exports = a;
            a.prototype.setWorldAnchorA = function(a) {
                this.bodyA.pointToLocalFrame(a, this.localAnchorA)
            };
            a.prototype.setWorldAnchorB = function(a) {
                this.bodyB.pointToLocalFrame(a, this.localAnchorB)
            };
            a.prototype.getWorldAnchorA = function(a) {
                this.bodyA.pointToWorldFrame(this.localAnchorA, a)
            };
            a.prototype.getWorldAnchorB = function(a) {
                this.bodyB.pointToWorldFrame(this.localAnchorB, a)
            };
            var c = new e,
                f = new e,
                k = new e,
                d = new e,
                p = new e,
                m = new e,
                l = new e,
                q = new e,
                r = new e,
                y = new e,
                A = new e;
            a.prototype.applyForce = function() {
                var a = this.stiffness,
                    b = this.damping,
                    e = this.restLength,
                    g = this.bodyA,
                    h = this.bodyB;
                this.getWorldAnchorA(p);
                this.getWorldAnchorB(m);
                p.vsub(g.position, l);
                m.vsub(h.position, q);
                m.vsub(p, c);
                var F = c.norm();
                f.copy(c);
                f.normalize();
                h.velocity.vsub(g.velocity, k);
                h.angularVelocity.cross(q, A);
                k.vadd(A, k);
                g.angularVelocity.cross(l, A);
                k.vsub(A, k);
                f.mult(-a * (F - e) - b * k.dot(f), d);
                g.force.vsub(d, g.force);
                h.force.vadd(d, h.force);
                l.cross(d, r);
                q.cross(d, y);
                g.torque.vsub(r, g.torque);
                h.torque.vadd(y, h.torque)
            }
        }, {
            "../math/Vec3": 30
        }],
        36: [function(b, g, h) {
            function a(a) {
                a = k.defaults(a, {
                    chassisConnectionPointLocal: new e,
                    chassisConnectionPointWorld: new e,
                    directionLocal: new e,
                    directionWorld: new e,
                    axleLocal: new e,
                    axleWorld: new e,
                    suspensionRestLength: 1,
                    suspensionMaxLength: 2,
                    radius: 1,
                    suspensionStiffness: 100,
                    dampingCompression: 10,
                    dampingRelaxation: 10,
                    frictionSlip: 1E4,
                    steering: 0,
                    rotation: 0,
                    deltaRotation: 0,
                    rollInfluence: .01,
                    maxSuspensionForce: Number.MAX_VALUE,
                    isFrontWheel: !0,
                    clippedInvContactDotSuspension: 1,
                    suspensionRelativeVelocity: 0,
                    suspensionForce: 0,
                    skidInfo: 0,
                    suspensionLength: 0,
                    maxSuspensionTravel: 1,
                    useCustomSlidingRotationalSpeed: !1,
                    customSlidingRotationalSpeed: -.1
                });
                this.maxSuspensionTravel = a.maxSuspensionTravel;
                this.customSlidingRotationalSpeed = a.customSlidingRotationalSpeed;
                this.useCustomSlidingRotationalSpeed = a.useCustomSlidingRotationalSpeed;
                this.sliding = !1;
                this.chassisConnectionPointLocal = a.chassisConnectionPointLocal.clone();
                this.chassisConnectionPointWorld = a.chassisConnectionPointWorld.clone();
                this.directionLocal = a.directionLocal.clone();
                this.directionWorld = a.directionWorld.clone();
                this.axleLocal = a.axleLocal.clone();
                this.axleWorld = a.axleWorld.clone();
                this.suspensionRestLength = a.suspensionRestLength;
                this.suspensionMaxLength = a.suspensionMaxLength;
                this.radius = a.radius;
                this.suspensionStiffness = a.suspensionStiffness;
                this.dampingCompression = a.dampingCompression;
                this.dampingRelaxation = a.dampingRelaxation;
                this.frictionSlip =
                    a.frictionSlip;
                this.deltaRotation = this.rotation = this.steering = 0;
                this.rollInfluence = a.rollInfluence;
                this.maxSuspensionForce = a.maxSuspensionForce;
                this.brake = this.engineForce = 0;
                this.isFrontWheel = a.isFrontWheel;
                this.clippedInvContactDotSuspension = 1;
                this.forwardImpulse = this.sideImpulse = this.suspensionLength = this.skidInfo = this.suspensionForce = this.suspensionRelativeVelocity = 0;
                this.raycastResult = new f;
                this.worldTransform = new c;
                this.isInContact = !1
            }
            var e = b("../math/Vec3"),
                c = b("../math/Transform"),
                f = b("../collision/RaycastResult"),
                k = b("../utils/Utils");
            g.exports = a;
            var d = new e,
                p = new e;
            d = new e;
            a.prototype.updateWheel = function(a) {
                var c = this.raycastResult;
                if (this.isInContact) {
                    var b = c.hitNormalWorld.dot(c.directionWorld);
                    c.hitPointWorld.vsub(a.position, p);
                    a.getVelocityAtWorldPoint(p, d);
                    a = c.hitNormalWorld.dot(d); - .1 <= b ? (this.suspensionRelativeVelocity = 0, this.clippedInvContactDotSuspension = 10) : (b = -1 / b, this.suspensionRelativeVelocity = a * b, this.clippedInvContactDotSuspension = b)
                } else c.suspensionLength = this.suspensionRestLength, this.suspensionRelativeVelocity =
                    0, c.directionWorld.scale(-1, c.hitNormalWorld), this.clippedInvContactDotSuspension = 1
            }
        }, {
            "../collision/RaycastResult": 10,
            "../math/Transform": 29,
            "../math/Vec3": 30,
            "../utils/Utils": 53
        }],
        37: [function(b, g, h) {
            function a(a) {
                e.call(this);
                this.type = e.types.BOX;
                this.halfExtents = a;
                this.convexPolyhedronRepresentation = null;
                this.updateConvexPolyhedronRepresentation();
                this.updateBoundingSphereRadius()
            }
            g.exports = a;
            var e = b("./Shape"),
                c = b("../math/Vec3"),
                f = b("./ConvexPolyhedron");
            a.prototype = new e;
            a.prototype.constructor =
                a;
            a.prototype.updateConvexPolyhedronRepresentation = function() {
                var a = this.halfExtents.x,
                    b = this.halfExtents.y,
                    d = this.halfExtents.z;
                a = [new c(-a, -b, -d), new c(a, -b, -d), new c(a, b, -d), new c(-a, b, -d), new c(-a, -b, d), new c(a, -b, d), new c(a, b, d), new c(-a, b, d)];
                new c(0, 0, 1);
                new c(0, 1, 0);
                new c(1, 0, 0);
                this.convexPolyhedronRepresentation = a = new f(a, [
                    [3, 2, 1, 0],
                    [4, 5, 6, 7],
                    [5, 4, 0, 1],
                    [2, 3, 7, 6],
                    [0, 4, 7, 3],
                    [1, 2, 6, 5]
                ]);
                a.material = this.material
            };
            a.prototype.calculateLocalInertia = function(b, d) {
                d = d || new c;
                a.calculateInertia(this.halfExtents,
                    b, d);
                return d
            };
            a.calculateInertia = function(a, c, b) {
                b.x = 1 / 12 * c * (4 * a.y * a.y + 4 * a.z * a.z);
                b.y = 1 / 12 * c * (4 * a.x * a.x + 4 * a.z * a.z);
                b.z = 1 / 12 * c * (4 * a.y * a.y + 4 * a.x * a.x)
            };
            a.prototype.getSideNormals = function(a, c) {
                var b = this.halfExtents;
                a[0].set(b.x, 0, 0);
                a[1].set(0, b.y, 0);
                a[2].set(0, 0, b.z);
                a[3].set(-b.x, 0, 0);
                a[4].set(0, -b.y, 0);
                a[5].set(0, 0, -b.z);
                if (void 0 !== c)
                    for (b = 0; b !== a.length; b++) c.vmult(a[b], a[b]);
                return a
            };
            a.prototype.volume = function() {
                return 8 * this.halfExtents.x * this.halfExtents.y * this.halfExtents.z
            };
            a.prototype.updateBoundingSphereRadius =
                function() {
                    this.boundingSphereRadius = this.halfExtents.norm()
                };
            var k = new c;
            new c;
            a.prototype.forEachWorldCorner = function(a, c, b) {
                var d = this.halfExtents;
                d = [
                    [d.x, d.y, d.z],
                    [-d.x, d.y, d.z],
                    [-d.x, -d.y, d.z],
                    [-d.x, -d.y, -d.z],
                    [d.x, -d.y, -d.z],
                    [d.x, d.y, -d.z],
                    [-d.x, d.y, -d.z],
                    [d.x, -d.y, d.z]
                ];
                for (var e = 0; e < d.length; e++) k.set(d[e][0], d[e][1], d[e][2]), c.vmult(k, k), a.vadd(k, k), b(k.x, k.y, k.z)
            };
            var d = [new c, new c, new c, new c, new c, new c, new c, new c];
            a.prototype.calculateWorldAABB = function(a, c, b, e) {
                var f = this.halfExtents;
                d[0].set(f.x, f.y, f.z);
                d[1].set(-f.x, f.y, f.z);
                d[2].set(-f.x, -f.y, f.z);
                d[3].set(-f.x, -f.y, -f.z);
                d[4].set(f.x, -f.y, -f.z);
                d[5].set(f.x, f.y, -f.z);
                d[6].set(-f.x, f.y, -f.z);
                d[7].set(f.x, -f.y, f.z);
                var g = d[0];
                c.vmult(g, g);
                a.vadd(g, g);
                e.copy(g);
                b.copy(g);
                for (f = 1; 8 > f; f++) {
                    g = d[f];
                    c.vmult(g, g);
                    a.vadd(g, g);
                    var k = g.x,
                        l = g.y;
                    g = g.z;
                    k > e.x && (e.x = k);
                    l > e.y && (e.y = l);
                    g > e.z && (e.z = g);
                    k < b.x && (b.x = k);
                    l < b.y && (b.y = l);
                    g < b.z && (b.z = g)
                }
            }
        }, {
            "../math/Vec3": 30,
            "./ConvexPolyhedron": 38,
            "./Shape": 43
        }],
        38: [function(b, g, h) {
            function a(a, c,
                b) {
                e.call(this);
                this.type = e.types.CONVEXPOLYHEDRON;
                this.vertices = a || [];
                this.worldVertices = [];
                this.worldVerticesNeedsUpdate = !0;
                this.faces = c || [];
                this.faceNormals = [];
                this.computeNormals();
                this.worldFaceNormalsNeedsUpdate = !0;
                this.worldFaceNormals = [];
                this.uniqueEdges = [];
                this.uniqueAxes = b ? b.slice() : null;
                this.computeEdges();
                this.updateBoundingSphereRadius()
            }
            g.exports = a;
            var e = b("./Shape"),
                c = b("../math/Vec3");
            b("../math/Quaternion");
            var f = b("../math/Transform");
            a.prototype = new e;
            a.prototype.constructor = a;
            var k = new c;
            a.prototype.computeEdges = function() {
                for (var a = this.faces, c = this.vertices, b = this.uniqueEdges, d = b.length = 0; d !== a.length; d++)
                    for (var e = a[d], f = e.length, g = 0; g !== f; g++) {
                        c[e[g]].vsub(c[e[(g + 1) % f]], k);
                        k.normalize();
                        for (var t = !1, w = 0; w !== b.length; w++)
                            if (b[w].almostEquals(k) || b[w].almostEquals(k)) {
                                t = !0;
                                break
                            }
                        t || b.push(k.clone())
                    }
            };
            a.prototype.computeNormals = function() {
                this.faceNormals.length = this.faces.length;
                for (var a = 0; a < this.faces.length; a++) {
                    for (var b = 0; b < this.faces[a].length; b++)
                        if (!this.vertices[this.faces[a][b]]) throw Error("Vertex " +
                            this.faces[a][b] + " not found!");
                    b = this.faceNormals[a] || new c;
                    this.getFaceNormal(a, b);
                    b.negate(b);
                    this.faceNormals[a] = b;
                    if (0 > b.dot(this.vertices[this.faces[a][0]]))
                        for (console.error(".faceNormals[" + a + "] = Vec3(" + b.toString() + ") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule."), b = 0; b < this.faces[a].length; b++) console.warn(".vertices[" + this.faces[a][b] + "] = Vec3(" + this.vertices[this.faces[a][b]].toString() + ")")
                }
            };
            var d =
                new c,
                p = new c;
            a.computeNormal = function(a, b, c, e) {
                b.vsub(a, p);
                c.vsub(b, d);
                d.cross(p, e);
                e.isZero() || e.normalize()
            };
            a.prototype.getFaceNormal = function(b, c) {
                var d = this.faces[b];
                return a.computeNormal(this.vertices[d[0]], this.vertices[d[1]], this.vertices[d[2]], c)
            };
            var m = new c;
            a.prototype.clipAgainstHull = function(a, b, d, e, f, g, t, k, w) {
                for (var l = -1, B = -Number.MAX_VALUE, h = 0; h < d.faces.length; h++) {
                    m.copy(d.faceNormals[h]);
                    f.vmult(m, m);
                    var p = m.dot(g);
                    p > B && (B = p, l = h)
                }
                B = [];
                h = d.faces[l];
                p = h.length;
                for (var I = 0; I < p; I++) {
                    var q =
                        d.vertices[h[I]],
                        C = new c;
                    C.copy(q);
                    f.vmult(C, C);
                    e.vadd(C, C);
                    B.push(C)
                }
                0 <= l && this.clipFaceAgainstHull(g, a, b, B, t, k, w)
            };
            var l = new c,
                q = new c,
                r = new c,
                y = new c,
                A = new c,
                v = new c;
            a.prototype.findSeparatingAxis = function(a, b, c, d, e, f, g, t) {
                var k = Number.MAX_VALUE,
                    w = 0;
                if (this.uniqueAxes)
                    for (h = 0; h !== this.uniqueAxes.length; h++) {
                        c.vmult(this.uniqueAxes[h], l);
                        m = this.testSepAxis(l, a, b, c, d, e);
                        if (!1 === m) return !1;
                        m < k && (k = m, f.copy(l))
                    } else
                        for (var B = g ? g.length : this.faces.length, h = 0; h < B; h++) {
                            m = g ? g[h] : h;
                            l.copy(this.faceNormals[m]);
                            c.vmult(l, l);
                            var m = this.testSepAxis(l, a, b, c, d, e);
                            if (!1 === m) return !1;
                            m < k && (k = m, f.copy(l))
                        }
                if (a.uniqueAxes)
                    for (h = 0; h !== a.uniqueAxes.length; h++) {
                        e.vmult(a.uniqueAxes[h], q);
                        w++;
                        m = this.testSepAxis(q, a, b, c, d, e);
                        if (!1 === m) return !1;
                        m < k && (k = m, f.copy(q))
                    } else
                        for (g = t ? t.length : a.faces.length, h = 0; h < g; h++) {
                            m = t ? t[h] : h;
                            q.copy(a.faceNormals[m]);
                            e.vmult(q, q);
                            w++;
                            m = this.testSepAxis(q, a, b, c, d, e);
                            if (!1 === m) return !1;
                            m < k && (k = m, f.copy(q))
                        }
                for (t = 0; t !== this.uniqueEdges.length; t++)
                    for (c.vmult(this.uniqueEdges[t], y), w = 0; w !==
                        a.uniqueEdges.length; w++)
                        if (e.vmult(a.uniqueEdges[w], A), y.cross(A, v), !v.almostZero()) {
                            v.normalize();
                            h = this.testSepAxis(v, a, b, c, d, e);
                            if (!1 === h) return !1;
                            h < k && (k = h, f.copy(v))
                        }
                d.vsub(b, r);
                0 < r.dot(f) && f.negate(f);
                return !0
            };
            var z = [],
                u = [];
            a.prototype.testSepAxis = function(b, c, d, e, f, g) {
                a.project(this, b, d, e, z);
                a.project(c, b, f, g, u);
                d = z[0];
                b = z[1];
                c = u[0];
                e = u[1];
                if (d < e || c < b) return !1;
                d -= e;
                b = c - b;
                return d < b ? d : b
            };
            var D = new c,
                E = new c;
            a.prototype.calculateLocalInertia = function(a, b) {
                this.computeLocalAABB(D, E);
                var c = E.x -
                    D.x,
                    d = E.y - D.y,
                    e = E.z - D.z;
                b.x = 1 / 12 * a * (4 * d * d + 4 * e * e);
                b.y = 1 / 12 * a * (4 * c * c + 4 * e * e);
                b.z = 1 / 12 * a * (4 * d * d + 4 * c * c)
            };
            a.prototype.getPlaneConstantOfFace = function(a) {
                return -this.faceNormals[a].dot(this.vertices[this.faces[a][0]])
            };
            var F = new c,
                t = new c,
                w = new c,
                B = new c,
                I = new c,
                C = new c,
                J = new c,
                R = new c;
            a.prototype.clipFaceAgainstHull = function(a, b, c, d, e, f, g) {
                for (var k = [], l = -1, h = Number.MAX_VALUE, m = 0; m < this.faces.length; m++) {
                    F.copy(this.faceNormals[m]);
                    c.vmult(F, F);
                    var p = F.dot(a);
                    p < h && (h = p, l = m)
                }
                if (!(0 > l)) {
                    a = this.faces[l];
                    a.connectedFaces = [];
                    for (h = 0; h < this.faces.length; h++)
                        for (m = 0; m < this.faces[h].length; m++) - 1 !== a.indexOf(this.faces[h][m]) && h !== l && -1 === a.connectedFaces.indexOf(h) && a.connectedFaces.push(h);
                    h = a.length;
                    for (m = 0; m < h; m++) {
                        p = this.vertices[a[m]];
                        p.vsub(this.vertices[a[(m + 1) % h]], t);
                        w.copy(t);
                        c.vmult(w, w);
                        b.vadd(w, w);
                        B.copy(this.faceNormals[l]);
                        c.vmult(B, B);
                        b.vadd(B, B);
                        w.cross(B, I);
                        I.negate(I);
                        C.copy(p);
                        c.vmult(C, C);
                        b.vadd(C, C);
                        C.dot(I);
                        p = a.connectedFaces[m];
                        J.copy(this.faceNormals[p]);
                        p = this.getPlaneConstantOfFace(p);
                        R.copy(J);
                        c.vmult(R, R);
                        p -= R.dot(b);
                        for (this.clipFaceAgainstPlane(d, k, R, p); d.length;) d.shift();
                        for (; k.length;) d.push(k.shift())
                    }
                    J.copy(this.faceNormals[l]);
                    p = this.getPlaneConstantOfFace(l);
                    R.copy(J);
                    c.vmult(R, R);
                    p -= R.dot(b);
                    for (h = 0; h < d.length; h++) b = R.dot(d[h]) + p, b <= e && (console.log("clamped: depth=" + b + " to minDist=" + (e + "")), b = e), b <= f && (c = d[h], 0 >= b && g.push({
                        point: c,
                        normal: R,
                        depth: b
                    }))
                }
            };
            a.prototype.clipFaceAgainstPlane = function(a, b, d, e) {
                var f = a.length;
                if (2 > f) return b;
                var g = a[a.length - 1];
                var t = d.dot(g) + e;
                for (var k =
                        0; k < f; k++) {
                    var w = a[k];
                    var l = d.dot(w) + e;
                    if (0 > t) {
                        if (0 > l) {
                            var h = new c;
                            h.copy(w)
                        } else h = new c, g.lerp(w, t / (t - l), h);
                        b.push(h)
                    } else 0 > l && (h = new c, g.lerp(w, t / (t - l), h), b.push(h), b.push(w));
                    g = w;
                    t = l
                }
                return b
            };
            a.prototype.computeWorldVertices = function(a, b) {
                for (var d = this.vertices.length; this.worldVertices.length < d;) this.worldVertices.push(new c);
                for (var e = this.vertices, f = this.worldVertices, g = 0; g !== d; g++) b.vmult(e[g], f[g]), a.vadd(f[g], f[g]);
                this.worldVerticesNeedsUpdate = !1
            };
            new c;
            a.prototype.computeLocalAABB =
                function(a, b) {
                    var c = this.vertices.length,
                        d = this.vertices;
                    a.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
                    b.set(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
                    for (var e = 0; e < c; e++) {
                        var f = d[e];
                        f.x < a.x ? a.x = f.x : f.x > b.x && (b.x = f.x);
                        f.y < a.y ? a.y = f.y : f.y > b.y && (b.y = f.y);
                        f.z < a.z ? a.z = f.z : f.z > b.z && (b.z = f.z)
                    }
                };
            a.prototype.computeWorldFaceNormals = function(a) {
                for (var b = this.faceNormals.length; this.worldFaceNormals.length < b;) this.worldFaceNormals.push(new c);
                for (var d = this.faceNormals, e = this.worldFaceNormals,
                        f = 0; f !== b; f++) a.vmult(d[f], e[f]);
                this.worldFaceNormalsNeedsUpdate = !1
            };
            a.prototype.updateBoundingSphereRadius = function() {
                for (var a = 0, b = this.vertices, c = 0, d = b.length; c !== d; c++) {
                    var e = b[c].norm2();
                    e > a && (a = e)
                }
                this.boundingSphereRadius = Math.sqrt(a)
            };
            var M = new c;
            a.prototype.calculateWorldAABB = function(a, b, c, d) {
                for (var e = this.vertices.length, f = this.vertices, g, t, k, w, l, h, m = 0; m < e; m++) {
                    M.copy(f[m]);
                    b.vmult(M, M);
                    a.vadd(M, M);
                    var B = M;
                    if (B.x < g || void 0 === g) g = B.x;
                    else if (B.x > w || void 0 === w) w = B.x;
                    if (B.y < t || void 0 ===
                        t) t = B.y;
                    else if (B.y > l || void 0 === l) l = B.y;
                    if (B.z < k || void 0 === k) k = B.z;
                    else if (B.z > h || void 0 === h) h = B.z
                }
                c.set(g, t, k);
                d.set(w, l, h)
            };
            a.prototype.volume = function() {
                return 4 * Math.PI * this.boundingSphereRadius / 3
            };
            a.prototype.getAveragePointLocal = function(a) {
                a = a || new c;
                for (var b = this.vertices.length, d = this.vertices, e = 0; e < b; e++) a.vadd(d[e], a);
                a.mult(1 / b, a);
                return a
            };
            a.prototype.transformAllPoints = function(a, b) {
                var c = this.vertices.length,
                    d = this.vertices;
                if (b) {
                    for (var e = 0; e < c; e++) {
                        var f = d[e];
                        b.vmult(f, f)
                    }
                    for (e =
                        0; e < this.faceNormals.length; e++) f = this.faceNormals[e], b.vmult(f, f)
                }
                if (a)
                    for (e = 0; e < c; e++) f = d[e], f.vadd(a, f)
            };
            var O = new c,
                L = new c,
                N = new c;
            a.prototype.pointIsInside = function(a) {
                var b = this.vertices,
                    c = this.faces,
                    d = this.faceNormals,
                    e = this.faces.length;
                this.getAveragePointLocal(O);
                for (var f = 0; f < e; f++) {
                    var g = d[f];
                    var t = b[c[f][0]],
                        k = L;
                    a.vsub(t, k);
                    k = g.dot(k);
                    var w = N;
                    O.vsub(t, w);
                    g = g.dot(w);
                    if (0 > k && 0 < g || 0 < k && 0 > g) return !1
                }
                return -1
            };
            new c;
            var X = new c,
                x = new c;
            a.project = function(a, b, c, d, e) {
                var g = a.vertices.length;
                a = a.vertices;
                x.setZero();
                f.vectorToLocalFrame(c, d, b, X);
                f.pointToLocalFrame(c, d, x, x);
                d = x.dot(X);
                c = b = a[0].dot(X);
                for (var t = 1; t < g; t++) {
                    var k = a[t].dot(X);
                    k > b && (b = k);
                    k < c && (c = k)
                }
                c -= d;
                b -= d;
                c > b && (g = c, c = b, b = g);
                e[0] = b;
                e[1] = c
            }
        }, {
            "../math/Quaternion": 28,
            "../math/Transform": 29,
            "../math/Vec3": 30,
            "./Shape": 43
        }],
        39: [function(b, g, h) {
            function a(a, b, g, h) {
                var d = [],
                    k = [],
                    m = [],
                    p = [],
                    A = [],
                    v = Math.cos,
                    z = Math.sin;
                d.push(new c(b * v(0), b * z(0), .5 * -g));
                p.push(0);
                d.push(new c(a * v(0), a * z(0), .5 * g));
                A.push(1);
                for (var u = 0; u < h; u++) {
                    var D =
                        2 * Math.PI / h * (u + 1),
                        E = 2 * Math.PI / h * (u + .5);
                    u < h - 1 ? (d.push(new c(b * v(D), b * z(D), .5 * -g)), p.push(2 * u + 2), d.push(new c(a * v(D), a * z(D), .5 * g)), A.push(2 * u + 3), m.push([2 * u + 2, 2 * u + 3, 2 * u + 1, 2 * u])) : m.push([0, 1, 2 * u + 1, 2 * u]);
                    (1 === h % 2 || u < h / 2) && k.push(new c(v(E), z(E), 0))
                }
                m.push(A);
                k.push(new c(0, 0, 1));
                a = [];
                for (u = 0; u < p.length; u++) a.push(p[p.length - u - 1]);
                m.push(a);
                this.type = e.types.CONVEXPOLYHEDRON;
                f.call(this, d, m, k)
            }
            g.exports = a;
            var e = b("./Shape"),
                c = b("../math/Vec3");
            b("../math/Quaternion");
            var f = b("./ConvexPolyhedron");
            a.prototype =
                new f
        }, {
            "../math/Quaternion": 28,
            "../math/Vec3": 30,
            "./ConvexPolyhedron": 38,
            "./Shape": 43
        }],
        40: [function(b, g, h) {
            function a(a, b) {
                b = k.defaults(b, {
                    maxValue: null,
                    minValue: null,
                    elementSize: 1
                });
                this.data = a;
                this.maxValue = b.maxValue;
                this.minValue = b.minValue;
                this.elementSize = b.elementSize;
                null === b.minValue && this.updateMinValue();
                null === b.maxValue && this.updateMaxValue();
                this.cacheEnabled = !0;
                e.call(this);
                this.pillarConvex = new c;
                this.pillarOffset = new f;
                this.type = e.types.HEIGHTFIELD;
                this.updateBoundingSphereRadius();
                this._cachedPillars = {}
            }
            var e = b("./Shape"),
                c = b("./ConvexPolyhedron"),
                f = b("../math/Vec3"),
                k = b("../utils/Utils");
            g.exports = a;
            a.prototype = new e;
            a.prototype.update = function() {
                this._cachedPillars = {}
            };
            a.prototype.updateMinValue = function() {
                for (var a = this.data, b = a[0][0], c = 0; c !== a.length; c++)
                    for (var e = 0; e !== a[c].length; e++) {
                        var f = a[c][e];
                        f < b && (b = f)
                    }
                this.minValue = b
            };
            a.prototype.updateMaxValue = function() {
                for (var a = this.data, b = a[0][0], c = 0; c !== a.length; c++)
                    for (var e = 0; e !== a[c].length; e++) {
                        var f = a[c][e];
                        f > b && (b =
                            f)
                    }
                this.maxValue = b
            };
            a.prototype.setHeightValueAtIndex = function(a, b, c) {
                this.data[a][b] = c;
                this.clearCachedConvexTrianglePillar(a, b, !1);
                0 < a && (this.clearCachedConvexTrianglePillar(a - 1, b, !0), this.clearCachedConvexTrianglePillar(a - 1, b, !1));
                0 < b && (this.clearCachedConvexTrianglePillar(a, b - 1, !0), this.clearCachedConvexTrianglePillar(a, b - 1, !1));
                0 < b && 0 < a && this.clearCachedConvexTrianglePillar(a - 1, b - 1, !0)
            };
            a.prototype.getRectMinMax = function(a, b, c, e, f) {
                f = f || [];
                for (var d = this.data, g = this.minValue; a <= c; a++)
                    for (var k =
                            b; k <= e; k++) {
                        var l = d[a][k];
                        l > g && (g = l)
                    }
                f[0] = this.minValue;
                f[1] = g
            };
            a.prototype.getIndexOfPosition = function(a, b, c, e) {
                var d = this.elementSize,
                    f = this.data;
                a = Math.floor(a / d);
                b = Math.floor(b / d);
                c[0] = a;
                c[1] = b;
                e && (0 > a && (a = 0), 0 > b && (b = 0), a >= f.length - 1 && (a = f.length - 1), b >= f[0].length - 1 && (b = f[0].length - 1));
                return 0 > a || 0 > b || a >= f.length - 1 || b >= f[0].length - 1 ? !1 : !0
            };
            a.prototype.getHeightAt = function(a, b, c) {
                var d = [];
                this.getIndexOfPosition(a, b, d, c);
                a = [];
                this.getRectMinMax(d[0], d[1] + 1, d[0], d[1] + 1, a);
                return (a[0] + a[1]) / 2
            };
            a.prototype.getCacheConvexTrianglePillarKey = function(a, b, c) {
                return a + "_" + b + "_" + (c ? 1 : 0)
            };
            a.prototype.getCachedConvexTrianglePillar = function(a, b, c) {
                return this._cachedPillars[this.getCacheConvexTrianglePillarKey(a, b, c)]
            };
            a.prototype.setCachedConvexTrianglePillar = function(a, b, c, e, f) {
                this._cachedPillars[this.getCacheConvexTrianglePillarKey(a, b, c)] = {
                    convex: e,
                    offset: f
                }
            };
            a.prototype.clearCachedConvexTrianglePillar = function(a, b, c) {
                delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(a, b, c)]
            };
            a.prototype.getConvexTrianglePillar =
                function(a, b, e) {
                    var d = this.pillarConvex,
                        g = this.pillarOffset;
                    if (this.cacheEnabled) {
                        var k = this.getCachedConvexTrianglePillar(a, b, e);
                        if (k) {
                            this.pillarConvex = k.convex;
                            this.pillarOffset = k.offset;
                            return
                        }
                        d = new c;
                        g = new f;
                        this.pillarConvex = d;
                        this.pillarOffset = g
                    }
                    k = this.data;
                    var h = this.elementSize,
                        m = d.faces;
                    d.vertices.length = 6;
                    for (var p = 0; 6 > p; p++) d.vertices[p] || (d.vertices[p] = new f);
                    m.length = 5;
                    for (p = 0; 5 > p; p++) m[p] || (m[p] = []);
                    p = d.vertices;
                    var z = (Math.min(k[a][b], k[a + 1][b], k[a][b + 1], k[a + 1][b + 1]) - this.minValue) /
                        2 + this.minValue;
                    e ? (g.set((a + .75) * h, (b + .75) * h, z), p[0].set(.25 * h, .25 * h, k[a + 1][b + 1] - z), p[1].set(-.75 * h, .25 * h, k[a][b + 1] - z), p[2].set(.25 * h, -.75 * h, k[a + 1][b] - z), p[3].set(.25 * h, .25 * h, -z - 1), p[4].set(-.75 * h, .25 * h, -z - 1), p[5].set(.25 * h, -.75 * h, -z - 1), m[0][0] = 0, m[0][1] = 1, m[0][2] = 2, m[1][0] = 5, m[1][1] = 4, m[1][2] = 3, m[2][0] = 2, m[2][1] = 5, m[2][2] = 3, m[2][3] = 0, m[3][0] = 3, m[3][1] = 4, m[3][2] = 1, m[3][3] = 0, m[4][0] = 1, m[4][1] = 4, m[4][2] = 5, m[4][3] = 2) : (g.set((a + .25) * h, (b + .25) * h, z), p[0].set(-.25 * h, -.25 * h, k[a][b] - z), p[1].set(.75 * h, -.25 *
                        h, k[a + 1][b] - z), p[2].set(-.25 * h, .75 * h, k[a][b + 1] - z), p[3].set(-.25 * h, -.25 * h, -z - 1), p[4].set(.75 * h, -.25 * h, -z - 1), p[5].set(-.25 * h, .75 * h, -z - 1), m[0][0] = 0, m[0][1] = 1, m[0][2] = 2, m[1][0] = 5, m[1][1] = 4, m[1][2] = 3, m[2][0] = 0, m[2][1] = 2, m[2][2] = 5, m[2][3] = 3, m[3][0] = 1, m[3][1] = 0, m[3][2] = 3, m[3][3] = 4, m[4][0] = 4, m[4][1] = 5, m[4][2] = 2, m[4][3] = 1);
                    d.computeNormals();
                    d.computeEdges();
                    d.updateBoundingSphereRadius();
                    this.setCachedConvexTrianglePillar(a, b, e, d, g)
                };
            a.prototype.calculateLocalInertia = function(a, b) {
                b = b || new f;
                b.set(0, 0, 0);
                return b
            };
            a.prototype.volume = function() {
                return Number.MAX_VALUE
            };
            a.prototype.calculateWorldAABB = function(a, b, c, e) {
                c.set(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
                e.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
            };
            a.prototype.updateBoundingSphereRadius = function() {
                var a = this.data,
                    b = this.elementSize;
                this.boundingSphereRadius = (new f(a.length * b, a[0].length * b, Math.max(Math.abs(this.maxValue), Math.abs(this.minValue)))).norm()
            }
        }, {
            "../math/Vec3": 30,
            "../utils/Utils": 53,
            "./ConvexPolyhedron": 38,
            "./Shape": 43
        }],
        41: [function(b, g, h) {
            function a() {
                e.call(this);
                this.type = e.types.PARTICLE
            }
            g.exports = a;
            var e = b("./Shape"),
                c = b("../math/Vec3");
            a.prototype = new e;
            a.prototype.constructor = a;
            a.prototype.calculateLocalInertia = function(a, b) {
                b = b || new c;
                b.set(0, 0, 0);
                return b
            };
            a.prototype.volume = function() {
                return 0
            };
            a.prototype.updateBoundingSphereRadius = function() {
                this.boundingSphereRadius = 0
            };
            a.prototype.calculateWorldAABB = function(a, b, c, e) {
                c.copy(a);
                e.copy(a)
            }
        }, {
            "../math/Vec3": 30,
            "./Shape": 43
        }],
        42: [function(b,
            g, h) {
            function a() {
                e.call(this);
                this.type = e.types.PLANE;
                this.worldNormal = new c;
                this.worldNormalNeedsUpdate = !0;
                this.boundingSphereRadius = Number.MAX_VALUE
            }
            g.exports = a;
            var e = b("./Shape"),
                c = b("../math/Vec3");
            a.prototype = new e;
            a.prototype.constructor = a;
            a.prototype.computeWorldNormal = function(a) {
                var b = this.worldNormal;
                b.set(0, 0, 1);
                a.vmult(b, b);
                this.worldNormalNeedsUpdate = !1
            };
            a.prototype.calculateLocalInertia = function(a, b) {
                return b = b || new c
            };
            a.prototype.volume = function() {
                return Number.MAX_VALUE
            };
            var f = new c;
            a.prototype.calculateWorldAABB = function(a, b, c, e) {
                f.set(0, 0, 1);
                b.vmult(f, f);
                b = Number.MAX_VALUE;
                c.set(-b, -b, -b);
                e.set(b, b, b);
                1 === f.x && (e.x = a.x);
                1 === f.y && (e.y = a.y);
                1 === f.z && (e.z = a.z); - 1 === f.x && (c.x = a.x); - 1 === f.y && (c.y = a.y); - 1 === f.z && (c.z = a.z)
            };
            a.prototype.updateBoundingSphereRadius = function() {
                this.boundingSphereRadius = Number.MAX_VALUE
            }
        }, {
            "../math/Vec3": 30,
            "./Shape": 43
        }],
        43: [function(b, g, h) {
            function a() {
                this.id = a.idCounter++;
                this.boundingSphereRadius = this.type = 0;
                this.collisionResponse = !0;
                this.material =
                    null
            }
            g.exports = a;
            a = b("./Shape");
            b("../math/Vec3");
            b("../math/Quaternion");
            b("../material/Material");
            a.prototype.constructor = a;
            a.prototype.updateBoundingSphereRadius = function() {
                throw "computeBoundingSphereRadius() not implemented for shape type " + this.type;
            };
            a.prototype.volume = function() {
                throw "volume() not implemented for shape type " + this.type;
            };
            a.prototype.calculateLocalInertia = function(a, b) {
                throw "calculateLocalInertia() not implemented for shape type " + this.type;
            };
            a.idCounter = 0;
            a.types = {
                SPHERE: 1,
                PLANE: 2,
                BOX: 4,
                COMPOUND: 8,
                CONVEXPOLYHEDRON: 16,
                HEIGHTFIELD: 32,
                PARTICLE: 64,
                CYLINDER: 128,
                TRIMESH: 256
            }
        }, {
            "../material/Material": 25,
            "../math/Quaternion": 28,
            "../math/Vec3": 30,
            "./Shape": 43
        }],
        44: [function(b, g, h) {
            function a(a) {
                e.call(this);
                this.radius = void 0 !== a ? Number(a) : 1;
                this.type = e.types.SPHERE;
                if (0 > this.radius) throw Error("The sphere radius cannot be negative.");
                this.updateBoundingSphereRadius()
            }
            g.exports = a;
            var e = b("./Shape"),
                c = b("../math/Vec3");
            a.prototype = new e;
            a.prototype.constructor = a;
            a.prototype.calculateLocalInertia =
                function(a, b) {
                    b = b || new c;
                    var e = 2 * a * this.radius * this.radius / 5;
                    b.x = e;
                    b.y = e;
                    b.z = e;
                    return b
                };
            a.prototype.volume = function() {
                return 4 * Math.PI * this.radius / 3
            };
            a.prototype.updateBoundingSphereRadius = function() {
                this.boundingSphereRadius = this.radius
            };
            a.prototype.calculateWorldAABB = function(a, b, c, e) {
                b = this.radius;
                for (var d = ["x", "y", "z"], f = 0; f < d.length; f++) {
                    var g = d[f];
                    c[g] = a[g] - b;
                    e[g] = a[g] + b
                }
            }
        }, {
            "../math/Vec3": 30,
            "./Shape": 43
        }],
        45: [function(b, g, h) {
            function a(a, b) {
                e.call(this);
                this.type = e.types.TRIMESH;
                this.vertices =
                    new Float32Array(a);
                this.indices = new Int16Array(b);
                this.normals = new Float32Array(b.length);
                this.aabb = new k;
                this.edges = null;
                this.scale = new c(1, 1, 1);
                this.tree = new d;
                this.updateEdges();
                this.updateNormals();
                this.updateAABB();
                this.updateBoundingSphereRadius();
                this.updateTree()
            }
            g.exports = a;
            var e = b("./Shape"),
                c = b("../math/Vec3");
            b("../math/Quaternion");
            var f = b("../math/Transform"),
                k = b("../collision/AABB"),
                d = b("../utils/Octree");
            a.prototype = new e;
            a.prototype.constructor = a;
            var p = new c;
            a.prototype.updateTree =
                function() {
                    var a = this.tree;
                    a.reset();
                    a.aabb.copy(this.aabb);
                    var b = this.scale;
                    a.aabb.lowerBound.x *= 1 / b.x;
                    a.aabb.lowerBound.y *= 1 / b.y;
                    a.aabb.lowerBound.z *= 1 / b.z;
                    a.aabb.upperBound.x *= 1 / b.x;
                    a.aabb.upperBound.y *= 1 / b.y;
                    a.aabb.upperBound.z *= 1 / b.z;
                    b = new k;
                    for (var e = new c, d = new c, f = new c, g = [e, d, f], h = 0; h < this.indices.length / 3; h++) {
                        var l = 3 * h;
                        this._getUnscaledVertex(this.indices[l], e);
                        this._getUnscaledVertex(this.indices[l + 1], d);
                        this._getUnscaledVertex(this.indices[l + 2], f);
                        b.setFromPoints(g);
                        a.insert(b, h)
                    }
                    a.removeEmptyNodes()
                };
            var m = new k;
            a.prototype.getTrianglesInAABB = function(a, b) {
                m.copy(a);
                var c = this.scale,
                    e = c.x,
                    d = c.y;
                c = c.z;
                var f = m.lowerBound,
                    g = m.upperBound;
                f.x /= e;
                f.y /= d;
                f.z /= c;
                g.x /= e;
                g.y /= d;
                g.z /= c;
                return this.tree.aabbQuery(m, b)
            };
            a.prototype.setScale = function(a) {
                var b = a.x === a.y === a.z;
                this.scale.x === this.scale.y === this.scale.z && b || this.updateNormals();
                this.scale.copy(a);
                this.updateAABB();
                this.updateBoundingSphereRadius()
            };
            a.prototype.updateNormals = function() {
                for (var b = this.normals, c = 0; c < this.indices.length / 3; c++) {
                    var e =
                        3 * c,
                        d = this.indices[e + 1],
                        f = this.indices[e + 2];
                    this.getVertex(this.indices[e], A);
                    this.getVertex(d, v);
                    this.getVertex(f, z);
                    a.computeNormal(v, A, z, p);
                    b[e] = p.x;
                    b[e + 1] = p.y;
                    b[e + 2] = p.z
                }
            };
            a.prototype.updateEdges = function() {
                for (var a = {}, b = function(b, c) {
                        a[d < f ? d + "_" + f : f + "_" + d] = !0
                    }, c = 0; c < this.indices.length / 3; c++) {
                    var e = 3 * c,
                        d = this.indices[e],
                        f = this.indices[e + 1];
                    e = this.indices[e + 2];
                    b(d, f);
                    b(f, e);
                    b(e, d)
                }
                b = Object.keys(a);
                this.edges = new Int16Array(2 * b.length);
                for (c = 0; c < b.length; c++) e = b[c].split("_"), this.edges[2 * c] =
                    parseInt(e[0], 10), this.edges[2 * c + 1] = parseInt(e[1], 10)
            };
            a.prototype.getEdgeVertex = function(a, b, c) {
                this.getVertex(this.edges[2 * a + (b ? 1 : 0)], c)
            };
            var l = new c,
                q = new c;
            a.prototype.getEdgeVector = function(a, b) {
                this.getEdgeVertex(a, 0, l);
                this.getEdgeVertex(a, 1, q);
                q.vsub(l, b)
            };
            var r = new c,
                y = new c;
            a.computeNormal = function(a, b, c, e) {
                b.vsub(a, y);
                c.vsub(b, r);
                r.cross(y, e);
                e.isZero() || e.normalize()
            };
            var A = new c,
                v = new c,
                z = new c;
            a.prototype.getVertex = function(a, b) {
                var c = this.scale;
                this._getUnscaledVertex(a, b);
                b.x *= c.x;
                b.y *= c.y;
                b.z *= c.z;
                return b
            };
            a.prototype._getUnscaledVertex = function(a, b) {
                var c = 3 * a,
                    e = this.vertices;
                return b.set(e[c], e[c + 1], e[c + 2])
            };
            a.prototype.getWorldVertex = function(a, b, c, e) {
                this.getVertex(a, e);
                f.pointToWorldFrame(b, c, e, e);
                return e
            };
            a.prototype.getTriangleVertices = function(a, b, c, e) {
                a *= 3;
                this.getVertex(this.indices[a], b);
                this.getVertex(this.indices[a + 1], c);
                this.getVertex(this.indices[a + 2], e)
            };
            a.prototype.getNormal = function(a, b) {
                var c = 3 * a;
                return b.set(this.normals[c], this.normals[c + 1], this.normals[c +
                    2])
            };
            var u = new k;
            a.prototype.calculateLocalInertia = function(a, b) {
                this.computeLocalAABB(u);
                var c = u.upperBound.x - u.lowerBound.x,
                    e = u.upperBound.y - u.lowerBound.y,
                    d = u.upperBound.z - u.lowerBound.z;
                return b.set(1 / 12 * a * (4 * e * e + 4 * d * d), 1 / 12 * a * (4 * c * c + 4 * d * d), 1 / 12 * a * (4 * e * e + 4 * c * c))
            };
            var D = new c;
            a.prototype.computeLocalAABB = function(a) {
                var b = a.lowerBound;
                a = a.upperBound;
                var c = this.vertices.length;
                this.getVertex(0, D);
                b.copy(D);
                a.copy(D);
                for (var e = 0; e !== c; e++) this.getVertex(e, D), D.x < b.x ? b.x = D.x : D.x > a.x && (a.x = D.x), D.y <
                    b.y ? b.y = D.y : D.y > a.y && (a.y = D.y), D.z < b.z ? b.z = D.z : D.z > a.z && (a.z = D.z)
            };
            a.prototype.updateAABB = function() {
                this.computeLocalAABB(this.aabb)
            };
            a.prototype.updateBoundingSphereRadius = function() {
                var a = 0,
                    b = this.vertices,
                    e = new c,
                    d = 0;
                for (b = b.length / 3; d !== b; d++) {
                    this.getVertex(d, e);
                    var f = e.norm2();
                    f > a && (a = f)
                }
                this.boundingSphereRadius = Math.sqrt(a)
            };
            new c;
            var E = new f,
                F = new k;
            a.prototype.calculateWorldAABB = function(a, b, c, e) {
                E.position = a;
                E.quaternion = b;
                this.aabb.toWorldFrame(E, F);
                c.copy(F.lowerBound);
                e.copy(F.upperBound)
            };
            a.prototype.volume = function() {
                return 4 * Math.PI * this.boundingSphereRadius / 3
            };
            a.createTorus = function(b, c, e, d, f) {
                b = b || 1;
                c = c || .5;
                e = e || 8;
                d = d || 6;
                f = f || 2 * Math.PI;
                for (var g = [], t = [], k = 0; k <= e; k++)
                    for (var h = 0; h <= d; h++) {
                        var l = h / d * f,
                            w = k / e * Math.PI * 2;
                        g.push((b + c * Math.cos(w)) * Math.cos(l), (b + c * Math.cos(w)) * Math.sin(l), c * Math.sin(w))
                    }
                for (k = 1; k <= e; k++)
                    for (h = 1; h <= d; h++) b = (d + 1) * (k - 1) + h - 1, c = (d + 1) * (k - 1) + h, f = (d + 1) * k + h, t.push((d + 1) * k + h - 1, b, f), t.push(b, c, f);
                return new a(g, t)
            }
        }, {
            "../collision/AABB": 3,
            "../math/Quaternion": 28,
            "../math/Transform": 29,
            "../math/Vec3": 30,
            "../utils/Octree": 50,
            "./Shape": 43
        }],
        46: [function(b, g, h) {
            function a() {
                e.call(this);
                this.iterations = 10;
                this.tolerance = 1E-7
            }
            g.exports = a;
            b("../math/Vec3");
            b("../math/Quaternion");
            var e = b("./Solver");
            a.prototype = new e;
            var c = [],
                f = [],
                k = [];
            a.prototype.solve = function(a, b) {
                var e = 0,
                    d = this.iterations,
                    g = this.tolerance * this.tolerance,
                    h = this.equations,
                    p = h.length,
                    A = b.bodies,
                    v = A.length,
                    z;
                if (0 !== p)
                    for (z = 0; z !== v; z++) A[z].updateSolveMassProperties();
                f.length = p;
                k.length = p;
                c.length =
                    p;
                for (z = 0; z !== p; z++) {
                    var u = h[z];
                    c[z] = 0;
                    k[z] = u.computeB(a);
                    f[z] = 1 / u.computeC()
                }
                if (0 !== p) {
                    for (z = 0; z !== v; z++) u = A[z], e = u.wlambda, u.vlambda.set(0, 0, 0), e && e.set(0, 0, 0);
                    for (e = 0; e !== d; e++) {
                        for (var D = z = 0; D !== p; D++) {
                            u = h[D];
                            var E = k[D];
                            var F = f[D];
                            var t = c[D];
                            var w = u.computeGWlambda();
                            E = F * (E - w - u.eps * t);
                            t + E < u.minForce ? E = u.minForce - t : t + E > u.maxForce && (E = u.maxForce - t);
                            c[D] += E;
                            z += 0 < E ? E : -E;
                            u.addToWlambda(E)
                        }
                        if (z * z < g) break
                    }
                    for (z = 0; z !== v; z++) u = A[z], d = u.velocity, g = u.angularVelocity, d.vadd(u.vlambda, d), g && g.vadd(u.wlambda,
                        g)
                }
                return e
            }
        }, {
            "../math/Quaternion": 28,
            "../math/Vec3": 30,
            "./Solver": 47
        }],
        47: [function(b, g, h) {
            function a() {
                this.equations = []
            }
            g.exports = a;
            a.prototype.solve = function(a, b) {
                return 0
            };
            a.prototype.addEquation = function(a) {
                a.enabled && this.equations.push(a)
            };
            a.prototype.removeEquation = function(a) {
                var b = this.equations;
                a = b.indexOf(a); - 1 !== a && b.splice(a, 1)
            };
            a.prototype.removeAllEquations = function() {
                this.equations.length = 0
            }
        }, {}],
        48: [function(b, g, h) {
            function a(a) {
                k.call(this);
                this.iterations = 10;
                this.tolerance = 1E-7;
                this.subsolver = a;
                this.nodes = [];
                for (this.nodePool = []; 128 > this.nodePool.length;) this.nodePool.push(this.createNode())
            }

            function e(a) {
                for (var b = a.length, c = 0; c !== b; c++) {
                    var e = a[c];
                    if (!(e.visited || e.body.type & l)) return e
                }
                return !1
            }

            function c(a, b, c) {
                b.push(a.body);
                b = a.eqs.length;
                for (var e = 0; e !== b; e++) {
                    var d = a.eqs[e]; - 1 === c.indexOf(d) && c.push(d)
                }
            }

            function f(a, b) {
                return b.id - a.id
            }
            g.exports = a;
            b("../math/Vec3");
            b("../math/Quaternion");
            var k = b("./Solver");
            b = b("../objects/Body");
            a.prototype = new k;
            var d = [],
                p = [],
                m = {
                    bodies: []
                },
                l = b.STATIC,
                q = [];
            a.prototype.createNode = function() {
                return {
                    body: null,
                    children: [],
                    eqs: [],
                    visited: !1
                }
            };
            a.prototype.solve = function(a, b) {
                for (var g = this.nodePool, k = b.bodies, h = this.equations, l = h.length, r = k.length, y = this.subsolver; g.length < r;) g.push(this.createNode());
                d.length = r;
                for (var F = 0; F < r; F++) d[F] = g[F];
                for (F = 0; F !== r; F++) g = d[F], g.body = k[F], g.children.length = 0, g.eqs.length = 0, g.visited = !1;
                for (r = 0; r !== l; r++) {
                    g = h[r];
                    F = k.indexOf(g.bi);
                    var t = k.indexOf(g.bj);
                    F = d[F];
                    t = d[t];
                    F.children.push(t);
                    F.eqs.push(g);
                    t.children.push(F);
                    t.eqs.push(g)
                }
                k = 0;
                h = p;
                y.tolerance = this.tolerance;
                for (y.iterations = this.iterations; F = e(d);) {
                    h.length = 0;
                    m.bodies.length = 0;
                    g = F;
                    F = c;
                    l = m.bodies;
                    r = h;
                    q.push(g);
                    g.visited = !0;
                    for (F(g, l, r); q.length;)
                        for (g = q.pop(); t = e(g.children);) t.visited = !0, F(t, l, r), q.push(t);
                    l = h.length;
                    h = h.sort(f);
                    for (F = 0; F !== l; F++) y.addEquation(h[F]);
                    y.solve(a, m);
                    y.removeAllEquations();
                    k++
                }
                return k
            }
        }, {
            "../math/Quaternion": 28,
            "../math/Vec3": 30,
            "../objects/Body": 31,
            "./Solver": 47
        }],
        49: [function(b, g, h) {
            b = function() {};
            g.exports =
                b;
            b.prototype = {
                constructor: b,
                addEventListener: function(a, b) {
                    void 0 === this._listeners && (this._listeners = {});
                    var c = this._listeners;
                    void 0 === c[a] && (c[a] = []); - 1 === c[a].indexOf(b) && c[a].push(b);
                    return this
                },
                hasEventListener: function(a, b) {
                    if (void 0 === this._listeners) return !1;
                    var c = this._listeners;
                    return void 0 !== c[a] && -1 !== c[a].indexOf(b) ? !0 : !1
                },
                removeEventListener: function(a, b) {
                    if (void 0 === this._listeners) return this;
                    var c = this._listeners;
                    if (void 0 === c[a]) return this;
                    var e = c[a].indexOf(b); - 1 !== e && c[a].splice(e,
                        1);
                    return this
                },
                dispatchEvent: function(a) {
                    if (void 0 === this._listeners) return this;
                    var b = this._listeners[a.type];
                    if (void 0 !== b) {
                        a.target = this;
                        for (var c = 0, f = b.length; c < f; c++) b[c].call(this, a)
                    }
                    return this
                }
            }
        }, {}],
        50: [function(b, g, h) {
                function a(a) {
                    a = a || {};
                    this.root = a.root || null;
                    this.aabb = a.aabb ? a.aabb.clone() : new c;
                    this.data = [];
                    this.children = []
                }

                function e(b, c) {
                    c = c || {};
                    c.root = null;
                    c.aabb = b;
                    a.call(this, c);
                    this.maxDepth = "undefined" !== typeof c.maxDepth ? c.maxDepth : 8
                }
                var c = b("../collision/AABB"),
                    f = b("../math/Vec3");
                g.exports = e;
                e.prototype = new a;
                a.prototype.reset = function(a, b) {
                    this.children.length = this.data.length = 0
                };
                a.prototype.insert = function(a, b, c) {
                    var e = this.data;
                    c = c || 0;
                    if (!this.aabb.contains(a)) return !1;
                    var d = this.children;
                    if (c < (this.maxDepth || this.root.maxDepth)) {
                        var f = !1;
                        d.length || (this.subdivide(), f = !0);
                        for (var g = 0; 8 !== g; g++)
                            if (d[g].insert(a, b, c + 1)) return !0;
                        f && (d.length = 0)
                    }
                    e.push(b);
                    return !0
                };
                var k = new f;
                a.prototype.subdivide = function() {
                    var b = this.aabb,
                        e = b.lowerBound,
                        d = b.upperBound;
                    b = this.children;
                    b.push(new a({
                        aabb: new c({
                            lowerBound: new f(0,
                                0, 0)
                        })
                    }), new a({
                        aabb: new c({
                            lowerBound: new f(1, 0, 0)
                        })
                    }), new a({
                        aabb: new c({
                            lowerBound: new f(1, 1, 0)
                        })
                    }), new a({
                        aabb: new c({
                            lowerBound: new f(1, 1, 1)
                        })
                    }), new a({
                        aabb: new c({
                            lowerBound: new f(0, 1, 1)
                        })
                    }), new a({
                        aabb: new c({
                            lowerBound: new f(0, 0, 1)
                        })
                    }), new a({
                        aabb: new c({
                            lowerBound: new f(1, 0, 1)
                        })
                    }), new a({
                        aabb: new c({
                            lowerBound: new f(0, 1, 0)
                        })
                    }));
                    d.vsub(e, k);
                    k.scale(.5, k);
                    d = this.root || this;
                    for (var g = 0; 8 !== g; g++) {
                        var h = b[g];
                        h.root = d;
                        var y = h.aabb.lowerBound;
                        y.x *= k.x;
                        y.y *= k.y;
                        y.z *= k.z;
                        y.vadd(e, y);
                        y.vadd(k, h.aabb.upperBound)
                    }
                };
                a.prototype.aabbQuery = function(a, b) {
                    for (var c = [this]; c.length;) {
                        var e = c.pop();
                        e.aabb.overlaps(a) && Array.prototype.push.apply(b, e.data);
                        Array.prototype.push.apply(c, e.children)
                    }
                    return b
                };
                var d = new c;
                a.prototype.rayQuery = function(a, b, c) {
                    a.getAABB(d);
                    d.toLocalFrame(b, d);
                    this.aabbQuery(d, c);
                    return c
                };
                a.prototype.removeEmptyNodes = function() {
                    for (var a = [this]; a.length;) {
                        for (var b = a.pop(), c = b.children.length - 1; 0 <= c; c--) b.children[c].data.length || b.children.splice(c, 1);
                        Array.prototype.push.apply(a, b.children)
                    }
                }
            },
            {
                "../collision/AABB": 3,
                "../math/Vec3": 30
            }
        ],
        51: [function(b, g, h) {
            function a() {
                this.objects = [];
                this.type = Object
            }
            g.exports = a;
            a.prototype.release = function() {
                for (var a = arguments.length, b = 0; b !== a; b++) this.objects.push(arguments[b])
            };
            a.prototype.get = function() {
                return 0 === this.objects.length ? this.constructObject() : this.objects.pop()
            };
            a.prototype.constructObject = function() {
                throw Error("constructObject() not implemented in this Pool subclass yet!");
            }
        }, {}],
        52: [function(b, g, h) {
            function a() {
                this.data = {
                    keys: []
                }
            }
            g.exports = a;
            a.prototype.get = function(a, b) {
                if (a > b) {
                    var c = b;
                    b = a;
                    a = c
                }
                return this.data[a + "-" + b]
            };
            a.prototype.set = function(a, b, f) {
                if (a > b) {
                    var c = b;
                    b = a;
                    a = c
                }
                c = a + "-" + b;
                this.get(a, b) || this.data.keys.push(c);
                this.data[c] = f
            };
            a.prototype.reset = function() {
                for (var a = this.data, b = a.keys; 0 < b.length;) {
                    var f = b.pop();
                    delete a[f]
                }
            }
        }, {}],
        53: [function(b, g, h) {
            function a() {}
            g.exports = a;
            a.defaults = function(a, b) {
                a = a || {};
                for (var c in b) c in a || (a[c] = b[c]);
                return a
            }
        }, {}],
        54: [function(b, g, h) {
            function a() {
                c.call(this);
                this.type =
                    e
            }
            g.exports = a;
            var e = b("../math/Vec3"),
                c = b("./Pool");
            a.prototype = new c;
            a.prototype.constructObject = function() {
                return new e
            }
        }, {
            "../math/Vec3": 30,
            "./Pool": 51
        }],
        55: [function(b, g, h) {
            function a(a) {
                this.contactPointPool = [];
                this.frictionEquationPool = [];
                this.result = [];
                this.frictionResult = [];
                this.v3pool = new d;
                this.world = a;
                this.currentContactMaterial = null;
                this.enableFrictionReduction = !1
            }
            g.exports = a;
            g = b("../collision/AABB");
            h = b("../shapes/Shape");
            var e = b("../collision/Ray"),
                c = b("../math/Vec3"),
                f = b("../math/Transform");
            b("../shapes/ConvexPolyhedron");
            var k = b("../math/Quaternion");
            b("../solver/Solver");
            var d = b("../utils/Vec3Pool"),
                p = b("../equations/ContactEquation"),
                m = b("../equations/FrictionEquation");
            a.prototype.createContactEquation = function(a, b, c, e, d, f) {
                if (this.contactPointPool.length) {
                    var g = this.contactPointPool.pop();
                    g.bi = a;
                    g.bj = b
                } else g = new p(a, b);
                g.enabled = a.collisionResponse && b.collisionResponse && c.collisionResponse && e.collisionResponse;
                var t = this.currentContactMaterial;
                g.restitution = t.restitution;
                g.setSpookParams(t.contactEquationStiffness,
                    t.contactEquationRelaxation, this.world.dt);
                a = c.material || a.material;
                b = e.material || b.material;
                a && b && 0 <= a.restitution && 0 <= b.restitution && (g.restitution = a.restitution * b.restitution);
                g.si = d || c;
                g.sj = f || e;
                return g
            };
            a.prototype.createFrictionEquationsFromContact = function(a, b) {
                var c = a.bi,
                    e = a.bj,
                    d = this.world,
                    f = this.currentContactMaterial,
                    g = f.friction,
                    t = a.si.material || c.material,
                    k = a.sj.material || e.material;
                t && k && 0 <= t.friction && 0 <= k.friction && (g = t.friction * k.friction);
                if (0 < g) {
                    g *= d.gravity.length();
                    t = c.invMass +
                        e.invMass;
                    0 < t && (t = 1 / t);
                    var h = this.frictionEquationPool;
                    k = h.length ? h.pop() : new m(c, e, g * t);
                    h = h.length ? h.pop() : new m(c, e, g * t);
                    k.bi = h.bi = c;
                    k.bj = h.bj = e;
                    k.minForce = h.minForce = -g * t;
                    k.maxForce = h.maxForce = g * t;
                    k.ri.copy(a.ri);
                    k.rj.copy(a.rj);
                    h.ri.copy(a.ri);
                    h.rj.copy(a.rj);
                    a.ni.tangents(k.t, h.t);
                    k.setSpookParams(f.frictionEquationStiffness, f.frictionEquationRelaxation, d.dt);
                    h.setSpookParams(f.frictionEquationStiffness, f.frictionEquationRelaxation, d.dt);
                    k.enabled = h.enabled = a.enabled;
                    b.push(k, h);
                    return !0
                }
                return !1
            };
            var l = new c,
                q = new c,
                r = new c;
            a.prototype.createFrictionFromAverage = function(a) {
                var b = this.result[this.result.length - 1];
                if (this.createFrictionEquationsFromContact(b, this.frictionResult) && 1 !== a) {
                    var c = this.frictionResult[this.frictionResult.length - 2],
                        e = this.frictionResult[this.frictionResult.length - 1];
                    l.setZero();
                    q.setZero();
                    r.setZero();
                    for (var d = b.bi, f = 0; f !== a; f++) b = this.result[this.result.length - 1 - f], b.bodyA !== d ? (l.vadd(b.ni, l), q.vadd(b.ri, q), r.vadd(b.rj, r)) : (l.vsub(b.ni, l), q.vadd(b.rj, q), r.vadd(b.ri,
                        r));
                    a = 1 / a;
                    q.scale(a, c.ri);
                    r.scale(a, c.rj);
                    e.ri.copy(c.ri);
                    e.rj.copy(c.rj);
                    l.normalize();
                    l.tangents(c.t, e.t)
                }
            };
            var y = new c,
                A = new c,
                v = new k,
                z = new k;
            a.prototype.getContacts = function(a, b, c, e, d, f, g) {
                this.contactPointPool = d;
                this.frictionEquationPool = g;
                this.result = e;
                this.frictionResult = f;
                e = 0;
                for (d = a.length; e !== d; e++) {
                    f = a[e];
                    g = b[e];
                    var t = null;
                    f.material && g.material && (t = c.getContactMaterial(f.material, g.material) || null);
                    for (var k = 0; k < f.shapes.length; k++) {
                        f.quaternion.mult(f.shapeOrientations[k], v);
                        f.quaternion.vmult(f.shapeOffsets[k],
                            y);
                        y.vadd(f.position, y);
                        for (var h = f.shapes[k], l = 0; l < g.shapes.length; l++) {
                            g.quaternion.mult(g.shapeOrientations[l], z);
                            g.quaternion.vmult(g.shapeOffsets[l], A);
                            A.vadd(g.position, A);
                            var w = g.shapes[l];
                            if (!(y.distanceTo(A) > h.boundingSphereRadius + w.boundingSphereRadius)) {
                                var m = null;
                                h.material && w.material && (m = c.getContactMaterial(h.material, w.material) || null);
                                this.currentContactMaterial = m || t || c.defaultContactMaterial;
                                (m = this[h.type | w.type]) && (h.type < w.type ? m.call(this, h, w, y, A, v, z, f, g, h, w) : m.call(this, w, h,
                                    A, y, z, v, g, f, h, w))
                            }
                        }
                    }
                }
            };
            a.prototype[h.types.BOX | h.types.BOX] = a.prototype.boxBox = function(a, b, c, e, d, f, g, t) {
                a.convexPolyhedronRepresentation.material = a.material;
                b.convexPolyhedronRepresentation.material = b.material;
                a.convexPolyhedronRepresentation.collisionResponse = a.collisionResponse;
                b.convexPolyhedronRepresentation.collisionResponse = b.collisionResponse;
                this.convexConvex(a.convexPolyhedronRepresentation, b.convexPolyhedronRepresentation, c, e, d, f, g, t, a, b)
            };
            a.prototype[h.types.BOX | h.types.CONVEXPOLYHEDRON] =
                a.prototype.boxConvex = function(a, b, c, e, d, f, g, t) {
                    a.convexPolyhedronRepresentation.material = a.material;
                    a.convexPolyhedronRepresentation.collisionResponse = a.collisionResponse;
                    this.convexConvex(a.convexPolyhedronRepresentation, b, c, e, d, f, g, t, a, b)
                };
            a.prototype[h.types.BOX | h.types.PARTICLE] = a.prototype.boxParticle = function(a, b, c, e, d, f, g, t) {
                a.convexPolyhedronRepresentation.material = a.material;
                a.convexPolyhedronRepresentation.collisionResponse = a.collisionResponse;
                this.convexParticle(a.convexPolyhedronRepresentation,
                    b, c, e, d, f, g, t, a, b)
            };
            a.prototype[h.types.SPHERE] = a.prototype.sphereSphere = function(a, b, c, e, d, f, g, t) {
                d = this.createContactEquation(g, t, a, b);
                e.vsub(c, d.ni);
                d.ni.normalize();
                d.ri.copy(d.ni);
                d.rj.copy(d.ni);
                d.ri.mult(a.radius, d.ri);
                d.rj.mult(-b.radius, d.rj);
                d.ri.vadd(c, d.ri);
                d.ri.vsub(g.position, d.ri);
                d.rj.vadd(e, d.rj);
                d.rj.vsub(t.position, d.rj);
                this.result.push(d);
                this.createFrictionEquationsFromContact(d, this.frictionResult)
            };
            var u = new c,
                D = new c,
                E = new c;
            a.prototype[h.types.PLANE | h.types.TRIMESH] = a.prototype.planeTrimesh =
                function(a, b, e, d, g, t, k, h) {
                    var w = new c;
                    u.set(0, 0, 1);
                    g.vmult(u, u);
                    for (g = 0; g < b.vertices.length / 3; g++) {
                        b.getVertex(g, w);
                        var l = new c;
                        l.copy(w);
                        f.pointToWorldFrame(d, t, l, w);
                        l = D;
                        w.vsub(e, l);
                        if (0 >= u.dot(l)) {
                            var m = this.createContactEquation(k, h, a, b);
                            m.ni.copy(u);
                            var B = E;
                            u.scale(l.dot(u), B);
                            w.vsub(B, B);
                            m.ri.copy(B);
                            m.ri.vsub(k.position, m.ri);
                            m.rj.copy(w);
                            m.rj.vsub(h.position, m.rj);
                            this.result.push(m);
                            this.createFrictionEquationsFromContact(m, this.frictionResult)
                        }
                    }
                };
            var F = new c,
                t = new c;
            new c;
            var w = new c,
                B = new c,
                I = new c,
                C = new c,
                J = new c,
                R = new c,
                M = new c,
                O = new c,
                L = new c,
                N = new c,
                X = new c,
                x = new g,
                K = [];
            a.prototype[h.types.SPHERE | h.types.TRIMESH] = a.prototype.sphereTrimesh = function(a, b, c, d, g, k, h, l) {
                f.pointToLocalFrame(d, k, c, M);
                g = a.radius;
                x.lowerBound.set(M.x - g, M.y - g, M.z - g);
                x.upperBound.set(M.x + g, M.y + g, M.z + g);
                b.getTrianglesInAABB(x, K);
                var m = a.radius * a.radius;
                for (g = 0; g < K.length; g++)
                    for (var p = 0; 3 > p; p++)
                        if (b.getVertex(b.indices[3 * K[g] + p], w), w.vsub(M, t), t.norm2() <= m) {
                            B.copy(w);
                            f.pointToWorldFrame(d, k, B, w);
                            w.vsub(c, t);
                            var q = this.createContactEquation(h, l, a, b);
                            q.ni.copy(t);
                            q.ni.normalize();
                            q.ri.copy(q.ni);
                            q.ri.scale(a.radius, q.ri);
                            q.ri.vadd(c, q.ri);
                            q.ri.vsub(h.position, q.ri);
                            q.rj.copy(w);
                            q.rj.vsub(l.position, q.rj);
                            this.result.push(q);
                            this.createFrictionEquationsFromContact(q, this.frictionResult)
                        }
                for (g = 0; g < K.length; g++)
                    for (p = 0; 3 > p; p++) b.getVertex(b.indices[3 * K[g] + p], I), b.getVertex(b.indices[3 * K[g] + (p + 1) % 3], C), C.vsub(I, J), M.vsub(C, O), c = O.dot(J), M.vsub(I, O), q = O.dot(J), 0 < q && 0 > c && (M.vsub(I, O), R.copy(J), R.normalize(),
                        q = O.dot(R), R.scale(q, O), O.vadd(I, O), c = O.distanceTo(M), c < a.radius && (q = this.createContactEquation(h, l, a, b), O.vsub(M, q.ni), q.ni.normalize(), q.ni.scale(a.radius, q.ri), f.pointToWorldFrame(d, k, O, O), O.vsub(l.position, q.rj), f.vectorToWorldFrame(k, q.ni, q.ni), f.vectorToWorldFrame(k, q.ri, q.ri), this.result.push(q), this.createFrictionEquationsFromContact(q, this.frictionResult)));
                g = 0;
                for (p = K.length; g !== p; g++) b.getTriangleVertices(K[g], L, N, X), b.getNormal(K[g], F), M.vsub(L, O), c = O.dot(F), F.scale(c, O), M.vsub(O, O), c =
                    O.distanceTo(M), e.pointInTriangle(O, L, N, X) && c < a.radius && (q = this.createContactEquation(h, l, a, b), O.vsub(M, q.ni), q.ni.normalize(), q.ni.scale(a.radius, q.ri), f.pointToWorldFrame(d, k, O, O), O.vsub(l.position, q.rj), f.vectorToWorldFrame(k, q.ni, q.ni), f.vectorToWorldFrame(k, q.ri, q.ri), this.result.push(q), this.createFrictionEquationsFromContact(q, this.frictionResult));
                K.length = 0
            };
            var U = new c,
                S = new c;
            a.prototype[h.types.SPHERE | h.types.PLANE] = a.prototype.spherePlane = function(a, b, c, e, d, f, g, t) {
                b = this.createContactEquation(g,
                    t, a, b);
                b.ni.set(0, 0, 1);
                f.vmult(b.ni, b.ni);
                b.ni.negate(b.ni);
                b.ni.normalize();
                b.ni.mult(a.radius, b.ri);
                c.vsub(e, U);
                b.ni.mult(b.ni.dot(U), S);
                U.vsub(S, b.rj); - U.dot(b.ni) <= a.radius && (a = b.ri, f = b.rj, a.vadd(c, a), a.vsub(g.position, a), f.vadd(e, f), f.vsub(t.position, f), this.result.push(b), this.createFrictionEquationsFromContact(b, this.frictionResult))
            };
            var P = new c,
                G = new c,
                Q = new c,
                T = new c,
                H = new c,
                W = new c,
                Y = new c,
                V = [new c, new c, new c, new c, new c, new c],
                Z = new c,
                aa = new c,
                ha = new c,
                na = new c;
            a.prototype[h.types.SPHERE |
                h.types.BOX] = a.prototype.sphereBox = function(a, b, c, e, d, f, g, t) {
                d = this.v3pool;
                c.vsub(e, T);
                b.getSideNormals(V, f);
                f = a.radius;
                for (var k = !1, h = null, l = 0, w = 0, m = 0, B = null, p = 0, q = V.length; p !== q && !1 === k; p++) {
                    var I = H;
                    I.copy(V[p]);
                    var x = I.norm();
                    I.normalize();
                    var C = T.dot(I);
                    if (C < x + f && 0 < C) {
                        var r = W,
                            N = Y;
                        r.copy(V[(p + 1) % 3]);
                        N.copy(V[(p + 2) % 3]);
                        var J = r.norm(),
                            v = N.norm();
                        r.normalize();
                        N.normalize();
                        var u = T.dot(r),
                            y = T.dot(N);
                        u < J && u > -J && y < v && y > -v && (C = Math.abs(C - x - f), null === B || C < B) && (B = C, w = u, m = y, h = x, aa.copy(I), ha.copy(r), na.copy(N),
                            l++)
                    }
                }
                l && (k = !0, l = this.createContactEquation(g, t, a, b), aa.mult(-f, l.ri), l.ni.copy(aa), l.ni.negate(l.ni), aa.mult(h, aa), ha.mult(w, ha), aa.vadd(ha, aa), na.mult(m, na), aa.vadd(na, l.rj), l.ri.vadd(c, l.ri), l.ri.vsub(g.position, l.ri), l.rj.vadd(e, l.rj), l.rj.vsub(t.position, l.rj), this.result.push(l), this.createFrictionEquationsFromContact(l, this.frictionResult));
                C = d.get();
                for (h = 0; 2 !== h && !k; h++)
                    for (w = 0; 2 !== w && !k; w++)
                        for (m = 0; 2 !== m && !k; m++) C.set(0, 0, 0), h ? C.vadd(V[0], C) : C.vsub(V[0], C), w ? C.vadd(V[1], C) : C.vsub(V[1], C),
                            m ? C.vadd(V[2], C) : C.vsub(V[2], C), e.vadd(C, Z), Z.vsub(c, Z), Z.norm2() < f * f && (k = !0, l = this.createContactEquation(g, t, a, b), l.ri.copy(Z), l.ri.normalize(), l.ni.copy(l.ri), l.ri.mult(f, l.ri), l.rj.copy(C), l.ri.vadd(c, l.ri), l.ri.vsub(g.position, l.ri), l.rj.vadd(e, l.rj), l.rj.vsub(t.position, l.rj), this.result.push(l), this.createFrictionEquationsFromContact(l, this.frictionResult));
                d.release(C);
                B = d.get();
                p = d.get();
                l = d.get();
                q = d.get();
                C = d.get();
                I = V.length;
                for (h = 0; h !== I && !k; h++)
                    for (w = 0; w !== I && !k; w++)
                        if (h % 3 !== w % 3) {
                            V[w].cross(V[h],
                                B);
                            B.normalize();
                            V[h].vadd(V[w], p);
                            l.copy(c);
                            l.vsub(p, l);
                            l.vsub(e, l);
                            x = l.dot(B);
                            B.mult(x, q);
                            for (m = 0; m === h % 3 || m === w % 3;) m++;
                            C.copy(c);
                            C.vsub(q, C);
                            C.vsub(p, C);
                            C.vsub(e, C);
                            x = Math.abs(x);
                            r = C.norm();
                            x < V[m].norm() && r < f && (k = !0, m = this.createContactEquation(g, t, a, b), p.vadd(q, m.rj), m.rj.copy(m.rj), C.negate(m.ni), m.ni.normalize(), m.ri.copy(m.rj), m.ri.vadd(e, m.ri), m.ri.vsub(c, m.ri), m.ri.normalize(), m.ri.mult(f, m.ri), m.ri.vadd(c, m.ri), m.ri.vsub(g.position, m.ri), m.rj.vadd(e, m.rj), m.rj.vsub(t.position, m.rj), this.result.push(m),
                                this.createFrictionEquationsFromContact(m, this.frictionResult))
                        }
                d.release(B, p, l, q, C)
            };
            var xa = new c,
                ya = new c,
                za = new c,
                Aa = new c,
                Ba = new c,
                Ca = new c,
                Da = new c,
                Ea = new c,
                Fa = new c,
                Ga = new c;
            a.prototype[h.types.SPHERE | h.types.CONVEXPOLYHEDRON] = a.prototype.sphereConvex = function(a, b, c, e, d, f, g, t) {
                d = this.v3pool;
                c.vsub(e, xa);
                for (var k = b.faceNormals, h = b.faces, l = b.vertices, w = a.radius, m = 0; m !== l.length; m++) {
                    var B = Ba;
                    f.vmult(l[m], B);
                    e.vadd(B, B);
                    var p = Aa;
                    B.vsub(c, p);
                    if (p.norm2() < w * w) {
                        a = this.createContactEquation(g, t, a,
                            b);
                        a.ri.copy(p);
                        a.ri.normalize();
                        a.ni.copy(a.ri);
                        a.ri.mult(w, a.ri);
                        B.vsub(e, a.rj);
                        a.ri.vadd(c, a.ri);
                        a.ri.vsub(g.position, a.ri);
                        a.rj.vadd(e, a.rj);
                        a.rj.vsub(t.position, a.rj);
                        this.result.push(a);
                        this.createFrictionEquationsFromContact(a, this.frictionResult);
                        return
                    }
                }
                m = 0;
                for (B = h.length; m !== B; m++) {
                    p = h[m];
                    var q = Ca;
                    f.vmult(k[m], q);
                    var I = Da;
                    f.vmult(l[p[0]], I);
                    I.vadd(e, I);
                    var C = Ea;
                    q.mult(-w, C);
                    c.vadd(C, C);
                    var x = Fa;
                    C.vsub(I, x);
                    C = x.dot(q);
                    x = Ga;
                    c.vsub(I, x);
                    if (0 > C && 0 < x.dot(q)) {
                        I = [];
                        x = 0;
                        for (var r = p.length; x !== r; x++) {
                            var N =
                                d.get();
                            f.vmult(l[p[x]], N);
                            e.vadd(N, N);
                            I.push(N)
                        }
                        a: {
                            x = I;r = q;N = c;
                            for (var J = null, v = x.length, u = 0; u !== v; u++) {
                                var y = x[u],
                                    M = P;
                                x[(u + 1) % v].vsub(y, M);
                                var z = G;
                                M.cross(r, z);
                                M = Q;
                                N.vsub(y, M);
                                y = z.dot(M);
                                if (null === J || 0 < y && !0 === J || 0 >= y && !1 === J) null === J && (J = 0 < y);
                                else {
                                    x = !1;
                                    break a
                                }
                            }
                            x = !0
                        }
                        if (x) {
                            a = this.createContactEquation(g, t, a, b);
                            q.mult(-w, a.ri);
                            q.negate(a.ni);
                            b = d.get();
                            q.mult(-C, b);
                            f = d.get();
                            q.mult(-w, f);
                            c.vsub(e, a.rj);
                            a.rj.vadd(f, a.rj);
                            a.rj.vadd(b, a.rj);
                            a.rj.vadd(e, a.rj);
                            a.rj.vsub(t.position, a.rj);
                            a.ri.vadd(c, a.ri);
                            a.ri.vsub(g.position, a.ri);
                            d.release(b);
                            d.release(f);
                            this.result.push(a);
                            this.createFrictionEquationsFromContact(a, this.frictionResult);
                            x = 0;
                            for (p = I.length; x !== p; x++) d.release(I[x]);
                            break
                        } else
                            for (x = 0; x !== p.length; x++) {
                                q = d.get();
                                C = d.get();
                                f.vmult(l[p[(x + 1) % p.length]], q);
                                f.vmult(l[p[(x + 2) % p.length]], C);
                                e.vadd(q, q);
                                e.vadd(C, C);
                                v = ya;
                                C.vsub(q, v);
                                J = za;
                                v.unit(J);
                                r = d.get();
                                N = d.get();
                                c.vsub(q, N);
                                u = N.dot(J);
                                J.mult(u, r);
                                r.vadd(q, r);
                                J = d.get();
                                r.vsub(c, J);
                                if (0 < u && u * u < v.norm2() && J.norm2() < w * w) {
                                    a = this.createContactEquation(g,
                                        t, a, b);
                                    r.vsub(e, a.rj);
                                    r.vsub(c, a.ni);
                                    a.ni.normalize();
                                    a.ni.mult(w, a.ri);
                                    a.rj.vadd(e, a.rj);
                                    a.rj.vsub(t.position, a.rj);
                                    a.ri.vadd(c, a.ri);
                                    a.ri.vsub(g.position, a.ri);
                                    this.result.push(a);
                                    this.createFrictionEquationsFromContact(a, this.frictionResult);
                                    x = 0;
                                    for (p = I.length; x !== p; x++) d.release(I[x]);
                                    d.release(q);
                                    d.release(C);
                                    d.release(r);
                                    d.release(J);
                                    d.release(N);
                                    return
                                }
                                d.release(q);
                                d.release(C);
                                d.release(r);
                                d.release(J);
                                d.release(N)
                            }
                        x = 0;
                        for (p = I.length; x !== p; x++) d.release(I[x])
                    }
                }
            };
            new c;
            new c;
            a.prototype[h.types.PLANE |
                h.types.BOX] = a.prototype.planeBox = function(a, b, c, e, d, f, g, t) {
                b.convexPolyhedronRepresentation.material = b.material;
                b.convexPolyhedronRepresentation.collisionResponse = b.collisionResponse;
                this.planeConvex(a, b.convexPolyhedronRepresentation, c, e, d, f, g, t)
            };
            var ba = new c,
                ca = new c,
                qa = new c,
                Ha = new c;
            a.prototype[h.types.PLANE | h.types.CONVEXPOLYHEDRON] = a.prototype.planeConvex = function(a, b, c, e, d, f, g, t) {
                ca.set(0, 0, 1);
                d.vmult(ca, ca);
                for (var k = d = 0; k !== b.vertices.length; k++)
                    if (ba.copy(b.vertices[k]), f.vmult(ba, ba),
                        e.vadd(ba, ba), ba.vsub(c, qa), 0 >= ca.dot(qa)) {
                        var h = this.createContactEquation(g, t, a, b),
                            l = Ha;
                        ca.mult(ca.dot(qa), l);
                        ba.vsub(l, l);
                        l.vsub(c, h.ri);
                        h.ni.copy(ca);
                        ba.vsub(e, h.rj);
                        h.ri.vadd(c, h.ri);
                        h.ri.vsub(g.position, h.ri);
                        h.rj.vadd(e, h.rj);
                        h.rj.vsub(t.position, h.rj);
                        this.result.push(h);
                        d++;
                        this.enableFrictionReduction || this.createFrictionEquationsFromContact(h, this.frictionResult)
                    }
                this.enableFrictionReduction && d && this.createFrictionFromAverage(d)
            };
            var ra = new c,
                oa = new c;
            a.prototype[h.types.CONVEXPOLYHEDRON] =
                a.prototype.convexConvex = function(a, b, c, e, d, f, g, t, k, h, l, w) {
                    if (!(c.distanceTo(e) > a.boundingSphereRadius + b.boundingSphereRadius) && a.findSeparatingAxis(b, c, d, e, f, ra, l, w)) {
                        l = [];
                        a.clipAgainstHull(c, d, b, e, f, ra, -100, 100, l);
                        for (f = d = 0; f !== l.length; f++) {
                            w = this.createContactEquation(g, t, a, b, k, h);
                            var m = w.ri,
                                B = w.rj;
                            ra.negate(w.ni);
                            l[f].normal.negate(oa);
                            oa.mult(l[f].depth, oa);
                            l[f].point.vadd(oa, m);
                            B.copy(l[f].point);
                            m.vsub(c, m);
                            B.vsub(e, B);
                            m.vadd(c, m);
                            m.vsub(g.position, m);
                            B.vadd(e, B);
                            B.vsub(t.position, B);
                            this.result.push(w);
                            d++;
                            this.enableFrictionReduction || this.createFrictionEquationsFromContact(w, this.frictionResult)
                        }
                        this.enableFrictionReduction && d && this.createFrictionFromAverage(d)
                    }
                };
            var da = new c,
                ta = new c,
                pa = new c;
            a.prototype[h.types.PLANE | h.types.PARTICLE] = a.prototype.planeParticle = function(a, b, c, d, e, f, g, t) {
                da.set(0, 0, 1);
                g.quaternion.vmult(da, da);
                d.vsub(g.position, ta);
                0 >= da.dot(ta) && (a = this.createContactEquation(t, g, b, a), a.ni.copy(da), a.ni.negate(a.ni), a.ri.set(0, 0, 0), da.mult(da.dot(d), pa), d.vsub(pa, pa), a.rj.copy(pa),
                    this.result.push(a), this.createFrictionEquationsFromContact(a, this.frictionResult))
            };
            var ia = new c;
            a.prototype[h.types.PARTICLE | h.types.SPHERE] = a.prototype.sphereParticle = function(a, b, c, d, e, f, g, t) {
                ia.set(0, 0, 1);
                d.vsub(c, ia);
                ia.norm2() <= a.radius * a.radius && (b = this.createContactEquation(t, g, b, a), ia.normalize(), b.rj.copy(ia), b.rj.mult(a.radius, b.rj), b.ni.copy(ia), b.ni.negate(b.ni), b.ri.set(0, 0, 0), this.result.push(b), this.createFrictionEquationsFromContact(b, this.frictionResult))
            };
            var ua = new k,
                ja = new c;
            new c;
            var sa = new c,
                va = new c,
                ka = new c;
            a.prototype[h.types.PARTICLE | h.types.CONVEXPOLYHEDRON] = a.prototype.convexParticle = function(a, b, c, d, e, f, g, t) {
                var k = -1;
                f = null;
                var h = 0;
                ja.copy(d);
                ja.vsub(c, ja);
                e.conjugate(ua);
                ua.vmult(ja, ja);
                if (a.pointIsInside(ja)) {
                    a.worldVerticesNeedsUpdate && a.computeWorldVertices(c, e);
                    a.worldFaceNormalsNeedsUpdate && a.computeWorldFaceNormals(e);
                    e = 0;
                    for (var l = a.faces.length; e !== l; e++) {
                        var w = a.worldFaceNormals[e];
                        d.vsub(a.worldVertices[a.faces[e][0]], va);
                        var m = -w.dot(va);
                        if (null ===
                            f || Math.abs(m) < Math.abs(f)) f = m, k = e, sa.copy(w), h++
                    } - 1 !== k ? (a = this.createContactEquation(t, g, b, a), sa.mult(f, ka), ka.vadd(d, ka), ka.vsub(c, ka), a.rj.copy(ka), sa.negate(a.ni), a.ri.set(0, 0, 0), b = a.ri, f = a.rj, b.vadd(d, b), b.vsub(t.position, b), f.vadd(c, f), f.vsub(g.position, f), this.result.push(a), this.createFrictionEquationsFromContact(a, this.frictionResult)) : console.warn("Point found inside convex, but did not find penetrating face!")
                }
            };
            a.prototype[h.types.BOX | h.types.HEIGHTFIELD] = a.prototype.boxHeightfield = function(a,
                b, c, e, d, f, g, t) {
                a.convexPolyhedronRepresentation.material = a.material;
                a.convexPolyhedronRepresentation.collisionResponse = a.collisionResponse;
                this.convexHeightfield(a.convexPolyhedronRepresentation, b, c, e, d, f, g, t)
            };
            var ea = new c,
                la = new c,
                wa = [0];
            a.prototype[h.types.CONVEXPOLYHEDRON | h.types.HEIGHTFIELD] = a.prototype.convexHeightfield = function(a, b, c, e, d, g, t, k) {
                var h = b.data,
                    l = b.elementSize,
                    w = a.boundingSphereRadius;
                f.pointToLocalFrame(e, g, c, ea);
                var m = Math.floor((ea.x - w) / l) - 1,
                    B = Math.ceil((ea.x + w) / l) + 1,
                    p = Math.floor((ea.y -
                        w) / l) - 1;
                l = Math.ceil((ea.y + w) / l) + 1;
                if (!(0 > B || 0 > l || m > h.length || p > h[0].length)) {
                    0 > m && (m = 0);
                    0 > B && (B = 0);
                    0 > p && (p = 0);
                    0 > l && (l = 0);
                    m >= h.length && (m = h.length - 1);
                    B >= h.length && (B = h.length - 1);
                    l >= h[0].length && (l = h[0].length - 1);
                    p >= h[0].length && (p = h[0].length - 1);
                    h = [];
                    b.getRectMinMax(m, p, B, l, h);
                    var q = h[0];
                    if (!(ea.z - w > h[1] || ea.z + w < q))
                        for (w = m; w < B; w++)
                            for (m = p; m < l; m++) b.getConvexTrianglePillar(w, m, !1), f.pointToWorldFrame(e, g, b.pillarOffset, la), c.distanceTo(la) < b.pillarConvex.boundingSphereRadius + a.boundingSphereRadius &&
                                this.convexConvex(a, b.pillarConvex, c, la, d, g, t, k, null, null, wa, null), b.getConvexTrianglePillar(w, m, !0), f.pointToWorldFrame(e, g, b.pillarOffset, la), c.distanceTo(la) < b.pillarConvex.boundingSphereRadius + a.boundingSphereRadius && this.convexConvex(a, b.pillarConvex, c, la, d, g, t, k, null, null, wa, null)
                }
            };
            var fa = new c,
                ma = new c;
            a.prototype[h.types.SPHERE | h.types.HEIGHTFIELD] = a.prototype.sphereHeightfield = function(a, b, c, e, d, g, t, h) {
                var k = b.data,
                    l = a.radius,
                    w = b.elementSize;
                f.pointToLocalFrame(e, g, c, fa);
                var m = Math.floor((fa.x -
                        l) / w) - 1,
                    B = Math.ceil((fa.x + l) / w) + 1,
                    p = Math.floor((fa.y - l) / w) - 1;
                w = Math.ceil((fa.y + l) / w) + 1;
                if (!(0 > B || 0 > w || m > k.length || w > k[0].length)) {
                    0 > m && (m = 0);
                    0 > B && (B = 0);
                    0 > p && (p = 0);
                    0 > w && (w = 0);
                    m >= k.length && (m = k.length - 1);
                    B >= k.length && (B = k.length - 1);
                    w >= k[0].length && (w = k[0].length - 1);
                    p >= k[0].length && (p = k[0].length - 1);
                    k = [];
                    b.getRectMinMax(m, p, B, w, k);
                    var q = k[0];
                    if (!(fa.z - l > k[1] || fa.z + l < q))
                        for (l = this.result; m < B; m++)
                            for (k = p; k < w; k++)
                                if (q = l.length, b.getConvexTrianglePillar(m, k, !1), f.pointToWorldFrame(e, g, b.pillarOffset, ma),
                                    c.distanceTo(ma) < b.pillarConvex.boundingSphereRadius + a.boundingSphereRadius && this.sphereConvex(a, b.pillarConvex, c, ma, d, g, t, h), b.getConvexTrianglePillar(m, k, !0), f.pointToWorldFrame(e, g, b.pillarOffset, ma), c.distanceTo(ma) < b.pillarConvex.boundingSphereRadius + a.boundingSphereRadius && this.sphereConvex(a, b.pillarConvex, c, ma, d, g, t, h), 2 < l.length - q) return
                }
            }
        }, {
            "../collision/AABB": 3,
            "../collision/Ray": 9,
            "../equations/ContactEquation": 19,
            "../equations/FrictionEquation": 21,
            "../math/Quaternion": 28,
            "../math/Transform": 29,
            "../math/Vec3": 30,
            "../shapes/ConvexPolyhedron": 38,
            "../shapes/Shape": 43,
            "../solver/Solver": 47,
            "../utils/Vec3Pool": 54
        }],
        56: [function(b, g, h) {
            function a() {
                k.apply(this);
                this.dt = -1;
                this.allowSleep = !1;
                this.contacts = [];
                this.frictionEquations = [];
                this.quatNormalizeSkip = 0;
                this.quatNormalizeFast = !1;
                this.stepnumber = this.time = 0;
                this.default_dt = 1 / 60;
                this.nextId = 0;
                this.gravity = new e;
                this.broadphase = new A;
                this.bodies = [];
                this.solver = new c;
                this.constraints = [];
                this.narrowphase = new f(this);
                this.collisionMatrix = new d;
                this.collisionMatrixPrevious = new d;
                this.materials = [];
                this.contactmaterials = [];
                this.contactMaterialTable = new q;
                this.defaultMaterial = new p("default");
                this.defaultContactMaterial = new m(this.defaultMaterial, this.defaultMaterial, {
                    friction: .3,
                    restitution: 0
                });
                this.doProfiling = !1;
                this.profile = {
                    solve: 0,
                    makeContactConstraints: 0,
                    broadphase: 0,
                    integrate: 0,
                    narrowphase: 0
                };
                this.subsystems = [];
                this.addBodyEvent = {
                    type: "addBody",
                    body: null
                };
                this.removeBodyEvent = {
                    type: "removeBody",
                    body: null
                }
            }
            g.exports = a;
            b("../shapes/Shape");
            var e = b("../math/Vec3");
            g = b("../math/Quaternion");
            var c = b("../solver/GSSolver");
            b("../utils/Vec3Pool");
            b("../equations/ContactEquation");
            b("../equations/FrictionEquation");
            var f = b("./Narrowphase"),
                k = b("../utils/EventTarget"),
                d = b("../collision/ArrayCollisionMatrix"),
                p = b("../material/Material"),
                m = b("../material/ContactMaterial"),
                l = b("../objects/Body"),
                q = b("../utils/TupleDictionary"),
                r = b("../collision/RaycastResult");
            h = b("../collision/AABB");
            var y = b("../collision/Ray"),
                A = b("../collision/NaiveBroadphase");
            a.prototype = new k;
            new h;
            var v = new y;
            a.prototype.getContactMaterial = function(a, b) {
                return this.contactMaterialTable.get(a.id, b.id)
            };
            a.prototype.numObjects = function() {
                return this.bodies.length
            };
            a.prototype.collisionMatrixTick = function() {
                var a = this.collisionMatrixPrevious;
                this.collisionMatrixPrevious = this.collisionMatrix;
                this.collisionMatrix = a;
                this.collisionMatrix.reset()
            };
            a.prototype.add = a.prototype.addBody = function(a) {
                -1 === this.bodies.indexOf(a) && (a.index = this.bodies.length, this.bodies.push(a), a.world =
                    this, a.initPosition.copy(a.position), a.initVelocity.copy(a.velocity), a.timeLastSleepy = this.time, a instanceof l && (a.initAngularVelocity.copy(a.angularVelocity), a.initQuaternion.copy(a.quaternion)), this.collisionMatrix.setNumObjects(this.bodies.length), this.addBodyEvent.body = a, this.dispatchEvent(this.addBodyEvent))
            };
            a.prototype.addConstraint = function(a) {
                this.constraints.push(a)
            };
            a.prototype.removeConstraint = function(a) {
                a = this.constraints.indexOf(a); - 1 !== a && this.constraints.splice(a, 1)
            };
            a.prototype.rayTest =
                function(a, b, c) {
                    c instanceof r ? this.raycastClosest(a, b, {
                        skipBackfaces: !0
                    }, c) : this.raycastAll(a, b, {
                        skipBackfaces: !0
                    }, c)
                };
            a.prototype.raycastAll = function(a, b, c, e) {
                c.mode = y.ALL;
                c.from = a;
                c.to = b;
                c.callback = e;
                return v.intersectWorld(this, c)
            };
            a.prototype.raycastAny = function(a, b, c, e) {
                c.mode = y.ANY;
                c.from = a;
                c.to = b;
                c.result = e;
                return v.intersectWorld(this, c)
            };
            a.prototype.raycastClosest = function(a, b, c, e) {
                c.mode = y.CLOSEST;
                c.from = a;
                c.to = b;
                c.result = e;
                return v.intersectWorld(this, c)
            };
            a.prototype.remove = function(a) {
                a.world =
                    null;
                var b = this.bodies.length - 1,
                    c = this.bodies,
                    e = c.indexOf(a);
                if (-1 !== e) {
                    c.splice(e, 1);
                    for (e = 0; e !== c.length; e++) c[e].index = e;
                    this.collisionMatrix.setNumObjects(b);
                    this.removeBodyEvent.body = a;
                    this.dispatchEvent(this.removeBodyEvent)
                }
            };
            a.prototype.removeBody = a.prototype.remove;
            a.prototype.addMaterial = function(a) {
                this.materials.push(a)
            };
            a.prototype.addContactMaterial = function(a) {
                this.contactmaterials.push(a);
                this.contactMaterialTable.set(a.materials[0].id, a.materials[1].id, a)
            };
            "undefined" === typeof performance &&
                (performance = {});
            if (!performance.now) {
                var z = Date.now();
                performance.timing && performance.timing.navigationStart && (z = performance.timing.navigationStart);
                performance.now = function() {
                    return Date.now() - z
                }
            }
            var u = new e;
            a.prototype.step = function(a, b, c) {
                c = c || 10;
                b = b || 0;
                if (0 === b) this.internalStep(a), this.time += a;
                else {
                    var e = Math.floor((this.time + b) / a) - Math.floor(this.time / a);
                    e = Math.min(e, c);
                    c = performance.now();
                    for (var d = 0; d !== e && !(this.internalStep(a), performance.now() - c > 1E3 * a); d++);
                    this.time += b;
                    a = this.time % a /
                        a;
                    b = this.bodies;
                    for (e = 0; e !== b.length; e++) c = b[e], c.type !== l.STATIC && c.sleepState !== l.SLEEPING ? (c.position.vsub(c.previousPosition, u), u.scale(a, u), c.position.vadd(u, c.interpolatedPosition)) : (c.interpolatedPosition.copy(c.position), c.interpolatedQuaternion.copy(c.quaternion))
                }
            };
            var D = {
                    type: "postStep"
                },
                E = {
                    type: "preStep"
                },
                F = {
                    type: "collide",
                    body: null,
                    contact: null
                },
                t = [],
                w = [],
                B = [],
                I = [];
            new e;
            new e;
            new e;
            new e;
            new e;
            new e;
            new e;
            new e;
            new e;
            new g;
            var C = new g,
                J = new g,
                R = new e;
            a.prototype.internalStep = function(a) {
                this.dt =
                    a;
                var b = this.contacts,
                    c = this.numObjects(),
                    e = this.bodies,
                    d = this.solver,
                    f = this.gravity,
                    g = this.doProfiling,
                    k = this.profile,
                    h = l.DYNAMIC,
                    m, p = this.constraints;
                f.norm();
                var q = f.x,
                    r = f.y,
                    v = f.z;
                g && (m = performance.now());
                for (f = 0; f !== c; f++) {
                    var u = e[f];
                    if (u.type & h) {
                        var y = u.force;
                        u = u.mass;
                        y.x += u * q;
                        y.y += u * r;
                        y.z += u * v
                    }
                }
                f = 0;
                for (u = this.subsystems.length; f !== u; f++) this.subsystems[f].update();
                g && (m = performance.now());
                B.length = 0;
                I.length = 0;
                this.broadphase.collisionPairs(this, B, I);
                g && (k.broadphase = performance.now() - m);
                u =
                    p.length;
                for (f = 0; f !== u; f++)
                    if (q = p[f], !q.collideConnected)
                        for (r = B.length - 1; 0 <= r; --r)
                            if (q.bodyA === B[r] && q.bodyB === I[r] || q.bodyB === B[r] && q.bodyA === I[r]) B.splice(r, 1), I.splice(r, 1);
                this.collisionMatrixTick();
                g && (m = performance.now());
                u = b.length;
                for (f = 0; f !== u; f++) t.push(b[f]);
                b.length = 0;
                u = this.frictionEquations.length;
                for (f = 0; f !== u; f++) w.push(this.frictionEquations[f]);
                this.frictionEquations.length = 0;
                this.narrowphase.getContacts(B, I, this, b, t, this.frictionEquations, w);
                g && (k.narrowphase = performance.now() -
                    m);
                g && (m = performance.now());
                for (f = 0; f < this.frictionEquations.length; f++) d.addEquation(this.frictionEquations[f]);
                f = b.length;
                for (r = 0; r !== f; r++) q = b[r], u = q.bi, v = q.bj, u.material && v.material && this.getContactMaterial(u.material, v.material), u.material && v.material && 0 <= u.material.restitution && 0 <= v.material.restitution && (q.restitution = u.material.restitution * v.material.restitution), d.addEquation(q), u.allowSleep && u.type === l.DYNAMIC && u.sleepState === l.SLEEPING && v.sleepState === l.AWAKE && v.type !== l.STATIC && v.velocity.norm2() +
                    v.angularVelocity.norm2() >= 2 * Math.pow(v.sleepSpeedLimit, 2) && (u._wakeUpAfterNarrowphase = !0), v.allowSleep && v.type === l.DYNAMIC && v.sleepState === l.SLEEPING && u.sleepState === l.AWAKE && u.type !== l.STATIC && u.velocity.norm2() + u.angularVelocity.norm2() >= 2 * Math.pow(u.sleepSpeedLimit, 2) && (v._wakeUpAfterNarrowphase = !0), this.collisionMatrix.set(u, v, !0), this.collisionMatrixPrevious.get(u, v) || (F.body = v, F.contact = q, u.dispatchEvent(F), F.body = u, v.dispatchEvent(F));
                g && (k.makeContactConstraints = performance.now() - m, m = performance.now());
                for (f = 0; f !== c; f++) u = e[f], u._wakeUpAfterNarrowphase && (u.wakeUp(), u._wakeUpAfterNarrowphase = !1);
                u = p.length;
                for (f = 0; f !== u; f++)
                    for (q = p[f], q.update(), r = 0, b = q.equations.length; r !== b; r++) d.addEquation(q.equations[r]);
                d.solve(a, this);
                g && (k.solve = performance.now() - m);
                d.removeAllEquations();
                d = Math.pow;
                for (f = 0; f !== c; f++)
                    if (u = e[f], u.type & h && (p = d(1 - u.linearDamping, a), b = u.velocity, b.mult(p, b), p = u.angularVelocity)) b = d(1 - u.angularDamping, a), p.mult(b, p);
                this.dispatchEvent(E);
                for (f = 0; f !== c; f++) u = e[f], u.preStep && u.preStep.call(u);
                g && (m = performance.now());
                h = l.DYNAMIC | l.KINEMATIC;
                d = 0 === this.stepnumber % (this.quatNormalizeSkip + 1);
                p = this.quatNormalizeFast;
                b = .5 * a;
                for (f = 0; f !== c; f++)
                    if (u = e[f], q = u.force, r = u.torque, u.type & h && u.sleepState !== l.SLEEPING) {
                        v = u.velocity;
                        y = u.angularVelocity;
                        var z = u.position,
                            A = u.quaternion,
                            M = u.invMass,
                            ha = u.invInertiaWorld;
                        v.x += q.x * M * a;
                        v.y += q.y * M * a;
                        v.z += q.z * M * a;
                        u.angularVelocity && (ha.vmult(r, R), R.mult(a, R), R.vadd(y, y));
                        z.x += v.x * a;
                        z.y += v.y * a;
                        z.z += v.z * a;
                        u.angularVelocity && (C.set(y.x, y.y, y.z, 0), C.mult(A, J), A.x +=
                            b * J.x, A.y += b * J.y, A.z += b * J.z, A.w += b * J.w, d && (p ? A.normalizeFast() : A.normalize()));
                        u.aabb && (u.aabbNeedsUpdate = !0);
                        u.updateInertiaWorld && u.updateInertiaWorld()
                    }
                this.clearForces();
                this.broadphase.dirty = !0;
                g && (k.integrate = performance.now() - m);
                this.time += a;
                this.stepnumber += 1;
                this.dispatchEvent(D);
                for (f = 0; f !== c; f++) u = e[f], (a = u.postStep) && a.call(u);
                if (this.allowSleep)
                    for (f = 0; f !== c; f++) e[f].sleepTick(this.time)
            };
            a.prototype.clearForces = function() {
                for (var a = this.bodies, b = a.length, c = 0; c !== b; c++) {
                    var e = a[c];
                    e.force.set(0,
                        0, 0);
                    e.torque.set(0, 0, 0)
                }
            }
        }, {
            "../collision/AABB": 3,
            "../collision/ArrayCollisionMatrix": 4,
            "../collision/NaiveBroadphase": 7,
            "../collision/Ray": 9,
            "../collision/RaycastResult": 10,
            "../equations/ContactEquation": 19,
            "../equations/FrictionEquation": 21,
            "../material/ContactMaterial": 24,
            "../material/Material": 25,
            "../math/Quaternion": 28,
            "../math/Vec3": 30,
            "../objects/Body": 31,
            "../shapes/Shape": 43,
            "../solver/GSSolver": 46,
            "../utils/EventTarget": 49,
            "../utils/TupleDictionary": 52,
            "../utils/Vec3Pool": 54,
            "./Narrowphase": 55
        }]
    }, {}, [2])(2)
});
CANNON = CANNON || {};
var camera, scene, s_oRayCasterMesh;
CANNON.Demo = function(n) {
    function b() {
        if (u) {
            for (var a in u.__controllers) u.__controllers[a].updateDisplay();
            for (var b in u.__folders)
                for (a in u.__folders[b].__controllers) u.__folders[b].__controllers[a].updateDisplay()
        }
    }

    function g(a) {
        function b(a, c) {
            a.material && (a.material = c);
            for (var e = 0; e < a.children.length; e++) b(a.children[e], c)
        }
        if (-1 === U.indexOf(a)) throw Error("Render mode " + a + " not found!");
        switch (a) {
            case "solid":
                l.currentMaterial = w;
                S.intensity = 1;
                P.color.setHex(2236962);
                break;
            case "wireframe":
                l.currentMaterial =
                    B, S.intensity = 0, P.color.setHex(16777215)
        }
        for (var c = 0; c < v.length; c++) b(v[c], l.currentMaterial);
        r.rendermode = a
    }

    function h() {
        for (var a = A.length, b = 0; b < a; b++) {
            var c = A[b];
            c.position.copy(c.initPosition);
            c.velocity.copy(c.initVelocity);
            c.initAngularVelocity && (c.angularVelocity.copy(c.initAngularVelocity), c.quaternion.copy(c.initQuaternion))
        }
    }

    function a(a) {
        0 === a.x && (a.x = 1E-6);
        0 === a.y && (a.y = 1E-6);
        0 === a.z && (a.z = 1E-6)
    }

    function e() {
        for (var b = A.length, c = 0; c < b; c++) {
            var e = A[c],
                d = v[c];
            d.position.copy(e.position);
            e.quaternion && d.quaternion.copy(e.quaternion)
        }
        C.restart();
        if (r.contacts)
            for (c = 0; c < K.contacts.length; c++)
                for (b = 0; 2 > b; b++) {
                    d = C.request();
                    var f = K.contacts[c];
                    e = 0 === b ? f.bi : f.bj;
                    var g = 0 === b ? f.ri : f.rj;
                    d.position.set(e.position.x + g.x, e.position.y + g.y, e.position.z + g.z)
                }
        C.hideCached();
        J.restart();
        if (r.cm2contact)
            for (c = 0; c < K.contacts.length; c++)
                for (b = 0; 2 > b; b++) d = J.request(), f = K.contacts[c], e = 0 === b ? f.bi : f.bj, g = 0 === b ? f.ri : f.rj, d.scale.set(g.x, g.y, g.z), a(d.scale), d.position.copy(e.position);
        J.hideCached();
        L.restart();
        N.restart();
        if (r.constraints) {
            for (c = 0; c < K.constraints.length; c++) f = K.constraints[c], f instanceof CANNON.DistanceConstraint && (e = f.equations.normal, b = e.bi, e = e.bj, d = L.request(), e = e.position ? e.position : e, d.scale.set(e.x - b.position.x, e.y - b.position.y, e.z - b.position.z), a(d.scale), d.position.copy(b.position));
            for (c = 0; c < K.constraints.length; c++)
                if (f = K.constraints[c], f instanceof CANNON.PointToPointConstraint) {
                    g = f.equations.normal;
                    b = g.bi;
                    e = g.bj;
                    d = N.request();
                    f = N.request();
                    var t = N.request();
                    d.scale.set(g.ri.x,
                        g.ri.y, g.ri.z);
                    f.scale.set(g.rj.x, g.rj.y, g.rj.z);
                    t.scale.set(-g.penetrationVec.x, -g.penetrationVec.y, -g.penetrationVec.z);
                    a(d.scale);
                    a(f.scale);
                    a(t.scale);
                    d.position.copy(b.position);
                    f.position.copy(e.position);
                    g.bj.position.vadd(g.rj, t.position)
                }
        }
        N.hideCached();
        L.hideCached();
        X.restart();
        if (r.normals)
            for (c = 0; c < K.contacts.length; c++) f = K.contacts[c], b = f.bi, d = X.request(), g = f.ni, e = b, d.scale.set(g.x, g.y, g.z), a(d.scale), d.position.copy(e.position), f.ri.vadd(d.position, d.position);
        X.hideCached();
        x.restart();
        if (r.axes)
            for (b = 0; b < A.length; b++) e = A[b], d = x.request(), d.position.copy(e.position), e.quaternion && d.quaternion.copy(e.quaternion);
        x.hideCached();
        O.restart();
        if (r.aabbs)
            for (c = 0; c < A.length; c++) e = A[c], e.computeAABB && (e.aabbNeedsUpdate && e.computeAABB(), isFinite(e.aabb.lowerBound.x) && isFinite(e.aabb.lowerBound.y) && isFinite(e.aabb.lowerBound.z) && isFinite(e.aabb.upperBound.x) && isFinite(e.aabb.upperBound.y) && isFinite(e.aabb.upperBound.z) && 0 != e.aabb.lowerBound.x - e.aabb.upperBound.x && 0 != e.aabb.lowerBound.y - e.aabb.upperBound.y &&
                0 != e.aabb.lowerBound.z - e.aabb.upperBound.z && (d = O.request(), d.scale.set(e.aabb.lowerBound.x - e.aabb.upperBound.x, e.aabb.lowerBound.y - e.aabb.upperBound.y, e.aabb.lowerBound.z - e.aabb.upperBound.z), d.position.set(.5 * (e.aabb.lowerBound.x + e.aabb.upperBound.x), .5 * (e.aabb.lowerBound.y + e.aabb.upperBound.y), .5 * (e.aabb.lowerBound.z + e.aabb.upperBound.z))));
        O.hideCached()
    }

    function c() {
        requestAnimationFrame(c);
        if (!r.paused) {
            e();
            var a = 1 / r.stepFrequency,
                b = Date.now() / 1E3;
            Z ? K.step(a, b - Z, r.maxSubSteps) : K.step(a);
            Z = b
        }
        MOVE_CAMERA_TEST &&
            W.update();
        Y.clear();
        Y.render(l.scene, camera);
        G.update()
    }

    function f(a) {}

    function k(a) {
        T = s_iCanvasResizeWidth + 2 * s_iCanvasOffsetWidth;
        H = s_iCanvasResizeHeight + 2 * s_iCanvasOffsetHeight;
        MOVE_CAMERA_TEST && (W.screen.width = T, W.screen.height = H)
    }

    function d(a) {
        l.dispatchEvent({
            type: "destroy"
        });
        r.paused = !1;
        b();
        p(a)
    }

    function p(a) {
        for (var c = v.length, e = 0; e < c; e++) {
            K.remove(A.pop());
            var d = v.pop();
            l.scene.remove(d)
        }
        for (; K.constraints.length;) K.removeConstraint(K.constraints[0]);
        z[a]();
        r.iterations = K.solver.iterations;
        r.gx = K.gravity.x + 0;
        r.gy = K.gravity.y + 0;
        r.gz = K.gravity.z + 0;
        r.quatNormalizeSkip = K.quatNormalizeSkip;
        r.quatNormalizeFast = K.quatNormalizeFast;
        b();
        C.restart();
        C.hideCached();
        J.restart();
        J.hideCached();
        L.restart();
        L.hideCached();
        X.restart();
        X.hideCached()
    }

    function m(a) {
        var b = [],
            c = [];
        this.request = function() {
            geo = b.length ? b.pop() : a();
            scene.add(geo);
            c.push(geo);
            return geo
        };
        this.restart = function() {
            for (; c.length;) b.push(c.pop())
        };
        this.hideCached = function() {
            for (var a = 0; a < b.length; a++) scene.remove(b[a])
        }
    }
    var l =
        this;
    this.addScene = function(a, b) {
        if ("string" !== typeof a) throw Error("1st argument of Demo.addScene(title,initfunc) must be a string!");
        if ("function" !== typeof b) throw Error("2nd argument of Demo.addScene(title,initfunc) must be a function!");
        z.push(b);
        var c = z.length - 1;
        F[a] = function() {
            d(c)
        };
        q.add(F, a)
    };
    this.restartCurrentScene = h;
    this.changeScene = d;
    this.start = function() {
        p(0)
    };
    var q, r = this.settings = {
        stepFrequency: 60,
        quatNormalizeSkip: 2,
        quatNormalizeFast: !0,
        gx: 0,
        gy: 0,
        gz: 0,
        iterations: 3,
        tolerance: 1E-4,
        k: 1E6,
        d: 3,
        scene: 0,
        paused: !1,
        rendermode: "solid",
        constraints: !1,
        contacts: !1,
        cm2contact: !1,
        normals: !1,
        axes: !1,
        particleSize: .1,
        shadows: !1,
        aabbs: !1,
        profiling: !1,
        maxSubSteps: 3
    };
    n = n || {};
    for (var y in n) y in r && (r[y] = n[y]);
    if (0 !== r.stepFrequency % 60) throw Error("stepFrequency must be a multiple of 60.");
    var A = this.bodies = [],
        v = this.visuals = [],
        z = [],
        u = null,
        D = null,
        E = null,
        F = {},
        t = new THREE.SphereGeometry(.1, 6, 6);
    this.particleGeo = new THREE.SphereGeometry(1, 16, 8);
    var w = new THREE.MeshPhongMaterial({
            color: 11184810,
            specular: 1118481,
            shininess: 100
        }),
        B = new THREE.MeshLambertMaterial({
            color: 16777215,
            wireframe: !0
        });
    this.currentMaterial = w;
    var I = new THREE.MeshPhongMaterial({
        color: 16711680
    });
    this.particleMaterial = new THREE.MeshLambertMaterial({
        color: 16711680
    });
    var C = new m(function() {
            return new THREE.Mesh(t, I)
        }),
        J = new m(function() {
            var a = new THREE.Geometry;
            a.vertices.push(new THREE.Vector3(0, 0, 0));
            a.vertices.push(new THREE.Vector3(1, 1, 1));
            return new THREE.Line(a, new THREE.LineBasicMaterial({
                color: 16711680
            }))
        }),
        R = new THREE.BoxGeometry(1,
            1, 1),
        M = new THREE.MeshBasicMaterial({
            color: 11184810,
            wireframe: !0
        }),
        O = new m(function() {
            return new THREE.Mesh(R, M)
        }),
        L = new m(function() {
            var a = new THREE.Geometry;
            a.vertices.push(new THREE.Vector3(0, 0, 0));
            a.vertices.push(new THREE.Vector3(1, 1, 1));
            return new THREE.Line(a, new THREE.LineBasicMaterial({
                color: 16711680
            }))
        }),
        N = new m(function() {
            var a = new THREE.Geometry;
            a.vertices.push(new THREE.Vector3(0, 0, 0));
            a.vertices.push(new THREE.Vector3(1, 1, 1));
            return new THREE.Line(a, new THREE.LineBasicMaterial({
                color: 16711680
            }))
        }),
        X = new m(function() {
            var a = new THREE.Geometry;
            a.vertices.push(new THREE.Vector3(0, 0, 0));
            a.vertices.push(new THREE.Vector3(1, 1, 1));
            return new THREE.Line(a, new THREE.LineBasicMaterial({
                color: 65280
            }))
        }),
        x = new m(function() {
            var a = new THREE.Object3D,
                b = new THREE.Vector3(0, 0, 0),
                c = new THREE.Geometry,
                e = new THREE.Geometry,
                d = new THREE.Geometry;
            c.vertices.push(b);
            e.vertices.push(b);
            d.vertices.push(b);
            c.vertices.push(new THREE.Vector3(1, 0, 0));
            e.vertices.push(new THREE.Vector3(0, 1, 0));
            d.vertices.push(new THREE.Vector3(0,
                0, 1));
            b = new THREE.Line(c, new THREE.LineBasicMaterial({
                color: 16711680
            }));
            e = new THREE.Line(e, new THREE.LineBasicMaterial({
                color: 65280
            }));
            d = new THREE.Line(d, new THREE.LineBasicMaterial({
                color: 255
            }));
            a.add(b);
            a.add(e);
            a.add(d);
            return a
        }),
        K = this.world = new CANNON.World;
    K.broadphase = new CANNON.NaiveBroadphase;
    var U = ["solid", "wireframe"],
        S, P, G, Q;
    Detector.webgl || Detector.addGetWebGLMessage();
    var T = s_iCanvasResizeWidth + 2 * s_iCanvasOffsetWidth,
        H = s_iCanvasResizeHeight + 2 * s_iCanvasOffsetHeight,
        W, Y, V;
    (function() {
        V =
            document.createElement("div");
        document.body.appendChild(V);
        camera = s_oGame.getCamera();
        scene = l.scene = new THREE.Scene;
        scene.fog = new THREE.Fog(2236962, 1E3, FAR);
        P = new THREE.AmbientLight(4473924);
        scene.add(P);
        S = new THREE.DirectionalLight(16777164, 1);
        S.position.set(200, -160, 200);
        S.target.position.set(0, 0, 0);
        S.castShadow = !0;
        S.shadow.camera.near = 10;
        S.shadow.camera.far = 100;
        S.shadow.camera.fov = 30;
        S.shadowMapBias = .0139;
        S.shadowMapDarkness = .1;
        S.shadow.mapSize.width = 1024;
        S.shadow.mapSize.height = 1024;
        scene.add(S);
        scene.add(camera);
        var a = new THREE.PlaneBufferGeometry(500, 500, 50, 50);
        s_oRayCasterMesh = new THREE.Mesh(a, new THREE.MeshLambertMaterial({
            color: 16777215 * Math.random()
        }));
        Y = SHOW_3D_RENDER ? new THREE.WebGLRenderer({
            clearColor: 0,
            clearAlpha: .5,
            antialias: !1,
            alpha: !0
        }) : new THREE.CanvasRenderer({
            clearColor: 0,
            clearAlpha: .5,
            antialias: !1,
            alpha: !0
        });
        Y.setSize(T, H);
        Y.domElement.style.position = "relative";
        Y.domElement.style.top = "0px";
        Y.domElement.style.opacity = CANVAS_3D_OPACITY;
        V.appendChild(Y.domElement);
        Q = document.createElement("div");
        Q.style.position = "absolute";
        Q.style.top = "10px";
        Q.style.width = "100%";
        Q.style.textAlign = "center";
        Q.innerHTML = '<a href="http://github.com/schteppe/cannon.js">cannon.js</a> - javascript 3d physics';
        V.appendChild(Q);
        document.addEventListener("mousemove", f);
        window.addEventListener("resize", k);
        Y.setClearColor(scene.fog.color, 1);
        Y.autoClear = !1;
        E = document.createElement("canvas");
        E.width = T;
        E.height = H;
        E.style.opacity = .5;
        E.style.position = "absolute";
        E.style.top = "0px";
        E.style.zIndex = 90;
        V.appendChild(E);
        D = new SmoothieChart({
            labelOffsetY: 50,
            maxDataSetLength: 100,
            millisPerPixel: 2,
            grid: {
                strokeStyle: "none",
                fillStyle: "none",
                lineWidth: 1,
                millisPerLine: 250,
                verticalSections: 6
            },
            labels: {
                fillStyle: "rgb(180, 180, 180)"
            }
        });
        D.streamTo(E);
        var b = {};
        a = [
            [255, 0, 0],
            [0, 255, 0],
            [0, 0, 255],
            [255, 255, 0],
            [255, 0, 255],
            [0, 255, 255]
        ];
        var c = 0;
        for (d in K.profile) {
            var e = a[c % a.length];
            b[d] = new TimeSeries({
                label: d,
                fillStyle: "rgb(" + e[0] + "," + e[1] + "," + e[2] + ")",
                maxDataLength: 500
            });
            c++
        }
        K.addEventListener("postStep", function(a) {
            for (var c in K.profile) b[c].append(1E3 * K.time, K.profile[c])
        });
        c = 0;
        for (d in K.profile) e = a[c % a.length], D.addTimeSeries(b[d], {
            strokeStyle: "rgb(" + e[0] + "," + e[1] + "," + e[2] + ")",
            lineWidth: 2
        }), c++;
        K.doProfiling = !1;
        D.stop();
        E.style.display = "none";
        G = new Stats;
        G.domElement.style.position = "absolute";
        G.domElement.style.top = "0px";
        G.domElement.style.zIndex = 100;
        V.appendChild(G.domElement);
        if (void 0 != window.dat) {
            u = new dat.GUI;
            u.domElement.parentNode.style.zIndex = 120;
            var d = u.addFolder("Rendering");
            d.add(r, "rendermode", {
                Solid: "solid",
                Wireframe: "wireframe"
            }).onChange(function(a) {
                g(a)
            });
            d.add(r, "contacts");
            d.add(r, "cm2contact");
            d.add(r, "normals");
            d.add(r, "constraints");
            d.add(r, "axes");
            d.add(r, "particleSize").min(0).max(1).onChange(function(a) {
                for (var b = 0; b < v.length; b++) A[b] instanceof CANNON.Particle && v[b].scale.set(a, a, a)
            });
            d.add(r, "shadows").onChange(function(a) {
                a ? Y.shadowMapAutoUpdate = !0 : (Y.shadowMapAutoUpdate = !1, Y.clearTarget(S.shadowMap))
            });
            d.add(r, "aabbs");
            d.add(r, "profiling").onChange(function(a) {
                a ? (K.doProfiling = !0, D.start(), E.style.display = "block") : (K.doProfiling = !1, D.stop(),
                    E.style.display = "none")
            });
            d = u.addFolder("World");
            d.add(r, "paused").onChange(function(a) {});
            d.add(r, "stepFrequency", 60, 600).step(60);
            d.add(r, "gx", -100, 100).onChange(function(a) {
                isNaN(a) || K.gravity.set(a, r.gy, r.gz)
            });
            d.add(r, "gy", -100, 100).onChange(function(a) {
                isNaN(a) || K.gravity.set(r.gx, a, r.gz)
            });
            d.add(r, "gz", -100, 100).onChange(function(a) {
                isNaN(a) || K.gravity.set(r.gx, r.gy, a)
            });
            d.add(r, "quatNormalizeSkip", 0, 50).step(1).onChange(function(a) {
                isNaN(a) || (K.quatNormalizeSkip = a)
            });
            d.add(r, "quatNormalizeFast").onChange(function(a) {
                K.quatNormalizeFast = !!a
            });
            d = u.addFolder("Solver");
            d.add(r, "iterations", 1, 50).step(1).onChange(function(a) {
                K.solver.iterations = a
            });
            d.add(r, "k", 10, 1E7).onChange(function(a) {
                l.setGlobalSpookParams(r.k, r.d, 1 / r.stepFrequency)
            });
            d.add(r, "d", 0, 20).step(.1).onChange(function(a) {
                l.setGlobalSpookParams(r.k, r.d, 1 / r.stepFrequency)
            });
            d.add(r, "tolerance", 0, 10).step(.01).onChange(function(a) {
                K.solver.tolerance = a
            });
            q = u.addFolder("Scenes");
            q.open()
        }
        MOVE_CAMERA_TEST && (W = new THREE.TrackballControls(camera, Y.domElement), W.rotateSpeed = 1,
            W.zoomSpeed = 1.2, W.panSpeed = .2, W.noZoom = !1, W.noPan = !1, W.staticMoving = !1, W.dynamicDampingFactor = .3, W.minDistance = 0, W.maxDistance = 1E5, W.keys = [65, 83, 68], W.screen.width = T, W.screen.height = H)
    })();
    c();
    var Z = 0;
    document.addEventListener("keypress", function(a) {
        if (a.keyCode) switch (a.keyCode) {
            case 32:
                h();
                break;
            case 104:
                "none" == G.domElement.style.display ? (G.domElement.style.display = "block", Q.style.display = "block") : (G.domElement.style.display = "none", Q.style.display = "none");
                break;
            case 97:
                r.aabbs = !r.aabbs;
                b();
                break;
            case 99:
                r.constraints = !r.constraints;
                b();
                break;
            case 112:
                r.paused = !r.paused;
                b();
                break;
            case 115:
                K.step(1 / r.stepFrequency);
                e();
                break;
            case 109:
                a = U.indexOf(r.rendermode);
                a++;
                a %= U.length;
                g(U[a]);
                b();
                break;
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
                z.length > a.keyCode - 49 && !document.activeElement.localName.match(/input/) && d(a.keyCode - 49)
        }
    })
};
CANNON.Demo.prototype = new CANNON.EventTarget;
CANNON.Demo.constructor = CANNON.Demo;
CANNON.Demo.prototype.setGlobalSpookParams = function(n, b, g) {
    for (var h = this.world, a = 0; a < h.constraints.length; a++)
        for (var e = h.constraints[a], c = 0; c < e.equations.length; c++) e.equations[c].setSpookParams(n, b, g);
    for (a = 0; a < h.contactmaterials.length; a++) g = h.contactmaterials[a], g.contactEquationStiffness = n, g.frictionEquationStiffness = n, g.contactEquationRelaxation = b, g.frictionEquationRelaxation = b;
    h.defaultContactMaterial.contactEquationStiffness = n;
    h.defaultContactMaterial.frictionEquationStiffness = n;
    h.defaultContactMaterial.contactEquationRelaxation =
        b;
    h.defaultContactMaterial.frictionEquationRelaxation = b
};
CANNON.Demo.prototype.getWorld = function() {
    return this.world
};
CANNON.Demo.prototype.addVisual = function(n, b) {
    var g;
    n instanceof CANNON.Body && (g = this.shape2mesh(n, b));
    g && (this.bodies.push(n), this.visuals.push(g), n.visualref = g, n.visualref.visualId = this.bodies.length - 1, this.scene.add(g));
    return g
};
CANNON.Demo.prototype.addVisuals = function(n) {
    for (var b = 0; b < n.length; b++) this.addVisual(n[b])
};
CANNON.Demo.prototype.removeVisual = function(n) {
    if (n.visualref) {
        for (var b = this.bodies, g = this.visuals, h = [], a = [], e = b.length, c = 0; c < e; c++) h.unshift(b.pop()), a.unshift(g.pop());
        e = n.visualref.visualId;
        for (var f = 0; f < h.length; f++) f !== e && (c = f > e ? f - 1 : f, b[c] = h[f], g[c] = a[f], b[c].visualref = h[f].visualref, b[c].visualref.visualId = c);
        n.visualref.visualId = null;
        this.scene.remove(n.visualref);
        n.visualref = null
    }
};
CANNON.Demo.prototype.removeAllVisuals = function() {
    for (; this.bodies.length;) this.removeVisual(this.bodies[0])
};
CANNON.Demo.prototype.shape2mesh = function(n, b) {
    for (var g = new THREE.Object3D, h = 0; h < n.shapes.length; h++) {
        var a = n.shapes[h];
        switch (a.type) {
            case CANNON.Shape.types.SPHERE:
                var e = new THREE.SphereGeometry(a.radius, 8, 8);
                a = new THREE.Mesh(e, this.currentMaterial);
                break;
            case CANNON.Shape.types.PARTICLE:
                a = new THREE.Mesh(this.particleGeo, this.particleMaterial);
                e = this.settings;
                a.scale.set(e.particleSize, e.particleSize, e.particleSize);
                break;
            case CANNON.Shape.types.PLANE:
                var c = new THREE.PlaneGeometry(10, 10, 4, 4);
                a =
                    new THREE.Object3D;
                e = new THREE.Object3D;
                c = new THREE.Mesh(c, this.currentMaterial);
                c.scale.set(100, 100, 100);
                e.add(c);
                c.castShadow = !0;
                c.receiveShadow = !0;
                a.add(e);
                break;
            case CANNON.Shape.types.BOX:
                e = new THREE.BoxGeometry(2 * a.halfExtents.x, 2 * a.halfExtents.y, 2 * a.halfExtents.z);
                a = new THREE.Mesh(e, this.currentMaterial);
                break;
            case CANNON.Shape.types.CONVEXPOLYHEDRON:
                c = new THREE.Geometry;
                for (e = 0; e < a.vertices.length; e++) {
                    var f = a.vertices[e];
                    c.vertices.push(new THREE.Vector3(f.x, f.y, f.z))
                }
                for (e = 0; e < a.faces.length; e++) {
                    var k =
                        a.faces[e],
                        d = k[0];
                    for (f = 1; f < k.length - 1; f++) c.faces.push(new THREE.Face3(d, k[f], k[f + 1]))
                }
                c.computeBoundingSphere();
                c.computeFaceNormals();
                a = new THREE.Mesh(c, this.currentMaterial);
                break;
            case CANNON.Shape.types.HEIGHTFIELD:
                c = new THREE.Geometry;
                k = new CANNON.Vec3;
                d = new CANNON.Vec3;
                var p = new CANNON.Vec3;
                for (f = 0; f < a.data.length - 1; f++)
                    for (var m = 0; m < a.data[f].length - 1; m++)
                        for (var l = 0; 2 > l; l++) a.getConvexTrianglePillar(f, m, 0 === l), k.copy(a.pillarConvex.vertices[0]), d.copy(a.pillarConvex.vertices[1]), p.copy(a.pillarConvex.vertices[2]),
                            k.vadd(a.pillarOffset, k), d.vadd(a.pillarOffset, d), p.vadd(a.pillarOffset, p), c.vertices.push(new THREE.Vector3(k.x, k.y, k.z), new THREE.Vector3(d.x, d.y, d.z), new THREE.Vector3(p.x, p.y, p.z)), e = c.vertices.length - 3, c.faces.push(new THREE.Face3(e, e + 1, e + 2));
                c.computeBoundingSphere();
                c.computeFaceNormals();
                a = new THREE.Mesh(c, this.currentMaterial);
                break;
            case CANNON.Shape.types.TRIMESH:
                c = new THREE.Geometry;
                k = new CANNON.Vec3;
                d = new CANNON.Vec3;
                p = new CANNON.Vec3;
                for (e = 0; e < a.indices.length / 3; e++) a.getTriangleVertices(e,
                    k, d, p), c.vertices.push(new THREE.Vector3(k.x, k.y, k.z), new THREE.Vector3(d.x, d.y, d.z), new THREE.Vector3(p.x, p.y, p.z)), f = c.vertices.length - 3, c.faces.push(new THREE.Face3(f, f + 1, f + 2));
                c.computeBoundingSphere();
                c.computeFaceNormals();
                e = 11184810;
                b && (e = b);
                e = new THREE.MeshPhongMaterial({
                    color: e,
                    specular: 1118481,
                    shininess: 100
                });
                a = new THREE.Mesh(c, e);
                break;
            default:
                throw "Visual type not recognized: " + a.type;
        }
        a.receiveShadow = !0;
        a.castShadow = !0;
        if (a.children)
            for (e = 0; e < a.children.length; e++)
                if (a.children[e].castShadow = !0, a.children[e].receiveShadow = !0, a.children[e])
                    for (f = 0; f < a.children[e].length; f++) a.children[e].children[f].castShadow = !0, a.children[e].children[f].receiveShadow = !0;
        e = n.shapeOffsets[h];
        c = n.shapeOrientations[h];
        a.position.set(e.x, e.y, e.z);
        a.quaternion.set(c.x, c.y, c.z, c.w);
        g.add(a)
    }
    this.camera = function() {
        return camera
    };
    this.getScene = function() {
        return scene
    };
    return g
};
Detector = {
    canvas: !!window.CanvasRenderingContext2D,
    webgl: function() {
        try {
            return !!window.WebGLRenderingContext && !!document.createElement("canvas").getContext("experimental-webgl")
        } catch (n) {
            return !1
        }
    }(),
    workers: !!window.Worker,
    fileapi: window.File && window.FileReader && window.FileList && window.Blob,
    getWebGLErrorMessage: function() {
        var n = document.createElement("div");
        n.id = "webgl-error-message";
        n.style.fontFamily = "monospace";
        n.style.fontSize = "13px";
        n.style.fontWeight = "normal";
        n.style.textAlign = "center";
        n.style.background =
            "#fff";
        n.style.color = "#000";
        n.style.padding = "1.5em";
        n.style.width = "400px";
        n.style.margin = "5em auto 0";
        this.webgl || (n.innerHTML = window.WebGLRenderingContext ? 'Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br />\nFind out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.' : 'Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br/>\nFind out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.');
        return n
    },
    addGetWebGLMessage: function(n) {
        n = n || {};
        var b = void 0 !== n.parent ? n.parent : document.body;
        n = void 0 !== n.id ? n.id : "oldie";
        var g = Detector.getWebGLErrorMessage();
        g.id = n;
        b.appendChild(g)
    }
};

function TimeSeries(n) {
    n = n || {};
    n.resetBoundsInterval = n.resetBoundsInterval || 3E3;
    n.resetBounds = void 0 === n.resetBounds ? !0 : n.resetBounds;
    this.options = n;
    this.data = [];
    this.label = n.label || "";
    this.maxDataLength = n.maxDataLength || 1E3;
    this.dataPool = [];
    this.minValue = this.maxValue = Number.NaN;
    n.resetBounds && (this.boundsTimer = setInterval(function(b) {
        return function() {
            b.resetBounds()
        }
    }(this), n.resetBoundsInterval))
}
TimeSeries.prototype.resetBounds = function() {
    this.minValue = this.maxValue = Number.NaN;
    for (var n = 0; n < this.data.length; n++) this.maxValue = isNaN(this.maxValue) ? this.data[n][1] : Math.max(this.maxValue, this.data[n][1]), this.minValue = isNaN(this.minValue) ? this.data[n][1] : Math.min(this.minValue, this.data[n][1])
};
TimeSeries.prototype.append = function(n, b) {
    this.lastTimeStamp = n;
    var g = this.dataPool.length ? this.dataPool.pop() : [n, b];
    g[0] = n;
    g[1] = b;
    this.data.push(g);
    this.maxValue = isNaN(this.maxValue) ? b : Math.max(this.maxValue, b);
    for (this.minValue = isNaN(this.minValue) ? b : Math.min(this.minValue, b); this.data.length > this.maxDataLength;) this.dataPool.push(this.data.shift())
};

function SmoothieChart(n) {
    n = n || {};
    n.grid = n.grid || {
        fillStyle: "#000000",
        strokeStyle: "#777777",
        lineWidth: 1,
        millisPerLine: 1E3,
        verticalSections: 2
    };
    n.millisPerPixel = n.millisPerPixel || 20;
    n.fps = n.fps || 50;
    n.maxValueScale = n.maxValueScale || 1;
    n.minValue = n.minValue;
    n.maxValue = n.maxValue;
    n.labels = n.labels || {
        fillStyle: "#ffffff"
    };
    n.interpolation = n.interpolation || "bezier";
    n.scaleSmoothing = n.scaleSmoothing || .125;
    n.maxDataSetLength = n.maxDataSetLength || 2;
    n.timestampFormatter = n.timestampFormatter || null;
    this.options = n;
    this.seriesSet = [];
    this.currentValueRange = 1;
    this.currentVisMinValue = 0
}
SmoothieChart.prototype.addTimeSeries = function(n, b) {
    this.seriesSet.push({
        timeSeries: n,
        options: b || {}
    })
};
SmoothieChart.prototype.removeTimeSeries = function(n) {
    this.seriesSet.splice(this.seriesSet.indexOf(n), 1)
};
SmoothieChart.prototype.streamTo = function(n, b) {
    var g = this;
    this.render_on_tick = function() {
        g.render(n, g.seriesSet[0].timeSeries.lastTimeStamp)
    };
    this.start()
};
SmoothieChart.prototype.start = function() {
    this.timer || (this.timer = setInterval(this.render_on_tick, 1E3 / this.options.fps))
};
SmoothieChart.prototype.stop = function() {
    this.timer && (clearInterval(this.timer), this.timer = void 0)
};
SmoothieChart.timeFormatter = function(n) {
    function b(b) {
        return (10 > b ? "0" : "") + b
    }
    return b(n.getHours()) + ":" + b(n.getMinutes()) + ":" + b(n.getSeconds())
};
SmoothieChart.prototype.render = function(n, b) {
    var g = n.getContext("2d"),
        h = this.options,
        a = n.clientWidth,
        e = n.clientHeight;
    g.save();
    b -= b % h.millisPerPixel;
    g.translate(0, 0);
    g.beginPath();
    g.rect(0, 0, a, e);
    g.clip();
    g.save();
    g.fillStyle = h.grid.fillStyle;
    g.clearRect(0, 0, a, e);
    g.fillRect(0, 0, a, e);
    g.restore();
    g.save();
    g.lineWidth = h.grid.lineWidth || 1;
    g.strokeStyle = h.grid.strokeStyle || "#ffffff";
    if (0 < h.grid.millisPerLine)
        for (var c = b - b % h.grid.millisPerLine; c >= b - a * h.millisPerPixel; c -= h.grid.millisPerLine) {
            g.beginPath();
            var f = Math.round(a - (b - c) / h.millisPerPixel);
            g.moveTo(f, 0);
            g.lineTo(f, e);
            g.stroke();
            if (h.timestampFormatter) {
                var k = h.timestampFormatter(new Date(c)),
                    d = g.measureText(k).width / 2 + g.measureText(z).width + 4;
                f < a - d && (g.fillStyle = h.labels.fillStyle, g.fillText(k, f - g.measureText(k).width / 2, e - 2))
            }
            g.closePath()
        }
    for (z = 1; z < h.grid.verticalSections; z++) c = Math.round(z * e / h.grid.verticalSections), g.beginPath(), g.moveTo(0, c), g.lineTo(a, c), g.stroke(), g.closePath();
    g.beginPath();
    g.strokeRect(0, 0, a, e);
    g.closePath();
    g.restore();
    z = f = Number.NaN;
    for (k = 0; k < this.seriesSet.length; k++) {
        var p = this.seriesSet[k].timeSeries;
        isNaN(p.maxValue) || (f = isNaN(f) ? p.maxValue : Math.max(f, p.maxValue));
        isNaN(p.minValue) || (z = isNaN(z) ? p.minValue : Math.min(z, p.minValue))
    }
    if (!isNaN(f) || !isNaN(z)) {
        f = null != h.maxValue ? h.maxValue : f * h.maxValueScale;
        null != h.minValue && (z = h.minValue);
        this.currentValueRange += h.scaleSmoothing * (f - z - this.currentValueRange);
        this.currentVisMinValue += h.scaleSmoothing * (z - this.currentVisMinValue);
        d = this.currentValueRange;
        var m = this.currentVisMinValue;
        for (k = 0; k < this.seriesSet.length; k++) {
            g.save();
            p = this.seriesSet[k].timeSeries;
            p = p.data;
            for (var l = this.seriesSet[k].options; p.length >= h.maxDataSetLength && p[1][0] < b - a * h.millisPerPixel;) p.splice(0, 1);
            g.lineWidth = l.lineWidth || 1;
            g.fillStyle = l.fillStyle;
            g.strokeStyle = l.strokeStyle || "#ffffff";
            g.beginPath();
            var q = 0,
                r = 0,
                y = 0;
            for (c = 0; c < p.length; c++) {
                var A = Math.round(a - (b - p[c][0]) / h.millisPerPixel),
                    v = p[c][1] - m;
                v = Math.max(Math.min(e - (d ? Math.round(v / d * e) : 0), e - 1), 1);
                if (0 == c) q = A, g.moveTo(A, v);
                else switch (h.interpolation) {
                    case "line":
                        g.lineTo(A,
                            v);
                        break;
                    default:
                        g.bezierCurveTo(Math.round((r + A) / 2), y, Math.round(r + A) / 2, v, A, v)
                }
                r = A;
                y = v
            }
            0 < p.length && l.fillStyle && (g.lineTo(a + l.lineWidth + 1, y), g.lineTo(a + l.lineWidth + 1, e + l.lineWidth + 1), g.lineTo(q, e + l.lineWidth), g.fill());
            g.stroke();
            g.closePath();
            g.restore()
        }
        if (!h.labels.disabled) {
            h.labelOffsetY || (h.labelOffsetY = 0);
            g.fillStyle = h.labels.fillStyle;
            c = parseFloat(f).toFixed(2);
            var z = parseFloat(z).toFixed(2);
            g.fillText(c, a - g.measureText(c).width - 2, 10);
            g.fillText(z, a - g.measureText(z).width - 2, e - 2);
            for (c = 0; c <
                this.seriesSet.length; c++) p = this.seriesSet[c].timeSeries, a = p.label, g.fillStyle = p.options.fillStyle || "rgb(255,255,255)", a && g.fillText(a, 2, 10 * (c + 1) + h.labelOffsetY)
        }
    }
    g.restore()
};
var Stats = function() {
    var n = 0,
        b = 0,
        g = Date.now(),
        h = g,
        a = g,
        e = 0,
        c = 1E3,
        f = 0,
        k = [
            [16, 16, 48],
            [0, 255, 255]
        ],
        d = 0,
        p = 1E3,
        m = 0,
        l = [
            [16, 48, 16],
            [0, 255, 0]
        ];
    var q = document.createElement("div");
    q.style.cursor = "pointer";
    q.style.width = "80px";
    q.style.opacity = "0.9";
    q.style.zIndex = "10001";
    q.addEventListener("mousedown", function(a) {
        a.preventDefault();
        n = (n + 1) % 2;
        0 == n ? (r.style.display = "block", z.style.display = "none") : (r.style.display = "none", z.style.display = "block")
    }, !1);
    var r = document.createElement("div");
    r.style.textAlign = "left";
    r.style.lineHeight = "1.2em";
    r.style.backgroundColor = "rgb(" + Math.floor(k[0][0] / 2) + "," + Math.floor(k[0][1] / 2) + "," + Math.floor(k[0][2] / 2) + ")";
    r.style.padding = "0 0 3px 3px";
    q.appendChild(r);
    var y = document.createElement("div");
    y.style.fontFamily = "Helvetica, Arial, sans-serif";
    y.style.fontSize = "9px";
    y.style.color = "rgb(" + k[1][0] + "," + k[1][1] + "," + k[1][2] + ")";
    y.style.fontWeight = "bold";
    y.innerHTML = "FPS";
    r.appendChild(y);
    var A = document.createElement("div");
    A.style.position = "relative";
    A.style.width = "74px";
    A.style.height =
        "30px";
    A.style.backgroundColor = "rgb(" + k[1][0] + "," + k[1][1] + "," + k[1][2] + ")";
    for (r.appendChild(A); 74 > A.children.length;) {
        var v = document.createElement("span");
        v.style.width = "1px";
        v.style.height = "30px";
        v.style.cssFloat = "left";
        v.style.backgroundColor = "rgb(" + k[0][0] + "," + k[0][1] + "," + k[0][2] + ")";
        A.appendChild(v)
    }
    var z = document.createElement("div");
    z.style.textAlign = "left";
    z.style.lineHeight = "1.2em";
    z.style.backgroundColor = "rgb(" + Math.floor(l[0][0] / 2) + "," + Math.floor(l[0][1] / 2) + "," + Math.floor(l[0][2] / 2) + ")";
    z.style.padding = "0 0 3px 3px";
    z.style.display = "none";
    q.appendChild(z);
    var u = document.createElement("div");
    u.style.fontFamily = "Helvetica, Arial, sans-serif";
    u.style.fontSize = "9px";
    u.style.color = "rgb(" + l[1][0] + "," + l[1][1] + "," + l[1][2] + ")";
    u.style.fontWeight = "bold";
    u.innerHTML = "MS";
    z.appendChild(u);
    var D = document.createElement("div");
    D.style.position = "relative";
    D.style.width = "74px";
    D.style.height = "30px";
    D.style.backgroundColor = "rgb(" + l[1][0] + "," + l[1][1] + "," + l[1][2] + ")";
    for (z.appendChild(D); 74 > D.children.length;) v =
        document.createElement("span"), v.style.width = "1px", v.style.height = 30 * Math.random() + "px", v.style.cssFloat = "left", v.style.backgroundColor = "rgb(" + l[0][0] + "," + l[0][1] + "," + l[0][2] + ")", D.appendChild(v);
    return {
        domElement: q,
        update: function() {
            g = Date.now();
            d = g - h;
            p = Math.min(p, d);
            m = Math.max(m, d);
            u.textContent = d + " MS (" + p + "-" + m + ")";
            var k = Math.min(30, 30 - d / 200 * 30);
            D.appendChild(D.firstChild).style.height = k + "px";
            h = g;
            b++;
            g > a + 1E3 && (e = Math.round(1E3 * b / (g - a)), c = Math.min(c, e), f = Math.max(f, e), y.textContent = e + " FPS (" +
                c + "-" + f + ")", k = Math.min(30, 30 - e / 100 * 30), A.appendChild(A.firstChild).style.height = k + "px", a = g, b = 0)
        }
    }
};
THREE.TrackballControls = function(n, b) {
    function g(a) {
        !1 !== c.enabled && (window.removeEventListener("keydown", g), p = d, d === f.NONE) && (a.keyCode !== c.keys[f.ROTATE] || c.noRotate ? a.keyCode !== c.keys[f.ZOOM] || c.noZoom ? a.keyCode !== c.keys[f.PAN] || c.noPan || (d = f.PAN) : d = f.ZOOM : d = f.ROTATE)
    }

    function h(a) {
        !1 !== c.enabled && (a.preventDefault(), a.stopPropagation(), d !== f.ROTATE || c.noRotate ? d !== f.ZOOM || c.noZoom ? d !== f.PAN || c.noPan || u.copy(t(a.pageX, a.pageY)) : y.copy(t(a.pageX, a.pageY)) : q.copy(w(a.pageX, a.pageY)))
    }

    function a(b) {
        !1 !==
            c.enabled && (b.preventDefault(), b.stopPropagation(), d = f.NONE, document.removeEventListener("mousemove", h), document.removeEventListener("mouseup", a), c.dispatchEvent(F))
    }

    function e(a) {
        if (!1 !== c.enabled) {
            a.preventDefault();
            a.stopPropagation();
            var b = 0;
            a.wheelDelta ? b = a.wheelDelta / 40 : a.detail && (b = -a.detail / 3);
            r.y += .01 * b;
            c.dispatchEvent(E);
            c.dispatchEvent(F)
        }
    }
    var c = this,
        f = {
            NONE: -1,
            ROTATE: 0,
            ZOOM: 1,
            PAN: 2,
            TOUCH_ROTATE: 3,
            TOUCH_ZOOM_PAN: 4
        };
    this.object = n;
    this.domElement = void 0 !== b ? b : document;
    this.enabled = !0;
    this.screen = {
        left: 0,
        top: 0,
        width: 0,
        height: 0
    };
    this.rotateSpeed = 1;
    this.zoomSpeed = 1.2;
    this.panSpeed = .3;
    this.staticMoving = this.noRoll = this.noPan = this.noZoom = this.noRotate = !1;
    this.dynamicDampingFactor = .2;
    this.minDistance = 0;
    this.maxDistance = Infinity;
    this.keys = [65, 83, 68];
    this.target = new THREE.Vector3;
    var k = new THREE.Vector3,
        d = f.NONE,
        p = f.NONE,
        m = new THREE.Vector3,
        l = new THREE.Vector3,
        q = new THREE.Vector3,
        r = new THREE.Vector2,
        y = new THREE.Vector2,
        A = 0,
        v = 0,
        z = new THREE.Vector2,
        u = new THREE.Vector2;
    this.target0 = this.target.clone();
    this.position0 = this.object.position.clone();
    this.up0 = this.object.up.clone();
    var D = {
            type: "change"
        },
        E = {
            type: "start"
        },
        F = {
            type: "end"
        };
    this.handleResize = function() {
        if (this.domElement === document) this.screen.left = 0, this.screen.top = 0, this.screen.width = window.innerWidth, this.screen.height = window.innerHeight;
        else {
            var a = this.domElement.getBoundingClientRect(),
                b = this.domElement.ownerDocument.documentElement;
            this.screen.left = a.left + window.pageXOffset - b.clientLeft;
            this.screen.top = a.top + window.pageYOffset - b.clientTop;
            this.screen.width = a.width;
            this.screen.height = a.height
        }
    };
    this.handleEvent = function(a) {
        if ("function" == typeof this[a.type]) this[a.type](a)
    };
    var t = function() {
            var a = new THREE.Vector2;
            return function(b, e) {
                a.set((b - c.screen.left) / c.screen.width, (e - c.screen.top) / c.screen.height);
                return a
            }
        }(),
        w = function() {
            var a = new THREE.Vector3,
                b = new THREE.Vector3,
                e = new THREE.Vector3;
            return function(d, f) {
                e.set((d - .5 * c.screen.width - c.screen.left) / (.5 * c.screen.width), (.5 * c.screen.height + c.screen.top - f) / (.5 * c.screen.height),
                    0);
                var g = e.length();
                c.noRoll ? e.z = g < Math.SQRT1_2 ? Math.sqrt(1 - g * g) : .5 / g : 1 < g ? e.normalize() : e.z = Math.sqrt(1 - g * g);
                m.copy(c.object.position).sub(c.target);
                a.copy(c.object.up).setLength(e.y);
                a.add(b.copy(c.object.up).cross(m).setLength(e.x));
                a.add(m.setLength(e.z));
                return a
            }
        }();
    this.rotateCamera = function() {
        var a = new THREE.Vector3,
            b = new THREE.Quaternion;
        return function() {
            var e = Math.acos(l.dot(q) / l.length() / q.length());
            e && (a.crossVectors(l, q).normalize(), e *= c.rotateSpeed, b.setFromAxisAngle(a, -e), m.applyQuaternion(b),
                c.object.up.applyQuaternion(b), q.applyQuaternion(b), c.staticMoving ? l.copy(q) : (b.setFromAxisAngle(a, e * (c.dynamicDampingFactor - 1)), l.applyQuaternion(b)))
        }
    }();
    this.zoomCamera = function() {
        if (d === f.TOUCH_ZOOM_PAN) {
            var a = A / v;
            A = v;
            m.multiplyScalar(a)
        } else a = 1 + (y.y - r.y) * c.zoomSpeed, 1 !== a && 0 < a && (m.multiplyScalar(a), c.staticMoving ? r.copy(y) : r.y += (y.y - r.y) * this.dynamicDampingFactor)
    };
    this.panCamera = function() {
        var a = new THREE.Vector2,
            b = new THREE.Vector3,
            e = new THREE.Vector3;
        return function() {
            a.copy(u).sub(z);
            a.lengthSq() &&
                (a.multiplyScalar(m.length() * c.panSpeed), e.copy(m).cross(c.object.up).setLength(a.x), e.add(b.copy(c.object.up).setLength(a.y)), c.object.position.add(e), c.target.add(e), c.staticMoving ? z.copy(u) : z.add(a.subVectors(u, z).multiplyScalar(c.dynamicDampingFactor)))
        }
    }();
    this.checkDistances = function() {
        c.noZoom && c.noPan || (m.lengthSq() > c.maxDistance * c.maxDistance && c.object.position.addVectors(c.target, m.setLength(c.maxDistance)), m.lengthSq() < c.minDistance * c.minDistance && c.object.position.addVectors(c.target,
            m.setLength(c.minDistance)))
    };
    this.update = function() {
        m.subVectors(c.object.position, c.target);
        c.noRotate || c.rotateCamera();
        c.noZoom || c.zoomCamera();
        c.noPan || c.panCamera();
        c.object.position.addVectors(c.target, m);
        c.checkDistances();
        c.object.lookAt(c.target);
        1E-6 < k.distanceToSquared(c.object.position) && (c.dispatchEvent(D), k.copy(c.object.position))
    };
    this.reset = function() {
        p = d = f.NONE;
        c.target.copy(c.target0);
        c.object.position.copy(c.position0);
        c.object.up.copy(c.up0);
        m.subVectors(c.object.position, c.target);
        c.object.lookAt(c.target);
        c.dispatchEvent(D);
        k.copy(c.object.position)
    };
    this.domElement.addEventListener("contextmenu", function(a) {
        a.preventDefault()
    }, !1);
    this.domElement.addEventListener("mousedown", function(b) {
        !1 !== c.enabled && (b.preventDefault(), b.stopPropagation(), d === f.NONE && (d = b.button), d !== f.ROTATE || c.noRotate ? d !== f.ZOOM || c.noZoom ? d !== f.PAN || c.noPan || (z.copy(t(b.pageX, b.pageY)), u.copy(z)) : (r.copy(t(b.pageX, b.pageY)), y.copy(r)) : (l.copy(w(b.pageX, b.pageY)), q.copy(l)), document.addEventListener("mousemove",
            h, !1), document.addEventListener("mouseup", a, !1), c.dispatchEvent(E))
    }, !1);
    this.domElement.addEventListener("mousewheel", e, !1);
    this.domElement.addEventListener("DOMMouseScroll", e, !1);
    this.domElement.addEventListener("touchstart", function(a) {
        if (!1 !== c.enabled) {
            switch (a.touches.length) {
                case 1:
                    d = f.TOUCH_ROTATE;
                    l.copy(w(a.touches[0].pageX, a.touches[0].pageY));
                    q.copy(l);
                    break;
                case 2:
                    d = f.TOUCH_ZOOM_PAN;
                    var b = a.touches[0].pageX - a.touches[1].pageX,
                        e = a.touches[0].pageY - a.touches[1].pageY;
                    v = A = Math.sqrt(b * b + e *
                        e);
                    z.copy(t((a.touches[0].pageX + a.touches[1].pageX) / 2, (a.touches[0].pageY + a.touches[1].pageY) / 2));
                    u.copy(z);
                    break;
                default:
                    d = f.NONE
            }
            c.dispatchEvent(E)
        }
    }, !1);
    this.domElement.addEventListener("touchend", function(a) {
        if (!1 !== c.enabled) {
            switch (a.touches.length) {
                case 1:
                    q.copy(w(a.touches[0].pageX, a.touches[0].pageY));
                    l.copy(q);
                    break;
                case 2:
                    A = v = 0, u.copy(t((a.touches[0].pageX + a.touches[1].pageX) / 2, (a.touches[0].pageY + a.touches[1].pageY) / 2)), z.copy(u)
            }
            d = f.NONE;
            c.dispatchEvent(F)
        }
    }, !1);
    this.domElement.addEventListener("touchmove",
        function(a) {
            if (!1 !== c.enabled) switch (a.preventDefault(), a.stopPropagation(), a.touches.length) {
                case 1:
                    q.copy(w(a.touches[0].pageX, a.touches[0].pageY));
                    break;
                case 2:
                    var b = a.touches[0].pageX - a.touches[1].pageX,
                        e = a.touches[0].pageY - a.touches[1].pageY;
                    v = Math.sqrt(b * b + e * e);
                    u.copy(t((a.touches[0].pageX + a.touches[1].pageX) / 2, (a.touches[0].pageY + a.touches[1].pageY) / 2));
                    break;
                default:
                    d = f.NONE
            }
        }, !1);
    window.addEventListener("keydown", g, !1);
    window.addEventListener("keyup", function(a) {
        !1 !== c.enabled && (d = p, window.addEventListener("keydown",
            g, !1))
    }, !1);
    this.handleResize();
    this.update()
};
THREE.TrackballControls.prototype = Object.create(THREE.EventDispatcher.prototype);
var dat = dat || {};
dat.gui = dat.gui || {};
dat.utils = dat.utils || {};
dat.controllers = dat.controllers || {};
dat.dom = dat.dom || {};
dat.color = dat.color || {};
dat.utils.css = function() {
    return {
        load: function(n, b) {
            b = b || document;
            var g = b.createElement("link");
            g.type = "text/css";
            g.rel = "stylesheet";
            g.href = n;
            b.getElementsByTagName("head")[0].appendChild(g)
        },
        inject: function(n, b) {
            b = b || document;
            var g = document.createElement("style");
            g.type = "text/css";
            g.innerHTML = n;
            b.getElementsByTagName("head")[0].appendChild(g)
        }
    }
}();
dat.utils.common = function() {
    var n = Array.prototype.forEach,
        b = Array.prototype.slice;
    return {
        BREAK: {},
        extend: function(g) {
            this.each(b.call(arguments, 1), function(b) {
                for (var a in b) this.isUndefined(b[a]) || (g[a] = b[a])
            }, this);
            return g
        },
        defaults: function(g) {
            this.each(b.call(arguments, 1), function(b) {
                for (var a in b) this.isUndefined(g[a]) && (g[a] = b[a])
            }, this);
            return g
        },
        compose: function() {
            var g = b.call(arguments);
            return function() {
                for (var h = b.call(arguments), a = g.length - 1; 0 <= a; a--) h = [g[a].apply(this, h)];
                return h[0]
            }
        },
        each: function(b, h, a) {
            if (n && b.forEach === n) b.forEach(h, a);
            else if (b.length === b.length + 0)
                for (var e = 0, c = b.length; e < c && !(e in b && h.call(a, b[e], e) === this.BREAK); e++);
            else
                for (e in b)
                    if (h.call(a, b[e], e) === this.BREAK) break
        },
        defer: function(b) {
            setTimeout(b, 0)
        },
        toArray: function(g) {
            return g.toArray ? g.toArray() : b.call(g)
        },
        isUndefined: function(b) {
            return void 0 === b
        },
        isNull: function(b) {
            return null === b
        },
        isNaN: function(b) {
            return b !== b
        },
        isArray: Array.isArray || function(b) {
            return b.constructor === Array
        },
        isObject: function(b) {
            return b ===
                Object(b)
        },
        isNumber: function(b) {
            return b === b + 0
        },
        isString: function(b) {
            return b === b + ""
        },
        isBoolean: function(b) {
            return !1 === b || !0 === b
        },
        isFunction: function(b) {
            return "[object Function]" === Object.prototype.toString.call(b)
        }
    }
}();
dat.controllers.Controller = function(n) {
    var b = function(b, h) {
        this.initialValue = b[h];
        this.domElement = document.createElement("div");
        this.object = b;
        this.property = h;
        this.__onFinishChange = this.__onChange = void 0
    };
    n.extend(b.prototype, {
        onChange: function(b) {
            this.__onChange = b;
            return this
        },
        onFinishChange: function(b) {
            this.__onFinishChange = b;
            return this
        },
        setValue: function(b) {
            this.object[this.property] = b;
            this.__onChange && this.__onChange.call(this, b);
            this.updateDisplay();
            return this
        },
        getValue: function() {
            return this.object[this.property]
        },
        updateDisplay: function() {
            return this
        },
        isModified: function() {
            return this.initialValue !== this.getValue()
        }
    });
    return b
}(dat.utils.common);
dat.dom.dom = function(n) {
    function b(a) {
        if ("0" === a || n.isUndefined(a)) return 0;
        a = a.match(h);
        return n.isNull(a) ? 0 : parseFloat(a[1])
    }
    var g = {};
    n.each({
        HTMLEvents: ["change"],
        MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"],
        KeyboardEvents: ["keydown"]
    }, function(a, b) {
        n.each(a, function(a) {
            g[a] = b
        })
    });
    var h = /(\d+(\.\d+)?)px/,
        a = {
            makeSelectable: function(a, b) {
                void 0 !== a && void 0 !== a.style && (a.onselectstart = b ? function() {
                        return !1
                    } : function() {}, a.style.MozUserSelect = b ? "auto" : "none", a.style.KhtmlUserSelect =
                    b ? "auto" : "none", a.unselectable = b ? "on" : "off")
            },
            makeFullscreen: function(a, b, f) {
                n.isUndefined(b) && (b = !0);
                n.isUndefined(f) && (f = !0);
                a.style.position = "absolute";
                b && (a.style.left = 0, a.style.right = 0);
                f && (a.style.top = 0, a.style.bottom = 0)
            },
            fakeEvent: function(a, b, f, k) {
                f = f || {};
                var c = g[b];
                if (!c) throw Error("Event type " + b + " not supported.");
                var e = document.createEvent(c);
                switch (c) {
                    case "MouseEvents":
                        e.initMouseEvent(b, f.bubbles || !1, f.cancelable || !0, window, f.clickCount || 1, 0, 0, f.x || f.clientX || 0, f.y || f.clientY || 0, !1, !1, !1, !1, 0, null);
                        break;
                    case "KeyboardEvents":
                        c = e.initKeyboardEvent || e.initKeyEvent;
                        n.defaults(f, {
                            cancelable: !0,
                            ctrlKey: !1,
                            altKey: !1,
                            shiftKey: !1,
                            metaKey: !1,
                            keyCode: void 0,
                            charCode: void 0
                        });
                        c(b, f.bubbles || !1, f.cancelable, window, f.ctrlKey, f.altKey, f.shiftKey, f.metaKey, f.keyCode, f.charCode);
                        break;
                    default:
                        e.initEvent(b, f.bubbles || !1, f.cancelable || !0)
                }
                n.defaults(e, k);
                a.dispatchEvent(e)
            },
            bind: function(b, c, f, g) {
                b.addEventListener ? b.addEventListener(c, f, g || !1) : b.attachEvent && b.attachEvent("on" + c, f);
                return a
            },
            unbind: function(b, c, f, g) {
                b.removeEventListener ? b.removeEventListener(c, f, g || !1) : b.detachEvent && b.detachEvent("on" + c, f);
                return a
            },
            addClass: function(b, c) {
                if (void 0 === b.className) b.className = c;
                else if (b.className !== c) {
                    var e = b.className.split(/ +/); - 1 == e.indexOf(c) && (e.push(c), b.className = e.join(" ").replace(/^\s+/, "").replace(/\s+$/, ""))
                }
                return a
            },
            removeClass: function(b, c) {
                if (c) {
                    if (void 0 !== b.className)
                        if (b.className === c) b.removeAttribute("class");
                        else {
                            var e = b.className.split(/ +/),
                                g = e.indexOf(c); - 1 !=
                                g && (e.splice(g, 1), b.className = e.join(" "))
                        }
                } else b.className = void 0;
                return a
            },
            hasClass: function(a, b) {
                return (new RegExp("(?:^|\\s+)" + b + "(?:\\s+|$)")).test(a.className) || !1
            },
            getWidth: function(a) {
                a = getComputedStyle(a);
                return b(a["border-left-width"]) + b(a["border-right-width"]) + b(a["padding-left"]) + b(a["padding-right"]) + b(a.width)
            },
            getHeight: function(a) {
                a = getComputedStyle(a);
                return b(a["border-top-width"]) + b(a["border-bottom-width"]) + b(a["padding-top"]) + b(a["padding-bottom"]) + b(a.height)
            },
            getOffset: function(a) {
                var b = {
                    left: 0,
                    top: 0
                };
                if (a.offsetParent) {
                    do b.left += a.offsetLeft, b.top += a.offsetTop; while (a = a.offsetParent)
                }
                return b
            },
            isActive: function(a) {
                return a === document.activeElement && (a.type || a.href)
            }
        };
    return a
}(dat.utils.common);
dat.controllers.OptionController = function(n, b, g) {
    var h = function(a, e, c) {
        h.superclass.call(this, a, e);
        var f = this;
        this.__select = document.createElement("select");
        if (g.isArray(c)) {
            var k = {};
            g.each(c, function(a) {
                k[a] = a
            });
            c = k
        }
        g.each(c, function(a, b) {
            var c = document.createElement("option");
            c.innerHTML = b;
            c.setAttribute("value", a);
            f.__select.appendChild(c)
        });
        this.updateDisplay();
        b.bind(this.__select, "change", function() {
            f.setValue(this.options[this.selectedIndex].value)
        });
        this.domElement.appendChild(this.__select)
    };
    h.superclass = n;
    g.extend(h.prototype, n.prototype, {
        setValue: function(a) {
            a = h.superclass.prototype.setValue.call(this, a);
            this.__onFinishChange && this.__onFinishChange.call(this, this.getValue());
            return a
        },
        updateDisplay: function() {
            this.__select.value = this.getValue();
            return h.superclass.prototype.updateDisplay.call(this)
        }
    });
    return h
}(dat.controllers.Controller, dat.dom.dom, dat.utils.common);
dat.controllers.NumberController = function(n, b) {
    var g = function(h, a, e) {
        g.superclass.call(this, h, a);
        e = e || {};
        this.__min = e.min;
        this.__max = e.max;
        this.__step = e.step;
        b.isUndefined(this.__step) ? this.__impliedStep = 0 == this.initialValue ? 1 : Math.pow(10, Math.floor(Math.log(this.initialValue) / Math.LN10)) / 10 : this.__impliedStep = this.__step;
        h = this.__impliedStep;
        h = h.toString();
        h = -1 < h.indexOf(".") ? h.length - h.indexOf(".") - 1 : 0;
        this.__precision = h
    };
    g.superclass = n;
    b.extend(g.prototype, n.prototype, {
        setValue: function(b) {
            void 0 !==
                this.__min && b < this.__min ? b = this.__min : void 0 !== this.__max && b > this.__max && (b = this.__max);
            void 0 !== this.__step && 0 != b % this.__step && (b = Math.round(b / this.__step) * this.__step);
            return g.superclass.prototype.setValue.call(this, b)
        },
        min: function(b) {
            this.__min = b;
            return this
        },
        max: function(b) {
            this.__max = b;
            return this
        },
        step: function(b) {
            this.__step = b;
            return this
        }
    });
    return g
}(dat.controllers.Controller, dat.utils.common);
dat.controllers.NumberControllerBox = function(n, b, g) {
    var h = function(a, e, c) {
        function f() {
            var a = parseFloat(n.__input.value);
            g.isNaN(a) || n.setValue(a)
        }

        function k(a) {
            var b = m - a.clientY;
            n.setValue(n.getValue() + b * n.__impliedStep);
            m = a.clientY
        }

        function d() {
            b.unbind(window, "mousemove", k);
            b.unbind(window, "mouseup", d)
        }
        this.__truncationSuspended = !1;
        h.superclass.call(this, a, e, c);
        var n = this,
            m;
        this.__input = document.createElement("input");
        this.__input.setAttribute("type", "text");
        b.bind(this.__input, "change", f);
        b.bind(this.__input,
            "blur",
            function() {
                f();
                n.__onFinishChange && n.__onFinishChange.call(n, n.getValue())
            });
        b.bind(this.__input, "mousedown", function(a) {
            b.bind(window, "mousemove", k);
            b.bind(window, "mouseup", d);
            m = a.clientY
        });
        b.bind(this.__input, "keydown", function(a) {
            13 === a.keyCode && (n.__truncationSuspended = !0, this.blur(), n.__truncationSuspended = !1)
        });
        this.updateDisplay();
        this.domElement.appendChild(this.__input)
    };
    h.superclass = n;
    g.extend(h.prototype, n.prototype, {
        updateDisplay: function() {
            var a = this.__input;
            if (this.__truncationSuspended) var b =
                this.getValue();
            else {
                b = this.getValue();
                var c = Math.pow(10, this.__precision);
                b = Math.round(b * c) / c
            }
            a.value = b;
            return h.superclass.prototype.updateDisplay.call(this)
        }
    });
    return h
}(dat.controllers.NumberController, dat.dom.dom, dat.utils.common);
dat.controllers.NumberControllerSlider = function(n, b, g, h, a) {
    function e(a, b, c, e, g) {
        return e + (a - b) / (c - b) * (g - e)
    }
    var c = function(a, g, d, h, m) {
        function f(a) {
            a.preventDefault();
            var c = b.getOffset(n.__background),
                d = b.getWidth(n.__background);
            n.setValue(e(a.clientX, c.left, c.left + d, n.__min, n.__max));
            return !1
        }

        function k() {
            b.unbind(window, "mousemove", f);
            b.unbind(window, "mouseup", k);
            n.__onFinishChange && n.__onFinishChange.call(n, n.getValue())
        }
        c.superclass.call(this, a, g, {
            min: d,
            max: h,
            step: m
        });
        var n = this;
        this.__background =
            document.createElement("div");
        this.__foreground = document.createElement("div");
        b.bind(this.__background, "mousedown", function(a) {
            b.bind(window, "mousemove", f);
            b.bind(window, "mouseup", k);
            f(a)
        });
        b.addClass(this.__background, "slider");
        b.addClass(this.__foreground, "slider-fg");
        this.updateDisplay();
        this.__background.appendChild(this.__foreground);
        this.domElement.appendChild(this.__background)
    };
    c.superclass = n;
    c.useDefaultStyles = function() {
        g.inject(a)
    };
    h.extend(c.prototype, n.prototype, {
        updateDisplay: function() {
            var a =
                (this.getValue() - this.__min) / (this.__max - this.__min);
            this.__foreground.style.width = 100 * a + "%";
            return c.superclass.prototype.updateDisplay.call(this)
        }
    });
    return c
}(dat.controllers.NumberController, dat.dom.dom, dat.utils.css, dat.utils.common, ".slider {\n  box-shadow: inset 0 2px 4px rgba(0,0,0,0.15);\n  height: 1em;\n  border-radius: 1em;\n  background-color: #eee;\n  padding: 0 0.5em;\n  overflow: hidden;\n}\n\n.slider-fg {\n  padding: 1px 0 2px 0;\n  background-color: #aaa;\n  height: 1em;\n  margin-left: -0.5em;\n  padding-right: 0.5em;\n  border-radius: 1em 0 0 1em;\n}\n\n.slider-fg:after {\n  display: inline-block;\n  border-radius: 1em;\n  background-color: #fff;\n  border:  1px solid #aaa;\n  content: '';\n  float: right;\n  margin-right: -1em;\n  margin-top: -1px;\n  height: 0.9em;\n  width: 0.9em;\n}");
dat.controllers.FunctionController = function(n, b, g) {
    var h = function(a, e, c) {
        h.superclass.call(this, a, e);
        var f = this;
        this.__button = document.createElement("div");
        this.__button.innerHTML = void 0 === c ? "Fire" : c;
        b.bind(this.__button, "click", function(a) {
            a.preventDefault();
            f.fire();
            return !1
        });
        b.addClass(this.__button, "button");
        this.domElement.appendChild(this.__button)
    };
    h.superclass = n;
    g.extend(h.prototype, n.prototype, {
        fire: function() {
            this.__onChange && this.__onChange.call(this);
            this.__onFinishChange && this.__onFinishChange.call(this,
                this.getValue());
            this.getValue().call(this.object)
        }
    });
    return h
}(dat.controllers.Controller, dat.dom.dom, dat.utils.common);
dat.controllers.BooleanController = function(n, b, g) {
    var h = function(a, e) {
        h.superclass.call(this, a, e);
        var c = this;
        this.__prev = this.getValue();
        this.__checkbox = document.createElement("input");
        this.__checkbox.setAttribute("type", "checkbox");
        b.bind(this.__checkbox, "change", function() {
            c.setValue(!c.__prev)
        }, !1);
        this.domElement.appendChild(this.__checkbox);
        this.updateDisplay()
    };
    h.superclass = n;
    g.extend(h.prototype, n.prototype, {
        setValue: function(a) {
            a = h.superclass.prototype.setValue.call(this, a);
            this.__onFinishChange &&
                this.__onFinishChange.call(this, this.getValue());
            this.__prev = this.getValue();
            return a
        },
        updateDisplay: function() {
            !0 === this.getValue() ? (this.__checkbox.setAttribute("checked", "checked"), this.__checkbox.checked = !0) : this.__checkbox.checked = !1;
            return h.superclass.prototype.updateDisplay.call(this)
        }
    });
    return h
}(dat.controllers.Controller, dat.dom.dom, dat.utils.common);
dat.color.toString = function(n) {
    return function(b) {
        if (1 == b.a || n.isUndefined(b.a)) {
            for (b = b.hex.toString(16); 6 > b.length;) b = "0" + b;
            return "#" + b
        }
        return "rgba(" + Math.round(b.r) + "," + Math.round(b.g) + "," + Math.round(b.b) + "," + b.a + ")"
    }
}(dat.utils.common);
dat.color.interpret = function(n, b) {
    var g, h, a = [{
        litmus: b.isString,
        conversions: {
            THREE_CHAR_HEX: {
                read: function(a) {
                    a = a.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
                    return null === a ? !1 : {
                        space: "HEX",
                        hex: parseInt("0x" + a[1].toString() + a[1].toString() + a[2].toString() + a[2].toString() + a[3].toString() + a[3].toString())
                    }
                },
                write: n
            },
            SIX_CHAR_HEX: {
                read: function(a) {
                    a = a.match(/^#([A-F0-9]{6})$/i);
                    return null === a ? !1 : {
                        space: "HEX",
                        hex: parseInt("0x" + a[1].toString())
                    }
                },
                write: n
            },
            CSS_RGB: {
                read: function(a) {
                    a = a.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
                    return null === a ? !1 : {
                        space: "RGB",
                        r: parseFloat(a[1]),
                        g: parseFloat(a[2]),
                        b: parseFloat(a[3])
                    }
                },
                write: n
            },
            CSS_RGBA: {
                read: function(a) {
                    a = a.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
                    return null === a ? !1 : {
                        space: "RGB",
                        r: parseFloat(a[1]),
                        g: parseFloat(a[2]),
                        b: parseFloat(a[3]),
                        a: parseFloat(a[4])
                    }
                },
                write: n
            }
        }
    }, {
        litmus: b.isNumber,
        conversions: {
            HEX: {
                read: function(a) {
                    return {
                        space: "HEX",
                        hex: a,
                        conversionName: "HEX"
                    }
                },
                write: function(a) {
                    return a.hex
                }
            }
        }
    }, {
        litmus: b.isArray,
        conversions: {
            RGB_ARRAY: {
                read: function(a) {
                    return 3 !=
                        a.length ? !1 : {
                            space: "RGB",
                            r: a[0],
                            g: a[1],
                            b: a[2]
                        }
                },
                write: function(a) {
                    return [a.r, a.g, a.b]
                }
            },
            RGBA_ARRAY: {
                read: function(a) {
                    return 4 != a.length ? !1 : {
                        space: "RGB",
                        r: a[0],
                        g: a[1],
                        b: a[2],
                        a: a[3]
                    }
                },
                write: function(a) {
                    return [a.r, a.g, a.b, a.a]
                }
            }
        }
    }, {
        litmus: b.isObject,
        conversions: {
            RGBA_OBJ: {
                read: function(a) {
                    return b.isNumber(a.r) && b.isNumber(a.g) && b.isNumber(a.b) && b.isNumber(a.a) ? {
                        space: "RGB",
                        r: a.r,
                        g: a.g,
                        b: a.b,
                        a: a.a
                    } : !1
                },
                write: function(a) {
                    return {
                        r: a.r,
                        g: a.g,
                        b: a.b,
                        a: a.a
                    }
                }
            },
            RGB_OBJ: {
                read: function(a) {
                    return b.isNumber(a.r) &&
                        b.isNumber(a.g) && b.isNumber(a.b) ? {
                            space: "RGB",
                            r: a.r,
                            g: a.g,
                            b: a.b
                        } : !1
                },
                write: function(a) {
                    return {
                        r: a.r,
                        g: a.g,
                        b: a.b
                    }
                }
            },
            HSVA_OBJ: {
                read: function(a) {
                    return b.isNumber(a.h) && b.isNumber(a.s) && b.isNumber(a.v) && b.isNumber(a.a) ? {
                        space: "HSV",
                        h: a.h,
                        s: a.s,
                        v: a.v,
                        a: a.a
                    } : !1
                },
                write: function(a) {
                    return {
                        h: a.h,
                        s: a.s,
                        v: a.v,
                        a: a.a
                    }
                }
            },
            HSV_OBJ: {
                read: function(a) {
                    return b.isNumber(a.h) && b.isNumber(a.s) && b.isNumber(a.v) ? {
                        space: "HSV",
                        h: a.h,
                        s: a.s,
                        v: a.v
                    } : !1
                },
                write: function(a) {
                    return {
                        h: a.h,
                        s: a.s,
                        v: a.v
                    }
                }
            }
        }
    }];
    return function() {
        h = !1;
        var e = 1 < arguments.length ? b.toArray(arguments) : arguments[0];
        b.each(a, function(a) {
            if (a.litmus(e)) return b.each(a.conversions, function(a, c) {
                g = a.read(e);
                if (!1 === h && !1 !== g) return h = g, g.conversionName = c, g.conversion = a, b.BREAK
            }), b.BREAK
        });
        return h
    }
}(dat.color.toString, dat.utils.common);
dat.GUI = dat.gui.GUI = function(n, b, g, h, a, e, c, f, k, d, p, m, l, q, r) {
    function y(b, c, d, e) {
        if (void 0 === c[d]) throw Error("Object " + c + ' has no property "' + d + '"');
        e.color ? c = new p(c, d) : (c = [c, d].concat(e.factoryArgs), c = h.apply(b, c));
        e.before instanceof a && (e.before = e.before.__li);
        z(b, c);
        q.addClass(c.domElement, "c");
        d = document.createElement("span");
        q.addClass(d, "property-name");
        d.innerHTML = c.property;
        var f = document.createElement("div");
        f.appendChild(d);
        f.appendChild(c.domElement);
        e = A(b, f, e.before);
        q.addClass(e, L.CLASS_CONTROLLER_ROW);
        q.addClass(e, typeof c.getValue());
        v(b, e, c);
        b.__controllers.push(c);
        return c
    }

    function A(a, b, c) {
        var d = document.createElement("li");
        b && d.appendChild(b);
        c ? a.__ul.insertBefore(d, params.before) : a.__ul.appendChild(d);
        a.onResize();
        return d
    }

    function v(a, b, d) {
        d.__li = b;
        d.__gui = a;
        r.extend(d, {
            options: function(b) {
                if (1 < arguments.length) return d.remove(), y(a, d.object, d.property, {
                    before: d.__li.nextElementSibling,
                    factoryArgs: [r.toArray(arguments)]
                });
                if (r.isArray(b) || r.isObject(b)) return d.remove(), y(a, d.object, d.property, {
                    before: d.__li.nextElementSibling,
                    factoryArgs: [b]
                })
            },
            name: function(a) {
                d.__li.firstElementChild.firstElementChild.innerHTML = a;
                return d
            },
            listen: function() {
                d.__gui.listen(d);
                return d
            },
            remove: function() {
                d.__gui.remove(d);
                return d
            }
        });
        if (d instanceof k) {
            var g = new f(d.object, d.property, {
                min: d.__min,
                max: d.__max,
                step: d.__step
            });
            r.each(["updateDisplay", "onChange", "onFinishChange"], function(a) {
                var b = d[a],
                    c = g[a];
                d[a] = g[a] = function() {
                    var a = Array.prototype.slice.call(arguments);
                    b.apply(d, a);
                    return c.apply(g, a)
                }
            });
            q.addClass(b, "has-slider");
            d.domElement.insertBefore(g.domElement, d.domElement.firstElementChild)
        } else if (d instanceof f) {
            var t = function(b) {
                return r.isNumber(d.__min) && r.isNumber(d.__max) ? (d.remove(), y(a, d.object, d.property, {
                    before: d.__li.nextElementSibling,
                    factoryArgs: [d.__min, d.__max, d.__step]
                })) : b
            };
            d.min = r.compose(t, d.min);
            d.max = r.compose(t, d.max)
        } else d instanceof e ? (q.bind(b, "click", function() {
                q.fakeEvent(d.__checkbox, "click")
            }), q.bind(d.__checkbox, "click", function(a) {
                a.stopPropagation()
            })) :
            d instanceof c ? (q.bind(b, "click", function() {
                q.fakeEvent(d.__button, "click")
            }), q.bind(b, "mouseover", function() {
                q.addClass(d.__button, "hover")
            }), q.bind(b, "mouseout", function() {
                q.removeClass(d.__button, "hover")
            })) : d instanceof p && (q.addClass(b, "color"), d.updateDisplay = r.compose(function(a) {
                b.style.borderLeftColor = d.__color.toString();
                return a
            }, d.updateDisplay), d.updateDisplay());
        d.setValue = r.compose(function(b) {
            a.getRoot().__preset_select && d.isModified() && w(a.getRoot(), !0);
            return b
        }, d.setValue)
    }

    function z(a,
        b) {
        var c = a.getRoot(),
            d = c.__rememberedObjects.indexOf(b.object);
        if (-1 != d) {
            var e = c.__rememberedObjectIndecesToControllers[d];
            void 0 === e && (e = {}, c.__rememberedObjectIndecesToControllers[d] = e);
            e[b.property] = b;
            if (c.load && c.load.remembered) {
                c = c.load.remembered;
                if (c[a.preset]) c = c[a.preset];
                else if (c.Default) c = c.Default;
                else return;
                c[d] && void 0 !== c[d][b.property] && (d = c[d][b.property], b.initialValue = d, b.setValue(d))
            }
        }
    }

    function u(a) {
        var b = a.__save_row = document.createElement("li");
        q.addClass(a.domElement, "has-save");
        a.__ul.insertBefore(b, a.__ul.firstChild);
        q.addClass(b, "save-row");
        var c = document.createElement("span");
        c.innerHTML = "&nbsp;";
        q.addClass(c, "button gears");
        var d = document.createElement("span");
        d.innerHTML = "Save";
        q.addClass(d, "button");
        q.addClass(d, "save");
        var e = document.createElement("span");
        e.innerHTML = "New";
        q.addClass(e, "button");
        q.addClass(e, "save-as");
        var f = document.createElement("span");
        f.innerHTML = "Revert";
        q.addClass(f, "button");
        q.addClass(f, "revert");
        var g = a.__preset_select = document.createElement("select");
        a.load && a.load.remembered ? r.each(a.load.remembered, function(b, c) {
            t(a, c, c == a.preset)
        }) : t(a, "Default", !1);
        q.bind(g, "change", function() {
            for (var b = 0; b < a.__preset_select.length; b++) a.__preset_select[b].innerHTML = a.__preset_select[b].value;
            a.preset = this.value
        });
        b.appendChild(g);
        b.appendChild(c);
        b.appendChild(d);
        b.appendChild(e);
        b.appendChild(f);
        if (I) {
            var k = function() {
                h.style.display = a.useLocalStorage ? "block" : "none"
            };
            b = document.getElementById("dg-save-locally");
            var h = document.getElementById("dg-local-explain");
            b.style.display = "block";
            b = document.getElementById("dg-local-storage");
            "true" === localStorage.getItem(document.location.href + ".isLocal") && b.setAttribute("checked", "checked");
            k();
            q.bind(b, "change", function() {
                a.useLocalStorage = !a.useLocalStorage;
                k()
            })
        }
        var l = document.getElementById("dg-new-constructor");
        q.bind(l, "keydown", function(a) {
            !a.metaKey || 67 !== a.which && 67 != a.keyCode || C.hide()
        });
        q.bind(c, "click", function() {
            l.innerHTML = JSON.stringify(a.getSaveObject(), void 0, 2);
            C.show();
            l.focus();
            l.select()
        });
        q.bind(d,
            "click",
            function() {
                a.save()
            });
        q.bind(e, "click", function() {
            var b = prompt("Enter a new preset name.");
            b && a.saveAs(b)
        });
        q.bind(f, "click", function() {
            a.revert()
        })
    }

    function D(a) {
        function b(b) {
            b.preventDefault();
            e = b.clientX;
            q.addClass(a.__closeButton, L.CLASS_DRAG);
            q.bind(window, "mousemove", c);
            q.bind(window, "mouseup", d);
            return !1
        }

        function c(b) {
            b.preventDefault();
            a.width += e - b.clientX;
            a.onResize();
            e = b.clientX;
            return !1
        }

        function d() {
            q.removeClass(a.__closeButton, L.CLASS_DRAG);
            q.unbind(window, "mousemove", c);
            q.unbind(window,
                "mouseup", d)
        }
        a.__resize_handle = document.createElement("div");
        r.extend(a.__resize_handle.style, {
            width: "6px",
            marginLeft: "-3px",
            height: "200px",
            cursor: "ew-resize",
            position: "absolute"
        });
        var e;
        q.bind(a.__resize_handle, "mousedown", b);
        q.bind(a.__closeButton, "mousedown", b);
        a.domElement.insertBefore(a.__resize_handle, a.domElement.firstElementChild)
    }

    function E(a, b) {
        a.domElement.style.width = b + "px";
        a.__save_row && a.autoPlace && (a.__save_row.style.width = b + "px");
        a.__closeButton && (a.__closeButton.style.width = b + "px")
    }

    function F(a, b) {
        var c = {};
        r.each(a.__rememberedObjects, function(d, e) {
            var f = {};
            r.each(a.__rememberedObjectIndecesToControllers[e], function(a, c) {
                f[c] = b ? a.initialValue : a.getValue()
            });
            c[e] = f
        });
        return c
    }

    function t(a, b, c) {
        var d = document.createElement("option");
        d.innerHTML = b;
        d.value = b;
        a.__preset_select.appendChild(d);
        c && (a.__preset_select.selectedIndex = a.__preset_select.length - 1)
    }

    function w(a, b) {
        var c = a.__preset_select[a.__preset_select.selectedIndex];
        c.innerHTML = b ? c.value + "*" : c.value
    }

    function B(a) {
        0 != a.length &&
            m(function() {
                B(a)
            });
        r.each(a, function(a) {
            a.updateDisplay()
        })
    }
    n.inject(g);
    try {
        var I = "localStorage" in window && null !== window.localStorage
    } catch (N) {
        I = !1
    }
    var C, J = !0,
        R, M = !1,
        O = [],
        L = function(a) {
            function b() {
                localStorage.setItem(document.location.href + ".gui", JSON.stringify(d.getSaveObject()))
            }

            function c() {
                var a = d.getRoot();
                a.width += 1;
                r.defer(function() {
                    --a.width
                })
            }
            var d = this;
            this.domElement = document.createElement("div");
            this.__ul = document.createElement("ul");
            this.domElement.appendChild(this.__ul);
            q.addClass(this.domElement,
                "dg");
            this.__folders = {};
            this.__controllers = [];
            this.__rememberedObjects = [];
            this.__rememberedObjectIndecesToControllers = [];
            this.__listening = [];
            a = a || {};
            a = r.defaults(a, {
                autoPlace: !0,
                width: L.DEFAULT_WIDTH
            });
            a = r.defaults(a, {
                resizable: a.autoPlace,
                hideable: a.autoPlace
            });
            r.isUndefined(a.load) ? a.load = {
                preset: "Default"
            } : a.preset && (a.load.preset = a.preset);
            r.isUndefined(a.parent) && a.hideable && O.push(this);
            a.resizable = r.isUndefined(a.parent) && a.resizable;
            a.autoPlace && r.isUndefined(a.scrollable) && (a.scrollable = !0);
            var e = I && "true" === localStorage.getItem(document.location.href + ".isLocal");
            Object.defineProperties(this, {
                parent: {
                    get: function() {
                        return a.parent
                    }
                },
                scrollable: {
                    get: function() {
                        return a.scrollable
                    }
                },
                autoPlace: {
                    get: function() {
                        return a.autoPlace
                    }
                },
                preset: {
                    get: function() {
                        return d.parent ? d.getRoot().preset : a.load.preset
                    },
                    set: function(b) {
                        d.parent ? d.getRoot().preset = b : a.load.preset = b;
                        for (b = 0; b < this.__preset_select.length; b++) this.__preset_select[b].value == this.preset && (this.__preset_select.selectedIndex =
                            b);
                        d.revert()
                    }
                },
                width: {
                    get: function() {
                        return a.width
                    },
                    set: function(b) {
                        a.width = b;
                        E(d, b)
                    }
                },
                name: {
                    get: function() {
                        return a.name
                    },
                    set: function(b) {
                        a.name = b;
                        g && (g.innerHTML = a.name)
                    }
                },
                closed: {
                    get: function() {
                        return a.closed
                    },
                    set: function(b) {
                        a.closed = b;
                        a.closed ? q.addClass(d.__ul, L.CLASS_CLOSED) : q.removeClass(d.__ul, L.CLASS_CLOSED);
                        this.onResize();
                        d.__closeButton && (d.__closeButton.innerHTML = b ? L.TEXT_OPEN : L.TEXT_CLOSED)
                    }
                },
                load: {
                    get: function() {
                        return a.load
                    }
                },
                useLocalStorage: {
                    get: function() {
                        return e
                    },
                    set: function(a) {
                        I &&
                            ((e = a) ? q.bind(window, "unload", b) : q.unbind(window, "unload", b), localStorage.setItem(document.location.href + ".isLocal", a))
                    }
                }
            });
            if (r.isUndefined(a.parent)) {
                a.closed = !1;
                q.addClass(this.domElement, L.CLASS_MAIN);
                q.makeSelectable(this.domElement, !1);
                if (I && e) {
                    d.useLocalStorage = !0;
                    var f = localStorage.getItem(document.location.href + ".gui");
                    f && (a.load = JSON.parse(f))
                }
                this.__closeButton = document.createElement("div");
                this.__closeButton.innerHTML = L.TEXT_CLOSED;
                q.addClass(this.__closeButton, L.CLASS_CLOSE_BUTTON);
                this.domElement.appendChild(this.__closeButton);
                q.bind(this.__closeButton, "click", function() {
                    d.closed = !d.closed
                })
            } else {
                void 0 === a.closed && (a.closed = !0);
                var g = document.createTextNode(a.name);
                q.addClass(g, "controller-name");
                f = A(d, g);
                q.addClass(this.__ul, L.CLASS_CLOSED);
                q.addClass(f, "title");
                q.bind(f, "click", function(a) {
                    a.preventDefault();
                    d.closed = !d.closed;
                    return !1
                });
                a.closed || (this.closed = !1)
            }
            a.autoPlace && (r.isUndefined(a.parent) && (J && (R = document.createElement("div"), q.addClass(R, "dg"), q.addClass(R, L.CLASS_AUTO_PLACE_CONTAINER), document.body.appendChild(R),
                J = !1), R.appendChild(this.domElement), q.addClass(this.domElement, L.CLASS_AUTO_PLACE)), this.parent || E(d, a.width));
            q.bind(window, "resize", function() {
                d.onResize()
            });
            q.bind(this.__ul, "webkitTransitionEnd", function() {
                d.onResize()
            });
            q.bind(this.__ul, "transitionend", function() {
                d.onResize()
            });
            q.bind(this.__ul, "oTransitionEnd", function() {
                d.onResize()
            });
            this.onResize();
            a.resizable && D(this);
            d.getRoot();
            a.parent || c()
        };
    L.toggleHide = function() {
        M = !M;
        r.each(O, function(a) {
            a.domElement.style.zIndex = M ? -999 : 999;
            a.domElement.style.opacity =
                M ? 0 : 1
        })
    };
    L.CLASS_AUTO_PLACE = "a";
    L.CLASS_AUTO_PLACE_CONTAINER = "ac";
    L.CLASS_MAIN = "main";
    L.CLASS_CONTROLLER_ROW = "cr";
    L.CLASS_TOO_TALL = "taller-than-window";
    L.CLASS_CLOSED = "closed";
    L.CLASS_CLOSE_BUTTON = "close-button";
    L.CLASS_DRAG = "drag";
    L.DEFAULT_WIDTH = 245;
    L.TEXT_CLOSED = "Close Controls";
    L.TEXT_OPEN = "Open Controls";
    q.bind(window, "keydown", function(a) {
        "text" === document.activeElement.type || 72 !== a.which && 72 != a.keyCode || L.toggleHide()
    }, !1);
    r.extend(L.prototype, {
        add: function(a, b) {
            return y(this, a, b, {
                factoryArgs: Array.prototype.slice.call(arguments,
                    2)
            })
        },
        addColor: function(a, b) {
            return y(this, a, b, {
                color: !0
            })
        },
        remove: function(a) {
            this.__ul.removeChild(a.__li);
            this.__controllers.slice(this.__controllers.indexOf(a), 1);
            var b = this;
            r.defer(function() {
                b.onResize()
            })
        },
        destroy: function() {
            this.autoPlace && R.removeChild(this.domElement)
        },
        addFolder: function(a) {
            if (void 0 !== this.__folders[a]) throw Error('You already have a folder in this GUI by the name "' + a + '"');
            var b = {
                name: a,
                parent: this
            };
            b.autoPlace = this.autoPlace;
            this.load && this.load.folders && this.load.folders[a] &&
                (b.closed = this.load.folders[a].closed, b.load = this.load.folders[a]);
            b = new L(b);
            this.__folders[a] = b;
            a = A(this, b.domElement);
            q.addClass(a, "folder");
            return b
        },
        open: function() {
            this.closed = !1
        },
        close: function() {
            this.closed = !0
        },
        onResize: function() {
            var a = this.getRoot();
            if (a.scrollable) {
                var b = q.getOffset(a.__ul).top,
                    c = 0;
                r.each(a.__ul.childNodes, function(b) {
                    a.autoPlace && b === a.__save_row || (c += q.getHeight(b))
                });
                window.innerHeight - b - 20 < c ? (q.addClass(a.domElement, L.CLASS_TOO_TALL), a.__ul.style.height = window.innerHeight -
                    b - 20 + "px") : (q.removeClass(a.domElement, L.CLASS_TOO_TALL), a.__ul.style.height = "auto")
            }
            a.__resize_handle && r.defer(function() {
                a.__resize_handle.style.height = a.__ul.offsetHeight + "px"
            });
            a.__closeButton && (a.__closeButton.style.width = a.width + "px")
        },
        remember: function() {
            r.isUndefined(C) && (C = new l, C.domElement.innerHTML = b);
            if (this.parent) throw Error("You can only call remember on a top level GUI.");
            var a = this;
            r.each(Array.prototype.slice.call(arguments), function(b) {
                0 == a.__rememberedObjects.length && u(a); - 1 ==
                    a.__rememberedObjects.indexOf(b) && a.__rememberedObjects.push(b)
            });
            this.autoPlace && E(this, this.width)
        },
        getRoot: function() {
            for (var a = this; a.parent;) a = a.parent;
            return a
        },
        getSaveObject: function() {
            var a = this.load;
            a.closed = this.closed;
            0 < this.__rememberedObjects.length && (a.preset = this.preset, a.remembered || (a.remembered = {}), a.remembered[this.preset] = F(this));
            a.folders = {};
            r.each(this.__folders, function(b, c) {
                a.folders[c] = b.getSaveObject()
            });
            return a
        },
        save: function() {
            this.load.remembered || (this.load.remembered = {});
            this.load.remembered[this.preset] = F(this);
            w(this, !1)
        },
        saveAs: function(a) {
            this.load.remembered || (this.load.remembered = {}, this.load.remembered.Default = F(this, !0));
            this.load.remembered[a] = F(this);
            this.preset = a;
            t(this, a, !0)
        },
        revert: function(a) {
            r.each(this.__controllers, function(b) {
                this.getRoot().load.remembered ? z(a || this.getRoot(), b) : b.setValue(b.initialValue)
            }, this);
            r.each(this.__folders, function(a) {
                a.revert(a)
            });
            a || w(this.getRoot(), !1)
        },
        listen: function(a) {
            var b = 0 == this.__listening.length;
            this.__listening.push(a);
            b && B(this.__listening)
        }
    });
    return L
}(dat.utils.css, '<div id="dg-save" class="dg dialogue">\n\n  Here\'s the new load parameter for your <code>GUI</code>\'s constructor:\n\n  <textarea id="dg-new-constructor"></textarea>\n\n  <div id="dg-save-locally">\n\n    <input id="dg-local-storage" type="checkbox"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id="dg-local-explain">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>\'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n      \n    </div>\n    \n  </div>\n\n</div>',
    ".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity 0.1s linear;-o-transition:opacity 0.1s linear;-moz-transition:opacity 0.1s linear;transition:opacity 0.1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity 0.1s linear;-o-transition:opacity 0.1s linear;-moz-transition:opacity 0.1s linear;transition:opacity 0.1s linear;border:0;position:absolute;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-x:hidden}.dg.a.has-save ul{margin-top:27px}.dg.a.has-save ul.closed{margin-top:0}.dg.a .save-row{position:fixed;top:0;z-index:1002}.dg li{-webkit-transition:height 0.1s ease-out;-o-transition:height 0.1s ease-out;-moz-transition:height 0.1s ease-out;transition:height 0.1s ease-out}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;overflow:hidden;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li > *{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:9px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2fa1d6}.dg .cr.number input[type=text]{color:#2fa1d6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2fa1d6}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n",
    dat.controllers.factory = function(n, b, g, h, a, e, c) {
        return function(f, k, d, p) {
            var m = f[k];
            if (c.isArray(d) || c.isObject(d)) return new n(f, k, d);
            if (c.isNumber(m)) return c.isNumber(d) && c.isNumber(p) ? new g(f, k, d, p) : new b(f, k, {
                min: d,
                max: p
            });
            if (c.isString(m)) return new h(f, k);
            if (c.isFunction(m)) return new a(f, k, "");
            if (c.isBoolean(m)) return new e(f, k)
        }
    }(dat.controllers.OptionController, dat.controllers.NumberControllerBox, dat.controllers.NumberControllerSlider, dat.controllers.StringController = function(n, b, g) {
        var h =
            function(a, e) {
                function c() {
                    f.setValue(f.__input.value)
                }
                h.superclass.call(this, a, e);
                var f = this;
                this.__input = document.createElement("input");
                this.__input.setAttribute("type", "text");
                b.bind(this.__input, "keyup", c);
                b.bind(this.__input, "change", c);
                b.bind(this.__input, "blur", function() {
                    f.__onFinishChange && f.__onFinishChange.call(f, f.getValue())
                });
                b.bind(this.__input, "keydown", function(a) {
                    13 === a.keyCode && this.blur()
                });
                this.updateDisplay();
                this.domElement.appendChild(this.__input)
            };
        h.superclass = n;
        g.extend(h.prototype,
            n.prototype, {
                updateDisplay: function() {
                    b.isActive(this.__input) || (this.__input.value = this.getValue());
                    return h.superclass.prototype.updateDisplay.call(this)
                }
            });
        return h
    }(dat.controllers.Controller, dat.dom.dom, dat.utils.common), dat.controllers.FunctionController, dat.controllers.BooleanController, dat.utils.common), dat.controllers.Controller, dat.controllers.BooleanController, dat.controllers.FunctionController, dat.controllers.NumberControllerBox, dat.controllers.NumberControllerSlider, dat.controllers.OptionController,
    dat.controllers.ColorController = function(n, b, g, h, a) {
        function e(b, c, e, f) {
            b.style.background = "";
            a.each(k, function(a) {
                b.style.cssText += "background: " + a + "linear-gradient(" + c + ", " + e + " 0%, " + f + " 100%); "
            })
        }

        function c(a) {
            a.style.background = "";
            a.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);";
            a.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);";
            a.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);";
            a.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);";
            a.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"
        }
        var f = function(d, k) {
            function m(a) {
                y(a);
                b.bind(window, "mousemove", y);
                b.bind(window,
                    "mouseup", l)
            }

            function l() {
                b.unbind(window, "mousemove", y);
                b.unbind(window, "mouseup", l)
            }

            function n() {
                var a = h(this.value);
                !1 !== a ? (v.__color.__state = a, v.setValue(v.__color.toOriginal())) : this.value = v.__color.toString()
            }

            function p() {
                b.unbind(window, "mousemove", A);
                b.unbind(window, "mouseup", p)
            }

            function y(a) {
                a.preventDefault();
                var c = b.getWidth(v.__saturation_field),
                    d = b.getOffset(v.__saturation_field),
                    e = (a.clientX - d.left + document.body.scrollLeft) / c;
                a = 1 - (a.clientY - d.top + document.body.scrollTop) / c;
                1 < a ? a = 1 : 0 >
                    a && (a = 0);
                1 < e ? e = 1 : 0 > e && (e = 0);
                v.__color.v = a;
                v.__color.s = e;
                v.setValue(v.__color.toOriginal());
                return !1
            }

            function A(a) {
                a.preventDefault();
                var c = b.getHeight(v.__hue_field),
                    d = b.getOffset(v.__hue_field);
                a = 1 - (a.clientY - d.top + document.body.scrollTop) / c;
                1 < a ? a = 1 : 0 > a && (a = 0);
                v.__color.h = 360 * a;
                v.setValue(v.__color.toOriginal());
                return !1
            }
            f.superclass.call(this, d, k);
            this.__color = new g(this.getValue());
            this.__temp = new g(0);
            var v = this;
            this.domElement = document.createElement("div");
            b.makeSelectable(this.domElement, !1);
            this.__selector = document.createElement("div");
            this.__selector.className = "selector";
            this.__saturation_field = document.createElement("div");
            this.__saturation_field.className = "saturation-field";
            this.__field_knob = document.createElement("div");
            this.__field_knob.className = "field-knob";
            this.__field_knob_border = "2px solid ";
            this.__hue_knob = document.createElement("div");
            this.__hue_knob.className = "hue-knob";
            this.__hue_field = document.createElement("div");
            this.__hue_field.className = "hue-field";
            this.__input = document.createElement("input");
            this.__input.type = "text";
            this.__input_textShadow = "0 1px 1px ";
            b.bind(this.__input, "keydown", function(a) {
                13 === a.keyCode && n.call(this)
            });
            b.bind(this.__input, "blur", n);
            b.bind(this.__selector, "mousedown", function(a) {
                b.addClass(this, "drag").bind(window, "mouseup", function(a) {
                    b.removeClass(v.__selector, "drag")
                })
            });
            var z = document.createElement("div");
            a.extend(this.__selector.style, {
                width: "122px",
                height: "102px",
                padding: "3px",
                backgroundColor: "#222",
                boxShadow: "0px 1px 3px rgba(0,0,0,0.3)"
            });
            a.extend(this.__field_knob.style, {
                position: "absolute",
                width: "12px",
                height: "12px",
                border: this.__field_knob_border + (.5 > this.__color.v ? "#fff" : "#000"),
                boxShadow: "0px 1px 3px rgba(0,0,0,0.5)",
                borderRadius: "12px",
                zIndex: 1
            });
            a.extend(this.__hue_knob.style, {
                position: "absolute",
                width: "15px",
                height: "2px",
                borderRight: "4px solid #fff",
                zIndex: 1
            });
            a.extend(this.__saturation_field.style, {
                width: "100px",
                height: "100px",
                border: "1px solid #555",
                marginRight: "3px",
                display: "inline-block",
                cursor: "pointer"
            });
            a.extend(z.style, {
                width: "100%",
                height: "100%",
                background: "none"
            });
            e(z, "top", "rgba(0,0,0,0)", "#000");
            a.extend(this.__hue_field.style, {
                width: "15px",
                height: "100px",
                display: "inline-block",
                border: "1px solid #555",
                cursor: "ns-resize"
            });
            c(this.__hue_field);
            a.extend(this.__input.style, {
                outline: "none",
                textAlign: "center",
                color: "#fff",
                border: 0,
                fontWeight: "bold",
                textShadow: this.__input_textShadow + "rgba(0,0,0,0.7)"
            });
            b.bind(this.__saturation_field, "mousedown", m);
            b.bind(this.__field_knob, "mousedown", m);
            b.bind(this.__hue_field, "mousedown", function(a) {
                A(a);
                b.bind(window,
                    "mousemove", A);
                b.bind(window, "mouseup", p)
            });
            this.__saturation_field.appendChild(z);
            this.__selector.appendChild(this.__field_knob);
            this.__selector.appendChild(this.__saturation_field);
            this.__selector.appendChild(this.__hue_field);
            this.__hue_field.appendChild(this.__hue_knob);
            this.domElement.appendChild(this.__input);
            this.domElement.appendChild(this.__selector);
            this.updateDisplay()
        };
        f.superclass = n;
        a.extend(f.prototype, n.prototype, {
            updateDisplay: function() {
                var b = h(this.getValue());
                if (!1 !== b) {
                    var c = !1;
                    a.each(g.COMPONENTS, function(d) {
                        if (!a.isUndefined(b[d]) && !a.isUndefined(this.__color.__state[d]) && b[d] !== this.__color.__state[d]) return c = !0, {}
                    }, this);
                    c && a.extend(this.__color.__state, b)
                }
                a.extend(this.__temp.__state, this.__color.__state);
                this.__temp.a = 1;
                var f = .5 > this.__color.v || .5 < this.__color.s ? 255 : 0,
                    k = 255 - f;
                a.extend(this.__field_knob.style, {
                    marginLeft: 100 * this.__color.s - 7 + "px",
                    marginTop: 100 * (1 - this.__color.v) - 7 + "px",
                    backgroundColor: this.__temp.toString(),
                    border: this.__field_knob_border + "rgb(" + f +
                        "," + f + "," + f + ")"
                });
                this.__hue_knob.style.marginTop = 100 * (1 - this.__color.h / 360) + "px";
                this.__temp.s = 1;
                this.__temp.v = 1;
                e(this.__saturation_field, "left", "#fff", this.__temp.toString());
                a.extend(this.__input.style, {
                    backgroundColor: this.__input.value = this.__color.toString(),
                    color: "rgb(" + f + "," + f + "," + f + ")",
                    textShadow: this.__input_textShadow + "rgba(" + k + "," + k + "," + k + ",.7)"
                })
            }
        });
        var k = ["-moz-", "-o-", "-webkit-", "-ms-", ""];
        return f
    }(dat.controllers.Controller, dat.dom.dom, dat.color.Color = function(n, b, g, h) {
        function a(a,
            b, e) {
            Object.defineProperty(a, b, {
                get: function() {
                    if ("RGB" === this.__state.space) return this.__state[b];
                    c(this, b, e);
                    return this.__state[b]
                },
                set: function(a) {
                    "RGB" !== this.__state.space && (c(this, b, e), this.__state.space = "RGB");
                    this.__state[b] = a
                }
            })
        }

        function e(a, b) {
            Object.defineProperty(a, b, {
                get: function() {
                    if ("HSV" === this.__state.space) return this.__state[b];
                    f(this);
                    return this.__state[b]
                },
                set: function(a) {
                    "HSV" !== this.__state.space && (f(this), this.__state.space = "HSV");
                    this.__state[b] = a
                }
            })
        }

        function c(a, c, e) {
            if ("HEX" ===
                a.__state.space) a.__state[c] = b.component_from_hex(a.__state.hex, e);
            else if ("HSV" === a.__state.space) h.extend(a.__state, b.hsv_to_rgb(a.__state.h, a.__state.s, a.__state.v));
            else throw "Corrupted color state";
        }

        function f(a) {
            var c = b.rgb_to_hsv(a.r, a.g, a.b);
            h.extend(a.__state, {
                s: c.s,
                v: c.v
            });
            h.isNaN(c.h) ? h.isUndefined(a.__state.h) && (a.__state.h = 0) : a.__state.h = c.h
        }
        var k = function() {
            this.__state = n.apply(this, arguments);
            if (!1 === this.__state) throw "Failed to interpret color arguments";
            this.__state.a = this.__state.a ||
                1
        };
        k.COMPONENTS = "r g b h s v hex a".split(" ");
        h.extend(k.prototype, {
            toString: function() {
                return g(this)
            },
            toOriginal: function() {
                return this.__state.conversion.write(this)
            }
        });
        a(k.prototype, "r", 2);
        a(k.prototype, "g", 1);
        a(k.prototype, "b", 0);
        e(k.prototype, "h");
        e(k.prototype, "s");
        e(k.prototype, "v");
        Object.defineProperty(k.prototype, "a", {
            get: function() {
                return this.__state.a
            },
            set: function(a) {
                this.__state.a = a
            }
        });
        Object.defineProperty(k.prototype, "hex", {
            get: function() {
                this.__state.hex = b.rgb_to_hex(this.r, this.g,
                    this.b);
                return this.__state.hex
            },
            set: function(a) {
                this.__state.space = "HEX";
                this.__state.hex = a
            }
        });
        return k
    }(dat.color.interpret, dat.color.math = function() {
        var n;
        return {
            hsv_to_rgb: function(b, g, h) {
                var a = b / 60 - Math.floor(b / 60),
                    e = h * (1 - g),
                    c = h * (1 - a * g);
                g = h * (1 - (1 - a) * g);
                b = [
                    [h, g, e],
                    [c, h, e],
                    [e, h, g],
                    [e, c, h],
                    [g, e, h],
                    [h, e, c]
                ][Math.floor(b / 60) % 6];
                return {
                    r: 255 * b[0],
                    g: 255 * b[1],
                    b: 255 * b[2]
                }
            },
            rgb_to_hsv: function(b, g, h) {
                var a = Math.max(b, g, h),
                    e = a - Math.min(b, g, h);
                if (0 == a) return {
                    h: NaN,
                    s: 0,
                    v: 0
                };
                b = (b == a ? (g - h) / e : g == a ? 2 + (h - b) / e :
                    4 + (b - g) / e) / 6;
                0 > b && (b += 1);
                return {
                    h: 360 * b,
                    s: e / a,
                    v: a / 255
                }
            },
            rgb_to_hex: function(b, g, h) {
                b = this.hex_with_component(0, 2, b);
                b = this.hex_with_component(b, 1, g);
                return b = this.hex_with_component(b, 0, h)
            },
            component_from_hex: function(b, g) {
                return b >> 8 * g & 255
            },
            hex_with_component: function(b, g, h) {
                return h << (n = 8 * g) | b & ~(255 << n)
            }
        }
    }(), dat.color.toString, dat.utils.common), dat.color.interpret, dat.utils.common), dat.utils.requestAnimationFrame = function() {
        return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(n, b) {
                window.setTimeout(n, 1E3 / 60)
            }
    }(), dat.dom.CenteredDiv = function(n, b) {
        var g = function() {
            this.backgroundElement = document.createElement("div");
            b.extend(this.backgroundElement.style, {
                backgroundColor: "rgba(0,0,0,0.8)",
                top: 0,
                left: 0,
                display: "none",
                zIndex: "1000",
                opacity: 0,
                WebkitTransition: "opacity 0.2s linear"
            });
            n.makeFullscreen(this.backgroundElement);
            this.backgroundElement.style.position = "fixed";
            this.domElement = document.createElement("div");
            b.extend(this.domElement.style, {
                position: "fixed",
                display: "none",
                zIndex: "1001",
                opacity: 0,
                WebkitTransition: "-webkit-transform 0.2s ease-out, opacity 0.2s linear"
            });
            document.body.appendChild(this.backgroundElement);
            document.body.appendChild(this.domElement);
            var g = this;
            n.bind(this.backgroundElement, "click", function() {
                g.hide()
            })
        };
        g.prototype.show = function() {
            var g = this;
            this.backgroundElement.style.display = "block";
            this.domElement.style.display = "block";
            this.domElement.style.opacity = 0;
            this.domElement.style.webkitTransform =
                "scale(1.1)";
            this.layout();
            b.defer(function() {
                g.backgroundElement.style.opacity = 1;
                g.domElement.style.opacity = 1;
                g.domElement.style.webkitTransform = "scale(1)"
            })
        };
        g.prototype.hide = function() {
            var b = this,
                a = function() {
                    b.domElement.style.display = "none";
                    b.backgroundElement.style.display = "none";
                    n.unbind(b.domElement, "webkitTransitionEnd", a);
                    n.unbind(b.domElement, "transitionend", a);
                    n.unbind(b.domElement, "oTransitionEnd", a)
                };
            n.bind(this.domElement, "webkitTransitionEnd", a);
            n.bind(this.domElement, "transitionend",
                a);
            n.bind(this.domElement, "oTransitionEnd", a);
            this.backgroundElement.style.opacity = 0;
            this.domElement.style.opacity = 0;
            this.domElement.style.webkitTransform = "scale(1.1)"
        };
        g.prototype.layout = function() {
            this.domElement.style.left = window.innerWidth / 2 - n.getWidth(this.domElement) / 2 + "px";
            this.domElement.style.top = window.innerHeight / 2 - n.getHeight(this.domElement) / 2 + "px"
        };
        return g
    }(dat.dom.dom, dat.utils.common), dat.dom.dom, dat.utils.common);
THREE.FBXLoader = function() {
    function n(a) {
        this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager
    }

    function b(a) {
        this.textureLoader = a
    }

    function g() {}

    function h() {}

    function a() {}

    function e() {}

    function c(a, b) {
        this.dv = new DataView(a);
        this.offset = 0;
        this.littleEndian = void 0 !== b ? b : !0
    }

    function f() {}

    function k(a) {
        if (a = a.match(/FBXVersion: (\d+)/)) return parseInt(a[1]);
        throw Error("THREE.FBXLoader: Cannot find the version number for the file given.");
    }

    function d(a) {
        return a / 46186158E3
    }

    function p(a, b, c, d) {
        switch (d.mappingType) {
            case "ByPolygonVertex":
                var e =
                    a;
                break;
            case "ByPolygon":
                e = b;
                break;
            case "ByVertice":
                e = c;
                break;
            case "AllSame":
                e = d.indices[0];
                break;
            default:
                console.warn("THREE.FBXLoader: unknown attribute mapping type " + d.mappingType)
        }
        "IndexToDirect" === d.referenceType && (e = d.indices[e]);
        c = e * d.dataSize;
        a = D;
        b = d.buffer;
        d = c + d.dataSize;
        for (e = 0; c < d; c++, e++) a[e] = b[c];
        return a
    }

    function m(a) {
        var b = new THREE.Matrix4,
            c = new THREE.Matrix4,
            d = new THREE.Matrix4,
            e = new THREE.Matrix4,
            f = new THREE.Matrix4,
            g = new THREE.Matrix4,
            t = new THREE.Matrix4,
            k = new THREE.Matrix4,
            h =
            new THREE.Matrix4,
            l = new THREE.Matrix4,
            m = new THREE.Matrix4,
            n = a.inheritType ? a.inheritType : 0;
        a.translation && b.setPosition(F.fromArray(a.translation));
        if (a.preRotation) {
            var p = a.preRotation.map(THREE.Math.degToRad);
            p.push(a.eulerOrder);
            c.makeRotationFromEuler(E.fromArray(p))
        }
        a.rotation && (p = a.rotation.map(THREE.Math.degToRad), p.push(a.eulerOrder), d.makeRotationFromEuler(E.fromArray(p)));
        a.postRotation && (p = a.postRotation.map(THREE.Math.degToRad), p.push(a.eulerOrder), e.makeRotationFromEuler(E.fromArray(p)));
        a.scale && f.scale(F.fromArray(a.scale));
        a.scalingOffset && t.setPosition(F.fromArray(a.scalingOffset));
        a.scalingPivot && g.setPosition(F.fromArray(a.scalingPivot));
        a.rotationOffset && k.setPosition(F.fromArray(a.rotationOffset));
        a.rotationPivot && h.setPosition(F.fromArray(a.rotationPivot));
        a.parentMatrixWorld && (l = a.parentMatrixWorld);
        a = c.multiply(d).multiply(e);
        p = new THREE.Matrix4;
        l.extractRotation(p);
        var q = new THREE.Matrix4;
        q.copyPosition(l);
        q = q.getInverse(q).multiply(l);
        q = p.getInverse(p).multiply(q);
        0 ===
            n ? n = p.multiply(a).multiply(q).multiply(f) : 1 === n ? n = p.multiply(q).multiply(a).multiply(f) : (n = (new THREE.Matrix4).copy(f), n = q.multiply(n.getInverse(n)), n = p.multiply(a).multiply(n).multiply(f));
        b = b.multiply(k).multiply(h).multiply(c).multiply(d).multiply(e).multiply(h.getInverse(h)).multiply(t).multiply(g).multiply(f).multiply(g.getInverse(g));
        b = (new THREE.Matrix4).copyPosition(b);
        l = l.multiply(b);
        m.copyPosition(l);
        return b = m.multiply(n)
    }

    function l(a) {
        a = a || 0;
        var b = "ZYX YZX XZY ZXY YXZ XYZ".split(" ");
        return 6 === a ? (console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."), b[0]) : b[a]
    }

    function q(a) {
        return a.split(",").map(function(a) {
            return parseFloat(a)
        })
    }

    function r(a, b, c) {
        void 0 === b && (b = 0);
        void 0 === c && (c = a.byteLength);
        return THREE.LoaderUtils.decodeText(new Uint8Array(a, b, c))
    }

    function y(a, b) {
        for (var c = 0, d = a.length, e = b.length; c < e; c++, d++) a[d] = b[c]
    }

    function A(a, b, c) {
        return a.slice(0, b).concat(c).concat(a.slice(b))
    }
    var v, z, u;
    n.prototype = {
        constructor: n,
        crossOrigin: "anonymous",
        load: function(a, b, c, d) {
            var e = this,
                f = void 0 === e.path ? THREE.LoaderUtils.extractUrlBase(a) : e.path,
                g = new THREE.FileLoader(this.manager);
            g.setPath(e.path);
            g.setResponseType("arraybuffer");
            g.load(a, function(c) {
                try {
                    b(e.parse(c, f))
                } catch (O) {
                    setTimeout(function() {
                        d && d(O);
                        e.manager.itemError(a)
                    }, 0)
                }
            }, c, d)
        },
        setPath: function(a) {
            this.path = a;
            return this
        },
        setResourcePath: function(a) {
            this.resourcePath = a;
            return this
        },
        setCrossOrigin: function(a) {
            this.crossOrigin = a;
            return this
        },
        parse: function(c,
            d) {
            if (21 <= c.byteLength && "Kaydara FBX Binary  \x00" === r(c, 0, 21)) v = (new e).parse(c);
            else {
                var f = r(c);
                a: {
                    var g = f;
                    for (var t = "Kaydara\\FBX\\Binary\\\\".split(""), h = 0, l = 0; l < t.length; ++l) {
                        var m = g[0];
                        g = g.slice(h + 1);
                        h++;
                        if (m === t[l]) {
                            g = !1;
                            break a
                        }
                    }
                    g = !0
                }
                if (!g) throw Error("THREE.FBXLoader: Unknown format.");
                if (7E3 > k(f)) throw Error("THREE.FBXLoader: FBX version not supported, FileVersion: " + k(f));
                v = (new a).parse(f)
            }
            f = (new THREE.TextureLoader(this.manager)).setPath(this.resourcePath || d).setCrossOrigin(this.crossOrigin);
            return (new b(f)).parse(v)
        }
    };
    b.prototype = {
        constructor: b,
        parse: function() {
            z = this.parseConnections();
            var a = this.parseImages();
            a = this.parseTextures(a);
            a = this.parseMaterials(a);
            var b = this.parseDeformers(),
                c = (new g).parse(b);
            this.parseScene(b, c, a);
            return u
        },
        parseConnections: function() {
            var a = new Map;
            "Connections" in v && v.Connections.connections.forEach(function(b) {
                var c = b[0],
                    d = b[1];
                b = b[2];
                a.has(c) || a.set(c, {
                    parents: [],
                    children: []
                });
                var e = {
                    ID: d,
                    relationship: b
                };
                a.get(c).parents.push(e);
                a.has(d) || a.set(d, {
                    parents: [],
                    children: []
                });
                c = {
                    ID: c,
                    relationship: b
                };
                a.get(d).children.push(c)
            });
            return a
        },
        parseImages: function() {
            var a = {},
                b = {};
            if ("Video" in v.Objects) {
                var c = v.Objects.Video,
                    d;
                for (d in c) {
                    var e = c[d],
                        f = parseInt(d);
                    a[f] = e.RelativeFilename || e.Filename;
                    if ("Content" in e) {
                        var g = "string" === typeof e.Content && "" !== e.Content;
                        if (e.Content instanceof ArrayBuffer && 0 < e.Content.byteLength || g) g = this.parseImage(c[d]), b[e.RelativeFilename || e.Filename] = g
                    }
                }
            }
            for (f in a) c = a[f], a[f] = void 0 !== b[c] ? b[c] : a[f].split("\\").pop();
            return a
        },
        parseImage: function(a) {
            var b = a.Content;
            a = a.RelativeFilename || a.Filename;
            a = a.slice(a.lastIndexOf(".") + 1).toLowerCase();
            switch (a) {
                case "bmp":
                    a = "image/bmp";
                    break;
                case "jpg":
                case "jpeg":
                    a = "image/jpeg";
                    break;
                case "png":
                    a = "image/png";
                    break;
                case "tif":
                    a = "image/tiff";
                    break;
                case "tga":
                    if ("function" !== typeof THREE.TGALoader) {
                        console.warn("FBXLoader: THREE.TGALoader is required to load TGA textures");
                        return
                    }
                    null === THREE.Loader.Handlers.get(".tga") && (a = new THREE.TGALoader, a.setPath(this.textureLoader.path), THREE.Loader.Handlers.add(/\.tga$/i,
                        a));
                    a = "image/tga";
                    break;
                default:
                    console.warn('FBXLoader: Image type "' + a + '" is not supported.');
                    return
            }
            if ("string" === typeof b) return "data:" + a + ";base64," + b;
            b = new Uint8Array(b);
            return window.URL.createObjectURL(new Blob([b], {
                type: a
            }))
        },
        parseTextures: function(a) {
            var b = new Map;
            if ("Texture" in v.Objects) {
                var c = v.Objects.Texture,
                    d;
                for (d in c) {
                    var e = this.parseTexture(c[d], a);
                    b.set(parseInt(d), e)
                }
            }
            return b
        },
        parseTexture: function(a, b) {
            var c = this.loadTexture(a, b);
            c.ID = a.id;
            c.name = a.attrName;
            var d = a.WrapModeU,
                e = a.WrapModeV;
            e = void 0 !== e ? e.value : 0;
            c.wrapS = 0 === (void 0 !== d ? d.value : 0) ? THREE.RepeatWrapping : THREE.ClampToEdgeWrapping;
            c.wrapT = 0 === e ? THREE.RepeatWrapping : THREE.ClampToEdgeWrapping;
            "Scaling" in a && (d = a.Scaling.value, c.repeat.x = d[0], c.repeat.y = d[1]);
            return c
        },
        loadTexture: function(a, b) {
            var c = this.textureLoader.path,
                d = z.get(a.id).children;
            if (void 0 !== d && 0 < d.length && void 0 !== b[d[0].ID]) {
                var e = b[d[0].ID];
                0 !== e.indexOf("blob:") && 0 !== e.indexOf("data:") || this.textureLoader.setPath(void 0)
            }
            d = a.FileName.slice(-3).toLowerCase();
            "tga" === d ? (d = THREE.Loader.Handlers.get(".tga"), null === d ? (console.warn("FBXLoader: TGALoader not found, creating empty placeholder texture for", e), e = new THREE.Texture) : e = d.load(e)) : "psd" === d ? (console.warn("FBXLoader: PSD textures are not supported, creating empty placeholder texture for", e), e = new THREE.Texture) : e = this.textureLoader.load(e);
            this.textureLoader.setPath(c);
            return e
        },
        parseMaterials: function(a) {
            var b = new Map;
            if ("Material" in v.Objects) {
                var c = v.Objects.Material,
                    d;
                for (d in c) {
                    var e = this.parseMaterial(c[d],
                        a);
                    null !== e && b.set(parseInt(d), e)
                }
            }
            return b
        },
        parseMaterial: function(a, b) {
            var c = a.id,
                d = a.attrName,
                e = a.ShadingModel;
            "object" === typeof e && (e = e.value);
            if (!z.has(c)) return null;
            c = this.parseParameters(a, b, c);
            switch (e.toLowerCase()) {
                case "phong":
                    e = new THREE.MeshPhongMaterial;
                    break;
                case "lambert":
                    e = new THREE.MeshLambertMaterial;
                    break;
                default:
                    console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.', e), e = new THREE.MeshPhongMaterial
            }
            e.setValues(c);
            e.name = d;
            return e
        },
        parseParameters: function(a,
            b, c) {
            var d = {};
            a.BumpFactor && (d.bumpScale = a.BumpFactor.value);
            a.Diffuse ? d.color = (new THREE.Color).fromArray(a.Diffuse.value) : a.DiffuseColor && "Color" === a.DiffuseColor.type && (d.color = (new THREE.Color).fromArray(a.DiffuseColor.value));
            a.DisplacementFactor && (d.displacementScale = a.DisplacementFactor.value);
            a.Emissive ? d.emissive = (new THREE.Color).fromArray(a.Emissive.value) : a.EmissiveColor && "Color" === a.EmissiveColor.type && (d.emissive = (new THREE.Color).fromArray(a.EmissiveColor.value));
            a.EmissiveFactor &&
                (d.emissiveIntensity = parseFloat(a.EmissiveFactor.value));
            a.Opacity && (d.opacity = parseFloat(a.Opacity.value));
            1 > d.opacity && (d.transparent = !0);
            a.ReflectionFactor && (d.reflectivity = a.ReflectionFactor.value);
            a.Shininess && (d.shininess = a.Shininess.value);
            a.Specular ? d.specular = (new THREE.Color).fromArray(a.Specular.value) : a.SpecularColor && "Color" === a.SpecularColor.type && (d.specular = (new THREE.Color).fromArray(a.SpecularColor.value));
            var e = this;
            z.get(c).children.forEach(function(a) {
                var c = a.relationship;
                switch (c) {
                    case "Bump":
                        d.bumpMap =
                            e.getTexture(b, a.ID);
                        break;
                    case "Maya|TEX_ao_map":
                        d.aoMap = e.getTexture(b, a.ID);
                        break;
                    case "DiffuseColor":
                    case "Maya|TEX_color_map":
                        d.map = e.getTexture(b, a.ID);
                        break;
                    case "DisplacementColor":
                        d.displacementMap = e.getTexture(b, a.ID);
                        break;
                    case "EmissiveColor":
                        d.emissiveMap = e.getTexture(b, a.ID);
                        break;
                    case "NormalMap":
                    case "Maya|TEX_normal_map":
                        d.normalMap = e.getTexture(b, a.ID);
                        break;
                    case "ReflectionColor":
                        d.envMap = e.getTexture(b, a.ID);
                        d.envMap.mapping = THREE.EquirectangularReflectionMapping;
                        break;
                    case "SpecularColor":
                        d.specularMap =
                            e.getTexture(b, a.ID);
                        break;
                    case "TransparentColor":
                        d.alphaMap = e.getTexture(b, a.ID);
                        d.transparent = !0;
                        break;
                    default:
                        console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.", c)
                }
            });
            return d
        },
        getTexture: function(a, b) {
            "LayeredTexture" in v.Objects && b in v.Objects.LayeredTexture && (console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."), b = z.get(b).children[0].ID);
            return a.get(b)
        },
        parseDeformers: function() {
            var a = {},
                b = {};
            if ("Deformer" in v.Objects) {
                var c = v.Objects.Deformer,
                    d;
                for (d in c) {
                    var e = c[d],
                        f = z.get(parseInt(d));
                    "Skin" === e.attrType ? (e = this.parseSkeleton(f, c), e.ID = d, 1 < f.parents.length && console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."), e.geometryID = f.parents[0].ID, a[d] = e) : "BlendShape" === e.attrType && (e = {
                            id: d
                        }, e.rawTargets = this.parseMorphTargets(f, c), e.id = d, 1 < f.parents.length && console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),
                        b[d] = e)
                }
            }
            return {
                skeletons: a,
                morphTargets: b
            }
        },
        parseSkeleton: function(a, b) {
            var c = [];
            a.children.forEach(function(a) {
                var d = b[a.ID];
                "Cluster" === d.attrType && (a = {
                    ID: a.ID,
                    indices: [],
                    weights: [],
                    transformLink: (new THREE.Matrix4).fromArray(d.TransformLink.a)
                }, "Indexes" in d && (a.indices = d.Indexes.a, a.weights = d.Weights.a), c.push(a))
            });
            return {
                rawBones: c,
                bones: []
            }
        },
        parseMorphTargets: function(a, b) {
            for (var c = [], d = 0; d < a.children.length; d++) {
                var e = a.children[d],
                    f = b[e.ID],
                    g = {
                        name: f.attrName,
                        initialWeight: f.DeformPercent,
                        id: f.id,
                        fullWeights: f.FullWeights.a
                    };
                if ("BlendShapeChannel" !== f.attrType) return;
                g.geoID = z.get(parseInt(e.ID)).children.filter(function(a) {
                    return void 0 === a.relationship
                })[0].ID;
                c.push(g)
            }
            return c
        },
        parseScene: function(a, b, c) {
            u = new THREE.Group;
            var d = this.parseModels(a.skeletons, b, c),
                e = v.Objects.Model,
                f = this;
            d.forEach(function(a) {
                f.setLookAtProperties(a, e[a.ID]);
                z.get(a.ID).parents.forEach(function(b) {
                    b = d.get(b.ID);
                    void 0 !== b && b.add(a)
                });
                null === a.parent && u.add(a)
            });
            this.bindSkeleton(a.skeletons, b, d);
            this.createAmbientLight();
            this.setupMorphMaterials();
            u.traverse(function(a) {
                if (a.userData.transformData) {
                    a.parent && (a.userData.transformData.parentMatrixWorld = a.parent.matrix);
                    var b = m(a.userData.transformData);
                    a.applyMatrix(b)
                }
            });
            a = (new h).parse();
            1 === u.children.length && u.children[0].isGroup && (u.children[0].animations = a, u = u.children[0]);
            u.animations = a
        },
        parseModels: function(a, b, c) {
            var d = new Map,
                e = v.Objects.Model,
                f;
            for (f in e) {
                var g = parseInt(f),
                    k = e[f],
                    h = z.get(g),
                    l = this.buildSkeleton(h, a, g, k.attrName);
                if (!l) {
                    switch (k.attrType) {
                        case "Camera":
                            l = this.createCamera(h);
                            break;
                        case "Light":
                            l = this.createLight(h);
                            break;
                        case "Mesh":
                            l = this.createMesh(h, b, c);
                            break;
                        case "NurbsCurve":
                            l = this.createCurve(h, b);
                            break;
                        case "LimbNode":
                        case "Root":
                            l = new THREE.Bone;
                            break;
                        default:
                            l = new THREE.Group
                    }
                    l.name = THREE.PropertyBinding.sanitizeNodeName(k.attrName);
                    l.ID = g
                }
                this.getTransformData(l, k);
                d.set(g, l)
            }
            return d
        },
        buildSkeleton: function(a, b, c, d) {
            var e = null;
            a.parents.forEach(function(a) {
                for (var f in b) {
                    var g = b[f];
                    g.rawBones.forEach(function(b,
                        f) {
                        if (b.ID === a.ID) {
                            var k = e;
                            e = new THREE.Bone;
                            e.matrixWorld.copy(b.transformLink);
                            e.name = THREE.PropertyBinding.sanitizeNodeName(d);
                            e.ID = c;
                            g.bones[f] = e;
                            null !== k && e.add(k)
                        }
                    })
                }
            });
            return e
        },
        createCamera: function(a) {
            var b;
            a.children.forEach(function(a) {
                a = v.Objects.NodeAttribute[a.ID];
                void 0 !== a && (b = a)
            });
            if (void 0 === b) var c = new THREE.Object3D;
            else {
                c = 0;
                void 0 !== b.CameraProjectionType && 1 === b.CameraProjectionType.value && (c = 1);
                var d = 1;
                void 0 !== b.NearPlane && (d = b.NearPlane.value / 1E3);
                var e = 1E3;
                void 0 !== b.FarPlane &&
                    (e = b.FarPlane.value / 1E3);
                var f = window.innerWidth,
                    g = window.innerHeight;
                void 0 !== b.AspectWidth && void 0 !== b.AspectHeight && (f = b.AspectWidth.value, g = b.AspectHeight.value);
                var k = f / g,
                    h = 45;
                void 0 !== b.FieldOfView && (h = b.FieldOfView.value);
                a = b.FocalLength ? b.FocalLength.value : null;
                switch (c) {
                    case 0:
                        c = new THREE.PerspectiveCamera(h, k, d, e);
                        null !== a && c.setFocalLength(a);
                        break;
                    case 1:
                        c = new THREE.OrthographicCamera(-f / 2, f / 2, g / 2, -g / 2, d, e);
                        break;
                    default:
                        console.warn("THREE.FBXLoader: Unknown camera type " + c + "."), c = new THREE.Object3D
                }
            }
            return c
        },
        createLight: function(a) {
            var b;
            a.children.forEach(function(a) {
                a = v.Objects.NodeAttribute[a.ID];
                void 0 !== a && (b = a)
            });
            if (void 0 === b) a = new THREE.Object3D;
            else {
                var c = void 0 === b.LightType ? 0 : b.LightType.value;
                a = 16777215;
                void 0 !== b.Color && (a = (new THREE.Color).fromArray(b.Color.value));
                var d = void 0 === b.Intensity ? 1 : b.Intensity.value / 100;
                void 0 !== b.CastLightOnObject && 0 === b.CastLightOnObject.value && (d = 0);
                var e = 0;
                void 0 !== b.FarAttenuationEnd && (e = void 0 !== b.EnableFarAttenuation && 0 === b.EnableFarAttenuation.value ?
                    0 : b.FarAttenuationEnd.value);
                switch (c) {
                    case 0:
                        a = new THREE.PointLight(a, d, e, 1);
                        break;
                    case 1:
                        a = new THREE.DirectionalLight(a, d);
                        break;
                    case 2:
                        c = Math.PI / 3;
                        void 0 !== b.InnerAngle && (c = THREE.Math.degToRad(b.InnerAngle.value));
                        var f = 0;
                        void 0 !== b.OuterAngle && (f = THREE.Math.degToRad(b.OuterAngle.value), f = Math.max(f, 1));
                        a = new THREE.SpotLight(a, d, e, c, f, 1);
                        break;
                    default:
                        console.warn("THREE.FBXLoader: Unknown light type " + b.LightType.value + ", defaulting to a THREE.PointLight."), a = new THREE.PointLight(a, d)
                }
                void 0 !==
                    b.CastShadows && 1 === b.CastShadows.value && (a.castShadow = !0)
            }
            return a
        },
        createMesh: function(a, b, c) {
            var d = null,
                e = null,
                f = [];
            a.children.forEach(function(a) {
                b.has(a.ID) && (d = b.get(a.ID));
                c.has(a.ID) && f.push(c.get(a.ID))
            });
            1 < f.length ? e = f : 0 < f.length ? e = f[0] : (e = new THREE.MeshPhongMaterial({
                color: 13421772
            }), f.push(e));
            "color" in d.attributes && f.forEach(function(a) {
                a.vertexColors = THREE.VertexColors
            });
            d.FBX_Deformer ? (f.forEach(function(a) {
                a.skinning = !0
            }), a = new THREE.SkinnedMesh(d, e), a.normalizeSkinWeights()) : a = new THREE.Mesh(d,
                e);
            return a
        },
        createCurve: function(a, b) {
            var c = a.children.reduce(function(a, c) {
                    b.has(c.ID) && (a = b.get(c.ID));
                    return a
                }, null),
                d = new THREE.LineBasicMaterial({
                    color: 3342591,
                    linewidth: 1
                });
            return new THREE.Line(c, d)
        },
        getTransformData: function(a, b) {
            var c = {};
            "InheritType" in b && (c.inheritType = parseInt(b.InheritType.value));
            c.eulerOrder = "RotationOrder" in b ? l(b.RotationOrder.value) : "ZYX";
            "Lcl_Translation" in b && (c.translation = b.Lcl_Translation.value);
            "PreRotation" in b && (c.preRotation = b.PreRotation.value);
            "Lcl_Rotation" in
            b && (c.rotation = b.Lcl_Rotation.value);
            "PostRotation" in b && (c.postRotation = b.PostRotation.value);
            "Lcl_Scaling" in b && (c.scale = b.Lcl_Scaling.value);
            "ScalingOffset" in b && (c.scalingOffset = b.ScalingOffset.value);
            "ScalingPivot" in b && (c.scalingPivot = b.ScalingPivot.value);
            "RotationOffset" in b && (c.rotationOffset = b.RotationOffset.value);
            "RotationPivot" in b && (c.rotationPivot = b.RotationPivot.value);
            a.userData.transformData = c
        },
        setLookAtProperties: function(a, b) {
            "LookAtProperty" in b && z.get(a.ID).children.forEach(function(b) {
                "LookAtProperty" ===
                b.relationship && (b = v.Objects.Model[b.ID], "Lcl_Translation" in b && (b = b.Lcl_Translation.value, void 0 !== a.target ? (a.target.position.fromArray(b), u.add(a.target)) : a.lookAt((new THREE.Vector3).fromArray(b))))
            })
        },
        bindSkeleton: function(a, b, c) {
            var d = this.parsePoseNodes(),
                e;
            for (e in a) {
                var f = a[e];
                z.get(parseInt(f.ID)).parents.forEach(function(a) {
                    b.has(a.ID) && z.get(a.ID).parents.forEach(function(a) {
                        c.has(a.ID) && c.get(a.ID).bind(new THREE.Skeleton(f.bones), d[a.ID])
                    })
                })
            }
        },
        parsePoseNodes: function() {
            var a = {};
            if ("Pose" in
                v.Objects) {
                var b = v.Objects.Pose,
                    c;
                for (c in b)
                    if ("BindPose" === b[c].attrType) {
                        var d = b[c].PoseNode;
                        Array.isArray(d) ? d.forEach(function(b) {
                            a[b.Node] = (new THREE.Matrix4).fromArray(b.Matrix.a)
                        }) : a[d.Node] = (new THREE.Matrix4).fromArray(d.Matrix.a)
                    }
            }
            return a
        },
        createAmbientLight: function() {
            if ("GlobalSettings" in v && "AmbientColor" in v.GlobalSettings) {
                var a = v.GlobalSettings.AmbientColor.value,
                    b = a[0],
                    c = a[1];
                a = a[2];
                if (0 !== b || 0 !== c || 0 !== a) b = new THREE.Color(b, c, a), u.add(new THREE.AmbientLight(b, 1))
            }
        },
        setupMorphMaterials: function() {
            var a =
                this;
            u.traverse(function(b) {
                b.isMesh && b.geometry.morphAttributes.position && b.geometry.morphAttributes.position.length && (Array.isArray(b.material) ? b.material.forEach(function(c, d) {
                    a.setupMorphMaterial(b, c, d)
                }) : a.setupMorphMaterial(b, b.material))
            })
        },
        setupMorphMaterial: function(a, b, c) {
            var d = a.uuid,
                e = b.uuid,
                f = !1;
            u.traverse(function(a) {
                a.isMesh && (Array.isArray(a.material) ? a.material.forEach(function(b) {
                    b.uuid === e && a.uuid !== d && (f = !0)
                }) : a.material.uuid === e && a.uuid !== d && (f = !0))
            });
            !0 === f ? (b = b.clone(), b.morphTargets = !0, void 0 === c ? a.material = b : a.material[c] = b) : b.morphTargets = !0
        }
    };
    g.prototype = {
        constructor: g,
        parse: function(a) {
            var b = new Map;
            if ("Geometry" in v.Objects) {
                var c = v.Objects.Geometry,
                    d;
                for (d in c) {
                    var e = z.get(parseInt(d));
                    e = this.parseGeometry(e, c[d], a);
                    b.set(parseInt(d), e)
                }
            }
            return b
        },
        parseGeometry: function(a, b, c) {
            switch (b.attrType) {
                case "Mesh":
                    return this.parseMeshGeometry(a, b, c);
                case "NurbsCurve":
                    return this.parseNurbsGeometry(b)
            }
        },
        parseMeshGeometry: function(a, b, c) {
            var d = c.skeletons,
                e = c.morphTargets,
                f = a.parents.map(function(a) {
                    return v.Objects.Model[a.ID]
                });
            if (0 !== f.length) {
                c = a.children.reduce(function(a, b) {
                    void 0 !== d[b.ID] && (a = d[b.ID]);
                    return a
                }, null);
                a = a.children.reduce(function(a, b) {
                    void 0 !== e[b.ID] && (a = e[b.ID]);
                    return a
                }, null);
                f = f[0];
                var g = {};
                "RotationOrder" in f && (g.eulerOrder = l(f.RotationOrder.value));
                "InheritType" in f && (g.inheritType = parseInt(f.InheritType.value));
                "GeometricTranslation" in f && (g.translation = f.GeometricTranslation.value);
                "GeometricRotation" in f && (g.rotation = f.GeometricRotation.value);
                "GeometricScaling" in f && (g.scale = f.GeometricScaling.value);
                f = m(g);
                return this.genGeometry(b, c, a, f)
            }
        },
        genGeometry: function(a, b, c, d) {
            var e = new THREE.BufferGeometry;
            a.attrName && (e.name = a.attrName);
            var f = this.parseGeoNode(a, b),
                g = this.genBuffers(f),
                k = new THREE.Float32BufferAttribute(g.vertex, 3);
            d.applyToBufferAttribute(k);
            e.addAttribute("position", k);
            0 < g.colors.length && e.addAttribute("color", new THREE.Float32BufferAttribute(g.colors, 3));
            b && (e.addAttribute("skinIndex", new THREE.Uint16BufferAttribute(g.weightsIndices, 4)), e.addAttribute("skinWeight", new THREE.Float32BufferAttribute(g.vertexWeights,
                4)), e.FBX_Deformer = b);
            0 < g.normal.length && (b = new THREE.Float32BufferAttribute(g.normal, 3), (new THREE.Matrix3).getNormalMatrix(d).applyToBufferAttribute(b), e.addAttribute("normal", b));
            g.uvs.forEach(function(a, b) {
                var c = "uv" + (b + 1).toString();
                0 === b && (c = "uv");
                e.addAttribute(c, new THREE.Float32BufferAttribute(g.uvs[b], 2))
            });
            if (f.material && "AllSame" !== f.material.mappingType) {
                var h = g.materialIndex[0],
                    l = 0;
                g.materialIndex.forEach(function(a, b) {
                    a !== h && (e.addGroup(l, b - l, h), h = a, l = b)
                });
                0 < e.groups.length && (f = e.groups[e.groups.length -
                    1], f = f.start + f.count, f !== g.materialIndex.length && e.addGroup(f, g.materialIndex.length - f, h));
                0 === e.groups.length && e.addGroup(0, g.materialIndex.length, g.materialIndex[0])
            }
            this.addMorphTargets(e, a, c, d);
            return e
        },
        parseGeoNode: function(a, b) {
            var c = {};
            c.vertexPositions = void 0 !== a.Vertices ? a.Vertices.a : [];
            c.vertexIndices = void 0 !== a.PolygonVertexIndex ? a.PolygonVertexIndex.a : [];
            a.LayerElementColor && (c.color = this.parseVertexColors(a.LayerElementColor[0]));
            a.LayerElementMaterial && (c.material = this.parseMaterialIndices(a.LayerElementMaterial[0]));
            a.LayerElementNormal && (c.normal = this.parseNormals(a.LayerElementNormal[0]));
            if (a.LayerElementUV) {
                c.uv = [];
                for (var d = 0; a.LayerElementUV[d];) c.uv.push(this.parseUVs(a.LayerElementUV[d])), d++
            }
            c.weightTable = {};
            null !== b && (c.skeleton = b, b.rawBones.forEach(function(a, b) {
                a.indices.forEach(function(d, e) {
                    void 0 === c.weightTable[d] && (c.weightTable[d] = []);
                    c.weightTable[d].push({
                        id: b,
                        weight: a.weights[e]
                    })
                })
            }));
            return c
        },
        genBuffers: function(a) {
            var b = {
                    vertex: [],
                    normal: [],
                    colors: [],
                    uvs: [],
                    materialIndex: [],
                    vertexWeights: [],
                    weightsIndices: []
                },
                c = 0,
                d = 0,
                e = !1,
                f = [],
                g = [],
                k = [],
                h = [],
                l = [],
                m = [],
                n = this;
            a.vertexIndices.forEach(function(t, q) {
                var w = !1;
                0 > t && (t ^= -1, w = !0);
                var r = [],
                    B = [];
                f.push(3 * t, 3 * t + 1, 3 * t + 2);
                if (a.color) {
                    var u = p(q, c, t, a.color);
                    k.push(u[0], u[1], u[2])
                }
                if (a.skeleton) {
                    void 0 !== a.weightTable[t] && a.weightTable[t].forEach(function(a) {
                        B.push(a.weight);
                        r.push(a.id)
                    });
                    if (4 < B.length) {
                        e || (console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."), e = !0);
                        var v = [0, 0, 0,
                                0
                            ],
                            y = [0, 0, 0, 0];
                        B.forEach(function(a, b) {
                            var c = a,
                                d = r[b];
                            y.forEach(function(a, b, e) {
                                c > a && (e[b] = c, c = a, a = v[b], v[b] = d, d = a)
                            })
                        });
                        r = v;
                        B = y
                    }
                    for (; 4 > B.length;) B.push(0), r.push(0);
                    for (u = 0; 4 > u; ++u) l.push(B[u]), m.push(r[u])
                }
                a.normal && (u = p(q, c, t, a.normal), g.push(u[0], u[1], u[2]));
                if (a.material && "AllSame" !== a.material.mappingType) var x = p(q, c, t, a.material)[0];
                a.uv && a.uv.forEach(function(a, b) {
                    var d = p(q, c, t, a);
                    void 0 === h[b] && (h[b] = []);
                    h[b].push(d[0]);
                    h[b].push(d[1])
                });
                d++;
                w && (n.genFace(b, a, f, x, g, k, h, l, m, d), c++, d = 0, f = [],
                    g = [], k = [], h = [], l = [], m = [])
            });
            return b
        },
        genFace: function(a, b, c, d, e, f, g, k, h, l) {
            for (var m = 2; m < l; m++) a.vertex.push(b.vertexPositions[c[0]]), a.vertex.push(b.vertexPositions[c[1]]), a.vertex.push(b.vertexPositions[c[2]]), a.vertex.push(b.vertexPositions[c[3 * (m - 1)]]), a.vertex.push(b.vertexPositions[c[3 * (m - 1) + 1]]), a.vertex.push(b.vertexPositions[c[3 * (m - 1) + 2]]), a.vertex.push(b.vertexPositions[c[3 * m]]), a.vertex.push(b.vertexPositions[c[3 * m + 1]]), a.vertex.push(b.vertexPositions[c[3 * m + 2]]), b.skeleton && (a.vertexWeights.push(k[0]),
                a.vertexWeights.push(k[1]), a.vertexWeights.push(k[2]), a.vertexWeights.push(k[3]), a.vertexWeights.push(k[4 * (m - 1)]), a.vertexWeights.push(k[4 * (m - 1) + 1]), a.vertexWeights.push(k[4 * (m - 1) + 2]), a.vertexWeights.push(k[4 * (m - 1) + 3]), a.vertexWeights.push(k[4 * m]), a.vertexWeights.push(k[4 * m + 1]), a.vertexWeights.push(k[4 * m + 2]), a.vertexWeights.push(k[4 * m + 3]), a.weightsIndices.push(h[0]), a.weightsIndices.push(h[1]), a.weightsIndices.push(h[2]), a.weightsIndices.push(h[3]), a.weightsIndices.push(h[4 * (m - 1)]), a.weightsIndices.push(h[4 *
                    (m - 1) + 1]), a.weightsIndices.push(h[4 * (m - 1) + 2]), a.weightsIndices.push(h[4 * (m - 1) + 3]), a.weightsIndices.push(h[4 * m]), a.weightsIndices.push(h[4 * m + 1]), a.weightsIndices.push(h[4 * m + 2]), a.weightsIndices.push(h[4 * m + 3])), b.color && (a.colors.push(f[0]), a.colors.push(f[1]), a.colors.push(f[2]), a.colors.push(f[3 * (m - 1)]), a.colors.push(f[3 * (m - 1) + 1]), a.colors.push(f[3 * (m - 1) + 2]), a.colors.push(f[3 * m]), a.colors.push(f[3 * m + 1]), a.colors.push(f[3 * m + 2])), b.material && "AllSame" !== b.material.mappingType && (a.materialIndex.push(d),
                a.materialIndex.push(d), a.materialIndex.push(d)), b.normal && (a.normal.push(e[0]), a.normal.push(e[1]), a.normal.push(e[2]), a.normal.push(e[3 * (m - 1)]), a.normal.push(e[3 * (m - 1) + 1]), a.normal.push(e[3 * (m - 1) + 2]), a.normal.push(e[3 * m]), a.normal.push(e[3 * m + 1]), a.normal.push(e[3 * m + 2])), b.uv && b.uv.forEach(function(b, c) {
                void 0 === a.uvs[c] && (a.uvs[c] = []);
                a.uvs[c].push(g[c][0]);
                a.uvs[c].push(g[c][1]);
                a.uvs[c].push(g[c][2 * (m - 1)]);
                a.uvs[c].push(g[c][2 * (m - 1) + 1]);
                a.uvs[c].push(g[c][2 * m]);
                a.uvs[c].push(g[c][2 * m + 1])
            })
        },
        addMorphTargets: function(a,
            b, c, d) {
            if (null !== c) {
                a.morphAttributes.position = [];
                var e = this;
                c.rawTargets.forEach(function(c) {
                    var f = v.Objects.Geometry[c.geoID];
                    void 0 !== f && e.genMorphGeometry(a, b, f, d, c.name)
                })
            }
        },
        genMorphGeometry: function(a, b, c, d, e) {
            var f = new THREE.BufferGeometry;
            c.attrName && (f.name = c.attrName);
            f = void 0 !== b.PolygonVertexIndex ? b.PolygonVertexIndex.a : [];
            b = void 0 !== b.Vertices ? b.Vertices.a.slice() : [];
            for (var g = void 0 !== c.Vertices ? c.Vertices.a : [], k = void 0 !== c.Indexes ? c.Indexes.a : [], h = 0; h < k.length; h++) {
                var l = 3 * k[h];
                b[l] +=
                    g[3 * h];
                b[l + 1] += g[3 * h + 1];
                b[l + 2] += g[3 * h + 2]
            }
            f = this.genBuffers({
                vertexIndices: f,
                vertexPositions: b
            });
            f = new THREE.Float32BufferAttribute(f.vertex, 3);
            f.name = e || c.attrName;
            d.applyToBufferAttribute(f);
            a.morphAttributes.position.push(f)
        },
        parseNormals: function(a) {
            var b = a.MappingInformationType,
                c = a.ReferenceInformationType,
                d = a.Normals.a,
                e = [];
            "IndexToDirect" === c && ("NormalIndex" in a ? e = a.NormalIndex.a : "NormalsIndex" in a && (e = a.NormalsIndex.a));
            return {
                dataSize: 3,
                buffer: d,
                indices: e,
                mappingType: b,
                referenceType: c
            }
        },
        parseUVs: function(a) {
            var b = a.MappingInformationType,
                c = a.ReferenceInformationType,
                d = a.UV.a,
                e = [];
            "IndexToDirect" === c && (e = a.UVIndex.a);
            return {
                dataSize: 2,
                buffer: d,
                indices: e,
                mappingType: b,
                referenceType: c
            }
        },
        parseVertexColors: function(a) {
            var b = a.MappingInformationType,
                c = a.ReferenceInformationType,
                d = a.Colors.a,
                e = [];
            "IndexToDirect" === c && (e = a.ColorIndex.a);
            return {
                dataSize: 4,
                buffer: d,
                indices: e,
                mappingType: b,
                referenceType: c
            }
        },
        parseMaterialIndices: function(a) {
            var b = a.MappingInformationType,
                c = a.ReferenceInformationType;
            if ("NoMappingInformation" === b) return {
                dataSize: 1,
                buffer: [0],
                indices: [0],
                mappingType: "AllSame",
                referenceType: c
            };
            a = a.Materials.a;
            for (var d = [], e = 0; e < a.length; ++e) d.push(e);
            return {
                dataSize: 1,
                buffer: a,
                indices: d,
                mappingType: b,
                referenceType: c
            }
        },
        parseNurbsGeometry: function(a) {
            if (void 0 === THREE.NURBSCurve) return console.error("THREE.FBXLoader: The loader relies on THREE.NURBSCurve for any nurbs present in the model. Nurbs will show up as empty geometry."), new THREE.BufferGeometry;
            var b = parseInt(a.Order);
            if (isNaN(b)) return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",
                a.Order, a.id), new THREE.BufferGeometry;
            --b;
            for (var c = a.KnotVector.a, d = [], e = a.Points.a, f = 0, g = e.length; f < g; f += 4) d.push((new THREE.Vector4).fromArray(e, f));
            if ("Closed" === a.Form) d.push(d[0]);
            else if ("Periodic" === a.Form) {
                var k = b;
                var h = c.length - 1 - k;
                for (f = 0; f < b; ++f) d.push(d[f])
            }
            a = (new THREE.NURBSCurve(b, c, d, k, h)).getPoints(7 * d.length);
            var l = new Float32Array(3 * a.length);
            a.forEach(function(a, b) {
                a.toArray(l, 3 * b)
            });
            a = new THREE.BufferGeometry;
            a.addAttribute("position", new THREE.BufferAttribute(l, 3));
            return a
        }
    };
    h.prototype = {
        constructor: h,
        parse: function() {
            var a = [],
                b = this.parseClips();
            if (void 0 !== b)
                for (var c in b) {
                    var d = this.addClip(b[c]);
                    a.push(d)
                }
            return a
        },
        parseClips: function() {
            if (void 0 !== v.Objects.AnimationCurve) {
                var a = this.parseAnimationCurveNodes();
                this.parseAnimationCurves(a);
                a = this.parseAnimationLayers(a);
                return this.parseAnimStacks(a)
            }
        },
        parseAnimationCurveNodes: function() {
            var a = v.Objects.AnimationCurveNode,
                b = new Map,
                c;
            for (c in a) {
                var d = a[c];
                null !== d.attrName.match(/S|R|T|DeformPercent/) && (d = {
                    id: d.id,
                    attr: d.attrName,
                    curves: {}
                }, b.set(d.id, d))
            }
            return b
        },
        parseAnimationCurves: function(a) {
            var b = v.Objects.AnimationCurve,
                c;
            for (c in b) {
                var e = {
                        id: b[c].id,
                        times: b[c].KeyTime.a.map(d),
                        values: b[c].KeyValueFloat.a
                    },
                    f = z.get(e.id);
                if (void 0 !== f) {
                    var g = f.parents[0].ID;
                    f = f.parents[0].relationship;
                    f.match(/X/) ? a.get(g).curves.x = e : f.match(/Y/) ? a.get(g).curves.y = e : f.match(/Z/) ? a.get(g).curves.z = e : f.match(/d|DeformPercent/) && a.has(g) && (a.get(g).curves.morph = e)
                }
            }
        },
        parseAnimationLayers: function(a) {
            var b = v.Objects.AnimationLayer,
                c = new Map,
                d;
            for (d in b) {
                var e = [];
                b = z.get(parseInt(d));
                void 0 !== b && (b.children.forEach(function(b, c) {
                    if (a.has(b.ID)) {
                        var d = a.get(b.ID);
                        if (void 0 !== d.curves.x || void 0 !== d.curves.y || void 0 !== d.curves.z) {
                            if (void 0 === e[c]) {
                                var f = z.get(b.ID).parents.filter(function(a) {
                                    return void 0 !== a.relationship
                                })[0].ID;
                                if (void 0 !== f) {
                                    var g = v.Objects.Model[f.toString()],
                                        k = {
                                            modelName: THREE.PropertyBinding.sanitizeNodeName(g.attrName),
                                            ID: g.id,
                                            initialPosition: [0, 0, 0],
                                            initialRotation: [0, 0, 0],
                                            initialScale: [1, 1, 1]
                                        };
                                    u.traverse(function(a) {
                                        a.ID ===
                                            g.id && (k.transform = a.matrix, a.userData.transformData && (k.eulerOrder = a.userData.transformData.eulerOrder))
                                    });
                                    k.transform || (k.transform = new THREE.Matrix4);
                                    "PreRotation" in g && (k.preRotation = g.PreRotation.value);
                                    "PostRotation" in g && (k.postRotation = g.PostRotation.value);
                                    e[c] = k
                                }
                            }
                            e[c] && (e[c][d.attr] = d)
                        } else if (void 0 !== d.curves.morph) {
                            if (void 0 === e[c]) {
                                var h = z.get(b.ID).parents.filter(function(a) {
                                    return void 0 !== a.relationship
                                })[0].ID;
                                f = z.get(h).parents[0].ID;
                                f = z.get(f).parents[0].ID;
                                f = z.get(f).parents[0].ID;
                                g = v.Objects.Model[f];
                                k = {
                                    modelName: THREE.PropertyBinding.sanitizeNodeName(g.attrName),
                                    morphName: v.Objects.Deformer[h].attrName
                                };
                                e[c] = k
                            }
                            e[c][d.attr] = d
                        }
                    }
                }), c.set(parseInt(d), e))
            }
            return c
        },
        parseAnimStacks: function(a) {
            var b = v.Objects.AnimationStack,
                c = {},
                d;
            for (d in b) {
                var e = z.get(parseInt(d)).children;
                1 < e.length && console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");
                e = a.get(e[0].ID);
                c[d] = {
                    name: b[d].attrName,
                    layer: e
                }
            }
            return c
        },
        addClip: function(a) {
            var b = [],
                c = this;
            a.layer.forEach(function(a) {
                b = b.concat(c.generateTracks(a))
            });
            return new THREE.AnimationClip(a.name, -1, b)
        },
        generateTracks: function(a) {
            var b = [],
                c = new THREE.Vector3,
                d = new THREE.Quaternion,
                e = new THREE.Vector3;
            a.transform && a.transform.decompose(c, d, e);
            c = c.toArray();
            d = (new THREE.Euler).setFromQuaternion(d, a.eulerOrder).toArray();
            e = e.toArray();
            void 0 !== a.T && 0 < Object.keys(a.T.curves).length && (c = this.generateVectorTrack(a.modelName, a.T.curves, c, "position"), void 0 !== c &&
                b.push(c));
            void 0 !== a.R && 0 < Object.keys(a.R.curves).length && (d = this.generateRotationTrack(a.modelName, a.R.curves, d, a.preRotation, a.postRotation, a.eulerOrder), void 0 !== d && b.push(d));
            void 0 !== a.S && 0 < Object.keys(a.S.curves).length && (e = this.generateVectorTrack(a.modelName, a.S.curves, e, "scale"), void 0 !== e && b.push(e));
            void 0 !== a.DeformPercent && (a = this.generateMorphTrack(a), void 0 !== a && b.push(a));
            return b
        },
        generateVectorTrack: function(a, b, c, d) {
            var e = this.getTimesForAllAxes(b);
            b = this.getKeyframeTrackValues(e,
                b, c);
            return new THREE.VectorKeyframeTrack(a + "." + d, e, b)
        },
        generateRotationTrack: function(a, b, c, d, e, f) {
            void 0 !== b.x && (this.interpolateRotations(b.x), b.x.values = b.x.values.map(THREE.Math.degToRad));
            void 0 !== b.y && (this.interpolateRotations(b.y), b.y.values = b.y.values.map(THREE.Math.degToRad));
            void 0 !== b.z && (this.interpolateRotations(b.z), b.z.values = b.z.values.map(THREE.Math.degToRad));
            var g = this.getTimesForAllAxes(b);
            b = this.getKeyframeTrackValues(g, b, c);
            void 0 !== d && (d = d.map(THREE.Math.degToRad), d.push(f),
                d = (new THREE.Euler).fromArray(d), d = (new THREE.Quaternion).setFromEuler(d));
            void 0 !== e && (e = e.map(THREE.Math.degToRad), e.push(f), e = (new THREE.Euler).fromArray(e), e = (new THREE.Quaternion).setFromEuler(e).inverse());
            c = new THREE.Quaternion;
            for (var k = new THREE.Euler, h = [], l = 0; l < b.length; l += 3) k.set(b[l], b[l + 1], b[l + 2], f), c.setFromEuler(k), void 0 !== d && c.premultiply(d), void 0 !== e && c.multiply(e), c.toArray(h, l / 3 * 4);
            return new THREE.QuaternionKeyframeTrack(a + ".quaternion", g, h)
        },
        generateMorphTrack: function(a) {
            var b =
                a.DeformPercent.curves.morph,
                c = b.values.map(function(a) {
                    return a / 100
                }),
                d = u.getObjectByName(a.modelName).morphTargetDictionary[a.morphName];
            return new THREE.NumberKeyframeTrack(a.modelName + ".morphTargetInfluences[" + d + "]", b.times, c)
        },
        getTimesForAllAxes: function(a) {
            var b = [];
            void 0 !== a.x && (b = b.concat(a.x.times));
            void 0 !== a.y && (b = b.concat(a.y.times));
            void 0 !== a.z && (b = b.concat(a.z.times));
            return b = b.sort(function(a, b) {
                return a - b
            }).filter(function(a, b, c) {
                return c.indexOf(a) == b
            })
        },
        getKeyframeTrackValues: function(a,
            b, c) {
            var d = [],
                e = -1,
                f = -1,
                g = -1;
            a.forEach(function(a) {
                b.x && (e = b.x.times.indexOf(a));
                b.y && (f = b.y.times.indexOf(a));
                b.z && (g = b.z.times.indexOf(a)); - 1 !== e ? (a = b.x.values[e], d.push(a), c[0] = a) : d.push(c[0]); - 1 !== f ? (a = b.y.values[f], d.push(a), c[1] = a) : d.push(c[1]); - 1 !== g ? (a = b.z.values[g], d.push(a), c[2] = a) : d.push(c[2])
            });
            return d
        },
        interpolateRotations: function(a) {
            for (var b = 1; b < a.values.length; b++) {
                var c = a.values[b - 1],
                    d = a.values[b] - c,
                    e = Math.abs(d);
                if (180 <= e) {
                    e /= 180;
                    d /= e;
                    c += d;
                    var f = a.times[b - 1];
                    e = (a.times[b] - f) / e;
                    f += e;
                    for (var g = [], k = []; f < a.times[b];) g.push(f), f += e, k.push(c), c += d;
                    a.times = A(a.times, b, g);
                    a.values = A(a.values, b, k)
                }
            }
        }
    };
    a.prototype = {
        constructor: a,
        getPrevNode: function() {
            return this.nodeStack[this.currentIndent - 2]
        },
        getCurrentNode: function() {
            return this.nodeStack[this.currentIndent - 1]
        },
        getCurrentProp: function() {
            return this.currentProp
        },
        pushStack: function(a) {
            this.nodeStack.push(a);
            this.currentIndent += 1
        },
        popStack: function() {
            this.nodeStack.pop();
            --this.currentIndent
        },
        setCurrentProp: function(a, b) {
            this.currentProp =
                a;
            this.currentPropName = b
        },
        parse: function(a) {
            this.currentIndent = 0;
            this.allNodes = new f;
            this.nodeStack = [];
            this.currentProp = [];
            this.currentPropName = "";
            var b = this,
                c = a.split(/[\r\n]+/);
            c.forEach(function(a, d) {
                var e = a.match(/^[\s\t]*;/),
                    f = a.match(/^[\s\t]*$/);
                if (!e && !f) {
                    e = a.match("^\\t{" + b.currentIndent + "}(\\w+):(.*){", "");
                    f = a.match("^\\t{" + b.currentIndent + "}(\\w+):[\\s\\t\\r\\n](.*)");
                    var g = a.match("^\\t{" + (b.currentIndent - 1) + "}}");
                    e ? b.parseNodeBegin(a, e) : f ? b.parseNodeProperty(a, f, c[++d]) : g ? b.popStack() :
                        a.match(/^[^\s\t}]/) && b.parseNodePropertyContinued(a)
                }
            });
            return this.allNodes
        },
        parseNodeBegin: function(a, b) {
            var c = b[1].trim().replace(/^"/, "").replace(/"$/, ""),
                d = b[2].split(",").map(function(a) {
                    return a.trim().replace(/^"/, "").replace(/"$/, "")
                }),
                e = {
                    name: c
                };
            d = this.parseNodeAttr(d);
            var f = this.getCurrentNode();
            0 === this.currentIndent ? this.allNodes.add(c, e) : c in f ? ("PoseNode" === c ? f.PoseNode.push(e) : void 0 !== f[c].id && (f[c] = {}, f[c][f[c].id] = f[c]), "" !== d.id && (f[c][d.id] = e)) : "number" === typeof d.id ? (f[c] = {},
                f[c][d.id] = e) : "Properties70" !== c && (f[c] = "PoseNode" === c ? [e] : e);
            "number" === typeof d.id && (e.id = d.id);
            "" !== d.name && (e.attrName = d.name);
            "" !== d.type && (e.attrType = d.type);
            this.pushStack(e)
        },
        parseNodeAttr: function(a) {
            var b = a[0];
            "" !== a[0] && (b = parseInt(a[0]), isNaN(b) && (b = a[0]));
            var c = "",
                d = "";
            1 < a.length && (c = a[1].replace(/^(\w+)::/, ""), d = a[2]);
            return {
                id: b,
                name: c,
                type: d
            }
        },
        parseNodeProperty: function(a, b, c) {
            var d = b[1].replace(/^"/, "").replace(/"$/, "").trim();
            b = b[2].replace(/^"/, "").replace(/"$/, "").trim();
            "Content" ===
            d && "," === b && (b = c.replace(/"/g, "").replace(/,$/, "").trim());
            c = this.getCurrentNode();
            if ("Properties70" === c.name) this.parseNodeSpecialProperty(a, d, b);
            else {
                if ("C" === d) {
                    d = b.split(",").slice(1);
                    a = parseInt(d[0]);
                    var e = parseInt(d[1]),
                        f = b.split(",").slice(3);
                    f = f.map(function(a) {
                        return a.trim().replace(/^"/, "")
                    });
                    d = "connections";
                    b = [a, e];
                    y(b, f);
                    void 0 === c[d] && (c[d] = [])
                }
                "Node" === d && (c.id = b);
                d in c && Array.isArray(c[d]) ? c[d].push(b) : "a" !== d ? c[d] = b : c.a = b;
                this.setCurrentProp(c, d);
                "a" === d && "," !== b.slice(-1) && (c.a =
                    q(b))
            }
        },
        parseNodePropertyContinued: function(a) {
            var b = this.getCurrentNode();
            b.a += a;
            "," !== a.slice(-1) && (b.a = q(b.a))
        },
        parseNodeSpecialProperty: function(a, b, c) {
            var d = c.split('",').map(function(a) {
                return a.trim().replace(/^"/, "").replace(/\s/, "_")
            });
            a = d[0];
            b = d[1];
            c = d[2];
            var e = d[3];
            d = d[4];
            switch (b) {
                case "int":
                case "enum":
                case "bool":
                case "ULongLong":
                case "double":
                case "Number":
                case "FieldOfView":
                    d = parseFloat(d);
                    break;
                case "Color":
                case "ColorRGB":
                case "Vector3D":
                case "Lcl_Translation":
                case "Lcl_Rotation":
                case "Lcl_Scaling":
                    d =
                        q(d)
            }
            this.getPrevNode()[a] = {
                type: b,
                type2: c,
                flag: e,
                value: d
            };
            this.setCurrentProp(this.getPrevNode(), a)
        }
    };
    e.prototype = {
        constructor: e,
        parse: function(a) {
            a = new c(a);
            a.skip(23);
            var b = a.getUint32();
            console.log("THREE.FBXLoader: FBX binary version: " + b);
            for (var d = new f; !this.endOfContent(a);) {
                var e = this.parseNode(a, b);
                null !== e && d.add(e.name, e)
            }
            return d
        },
        endOfContent: function(a) {
            return 0 === a.size() % 16 ? (a.getOffset() + 160 + 16 & -16) >= a.size() : a.getOffset() + 160 + 16 >= a.size()
        },
        parseNode: function(a, b) {
            var c = {},
                d = 7500 <=
                b ? a.getUint64() : a.getUint32(),
                e = 7500 <= b ? a.getUint64() : a.getUint32();
            7500 <= b ? a.getUint64() : a.getUint32();
            var f = a.getUint8();
            f = a.getString(f);
            if (0 === d) return null;
            for (var g = [], k = 0; k < e; k++) g.push(this.parseProperty(a));
            k = 0 < g.length ? g[0] : "";
            var h = 1 < g.length ? g[1] : "",
                l = 2 < g.length ? g[2] : "";
            for (c.singleProperty = 1 === e && a.getOffset() === d ? !0 : !1; d > a.getOffset();) e = this.parseNode(a, b), null !== e && this.parseSubNode(f, c, e);
            c.propertyList = g;
            "number" === typeof k && (c.id = k);
            "" !== h && (c.attrName = h);
            "" !== l && (c.attrType = l);
            "" !== f && (c.name = f);
            return c
        },
        parseSubNode: function(a, b, c) {
            if (!0 === c.singleProperty) a = c.propertyList[0], Array.isArray(a) ? (b[c.name] = c, c.a = a) : b[c.name] = a;
            else if ("Connections" === a && "C" === c.name) {
                var d = [];
                c.propertyList.forEach(function(a, b) {
                    0 !== b && d.push(a)
                });
                void 0 === b.connections && (b.connections = []);
                b.connections.push(d)
            } else if ("Properties70" === c.name) Object.keys(c).forEach(function(a) {
                b[a] = c[a]
            });
            else if ("Properties70" === a && "P" === c.name) {
                a = c.propertyList[0];
                var e = c.propertyList[1],
                    f = c.propertyList[2],
                    g = c.propertyList[3];
                0 === a.indexOf("Lcl ") && (a = a.replace("Lcl ", "Lcl_"));
                0 === e.indexOf("Lcl ") && (e = e.replace("Lcl ", "Lcl_"));
                var k = "Color" === e || "ColorRGB" === e || "Vector" === e || "Vector3D" === e || 0 === e.indexOf("Lcl_") ? [c.propertyList[4], c.propertyList[5], c.propertyList[6]] : c.propertyList[4];
                b[a] = {
                    type: e,
                    type2: f,
                    flag: g,
                    value: k
                }
            } else void 0 === b[c.name] ? "number" === typeof c.id ? (b[c.name] = {}, b[c.name][c.id] = c) : b[c.name] = c : "PoseNode" === c.name ? (Array.isArray(b[c.name]) || (b[c.name] = [b[c.name]]), b[c.name].push(c)) :
                void 0 === b[c.name][c.id] && (b[c.name][c.id] = c)
        },
        parseProperty: function(a) {
            var b = a.getString(1);
            switch (b) {
                case "C":
                    return a.getBoolean();
                case "D":
                    return a.getFloat64();
                case "F":
                    return a.getFloat32();
                case "I":
                    return a.getInt32();
                case "L":
                    return a.getInt64();
                case "R":
                    return b = a.getUint32(), a.getArrayBuffer(b);
                case "S":
                    return b = a.getUint32(), a.getString(b);
                case "Y":
                    return a.getInt16();
                case "b":
                case "c":
                case "d":
                case "f":
                case "i":
                case "l":
                    var d = a.getUint32(),
                        e = a.getUint32(),
                        f = a.getUint32();
                    if (0 === e) switch (b) {
                        case "b":
                        case "c":
                            return a.getBooleanArray(d);
                        case "d":
                            return a.getFloat64Array(d);
                        case "f":
                            return a.getFloat32Array(d);
                        case "i":
                            return a.getInt32Array(d);
                        case "l":
                            return a.getInt64Array(d)
                    }
                    "undefined" === typeof Zlib && console.error("THREE.FBXLoader: External library Inflate.min.js required, obtain or import from https://github.com/imaya/zlib.js");
                    a = new Zlib.Inflate(new Uint8Array(a.getArrayBuffer(f)));
                    a = new c(a.decompress().buffer);
                    switch (b) {
                        case "b":
                        case "c":
                            return a.getBooleanArray(d);
                        case "d":
                            return a.getFloat64Array(d);
                        case "f":
                            return a.getFloat32Array(d);
                        case "i":
                            return a.getInt32Array(d);
                        case "l":
                            return a.getInt64Array(d)
                    }
                default:
                    throw Error("THREE.FBXLoader: Unknown property type " + b);
            }
        }
    };
    c.prototype = {
        constructor: c,
        getOffset: function() {
            return this.offset
        },
        size: function() {
            return this.dv.buffer.byteLength
        },
        skip: function(a) {
            this.offset += a
        },
        getBoolean: function() {
            return 1 === (this.getUint8() & 1)
        },
        getBooleanArray: function(a) {
            for (var b = [], c = 0; c < a; c++) b.push(this.getBoolean());
            return b
        },
        getUint8: function() {
            var a = this.dv.getUint8(this.offset);
            this.offset +=
                1;
            return a
        },
        getInt16: function() {
            var a = this.dv.getInt16(this.offset, this.littleEndian);
            this.offset += 2;
            return a
        },
        getInt32: function() {
            var a = this.dv.getInt32(this.offset, this.littleEndian);
            this.offset += 4;
            return a
        },
        getInt32Array: function(a) {
            for (var b = [], c = 0; c < a; c++) b.push(this.getInt32());
            return b
        },
        getUint32: function() {
            var a = this.dv.getUint32(this.offset, this.littleEndian);
            this.offset += 4;
            return a
        },
        getInt64: function() {
            if (this.littleEndian) {
                var a = this.getUint32();
                var b = this.getUint32()
            } else b = this.getUint32(),
                a = this.getUint32();
            return b & 2147483648 ? (b = ~b & 4294967295, a = ~a & 4294967295, 4294967295 === a && (b = b + 1 & 4294967295), -(4294967296 * b + (a + 1 & 4294967295))) : 4294967296 * b + a
        },
        getInt64Array: function(a) {
            for (var b = [], c = 0; c < a; c++) b.push(this.getInt64());
            return b
        },
        getUint64: function() {
            if (this.littleEndian) {
                var a = this.getUint32();
                var b = this.getUint32()
            } else b = this.getUint32(), a = this.getUint32();
            return 4294967296 * b + a
        },
        getFloat32: function() {
            var a = this.dv.getFloat32(this.offset, this.littleEndian);
            this.offset += 4;
            return a
        },
        getFloat32Array: function(a) {
            for (var b = [], c = 0; c < a; c++) b.push(this.getFloat32());
            return b
        },
        getFloat64: function() {
            var a = this.dv.getFloat64(this.offset, this.littleEndian);
            this.offset += 8;
            return a
        },
        getFloat64Array: function(a) {
            for (var b = [], c = 0; c < a; c++) b.push(this.getFloat64());
            return b
        },
        getArrayBuffer: function(a) {
            var b = this.dv.buffer.slice(this.offset, this.offset + a);
            this.offset += a;
            return b
        },
        getString: function(a) {
            for (var b = [], c = 0; c < a; c++) b[c] = this.getUint8();
            a = b.indexOf(0);
            0 <= a && (b = b.slice(0, a));
            return THREE.LoaderUtils.decodeText(new Uint8Array(b))
        }
    };
    f.prototype = {
        constructor: f,
        add: function(a, b) {
            this[a] = b
        }
    };
    var D = [],
        E = new THREE.Euler,
        F = new THREE.Vector3;
    return n
}();
CTLText.prototype = {
    constructor: CTLText,
    __autofit: function() {
        if (this._bFitText) {
            for (var n = this._iFontSize;
                (this._oText.getBounds().height > this._iHeight - 2 * this._iPaddingV || this._oText.getBounds().width > this._iWidth - 2 * this._iPaddingH) && !(n--, this._oText.font = n + "px " + this._szFont, this._oText.lineHeight = Math.round(n * this._fLineHeightFactor), this.__updateY(), this.__verticalAlign(), 8 > n););
            this._iFontSize = n
        }
    },
    __verticalAlign: function() {
        if (this._bVerticalAlign) {
            var n = this._oText.getBounds().height;
            this._oText.y -=
                (n - this._iHeight) / 2 + this._iPaddingV
        }
    },
    __updateY: function() {
        this._oText.y = this._y + this._iPaddingV;
        switch (this._oText.textBaseline) {
            case "middle":
                this._oText.y += this._oText.lineHeight / 2 + (this._iFontSize * this._fLineHeightFactor - this._iFontSize)
        }
    },
    __createText: function(n) {
        this._bDebug && (this._oDebugShape = new createjs.Shape, this._oDebugShape.graphics.beginFill("rgba(255,0,0,0.5)").drawRect(this._x, this._y, this._iWidth, this._iHeight), this._oContainer.addChild(this._oDebugShape));
        this._oText = new createjs.Text(n,
            this._iFontSize + "px " + this._szFont, this._szColor);
        this._oText.textBaseline = "middle";
        this._oText.lineHeight = Math.round(this._iFontSize * this._fLineHeightFactor);
        this._oText.textAlign = this._szAlign;
        this._oText.lineWidth = this._bMultiline ? this._iWidth - 2 * this._iPaddingH : null;
        switch (this._szAlign) {
            case "center":
                this._oText.x = this._x + this._iWidth / 2;
                break;
            case "left":
                this._oText.x = this._x + this._iPaddingH;
                break;
            case "right":
                this._oText.x = this._x + this._iWidth - this._iPaddingH
        }
        this._oContainer.addChild(this._oText);
        this.refreshText(n)
    },
    setVerticalAlign: function(n) {
        this._bVerticalAlign = n
    },
    setOutline: function(n) {
        null !== this._oText && (this._oText.outline = n)
    },
    setShadow: function(n, b, g, h) {
        null !== this._oText && (this._oText.shadow = new createjs.Shadow(n, b, g, h))
    },
    setColor: function(n) {
        this._oText.color = n
    },
    setAlpha: function(n) {
        this._oText.alpha = n
    },
    setY: function(n) {
        this._y = this._oText.y = n
    },
    removeTweens: function() {
        createjs.Tween.removeTweens(this._oText)
    },
    getText: function() {
        return this._oText
    },
    getY: function() {
        return this._y
    },
    getFontSize: function() {
        return this._iFontSize
    },
    refreshText: function(n) {
        "" === n && (n = " ");
        null === this._oText && this.__createText(n);
        this._oText.text = n;
        this._oText.font = this._iFontSize + "px " + this._szFont;
        this._oText.lineHeight = Math.round(this._iFontSize * this._fLineHeightFactor);
        this.__autofit();
        this.__updateY();
        this.__verticalAlign()
    }
};

function CTLText(n, b, g, h, a, e, c, f, k, d, p, m, l, q, r, y, A) {
    this._oContainer = n;
    this._x = b;
    this._y = g;
    this._iWidth = h;
    this._iHeight = a;
    this._bMultiline = y;
    this._iFontSize = e;
    this._szAlign = c;
    this._szColor = f;
    this._szFont = k;
    this._iPaddingH = p;
    this._iPaddingV = m;
    this._bVerticalAlign = r;
    this._bFitText = q;
    this._bDebug = A;
    this._oDebugShape = null;
    this._fLineHeightFactor = d;
    this._oText = null;
    l && this.__createText(l)
}! function() {
    function n(a) {
        var b = a;
        if (h[b]) b = h[b];
        else {
            for (var c = b, f, k = [], d = 0; c;) {
                if (null !== (f = g.text.exec(c))) k.push(f[0]);
                else if (null !== (f = g.modulo.exec(c))) k.push("%");
                else if (null !== (f = g.placeholder.exec(c))) {
                    if (f[2]) {
                        d |= 1;
                        var p = [],
                            m = f[2],
                            l;
                        if (null !== (l = g.key.exec(m)))
                            for (p.push(l[1]);
                                "" !== (m = m.substring(l[0].length));)
                                if (null !== (l = g.key_access.exec(m))) p.push(l[1]);
                                else if (null !== (l = g.index_access.exec(m))) p.push(l[1]);
                        else throw new SyntaxError("[sprintf] failed to parse named argument key");
                        else throw new SyntaxError("[sprintf] failed to parse named argument key");
                        f[2] = p
                    } else d |= 2;
                    if (3 === d) throw Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
                    k.push({
                        placeholder: f[0],
                        param_no: f[1],
                        keys: f[2],
                        sign: f[3],
                        pad_char: f[4],
                        align: f[5],
                        width: f[6],
                        precision: f[7],
                        type: f[8]
                    })
                } else throw new SyntaxError("[sprintf] unexpected placeholder");
                c = c.substring(f[0].length)
            }
            b = h[b] = k
        }
        c = arguments;
        f = 1;
        k = b.length;
        p = "";
        var q, r;
        for (m = 0; m < k; m++)
            if ("string" === typeof b[m]) p += b[m];
            else if ("object" === typeof b[m]) {
            l = b[m];
            if (l.keys)
                for (d = c[f], q = 0; q < l.keys.length; q++) {
                    if (void 0 == d) throw Error(n('[sprintf] Cannot access property "%s" of undefined value "%s"', l.keys[q], l.keys[q - 1]));
                    d = d[l.keys[q]]
                } else d = l.param_no ? c[l.param_no] : c[f++];
            g.not_type.test(l.type) && g.not_primitive.test(l.type) && d instanceof Function && (d = d());
            if (g.numeric_arg.test(l.type) && "number" !== typeof d && isNaN(d)) throw new TypeError(n("[sprintf] expecting number but found %T", d));
            g.number.test(l.type) && (r = 0 <= d);
            switch (l.type) {
                case "b":
                    d = parseInt(d, 10).toString(2);
                    break;
                case "c":
                    d = String.fromCharCode(parseInt(d, 10));
                    break;
                case "d":
                case "i":
                    d = parseInt(d, 10);
                    break;
                case "j":
                    d = JSON.stringify(d, null, l.width ? parseInt(l.width) : 0);
                    break;
                case "e":
                    d = l.precision ? parseFloat(d).toExponential(l.precision) : parseFloat(d).toExponential();
                    break;
                case "f":
                    d = l.precision ? parseFloat(d).toFixed(l.precision) : parseFloat(d);
                    break;
                case "g":
                    d = l.precision ? String(Number(d.toPrecision(l.precision))) : parseFloat(d);
                    break;
                case "o":
                    d = (parseInt(d,
                        10) >>> 0).toString(8);
                    break;
                case "s":
                    d = String(d);
                    d = l.precision ? d.substring(0, l.precision) : d;
                    break;
                case "t":
                    d = String(!!d);
                    d = l.precision ? d.substring(0, l.precision) : d;
                    break;
                case "T":
                    d = Object.prototype.toString.call(d).slice(8, -1).toLowerCase();
                    d = l.precision ? d.substring(0, l.precision) : d;
                    break;
                case "u":
                    d = parseInt(d, 10) >>> 0;
                    break;
                case "v":
                    d = d.valueOf();
                    d = l.precision ? d.substring(0, l.precision) : d;
                    break;
                case "x":
                    d = (parseInt(d, 10) >>> 0).toString(16);
                    break;
                case "X":
                    d = (parseInt(d, 10) >>> 0).toString(16).toUpperCase()
            }
            if (g.json.test(l.type)) p +=
                d;
            else {
                if (!g.number.test(l.type) || r && !l.sign) var y = "";
                else y = r ? "+" : "-", d = d.toString().replace(g.sign, "");
                q = l.pad_char ? "0" === l.pad_char ? "0" : l.pad_char.charAt(1) : " ";
                var A = l.width - (y + d).length;
                A = l.width ? 0 < A ? q.repeat(A) : "" : "";
                p += l.align ? y + d + A : "0" === q ? y + A + d : A + y + d
            }
        }
        return p
    }

    function b(a, b) {
        return n.apply(null, [a].concat(b || []))
    }
    var g = {
            not_string: /[^s]/,
            not_bool: /[^t]/,
            not_type: /[^T]/,
            not_primitive: /[^v]/,
            number: /[diefg]/,
            numeric_arg: /[bcdiefguxX]/,
            json: /[j]/,
            not_json: /[^j]/,
            text: /^[^\x25]+/,
            modulo: /^\x25{2}/,
            placeholder: /^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
            key: /^([a-z_][a-z_\d]*)/i,
            key_access: /^\.([a-z_][a-z_\d]*)/i,
            index_access: /^\[(\d+)\]/,
            sign: /^[+-]/
        },
        h = Object.create(null);
    "undefined" !== typeof exports && (exports.sprintf = n, exports.vsprintf = b);
    "undefined" !== typeof window && (window.sprintf = n, window.vsprintf = b, "function" === typeof define && define.amd && define(function() {
        return {
            sprintf: n,
            vsprintf: b
        }
    }))
}();

function CGUIExpandible(n, b, g, h) {
    var a, e, c, f, k, d, p, m;
    this._init = function(b, g, h, l) {
        f = [];
        d = new createjs.Container;
        d.x = b;
        d.y = g;
        l.addChild(d);
        p = new createjs.Container;
        d.addChild(p);
        m = new createjs.Container;
        d.addChild(m);
        c = !1;
        k = new CGfxButton(0, 0, h, m);
        k.addEventListener(ON_MOUSE_UP, this._onMenu, this);
        e = a = 120
    };
    this.unload = function() {
        k.unload();
        h.removeChild(d)
    };
    this.scale = function(a) {
        d.scaleX = d.scaleY = a
    };
    this.refreshPos = function() {
        d.x = n + s_iOffsetX;
        d.y = b + s_iOffsetY
    };
    this.addButton = function(a) {
        a = a.getButtonImage();
        a.x = 0;
        a.y = 0;
        a.visible = 0;
        p.addChildAt(a, 0);
        f.push(a)
    };
    this._onMenu = function() {
        (c = !c) ? l._expand(): l._collapse()
    };
    this._expand = function() {
        for (var b = 0; b < f.length; b++) f[b].visible = !0, createjs.Tween.get(f[b], {
            override: !0
        }).wait(300 * b / 2).to({
            y: a + b * e
        }, 300, createjs.Ease.cubicOut)
    };
    this._collapse = function() {
        for (var a = 0; a < f.length; a++) {
            var b = f[f.length - 1 - a];
            createjs.Tween.get(b, {
                override: !0
            }).wait(300 * a / 2).to({
                y: 0
            }, 300, createjs.Ease.cubicOut).call(function(a) {
                a.visible = !1
            }, [b])
        }
    };
    var l = this;
    this._init(n, b, g,
        h)
}

function CMain(n) {
    var b, g = 0,
        h = 0,
        a = STATE_LOADING,
        e, c;
    this.initContainer = function() {
        var a = document.getElementById("canvas");
        s_oStage = new createjs.Stage(a);
        createjs.Touch.enable(s_oStage);
        s_oStage.preventSelection = !1;
        s_bMobile = jQuery.browser.mobile;
        !1 === s_bMobile && (s_oStage.enableMouseOver(20), $("body").on("contextmenu", "#canvas", function(a) {
            return !1
        }));
        s_iPrevTime = (new Date).getTime();
        createjs.Ticker.addEventListener("tick", this._update);
        createjs.Ticker.framerate = FPS;
        navigator.userAgent.match(/Windows Phone/i) && (DISABLE_SOUND_MOBILE = !0);
        s_oSpriteLibrary = new CSpriteLibrary;
        e = new CPreloader
        // seekAndDestroy() ? e = new CPreloader : window.location.href = "http://www.codethislab.com/contact-us.html";
        b = !0
    };
    this.soundLoaded = function() {
        g++;
        e.refreshLoader(Math.floor(g / h * 100))
    };
    this._initSounds = function() {
        Howler.mute(!s_bAudioActive);
        s_aSoundsInfo = [];
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "win_panel",
            loop: !1,
            volume: 1,
            ingamename: "win_panel"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "lose_panel",
            loop: !1,
            volume: 1,
            ingamename: "lose_panel"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "click",
            loop: !1,
            volume: 1,
            ingamename: "click"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "ball_extracted",
            loop: !1,
            volume: 1,
            ingamename: "ball_extracted"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "soundtrack",
            loop: !0,
            volume: 1,
            ingamename: "soundtrack"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "num_matched",
            loop: !1,
            volume: 1,
            ingamename: "num_matched"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "start_extraction",
            loop: !1,
            volume: 1,
            ingamename: "start_extraction"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "balls_shuffle",
            loop: !1,
            volume: 1,
            ingamename: "balls_shuffle"
        });
        h += s_aSoundsInfo.length;
        s_aSounds = [];
        for (var a = 0; a < s_aSoundsInfo.length; a++) this.tryToLoadSound(s_aSoundsInfo[a], !1)
    };
    this.tryToLoadSound = function(a, b) {
        setTimeout(function() {
            s_aSounds[a.ingamename] = new Howl({
                src: [a.path + a.filename + ".mp3"],
                autoplay: !1,
                preload: !0,
                loop: a.loop,
                volume: a.volume,
                onload: s_oMain.soundLoaded,
                onloaderror: function(a, b) {
                    for (var c = 0; c < s_aSoundsInfo.length; c++)
                        if (a === s_aSounds[s_aSoundsInfo[c].ingamename]._sounds[0]._id) {
                            s_oMain.tryToLoadSound(s_aSoundsInfo[c], !0);
                            break
                        }
                },
                onplayerror: function(a) {
                    for (var b = 0; b < s_aSoundsInfo.length; b++)
                        if (a === s_aSounds[s_aSoundsInfo[b].ingamename]._sounds[0]._id) {
                            s_aSounds[s_aSoundsInfo[b].ingamename].once("unlock", function() {
                                s_aSounds[s_aSoundsInfo[b].ingamename].play();
                                "soundtrack" === s_aSoundsInfo[b].ingamename && null !== s_oGame && setVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME)
                            });
                            break
                        }
                }
            })
        }, b ? 200 : 0)
    };
    this._loadImages = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("preloader_anim",
            "./sprites/preloader_anim.png");
        s_oSpriteLibrary.addSprite("but_play", "./sprites/but_play.png");
        s_oSpriteLibrary.addSprite("but_fullscreen", "./sprites/but_fullscreen.png");
        s_oSpriteLibrary.addSprite("but_info", "./sprites/but_info.png");
        s_oSpriteLibrary.addSprite("ctl_logo", "./sprites/ctl_logo.png");
        s_oSpriteLibrary.addSprite("but_yes", "./sprites/but_yes.png");
        s_oSpriteLibrary.addSprite("but_no", "./sprites/but_no.png");
        s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
        s_oSpriteLibrary.addSprite("but_restart",
            "./sprites/but_restart.png");
        s_oSpriteLibrary.addSprite("logo", "./sprites/logo.png");
        s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
        s_oSpriteLibrary.addSprite("bg_game", "./sprites/bg_game.jpg");
        s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
        s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
        s_oSpriteLibrary.addSprite("but_home", "./sprites/but_home.png");
        s_oSpriteLibrary.addSprite("but_paytable", "./sprites/but_paytable.png");
        s_oSpriteLibrary.addSprite("slot_paytable_bg",
            "./sprites/slot_paytable_bg.png");
        for (var a = 1; a <= TOTAL_NUMBERS; a++) s_oSpriteLibrary.addSprite("ball_" + a, "./sprites/balls/ball_" + a + ".png");
        s_oSpriteLibrary.addSprite("bg_help", "./sprites/bg_help.png");
        s_oSpriteLibrary.addSprite("hand_anim", "./sprites/hand_anim.png");
        s_oSpriteLibrary.addSprite("toggle_num", "./sprites/toggle_num.png");
        s_oSpriteLibrary.addSprite("but_long", "./sprites/but_long.png");
        s_oSpriteLibrary.addSprite("but_settings", "./sprites/but_settings.png");
        s_oSpriteLibrary.addSprite("pick_numbers_panel",
            "./sprites/pick_numbers_panel.png");
        s_oSpriteLibrary.addSprite("numbers_played_info_panel", "./sprites/numbers_played_info_panel.png");
        s_oSpriteLibrary.addSprite("start_extraction_toggle", "./sprites/start_extraction_toggle.png");
        s_oSpriteLibrary.addSprite("bg_nummatched", "./sprites/bg_nummatched.png");
        s_oSpriteLibrary.addSprite("sphere_back_0", "./sprites/sphere_back_0.png");
        s_oSpriteLibrary.addSprite("sphere_front_0", "./sprites/sphere_front_0.png");
        for (a = 0; a < PAYTABLE_SETTINGS.length; a++) "" !== PAYTABLE_SETTINGS[a].prize_img_url &&
            s_oSpriteLibrary.addSprite("prize_" + a, PAYTABLE_SETTINGS[a].prize_img_url);
        s_oSpriteLibrary.addSprite("ball_icon", "./sprites/ball_icon.png");
        h += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites()
    };
    this._onImagesLoaded = function() {
        g++;
        e.refreshLoader(Math.floor(g / h * 100))
    };
    this._onAllImagesLoaded = function() {};
    this._allResourcesLoaded = function() {
        e.unload();
        s_oSoundTrack = playSound("soundtrack", 1, !0);
        this.gotoMenu()
    };
    this.preloaderReady = function() {
        this._loadImages();
        !1 !== DISABLE_SOUND_MOBILE &&
            !1 !== s_bMobile || this._initSounds();
        b = !0
    };
    this.gotoMenu = function() {
        new CMenu;
        a = STATE_MENU
    };
    this.gotoGame = function() {
        c = new CGame(f, 0);
        a = STATE_GAME
    };
    this.gotoLevelMenu = function() {
        new CLevelMenu;
        a = STATE_MENU
    };
    this.gotoHelp = function() {
        new CHelp;
        a = STATE_HELP
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
    this._update = function(e) {
        if (!1 !== b) {
            var d = (new Date).getTime();
            s_iTimeElaps = d - s_iPrevTime;
            s_iCntTime += s_iTimeElaps;
            s_iCntFps++;
            s_iPrevTime = d;
            1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps, s_iCntTime -= 1E3, s_iCntFps = 0);
            a === STATE_GAME && c.update();
            s_oStage.update(e)
        }
    };
    s_oMain = this;
    var f = n;
    ENABLE_CHECK_ORIENTATION = !1;
    ENABLE_FULLSCREEN = n.fullscreen;
    SHOW_CREDITS = n.show_credits;
    PAYTABLE_SETTINGS =
        n.paytable_settings;
    s_bAudioActive = n.audio_enable_on_startup;
    this.initContainer()
}
var s_bMobile, s_bAudioActive = !1,
    s_iCntTime = 0,
    s_iTimeElaps = 0,
    s_iPrevTime = 0,
    s_iCntFps = 0,
    s_iCurFps = 0,
    s_oPhysicsController, s_iCanvasResizeHeight, s_iCanvasResizeWidth, s_iCanvasOffsetHeight, s_iCanvasOffsetWidth, s_iCurLevel, s_iBackgroundLevel, s_oDrawLayer, s_oStage, s_oMain, s_oSpriteLibrary, s_oSoundTrack = null,
    s_oTweenController, s_oLocalStorage, s_bFullscreen = !1,
    s_bStorageAvailable = !0,
    s_aSounds, s_aSoundsInfo, CANVAS_WIDTH = 1200,
    CANVAS_HEIGHT = 1200,
    EDGEBOARD_X = 320,
    EDGEBOARD_Y = 320,
    DISABLE_SOUND_MOBILE = !1,
    PRIMARY_FONT =
    "sourcesanspro-black",
    SECONDARY_FONT = "sourcesanspro-semibold",
    GAME_NAME = "lottery",
    FPS = 30,
    FPS_TIME = 1E3 / FPS,
    SOUNDTRACK_VOLUME_IN_GAME = .3,
    STATE_LOADING = 0,
    STATE_MENU = 1,
    STATE_HELP = 1,
    STATE_GAME = 3,
    ON_MOUSE_DOWN = 0,
    ON_MOUSE_UP = 1,
    ON_MOUSE_OVER = 2,
    ON_MOUSE_OUT = 3,
    ON_DRAG_START = 4,
    ON_DRAG_END = 5,
    ON_CONTROLLER_END = 8,
    ON_CONTROLLER_REMOVE = 9,
    ON_CONTROLLER_ROLL = 10,
    ON_BACK_MENU = 12,
    ON_RESTART = 13,
    ON_NEXT_LEVEL = 14,
    ON_REFUSE = 15,
    ON_CONFIRM = 16,
    ON_REDEEM = 17,
    NUM_FRAMES_PER_BALL = 18,
    BALL_LOTTERY_RADIUS = 40,
    BALL_MASS = .1,
    BALL_RADIUS =
    5,
    BALL_LINEAR_DAMPING = .8,
    BALL_SCALE_REFERENCE, BALLS_START_POSITION = [],
    WORLD_GRAVITY = -980 / 3,
    CANVAS_3D_OPACITY = .5,
    SHOW_3D_RENDER = !1,
    MOVE_CAMERA_TEST = !1,
    START_CAMERA_POSITION = {
        x: 0,
        y: 0,
        z: 100
    },
    NEAR = 0,
    FAR = 1E3,
    CAMERA_ZOOM = 6,
    TOTAL_NUMBERS = 40,
    NUMBERS_TO_PICK = 8,
    COMBO_LENGTH_TO_WIN, WIN_RATIO, PAYTABLE_SETTINGS, SHUFFLE_TICK_TIME = 50,
    SHUFFLE_IMPULSE_STRENGTH = 9,
    SHUFFLE_NUM_BALL_TO_MOVE_PER_TICK = Math.floor(TOTAL_NUMBERS / 8),
    ENABLE_FULLSCREEN, ENABLE_CHECK_ORIENTATION, TEXT_START = "START",
    TEXT_ARE_SURE = "ARE YOU SURE YOU WANT TO QUIT THE GAME?",
    TEXT_PAYTABLE = "THE SUM OF ALL WIN OCCURENCES IN paytable_settings IS HIGHER THAN 100. TO MAKE THE GAME WORKING PROPERLY, PLEASE FIX THE VALUES IN index.html",
    TEXT_PICK_NUMBERS = "PICK %s NUMBERS",
    TEXT_PICK_NUMBERS_SINGLE = "PICK %s NUMBER",
    TEXT_LETS_PLAY = "LET'S PLAY!",
    TEXT_YOUR_NUMBERS = "YOUR NUMBERS",
    TEXT_CONGRATULATIONS = "CONGRATULATIONS!",
    TEXT_CONGRATULATIONS_EXPL = "YOU MATCHED %d NUMBERS",
    TEXT_CONGRATULATIONS_EXPL_SINGLE = "YOU MATCHED %d NUMBER",
    TEXT_GAMEOVER = "GAME OVER",
    TEXT_MATCH = "MATCH!",
    TEXT_HELP =
    "CLICK %s TO LAUNCH THE DRAW!",
    TEXT_REDEEM = "REDEEM",
    TEXT_DEVELOPED = "DEVELOPED BY",
    TEXT_SHARE_IMAGE = "200x200.jpg",
    TEXT_SHARE_TITLE = "Congratulations!",
    TEXT_SHARE_MSG1 = "You collected <strong>",
    TEXT_SHARE_MSG2 = " points</strong>!<br><br>Share your score with your friends!",
    TEXT_SHARE_SHARE1 = "My score is ",
    TEXT_SHARE_SHARE2 = " points! Can you do better?";

function CPreloader() {
    var n, b, g, h, a, e, c, f, k;
    this._init = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
        s_oSpriteLibrary.addSprite("200x200", "./sprites/200x200.jpg");
        s_oSpriteLibrary.addSprite("but_start", "./sprites/but_start.png");
        s_oSpriteLibrary.loadSprites();
        k = new createjs.Container;
        s_oStage.addChild(k)
    };
    this.unload = function() {
        k.removeAllChildren()
    };
    this._onImagesLoaded = function() {};
    this._onAllImagesLoaded =
        function() {
            this.attachSprites();
            s_oMain.preloaderReady()
        };
    this.attachSprites = function() {
        var d = new createjs.Shape;
        d.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        k.addChild(d);
        d = s_oSpriteLibrary.getSprite("200x200");
        c = createBitmap(d);
        c.regX = .5 * d.width;
        c.regY = .5 * d.height;
        c.x = CANVAS_WIDTH / 2;
        c.y = CANVAS_HEIGHT / 2 - 80;
        k.addChild(c);
        f = new createjs.Shape;
        f.graphics.beginFill("rgba(0,0,0,0.01)").drawRoundRect(c.x - 100, c.y - 100, 200, 200, 10);
        k.addChild(f);
        c.mask = f;
        d = s_oSpriteLibrary.getSprite("progress_bar");
        h = createBitmap(d);
        h.x = CANVAS_WIDTH / 2 - d.width / 2;
        h.y = CANVAS_HEIGHT / 2 + 70;
        k.addChild(h);
        n = d.width;
        b = d.height;
        a = new createjs.Shape;
        a.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(h.x, h.y, 1, b);
        k.addChild(a);
        h.mask = a;
        g = new createjs.Text("", "30px " + PRIMARY_FONT, "#fff");
        g.x = CANVAS_WIDTH / 2;
        g.y = CANVAS_HEIGHT / 2 + 150;
        g.textBaseline = "alphabetic";
        g.textAlign = "center";
        k.addChild(g);
        e = new createjs.Shape;
        e.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        k.addChild(e);
        createjs.Tween.get(e).to({
                alpha: 0
            },
            500).call(function() {
            createjs.Tween.removeTweens(e);
            k.removeChild(e)
        })
    };
    this._onButStartRelease = function() {
        s_oMain._allResourcesLoaded()
    };
    this.refreshLoader = function(c) {
        g.text = c + "%";
        100 === c && (s_oMain._allResourcesLoaded(), g.visible = !1, h.visible = !1);
        a.graphics.clear();
        c = Math.floor(c * n / 100);
        a.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(h.x, h.y, c, b)
    };
    this._init()
}

function CMenu() {
    var n, b, g, h, a, e, c, f, k, d, p, m, l, q, r, y, A, v = null,
        z = null;
    this._init = function() {
        k = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        s_oStage.addChild(k);
        var r = s_oSpriteLibrary.getSprite("logo");
        A = createBitmap(r);
        A.regX = r.width / 2;
        A.regY = r.height / 2;
        A.x = CANVAS_WIDTH / 2;
        A.y = 600;
        s_oStage.addChild(A);
        r = s_oSpriteLibrary.getSprite("but_play");
        a = CANVAS_WIDTH / 2;
        e = CANVAS_HEIGHT - 100;
        d = new CToggle(a, e, r, !0, s_oStage);
        d.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
        d.setScaleOnClick(!1);
        r = s_oSpriteLibrary.getSprite("but_info");
        g = r.height / 2 + 10;
        h = r.height / 2 + 10;
        l = new CGfxButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 240, r, s_oStage);
        l.addEventListener(ON_MOUSE_UP, this._onCreditsBut, this);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) r = s_oSpriteLibrary.getSprite("audio_icon"), c = CANVAS_WIDTH - r.height / 2 - 10, f = r.height / 2 + 10, m = new CToggle(c, f, r, s_bAudioActive, s_oStage), m.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        r = window.document;
        var y = r.documentElement;
        v = y.requestFullscreen || y.mozRequestFullScreen ||
            y.webkitRequestFullScreen || y.msRequestFullscreen;
        z = r.exitFullscreen || r.mozCancelFullScreen || r.webkitExitFullscreen || r.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (v = !1);
        v && screenfull.enabled && (r = s_oSpriteLibrary.getSprite("but_fullscreen"), n = g + r.width / 2 + 10, b = r.height / 2 + 10, q = new CToggle(n, b, r, s_bFullscreen, s_oStage), q.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        this._checkPaytableErrors();
        p = new createjs.Shape;
        p.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(p);
        createjs.Tween.get(p).to({
            alpha: 0
        }, 1E3);
        setVolume("soundtrack", 1);
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.refreshButtonPos = function(k, p) {
        l.setPosition(g + k, p + h);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || m.setPosition(c - k, p + f);
        v && screenfull.enabled && q.setPosition(n + k, b + p);
        s_bLandscape ? (d.setPosition(a, e - s_iOffsetY), A.y = 580, smartResize(A, 0, 50)) : (d.setPosition(a, e - s_iOffsetY - 200), A.y = 600, smartResize(A, -450, 0));
        r && r.smartResize()
    };
    this._checkPaytableErrors = function() {
        for (var a = 0, b = 0; b < PAYTABLE_SETTINGS.length; b++) a +=
            PAYTABLE_SETTINGS[b].win_occurrence;
        100 < a && new CMsgBox(TEXT_PAYTABLE, s_oStage)
    };
    this.unload = function() {
        d.unload();
        d = null;
        p.off("mousedown", y);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) m.unload(), m = null;
        v && screenfull.enabled && q.unload();
        r = null;
        s_oStage.removeAllChildren();
        s_oMenu = null
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onButPlayRelease = function() {
        var a = this;
        y = p.on("mousedown", function() {});
        createjs.Tween.get(p, {
            override: !0
        }).to({
                alpha: 1
            },
            500).call(function() {
            a.unload();
            $(s_oMain).trigger("start_session");
            s_oMain.gotoGame()
        })
    };
    this._onCreditsBut = function() {
        r = new CCreditsPanel
    };
    this.resetFullscreenBut = function() {
        q.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? z.call(window.document) : v.call(window.document.documentElement);
        sizeHandler()
    };
    s_oMenu = this;
    this._init()
}
var s_oMenu = null;

function CGame(n, b) {
    var g, h, a, e, c, f, k, d, p, m, l, q, r, y, A = null,
        v, z, u, D, E, F, t, w, B, I, C, J, R, M, O, L, N, X, x, K, U;
    this._init = function(b) {
        a = !1;
        f = SHUFFLE_TICK_TIME;
        k = 0;
        l = [];
        r = [];
        A = createOrthoGraphicCamera();
        I = new CScenario;
        b = s_oSpriteLibrary.getSprite("bg_game");
        b = createBitmap(b);
        s_oStage.addChild(b);
        resizeCanvas3D();
        v = new createjs.Container;
        v.x = CANVAS_WIDTH / 2;
        v.y = CANVAS_HEIGHT / 2;
        s_oStage.addChild(v);
        u = new createjs.Container;
        s_oStage.addChild(u);
        E = new createjs.Container;
        s_oStage.addChild(E);
        b = s_oSpriteLibrary.getSprite("start_extraction_toggle");
        g = 996;
        h = 800;
        J = new CToggleExtraction(g, h, b, !0, u);
        J.addEventListener(ON_MOUSE_UP, this.startExtraction, this);
        J.setScaleOnClick(!1);
        F = new CInterface(u);
        R = new CNumMatchedPanel(u);
        E.addChild(void 0);
        C = new CSelectNumbersPanel;
        C.instantShow();
        b = s_oSpriteLibrary.getSprite("msg_box");
        t = new CPaytable(b);
        b = s_oSpriteLibrary.getSprite("msg_box");
        w = new CLosePanel(b);
        w.addEventListener(ON_BACK_MENU, this.onExit, this);
        w.addEventListener(ON_RESTART, this.onRestart, this);
        w.addEventListener(ON_REDEEM, this.onRedeem, this);
        B = new CWinPanel(b);
        B.addEventListener(ON_BACK_MENU, this.onExit, this);
        B.addEventListener(ON_RESTART, this.onRestart, this);
        B.addEventListener(ON_REDEEM, this.onRedeem, this);
        D = new CHelpPanel(u);
        D.hide()
    };
    this.refreshButtonPos = function() {
        s_bLandscape ? (v.x = CANVAS_WIDTH / 2 - 200, v.y = CANVAS_HEIGHT / 2 - 10, J.setPosition(g, h), smartResize(v, 0, -330)) : (v.x = CANVAS_WIDTH / 2 - 14, v.y = CANVAS_HEIGHT / 2 - 100, J.setPosition(CANVAS_WIDTH / 2, h + 200), smartResize(v, 30, 0));
        C.smartResize();
        t.smartResize();
        w.smartResize();
        B.smartResize();
        D.refreshPos();
        R.refreshPos()
    };
    this.convert3dPosTo2dScreen = function(a, b) {
        var c = (new THREE.Vector3(a.x, a.y, a.z)).project(b),
            d = .5 * Math.floor(s_iCanvasResizeWidth),
            e = .5 * Math.floor(s_iCanvasResizeHeight);
        c.x = (c.x * d + d) * s_fInverseScaling;
        c.y = (-(c.y * e) + e) * s_fInverseScaling;
        return c
    };
    this.scenarioLoaded = function() {
        c = 1;
        a = !0;
        this._initProbability();
        this._initGameElements();
        this.startBallsShuffle();
        s_oGame.refreshButtonPos()
    };
    this._initProbability = function() {
        p = [];
        for (var a = 0, b, c = 0; c < PAYTABLE_SETTINGS.length; c++) 0 ===
            PAYTABLE_SETTINGS[c].win_occurrence ? p[c] = {
                combo: PAYTABLE_SETTINGS[c].num_balls_matched,
                lower_range: -1,
                upper_range: -1
            } : (b = a + PAYTABLE_SETTINGS[c].win_occurrence, p[c] = {
                combo: PAYTABLE_SETTINGS[c].num_balls_matched,
                lower_range: a,
                upper_range: b
            }, a = b);
        100 > b && p.push({
            combo: 0,
            lower_range: a,
            upper_range: 100
        })
    };
    this._initGameElements = function() {
        var a = s_oSpriteLibrary.getSprite("sphere_back_0"),
            b = createBitmap(a);
        b.x = -305;
        b.y = -300;
        v.addChild(b);
        this._init2DBalls();
        a = s_oSpriteLibrary.getSprite("sphere_front_0");
        a = createBitmap(a);
        a.x = b.x;
        a.y = b.y;
        v.addChild(a)
    };
    this.setBallSleep = function(a, b) {
        b ? m[a].getPhysics().sleep() : m[a].getPhysics().wakeUp()
    };
    this._init2DBalls = function() {
        z = new createjs.Container;
        z.x = -CANVAS_WIDTH / 2;
        z.y = -CANVAS_HEIGHT / 2;
        v.addChild(z);
        m = [];
        for (var a = I.getBalls(), b = 0; b < a.length; b++) m[b] = new CBall(0, 0, a[b], z, b);
        this.updateBallsPosition()
    };
    this.updateBallsPosition = function() {
        for (var a = 0; a < m.length; a++) {
            var b = m[a].getPhysics();
            if (void 0 === b) return;
            b = this.convert3dPosTo2dScreen(b.position, A);
            m[a].setPosition(b.x, b.y);
            m[a].rolls()
        }
        z.sortChildren(this.sortFunction)
    };
    this.sortFunction = function(a, b, c) {
        return a.z > b.z ? -1 : a.z < b.z ? 1 : 0
    };
    this.startBallsShuffle = function() {
        if (0 === l.length) {
            for (var a = 0; a < TOTAL_NUMBERS; a++) l.push(a);
            shuffle(l)
        }
        for (a = 0; a < SHUFFLE_NUM_BALL_TO_MOVE_PER_TICK; a++) {
            var b = l[l.length - 1]; - 1 === r.indexOf(b) && s_oScenario.addImpulse(b);
            l.splice(l.length - 1, 1);
            if (0 === l.length) break
        }
        for (a = 0; a < m.length; a++) 1E3 < m[a].getPhysics().angularVelocity.lengthSquared() && m[a].getPhysics().angularVelocity.scale(.3,
            m[a].getPhysics().angularVelocity)
    };
    this.chooseABallToExtract = function() {
        d = y[k];
        var a = 300 + 300 * Math.random();
        O = createjs.Tween.get(void 0).to({}, a).call(function() {
            s_oGame.moveBallToTheCenterBeforeTheExit()
        })
    };
    this.moveBallToTheCenterBeforeTheExit = function() {
        L = createjs.Tween.get(m[d].getPhysics().position).to({
            x: 0,
            y: 37,
            z: -1
        }, 1500, createjs.Ease.cubicIn).call(function() {
            s_oGame.moveBallToTheExit()
        })
    };
    this.moveBallToTheExit = function() {
        I.getWorld().removeBody(m[d].getPhysics());
        r.push(d);
        s_oGame.setBallSleep(d, !0);
        m[d].setBallFrame(0);
        N = createjs.Tween.get(m[d].getPhysics().position).to({
            x: 0,
            y: 44,
            z: -1
        }, 200, createjs.Ease.cubicIn).call(function() {
            s_oGame.moveBallToTheEndOfTube()
        })
    };
    this.moveBallToTheEndOfTube = function() {
        playSound("ball_extracted", 1, !1);
        var a = 270,
            b = {
                value: 90
            };
        M = b;
        var c = m[d],
            e = k,
            f = 50 - 9.5 * e; - 4.75 >= f && (a = linearFunction(f, 0, -70, a, 90 + (a - 90) / 2));
        X = createjs.Tween.get(c.getSprite()).to({
            rotation: 0
        }, 1E3).to({
            rotation: 220
        }, 1500);
        c.fallInTubeAnim();
        x = createjs.Tween.get(b).to({
            value: a
        }, 2500).call(function() {
            var a =
                linearFunction(f, 0, 50, 0, 1E3);
            if (-4.75 < f) {
                K = createjs.Tween.get(c.getPhysics().position).to({
                    x: f
                }, a);
                var b = linearFunction(f, 0, 50, 220, 440 + 40 * Math.random());
                U = createjs.Tween.get(c.getSprite()).to({
                    rotation: b
                }, a).call(function() {
                    c.endFallingTube()
                })
            } else c.endFallingTube();
            e === NUMBERS_TO_PICK - 1 && s_oGame.extractionFinish()
        });
        x.addEventListener("change", function() {
            var d = degreesToRadians(b.value),
                e = linearFunction(b.value, 90, a, 44, 47);
            d = findPointOnCircle(0, 0, e, d);
            c.getPhysics().position.x = d.x;
            c.getPhysics().position.y =
                d.y;
            c.getPhysics().position.z = 0
        });
        s_oGame.onBallExtracted()
    };
    this.onBallExtracted = function() {
        -1 !== q.indexOf(d) && (s_oInterface.litPlayedNumber(d), R.show(d + 1));
        k++;
        k !== NUMBERS_TO_PICK && s_oGame.chooseABallToExtract()
    };
    this.playACombination = function(a) {
        setVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME);
        playSound("balls_shuffle", 1, !0);
        D.show();
        q = [];
        q = a;
        s_oInterface.setPlayedNumbers(q)
    };
    this.startExtraction = function() {
        playSound("start_extraction", 1, !1);
        D.hide();
        r = [];
        y = [];
        y = this._getCombination();
        J.setClickable(!1);
        s_oGame.chooseABallToExtract()
    };
    this.extractionFinish = function() {
        stopSound("balls_shuffle");
        for (var a = 0, b = 0; b < y.length; b++) - 1 !== q.indexOf(y[b]) && a++;
        b = s_oInterface.getNumbersInfo();
        a = this._getPrize(a);
        $(s_oMain).trigger("save_score", a.index);
        $(s_oMain).trigger("share_event", a.index);
        e = a.redeem_link;
        a.prize_img_url ? B.show(b, r, a) : w.show(b, r, a)
    };
    this._getPrize = function(a) {
        for (var b, c = 0; c < PAYTABLE_SETTINGS.length; c++) PAYTABLE_SETTINGS[c].num_balls_matched === a && (b = PAYTABLE_SETTINGS[c], b.index = c);
        return b
    };
    this._getCombination = function() {
        for (var a = 100 * Math.random(), b, c = 0; c < p.length; c++) a >= p[c].lower_range && a < p[c].upper_range && (b = p[c].combo);
        a = NUMBERS_TO_PICK - b;
        b = this._getBallsFromPlayedList(b);
        a = this._getNonPlayedBalls(a);
        b = b.concat(a);
        shuffle(b);
        return b
    };
    this._getBallsFromPlayedList = function(a) {
        var b = q.slice();
        shuffle(b);
        b.splice(a);
        return b
    };
    this._getNonPlayedBalls = function(a) {
        for (var b = [], c = 0; c < a; c++) {
            for (var d = Math.floor(Math.random() * TOTAL_NUMBERS); - 1 !== q.indexOf(d) || -1 !== b.indexOf(d);) d = Math.floor(Math.random() *
                TOTAL_NUMBERS);
            b.push(d)
        }
        return b
    };
    this.getCamera = function() {
        return A
    };
    this.getStartButPosition = function() {
        return J.getPosition()
    };
    this.unload = function() {
        clearTimeout(void 0);
        stopSound("balls_shuffle");
        void 0 !== m[d] && null !== m[d] && (createjs.Tween.removeTweens(m[d]), createjs.Tween.removeTweens(m[d].getSprite()), createjs.Tween.removeTweens(m[d].getPhysics().position), createjs.Tween.removeTweens(M));
        a = !1;
        J.unload();
        s_oStage.removeAllChildren();
        F.unload();
        w.unload();
        B.unload();
        C.unload()
    };
    this.onExit =
        function() {
            s_oGame.unload();
            $(s_oMain).trigger("end_session");
            setVolume("soundtrack", 1);
            s_oMain.gotoMenu()
        };
    this.onRestart = function() {
        k = 0;
        l = [];
        J.setActive(!0);
        J.setClickable(!0);
        s_oGame.resetBallsPositions();
        r = [];
        C.show()
    };
    this.resetBallsPositions = function() {
        for (var a = s_oScenario.getRandomStartPositions(), b = 0; b < m.length; b++) {
            m[b].reset();
            var c = m[b].getPhysics();
            c.position.copy(a[b])
        }
        for (b = 0; b < r.length; b++) c = m[r[b]].getPhysics(), I.getWorld().addBody(c), createjs.Tween.removeTweens(c.position), delete c.position.tweenjs_count
    };
    this.showPaytable = function() {
        t.show()
    };
    this.onRedeem = function() {
        s_oGame.onExit();
        window.open(e)
    };
    this._updateInit = function() {
        I.update()
    };
    this.pause = function(b) {
        a = !b;
        for (var c = 0; c < r.length; c++) m[r[c]].pauseAnim(b);
        O && (O.paused = b);
        L && (L.paused = b);
        N && (N.paused = b);
        X && (X.paused = b);
        x && (x.paused = b);
        K && (K.paused = b);
        U && (U.paused = b)
    };
    this._updatePlay = function() {
        a && (I.update(), this.updateBallsPosition(), f -= s_iTimeElaps, 0 >= f && (f = SHUFFLE_TICK_TIME, this.startBallsShuffle()))
    };
    this.update = function() {
        switch (c) {
            case 0:
                this._updateInit();
                break;
            case 1:
                this._updatePlay()
        }
    };
    s_oGame = this;
    this._init(b)
}
var s_oGame;

function CInterface(n) {
    var b, g, h, a, e, c, f, k, d, p, m, l, q, r, y, A = null,
        v = null;
    this._init = function(n) {
        var u = s_oSpriteLibrary.getSprite("but_exit");
        b = CANVAS_WIDTH - u.height / 2 - 10;
        g = u.height / 2 + 10;
        p = new CGfxButton(b, g, u, n);
        p.addEventListener(ON_MOUSE_UP, this._onExit, this);
        !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (u = s_oSpriteLibrary.getSprite("audio_icon"), e = b - u.height - 10, c = g, m = new CToggle(e, c, u, s_bAudioActive, n), m.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this), h = e - u.width / 2 - 10, a = c) : (h = b - u.width / 2 - 10,
            a = g);
        u = window.document;
        var z = u.documentElement;
        A = z.requestFullscreen || z.mozRequestFullScreen || z.webkitRequestFullScreen || z.msRequestFullscreen;
        v = u.exitFullscreen || u.mozCancelFullScreen || u.webkitExitFullscreen || u.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (A = !1);
        A && screenfull.enabled && (u = s_oSpriteLibrary.getSprite("but_fullscreen"), l = new CToggle(h, a, u, s_bFullscreen, n), l.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        u = s_oSpriteLibrary.getSprite("but_settings");
        d = new CGUIExpandible(u.width /
            2 + 10, g, u, n);
        d.addButton(p);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || d.addButton(m);
        A && screenfull.enabled && d.addButton(l);
        u = s_oSpriteLibrary.getSprite("but_paytable");
        f = u.height / 2 + 10;
        k = CANVAS_HEIGHT - u.height / 2 - 10;
        q = new CGfxButton(b, g, u, n);
        q.addEventListener(ON_MOUSE_UP, this._onPayTable, this);
        u = s_oSpriteLibrary.getSprite("numbers_played_info_panel");
        y = new CPlayedNumbersInfoPanel(u, CANVAS_WIDTH - u.width / 2 - 12, u.height / 2 + 12, n);
        y.hide();
        u = s_oSpriteLibrary.getSprite("msg_box");
        r = new CAreYouSurePanel(u);
        r.addEventListener(ON_CONFIRM, s_oGame.onExit, s_oGame);
        r.addEventListener(ON_REFUSE, this._onContinueToPlay, this);
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.refreshButtonPos = function() {
        d.refreshPos();
        y.refreshButtonPos();
        r.smartResize();
        q.setPosition(f + s_iOffsetX, k - s_iOffsetY);
        if (s_bLandscape && 300 < s_iOffsetY) {
            var a = linearFunction(s_iOffsetY, 300, EDGEBOARD_Y, 1, .91);
            d.scale(a);
            q.setScale(a)
        }
    };
    this.unload = function() {
        p.unload();
        p = null;
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) m.unload(), m = null;
        A && screenfull.enabled && l.unload();
        d.unload();
        r.unload();
        s_oInterface = r = null
    };
    this.setPlayedNumbers = function(a) {
        y.show();
        y.setNumbers(a)
    };
    this.litPlayedNumber = function(a) {
        y.litNumber(a)
    };
    this.getNumbersInfo = function() {
        return y.getNumbersState()
    };
    this._onPayTable = function() {
        s_oGame.showPaytable()
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onExit = function() {
        r.show();
        s_oGame.pause(!0)
    };
    this._onContinueToPlay = function() {
        s_oGame.pause(!1)
    };
    this._onRestart =
        function() {
            s_oGame.restartLevel()
        };
    this.resetFullscreenBut = function() {
        l.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? v.call(window.document) : A.call(window.document.documentElement);
        sizeHandler()
    };
    s_oInterface = this;
    this._init(n);
    return this
}
var s_oInterface = null;

function CCreditsPanel() {
    var n, b, g, h, a, e;
    this._init = function() {
        a = new createjs.Shape;
        a.graphics.beginFill("#0f0f0f").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        a.alpha = .01;
        e = a.on("click", this._onLogoButRelease);
        s_oStage.addChild(a);
        n = new createjs.Shape;
        n.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        n.alpha = 0;
        s_oStage.addChild(n);
        (new createjs.Tween.get(n)).to({
            alpha: .7
        }, 500);
        b = new createjs.Container;
        s_oStage.addChild(b);
        var c = s_oSpriteLibrary.getSprite("msg_box"),
            f = createBitmap(c);
        f.regX = c.width / 2;
        f.regY = c.height / 2;
        b.addChild(f);
        b.x = CANVAS_WIDTH / 2;
        b.y = CANVAS_HEIGHT / 2;
        b.alpha = 0;
        b.scaleX = b.scaleY = .75;
        createjs.Tween.get(b).to({
            alpha: 1
        }, 500);
        f = c.width - 100;
        var k = 70;
        new CTLText(b, -(f / 2), -140 - k / 2, f, k, 60, "center", "#fff", SECONDARY_FONT, 1, 2, 2, TEXT_DEVELOPED, !0, !0, !1, !1);
        f = c.width - 100;
        k = 70;
        new CTLText(b, -(f / 2), 160 - k / 2, f, k, 60, "center", "#fff", SECONDARY_FONT, 1, 2, 2, "WWW.CODETHISLAB.COM", !0, !0, !1, !1);
        c = s_oSpriteLibrary.getSprite("ctl_logo");
        h = createBitmap(c);
        h.regX = c.width / 2;
        h.regY = c.height /
            2;
        b.addChild(h);
        c = s_oSpriteLibrary.getSprite("but_exit");
        g = new CGfxButton(350, -250, c, b);
        g.addEventListener(ON_MOUSE_UP, this.unload, this);
        this.smartResize()
    };
    this.smartResize = function() {
        smartResize(b, 60, 60)
    };
    this.unload = function() {
        g.setClickable(!1);
        (new createjs.Tween.get(n)).to({
            alpha: 0
        }, 500);
        (new createjs.Tween.get(b)).to({
            alpha: 0
        }, 500).call(function() {
            s_oStage.removeChild(n);
            s_oStage.removeChild(b);
            g.unload()
        });
        a.off("click", e)
    };
    this._onLogoButRelease = function() {
        window.open("http://www.codethislab.com/index.php?&l=en")
    };
    this._init()
}

function CHelpPanel(n) {
    var b, g;
    this._init = function(h) {
        b = new createjs.Container;
        var a = s_oGame.getStartButPosition();
        b.x = a.x - 6;
        b.y = a.y - 10;
        h.addChild(b);
        var e = s_oSpriteLibrary.getSprite("hand_anim");
        h = e.width / 10;
        a = e.height / 2;
        e = new createjs.SpriteSheet({
            images: [e],
            frames: {
                width: h,
                height: a,
                regX: h / 2,
                regY: a / 2
            },
            animations: {
                idle: [0, 19]
            }
        });
        g = createSprite(e, "idle", h / 2, a / 2, h, a);
        g.regX = -30;
        g.regY = 90;
        g.scaleY = -1;
        b.addChild(g);
        e = s_oSpriteLibrary.getSprite("bg_help");
        var c = createBitmap(e);
        c.regX = e.width / 2;
        c.regY =
            e.height / 2;
        c.y = -225;
        b.addChild(c);
        h = e.width - 50;
        a = e.height - 50;
        new CTLText(b, -(h / 2), c.y - a / 2, h, a, 200, "center", "#fff", PRIMARY_FONT, 1, 2, 2, sprintf(TEXT_HELP, TEXT_START), !0, !0, !0, !1);
        b.alpha = 0
    };
    this.refreshPos = function() {
        var g = s_oGame.getStartButPosition();
        b.x = g.x - 6;
        b.y = g.y - 10
    };
    this.unload = function() {
        n.removeChild(b)
    };
    this.show = function() {
        createjs.Tween.get(b).to({
            alpha: 1
        }, 500, createjs.Ease.cubicIn)
    };
    this.hide = function() {
        createjs.Tween.get(b).to({
            alpha: 0
        }, 500, createjs.Ease.cubicOut)
    };
    this._init(n)
}

function CLosePanel(n) {
    var b, g, h, a, e, c, f, k, d, p, m;
    this._init = function(n) {
        b = [];
        g = [];
        f = new createjs.Container;
        f.alpha = 0;
        f.visible = !1;
        m = new createjs.Shape;
        m.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        m.alpha = .7;
        m.on("mousedown", function() {});
        f.addChild(m);
        k = new createjs.Container;
        k.x = CANVAS_WIDTH / 2;
        k.y = CANVAS_HEIGHT / 2;
        f.addChild(k);
        e = createBitmap(n);
        e.regX = n.width / 2;
        e.regY = n.height / 2;
        k.addChild(e);
        n = 750;
        var q = 100;
        new CTLText(k, -(n / 2), -250 - q / 2, n, q, 70, "center", "#fff", SECONDARY_FONT,
            1, 2, 2, TEXT_GAMEOVER, !0, !0, !1, !1);
        n = 750;
        q = 100;
        c = new CTLText(k, -(n / 2), -80 - q / 2, n, q, 40, "center", "#fff", PRIMARY_FONT, 1, 2, 2, "", !0, !0, !0, !1);
        n = 500;
        h = [];
        for (q = 0; q < NUMBERS_TO_PICK; q++) {
            var y = s_oSpriteLibrary.getSprite("ball_1"),
                A = -n / 2 + n / (NUMBERS_TO_PICK - 1) * q,
                v = -166,
                z = createBitmap(y);
            z.regX = y.width / 2 / NUM_FRAMES_PER_BALL;
            z.regY = y.height / 2;
            z.x = A;
            z.y = v;
            z.sourceRect = {
                x: 0,
                y: 0,
                width: y.width / NUM_FRAMES_PER_BALL,
                height: y.height
            };
            h.push(z);
            k.addChild(z)
        }
        n = 420;
        y = s_oSpriteLibrary.getSprite("toggle_num");
        a = [];
        for (q = 0; q <
            NUMBERS_TO_PICK; q++) A = -n / 2 + n / (NUMBERS_TO_PICK - 1) * q, v = 0, A = new CNumberBut(A, v, y, -1, k), A.deactive(), A.setClickable(!1), a.push(A);
        n = s_oSpriteLibrary.getSprite("but_home");
        d = new CGfxButton(0, 200, n, k);
        d.addEventListener(ON_MOUSE_DOWN, l._onExit, this);
        y = s_oSpriteLibrary.getSprite("but_long");
        p = new CToggle(0, 200, y, !0, k);
        p.setToChangeStateAtClick(!1);
        p.addText(TEXT_REDEEM, 40, "#fff", PRIMARY_FONT);
        p.addEventListener(ON_MOUSE_UP, l._onRedeem, this);
        s_oStage.addChild(f);
        $(s_oMain).trigger("show_interlevel_ad")
    };
    this.smartResize = function() {
        smartResize(k, 60, 60)
    };
    this.unload = function() {
        m.removeAllEventListeners();
        s_oStage.removeChild(f);
        d.unload();
        d = null;
        p.unload();
        p = null
    };
    this.addEventListener = function(a, c, d) {
        b[a] = c;
        g[a] = d
    };
    this.hide = function() {
        f.visible = !1
    };
    this.show = function(b, e, g) {
        playSound("win_panel", 1, !1);
        for (var k = 0, l = 0; l < b.length; l++) a[l].deactive(), a[l].setIndex(b[l].num), a[l].setTextNumber(b[l].num + 1), b[l].state && (k++, a[l].active());
        b = h[0].getBounds().width;
        var m = h[0].getBounds().height;
        for (l = 0; l <
            e.length; l++) {
            var n = Math.floor(Math.random() * NUM_FRAMES_PER_BALL),
                q = -45 + 90 * Math.random(),
                r = s_oSpriteLibrary.getSprite("ball_" + (e[l] + 1));
            h[l].image = r;
            h[l].rotation = q;
            h[l].sourceRect = {
                x: n * b,
                y: 0,
                width: b,
                height: m
            }
        }
        1 === k ? c.refreshText(sprintf(TEXT_CONGRATULATIONS_EXPL_SINGLE, k)) : c.refreshText(sprintf(TEXT_CONGRATULATIONS_EXPL, k));
        f.visible = !0;
        "" !== g.redeem_link ? (p.setVisible(!0), d.setVisible(!1)) : (p.setVisible(!1), d.setVisible(!0));
        createjs.Tween.get(f).to({
            alpha: 1
        }, 500)
    };
    this._onExit = function() {
        l.hide();
        var a = ON_BACK_MENU;
        b[a] && b[a].call(g[a])
    };
    this._onRestart = function() {
        l.hide();
        var a = ON_RESTART;
        b[a] && b[a].call(g[a])
    };
    this._onRedeem = function() {
        l.hide();
        var a = ON_REDEEM;
        b[a] && b[a].call(g[a])
    };
    var l = this;
    this._init(n);
    return this
}

function CWinPanel(n) {
    var b, g, h, a, e, c, f, k, d, p, m, l;
    this._init = function(n) {
        b = [];
        g = [];
        f = new createjs.Container;
        f.alpha = 0;
        f.visible = !1;
        l = new createjs.Shape;
        l.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        l.alpha = .7;
        l.on("mousedown", function() {});
        f.addChild(l);
        k = new createjs.Container;
        k.x = CANVAS_WIDTH / 2;
        k.y = CANVAS_HEIGHT / 2;
        f.addChild(k);
        e = createBitmap(n);
        e.regX = n.width / 2;
        e.regY = n.height / 2;
        k.addChild(e);
        n = 750;
        var r = 100;
        new CTLText(k, -(n / 2), -250 - r / 2, n, r, 70, "center", "#fff", SECONDARY_FONT,
            1, 2, 2, TEXT_CONGRATULATIONS, !0, !0, !1, !1);
        n = 750;
        r = 100;
        c = new CTLText(k, -(n / 2), -80 - r / 2, n, r, 40, "center", "#fff", PRIMARY_FONT, 1, 2, 2, "", !0, !0, !0, !1);
        n = 500;
        h = [];
        for (r = 0; r < NUMBERS_TO_PICK; r++) {
            var A = s_oSpriteLibrary.getSprite("ball_1"),
                v = -n / 2 + n / (NUMBERS_TO_PICK - 1) * r,
                z = -166,
                u = createBitmap(A);
            u.regX = A.width / 2 / NUM_FRAMES_PER_BALL;
            u.regY = A.height / 2;
            u.x = v;
            u.y = z;
            u.sourceRect = {
                x: 0,
                y: 0,
                width: A.width / NUM_FRAMES_PER_BALL,
                height: A.height
            };
            h.push(u);
            k.addChild(u)
        }
        n = 420;
        A = s_oSpriteLibrary.getSprite("toggle_num");
        a = [];
        for (r =
            0; r < NUMBERS_TO_PICK; r++) v = -n / 2 + n / (NUMBERS_TO_PICK - 1) * r, z = 0, v = new CNumberBut(v, z, A, -1, k), v.deactive(), v.setClickable(!1), a.push(v);
        v = s_oSpriteLibrary.getSprite("prize_0");
        z = 150 / v.height;
        n = v.width * z;
        r = v.height * z;
        m = createBitmap(v);
        m.regX = v.width / 2;
        m.regY = v.height / 2;
        m.scaleX = m.scaleY = z;
        m.x = -280;
        m.y = 200;
        k.addChild(m);
        v = new createjs.Shape;
        v.graphics.beginFill("rgba(255,0,0,0.51)").drawRoundRect(m.x - n / 2, m.y - r / 2, n, r, 8);
        m.mask = v;
        r = 50;
        p = new CTLText(k, m.x + n / 2 + 10, m.y - r / 2, 250, r, 40, "left", "#fff", PRIMARY_FONT, 1,
            2, 2, "", !0, !0, !1, !1);
        A = s_oSpriteLibrary.getSprite("but_long");
        d = new CToggle(240, 200, A, !0, k);
        d.setToChangeStateAtClick(!1);
        d.addText(TEXT_REDEEM, 40, "#fff", PRIMARY_FONT);
        d.addEventListener(ON_MOUSE_UP, q._onRedeem, this);
        s_oStage.addChild(f);
        $(s_oMain).trigger("show_interlevel_ad")
    };
    this.smartResize = function() {
        smartResize(k, 60, 60)
    };
    this.unload = function() {
        l.removeAllEventListeners();
        s_oStage.removeChild(f)
    };
    this.addEventListener = function(a, c, d) {
        b[a] = c;
        g[a] = d
    };
    this.hide = function() {
        f.visible = !1
    };
    this.show =
        function(b, d, e) {
            playSound("win_panel", 1, !1);
            for (var g = 0, k = 0; k < b.length; k++) a[k].deactive(), a[k].setIndex(b[k].num), a[k].setTextNumber(b[k].num + 1), b[k].state && (g++, a[k].active());
            b = h[0].getBounds().width;
            var l = h[0].getBounds().height;
            for (k = 0; k < d.length; k++) {
                var n = Math.floor(Math.random() * NUM_FRAMES_PER_BALL),
                    q = -45 + 90 * Math.random(),
                    r = s_oSpriteLibrary.getSprite("ball_" + (d[k] + 1));
                h[k].image = r;
                h[k].rotation = q;
                h[k].sourceRect = {
                    x: n * b,
                    y: 0,
                    width: b,
                    height: l
                }
            }
            1 === g ? c.refreshText(sprintf(TEXT_CONGRATULATIONS_EXPL_SINGLE,
                g)) : c.refreshText(sprintf(TEXT_CONGRATULATIONS_EXPL, g));
            f.visible = !0;
            m.image = s_oSpriteLibrary.getSprite("prize_" + e.index);
            p.refreshText(e.label);
            createjs.Tween.get(f).to({
                alpha: 1
            }, 500)
        };
    this._onExit = function() {
        q.hide();
        var a = ON_BACK_MENU;
        b[a] && b[a].call(g[a])
    };
    this._onRestart = function() {
        q.hide();
        var a = ON_RESTART;
        b[a] && b[a].call(g[a])
    };
    this._onRedeem = function() {
        q.hide();
        var a = ON_REDEEM;
        b[a] && b[a].call(g[a])
    };
    var q = this;
    this._init(n);
    return this
}

function CAreYouSurePanel(n) {
    var b, g, h, a, e, c, f, k;
    this._init = function(n) {
        b = [];
        g = [];
        a = new createjs.Container;
        a.alpha = 0;
        a.visible = !1;
        k = new createjs.Shape;
        k.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        k.alpha = .7;
        k.on("mousedown", function() {});
        a.addChild(k);
        e = new createjs.Container;
        e.x = CANVAS_WIDTH / 2;
        e.y = CANVAS_HEIGHT / 2;
        a.addChild(e);
        h = createBitmap(n);
        h.regX = n.width / 2;
        h.regY = n.height / 2;
        e.addChild(h);
        n = 750;
        var m = 100;
        new CTLText(e, -(n / 2), -250 - m / 2, n, m, 70, "center", "#fff", SECONDARY_FONT,
            1, 2, 2, "", !0, !0, !1, !1);
        n = 750;
        m = 100;
        new CTLText(e, -(n / 2), -80 - m / 2, n, m, 40, "center", "#fff", PRIMARY_FONT, 1, 2, 2, TEXT_ARE_SURE, !0, !0, !0, !1);
        n = s_oSpriteLibrary.getSprite("but_no");
        c = new CGfxButton(-200, 200, n, e);
        c.addEventListener(ON_MOUSE_DOWN, d._onRefuse, this);
        c.pulseAnimation();
        n = s_oSpriteLibrary.getSprite("but_yes");
        f = new CGfxButton(200, 200, n, e);
        f.addEventListener(ON_MOUSE_DOWN, d._onYes, this);
        s_oStage.addChild(a)
    };
    this.smartResize = function() {
        smartResize(e, 60, 60)
    };
    this.unload = function() {
        k.removeAllEventListeners();
        s_oStage.removeChild(a);
        c.unload();
        c = null;
        f.unload();
        f = null
    };
    this.addEventListener = function(a, c, d) {
        b[a] = c;
        g[a] = d
    };
    this.hide = function() {
        a.visible = !1;
        createjs.Tween.get(a).to({
            alpha: 0
        }, 500)
    };
    this.show = function() {
        a.visible = !0;
        createjs.Tween.get(a).to({
            alpha: 1
        }, 500)
    };
    this._onRefuse = function() {
        d.hide();
        var a = ON_REFUSE;
        b[a] && b[a].call(g[a])
    };
    this._onYes = function() {
        d.hide();
        var a = ON_CONFIRM;
        b[a] && b[a].call(g[a])
    };
    var d = this;
    this._init(n);
    return this
}

function CBall(n, b, g, h, a) {
    var e, c, f, k, d, p, m;
    this._init = function() {
        m = p = !1;
        d = new createjs.Container;
        q.addChild(d);
        for (var b = a + 1, g = [], h = 0; 4 > h; h++) g.push(s_oSpriteLibrary.getSprite("ball_" + b));
        e = 4 * NUM_FRAMES_PER_BALL;
        f = 2 * Math.PI;
        c = f / e;
        h = g[0].width / NUM_FRAMES_PER_BALL;
        var l = g[0].height;
        g = new createjs.SpriteSheet({
            framerate: 60,
            images: g,
            frames: {
                width: h,
                height: l,
                regX: h / 2,
                regY: l / 2
            },
            animations: {
                stop: [0],
                waittoroll: {
                    frames: [0, 0, 0, 0, 0, 0, 0, 0],
                    next: "roll",
                    speed: .5
                },
                roll: [0, e - 1, "roll", .6]
            }
        });
        k = createSprite(g, 0,
            h / 2, l / 2, h, l);
        k.stop();
        d.addChild(k);
        b = new createjs.Text(b, "36px " + PRIMARY_FONT, "#fff");
        b.x = 0;
        b.y = 4;
        b.textAlign = "center";
        b.textBaseline = "middle"
    };
    this.rolls = function() {
        if (!p) {
            var a = {
                x: 0,
                y: 0,
                z: 0
            };
            l.quaternion.toEuler(a, "YZX");
            a.x = 0 >= a.x ? -1 * a.x : f - a.x;
            k.gotoAndStop(Math.floor(Math.abs(a.x / c)));
            a.y = 0 >= a.y ? -1 * a.y : f - a.y;
            a = Math.degrees(f - a.y);
            k.rotation = a
        }
    };
    this.setBallFrame = function(a) {
        k.gotoAndStop(a)
    };
    this.fallInTubeAnim = function() {
        m = p = !0;
        k.rotation = 180;
        k.framerate = 50 + Math.round(10 * Math.random());
        k.gotoAndPlay("waittoroll")
    };
    this.endFallingTube = function() {
        m = !1;
        k.gotoAndStop(k.currentFrame)
    };
    this.pauseAnim = function(a) {
        m && (k.paused = a)
    };
    this.reset = function() {
        p = m = !1;
        this.resetBodyPhysicParams()
    };
    this.resetBodyPhysicParams = function() {
        g.quaternion.set(0, 0, 0, 1);
        g.initQuaternion.set(0, 0, 0, 1);
        g.interpolatedQuaternion.set(0, 0, 0, 1);
        g.velocity.setZero();
        g.initVelocity.setZero();
        g.angularVelocity.setZero();
        g.initAngularVelocity.setZero();
        g.force.setZero();
        g.torque.setZero();
        g.sleepState = 0;
        g.timeLastSleepy = 0;
        g._wakeUpAfterNarrowphase = !1
    };
    this.unload = function() {
        k.removeAllEventListeners();
        q.removeChild(k)
    };
    this.setVisible = function(a) {
        d.visible = a
    };
    this.fadeAnimation = function(a, b, c) {
        this.tweenFade(a, b, c)
    };
    this.tweenFade = function(a, b, c) {
        createjs.Tween.get(d, {
            override: !0
        }).wait(c).to({
            alpha: a
        }, b).call(function() {})
    };
    this.setPosition = function(a, b) {
        d.x = a;
        d.y = b;
        d.z = l.position.z
    };
    this.getPosition = function() {
        return {
            x: k.x,
            y: k.y
        }
    };
    this.getPhysics = function() {
        return l
    };
    this.setAngle = function(a) {
        k.rotation = a
    };
    this.getX = function() {
        return k.x
    };
    this.getY = function() {
        return k.y
    };
    this.scale = function(a) {
        k.scaleX = a;
        k.scaleY = a
    };
    this.getScale = function() {
        return k.scaleX
    };
    this.getObject = function() {
        return d
    };
    this.getSprite = function() {
        return k
    };
    this.getDepthPos = function() {
        return l.position.y
    };
    var l = g;
    var q = h;
    this._init();
    return this
}

function CScenario() {
    var n, b, g, h, a, e;
    if (SHOW_3D_RENDER) var c = new CANNON.Demo;
    this.getDemo = function() {
        return c
    };
    this._init = function() {
        e = 1 / 60;
        n = SHOW_3D_RENDER ? c.getWorld() : new CANNON.World;
        new CANNON.Vec3(0, 0, 0);
        n.gravity.set(0, WORLD_GRAVITY, 0);
        n.broadphase = new CANNON.NaiveBroadphase;
        n.solver.iterations = 10;
        b = new CANNON.Material;
        g = new CANNON.Material;
        var a = new CANNON.ContactMaterial(b, g, {
            friction: .6,
            restitution: .5,
            contactEquationStiffness: 1E8,
            contactEquationRelaxation: 3,
            frictionEquationStiffness: 1E8,
            frictionEquationRegularizationTime: 3
        });
        n.addContactMaterial(a);
        a = new THREE.LoadingManager;
        a.onProgress = function(a, b, c) {
            console.log(a, b, c)
        };
        (new THREE.FBXLoader(a)).load("models/sphere_machine.txt", function(a) {
            s_oScenario.parseFile(a);
            s_oGame.scenarioLoaded()
        }, function(a) {}, function(a) {})
    };
    this.parseFile = function(a) {
        for (var b = 0; b < a.children.length; b++) {
            b = a.children[b];
            console.log("oMesh.name: " + b.name);
            "GeoSphere" === b.name && s_oScenario._createFieldBody(b);
            h = [];
            for (b = 0; 8 > b; b++) BALLS_START_POSITION.push({
                x: -35 +
                    b * BALL_RADIUS * 2,
                y: 0,
                z: 0
            });
            for (b = 0; 8 > b; b++) BALLS_START_POSITION.push({
                x: -35 + b * BALL_RADIUS * 2,
                y: 0,
                z: 2 * BALL_RADIUS
            });
            for (b = 0; 8 > b; b++) BALLS_START_POSITION.push({
                x: -35 + b * BALL_RADIUS * 2,
                y: 0,
                z: 2 * -BALL_RADIUS
            });
            for (b = 0; 8 > b; b++) BALLS_START_POSITION.push({
                x: -35 + b * BALL_RADIUS * 2,
                y: 2 * BALL_RADIUS,
                z: 0
            });
            for (b = 0; 8 > b; b++) BALLS_START_POSITION.push({
                x: -35 + b * BALL_RADIUS * 2,
                y: 2 * -BALL_RADIUS,
                z: 0
            });
            var c = s_oScenario.getRandomStartPositions();
            for (b = 0; b < TOTAL_NUMBERS; b++) s_oScenario._createBallBody(c[b])
        }
    };
    this._createFieldBody =
        function(b) {
            var e = this.__extractMeshData(b);
            a = new CANNON.Body({
                mass: 0,
                material: g
            });
            a.addShape(e);
            b = new CANNON.Vec3(b.position.x, b.position.y, b.position.z);
            a.position.copy(b);
            n.addBody(a);
            SHOW_3D_RENDER && c.addVisual(a, 12972269)
        };
    this._createBallBody = function(a) {
        var e = new CANNON.Sphere(BALL_RADIUS),
            d = new CANNON.Body({
                mass: BALL_MASS,
                material: b,
                linearDamping: BALL_LINEAR_DAMPING,
                angularDamping: .59
            });
        a = new CANNON.Vec3(a.x, a.y, a.z);
        d.position.copy(a);
        d.previousPosition.copy(a);
        d.addShape(e);
        n.add(d);
        SHOW_3D_RENDER &&
            c.addVisual(d);
        h.push(d)
    };
    this.__extractMeshData = function(a) {
        var b = (new THREE.Geometry).fromBufferGeometry(a.geometry);
        a = b.faces;
        b = b.vertices;
        for (var c = 0; c < a.length; c++);
        var e = [],
            f = [];
        for (c = 0; c < b.length; c++) e.push(1 * b[c].x), e.push(1 * b[c].y), e.push(1 * b[c].z);
        for (c = 0; c < a.length; c++) f.push(a[c].a), f.push(a[c].b), f.push(a[c].c);
        return new CANNON.Trimesh(e, f)
    };
    this.addImpulse = function(a, b) {
        var c = SHUFFLE_IMPULSE_STRENGTH;
        c = new CANNON.Vec3((-1 + 2 * Math.random()) * c, c, (-1 + 2 * Math.random()) * c);
        h[a].applyImpulse(c,
            h[a].position)
    };
    this.addLocalImpulse = function(a, b) {
        var c = SHUFFLE_IMPULSE_STRENGTH;
        c = new CANNON.Vec3((-1 + 2 * Math.random()) * c, c, (-1 + 2 * Math.random()) * c);
        h[a].applyImpulse(c, h[a].position)
    };
    this.update = function() {
        n.step(e)
    };
    this.getWorld = function() {
        return n
    };
    this.getBalls = function() {
        return h
    };
    this.getRandomStartPositions = function() {
        for (var a = [], b = 0; b < BALLS_START_POSITION.length; b++) a.push(BALLS_START_POSITION[b]);
        return shuffle(a)
    };
    s_oScenario = this;
    SHOW_3D_RENDER ? (c.addScene("Test", this._init), c.start()) :
        this._init()
}
var s_oScenario;

function CMsgBox(n, b) {
    var g, h, a, e;
    this._init = function() {
        e = new createjs.Container;
        b.addChild(e);
        h = new createjs.Shape;
        h.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        h.alpha = .7;
        h.on("mousedown", function() {});
        e.addChild(h);
        a = new createjs.Container;
        a.x = CANVAS_WIDTH / 2;
        a.y = CANVAS_HEIGHT / 2;
        e.addChild(a);
        var f = s_oSpriteLibrary.getSprite("msg_box"),
            k = createBitmap(f);
        k.regX = f.width / 2;
        k.regY = f.height / 2;
        a.addChild(k);
        new CTLText(a, -375, -275, 750, 350, 70, "center", "#fff", PRIMARY_FONT, 1, 2, 2,
            n, !0, !0, !0, !1);
        f = s_oSpriteLibrary.getSprite("but_yes");
        g = new CGfxButton(0, 200, f, a);
        g.addEventListener(ON_MOUSE_DOWN, c._onButOk, this);
        s_oStage.addChild(e);
        smartResize(a, 60, 60)
    };
    this._onButOk = function() {
        c.unload()
    };
    this.unload = function() {
        g.unload();
        b.removeChild(e);
        h.removeAllEventListeners()
    };
    var c = this;
    this._init(n)
}

function CSelectNumbersPanel() {
    var n, b, g, h, a, e, c, f;
    this._init = function() {
        g = new createjs.Container;
        g.alpha = 0;
        s_oStage.addChild(g);
        h = new createjs.Shape;
        h.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        h.alpha = .7;
        c = h.on("mousedown", function() {});
        g.addChild(h);
        e = new createjs.Container;
        e.x = CANVAS_WIDTH / 2;
        e.y = CANVAS_HEIGHT / 2;
        g.addChild(e);
        var d = s_oSpriteLibrary.getSprite("pick_numbers_panel"),
            k = createBitmap(d);
        k.regX = d.width / 2;
        k.regY = d.height / 2;
        e.addChild(k);
        k = 750;
        var m = 70;
        a = new CTLText(e, -(k / 2), -170 - m / 2, k, m, 60, "center", "#fff", SECONDARY_FONT, 1, 2, 2, sprintf(TEXT_PICK_NUMBERS, NUMBERS_TO_PICK), !0, !0, !1, !1);
        var l = new createjs.Container;
        l.y = 50;
        e.addChild(l);
        b = [];
        n = [];
        var q = 0,
            r = 0;
        d = s_oSpriteLibrary.getSprite("toggle_num");
        k = 700;
        m = 230;
        for (var y = Math.floor(TOTAL_NUMBERS / 10), A = 0; A < TOTAL_NUMBERS; A++) 0 !== A && 0 === A % 10 && (q = 0, r++), n[A] = new CNumberBut(-k / 2 + k / 9 * q, -m / 2 + m / (y - 1) * r, d, A, l), n[A].addEventListenerWithParams(ON_MOUSE_UP, this._onNumberClick, this, A), n[A].deactive(), q++;
        d = s_oSpriteLibrary.getSprite("but_long");
        f = new CToggle(0, 290, d, !1, e);
        f.setToChangeStateAtClick(!1);
        f.addText(TEXT_LETS_PLAY, 40, "#71a8d7", PRIMARY_FONT);
        f.addEventListener(ON_MOUSE_UP, this._onButStart, this);
        f.setClickable(!1)
    };
    this.smartResize = function() {
        smartResize(e, 60, 60)
    };
    this._checkXResize = function() {
        var a = e.getBounds().width,
            b = CANVAS_WIDTH - 2 * s_iOffsetX;
        a > b && (e.scaleX = e.scaleY = b / a)
    };
    this._checkYResize = function() {
        var a = e.getBounds().height,
            b = CANVAS_HEIGHT - 2 * s_iOffsetY;
        a > b && (e.scaleX = e.scaleY = b / a)
    };
    this.unload = function() {
        s_oStage.removeChild(h);
        s_oStage.removeChild(e);
        for (var a = 0; a < n.length; a++) n[a].unload();
        f.unload();
        h.off("mousedown", c)
    };
    this.instantShow = function() {
        g.alpha = 1
    };
    this.show = function() {
        createjs.Tween.get(g).to({
            alpha: 1
        }, 500);
        this._checkIfCanStart()
    };
    this.hide = function() {
        createjs.Tween.get(g).to({
            alpha: 0
        }, 500)
    };
    this._onNumberClick = function(a) {
        var c = b.indexOf(a);
        if (-1 === c) {
            if (b.length >= NUMBERS_TO_PICK) return;
            b.push(a);
            n[a].active()
        } else b.splice(c, 1), n[a].deactive();
        this._checkIfCanStart()
    };
    this._onButStart = function() {
        k.hide();
        f.setClickable(!1);
        b.sort(k._sortNumbers);
        s_oGame.playACombination(b)
    };
    this._sortNumbers = function(a, b) {
        return a - b
    };
    this._checkIfCanStart = function() {
        if (b.length === NUMBERS_TO_PICK) f.setClickable(!0), f.setActive(!0), f.setTextColor("#fff"), a.refreshText(sprintf(TEXT_LETS_PLAY));
        else {
            f.setClickable(!1);
            f.setActive(!1);
            f.setTextColor("#71a8d7");
            var c = NUMBERS_TO_PICK - b.length;
            c = 1 === c ? sprintf(TEXT_PICK_NUMBERS_SINGLE, c) : sprintf(TEXT_PICK_NUMBERS, c);
            a.refreshText(c)
        }
    };
    this.getBounds = function() {
        return e.getBounds()
    };
    var k = this;
    this._init()
}

function CNumberBut(n, b, g, h, a) {
    var e, c, f, k, d, p, m = [],
        l, q, r = null,
        y, A, v, z;
    this._init = function(a, b, g, h, m) {
        e = c = !1;
        f = 1;
        k = h;
        d = [];
        p = [];
        l = new createjs.Container;
        l.x = a;
        l.y = b;
        l.scaleX = l.scaleY = f;
        m.addChild(l);
        q = new createjs.Container;
        q.x = a;
        q.y = b;
        q.scaleX = l.scaleY = f;
        m.addChild(q);
        a = g.width / 2;
        b = g.height;
        g = new createjs.SpriteSheet({
            images: [g],
            frames: {
                width: a,
                height: b,
                regX: a / 2,
                regY: b / 2
            },
            animations: {
                off: [0],
                on: [1]
            }
        });
        y = createSprite(g, "on", a / 2, b / 2, a, b);
        l.addChild(y);
        e ? y.gotoAndStop("on") : y.gotoAndStop("off");
        r = new createjs.Text(k +
            1 + "", " 30px " + SECONDARY_FONT, "#ffd800");
        r.y = 2;
        r.textAlign = "center";
        r.textBaseline = "middle";
        r.lineWidth = 200;
        l.addChild(r);
        this._initListener()
    };
    this.unload = function() {
        s_bMobile ? l.off("mousedown", A) : (l.off("mousedown", A), l.off("mouseover", v));
        l.off("pressup", z);
        a.removeChild(l)
    };
    this.setVisible = function(a) {
        l.visible = a
    };
    this.active = function() {
        y.gotoAndStop("on");
        e = !0;
        null !== r && (r.color = "#fff")
    };
    this.deactive = function() {
        e = !1;
        y.gotoAndStop("off");
        null !== r && (r.color = "#71a8d7")
    };
    this.setClickable = function(a) {
        c = !a;
        a ? this._initListener() : (s_bMobile ? l.off("mousedown", A) : (l.off("mousedown", A), l.off("mouseover", v)), l.off("pressup", z))
    };
    this._initListener = function() {
        s_bMobile ? A = l.on("mousedown", this.buttonDown) : (A = l.on("mousedown", this.buttonDown), v = l.on("mouseover", this.buttonOver));
        z = l.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        d[a] = b;
        p[a] = c
    };
    this.addEventListenerWithParams = function(a, b, c, e) {
        d[a] = b;
        p[a] = c;
        m = e
    };
    this.buttonRelease = function(a) {
        c || (l.scaleX = f, l.scaleY = f, d[ON_MOUSE_UP] &&
            d[ON_MOUSE_UP].call(p[ON_MOUSE_UP], m))
    };
    this.buttonDown = function(a) {
        c || (playSound("click", 1, !1), l.scaleX = .9 * f, l.scaleY = .9 * f, d[ON_MOUSE_DOWN] && d[ON_MOUSE_DOWN].call(p[ON_MOUSE_DOWN], m))
    };
    this.buttonOver = function(a) {
        s_bMobile || c || (a.target.cursor = "pointer")
    };
    this.pulseAnimation = function() {
        createjs.Tween.get(l).to({
            scaleX: .9 * f,
            scaleY: .9 * f
        }, 850, createjs.Ease.quadOut).to({
            scaleX: f,
            scaleY: f
        }, 650, createjs.Ease.quadIn).call(function() {
            u.pulseAnimation()
        })
    };
    this.trembleAnimation = function() {
        createjs.Tween.get(l).to({
                rotation: 5
            },
            75, createjs.Ease.quadOut).to({
            rotation: -5
        }, 140, createjs.Ease.quadIn).to({
            rotation: 0
        }, 75, createjs.Ease.quadIn).wait(750).call(function() {
            u.trebleAnimation()
        })
    };
    this.setPosition = function(a, b) {
        l.x = a;
        l.y = b
    };
    this.setScale = function(a) {
        f = a;
        l.scaleX = l.scaleY = a
    };
    this.setX = function(a) {
        l.x = a
    };
    this.setY = function(a) {
        l.y = a
    };
    this.setTextNumber = function(a) {
        r.text = a
    };
    this.setIndex = function(a) {
        k = a
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
    this.getPosition =
        function() {
            return {
                x: l.x,
                y: l.y
            }
        };
    this.getIndex = function() {
        return k
    };
    this.isActive = function() {
        return e
    };
    var u = this;
    this._init(n, b, g, h, a);
    return this
}

function CPlayedNumbersInfoPanel(n, b, g, h) {
    var a, e, c, f;
    this._init = function(b, d, g, h) {
        a = d;
        e = g;
        f = new createjs.Container;
        f.x = a;
        f.y = e;
        h.addChild(f);
        d = createBitmap(b);
        d.regX = b.width / 2;
        d.regY = b.height / 2;
        f.addChild(d);
        b = b.width - 20;
        new CTLText(f, -(b / 2), -51, b, 30, 26, "left", "#fff", PRIMARY_FONT, 1, 2, 2, TEXT_YOUR_NUMBERS, !0, !0, !0, !1);
        d = new createjs.Container;
        d.y = 20;
        f.addChild(d);
        c = [];
        g = s_oSpriteLibrary.getSprite("toggle_num");
        b = 420;
        for (h = 0; h < NUMBERS_TO_PICK; h++) c[h] = new CNumberBut(-b / 2 + b / (NUMBERS_TO_PICK - 1) * h, 1, g, -1, d), c[h].deactive(), c[h].setClickable(!1)
    };
    this.refreshButtonPos = function() {
        f.x = a - s_iOffsetX;
        f.y = e + s_iOffsetY;
        f.scaleX = f.scaleY = 1;
        if (!s_bLandscape && 270 < s_iOffsetX) {
            var b = linearFunction(s_iOffsetX, 270, EDGEBOARD_X, 1, .83);
            f.scaleX = f.scaleY = b;
            f.x = a - s_iOffsetX + n.width * (1 - b) / 2;
            f.y = e + s_iOffsetY - n.height * (1 - b) / 2
        }
    };
    this.setNumbers = function(a) {
        for (var b = 0; b < a.length; b++) {
            var e = a[b] + 1 + "";
            c[b].setIndex(a[b]);
            c[b].setTextNumber(e);
            c[b].deactive()
        }
    };
    this.show = function() {
        f.visible = !0
    };
    this.hide = function() {
        f.visible = !1
    };
    this.litNumber = function(a) {
        for (var b, e = 0; e < c.length; e++) b = c[e].getIndex(), b === a && c[e].active()
    };
    this.getNumbersState = function() {
        for (var a = [], b = 0; b < c.length; b++) a[b] = {
            num: c[b].getIndex(),
            state: !1
        }, c[b].isActive() && (a[b].state = !0);
        return a
    };
    this._init(n, b, g, h)
}

function CNumMatchedPanel(n) {
    var b, g;
    this._init = function(a) {
        b = new createjs.Container;
        b.x = CANVAS_WIDTH / 2;
        b.y = CANVAS_HEIGHT / 2 - 80;
        b.alpha = 0;
        a.addChild(b);
        a = s_oSpriteLibrary.getSprite("bg_nummatched");
        var e = createBitmap(a);
        e.regX = a.width / 2;
        e.regY = a.height / 2;
        b.addChild(e);
        e = a.width - 50;
        var c = 210;
        g = new CTLText(b, -(e / 2), -20 - c / 2, e, c, 200, "center", "#fff", SECONDARY_FONT, 1, 2, 2, "30", !0, !0, !1, !1);
        e = a.width;
        c = 110;
        new CTLText(b, -(e / 2), 160 - c / 2, e, c, 100, "center", "#fff", SECONDARY_FONT, 1, 2, 2, TEXT_MATCH, !0, !0, !1, !1)
    };
    this.refreshPos =
        function() {
            s_bLandscape ? (b.x = CANVAS_WIDTH / 2, b.y = CANVAS_HEIGHT / 2) : (b.x = CANVAS_WIDTH / 2, b.y = CANVAS_HEIGHT / 2 - 80)
        };
    this.hide = function() {
        createjs.Tween.get(b).to({
            alpha: 0
        }, 1E3)
    };
    this.show = function(a) {
        playSound("num_matched", 1, !1);
        g.refreshText(a);
        b.scaleX = b.scaleY = 0;
        createjs.Tween.get(b).to({
            alpha: 1,
            scaleX: 1,
            scaleY: 1
        }, 1E3, createjs.Ease.elasticOut).call(function() {
            h.hide()
        })
    };
    var h = this;
    this._init(n)
}

function CPaytable(n) {
    var b, g, h, a, e, c, f, k;
    this._init = function(c) {
        b = [];
        g = [];
        a = new createjs.Container;
        k = new createjs.Shape;
        k.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        k.alpha = .7;
        k.on("mousedown", function() {});
        a.addChild(k);
        e = new createjs.Container;
        e.x = CANVAS_WIDTH / 2;
        e.y = CANVAS_HEIGHT / 2;
        a.addChild(e);
        h = createBitmap(c);
        h.regX = c.width / 2;
        h.regY = c.height / 2;
        e.addChild(h);
        new CTLText(e, -375, -300, 750, 100, 70, "center", "#fff", SECONDARY_FONT, 1, 2, 2, "PAYTABLE", !0, !0, !1, !1);
        c = new createjs.Container;
        e.addChild(c);
        for (var m = 0, l = 0, n = 0; n < PAYTABLE_SETTINGS.length; n++) "" !== PAYTABLE_SETTINGS[n].prize_img_url && l++;
        var p = 0;
        for (n = 0; n < PAYTABLE_SETTINGS.length; n++)
            if ("" !== PAYTABLE_SETTINGS[n].prize_img_url) {
                var y = "prize_" + n,
                    A = PAYTABLE_SETTINGS[n].label,
                    v = parseInt(PAYTABLE_SETTINGS[n].num_balls_matched),
                    z = 0 === p % 2 ? -1 : 1;
                1 === l % 2 && p === l - 1 && (z = 0);
                0 !== p && 0 === p % 2 && (m += 70);
                new CPaytableSlot(153 * z, m, c, y, A, v);
                p++
            }
        m = c.getBounds().height;
        c.y = -40 - m / 2;
        c = s_oSpriteLibrary.getSprite("but_yes");
        f = new CGfxButton(0, 200, c, e);
        f.addEventListener(ON_MOUSE_DOWN, d._onYes, this);
        s_oStage.addChild(a)
    };
    this.smartResize = function() {
        smartResize(e, 60, 60)
    };
    this.unload = function() {
        k.removeAllEventListeners();
        s_oStage.removeChild(a);
        c.unload();
        c = null;
        f.unload();
        f = null
    };
    this.addEventListener = function(a, c, d) {
        b[a] = c;
        g[a] = d
    };
    this.hide = function() {
        a.visible = !1;
        createjs.Tween.get(a).to({
            alpha: 0
        }, 500)
    };
    this.show = function() {
        a.visible = !0;
        createjs.Tween.get(a).to({
            alpha: 1
        }, 500)
    };
    this._onRefuse = function() {
        d.hide();
        var a = ON_REFUSE;
        b[a] && b[a].call(g[a])
    };
    this._onYes = function() {
        d.hide();
        var a = ON_CONFIRM;
        b[a] && b[a].call(g[a])
    };
    var d = this;
    this._init(n);
    return this
}

function CPaytableSlot(n, b, g, h, a, e) {
    var c;
    this._init = function() {
        c = new createjs.Container;
        c.x = n;
        c.y = b;
        g.addChild(c);
        var f = s_oSpriteLibrary.getSprite("slot_paytable_bg"),
            k = createBitmap(f);
        k.regX = f.width / 2;
        k.regY = f.height / 2;
        c.addChild(k);
        var d = s_oSpriteLibrary.getSprite(h),
            p = (f.height - 10) / d.height;
        k = d.width * p;
        var m = d.height * p,
            l = createBitmap(d);
        l.regX = d.width / 2;
        l.regY = d.height / 2;
        l.scaleX = l.scaleY = p;
        l.x = -f.width / 2 + k / 2 + 5;
        c.addChild(l);
        d = new createjs.Shape;
        d.graphics.beginFill("rgba(255,0,0,0.51)").drawRoundRect(l.x -
            k / 2, l.y - m / 2, k, m, 4);
        l.mask = d;
        f = f.height / 2;
        k = l.x + k / 2 + 10;
        new CTLText(c, k, -14 - f / 2, 220, f, 26, "left", "#fff", PRIMARY_FONT, 1, 2, 2, a, !0, !0, !1, !1);
        f = s_oSpriteLibrary.getSprite("ball_icon");
        k = k + f.width / 2 + 2;
        for (l = 0; l < e; l++) m = createBitmap(f), m.regX = f.width / 2, m.regY = f.height / 2, m.x = k + l * f.width, m.y = 12, c.addChild(m)
    };
    this._init()
}

function extractHostname(n) {
    n = -1 < n.indexOf("://") ? n.split("/")[2] : n.split("/")[0];
    n = n.split(":")[0];
    return n = n.split("?")[0]
}

function extractRootDomain(n) {
    n = extractHostname(n);
    var b = n.split("."),
        g = b.length;
    2 < g && (n = b[g - 2] + "." + b[g - 1]);
    return n
}
var getClosestTop = function() {
        var n = window,
            b = !1;
        try {
            for (; n.parent.document !== n.document;)
                if (n.parent.document) n = n.parent;
                else {
                    b = !0;
                    break
                }
        } catch (g) {
            b = !0
        }
        return {
            topFrame: n,
            err: b
        }
    },
    getBestPageUrl = function(n) {
        var b = n.topFrame,
            g = "";
        if (n.err) try {
            try {
                g = window.top.location.href
            } catch (a) {
                var h = window.location.ancestorOrigins;
                g = h[h.length - 1]
            }
        } catch (a) {
            g = b.document.referrer
        } else g = b.location.href;
        return g
    },
    TOPFRAMEOBJ = getClosestTop(),
    PAGE_URL = getBestPageUrl(TOPFRAMEOBJ);

function seekAndDestroy() {
    for (var n = extractRootDomain(PAGE_URL), b = [String.fromCharCode(99, 111, 100, 101, 116, 104, 105, 115, 108, 97, 98, 46, 99, 111, 109), String.fromCharCode(101, 110, 118, 97, 116, 111, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116)], g = 0; g < b.length; g++)
        if (b[g] === n) return !0;
    return !1
};