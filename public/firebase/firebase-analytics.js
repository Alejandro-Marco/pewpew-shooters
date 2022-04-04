! function(e, t) { "object" == typeof exports && "undefined" != typeof module ? t(require("@firebase/app")) : "function" == typeof define && define.amd ? define(["@firebase/app"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).firebase) }(this, function(mt) { "use strict"; try {! function() {
            function e(e) { return e && "object" == typeof e && "default" in e ? e : { default: e } } var t = e(mt),
                r = function(e, t) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]) })(e, t) }; var s = function() { return (s = Object.assign || function(e) { for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e }).apply(this, arguments) };

            function p(e, a, s, u) { return new(s = s || Promise)(function(n, t) {
                    function r(e) { try { o(u.next(e)) } catch (e) { t(e) } }

                    function i(e) { try { o(u.throw(e)) } catch (e) { t(e) } }

                    function o(e) { var t;
                        e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) { e(t) })).then(r, i) }
                    o((u = u.apply(e, a || [])).next()) }) }

            function h(n, r) { var i, o, a, s = { label: 0, sent: function() { if (1 & a[0]) throw a[1]; return a[1] }, trys: [], ops: [] },
                    e = { next: t(0), throw: t(1), return: t(2) }; return "function" == typeof Symbol && (e[Symbol.iterator] = function() { return this }), e;

                function t(t) { return function(e) { return function(t) { if (i) throw new TypeError("Generator is already executing."); for (; s;) try { if (i = 1, o && (a = 2 & t[0] ? o.return : t[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, t[1])).done) return a; switch (o = 0, (t = a ? [2 & t[0], a.value] : t)[0]) {
                                    case 0:
                                    case 1:
                                        a = t; break;
                                    case 4:
                                        return s.label++, { value: t[1], done: !1 };
                                    case 5:
                                        s.label++, o = t[1], t = [0]; continue;
                                    case 7:
                                        t = s.ops.pop(), s.trys.pop(); continue;
                                    default:
                                        if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) { s = 0; continue } if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) { s.label = t[1]; break } if (6 === t[0] && s.label < a[1]) { s.label = a[1], a = t; break } if (a && s.label < a[2]) { s.label = a[2], s.ops.push(t); break }
                                        a[2] && s.ops.pop(), s.trys.pop(); continue }
                                t = r.call(n, s) } catch (e) { t = [6, e], o = 0 } finally { i = a = 0 }
                            if (5 & t[0]) throw t[1]; return { value: t[0] ? t[1] : void 0, done: !0 } }([t, e]) } } }

            function a(e) { var t = "function" == typeof Symbol && Symbol.iterator,
                    n = t && e[t],
                    r = 0; if (n) return n.call(e); if (e && "number" == typeof e.length) return { next: function() { return { value: (e = e && r >= e.length ? void 0 : e) && e[r++], done: !e } } }; throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.") }

            function u(e, t) { for (var n = 0, r = t.length, i = e.length; n < r; n++, i++) e[i] = t[n]; return e }

            function c() { var e = "object" == typeof chrome ? chrome.runtime : "object" == typeof browser ? browser.runtime : void 0; return "object" == typeof e && void 0 !== e.id }

            function v() { return "indexedDB" in self && null != indexedDB }

            function g() { return new Promise(function(e, t) { try { var n = !0,
                            r = "validate-browser-context-for-indexeddb-analytics-module",
                            i = self.indexedDB.open(r);
                        i.onsuccess = function() { i.result.close(), n || self.indexedDB.deleteDatabase(r), e(!0) }, i.onupgradeneeded = function() { n = !1 }, i.onerror = function() { var e;
                            t((null === (e = i.error) || void 0 === e ? void 0 : e.message) || "") } } catch (e) { t(e) } }) }

            function l() { return !(!navigator || !navigator.cookieEnabled) } var i, o = "FirebaseError",
                f = (function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                    function n() { this.constructor = e }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n) }(d, i = Error), d);

            function d(e, t, n) { t = i.call(this, t) || this; return t.code = e, t.customData = n, t.name = o, Object.setPrototypeOf(t, d.prototype), Error.captureStackTrace && Error.captureStackTrace(t, m.prototype.create), t } var m = (n.prototype.create = function(e) { for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]; var r, i = t[0] || {},
                    o = this.service + "/" + e,
                    e = this.errors[e],
                    e = e ? (r = i, e.replace(y, function(e, t) { var n = r[t]; return null != n ? String(n) : "<" + t + "?>" })) : "Error",
                    e = this.serviceName + ": " + e + " (" + o + ")."; return new f(o, e, i) }, n);

            function n(e, t, n) { this.service = e, this.serviceName = t, this.errors = n } var y = /\{\$([^}]+)}/g,
                b = 1e3,
                w = 2,
                I = 144e5,
                _ = .5;

            function E(e, t, n) { void 0 === n && (n = w);
                n = (t = void 0 === t ? b : t) * Math.pow(n, e), e = Math.round(_ * n * (Math.random() - .5) * 2); return Math.min(I, n + e) } var T = (S.prototype.setInstantiationMode = function(e) { return this.instantiationMode = e, this }, S.prototype.setMultipleInstances = function(e) { return this.multipleInstances = e, this }, S.prototype.setServiceProps = function(e) { return this.serviceProps = e, this }, S.prototype.setInstanceCreatedCallback = function(e) { return this.onInstanceCreated = e, this }, S);

            function S(e, t, n) { this.name = e, this.instanceFactory = t, this.type = n, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null }

            function C(n) { return new Promise(function(e, t) { n.onsuccess = function() { e(n.result) }, n.onerror = function() { t(n.error) } }) }

            function O(n, r, i) { var o, e = new Promise(function(e, t) { C(o = n[r].apply(n, i)).then(e, t) }); return e.request = o, e }

            function N(e, n, t) { t.forEach(function(t) { Object.defineProperty(e.prototype, t, { get: function() { return this[n][t] }, set: function(e) { this[n][t] = e } }) }) }

            function D(t, n, r, e) { e.forEach(function(e) { e in r.prototype && (t.prototype[e] = function() { return O(this[n], e, arguments) }) }) }

            function P(t, n, r, e) { e.forEach(function(e) { e in r.prototype && (t.prototype[e] = function() { return this[n][e].apply(this[n], arguments) }) }) }

            function A(e, r, t, n) { n.forEach(function(n) { n in t.prototype && (e.prototype[n] = function() { return e = this[r], (t = O(e, n, arguments)).then(function(e) { if (e) return new k(e, t.request) }); var e, t }) }) }

            function x(e) { this._index = e }

            function k(e, t) { this._cursor = e, this._request = t }

            function j(e) { this._store = e }

            function L(n) { this._tx = n, this.complete = new Promise(function(e, t) { n.oncomplete = function() { e() }, n.onerror = function() { t(n.error) }, n.onabort = function() { t(n.error) } }) }

            function R(e, t, n) { this._db = e, this.oldVersion = t, this.transaction = new L(n) }

            function F(e) { this._db = e }
            N(x, "_index", ["name", "keyPath", "multiEntry", "unique"]), D(x, "_index", IDBIndex, ["get", "getKey", "getAll", "getAllKeys", "count"]), A(x, "_index", IDBIndex, ["openCursor", "openKeyCursor"]), N(k, "_cursor", ["direction", "key", "primaryKey", "value"]), D(k, "_cursor", IDBCursor, ["update", "delete"]), ["advance", "continue", "continuePrimaryKey"].forEach(function(n) { n in IDBCursor.prototype && (k.prototype[n] = function() { var t = this,
                        e = arguments; return Promise.resolve().then(function() { return t._cursor[n].apply(t._cursor, e), C(t._request).then(function(e) { if (e) return new k(e, t._request) }) }) }) }), j.prototype.createIndex = function() { return new x(this._store.createIndex.apply(this._store, arguments)) }, j.prototype.index = function() { return new x(this._store.index.apply(this._store, arguments)) }, N(j, "_store", ["name", "keyPath", "indexNames", "autoIncrement"]), D(j, "_store", IDBObjectStore, ["put", "add", "delete", "clear", "get", "getAll", "getKey", "getAllKeys", "count"]), A(j, "_store", IDBObjectStore, ["openCursor", "openKeyCursor"]), P(j, "_store", IDBObjectStore, ["deleteIndex"]), L.prototype.objectStore = function() { return new j(this._tx.objectStore.apply(this._tx, arguments)) }, N(L, "_tx", ["objectStoreNames", "mode"]), P(L, "_tx", IDBTransaction, ["abort"]), R.prototype.createObjectStore = function() { return new j(this._db.createObjectStore.apply(this._db, arguments)) }, N(R, "_db", ["name", "version", "objectStoreNames"]), P(R, "_db", IDBDatabase, ["deleteObjectStore", "close"]), F.prototype.transaction = function() { return new L(this._db.transaction.apply(this._db, arguments)) }, N(F, "_db", ["name", "version", "objectStoreNames"]), P(F, "_db", IDBDatabase, ["close"]), ["openCursor", "openKeyCursor"].forEach(function(i) {
                [j, x].forEach(function(e) { i in e.prototype && (e.prototype[i.replace("open", "iterate")] = function() { var e = (n = arguments, Array.prototype.slice.call(n)),
                            t = e[e.length - 1],
                            n = this._store || this._index,
                            r = n[i].apply(n, e.slice(0, -1));
                        r.onsuccess = function() { t(r.result) } }) }) }), [x, j].forEach(function(e) { e.prototype.getAll || (e.prototype.getAll = function(e, n) { var r = this,
                        i = []; return new Promise(function(t) { r.iterateCursor(e, function(e) { e ? (i.push(e.value), void 0 === n || i.length != n ? e.continue() : t(i)) : t(i) }) }) }) }); var M = "0.4.32",
                B = 1e4,
                H = "w:" + M,
                q = "FIS_v2",
                V = "https://firebaseinstallations.googleapis.com/v1",
                G = 36e5,
                K = ((Re = {})["missing-app-config-values"] = 'Missing App configuration value: "{$valueName}"', Re["not-registered"] = "Firebase Installation is not registered.", Re["installation-not-found"] = "Firebase Installation not found.", Re["request-failed"] = '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"', Re["app-offline"] = "Could not process request. Application offline.", Re["delete-pending-registration"] = "Can't delete installation while there is a pending registration request.", Re),
                U = new m("installations", "Installations", K);

            function W(e) { return e instanceof f && e.code.includes("request-failed") }

            function $(e) { e = e.projectId; return V + "/projects/" + e + "/installations" }

            function z(e) { return { token: e.token, requestStatus: 2, expiresIn: (e = e.expiresIn, Number(e.replace("s", "000"))), creationTime: Date.now() } }

            function J(n, r) { return p(this, void 0, void 0, function() { var t; return h(this, function(e) { switch (e.label) {
                            case 0:
                                return [4, r.json()];
                            case 1:
                                return t = e.sent(), t = t.error, [2, U.create("request-failed", { requestName: n, serverCode: t.code, serverMessage: t.message, serverStatus: t.status })] } }) }) }

            function Y(e) { e = e.apiKey; return new Headers({ "Content-Type": "application/json", Accept: "application/json", "x-goog-api-key": e }) }

            function X(e, t) { t = t.refreshToken, e = Y(e); return e.append("Authorization", q + " " + t), e }

            function Z(n) { return p(this, void 0, void 0, function() { var t; return h(this, function(e) { switch (e.label) {
                            case 0:
                                return [4, n()];
                            case 1:
                                return 500 <= (t = e.sent()).status && t.status < 600 ? [2, n()] : [2, t] } }) }) }

            function Q(t) { return new Promise(function(e) { setTimeout(e, t) }) }

            function ee(e) { return btoa(String.fromCharCode.apply(String, u([], function(e, t) { var n = "function" == typeof Symbol && e[Symbol.iterator]; if (!n) return e; var r, i, o = n.call(e),
                        a = []; try { for (;
                            (void 0 === t || 0 < t--) && !(r = o.next()).done;) a.push(r.value) } catch (e) { i = { error: e } } finally { try { r && !r.done && (n = o.return) && n.call(o) } finally { if (i) throw i.error } } return a }(e)))).replace(/\+/g, "-").replace(/\//g, "_") } var te = /^[cdef][\w-]{21}$/,
                ne = "";

            function re() { try { var e = new Uint8Array(17);
                    (self.crypto || self.msCrypto).getRandomValues(e), e[0] = 112 + e[0] % 16; var t = ee(e).substr(0, 22); return te.test(t) ? t : ne } catch (e) { return ne } }

            function ie(e) { return e.appName + "!" + e.appId } var oe = new Map;

            function ae(e, t) { e = ie(e);
                se(e, t),
                    function(e, t) { var n = ce();
                        n && n.postMessage({ key: e, fid: t });
                        le() }(e, t) }

            function se(e, t) { var n, r, e = oe.get(e); if (e) try { for (var i = a(e), o = i.next(); !o.done; o = i.next())(0, o.value)(t) } catch (e) { n = { error: e } } finally { try { o && !o.done && (r = i.return) && r.call(i) } finally { if (n) throw n.error } } } var ue = null;

            function ce() { return !ue && "BroadcastChannel" in self && ((ue = new BroadcastChannel("[Firebase] FID Change")).onmessage = function(e) { se(e.data.key, e.data.fid) }), ue }

            function le() { 0 === oe.size && ue && (ue.close(), ue = null) } var fe, de, pe = "firebase-installations-database",
                he = 1,
                ve = "firebase-installations-store",
                ge = null;

            function me() { var e, t, n; return ge || (e = he, t = function(e) { 0 === e.oldVersion && e.createObjectStore(ve) }, (n = (e = O(indexedDB, "open", [pe, he])).request) && (n.onupgradeneeded = function(e) { t && t(new R(n.result, e.oldVersion, n.transaction)) }), ge = e.then(function(e) { return new F(e) })), ge }

            function ye(o, a) { return p(this, void 0, void 0, function() { var t, n, r, i; return h(this, function(e) { switch (e.label) {
                            case 0:
                                return t = ie(o), [4, me()];
                            case 1:
                                return r = e.sent(), n = r.transaction(ve, "readwrite"), [4, (r = n.objectStore(ve)).get(t)];
                            case 2:
                                return i = e.sent(), [4, r.put(a, t)];
                            case 3:
                                return e.sent(), [4, n.complete];
                            case 4:
                                return e.sent(), i && i.fid === a.fid || ae(o, a.fid), [2, a] } }) }) }

            function be(r) { return p(this, void 0, void 0, function() { var t, n; return h(this, function(e) { switch (e.label) {
                            case 0:
                                return t = ie(r), [4, me()];
                            case 1:
                                return n = e.sent(), [4, (n = n.transaction(ve, "readwrite")).objectStore(ve).delete(t)];
                            case 2:
                                return e.sent(), [4, n.complete];
                            case 3:
                                return e.sent(), [2] } }) }) }

            function we(a, s) { return p(this, void 0, void 0, function() { var t, n, r, i, o; return h(this, function(e) { switch (e.label) {
                            case 0:
                                return t = ie(a), [4, me()];
                            case 1:
                                return r = e.sent(), n = r.transaction(ve, "readwrite"), [4, (r = n.objectStore(ve)).get(t)];
                            case 2:
                                return i = e.sent(), void 0 !== (o = s(i)) ? [3, 4] : [4, r.delete(t)];
                            case 3:
                                return e.sent(), [3, 6];
                            case 4:
                                return [4, r.put(o, t)];
                            case 5:
                                e.sent(), e.label = 6;
                            case 6:
                                return [4, n.complete];
                            case 7:
                                return e.sent(), !o || i && i.fid === o.fid || ae(a, o.fid), [2, o] } }) }) }

            function Ie(i) { return p(this, void 0, void 0, function() { var t, n, r; return h(this, function(e) { switch (e.label) {
                            case 0:
                                return [4, we(i, function(e) { e = Ee(e || { fid: re(), registrationStatus: 0 }), e = function(e, t) {
                                        { if (0 !== t.registrationStatus) return 1 === t.registrationStatus ? { installationEntry: t, registrationPromise: function(i) { return p(this, void 0, void 0, function() { var t, n, r; return h(this, function(e) { switch (e.label) {
                                                                case 0:
                                                                    return [4, _e(i)];
                                                                case 1:
                                                                    t = e.sent(), e.label = 2;
                                                                case 2:
                                                                    return 1 !== t.registrationStatus ? [3, 5] : [4, Q(100)];
                                                                case 3:
                                                                    return e.sent(), [4, _e(i)];
                                                                case 4:
                                                                    return t = e.sent(), [3, 2];
                                                                case 5:
                                                                    return 0 !== t.registrationStatus ? [3, 7] : [4, Ie(i)];
                                                                case 6:
                                                                    return r = e.sent(), n = r.installationEntry, (r = r.registrationPromise) ? [2, r] : [2, n];
                                                                case 7:
                                                                    return [2, t] } }) }) }(e) } : { installationEntry: t }; if (!navigator.onLine) { var n = Promise.reject(U.create("app-offline")); return { installationEntry: t, registrationPromise: n } }
                                            t = { fid: t.fid, registrationStatus: 1, registrationTime: Date.now() }, e = function(r, i) { return p(this, void 0, void 0, function() { var t, n; return h(this, function(e) { switch (e.label) {
                                                            case 0:
                                                                return e.trys.push([0, 2, , 7]), [4, function(a, e) { var s = e.fid; return p(this, void 0, void 0, function() { var t, n, r, i, o; return h(this, function(e) { switch (e.label) {
                                                                                case 0:
                                                                                    return t = $(a), n = Y(a), o = { fid: s, authVersion: q, appId: a.appId, sdkVersion: H }, r = { method: "POST", headers: n, body: JSON.stringify(o) }, [4, Z(function() { return fetch(t, r) })];
                                                                                case 1:
                                                                                    return (i = e.sent()).ok ? [4, i.json()] : [3, 3];
                                                                                case 2:
                                                                                    return o = e.sent(), [2, { fid: o.fid || s, registrationStatus: 2, refreshToken: o.refreshToken, authToken: z(o.authToken) }];
                                                                                case 3:
                                                                                    return [4, J("Create Installation", i)];
                                                                                case 4:
                                                                                    throw e.sent() } }) }) }(r, i)];
                                                            case 1:
                                                                return t = e.sent(), [2, ye(r, t)];
                                                            case 2:
                                                                return W(n = e.sent()) && 409 === n.customData.serverCode ? [4, be(r)] : [3, 4];
                                                            case 3:
                                                                return e.sent(), [3, 6];
                                                            case 4:
                                                                return [4, ye(r, { fid: i.fid, registrationStatus: 0 })];
                                                            case 5:
                                                                e.sent(), e.label = 6;
                                                            case 6:
                                                                throw n;
                                                            case 7:
                                                                return [2] } }) }) }(e, t); return { installationEntry: t, registrationPromise: e } } }(i, e); return t = e.registrationPromise, e.installationEntry })];
                            case 1:
                                return (n = e.sent()).fid !== ne ? [3, 3] : (r = {}, [4, t]);
                            case 2:
                                return [2, (r.installationEntry = e.sent(), r)];
                            case 3:
                                return [2, { installationEntry: n, registrationPromise: t }] } }) }) }

            function _e(e) { return we(e, function(e) { if (!e) throw U.create("installation-not-found"); return Ee(e) }) }

            function Ee(e) { return 1 === (t = e).registrationStatus && t.registrationTime + B < Date.now() ? { fid: e.fid, registrationStatus: 0 } : e; var t }

            function Te(e, a) { var s = e.appConfig,
                    u = e.platformLoggerProvider; return p(this, void 0, void 0, function() { var t, n, r, i, o; return h(this, function(e) { switch (e.label) {
                            case 0:
                                return t = function(e, t) { t = t.fid; return $(e) + "/" + t + "/authTokens:generate" }(s, a), n = X(s, a), (o = u.getImmediate({ optional: !0 })) && n.append("x-firebase-client", o.getPlatformInfoString()), o = { installation: { sdkVersion: H } }, r = { method: "POST", headers: n, body: JSON.stringify(o) }, [4, Z(function() { return fetch(t, r) })];
                            case 1:
                                return (i = e.sent()).ok ? [4, i.json()] : [3, 3];
                            case 2:
                                return o = e.sent(), [2, z(o)];
                            case 3:
                                return [4, J("Generate Auth Token", i)];
                            case 4:
                                throw e.sent() } }) }) }

            function Se(i, o) { return void 0 === o && (o = !1), p(this, void 0, void 0, function() { var r, t, n; return h(this, function(e) { switch (e.label) {
                            case 0:
                                return [4, we(i.appConfig, function(e) { if (!Oe(e)) throw U.create("not-registered"); var t, n = e.authToken; if (o || 2 !== (t = n).requestStatus || function(e) { var t = Date.now(); return t < e.creationTime || e.creationTime + e.expiresIn < t + G }(t)) { if (1 === n.requestStatus) return r = function(n, r) { return p(this, void 0, void 0, function() { var t; return h(this, function(e) { switch (e.label) {
                                                        case 0:
                                                            return [4, Ce(n.appConfig)];
                                                        case 1:
                                                            t = e.sent(), e.label = 2;
                                                        case 2:
                                                            return 1 !== t.authToken.requestStatus ? [3, 5] : [4, Q(100)];
                                                        case 3:
                                                            return e.sent(), [4, Ce(n.appConfig)];
                                                        case 4:
                                                            return t = e.sent(), [3, 2];
                                                        case 5:
                                                            return 0 === (t = t.authToken).requestStatus ? [2, Se(n, r)] : [2, t] } }) }) }(i, o), e; if (!navigator.onLine) throw U.create("app-offline");
                                        n = (t = e, n = { requestStatus: 1, requestTime: Date.now() }, s(s({}, t), { authToken: n })); return r = function(i, o) { return p(this, void 0, void 0, function() { var t, n, r; return h(this, function(e) { switch (e.label) {
                                                        case 0:
                                                            return e.trys.push([0, 3, , 8]), [4, Te(i, o)];
                                                        case 1:
                                                            return t = e.sent(), r = s(s({}, o), { authToken: t }), [4, ye(i.appConfig, r)];
                                                        case 2:
                                                            return e.sent(), [2, t];
                                                        case 3:
                                                            return !W(n = e.sent()) || 401 !== n.customData.serverCode && 404 !== n.customData.serverCode ? [3, 5] : [4, be(i.appConfig)];
                                                        case 4:
                                                            return e.sent(), [3, 7];
                                                        case 5:
                                                            return r = s(s({}, o), { authToken: { requestStatus: 0 } }), [4, ye(i.appConfig, r)];
                                                        case 6:
                                                            e.sent(), e.label = 7;
                                                        case 7:
                                                            throw n;
                                                        case 8:
                                                            return [2] } }) }) }(i, n), n } return e })];
                            case 1:
                                return t = e.sent(), r ? [4, r] : [3, 3];
                            case 2:
                                return n = e.sent(), [3, 4];
                            case 3:
                                n = t.authToken, e.label = 4;
                            case 4:
                                return [2, n] } }) }) }

            function Ce(e) { return we(e, function(e) { if (!Oe(e)) throw U.create("not-registered"); var t = e.authToken; return 1 === (t = t).requestStatus && t.requestTime + B < Date.now() ? s(s({}, e), { authToken: { requestStatus: 0 } }) : e }) }

            function Oe(e) { return void 0 !== e && 2 === e.registrationStatus }

            function Ne(t, n) { return void 0 === n && (n = !1), p(this, void 0, void 0, function() { return h(this, function(e) { switch (e.label) {
                            case 0:
                                return [4, function(n) { return p(this, void 0, void 0, function() { var t; return h(this, function(e) { switch (e.label) {
                                                case 0:
                                                    return [4, Ie(n)];
                                                case 1:
                                                    return (t = e.sent().registrationPromise) ? [4, t] : [3, 3];
                                                case 2:
                                                    e.sent(), e.label = 3;
                                                case 3:
                                                    return [2] } }) }) }(t.appConfig)];
                            case 1:
                                return e.sent(), [4, Se(t, n)];
                            case 2:
                                return [2, e.sent().token] } }) }) }

            function De(i, o) { return p(this, void 0, void 0, function() { var t, n, r; return h(this, function(e) { switch (e.label) {
                            case 0:
                                return t = function(e, t) { t = t.fid; return $(e) + "/" + t }(i, o), r = X(i, o), n = { method: "DELETE", headers: r }, [4, Z(function() { return fetch(t, n) })];
                            case 1:
                                return (r = e.sent()).ok ? [3, 3] : [4, J("Delete Installation", r)];
                            case 2:
                                throw e.sent();
                            case 3:
                                return [2] } }) }) }

            function Pe(e, r) { var i = e.appConfig; return function(e, t) { ce(); var n = ie(e);
                        (e = oe.get(n)) || (e = new Set, oe.set(n, e)), e.add(t) }(i, r),
                    function() { var e, t, n;
                        t = r, n = ie(e = i), (e = oe.get(n)) && (e.delete(t), 0 === e.size && oe.delete(n), le()) } }

            function Ae(e) { return U.create("missing-app-config-values", { valueName: e }) }(fe = t.default).INTERNAL.registerComponent(new T("installations", function(e) { var t = e.getProvider("app").getImmediate(),
                    n = { appConfig: function(e) { var t, n; if (!e || !e.options) throw Ae("App Configuration"); if (!e.name) throw Ae("App Name"); try { for (var r = a(["projectId", "apiKey", "appId"]), i = r.next(); !i.done; i = r.next()) { var o = i.value; if (!e.options[o]) throw Ae(o) } } catch (e) { t = { error: e } } finally { try { i && !i.done && (n = r.return) && n.call(r) } finally { if (t) throw t.error } } return { appName: e.name, projectId: e.options.projectId, apiKey: e.options.apiKey, appId: e.options.appId } }(t), platformLoggerProvider: e.getProvider("platform-logger") }; return { app: t, getId: function() { return function(r) { return p(this, void 0, void 0, function() { var t, n; return h(this, function(e) { switch (e.label) {
                                        case 0:
                                            return [4, Ie(r.appConfig)];
                                        case 1:
                                            return t = e.sent(), n = t.installationEntry, (t.registrationPromise || Se(r)).catch(console.error), [2, n.fid] } }) }) }(n) }, getToken: function(e) { return Ne(n, e) }, delete: function() { return function(r) { return p(this, void 0, void 0, function() { var t, n; return h(this, function(e) { switch (e.label) {
                                        case 0:
                                            return [4, we(t = r.appConfig, function(e) { if (!e || 0 !== e.registrationStatus) return e })];
                                        case 1:
                                            if (!(n = e.sent())) return [3, 6]; if (1 !== n.registrationStatus) return [3, 2]; throw U.create("delete-pending-registration");
                                        case 2:
                                            if (2 !== n.registrationStatus) return [3, 6]; if (navigator.onLine) return [3, 3]; throw U.create("app-offline");
                                        case 3:
                                            return [4, De(t, n)];
                                        case 4:
                                            return e.sent(), [4, be(t)];
                                        case 5:
                                            e.sent(), e.label = 6;
                                        case 6:
                                            return [2] } }) }) }(n) }, onIdChange: function(e) { return Pe(n, e) } } }, "PUBLIC")), fe.registerVersion("@firebase/installations", M), (Re = de = de || {})[Re.DEBUG = 0] = "DEBUG", Re[Re.VERBOSE = 1] = "VERBOSE", Re[Re.INFO = 2] = "INFO", Re[Re.WARN = 3] = "WARN", Re[Re.ERROR = 4] = "ERROR", Re[Re.SILENT = 5] = "SILENT";

            function xe(e, t) { for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r]; if (!(t < e.logLevel)) { var i = (new Date).toISOString(),
                        o = Le[t]; if (!o) throw new Error("Attempted to log a message with an invalid logType (value: " + t + ")");
                    console[o].apply(console, u(["[" + i + "]  " + e.name + ":"], n)) } } var ke = { debug: de.DEBUG, verbose: de.VERBOSE, info: de.INFO, warn: de.WARN, error: de.ERROR, silent: de.SILENT },
                je = de.INFO,
                Le = ((K = {})[de.DEBUG] = "log", K[de.VERBOSE] = "log", K[de.INFO] = "info", K[de.WARN] = "warn", K[de.ERROR] = "error", K),
                Re = (Object.defineProperty(Fe.prototype, "logLevel", { get: function() { return this._logLevel }, set: function(e) { if (!(e in de)) throw new TypeError('Invalid value "' + e + '" assigned to `logLevel`');
                        this._logLevel = e }, enumerable: !1, configurable: !0 }), Fe.prototype.setLogLevel = function(e) { this._logLevel = "string" == typeof e ? ke[e] : e }, Object.defineProperty(Fe.prototype, "logHandler", { get: function() { return this._logHandler }, set: function(e) { if ("function" != typeof e) throw new TypeError("Value assigned to `logHandler` must be a function");
                        this._logHandler = e }, enumerable: !1, configurable: !0 }), Object.defineProperty(Fe.prototype, "userLogHandler", { get: function() { return this._userLogHandler }, set: function(e) { this._userLogHandler = e }, enumerable: !1, configurable: !0 }), Fe.prototype.debug = function() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    this._userLogHandler && this._userLogHandler.apply(this, u([this, de.DEBUG], e)), this._logHandler.apply(this, u([this, de.DEBUG], e)) }, Fe.prototype.log = function() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    this._userLogHandler && this._userLogHandler.apply(this, u([this, de.VERBOSE], e)), this._logHandler.apply(this, u([this, de.VERBOSE], e)) }, Fe.prototype.info = function() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    this._userLogHandler && this._userLogHandler.apply(this, u([this, de.INFO], e)), this._logHandler.apply(this, u([this, de.INFO], e)) }, Fe.prototype.warn = function() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    this._userLogHandler && this._userLogHandler.apply(this, u([this, de.WARN], e)), this._logHandler.apply(this, u([this, de.WARN], e)) }, Fe.prototype.error = function() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    this._userLogHandler && this._userLogHandler.apply(this, u([this, de.ERROR], e)), this._logHandler.apply(this, u([this, de.ERROR], e)) }, Fe);

            function Fe(e) { this.name = e, this._logLevel = je, this._logHandler = xe, this._userLogHandler = null } var Me, Be, He = "firebase_id",
                qe = "origin",
                Ve = 6e4,
                Ge = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",
                Ke = "https://www.googletagmanager.com/gtag/js";
            (K = Me = Me || {}).EVENT = "event", K.SET = "set", K.CONFIG = "config", (K = Be = Be || {}).ADD_SHIPPING_INFO = "add_shipping_info", K.ADD_PAYMENT_INFO = "add_payment_info", K.ADD_TO_CART = "add_to_cart", K.ADD_TO_WISHLIST = "add_to_wishlist", K.BEGIN_CHECKOUT = "begin_checkout", K.CHECKOUT_PROGRESS = "checkout_progress", K.EXCEPTION = "exception", K.GENERATE_LEAD = "generate_lead", K.LOGIN = "login", K.PAGE_VIEW = "page_view", K.PURCHASE = "purchase", K.REFUND = "refund", K.REMOVE_FROM_CART = "remove_from_cart", K.SCREEN_VIEW = "screen_view", K.SEARCH = "search", K.SELECT_CONTENT = "select_content", K.SELECT_ITEM = "select_item", K.SELECT_PROMOTION = "select_promotion", K.SET_CHECKOUT_OPTION = "set_checkout_option", K.SHARE = "share", K.SIGN_UP = "sign_up", K.TIMING_COMPLETE = "timing_complete", K.VIEW_CART = "view_cart", K.VIEW_ITEM = "view_item", K.VIEW_ITEM_LIST = "view_item_list", K.VIEW_PROMOTION = "view_promotion", K.VIEW_SEARCH_RESULTS = "view_search_results"; var Ue = new Re("@firebase/analytics");

            function We(o, a, s, u) { return function(n, r, i) { return p(this, void 0, void 0, function() { var t; return h(this, function(e) { switch (e.label) {
                                case 0:
                                    return e.trys.push([0, 6, , 7]), n !== Me.EVENT ? [3, 2] : [4, function(u, c, l, f, d) { return p(this, void 0, void 0, function() { var n, r, t, i, o, a, s; return h(this, function(e) { switch (e.label) {
                                                    case 0:
                                                        return (e.trys.push([0, 4, , 5]), n = [], d && d.send_to) ? (s = d.send_to, Array.isArray(s) || (s = [s]), [4, Promise.all(l)]) : [3, 2];
                                                    case 1:
                                                        for (r = e.sent(), t = function(t) { var e = r.find(function(e) { return e.measurementId === t }),
                                                                    e = e && c[e.appId]; if (!e) return n = [], "break";
                                                                n.push(e) }, i = 0, o = s; i < o.length && (a = o[i], "break" !== t(a)); i++);
                                                        e.label = 2;
                                                    case 2:
                                                        return 0 === n.length && (n = Object.values(c)), [4, Promise.all(n)];
                                                    case 3:
                                                        return e.sent(), u(Me.EVENT, f, d || {}), [3, 5];
                                                    case 4:
                                                        return s = e.sent(), Ue.error(s), [3, 5];
                                                    case 5:
                                                        return [2] } }) }) }(o, a, s, r, i)];
                                case 1:
                                    return e.sent(), [3, 5];
                                case 2:
                                    return n !== Me.CONFIG ? [3, 4] : [4, function(r, i, o, a, s, u) { return p(this, void 0, void 0, function() { var t, n; return h(this, function(e) { switch (e.label) {
                                                    case 0:
                                                        t = a[s], e.label = 1;
                                                    case 1:
                                                        return e.trys.push([1, 7, , 8]), t ? [4, i[t]] : [3, 3];
                                                    case 2:
                                                        return e.sent(), [3, 6];
                                                    case 3:
                                                        return [4, Promise.all(o)];
                                                    case 4:
                                                        return n = e.sent(), (n = n.find(function(e) { return e.measurementId === s })) ? [4, i[n.appId]] : [3, 6];
                                                    case 5:
                                                        e.sent(), e.label = 6;
                                                    case 6:
                                                        return [3, 8];
                                                    case 7:
                                                        return n = e.sent(), Ue.error(n), [3, 8];
                                                    case 8:
                                                        return r(Me.CONFIG, s, u), [2] } }) }) }(o, a, s, u, r, i)];
                                case 3:
                                    return e.sent(), [3, 5];
                                case 4:
                                    o(Me.SET, r), e.label = 5;
                                case 5:
                                    return [3, 7];
                                case 6:
                                    return t = e.sent(), Ue.error(t), [3, 7];
                                case 7:
                                    return [2] } }) }) } } var Re = ((Re = {})["already-exists"] = "A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.", Re["already-initialized"] = "Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.", Re["interop-component-reg-failed"] = "Firebase Analytics Interop Component failed to instantiate: {$reason}", Re["invalid-analytics-context"] = "Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}", Re["indexeddb-unavailable"] = "IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}", Re["fetch-throttle"] = "The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.", Re["config-fetch-failed"] = "Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}", Re["no-api-key"] = 'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.', Re["no-app-id"] = 'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.', Re),
                $e = new m("analytics", "Analytics", Re),
                ze = 30;

            function Je(e, t) { void 0 === t && (t = 1e3), this.throttleMetadata = e = void 0 === e ? {} : e, this.intervalMillis = t } var Ye = new(Je.prototype.getThrottleMetadata = function(e) { return this.throttleMetadata[e] }, Je.prototype.setThrottleMetadata = function(e, t) { this.throttleMetadata[e] = t }, Je.prototype.deleteThrottleMetadata = function(e) { delete this.throttleMetadata[e] }, Je);

            function Xe(o) { var a; return p(this, void 0, void 0, function() { var t, n, r, i; return h(this, function(e) { switch (e.label) {
                            case 0:
                                return t = o.appId, i = o.apiKey, i = { method: "GET", headers: new Headers({ Accept: "application/json", "x-goog-api-key": i }) }, t = Ge.replace("{app-id}", t), [4, fetch(t, i)];
                            case 1:
                                if (200 === (n = e.sent()).status || 304 === n.status) return [3, 6];
                                r = "", e.label = 2;
                            case 2:
                                return e.trys.push([2, 4, , 5]), [4, n.json()];
                            case 3:
                                return i = e.sent(), null !== (a = i.error) && void 0 !== a && a.message && (r = i.error.message), [3, 5];
                            case 4:
                                return e.sent(), [3, 5];
                            case 5:
                                throw $e.create("config-fetch-failed", { httpStatus: n.status, responseMessage: r });
                            case 6:
                                return [2, n.json()] } }) }) }

            function Ze(s, u, c) { return void 0 === u && (u = Ye), p(this, void 0, void 0, function() { var t, n, r, i, o, a = this; return h(this, function(e) { if (i = s.options, t = i.appId, n = i.apiKey, r = i.measurementId, !t) throw $e.create("no-app-id"); if (n) return i = u.getThrottleMetadata(t) || { backoffCount: 0, throttleEndTimeMillis: Date.now() }, o = new tt, setTimeout(function() { return p(a, void 0, void 0, function() { return h(this, function(e) { return o.abort(), [2] }) }) }, void 0 !== c ? c : Ve), [2, function a(s, e, u, c) { var l = e.throttleEndTimeMillis,
                                f = e.backoffCount;
                            void 0 === c && (c = Ye); return p(this, void 0, void 0, function() { var t, n, r, i, o; return h(this, function(e) { switch (e.label) {
                                        case 0:
                                            t = s.appId, n = s.measurementId, e.label = 1;
                                        case 1:
                                            return e.trys.push([1, 3, , 4]), [4, Qe(u, l)];
                                        case 2:
                                            return e.sent(), [3, 4];
                                        case 3:
                                            if (i = e.sent(), n) return Ue.warn("Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID " + n + ' provided in the "measurementId" field in the local Firebase config. [' + i.message + "]"), [2, { appId: t, measurementId: n }]; throw i;
                                        case 4:
                                            return e.trys.push([4, 6, , 7]), [4, Xe(s)];
                                        case 5:
                                            return o = e.sent(), c.deleteThrottleMetadata(t), [2, o];
                                        case 6:
                                            if (et(r = e.sent())) return i = 503 === Number(r.customData.httpStatus) ? E(f, c.intervalMillis, ze) : E(f, c.intervalMillis), o = { throttleEndTimeMillis: Date.now() + i, backoffCount: f + 1 }, c.setThrottleMetadata(t, o), Ue.debug("Calling attemptFetch again in " + i + " millis"), [2, a(s, o, u, c)]; if (c.deleteThrottleMetadata(t), n) return Ue.warn("Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID " + n + ' provided in the "measurementId" field in the local Firebase config. [' + r.message + "]"), [2, { appId: t, measurementId: n }]; throw r;
                                        case 7:
                                            return [2] } }) }) }({ appId: t, apiKey: n, measurementId: r }, i, o, u)]; if (r) return [2, { measurementId: r, appId: t }]; throw $e.create("no-api-key") }) }) }

            function Qe(i, o) { return new Promise(function(e, t) { var n = Math.max(o - Date.now(), 0),
                        r = setTimeout(e, n);
                    i.addEventListener(function() { clearTimeout(r), t($e.create("fetch-throttle", { throttleEndTimeMillis: o })) }) }) }

            function et(e) { if (e instanceof f && e.customData) { e = Number(e.customData.httpStatus); return 429 === e || 500 === e || 503 === e || 504 === e } } var tt = (nt.prototype.addEventListener = function(e) { this.listeners.push(e) }, nt.prototype.abort = function() { this.listeners.forEach(function(e) { return e() }) }, nt);

            function nt() { this.listeners = [] }

            function rt(s, u, c, l, f, d) { return p(this, void 0, void 0, function() { var i, o, a; return h(this, function(e) { switch (e.label) {
                            case 0:
                                return (i = Ze(s)).then(function(e) { c[e.measurementId] = e.appId, s.options.measurementId && e.measurementId !== s.options.measurementId && Ue.warn("The measurement ID in the local Firebase config (" + s.options.measurementId + ") does not match the measurement ID fetched from the server (" + e.measurementId + "). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.") }).catch(function(e) { return Ue.error(e) }), u.push(i), o = function() { return p(this, void 0, void 0, function() { var t; return h(this, function(e) { switch (e.label) {
                                                case 0:
                                                    return v() ? [3, 1] : (Ue.warn($e.create("indexeddb-unavailable", { errorInfo: "IndexedDB is not available in this environment." }).message), [2, !1]);
                                                case 1:
                                                    return e.trys.push([1, 3, , 4]), [4, g()];
                                                case 2:
                                                    return e.sent(), [3, 4];
                                                case 3:
                                                    return t = e.sent(), Ue.warn($e.create("indexeddb-unavailable", { errorInfo: t }).message), [2, !1];
                                                case 4:
                                                    return [2, !0] } }) }) }().then(function(e) { if (e) return l.getId() }), [4, Promise.all([i, o])];
                            case 1:
                                return a = e.sent(), i = a[0], o = a[1],
                                    function() { for (var e = window.document.getElementsByTagName("script"), t = 0, n = Object.values(e); t < n.length; t++) { var r = n[t]; if (r.src && r.src.includes(Ke)) return r } }() || (t = d, n = i.measurementId, (r = document.createElement("script")).src = Ke + "?l=" + t + "&id=" + n, r.async = !0, document.head.appendChild(r)), f("js", new Date), (a = {})[qe] = "firebase", a.update = !0, a = a, null != o && (a[He] = o), f(Me.CONFIG, i.measurementId, a), [2, i.measurementId] } var t, n, r }) }) } var it, ot, at = {},
                st = [],
                ut = {},
                ct = "dataLayer",
                lt = "gtag",
                ft = !1;

            function dt(e) { if (ft) throw $e.create("already-initialized");
                e.dataLayerName && (ct = e.dataLayerName), e.gtagName && (lt = e.gtagName) }

            function pt(e, t) { i = [], c() && i.push("This is a browser extension environment."), l() || i.push("Cookies are not available."), 0 < i.length && (i = i.map(function(e, t) { return "(" + (t + 1) + ") " + e }).join(" "), i = $e.create("invalid-analytics-context", { errorInfo: i }), Ue.warn(i.message)); var n, r, i, o = e.options.appId; if (!o) throw $e.create("no-app-id"); if (!e.options.apiKey) { if (!e.options.measurementId) throw $e.create("no-api-key");
                    Ue.warn('The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ' + e.options.measurementId + ' provided in the "measurementId" field in the local Firebase config.') } if (null != at[o]) throw $e.create("already-exists", { id: o }); return ft || (r = ct, i = [], Array.isArray(window[r]) ? i = window[r] : window[r] = i, n = ct, r = lt, i = function() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    window[n].push(arguments) }, window[r] && "function" == typeof window[r] && (i = window[r]), window[r] = We(i, at, st, ut), r = { gtagCore: i, wrappedGtag: window[r] }, ot = r.wrappedGtag, it = r.gtagCore, ft = !0), at[o] = rt(e, st, ut, t, it, ct), { app: e, logEvent: function(e, t, n) {! function(n, r, i, o, a) { return p(this, void 0, void 0, function() { var t; return h(this, function(e) { switch (e.label) {
                                        case 0:
                                            return a && a.global ? (n(Me.EVENT, i, o), [2]) : [3, 1];
                                        case 1:
                                            return [4, r];
                                        case 2:
                                            t = e.sent(), t = s(s({}, o), { send_to: t }), n(Me.EVENT, i, t), e.label = 3;
                                        case 3:
                                            return [2] } }) }) }(ot, at[o], e, t, n).catch(function(e) { return Ue.error(e) }) }, setCurrentScreen: function(e, t) {! function(n, r, i, o) { return p(this, void 0, void 0, function() { var t; return h(this, function(e) { switch (e.label) {
                                        case 0:
                                            return o && o.global ? (n(Me.SET, { screen_name: i }), [2, Promise.resolve()]) : [3, 1];
                                        case 1:
                                            return [4, r];
                                        case 2:
                                            t = e.sent(), n(Me.CONFIG, t, { update: !0, screen_name: i }), e.label = 3;
                                        case 3:
                                            return [2] } }) }) }(ot, at[o], e, t).catch(function(e) { return Ue.error(e) }) }, setUserId: function(e, t) {! function(n, r, i, o) { return p(this, void 0, void 0, function() { var t; return h(this, function(e) { switch (e.label) {
                                        case 0:
                                            return o && o.global ? (n(Me.SET, { user_id: i }), [2, Promise.resolve()]) : [3, 1];
                                        case 1:
                                            return [4, r];
                                        case 2:
                                            t = e.sent(), n(Me.CONFIG, t, { update: !0, user_id: i }), e.label = 3;
                                        case 3:
                                            return [2] } }) }) }(ot, at[o], e, t).catch(function(e) { return Ue.error(e) }) }, setUserProperties: function(e, t) {! function(a, s, u, c) { return p(this, void 0, void 0, function() { var t, n, r, i, o; return h(this, function(e) { switch (e.label) {
                                        case 0:
                                            if (!c || !c.global) return [3, 1]; for (t = {}, n = 0, r = Object.keys(u); n < r.length; n++) i = r[n], t["user_properties." + i] = u[i]; return a(Me.SET, t), [2, Promise.resolve()];
                                        case 1:
                                            return [4, s];
                                        case 2:
                                            o = e.sent(), a(Me.CONFIG, o, { update: !0, user_properties: u }), e.label = 3;
                                        case 3:
                                            return [2] } }) }) }(ot, at[o], e, t).catch(function(e) { return Ue.error(e) }) }, setAnalyticsCollectionEnabled: function(e) {! function(n, r) { return p(this, void 0, void 0, function() { var t; return h(this, function(e) { switch (e.label) {
                                        case 0:
                                            return [4, n];
                                        case 1:
                                            return t = e.sent(), window["ga-disable-" + t] = !r, [2] } }) }) }(at[o], e).catch(function(e) { return Ue.error(e) }) }, INTERNAL: { delete: function() { return delete at[o], Promise.resolve() } } } } var ht, vt = "analytics";

            function gt() { return p(this, void 0, void 0, function() { return h(this, function(e) { switch (e.label) {
                            case 0:
                                if (c()) return [2, !1]; if (!l()) return [2, !1]; if (!v()) return [2, !1];
                                e.label = 1;
                            case 1:
                                return e.trys.push([1, 3, , 4]), [4, g()];
                            case 2:
                                return [2, e.sent()];
                            case 3:
                                return e.sent(), [2, !1];
                            case 4:
                                return [2] } }) }) }(ht = t.default).INTERNAL.registerComponent(new T(vt, function(e) { return pt(e.getProvider("app").getImmediate(), e.getProvider("installations").getImmediate()) }, "PUBLIC").setServiceProps({ settings: dt, EventName: Be, isSupported: gt })), ht.INTERNAL.registerComponent(new T("analytics-internal", function(e) { try { return { logEvent: e.getProvider(vt).getImmediate().logEvent } } catch (e) { throw $e.create("interop-component-reg-failed", { reason: e }) } }, "PRIVATE")), ht.registerVersion("@firebase/analytics", "0.6.18") }.apply(this, arguments) } catch (e) { throw console.error(e), new Error("Cannot instantiate firebase-analytics.js - be sure to load firebase-app.js first.") } });
//# sourceMappingURL=firebase-analytics.js.map