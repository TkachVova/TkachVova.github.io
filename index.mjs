import Le from "isomorphic-ws";
var dt = function(n, t) {
  return dt = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, r) {
    e.__proto__ = r;
  } || function(e, r) {
    for (var s in r)
      Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
  }, dt(n, t);
};
function O(n, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  dt(n, t);
  function e() {
    this.constructor = n;
  }
  n.prototype = t === null ? Object.create(t) : (e.prototype = t.prototype, new e());
}
var pt = function() {
  return pt = Object.assign || function(t) {
    for (var e, r = 1, s = arguments.length; r < s; r++) {
      e = arguments[r];
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
  }, pt.apply(this, arguments);
};
function Oe(n, t, e, r) {
  function s(i) {
    return i instanceof e ? i : new e(function(o) {
      o(i);
    });
  }
  return new (e || (e = Promise))(function(i, o) {
    function c(h) {
      try {
        u(r.next(h));
      } catch (l) {
        o(l);
      }
    }
    function a(h) {
      try {
        u(r.throw(h));
      } catch (l) {
        o(l);
      }
    }
    function u(h) {
      h.done ? i(h.value) : s(h.value).then(c, a);
    }
    u((r = r.apply(n, t || [])).next());
  });
}
function Yt(n, t) {
  var e = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, r, s, i, o;
  return o = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function c(u) {
    return function(h) {
      return a([u, h]);
    };
  }
  function a(u) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, u[0] && (e = 0)), e; )
      try {
        if (r = 1, s && (i = u[0] & 2 ? s.return : u[0] ? s.throw || ((i = s.return) && i.call(s), 0) : s.next) && !(i = i.call(s, u[1])).done)
          return i;
        switch (s = 0, i && (u = [u[0] & 2, i.value]), u[0]) {
          case 0:
          case 1:
            i = u;
            break;
          case 4:
            return e.label++, { value: u[1], done: !1 };
          case 5:
            e.label++, s = u[1], u = [0];
            continue;
          case 7:
            u = e.ops.pop(), e.trys.pop();
            continue;
          default:
            if (i = e.trys, !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              e = 0;
              continue;
            }
            if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
              e.label = u[1];
              break;
            }
            if (u[0] === 6 && e.label < i[1]) {
              e.label = i[1], i = u;
              break;
            }
            if (i && e.label < i[2]) {
              e.label = i[2], e.ops.push(u);
              break;
            }
            i[2] && e.ops.pop(), e.trys.pop();
            continue;
        }
        u = t.call(n, e);
      } catch (h) {
        u = [6, h], s = 0;
      } finally {
        r = i = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function W(n) {
  var t = typeof Symbol == "function" && Symbol.iterator, e = t && n[t], r = 0;
  if (e)
    return e.call(n);
  if (n && typeof n.length == "number")
    return {
      next: function() {
        return n && r >= n.length && (n = void 0), { value: n && n[r++], done: !n };
      }
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function R(n, t) {
  var e = typeof Symbol == "function" && n[Symbol.iterator];
  if (!e)
    return n;
  var r = e.call(n), s, i = [], o;
  try {
    for (; (t === void 0 || t-- > 0) && !(s = r.next()).done; )
      i.push(s.value);
  } catch (c) {
    o = { error: c };
  } finally {
    try {
      s && !s.done && (e = r.return) && e.call(r);
    } finally {
      if (o)
        throw o.error;
    }
  }
  return i;
}
function F(n, t, e) {
  if (e || arguments.length === 2)
    for (var r = 0, s = t.length, i; r < s; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return n.concat(i || Array.prototype.slice.call(t));
}
function B(n) {
  return this instanceof B ? (this.v = n, this) : new B(n);
}
function Pe(n, t, e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = e.apply(n, t || []), s, i = [];
  return s = {}, c("next"), c("throw"), c("return", o), s[Symbol.asyncIterator] = function() {
    return this;
  }, s;
  function o(f) {
    return function(y) {
      return Promise.resolve(y).then(f, l);
    };
  }
  function c(f, y) {
    r[f] && (s[f] = function(d) {
      return new Promise(function(T, C) {
        i.push([f, d, T, C]) > 1 || a(f, d);
      });
    }, y && (s[f] = y(s[f])));
  }
  function a(f, y) {
    try {
      u(r[f](y));
    } catch (d) {
      p(i[0][3], d);
    }
  }
  function u(f) {
    f.value instanceof B ? Promise.resolve(f.value.v).then(h, l) : p(i[0][2], f);
  }
  function h(f) {
    a("next", f);
  }
  function l(f) {
    a("throw", f);
  }
  function p(f, y) {
    f(y), i.shift(), i.length && a(i[0][0], i[0][1]);
  }
}
function Ae(n) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = n[Symbol.asyncIterator], e;
  return t ? t.call(n) : (n = typeof W == "function" ? W(n) : n[Symbol.iterator](), e = {}, r("next"), r("throw"), r("return"), e[Symbol.asyncIterator] = function() {
    return this;
  }, e);
  function r(i) {
    e[i] = n[i] && function(o) {
      return new Promise(function(c, a) {
        o = n[i](o), s(c, a, o.done, o.value);
      });
    };
  }
  function s(i, o, c, a) {
    Promise.resolve(a).then(function(u) {
      i({ value: u, done: c });
    }, o);
  }
}
function $(n) {
  return typeof n == "function";
}
function St(n) {
  var t = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, e = n(t);
  return e.prototype = Object.create(Error.prototype), e.prototype.constructor = e, e;
}
var ct = St(function(n) {
  return function(e) {
    n(this), this.message = e ? e.length + ` errors occurred during unsubscription:
` + e.map(function(r, s) {
      return s + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = e;
  };
});
function nt(n, t) {
  if (n) {
    var e = n.indexOf(t);
    0 <= e && n.splice(e, 1);
  }
}
var V = function() {
  function n(t) {
    this.initialTeardown = t, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return n.prototype.unsubscribe = function() {
    var t, e, r, s, i;
    if (!this.closed) {
      this.closed = !0;
      var o = this._parentage;
      if (o)
        if (this._parentage = null, Array.isArray(o))
          try {
            for (var c = W(o), a = c.next(); !a.done; a = c.next()) {
              var u = a.value;
              u.remove(this);
            }
          } catch (d) {
            t = { error: d };
          } finally {
            try {
              a && !a.done && (e = c.return) && e.call(c);
            } finally {
              if (t)
                throw t.error;
            }
          }
        else
          o.remove(this);
      var h = this.initialTeardown;
      if ($(h))
        try {
          h();
        } catch (d) {
          i = d instanceof ct ? d.errors : [d];
        }
      var l = this._finalizers;
      if (l) {
        this._finalizers = null;
        try {
          for (var p = W(l), f = p.next(); !f.done; f = p.next()) {
            var y = f.value;
            try {
              At(y);
            } catch (d) {
              i = i ?? [], d instanceof ct ? i = F(F([], R(i)), R(d.errors)) : i.push(d);
            }
          }
        } catch (d) {
          r = { error: d };
        } finally {
          try {
            f && !f.done && (s = p.return) && s.call(p);
          } finally {
            if (r)
              throw r.error;
          }
        }
      }
      if (i)
        throw new ct(i);
    }
  }, n.prototype.add = function(t) {
    var e;
    if (t && t !== this)
      if (this.closed)
        At(t);
      else {
        if (t instanceof n) {
          if (t.closed || t._hasParent(this))
            return;
          t._addParent(this);
        }
        (this._finalizers = (e = this._finalizers) !== null && e !== void 0 ? e : []).push(t);
      }
  }, n.prototype._hasParent = function(t) {
    var e = this._parentage;
    return e === t || Array.isArray(e) && e.includes(t);
  }, n.prototype._addParent = function(t) {
    var e = this._parentage;
    this._parentage = Array.isArray(e) ? (e.push(t), e) : e ? [e, t] : t;
  }, n.prototype._removeParent = function(t) {
    var e = this._parentage;
    e === t ? this._parentage = null : Array.isArray(e) && nt(e, t);
  }, n.prototype.remove = function(t) {
    var e = this._finalizers;
    e && nt(e, t), t instanceof n && t._removeParent(this);
  }, n.EMPTY = function() {
    var t = new n();
    return t.closed = !0, t;
  }(), n;
}(), Ht = V.EMPTY;
function qt(n) {
  return n instanceof V || n && "closed" in n && $(n.remove) && $(n.add) && $(n.unsubscribe);
}
function At(n) {
  $(n) ? n() : n.unsubscribe();
}
var Jt = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1
}, Xt = {
  setTimeout: function(n, t) {
    for (var e = [], r = 2; r < arguments.length; r++)
      e[r - 2] = arguments[r];
    return setTimeout.apply(void 0, F([n, t], R(e)));
  },
  clearTimeout: function(n) {
    var t = Xt.delegate;
    return ((t == null ? void 0 : t.clearTimeout) || clearTimeout)(n);
  },
  delegate: void 0
};
function Zt(n) {
  Xt.setTimeout(function() {
    throw n;
  });
}
function rt() {
}
function tt(n) {
  n();
}
var it = function(n) {
  O(t, n);
  function t(e) {
    var r = n.call(this) || this;
    return r.isStopped = !1, e ? (r.destination = e, qt(e) && e.add(r)) : r.destination = Be, r;
  }
  return t.create = function(e, r, s) {
    return new U(e, r, s);
  }, t.prototype.next = function(e) {
    this.isStopped || this._next(e);
  }, t.prototype.error = function(e) {
    this.isStopped || (this.isStopped = !0, this._error(e));
  }, t.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, t.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, n.prototype.unsubscribe.call(this), this.destination = null);
  }, t.prototype._next = function(e) {
    this.destination.next(e);
  }, t.prototype._error = function(e) {
    try {
      this.destination.error(e);
    } finally {
      this.unsubscribe();
    }
  }, t.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, t;
}(V), Re = Function.prototype.bind;
function ut(n, t) {
  return Re.call(n, t);
}
var Fe = function() {
  function n(t) {
    this.partialObserver = t;
  }
  return n.prototype.next = function(t) {
    var e = this.partialObserver;
    if (e.next)
      try {
        e.next(t);
      } catch (r) {
        X(r);
      }
  }, n.prototype.error = function(t) {
    var e = this.partialObserver;
    if (e.error)
      try {
        e.error(t);
      } catch (r) {
        X(r);
      }
    else
      X(t);
  }, n.prototype.complete = function() {
    var t = this.partialObserver;
    if (t.complete)
      try {
        t.complete();
      } catch (e) {
        X(e);
      }
  }, n;
}(), U = function(n) {
  O(t, n);
  function t(e, r, s) {
    var i = n.call(this) || this, o;
    if ($(e) || !e)
      o = {
        next: e ?? void 0,
        error: r ?? void 0,
        complete: s ?? void 0
      };
    else {
      var c;
      i && Jt.useDeprecatedNextContext ? (c = Object.create(e), c.unsubscribe = function() {
        return i.unsubscribe();
      }, o = {
        next: e.next && ut(e.next, c),
        error: e.error && ut(e.error, c),
        complete: e.complete && ut(e.complete, c)
      }) : o = e;
    }
    return i.destination = new Fe(o), i;
  }
  return t;
}(it);
function X(n) {
  Zt(n);
}
function je(n) {
  throw n;
}
var Be = {
  closed: !0,
  next: rt,
  error: je,
  complete: rt
}, wt = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function j(n) {
  return n;
}
function We() {
  for (var n = [], t = 0; t < arguments.length; t++)
    n[t] = arguments[t];
  return Qt(n);
}
function Qt(n) {
  return n.length === 0 ? j : n.length === 1 ? n[0] : function(e) {
    return n.reduce(function(r, s) {
      return s(r);
    }, e);
  };
}
var w = function() {
  function n(t) {
    t && (this._subscribe = t);
  }
  return n.prototype.lift = function(t) {
    var e = new n();
    return e.source = this, e.operator = t, e;
  }, n.prototype.subscribe = function(t, e, r) {
    var s = this, i = Ge(t) ? t : new U(t, e, r);
    return tt(function() {
      var o = s, c = o.operator, a = o.source;
      i.add(c ? c.call(i, a) : a ? s._subscribe(i) : s._trySubscribe(i));
    }), i;
  }, n.prototype._trySubscribe = function(t) {
    try {
      return this._subscribe(t);
    } catch (e) {
      t.error(e);
    }
  }, n.prototype.forEach = function(t, e) {
    var r = this;
    return e = Rt(e), new e(function(s, i) {
      var o = new U({
        next: function(c) {
          try {
            t(c);
          } catch (a) {
            i(a), o.unsubscribe();
          }
        },
        error: i,
        complete: s
      });
      r.subscribe(o);
    });
  }, n.prototype._subscribe = function(t) {
    var e;
    return (e = this.source) === null || e === void 0 ? void 0 : e.subscribe(t);
  }, n.prototype[wt] = function() {
    return this;
  }, n.prototype.pipe = function() {
    for (var t = [], e = 0; e < arguments.length; e++)
      t[e] = arguments[e];
    return Qt(t)(this);
  }, n.prototype.toPromise = function(t) {
    var e = this;
    return t = Rt(t), new t(function(r, s) {
      var i;
      e.subscribe(function(o) {
        return i = o;
      }, function(o) {
        return s(o);
      }, function() {
        return r(i);
      });
    });
  }, n.create = function(t) {
    return new n(t);
  }, n;
}();
function Rt(n) {
  var t;
  return (t = n ?? Jt.Promise) !== null && t !== void 0 ? t : Promise;
}
function Ue(n) {
  return n && $(n.next) && $(n.error) && $(n.complete);
}
function Ge(n) {
  return n && n instanceof it || Ue(n) && qt(n);
}
function Ve(n) {
  return $(n == null ? void 0 : n.lift);
}
function _(n) {
  return function(t) {
    if (Ve(t))
      return t.lift(function(e) {
        try {
          return n(e, this);
        } catch (r) {
          this.error(r);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function x(n, t, e, r, s) {
  return new Ne(n, t, e, r, s);
}
var Ne = function(n) {
  O(t, n);
  function t(e, r, s, i, o, c) {
    var a = n.call(this, e) || this;
    return a.onFinalize = o, a.shouldUnsubscribe = c, a._next = r ? function(u) {
      try {
        r(u);
      } catch (h) {
        e.error(h);
      }
    } : n.prototype._next, a._error = i ? function(u) {
      try {
        i(u);
      } catch (h) {
        e.error(h);
      } finally {
        this.unsubscribe();
      }
    } : n.prototype._error, a._complete = s ? function() {
      try {
        s();
      } catch (u) {
        e.error(u);
      } finally {
        this.unsubscribe();
      }
    } : n.prototype._complete, a;
  }
  return t.prototype.unsubscribe = function() {
    var e;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var r = this.closed;
      n.prototype.unsubscribe.call(this), !r && ((e = this.onFinalize) === null || e === void 0 || e.call(this));
    }
  }, t;
}(it), ze = St(function(n) {
  return function() {
    n(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), E = function(n) {
  O(t, n);
  function t() {
    var e = n.call(this) || this;
    return e.closed = !1, e.currentObservers = null, e.observers = [], e.isStopped = !1, e.hasError = !1, e.thrownError = null, e;
  }
  return t.prototype.lift = function(e) {
    var r = new vt(this, this);
    return r.operator = e, r;
  }, t.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new ze();
  }, t.prototype.next = function(e) {
    var r = this;
    tt(function() {
      var s, i;
      if (r._throwIfClosed(), !r.isStopped) {
        r.currentObservers || (r.currentObservers = Array.from(r.observers));
        try {
          for (var o = W(r.currentObservers), c = o.next(); !c.done; c = o.next()) {
            var a = c.value;
            a.next(e);
          }
        } catch (u) {
          s = { error: u };
        } finally {
          try {
            c && !c.done && (i = o.return) && i.call(o);
          } finally {
            if (s)
              throw s.error;
          }
        }
      }
    });
  }, t.prototype.error = function(e) {
    var r = this;
    tt(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.hasError = r.isStopped = !0, r.thrownError = e;
        for (var s = r.observers; s.length; )
          s.shift().error(e);
      }
    });
  }, t.prototype.complete = function() {
    var e = this;
    tt(function() {
      if (e._throwIfClosed(), !e.isStopped) {
        e.isStopped = !0;
        for (var r = e.observers; r.length; )
          r.shift().complete();
      }
    });
  }, t.prototype.unsubscribe = function() {
    this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
  }, Object.defineProperty(t.prototype, "observed", {
    get: function() {
      var e;
      return ((e = this.observers) === null || e === void 0 ? void 0 : e.length) > 0;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype._trySubscribe = function(e) {
    return this._throwIfClosed(), n.prototype._trySubscribe.call(this, e);
  }, t.prototype._subscribe = function(e) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(e), this._innerSubscribe(e);
  }, t.prototype._innerSubscribe = function(e) {
    var r = this, s = this, i = s.hasError, o = s.isStopped, c = s.observers;
    return i || o ? Ht : (this.currentObservers = null, c.push(e), new V(function() {
      r.currentObservers = null, nt(c, e);
    }));
  }, t.prototype._checkFinalizedStatuses = function(e) {
    var r = this, s = r.hasError, i = r.thrownError, o = r.isStopped;
    s ? e.error(i) : o && e.complete();
  }, t.prototype.asObservable = function() {
    var e = new w();
    return e.source = this, e;
  }, t.create = function(e, r) {
    return new vt(e, r);
  }, t;
}(w), vt = function(n) {
  O(t, n);
  function t(e, r) {
    var s = n.call(this) || this;
    return s.destination = e, s.source = r, s;
  }
  return t.prototype.next = function(e) {
    var r, s;
    (s = (r = this.destination) === null || r === void 0 ? void 0 : r.next) === null || s === void 0 || s.call(r, e);
  }, t.prototype.error = function(e) {
    var r, s;
    (s = (r = this.destination) === null || r === void 0 ? void 0 : r.error) === null || s === void 0 || s.call(r, e);
  }, t.prototype.complete = function() {
    var e, r;
    (r = (e = this.destination) === null || e === void 0 ? void 0 : e.complete) === null || r === void 0 || r.call(e);
  }, t.prototype._subscribe = function(e) {
    var r, s;
    return (s = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(e)) !== null && s !== void 0 ? s : Ht;
  }, t;
}(E), Tt = {
  now: function() {
    return (Tt.delegate || Date).now();
  },
  delegate: void 0
}, et = function(n) {
  O(t, n);
  function t(e, r, s) {
    e === void 0 && (e = 1 / 0), r === void 0 && (r = 1 / 0), s === void 0 && (s = Tt);
    var i = n.call(this) || this;
    return i._bufferSize = e, i._windowTime = r, i._timestampProvider = s, i._buffer = [], i._infiniteTimeWindow = !0, i._infiniteTimeWindow = r === 1 / 0, i._bufferSize = Math.max(1, e), i._windowTime = Math.max(1, r), i;
  }
  return t.prototype.next = function(e) {
    var r = this, s = r.isStopped, i = r._buffer, o = r._infiniteTimeWindow, c = r._timestampProvider, a = r._windowTime;
    s || (i.push(e), !o && i.push(c.now() + a)), this._trimBuffer(), n.prototype.next.call(this, e);
  }, t.prototype._subscribe = function(e) {
    this._throwIfClosed(), this._trimBuffer();
    for (var r = this._innerSubscribe(e), s = this, i = s._infiniteTimeWindow, o = s._buffer, c = o.slice(), a = 0; a < c.length && !e.closed; a += i ? 1 : 2)
      e.next(c[a]);
    return this._checkFinalizedStatuses(e), r;
  }, t.prototype._trimBuffer = function() {
    var e = this, r = e._bufferSize, s = e._timestampProvider, i = e._buffer, o = e._infiniteTimeWindow, c = (o ? 1 : 2) * r;
    if (r < 1 / 0 && c < i.length && i.splice(0, i.length - c), !o) {
      for (var a = s.now(), u = 0, h = 1; h < i.length && i[h] <= a; h += 2)
        u = h;
      u && i.splice(0, u + 1);
    }
  }, t;
}(E), Ke = function(n) {
  O(t, n);
  function t(e, r) {
    return n.call(this) || this;
  }
  return t.prototype.schedule = function(e, r) {
    return this;
  }, t;
}(V), mt = {
  setInterval: function(n, t) {
    for (var e = [], r = 2; r < arguments.length; r++)
      e[r - 2] = arguments[r];
    return setInterval.apply(void 0, F([n, t], R(e)));
  },
  clearInterval: function(n) {
    var t = mt.delegate;
    return ((t == null ? void 0 : t.clearInterval) || clearInterval)(n);
  },
  delegate: void 0
}, Ye = function(n) {
  O(t, n);
  function t(e, r) {
    var s = n.call(this, e, r) || this;
    return s.scheduler = e, s.work = r, s.pending = !1, s;
  }
  return t.prototype.schedule = function(e, r) {
    var s;
    if (r === void 0 && (r = 0), this.closed)
      return this;
    this.state = e;
    var i = this.id, o = this.scheduler;
    return i != null && (this.id = this.recycleAsyncId(o, i, r)), this.pending = !0, this.delay = r, this.id = (s = this.id) !== null && s !== void 0 ? s : this.requestAsyncId(o, this.id, r), this;
  }, t.prototype.requestAsyncId = function(e, r, s) {
    return s === void 0 && (s = 0), mt.setInterval(e.flush.bind(e, this), s);
  }, t.prototype.recycleAsyncId = function(e, r, s) {
    if (s === void 0 && (s = 0), s != null && this.delay === s && this.pending === !1)
      return r;
    r != null && mt.clearInterval(r);
  }, t.prototype.execute = function(e, r) {
    if (this.closed)
      return new Error("executing a cancelled action");
    this.pending = !1;
    var s = this._execute(e, r);
    if (s)
      return s;
    this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }, t.prototype._execute = function(e, r) {
    var s = !1, i;
    try {
      this.work(e);
    } catch (o) {
      s = !0, i = o || new Error("Scheduled action threw falsy error");
    }
    if (s)
      return this.unsubscribe(), i;
  }, t.prototype.unsubscribe = function() {
    if (!this.closed) {
      var e = this, r = e.id, s = e.scheduler, i = s.actions;
      this.work = this.state = this.scheduler = null, this.pending = !1, nt(i, this), r != null && (this.id = this.recycleAsyncId(s, r, null)), this.delay = null, n.prototype.unsubscribe.call(this);
    }
  }, t;
}(Ke), Ft = function() {
  function n(t, e) {
    e === void 0 && (e = n.now), this.schedulerActionCtor = t, this.now = e;
  }
  return n.prototype.schedule = function(t, e, r) {
    return e === void 0 && (e = 0), new this.schedulerActionCtor(this, t).schedule(r, e);
  }, n.now = Tt.now, n;
}(), He = function(n) {
  O(t, n);
  function t(e, r) {
    r === void 0 && (r = Ft.now);
    var s = n.call(this, e, r) || this;
    return s.actions = [], s._active = !1, s;
  }
  return t.prototype.flush = function(e) {
    var r = this.actions;
    if (this._active) {
      r.push(e);
      return;
    }
    var s;
    this._active = !0;
    do
      if (s = e.execute(e.state, e.delay))
        break;
    while (e = r.shift());
    if (this._active = !1, s) {
      for (; e = r.shift(); )
        e.unsubscribe();
      throw s;
    }
  }, t;
}(Ft), xt = new He(Ye), qe = xt, te = new w(function(n) {
  return n.complete();
});
function ee(n) {
  return n && $(n.schedule);
}
function It(n) {
  return n[n.length - 1];
}
function ne(n) {
  return $(It(n)) ? n.pop() : void 0;
}
function re(n) {
  return ee(It(n)) ? n.pop() : void 0;
}
function Je(n, t) {
  return typeof It(n) == "number" ? n.pop() : t;
}
var se = function(n) {
  return n && typeof n.length == "number" && typeof n != "function";
};
function ie(n) {
  return $(n == null ? void 0 : n.then);
}
function oe(n) {
  return $(n[wt]);
}
function ae(n) {
  return Symbol.asyncIterator && $(n == null ? void 0 : n[Symbol.asyncIterator]);
}
function ce(n) {
  return new TypeError("You provided " + (n !== null && typeof n == "object" ? "an invalid object" : "'" + n + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function Xe() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var ue = Xe();
function he(n) {
  return $(n == null ? void 0 : n[ue]);
}
function le(n) {
  return Pe(this, arguments, function() {
    var e, r, s, i;
    return Yt(this, function(o) {
      switch (o.label) {
        case 0:
          e = n.getReader(), o.label = 1;
        case 1:
          o.trys.push([1, , 9, 10]), o.label = 2;
        case 2:
          return [4, B(e.read())];
        case 3:
          return r = o.sent(), s = r.value, i = r.done, i ? [4, B(void 0)] : [3, 5];
        case 4:
          return [2, o.sent()];
        case 5:
          return [4, B(s)];
        case 6:
          return [4, o.sent()];
        case 7:
          return o.sent(), [3, 2];
        case 8:
          return [3, 10];
        case 9:
          return e.releaseLock(), [7];
        case 10:
          return [2];
      }
    });
  });
}
function fe(n) {
  return $(n == null ? void 0 : n.getReader);
}
function k(n) {
  if (n instanceof w)
    return n;
  if (n != null) {
    if (oe(n))
      return Ze(n);
    if (se(n))
      return Qe(n);
    if (ie(n))
      return tn(n);
    if (ae(n))
      return de(n);
    if (he(n))
      return en(n);
    if (fe(n))
      return nn(n);
  }
  throw ce(n);
}
function Ze(n) {
  return new w(function(t) {
    var e = n[wt]();
    if ($(e.subscribe))
      return e.subscribe(t);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function Qe(n) {
  return new w(function(t) {
    for (var e = 0; e < n.length && !t.closed; e++)
      t.next(n[e]);
    t.complete();
  });
}
function tn(n) {
  return new w(function(t) {
    n.then(function(e) {
      t.closed || (t.next(e), t.complete());
    }, function(e) {
      return t.error(e);
    }).then(null, Zt);
  });
}
function en(n) {
  return new w(function(t) {
    var e, r;
    try {
      for (var s = W(n), i = s.next(); !i.done; i = s.next()) {
        var o = i.value;
        if (t.next(o), t.closed)
          return;
      }
    } catch (c) {
      e = { error: c };
    } finally {
      try {
        i && !i.done && (r = s.return) && r.call(s);
      } finally {
        if (e)
          throw e.error;
      }
    }
    t.complete();
  });
}
function de(n) {
  return new w(function(t) {
    rn(n, t).catch(function(e) {
      return t.error(e);
    });
  });
}
function nn(n) {
  return de(le(n));
}
function rn(n, t) {
  var e, r, s, i;
  return Oe(this, void 0, void 0, function() {
    var o, c;
    return Yt(this, function(a) {
      switch (a.label) {
        case 0:
          a.trys.push([0, 5, 6, 11]), e = Ae(n), a.label = 1;
        case 1:
          return [4, e.next()];
        case 2:
          if (r = a.sent(), !!r.done)
            return [3, 4];
          if (o = r.value, t.next(o), t.closed)
            return [2];
          a.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return c = a.sent(), s = { error: c }, [3, 11];
        case 6:
          return a.trys.push([6, , 9, 10]), r && !r.done && (i = e.return) ? [4, i.call(e)] : [3, 8];
        case 7:
          a.sent(), a.label = 8;
        case 8:
          return [3, 10];
        case 9:
          if (s)
            throw s.error;
          return [7];
        case 10:
          return [7];
        case 11:
          return t.complete(), [2];
      }
    });
  });
}
function A(n, t, e, r, s) {
  r === void 0 && (r = 0), s === void 0 && (s = !1);
  var i = t.schedule(function() {
    e(), s ? n.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if (n.add(i), !s)
    return i;
}
function pe(n, t) {
  return t === void 0 && (t = 0), _(function(e, r) {
    e.subscribe(x(r, function(s) {
      return A(r, n, function() {
        return r.next(s);
      }, t);
    }, function() {
      return A(r, n, function() {
        return r.complete();
      }, t);
    }, function(s) {
      return A(r, n, function() {
        return r.error(s);
      }, t);
    }));
  });
}
function ve(n, t) {
  return t === void 0 && (t = 0), _(function(e, r) {
    r.add(n.schedule(function() {
      return e.subscribe(r);
    }, t));
  });
}
function sn(n, t) {
  return k(n).pipe(ve(t), pe(t));
}
function on(n, t) {
  return k(n).pipe(ve(t), pe(t));
}
function an(n, t) {
  return new w(function(e) {
    var r = 0;
    return t.schedule(function() {
      r === n.length ? e.complete() : (e.next(n[r++]), e.closed || this.schedule());
    });
  });
}
function cn(n, t) {
  return new w(function(e) {
    var r;
    return A(e, t, function() {
      r = n[ue](), A(e, t, function() {
        var s, i, o;
        try {
          s = r.next(), i = s.value, o = s.done;
        } catch (c) {
          e.error(c);
          return;
        }
        o ? e.complete() : e.next(i);
      }, 0, !0);
    }), function() {
      return $(r == null ? void 0 : r.return) && r.return();
    };
  });
}
function me(n, t) {
  if (!n)
    throw new Error("Iterable cannot be null");
  return new w(function(e) {
    A(e, t, function() {
      var r = n[Symbol.asyncIterator]();
      A(e, t, function() {
        r.next().then(function(s) {
          s.done ? e.complete() : e.next(s.value);
        });
      }, 0, !0);
    });
  });
}
function un(n, t) {
  return me(le(n), t);
}
function hn(n, t) {
  if (n != null) {
    if (oe(n))
      return sn(n, t);
    if (se(n))
      return an(n, t);
    if (ie(n))
      return on(n, t);
    if (ae(n))
      return me(n, t);
    if (he(n))
      return cn(n, t);
    if (fe(n))
      return un(n, t);
  }
  throw ce(n);
}
function Mt(n, t) {
  return t ? hn(n, t) : k(n);
}
var ln = St(function(n) {
  return function() {
    n(this), this.name = "EmptyError", this.message = "no elements in sequence";
  };
});
function ht(n, t) {
  return new Promise(function(e, r) {
    var s = new U({
      next: function(i) {
        e(i), s.unsubscribe();
      },
      error: r,
      complete: function() {
        r(new ln());
      }
    });
    n.subscribe(s);
  });
}
function fn(n) {
  return n instanceof Date && !isNaN(n);
}
function v(n, t) {
  return _(function(e, r) {
    var s = 0;
    e.subscribe(x(r, function(i) {
      r.next(n.call(t, i, s++));
    }));
  });
}
var dn = Array.isArray;
function pn(n, t) {
  return dn(t) ? n.apply(void 0, F([], R(t))) : n(t);
}
function vn(n) {
  return v(function(t) {
    return pn(n, t);
  });
}
var mn = Array.isArray, bn = Object.getPrototypeOf, yn = Object.prototype, gn = Object.keys;
function $n(n) {
  if (n.length === 1) {
    var t = n[0];
    if (mn(t))
      return { args: t, keys: null };
    if (Sn(t)) {
      var e = gn(t);
      return {
        args: e.map(function(r) {
          return t[r];
        }),
        keys: e
      };
    }
  }
  return { args: n, keys: null };
}
function Sn(n) {
  return n && typeof n == "object" && bn(n) === yn;
}
function wn(n, t) {
  return n.reduce(function(e, r, s) {
    return e[r] = t[s], e;
  }, {});
}
function Tn() {
  for (var n = [], t = 0; t < arguments.length; t++)
    n[t] = arguments[t];
  var e = re(n), r = ne(n), s = $n(n), i = s.args, o = s.keys;
  if (i.length === 0)
    return Mt([], e);
  var c = new w(xn(i, e, o ? function(a) {
    return wn(o, a);
  } : j));
  return r ? c.pipe(vn(r)) : c;
}
function xn(n, t, e) {
  return e === void 0 && (e = j), function(r) {
    jt(t, function() {
      for (var s = n.length, i = new Array(s), o = s, c = s, a = function(h) {
        jt(t, function() {
          var l = Mt(n[h], t), p = !1;
          l.subscribe(x(r, function(f) {
            i[h] = f, p || (p = !0, c--), c || r.next(e(i.slice()));
          }, function() {
            --o || r.complete();
          }));
        }, r);
      }, u = 0; u < s; u++)
        a(u);
    }, r);
  };
}
function jt(n, t, e) {
  n ? A(e, n, t) : t();
}
function In(n, t, e, r, s, i, o, c) {
  var a = [], u = 0, h = 0, l = !1, p = function() {
    l && !a.length && !u && t.complete();
  }, f = function(d) {
    return u < r ? y(d) : a.push(d);
  }, y = function(d) {
    u++;
    var T = !1;
    k(e(d, h++)).subscribe(x(t, function(C) {
      t.next(C);
    }, function() {
      T = !0;
    }, void 0, function() {
      if (T)
        try {
          u--;
          for (var C = function() {
            var N = a.shift();
            o || y(N);
          }; a.length && u < r; )
            C();
          p();
        } catch (N) {
          t.error(N);
        }
    }));
  };
  return n.subscribe(x(t, f, function() {
    l = !0, p();
  })), function() {
  };
}
function ot(n, t, e) {
  return e === void 0 && (e = 1 / 0), $(t) ? ot(function(r, s) {
    return v(function(i, o) {
      return t(r, i, s, o);
    })(k(n(r, s)));
  }, e) : (typeof t == "number" && (e = t), _(function(r, s) {
    return In(r, s, n, e);
  }));
}
function Mn(n) {
  return n === void 0 && (n = 1 / 0), ot(j, n);
}
function _n(n) {
  return new w(function(t) {
    k(n()).subscribe(t);
  });
}
var kn = {
  connector: function() {
    return new E();
  },
  resetOnDisconnect: !0
};
function En(n, t) {
  t === void 0 && (t = kn);
  var e = null, r = t.connector, s = t.resetOnDisconnect, i = s === void 0 ? !0 : s, o = r(), c = new w(function(a) {
    return o.subscribe(a);
  });
  return c.connect = function() {
    return (!e || e.closed) && (e = _n(function() {
      return n;
    }).subscribe(o), i && e.add(function() {
      return o = r();
    })), e;
  }, c;
}
function at(n, t, e) {
  n === void 0 && (n = 0), e === void 0 && (e = qe);
  var r = -1;
  return t != null && (ee(t) ? e = t : r = t), new w(function(s) {
    var i = fn(n) ? +n - e.now() : n;
    i < 0 && (i = 0);
    var o = 0;
    return e.schedule(function() {
      s.closed || (s.next(o++), 0 <= r ? this.schedule(void 0, r) : s.complete());
    }, i);
  });
}
function be(n, t) {
  return n === void 0 && (n = 0), t === void 0 && (t = xt), n < 0 && (n = 0), at(n, n, t);
}
function Cn() {
  for (var n = [], t = 0; t < arguments.length; t++)
    n[t] = arguments[t];
  var e = re(n), r = Je(n, 1 / 0), s = n;
  return s.length ? s.length === 1 ? k(s[0]) : Mn(r)(Mt(s, e)) : te;
}
function L(n, t) {
  return _(function(e, r) {
    var s = 0;
    e.subscribe(x(r, function(i) {
      return n.call(t, i, s++) && r.next(i);
    }));
  });
}
function Dn(n, t, e, r, s) {
  return function(i, o) {
    var c = e, a = t, u = 0;
    i.subscribe(x(o, function(h) {
      var l = u++;
      a = c ? n(a, h, l) : (c = !0, h), o.next(a);
    }, s));
  };
}
function b(n) {
  return n <= 0 ? function() {
    return te;
  } : _(function(t, e) {
    var r = 0;
    t.subscribe(x(e, function(s) {
      ++r <= n && (e.next(s), n <= r && e.complete());
    }));
  });
}
function Ln(n) {
  return v(function() {
    return n;
  });
}
function On(n, t) {
  return ot(function(e, r) {
    return k(n(e, r)).pipe(b(1), Ln(e));
  });
}
function Pn(n, t) {
  t === void 0 && (t = xt);
  var e = at(n, t);
  return On(function() {
    return e;
  });
}
function ye(n, t) {
  return t === void 0 && (t = j), n = n ?? An, _(function(e, r) {
    var s, i = !0;
    e.subscribe(x(r, function(o) {
      var c = t(o);
      (i || !n(s, c)) && (i = !1, s = c, r.next(o));
    }));
  });
}
function An(n, t) {
  return n === t;
}
function Rn(n) {
  n === void 0 && (n = 1 / 0);
  var t;
  n && typeof n == "object" ? t = n : t = {
    count: n
  };
  var e = t.count, r = e === void 0 ? 1 / 0 : e, s = t.delay, i = t.resetOnSuccess, o = i === void 0 ? !1 : i;
  return r <= 0 ? j : _(function(c, a) {
    var u = 0, h, l = function() {
      var p = !1;
      h = c.subscribe(x(a, function(f) {
        o && (u = 0), a.next(f);
      }, void 0, function(f) {
        if (u++ < r) {
          var y = function() {
            h ? (h.unsubscribe(), h = null, l()) : p = !0;
          };
          if (s != null) {
            var d = typeof s == "number" ? at(s) : k(s(f, u)), T = x(a, function() {
              T.unsubscribe(), y();
            }, function() {
              a.complete();
            });
            d.subscribe(T);
          } else
            y();
        } else
          a.error(f);
      })), p && (h.unsubscribe(), h = null, l());
    };
    l();
  });
}
function Fn(n, t) {
  return _(Dn(n, t, arguments.length >= 2, !0));
}
function jn(n) {
  n === void 0 && (n = {});
  var t = n.connector, e = t === void 0 ? function() {
    return new E();
  } : t, r = n.resetOnError, s = r === void 0 ? !0 : r, i = n.resetOnComplete, o = i === void 0 ? !0 : i, c = n.resetOnRefCountZero, a = c === void 0 ? !0 : c;
  return function(u) {
    var h, l, p, f = 0, y = !1, d = !1, T = function() {
      l == null || l.unsubscribe(), l = void 0;
    }, C = function() {
      T(), h = p = void 0, y = d = !1;
    }, N = function() {
      var z = h;
      C(), z == null || z.unsubscribe();
    };
    return _(function(z, Pt) {
      f++, !d && !y && T();
      var q = p = p ?? e();
      Pt.add(function() {
        f--, f === 0 && !d && !y && (l = lt(N, a));
      }), q.subscribe(Pt), !h && f > 0 && (h = new U({
        next: function(J) {
          return q.next(J);
        },
        error: function(J) {
          d = !0, T(), l = lt(C, s, J), q.error(J);
        },
        complete: function() {
          y = !0, T(), l = lt(C, o), q.complete();
        }
      }), k(z).subscribe(h));
    })(u);
  };
}
function lt(n, t) {
  for (var e = [], r = 2; r < arguments.length; r++)
    e[r - 2] = arguments[r];
  if (t === !0) {
    n();
    return;
  }
  if (t !== !1) {
    var s = new U({
      next: function() {
        s.unsubscribe(), n();
      }
    });
    return k(t.apply(void 0, F([], R(e)))).subscribe(s);
  }
}
function Y(n, t) {
  return _(function(e, r) {
    var s = null, i = 0, o = !1, c = function() {
      return o && !s && r.complete();
    };
    e.subscribe(x(r, function(a) {
      s == null || s.unsubscribe();
      var u = 0, h = i++;
      k(n(a, h)).subscribe(s = x(r, function(l) {
        return r.next(t ? t(a, l, h, u++) : l);
      }, function() {
        s = null, c();
      }));
    }, function() {
      o = !0, c();
    }));
  });
}
function bt(n) {
  return _(function(t, e) {
    k(n).subscribe(x(e, function() {
      return e.complete();
    }, rt)), !e.closed && t.subscribe(e);
  });
}
function Bt(n, t, e) {
  var r = $(n) || t || e ? { next: n, error: t, complete: e } : n;
  return r ? _(function(s, i) {
    var o;
    (o = r.subscribe) === null || o === void 0 || o.call(r);
    var c = !0;
    s.subscribe(x(i, function(a) {
      var u;
      (u = r.next) === null || u === void 0 || u.call(r, a), i.next(a);
    }, function() {
      var a;
      c = !1, (a = r.complete) === null || a === void 0 || a.call(r), i.complete();
    }, function(a) {
      var u;
      c = !1, (u = r.error) === null || u === void 0 || u.call(r, a), i.error(a);
    }, function() {
      var a, u;
      c && ((a = r.unsubscribe) === null || a === void 0 || a.call(r)), (u = r.finalize) === null || u === void 0 || u.call(r);
    }));
  }) : j;
}
function ge() {
  for (var n = [], t = 0; t < arguments.length; t++)
    n[t] = arguments[t];
  var e = ne(n);
  return _(function(r, s) {
    for (var i = n.length, o = new Array(i), c = n.map(function() {
      return !1;
    }), a = !1, u = function(l) {
      k(n[l]).subscribe(x(s, function(p) {
        o[l] = p, !a && !c[l] && (c[l] = !0, (a = c.every(j)) && (c = null));
      }, rt));
    }, h = 0; h < i; h++)
      u(h);
    r.subscribe(x(s, function(l) {
      if (a) {
        var p = F([l], R(o));
        s.next(e ? e.apply(void 0, F([], R(p))) : p);
      }
    }));
  });
}
function S(n, t, e) {
  return n[t] ?? e;
}
function D(...n) {
  return n.join(".");
}
const m = (n) => We(
  v((t) => n(t)),
  ye(),
  L((t) => t !== void 0)
), g = (n, t) => m((e) => S(e, n, t)), _t = (n, t = 0, e, r, s, i = 1) => {
  switch (s) {
    case "master": {
      const o = D(e, r - 1, n);
      return (c) => S(c, o, t);
    }
    case "aux":
    case "fx":
      return (o) => {
        const c = D(e, r - 1, s, i - 1, n);
        return S(o, c, t);
      };
  }
}, Bn = () => (n) => S(n, "m.mix"), Wn = () => (n) => S(n, "m.pan"), Un = () => (n) => S(n, "m.dim"), Wt = (n) => (t) => S(t, `m.delay${n}`, 0) * 1e3, Gn = (n, t, e, r) => _t("name", 0, n, t, e, r), $e = (n, t, e, r) => _t("pan", 0, n, t, e, r), Vn = (n, t, e, r) => _t("mute", 0, n, t, e, r), Nn = (n, t) => {
  const e = D(n, t - 1, "solo");
  return (r) => S(r, e);
}, zn = (n, t, e, r = 1) => {
  switch (e) {
    case "master": {
      const s = D(n, t - 1, "mix");
      return (i) => S(i, s);
    }
    case "aux":
    case "fx": {
      const s = D(n, t - 1, e, r - 1, "value");
      return (i) => S(i, s);
    }
  }
}, Kn = (n, t) => {
  const e = D(n, t - 1, "delay");
  return (r) => S(r, e, 0) * 1e3;
}, Yn = (n, t, e, r) => {
  const s = D(n, t - 1, e, r - 1, "post");
  return (i) => S(i, s, 0);
}, Se = (n, t) => {
  const e = D(n, t - 1, "stereoIndex");
  return (r) => ["i", "l", "p", "a"].includes(n) ? S(r, e, -1) : -1;
}, Ut = (n, t) => {
  const e = D(t, n - 1, "phantom");
  return (r) => S(r, e);
}, Gt = (n, t) => {
  const e = D(t, n - 1, "gain");
  return (r) => S(r, e);
}, Hn = (n, t) => {
  const e = D(
    "settings",
    n,
    ...t !== void 0 && t >= 0 ? [t] : []
  );
  return (r) => S(r, e);
}, kt = () => (n) => S(n, "var.currentLength", -1), we = () => (n) => S(n, "var.currentTrackPos", 0), Et = (n, t) => Math.max(0, Math.floor(n * t)), Te = (n, t) => Math.max(0, Math.floor(t - Et(n, t))), qn = () => (n) => {
  const t = we()(n), e = kt()(n);
  return Et(t, e);
}, Jn = () => (n) => {
  const t = we()(n), e = kt()(n);
  return Te(t, e);
}, Ct = () => (n) => S(n, "var.mtk.currentLength", -1), xe = () => (n) => S(n, "var.mtk.currentTrackPos", 0), Xn = () => (n) => {
  const t = xe()(n), e = Ct()(n);
  return Et(t, e);
}, Zn = () => (n) => {
  const t = xe()(n), e = Ct()(n);
  return Te(t, e);
};
function M(n, t, e) {
  return Math.min(e, Math.max(t, n));
}
function Qn(n) {
  return n.match(/^-?\d+$/) ? parseInt(n, 10) : n.match(/^\d+\.\d+$/) ? parseFloat(n) : n;
}
function kr(n) {
  if (n < 0)
    return "";
  const t = Math.floor(n), e = Math.floor(t / 60), r = t % 60;
  return `${e}:${r.toString().length === 1 ? "0" : ""}${r}`;
}
function st(n, t) {
  switch (t) {
    case 1:
      return n - 1;
    case 0:
      return n + 1;
    default:
      return n;
  }
}
function Vt(n) {
  switch (n) {
    case 1:
      return "L";
    case 2:
      return "R";
    default:
      return "";
  }
}
function tr(n, t) {
  switch (n) {
    case "i":
      return "CH " + t;
    case "a":
      return "AUX " + t;
    case "f":
      return "FX " + t;
    case "s":
      return "SUB " + t;
    case "v":
      return "VCA " + t;
    case "l":
      return "LINE IN " + Vt(t);
    case "p":
      return "PLAYER " + Vt(t);
  }
}
function Er(n, t) {
  t.conn.sendMessage("SETD^model^" + n);
}
const Ie = [
  [-1 / 0, 0],
  [-100, 0.00126941502],
  [-99, 0.0014193058],
  [-98, 0.00158625841],
  [-97, 0.00177210569],
  [-96, 0.0019787848],
  [-95, 0.00220842659],
  [-94, 0.00246331096],
  [-93, 0.00274592638],
  [-92, 0.00305891037],
  [-91, 0.00340510905],
  [-90, 0.00378751755],
  [-89, 0.00420932472],
  [-88, 0.00467389822],
  [-87, 0.00518476963],
  [-86, 0.00574563444],
  [-85, 0.00636033714],
  [-84, 0.00703287125],
  [-83, 0.00776734948],
  [-82, 0.00856804848],
  [-81, 0.00943937898],
  [-80, 0.01038584113],
  [-79, 0.01141215861],
  [-78, 0.01252317429],
  [-77, 0.01372399926],
  [-76, 0.01501996815],
  [-75, 0.0164167881],
  [-74, 0.01792064309],
  [-73, 0.01953828335],
  [-72, 0.02127727866],
  [-71, 0.02314623445],
  [-70, 0.02515518665],
  [-69, 0.02731607854],
  [-68, 0.02964346856],
  [-67, 0.03215561062],
  [-66, 0.03487607837],
  [-65, 0.0378363952],
  [-64, 0.04108065367],
  [-63, 0.04467409104],
  [-62, 0.04872117192],
  [-61, 0.05341050774],
  [-60, 0.05882352591],
  [-59, 0.06435465068],
  [-58, 0.06995738298],
  [-57, 0.07563393563],
  [-56, 0.08138664067],
  [-55, 0.08721791208],
  [-54, 0.09313031286],
  [-53, 0.09912653267],
  [-52, 0.10520938411],
  [-51, 0.11138185114],
  [-50, 0.11764705926],
  [-49, 0.12400831282],
  [-48, 0.13046910241],
  [-47, 0.13703311235],
  [-46, 0.14370423928],
  [-45, 0.15048661083],
  [-44, 0.15738460608],
  [-43, 0.16440286487],
  [-42, 0.17154632322],
  [-41, 0.17882022634],
  [-40, 0.18623016588],
  [-39, 0.19378209766],
  [-38, 0.20148238726],
  [-37, 0.20933783613],
  [-36, 0.21735573001],
  [-35, 0.22554387664],
  [-34, 0.23391066305],
  [-33, 0.24246510724],
  [-32, 0.25121692196],
  [-31, 0.26017658552],
  [-30, 0.26935542002],
  [-29.9, 0.27028582105],
  [-29.8, 0.27121854806],
  [-29.7, 0.27215361455],
  [-29.6, 0.2730910331],
  [-29.5, 0.27403081628],
  [-29.4, 0.27497297851],
  [-29.3, 0.27591753239],
  [-29.2, 0.2768644914],
  [-29.1, 0.27781386906],
  [-29, 0.27876567934],
  [-28.9, 0.27971993526],
  [-28.8, 0.28067665175],
  [-28.7, 0.28163584229],
  [-28.6, 0.28259752039],
  [-28.5, 0.28356170142],
  [-28.4, 0.28452839889],
  [-28.3, 0.28549762792],
  [-28.2, 0.28646940272],
  [-28.1, 0.2874437375],
  [-28, 0.28842064831],
  [-27.9, 0.28940014914],
  [-27.8, 0.29038225533],
  [-27.7, 0.29136698227],
  [-27.6, 0.29235434486],
  [-27.5, 0.29334435938],
  [-27.4, 0.29433704074],
  [-27.3, 0.29533240478],
  [-27.2, 0.2963304678],
  [-27.1, 0.29733124515],
  [-27, 0.29833475361],
  [-26.9, 0.29934100923],
  [-26.8, 0.30035002832],
  [-26.7, 0.30136182765],
  [-26.6, 0.3023764235],
  [-26.5, 0.30339383334],
  [-26.4, 0.30441407394],
  [-26.3, 0.30543716229],
  [-26.2, 0.30646311585],
  [-26.1, 0.30749195209],
  [-26, 0.30852368847],
  [-25.9, 0.30955834268],
  [-25.8, 0.31059593312],
  [-25.7, 0.31163647724],
  [-25.6, 0.31267999392],
  [-25.5, 0.31372650107],
  [-25.4, 0.31477601733],
  [-25.3, 0.31582856132],
  [-25.2, 0.31688415236],
  [-25.1, 0.31794280931],
  [-25, 0.31900455104],
  [-24.9, 0.32006939733],
  [-24.8, 0.32113736775],
  [-24.7, 0.32220848184],
  [-24.6, 0.32328275964],
  [-24.5, 0.32436022116],
  [-24.4, 0.32544088666],
  [-24.3, 0.32652477687],
  [-24.2, 0.32761191227],
  [-24.1, 0.32870231359],
  [-24, 0.32979600201],
  [-23.9, 0.33089299873],
  [-23.8, 0.33199332491],
  [-23.7, 0.33309700247],
  [-23.6, 0.33420405304],
  [-23.5, 0.33531449875],
  [-23.4, 0.33642836171],
  [-23.3, 0.33754566452],
  [-23.2, 0.33866642928],
  [-23.1, 0.33979067928],
  [-23, 0.34091843711],
  [-22.9, 0.34204972652],
  [-22.8, 0.34318457078],
  [-22.7, 0.34432299319],
  [-22.6, 0.34546501818],
  [-22.5, 0.34661066951],
  [-22.4, 0.3477599714],
  [-22.3, 0.34891294874],
  [-22.2, 0.35006962623],
  [-22.1, 0.35123002878],
  [-22, 0.35239418154],
  [-21.9, 0.35356211034],
  [-21.8, 0.35473384033],
  [-21.7, 0.35590939806],
  [-21.6, 0.35708880937],
  [-21.5, 0.35827210057],
  [-21.4, 0.35945929866],
  [-21.3, 0.36065043067],
  [-21.2, 0.36184552335],
  [-21.1, 0.36304460443],
  [-21, 0.3642477016],
  [-20.9, 0.36545484257],
  [-20.8, 0.36666605598],
  [-20.7, 0.36788136989],
  [-20.6, 0.36910081329],
  [-20.5, 0.37032441515],
  [-20.4, 0.37155220495],
  [-20.3, 0.37278421177],
  [-20.2, 0.37402046612],
  [-20.1, 0.37526099756],
  [-20, 0.37650583661],
  [-19.9, 0.37775501423],
  [-19.8, 0.37900856114],
  [-19.7, 0.38026650855],
  [-19.6, 0.38152888836],
  [-19.5, 0.38279573224],
  [-19.4, 0.38406707242],
  [-19.3, 0.38534294115],
  [-19.2, 0.38662337163],
  [-19.1, 0.38790839631],
  [-19, 0.3891980492],
  [-18.9, 0.3904923636],
  [-18.8, 0.39179137361],
  [-18.7, 0.39309511357],
  [-18.6, 0.39440361829],
  [-18.5, 0.39571692259],
  [-18.4, 0.39703506161],
  [-18.3, 0.39835807122],
  [-18.2, 0.39968598739],
  [-18.1, 0.40101884631],
  [-18, 0.40235668444],
  [-17.9, 0.40369953902],
  [-17.8, 0.40504744719],
  [-17.7, 0.40640044678],
  [-17.6, 0.4077585754],
  [-17.5, 0.40912187181],
  [-17.4, 0.41049037443],
  [-17.3, 0.41186412238],
  [-17.2, 0.413243155],
  [-17.1, 0.41462751222],
  [-17, 0.41601723386],
  [-16.9, 0.41741236055],
  [-16.8, 0.41881293315],
  [-16.7, 0.42021899263],
  [-16.6, 0.42163058079],
  [-16.5, 0.42304773943],
  [-16.4, 0.4244705108],
  [-16.3, 0.42589893762],
  [-16.2, 0.42733306286],
  [-16.1, 0.42877293006],
  [-16, 0.43021858274],
  [-15.9, 0.43167006527],
  [-15.8, 0.433127422],
  [-15.7, 0.43459069787],
  [-15.6, 0.43605993828],
  [-15.5, 0.43753518863],
  [-15.4, 0.43901649513],
  [-15.3, 0.44050390413],
  [-15.2, 0.4419974623],
  [-15.1, 0.44349721679],
  [-15, 0.44500321534],
  [-14.9, 0.44651550555],
  [-14.8, 0.44803413586],
  [-14.7, 0.4495591548],
  [-14.6, 0.4510906114],
  [-14.5, 0.45262855513],
  [-14.4, 0.45417303545],
  [-14.3, 0.45572410279],
  [-14.2, 0.45728180732],
  [-14.1, 0.45884620002],
  [-14, 0.46041733201],
  [-13.9, 0.46199525474],
  [-13.8, 0.46358002012],
  [-13.7, 0.46517168032],
  [-13.6, 0.46677028784],
  [-13.5, 0.46837589552],
  [-13.4, 0.46998855658],
  [-13.3, 0.47160832456],
  [-13.2, 0.47323525313],
  [-13.1, 0.47486939642],
  [-13, 0.47651080892],
  [-12.9, 0.47815954522],
  [-12.8, 0.47981566039],
  [-12.7, 0.4814792095],
  [-12.6, 0.48315024807],
  [-12.5, 0.48482883186],
  [-12.4, 0.48651501676],
  [-12.3, 0.48820885899],
  [-12.2, 0.48991041491],
  [-12.1, 0.49161974108],
  [-12, 0.49333689432],
  [-11.9, 0.49506193132],
  [-11.8, 0.49679490936],
  [-11.7, 0.49853588548],
  [-11.6, 0.50028491695],
  [-11.5, 0.5020420613],
  [-11.4, 0.50380737579],
  [-11.3, 0.50558091793],
  [-11.2, 0.50736274524],
  [-11.1, 0.50915291533],
  [-11, 0.51095148548],
  [-10.9, 0.51275851321],
  [-10.8, 0.51457405591],
  [-10.7, 0.51639817073],
  [-10.6, 0.51823091484],
  [-10.5, 0.52007234516],
  [-10.4, 0.52192251827],
  [-10.3, 0.52378149075],
  [-10.2, 0.52564931882],
  [-10.1, 0.52752605826],
  [-10, 0.5294117647],
  [-9.9, 0.53130649327],
  [-9.8, 0.53321029863],
  [-9.7, 0.53512323508],
  [-9.6, 0.53704535618],
  [-9.5, 0.53897671518],
  [-9.4, 0.54091736441],
  [-9.3, 0.54286735586],
  [-9.2, 0.54482674052],
  [-9.1, 0.54679556866],
  [-9, 0.54877388978],
  [-8.9, 0.5507617523],
  [-8.8, 0.55275920394],
  [-8.7, 0.55476629105],
  [-8.6, 0.55678305926],
  [-8.5, 0.55880955269],
  [-8.4, 0.56084581441],
  [-8.3, 0.5628918861],
  [-8.2, 0.56494780804],
  [-8.1, 0.56701361912],
  [-8, 0.56908935658],
  [-7.9, 0.57117505604],
  [-7.8, 0.57327075163],
  [-7.7, 0.57537647523],
  [-7.6, 0.57749225723],
  [-7.5, 0.5796181258],
  [-7.4, 0.58175410703],
  [-7.3, 0.58390022506],
  [-7.2, 0.58605650149],
  [-7.1, 0.58822295559],
  [-7, 0.59039960429],
  [-6.9, 0.59258646169],
  [-6.8, 0.59478353942],
  [-6.7, 0.59699084621],
  [-6.6, 0.59920838778],
  [-6.5, 0.60143616702],
  [-6.4, 0.60367418348],
  [-6.3, 0.60592243349],
  [-6.2, 0.60818091012],
  [-6.1, 0.61044960283],
  [-6, 0.61272849748],
  [-5.9, 0.6150175762],
  [-5.8, 0.61731681728],
  [-5.7, 0.61962619505],
  [-5.6, 0.62194567965],
  [-5.5, 0.62427523721],
  [-5.4, 0.62661482923],
  [-5.3, 0.62896441302],
  [-5.2, 0.63132394117],
  [-5.1, 0.63369336171],
  [-5, 0.63607261766],
  [-4.9, 0.63846164738],
  [-4.8, 0.64086038404],
  [-4.7, 0.64326875575],
  [-4.6, 0.6456866854],
  [-4.5, 0.64811409055],
  [-4.4, 0.65055088326],
  [-4.3, 0.65299697022],
  [-4.2, 0.65545225237],
  [-4.1, 0.6579166252],
  [-4, 0.66038997821],
  [-3.9, 0.6628721953],
  [-3.8, 0.66536315437],
  [-3.7, 0.66786272742],
  [-3.6, 0.67037078051],
  [-3.5, 0.67288717377],
  [-3.4, 0.67541176116],
  [-3.3, 0.67794439074],
  [-3.2, 0.68048490444],
  [-3.1, 0.68303313828],
  [-3, 0.685588922],
  [-2.9, 0.68815207965],
  [-2.8, 0.69072242902],
  [-2.7, 0.69329978223],
  [-2.6, 0.69588394539],
  [-2.5, 0.69847471884],
  [-2.4, 0.70107189735],
  [-2.3, 0.70367526991],
  [-2.2, 0.70628462004],
  [-2.1, 0.7088997261],
  [-2, 0.7115203609],
  [-1.9, 0.71414629236],
  [-1.8, 0.71677728344],
  [-1.7, 0.71941309224],
  [-1.6, 0.72205347242],
  [-1.5, 0.72469817317],
  [-1.4, 0.7273469395],
  [-1.3, 0.72999951243],
  [-1.2, 0.73265562946],
  [-1.1, 0.7353150243],
  [-1, 0.73797742761],
  [-0.9, 0.74064256705],
  [-0.8, 0.74331016751],
  [-0.7, 0.7459799514],
  [-0.6, 0.74865163909],
  [-0.5, 0.75132494903],
  [-0.4, 0.75399959798],
  [-0.3, 0.75667530153],
  [-0.2, 0.75935177424],
  [-0.1, 0.76202873001],
  [0, 0.76470588235],
  [0.1, 0.7673829447],
  [0.2, 0.77005963068],
  [0.3, 0.77273565461],
  [0.4, 0.77541073144],
  [0.5, 0.77808457747],
  [0.6, 0.78075691027],
  [0.7, 0.78342744932],
  [0.8, 0.78609591597],
  [0.9, 0.788762034],
  [1, 0.79142552969],
  [1.1, 0.79408613226],
  [1.2, 0.79674357391],
  [1.3, 0.79939759037],
  [1.4, 0.80204792085],
  [1.5, 0.80469430843],
  [1.6, 0.80733650032],
  [1.7, 0.80997424785],
  [1.8, 0.81260730696],
  [1.9, 0.81523543815],
  [2, 0.81785840681],
  [2.1, 0.82047598323],
  [2.2, 0.82308794296],
  [2.3, 0.82569406676],
  [2.4, 0.82829414081],
  [2.5, 0.83088795675],
  [2.6, 0.8334753119],
  [2.7, 0.83605600931],
  [2.8, 0.83862985772],
  [2.9, 0.84119667177],
  [3, 0.84375627202],
  [3.1, 0.84630848491],
  [3.2, 0.84885314284],
  [3.3, 0.85139008425],
  [3.4, 0.85391915357],
  [3.5, 0.85644020114],
  [3.6, 0.85895308337],
  [3.7, 0.86145766254],
  [3.8, 0.86395380691],
  [3.9, 0.86644139059],
  [4, 0.86892029358],
  [4.1, 0.87139040159],
  [4.2, 0.87385160607],
  [4.3, 0.87630380417],
  [4.4, 0.87874689855],
  [4.5, 0.8811807974],
  [4.6, 0.8836054143],
  [4.7, 0.88602066817],
  [4.8, 0.88842648314],
  [4.9, 0.89082278844],
  [5, 0.89320951837],
  [5.1, 0.89558661211],
  [5.2, 0.89795401365],
  [5.3, 0.90031167166],
  [5.4, 0.90265953944],
  [5.5, 0.9049975747],
  [5.6, 0.90732573954],
  [5.7, 0.90964400026],
  [5.8, 0.91195232733],
  [5.9, 0.91425069513],
  [6, 0.91653908203],
  [6.1, 0.91881747005],
  [6.2, 0.92108584497],
  [6.3, 0.92334419597],
  [6.4, 0.92559251573],
  [6.5, 0.92783080021],
  [6.6, 0.93005904852],
  [6.7, 0.93227726285],
  [6.8, 0.93448544835],
  [6.9, 0.93668361302],
  [7, 0.93887176758],
  [7.1, 0.94104992537],
  [7.2, 0.9432181023],
  [7.3, 0.94537631667],
  [7.4, 0.94752458909],
  [7.5, 0.94966294241],
  [7.6, 0.9517914016],
  [7.7, 0.95390999367],
  [7.8, 0.95601874754],
  [7.9, 0.95811769404],
  [8, 0.96020686568],
  [8.1, 0.96228629674],
  [8.2, 0.96435602299],
  [8.3, 0.96641608179],
  [8.4, 0.96846651193],
  [8.5, 0.97050735351],
  [8.6, 0.97253864795],
  [8.7, 0.9745604379],
  [8.8, 0.9765727671],
  [8.9, 0.97857568043],
  [9, 0.98056922374],
  [9.1, 0.98255344384],
  [9.2, 0.98452838843],
  [9.3, 0.98649410604],
  [9.4, 0.98845064599],
  [9.5, 0.99039805829],
  [9.6, 0.99233639364],
  [9.7, 0.99426570335],
  [9.8, 0.9961860393],
  [9.9, 0.99809745389],
  [10, 1],
  [1 / 0, 1]
];
function Me(n, t) {
  return M(n, 0, t) / 1e3;
}
function _e(n, t, e, r) {
  for (let s = 0; s < n.length; s++)
    if (!(n[s][e] < t))
      return s === 0 || s === 1 || t === n[s][e] ? n[s][r] : n[s - 1][r] + (n[s][r] - n[s - 1][r]) * (t - n[s - 1][e]) / (n[s][e] - n[s - 1][e]);
  return n[0][r];
}
function G(n) {
  return _e(Ie, n, 0, 1);
}
function Dt(n) {
  const t = _e(Ie, n, 1, 0);
  return Math.round(t * 10) / 10;
}
const H = 20, yt = 4e3;
function er(n) {
  return Math.round(
    (yt - H) * Math.pow(n, 3.0517) + H
  );
}
function nr(n) {
  const t = M(n, H, yt), e = Math.pow(
    (t - H) / (yt - H),
    0.32768620768751844
  );
  return Math.floor(e * 1e7) / 1e7;
}
function gt(n, t, e) {
  const r = (n - t) / (e - t);
  return M(r, 0, 1);
}
function $t(n, t, e) {
  const r = Math.round((n * (e - t) + t) * 10) / 10;
  return M(r, t, e);
}
class Nt {
  constructor(t, e, r) {
    this.conn = t, this.store = e, this.group = r, this.state$ = this.store.state$.pipe(g(`automix.${this.group}.on`));
  }
  setState(t) {
    this.conn.sendMessage(`SETD^automix.${this.group}.on^${t}`);
  }
  /** Enable this automix group */
  enable() {
    this.setState(1);
  }
  /** Disable this automix group */
  disable() {
    this.setState(0);
  }
  /** Toggle the state of this automix group */
  toggle() {
    this.state$.pipe(b(1)).subscribe((t) => this.setState(t ^ 1));
  }
}
class rr {
  constructor(t, e) {
    this.conn = t, this.store = e, this.responseTime$ = this.store.state$.pipe(g("automix.time")), this.responseTimeMs$ = this.responseTime$.pipe(v((r) => er(r))), this.groups = {
      a: new Nt(this.conn, this.store, "a"),
      b: new Nt(this.conn, this.store, "b")
    };
  }
  /**
   * Set global response time (linear)
   * @param value linear value between `0` and `1`
   */
  setResponseTime(t) {
    this.conn.sendMessage(`SETD^automix.time^${t}`);
  }
  /**
   * Set global response time (ms)
   * @param value milliseconds value between `20` and `4000`
   */
  setResponseTimeMs(t) {
    this.setResponseTime(nr(t));
  }
}
var I = /* @__PURE__ */ ((n) => (n.Opening = "OPENING", n.Open = "OPEN", n.Close = "CLOSE", n.Closing = "CLOSING", n.Error = "ERROR", n.Reconnecting = "RECONNECTING", n))(I || {}), ke = /* @__PURE__ */ ((n) => (n[n.Stopped = 0] = "Stopped", n[n.Playing = 2] = "Playing", n[n.Paused = 3] = "Paused", n))(ke || {}), Ee = /* @__PURE__ */ ((n) => (n[n.Stopped = 0] = "Stopped", n[n.Paused = 1] = "Paused", n[n.Playing = 2] = "Playing", n))(Ee || {}), P = /* @__PURE__ */ ((n) => (n[n.Linear = 0] = "Linear", n[n.EaseIn = 1] = "EaseIn", n[n.EaseOut = 2] = "EaseOut", n[n.EaseInOut = 3] = "EaseInOut", n))(P || {});
const zt = {
  0: (n) => n,
  1: (n) => n * n,
  2: (n) => n * (2 - n),
  3: (n) => n * (2 - n)
};
function Lt(n, t, e) {
  return n.pipe(
    ge(t),
    Y(
      ([{ targetValue: r, fadeTime: s, easing: i, fps: o }, c]) => sr(c, r, s, i, o).pipe(
        bt(e.status$.pipe(L((a) => a.type === I.Close)))
      )
    )
  );
}
function sr(n, t, e, r, s) {
  e = Math.max(e, s);
  const i = Math.round(1e3 / s), o = Math.round(e / i);
  r = r || P.Linear;
  const c = zt[r] || zt[P.Linear];
  return be(i).pipe(
    b(o),
    v((a) => c((a + 1) / o) * (t - n) + n),
    ye()
  );
}
function Ot(n) {
  return new Promise((t) => setTimeout(() => t(), n));
}
class Ce {
  constructor(t, e, r, s, i = "master", o = 0) {
    this.conn = t, this.store = e, this.channelType = r, this.channel = s, this.busType = i, this.bus = o, this.fullChannelId = `${this.channelType}.${this.channel - 1}`, this.faderLevelCommand = "mix", this.linkedChannelIds = [], this.transitionSources$ = new E(), this.stereoIndex$ = this.store.state$.pipe(
      m(Se(this.channelType, this.channel))
    ), this.faderLevel$ = this.store.state$.pipe(
      m(zn(this.channelType, this.channel, this.busType, this.bus))
    ), this.faderLevelDB$ = this.faderLevel$.pipe(v((u) => Dt(u))), this.mute$ = this.store.state$.pipe(
      m(Vn(this.channelType, this.channel, this.busType, this.bus))
    ), this.name$ = this.store.state$.pipe(
      m(Gn(this.channelType, this.channel, this.busType, this.bus)),
      v((u) => u || tr(this.channelType, this.channel))
    );
    const c = i + o + r + s, a = this.store.channelStore.get(c);
    if (a)
      return a;
    this.store.channelStore.set(c, this), Lt(this.transitionSources$, this.faderLevel$, t).subscribe(
      (u) => this.setFaderLevelRaw(u)
    );
  }
  /**
   * Perform fader transition to linear value
   * @param targetValue Target value as linear value (between 0 and 1)
   * @param fadeTime Fade time in ms
   * @param easing Easing characteristic, as an entry of the `Easings` enum. Defaults to `Linear`
   * @param fps Frames per second, defaults to 25
   */
  fadeTo(t, e, r = P.Linear, s = 25) {
    return t = M(t, 0, 1), this.transitionSources$.next({
      targetValue: t,
      fadeTime: e,
      easing: r,
      fps: s
    }), Ot(e);
  }
  /**
   * Perform fader transition to dB value
   * @param targetValueDB Target value as dB value (between -Infinity and 10)
   * @param fadeTime Fade time in ms
   * @param easing Easing characteristic, as an entry of the `Easings` enum. Defaults to `Linear`
   * @param fps Frames per second, defaults to 25
   */
  fadeToDB(t, e, r = P.Linear, s = 25) {
    const i = G(t);
    return this.fadeTo(i, e, r, s);
  }
  /**
   * Set linear level of the channel fader
   * @param value value between `0` and `1`
   */
  setFaderLevel(t) {
    t = M(t, 0, 1), this.setFaderLevelRaw(t);
  }
  setFaderLevelRaw(t) {
    [...this.linkedChannelIds, this.fullChannelId].forEach((e) => {
      const r = `SETD^${e}.${this.faderLevelCommand}^${t}`;
      this.conn.sendMessage(r);
    });
  }
  /**
   * Set dB level of the channel fader
   * @param value value between `-Infinity` and `10`
   */
  setFaderLevelDB(t) {
    this.setFaderLevel(G(t));
  }
  /**
   * Change the fader value relatively by adding a given value
   * @param offsetDB value (dB) to add to the current value
   */
  changeFaderLevelDB(t) {
    this.faderLevelDB$.pipe(b(1)).subscribe((e) => this.setFaderLevelDB(Math.max(e, -100) + t));
  }
  /**
   * Set MUTE value for the channel
   * @param value MUTE value `0` or `1`
   */
  setMute(t) {
    [...this.linkedChannelIds, this.fullChannelId].forEach((e) => {
      const r = `SETD^${e}.mute^${t}`;
      this.conn.sendMessage(r);
    });
  }
  /** Enable MUTE for the channel */
  mute() {
    this.setMute(1);
  }
  /** Disable MUTE for the channel */
  unmute() {
    this.setMute(0);
  }
  /** Toggle MUTE status for the channel */
  toggleMute() {
    this.mute$.pipe(b(1)).subscribe((t) => this.setMute(t ^ 1));
  }
}
class De extends Ce {
  constructor(t, e, r, s, i, o) {
    super(t, e, r, s, i, o), this.fullChannelId = this.constructChannelId(
      this.channelType,
      this.channel,
      this.busType,
      this.bus
    ), this.faderLevelCommand = "value", this.post$ = this.store.state$.pipe(
      m(Yn(this.channelType, this.channel, this.busType, this.bus))
    );
  }
  constructChannelId(t, e, r, s) {
    return `${t}.${e - 1}.${r}.${s - 1}`;
  }
  /**
   * Set PRE/POST value for the channel
   * @param value `1` (POST) or `0` (PRE)
   */
  setPost(t) {
    [...this.linkedChannelIds, this.fullChannelId].forEach((e) => {
      const r = `SETD^${e}.post^${t}`;
      this.conn.sendMessage(r);
    });
  }
  /** Set AUX channel to POST */
  post() {
    this.setPost(1);
  }
  /** Set AUX channel to PRE */
  pre() {
    this.setPost(0);
  }
  /** Toggle PRE/POST status of the channel */
  togglePost() {
    this.post$.pipe(b(1)).subscribe((t) => this.setPost(t ^ 1));
  }
}
class Z extends De {
  constructor(t, e, r, s, i) {
    super(t, e, r, s, "aux", i), this.auxLinkChannelIds = [], this.pan$ = this.store.state$.pipe(
      m($e(this.channelType, this.channel, this.busType, this.bus))
    ), Tn([this.store.state$.pipe(m(Se("a", i))), this.stereoIndex$]).pipe(
      v(([o, c]) => {
        const a = st(i, o), u = st(s, c), h = [], l = [];
        if (u !== void 0 && h.push(this.constructChannelId(r, u, this.busType, i)), a !== void 0) {
          const p = this.constructChannelId(r, s, this.busType, a);
          h.push(p), l.push(p);
        }
        return a !== void 0 && u !== void 0 && h.push(
          this.constructChannelId(r, u, this.busType, a)
        ), { allChannelIds: h, auxLinkChannelIds: l };
      })
    ).subscribe((o) => {
      this.linkedChannelIds = o.allChannelIds, this.auxLinkChannelIds = o.auxLinkChannelIds;
    });
  }
  /**
   * Set PAN value of the AUX channel.
   * This only works for stereo-linked AUX buses, not for mono AUX.
   * @param value value between `0` and `1`
   */
  pan(t) {
    t = M(t, 0, 1), [...this.auxLinkChannelIds, this.fullChannelId].forEach((e) => {
      const r = `SETD^${e}.pan^${t}`;
      this.conn.sendMessage(r);
    });
  }
  /**
   * Set PRE/POST PROC value for the AUX channel
   * @param value `1` (POST PROC) or `0` (PRE PROC)
   */
  setPostProc(t) {
    [...this.linkedChannelIds, this.fullChannelId].forEach((e) => {
      const r = `SETD^${e}.postproc^${t}`;
      this.conn.sendMessage(r);
    });
  }
  /** Set AUX channel to POST PROC */
  postProc() {
    this.setPostProc(1);
  }
  /** Set AUX channel to PRE PROC */
  preProc() {
    this.setPostProc(0);
  }
}
class ir {
  constructor(t, e, r) {
    this.conn = t, this.store = e, this.bus = r;
  }
  /**
   * Get input channel on the AUX bus
   * @param channel Channel number
   */
  input(t) {
    return new Z(this.conn, this.store, "i", t, this.bus);
  }
  /**
   * Get line channel on the AUX bus
   * @param channel Channel number
   */
  line(t) {
    return new Z(this.conn, this.store, "l", t, this.bus);
  }
  /**
   * Get player channel on the AUX bus
   * @param channel Channel number
   */
  player(t) {
    return new Z(this.conn, this.store, "p", t, this.bus);
  }
  /**
   * Get FX channel on the AUX bus
   * @param channel Channel number
   */
  fx(t) {
    return new Z(this.conn, this.store, "f", t, this.bus);
  }
}
class or {
  constructor(t) {
    this.store = t, this.model$ = this.store.state$.pipe(g("model")), this.firmware$ = this.store.state$.pipe(g("firmware")), this.model$.subscribe((e) => this.model = e);
  }
}
class ar {
  constructor(t, e) {
    this.conn = t, this.store = e, this.recording$ = this.store.state$.pipe(g("var.isRecording", 0)), this.busy$ = this.store.state$.pipe(g("var.recBusy", 0));
  }
  /** Toggle recording */
  recordToggle() {
    this.conn.sendMessage("RECTOGGLE");
  }
  /** Start recording */
  recordStart() {
    this.recording$.pipe(b(1)).subscribe((t) => {
      t || this.recordToggle();
    });
  }
  /** Stop recording */
  recordStop() {
    this.recording$.pipe(b(1)).subscribe((t) => {
      t && this.recordToggle();
    });
  }
}
class Q extends De {
  constructor(t, e, r, s, i) {
    super(t, e, r, s, "fx", i), this.stereoIndex$.pipe(
      v((o) => {
        const c = st(s, o);
        return c !== void 0 ? [
          this.constructChannelId(
            this.channelType,
            c,
            this.busType,
            this.bus
          )
        ] : [];
      })
    ).subscribe((o) => this.linkedChannelIds = o);
  }
}
class cr {
  constructor(t, e, r) {
    this.conn = t, this.store = e, this.bus = r;
  }
  /**
   * Get input channel on the FX bus
   * @param channel Channel number
   */
  input(t) {
    return new Q(this.conn, this.store, "i", t, this.bus);
  }
  /**
   * Get line channel on the FX bus
   * @param channel Channel number
   */
  line(t) {
    return new Q(this.conn, this.store, "l", t, this.bus);
  }
  /**
   * Get player channel on the FX bus
   * @param channel Channel number
   */
  player(t) {
    return new Q(this.conn, this.store, "p", t, this.bus);
  }
  /**
   * Get sub group channel on the FX bus
   * @param channel Channel number
   */
  sub(t) {
    return new Q(this.conn, this.store, "s", t, this.bus);
  }
}
class ur {
  constructor(t, e, r, s) {
    this.conn = t, this.store = e, this.deviceInfo = r, this.channel = s, this.fullChannelId = `hw.${this.channel - 1}`, this.phantom$ = this.deviceInfo.model$.pipe(
      Y((c) => {
        switch (c) {
          case "ui24":
            return this.store.state$.pipe(m(Ut(this.channel, "hw")));
          case "ui16":
          case "ui12":
            return this.store.state$.pipe(m(Ut(this.channel, "i")));
        }
      })
    ), this.gain$ = this.deviceInfo.model$.pipe(
      Y((c) => {
        switch (c) {
          case "ui24":
            return this.store.state$.pipe(m(Gt(this.channel, "hw")));
          case "ui16":
          case "ui12":
            return this.store.state$.pipe(m(Gt(this.channel, "i")));
        }
      })
    ), this.gainDB$ = this.deviceInfo.model$.pipe(
      Y((c) => {
        switch (c) {
          case "ui24":
            return this.gain$.pipe(v((a) => $t(a, -6, 57)));
          case "ui16":
          case "ui12":
            return this.gain$.pipe(v((a) => $t(a, -40, 50)));
        }
      })
    );
    const i = "hw" + s, o = this.store.channelStore.get(i);
    if (o)
      return o;
    this.store.channelStore.set(i, this), this.deviceInfo.model$.subscribe((c) => {
      switch (c) {
        case "ui24":
          this.fullChannelId = `hw.${this.channel - 1}`;
          return;
        case "ui16":
        case "ui12":
          this.fullChannelId = `i.${this.channel - 1}`;
          return;
      }
    });
  }
  /**
   * Set phantom power state for the channel
   * @param value `0` or `1`
   */
  setPhantom(t) {
    const e = `SETD^${this.fullChannelId}.phantom^${t}`;
    this.conn.sendMessage(e);
  }
  /** Switch ON phantom power for the channel */
  phantomOn() {
    this.setPhantom(1);
  }
  /** Switch OFF phantom power for the channel */
  phantomOff() {
    this.setPhantom(0);
  }
  /** Toggle phantom power for the channel */
  togglePhantom() {
    this.phantom$.pipe(b(1)).subscribe((t) => this.setPhantom(t ^ 1));
  }
  /**
   * Set gain level (linear) for the channel
   * @param value value between `0` and `1`
   */
  setGain(t) {
    t = M(t, 0, 1);
    const e = `SETD^${this.fullChannelId}.gain^${t}`;
    this.conn.sendMessage(e);
  }
  /**
   * Set gain level (dB) for the channel
   * @param value value between `-6` and `57`
   */
  setGainDB(t) {
    switch (this.deviceInfo.model) {
      case "ui24":
        this.setGain(gt(t, -6, 57));
        return;
      case "ui16":
      case "ui12":
        this.setGain(gt(t, -40, 50));
        return;
    }
  }
  /**
   * Change the gain value relatively by adding a given value
   * @param offsetDB value (dB) to add to the current value
   */
  changeGainDB(t) {
    this.gainDB$.pipe(b(1)).subscribe((e) => this.setGainDB(e + t));
  }
}
class K extends Ce {
  constructor(t, e, r, s) {
    super(t, e, r, s), this.fullChannelId = this.constructChannelId(this.channelType, this.channel), this.faderLevelCommand = "mix", this.solo$ = this.store.state$.pipe(m(Nn(this.channelType, this.channel))), this.pan$ = this.store.state$.pipe(
      m($e(this.channelType, this.channel, this.busType, this.bus))
    ), this.automixGroup$ = this.store.state$.pipe(
      g(`${this.fullChannelId}.amixgroup`),
      v((i) => {
        switch (i) {
          case 0:
            return "a";
          case 1:
            return "b";
          default:
            return "none";
        }
      })
    ), this.automixWeight$ = this.store.state$.pipe(g(`${this.fullChannelId}.amix`)), this.automixWeightDB$ = this.automixWeight$.pipe(v((i) => $t(i, -12, 12))), this.multiTrackSelected$ = this.store.state$.pipe(
      g(`${this.fullChannelId}.mtkrec`)
    ), this.stereoIndex$.pipe(
      v((i) => {
        const o = st(s, i);
        return o !== void 0 ? [this.constructChannelId(this.channelType, o)] : [];
      })
    ).subscribe((i) => this.linkedChannelIds = i);
  }
  constructChannelId(t, e) {
    return `${t}.${e - 1}`;
  }
  /**
   * Set PAN value of the channel
   * @param value value between `0` and `1`
   */
  pan(t) {
    t = M(t, 0, 1);
    const e = `SETD^${this.fullChannelId}.pan^${t}`;
    this.conn.sendMessage(e);
  }
  /**
   * Set SOLO value for the channel
   * @param value SOLO value `0` or `1`
   */
  setSolo(t) {
    [...this.linkedChannelIds, this.fullChannelId].forEach((e) => {
      const r = `SETD^${e}.solo^${t}`;
      this.conn.sendMessage(r);
    });
  }
  /** Enable SOLO for the channel */
  solo() {
    this.setSolo(1);
  }
  /** Disable SOLO for the channel */
  unsolo() {
    this.setSolo(0);
  }
  /** Toggle SOLO status for the channel */
  toggleSolo() {
    this.solo$.pipe(b(1)).subscribe((t) => this.setSolo(t ^ 1));
  }
  multiTrackAssertChannelType() {
    if (this.channelType !== "i" && this.channelType !== "l")
      throw new Error("Multitrack recording can only be used with input and line channels");
  }
  multiTrackSetSelection(t) {
    this.multiTrackAssertChannelType();
    const e = `SETD^${this.fullChannelId}.mtkrec^${t}`;
    this.conn.sendMessage(e);
  }
  /** Select this channel for multitrack recording */
  multiTrackSelect() {
    this.multiTrackSetSelection(1);
  }
  /** Remove this channel from multitrack recording */
  multiTrackUnselect() {
    this.multiTrackSetSelection(0);
  }
  /** Toggle multitrack recording for this channel */
  multiTrackToggle() {
    this.multiTrackAssertChannelType(), this.multiTrackSelected$.pipe(b(1)).subscribe((t) => this.multiTrackSetSelection(t ^ 1));
  }
  /** Assign this channel to an automix group. This also includes stereo-linked channels.
   * @param group `a` or `b` for automix groups. `none` to remove from all groups.
   */
  automixAssignGroup(t) {
    if (this.channelType !== "i")
      throw new Error("Automix can only be used with input channels");
    let e = -1;
    switch (t) {
      case "a":
        e = 0;
        break;
      case "b":
        e = 1;
        break;
      case "none":
        e = -1;
        break;
    }
    [...this.linkedChannelIds, this.fullChannelId].forEach((r) => {
      const s = `SETD^${r}.amixgroup^${e}`;
      this.conn.sendMessage(s);
    });
  }
  /** Remove this channel from the automix group */
  automixRemove() {
    this.automixAssignGroup("none");
  }
  /**
   * Set automix weight (linear) for the channel
   * @param value value between `0` and `1`
   */
  automixSetWeight(t) {
    t = M(t, 0, 1), [...this.linkedChannelIds, this.fullChannelId].forEach((e) => {
      const r = `SETD^${e}.amix^${t}`;
      this.conn.sendMessage(r);
    });
  }
  /**
   * Set automix weight (dB) for the channel
   * @param value value between `-12` and `12`
   */
  automixSetWeightDB(t) {
    this.automixSetWeight(gt(t, -12, 12));
  }
  /**
   * Change the automix weight relatively by adding a given value
   * @param offsetDB value (dB) to add to the current value
   */
  automixChangeWeightDB(t) {
    this.automixWeightDB$.pipe(b(1)).subscribe((e) => this.automixSetWeightDB(e + t));
  }
}
class ft extends K {
  constructor(t, e, r, s) {
    super(t, e, r, s), this.delay$ = this.store.state$.pipe(m(Kn(this.channelType, this.channel))), this.delayMaxValueMs = 250, r === "a" && (this.delayMaxValueMs = 500);
  }
  /**
   * Set delay of the channel in millseconds.
   * Input channels allow a maximum of 250 ms, AUX master channels can be delayed by 500 ms.
   * @param ms delay in milliseconds
   */
  setDelay(t) {
    const e = Me(t, this.delayMaxValueMs), r = `SETD^${this.fullChannelId}.delay^${e}`;
    this.conn.sendMessage(r);
  }
  /**
   * Change the delay relatively by adding a value.
   * Input channels allow a maximum of 250 ms, AUX master channels can be delayed by 500 ms.
   * @param offsetMs value (ms) to add to the current value
   */
  changeDelay(t) {
    this.delay$.pipe(b(1)).subscribe((e) => this.setDelay(e + t));
  }
}
class hr {
  constructor(t, e) {
    this.conn = t, this.store = e, this.faderLevel$ = this.store.state$.pipe(m(Bn())), this.faderLevelDB$ = this.faderLevel$.pipe(v((r) => Dt(r))), this.pan$ = this.store.state$.pipe(m(Wn())), this.dim$ = this.store.state$.pipe(m(Un())), this.delayL$ = this.store.state$.pipe(m(Wt("L"))), this.delayR$ = this.store.state$.pipe(m(Wt("R"))), this.transitionSources$ = new E(), Lt(this.transitionSources$, this.faderLevel$, t).subscribe(
      (r) => this.setFaderLevelRaw(r)
    );
  }
  /** Fader getters */
  /**
   * Get input channel on the master bus
   * @param channel Channel number
   */
  input(t) {
    return new ft(this.conn, this.store, "i", t);
  }
  /**
   * Get line channel on the master bus
   * @param channel Channel number
   */
  line(t) {
    return new ft(this.conn, this.store, "l", t);
  }
  /**
   * Get player channel on the master bus
   * @param channel Channel number
   */
  player(t) {
    return new K(this.conn, this.store, "p", t);
  }
  /**
   * Get AUX output channel on the master bus
   * @param channel Channel number
   */
  aux(t) {
    return new ft(this.conn, this.store, "a", t);
  }
  /**
   * Get FX channel on the master bus
   * @param channel Channel number
   */
  fx(t) {
    return new K(this.conn, this.store, "f", t);
  }
  /**
   * Get sub group channel on the master bus
   * @param channel Channel number
   */
  sub(t) {
    return new K(this.conn, this.store, "s", t);
  }
  /**
   * Get VCA channel on the master bus
   * @param channel Channel number
   */
  vca(t) {
    return new K(this.conn, this.store, "v", t);
  }
  /** Master actions */
  /**
   * Perform fader transition to linear value
   * @param targetValue Target value as linear value (between 0 and 1)
   * @param fadeTime Fade time in ms
   * @param easing Easing characteristic, as an entry of the `Easings` enum. Defaults to `Linear`
   * @param fps Frames per second, defaults to 25
   */
  fadeTo(t, e, r = P.Linear, s = 25) {
    return t = M(t, 0, 1), this.transitionSources$.next({
      targetValue: t,
      fadeTime: e,
      easing: r,
      fps: s
    }), Ot(e);
  }
  /**
   * Perform fader transition to dB value
   * @param targetValueDB Target value as dB value (between -Infinity and 10)
   * @param fadeTime Fade time in ms
   * @param easing Easing characteristic, as an entry of the `Easings` enum. Defaults to `Linear`
   * @param fps Frames per second, defaults to 25
   */
  fadeToDB(t, e, r = P.Linear, s = 25) {
    const i = G(t);
    return this.fadeTo(i, e, r, s);
  }
  /**
   * Set linear level of the master fader
   * @param value value between `0` and `1`
   */
  setFaderLevel(t) {
    t = M(t, 0, 1), this.setFaderLevelRaw(t);
  }
  setFaderLevelRaw(t) {
    const e = `SETD^m.mix^${t}`;
    this.conn.sendMessage(e);
  }
  /**
   * Set dB level of the master fader
   * @param dbValue value between `-Infinity` and `10`
   */
  setFaderLevelDB(t) {
    this.setFaderLevel(G(t));
  }
  /**
   * Change the fader value relatively by adding a given value
   * @param offsetDB value (dB) to add to the current value
   */
  changeFaderLevelDB(t) {
    this.faderLevelDB$.pipe(b(1)).subscribe((e) => this.setFaderLevelDB(Math.max(e, -100) + t));
  }
  /**
   * Set PAN value for the master
   * @param value value between `0` and `1`
   */
  pan(t) {
    t = M(t, 0, 1);
    const e = `SETD^m.pan^${t}`;
    this.conn.sendMessage(e);
  }
  /**
   * Set DIM value for the master
   * @param value DIM value `0` or `1`
   */
  setDim(t) {
    const e = `SETD^m.dim^${t}`;
    this.conn.sendMessage(e);
  }
  /** Enable DIM on the master */
  dim() {
    this.setDim(1);
  }
  /** Disable DIM on the master */
  undim() {
    this.setDim(0);
  }
  /** Toggle DIM on the master */
  toggleDim() {
    this.dim$.pipe(b(1)).subscribe((t) => this.setDim(t ^ 1));
  }
  /** Set LEFT DELAY (ms) for master output. Maximum 500 ms */
  setDelayL(t) {
    this.setDelay(t, "L");
  }
  /** Set RIGHT DELAY (ms) for master output. Maximum 500 ms */
  setDelayR(t) {
    this.setDelay(t, "R");
  }
  /**
   * Relatively change LEFT DELAY (ms) for master output. Maximum 500 ms
   * @param offsetMs value (ms) to add to the current value
   */
  changeDelayL(t) {
    this.delayL$.pipe(b(1)).subscribe((e) => this.setDelayL(e + t));
  }
  /**
   * Relatively change RIGHT DELAY (ms) for master output. Maximum 500 ms
   * @param offsetMs value (ms) to add to the current value
   */
  changeDelayR(t) {
    this.delayR$.pipe(b(1)).subscribe((e) => this.setDelayR(e + t));
  }
  setDelay(t, e) {
    const r = Me(t, 500);
    this.conn.sendMessage(`SETD^m.delay${e}^${r}`);
  }
}
class lr {
  constructor(t, e) {
    this.conn = t, this.store = e, this.state$ = this.store.state$.pipe(
      g("var.mtk.currentState", Ee.Stopped)
    ), this.session$ = this.store.state$.pipe(
      g("var.mtk.session"),
      v((r) => typeof r == "number" ? r.toString().padStart(4, "0") : r)
    ), this.length$ = this.store.state$.pipe(m(Ct())), this.elapsedTime$ = this.store.state$.pipe(m(Xn())), this.remainingTime$ = this.store.state$.pipe(m(Zn())), this.recording$ = this.store.state$.pipe(g("var.mtk.rec.currentState", 0)), this.busy$ = this.store.state$.pipe(g("var.mtk.rec.busy", 0)), this.recordingTime$ = this.store.state$.pipe(
      g("var.mtk.rec.time", 0),
      ge(this.recording$),
      v(([r, s]) => s ? r : 0)
      // set to 0 if not actually recording. otherwise, it emits strange values
    ), this.soundcheck$ = this.store.state$.pipe(g("var.mtk.soundcheck", 0));
  }
  /** Start the player */
  play() {
    this.conn.sendMessage("MTK_PLAY");
  }
  /** Pause the player */
  pause() {
    this.conn.sendMessage("MTK_PAUSE");
  }
  /** Stop the player */
  stop() {
    this.conn.sendMessage("MTK_STOP");
  }
  /** Toggle recording */
  recordToggle() {
    this.conn.sendMessage("MTK_REC_TOGGLE");
  }
  /** Start recording */
  recordStart() {
    this.recording$.pipe(b(1)).subscribe((t) => {
      t || this.recordToggle();
    });
  }
  /** Stop recording */
  recordStop() {
    this.recording$.pipe(b(1)).subscribe((t) => {
      t && this.recordToggle();
    });
  }
  /**
   * Set soundcheck (activate or deactivate)
   * @param value `0` or `1`
   */
  setSoundcheck(t) {
    const e = `SETD^var.mtk.soundcheck^${t}`;
    this.conn.sendMessage(e);
  }
  /** Activate soundcheck */
  activateSoundcheck() {
    this.setSoundcheck(1);
  }
  /** Deactivate soundcheck */
  deactivateSoundcheck() {
    this.setSoundcheck(0);
  }
  /** Toggle soundcheck */
  toggleSoundcheck() {
    this.soundcheck$.pipe(b(1)).subscribe((t) => this.setSoundcheck(t ^ 1));
  }
}
function fr(n, t) {
  return t < 0 ? n : n ^ 1 << t;
}
function dr(n, t) {
  return t < 0 ? n : n & ~(1 << t);
}
function pr(n, t) {
  return t < 0 ? n : n | 1 << t;
}
function vr(n, t) {
  return t < 0 ? n : n & 1 << t ? 1 : 0;
}
function mr(n) {
  switch (n) {
    case "all":
      return 23;
    case "fx":
      return 22;
    default:
      return n - 1;
  }
}
class br {
  constructor(t, e, r) {
    this.conn = t, this.store = e, this.id = r, this.mgMask$ = this.store.state$.pipe(g("mgmask")), this.state$ = this.mgMask$.pipe(v((o) => vr(o, this.groupIndex))), this.groupIndex = mr(r);
    const s = "mutegroup" + r, i = this.store.channelStore.get(s);
    if (i)
      return i;
    this.store.channelStore.set(s, this);
  }
  /** Mute the MUTE group */
  mute() {
    this.mgMask$.pipe(b(1)).subscribe((t) => this.setMgMask(pr(t, this.groupIndex)));
  }
  /** Unmute the MUTE group */
  unmute() {
    this.mgMask$.pipe(b(1)).subscribe((t) => this.setMgMask(dr(t, this.groupIndex)));
  }
  /** Toggle the MUTE group */
  toggle() {
    this.mgMask$.pipe(b(1)).subscribe((t) => this.setMgMask(fr(t, this.groupIndex)));
  }
  setMgMask(t) {
    const e = `SETD^mgmask^${t}`;
    this.conn.sendMessage(e);
  }
}
class yr {
  constructor(t, e) {
    this.conn = t, this.store = e, this.state$ = this.store.state$.pipe(
      g("var.currentState", ke.Stopped)
    ), this.playlist$ = this.store.state$.pipe(g("var.currentPlaylist")), this.track$ = this.store.state$.pipe(g("var.currentTrack")), this.length$ = this.store.state$.pipe(m(kt())), this.elapsedTime$ = this.store.state$.pipe(m(qn())), this.remainingTime$ = this.store.state$.pipe(m(Jn())), this.shuffle$ = this.store.state$.pipe(g("settings.shuffle", 0));
  }
  /** Start the media player */
  play() {
    this.conn.sendMessage("MEDIA_PLAY");
  }
  /** Pause the media player */
  pause() {
    this.conn.sendMessage("MEDIA_PAUSE");
  }
  /** Stop the media player */
  stop() {
    this.conn.sendMessage("MEDIA_STOP");
  }
  /** Jump to next track */
  next() {
    this.conn.sendMessage("MEDIA_NEXT");
  }
  /** Jump to previous track */
  prev() {
    this.conn.sendMessage("MEDIA_PREV");
  }
  /**
   * Load a playlist by name
   * @param playlist Playlist name
   */
  loadPlaylist(t) {
    this.conn.sendMessage(`MEDIA_SWITCH_PLIST^${t}`);
  }
  /**
   * Load a track from a given playlist
   * @param playlist Playlist name
   * @param track Track name on the playlist
   */
  loadTrack(t, e) {
    this.conn.sendMessage(`MEDIA_SWITCH_TRACK^${t}^${e}`);
  }
  /**
   * Set player shuffle setting
   * @param value `0` or `1`
   */
  setShuffle(t) {
    this.conn.sendMessage(`SETD^settings.shuffle^${t}`);
  }
  /**
   * Toggle player shuffle setting
   */
  toggleShuffle() {
    this.shuffle$.pipe(b(1)).subscribe((t) => this.setShuffle(t ^ 1));
  }
  /**
   * Set player mode like `manual` or `auto`.
   * Values are rather internal, please use convenience functions `manual()` and `auto()`.
   * @param value
   */
  setPlayMode(t) {
    this.conn.sendMessage(`SETD^settings.playMode^${t}`);
  }
  /** Enable manual mode */
  setManual() {
    this.setPlayMode(0);
  }
  /** Enable automatic mode */
  setAuto() {
    this.setPlayMode(3);
  }
}
class gr {
  constructor(t, e) {
    this.conn = t, this.store = e, this.currentShow$ = this.store.state$.pipe(g("var.currentShow")), this.currentSnapshot$ = this.store.state$.pipe(g("var.currentSnapshot")), this.currentCue$ = this.store.state$.pipe(g("var.currentCue"));
  }
  /**
   * Load a show by name
   * @param show Show name
   */
  loadShow(t) {
    this.conn.sendMessage(`LOADSHOW^${t}`);
  }
  /**
   * Load a snapshot in a show
   * @param show Show name
   * @param snapshot Snapshot name in the show
   */
  loadSnapshot(t, e) {
    this.conn.sendMessage(`LOADSNAPSHOT^${t}^${e}`);
  }
  /**
   * Load a cue in a show
   * @param show Show name
   * @param cue Cue name in the show
   */
  loadCue(t, e) {
    this.conn.sendMessage(`LOADCUE^${t}^${e}`);
  }
}
class Kt {
  constructor(t, e, r, s) {
    this.conn = t, this.store = e, this.busName = r, this.busId = s, this.transitionSources$ = new E(), this.faderLevel$ = this.store.state$.pipe(
      m(Hn(this.busName, this.busId ? this.busId - 1 : void 0))
    ), this.faderLevelDB$ = this.faderLevel$.pipe(v((c) => Dt(c)));
    const i = "volume-" + this.busName + this.busId, o = this.store.channelStore.get(i);
    if (o)
      return o;
    this.store.channelStore.set(i, this), Lt(this.transitionSources$, this.faderLevel$, t).subscribe(
      (c) => this.setFaderLevelRaw(c)
    );
  }
  /**
   * Perform fader transition to linear value
   * @param targetValue Target value as linear value (between 0 and 1)
   * @param fadeTime Fade time in ms
   * @param easing Easing characteristic, as an entry of the `Easings` enum. Defaults to `Linear`
   * @param fps Frames per second, defaults to 25
   */
  fadeTo(t, e, r = P.Linear, s = 25) {
    return t = M(t, 0, 1), this.transitionSources$.next({
      targetValue: t,
      fadeTime: e,
      easing: r,
      fps: s
    }), Ot(e);
  }
  /**
   * Perform fader transition to dB value
   * @param targetValueDB Target value as dB value (between -Infinity and 10)
   * @param fadeTime Fade time in ms
   * @param easing Easing characteristic, as an entry of the `Easings` enum. Defaults to `Linear`
   * @param fps Frames per second, defaults to 25
   */
  fadeToDB(t, e, r = P.Linear, s = 25) {
    const i = G(t);
    return this.fadeTo(i, e, r, s);
  }
  /**
   * Set linear level of the bus volume
   * @param value value between `0` and `1`
   */
  setFaderLevel(t) {
    t = M(t, 0, 1), this.setFaderLevelRaw(t);
  }
  setFaderLevelRaw(t) {
    const r = `SETD^settings.${`${this.busName}${this.busId ? "." + (this.busId - 1) : ""}`}^${t}`;
    this.conn.sendMessage(r);
  }
  /**
   * Set dB level of the bus volume
   * @param value value between `-Infinity` and `10`
   */
  setFaderLevelDB(t) {
    this.setFaderLevel(G(t));
  }
  /**
   * Change the volume fader value relatively by adding a given value
   * @param offsetDB value (dB) to add to the current value
   */
  changeFaderLevelDB(t) {
    this.faderLevelDB$.pipe(b(1)).subscribe((e) => this.setFaderLevelDB(Math.max(e, -100) + t));
  }
}
var $r = {
  url: "",
  deserializer: function(n) {
    return JSON.parse(n.data);
  },
  serializer: function(n) {
    return JSON.stringify(n);
  }
}, Sr = "WebSocketSubject.error must be called with an object with an error code, and an optional reason: { code: number, reason: string }", wr = function(n) {
  O(t, n);
  function t(e, r) {
    var s = n.call(this) || this;
    if (s._socket = null, e instanceof w)
      s.destination = r, s.source = e;
    else {
      var i = s._config = pt({}, $r);
      if (s._output = new E(), typeof e == "string")
        i.url = e;
      else
        for (var o in e)
          e.hasOwnProperty(o) && (i[o] = e[o]);
      if (!i.WebSocketCtor && WebSocket)
        i.WebSocketCtor = WebSocket;
      else if (!i.WebSocketCtor)
        throw new Error("no WebSocket constructor can be found");
      s.destination = new et();
    }
    return s;
  }
  return t.prototype.lift = function(e) {
    var r = new t(this._config, this.destination);
    return r.operator = e, r.source = this, r;
  }, t.prototype._resetState = function() {
    this._socket = null, this.source || (this.destination = new et()), this._output = new E();
  }, t.prototype.multiplex = function(e, r, s) {
    var i = this;
    return new w(function(o) {
      try {
        i.next(e());
      } catch (a) {
        o.error(a);
      }
      var c = i.subscribe({
        next: function(a) {
          try {
            s(a) && o.next(a);
          } catch (u) {
            o.error(u);
          }
        },
        error: function(a) {
          return o.error(a);
        },
        complete: function() {
          return o.complete();
        }
      });
      return function() {
        try {
          i.next(r());
        } catch (a) {
          o.error(a);
        }
        c.unsubscribe();
      };
    });
  }, t.prototype._connectSocket = function() {
    var e = this, r = this._config, s = r.WebSocketCtor, i = r.protocol, o = r.url, c = r.binaryType, a = this._output, u = null;
    try {
      u = i ? new s(o, i) : new s(o), this._socket = u, c && (this._socket.binaryType = c);
    } catch (l) {
      a.error(l);
      return;
    }
    var h = new V(function() {
      e._socket = null, u && u.readyState === 1 && u.close();
    });
    u.onopen = function(l) {
      var p = e._socket;
      if (!p) {
        u.close(), e._resetState();
        return;
      }
      var f = e._config.openObserver;
      f && f.next(l);
      var y = e.destination;
      e.destination = it.create(function(d) {
        if (u.readyState === 1)
          try {
            var T = e._config.serializer;
            u.send(T(d));
          } catch (C) {
            e.destination.error(C);
          }
      }, function(d) {
        var T = e._config.closingObserver;
        T && T.next(void 0), d && d.code ? u.close(d.code, d.reason) : a.error(new TypeError(Sr)), e._resetState();
      }, function() {
        var d = e._config.closingObserver;
        d && d.next(void 0), u.close(), e._resetState();
      }), y && y instanceof et && h.add(y.subscribe(e.destination));
    }, u.onerror = function(l) {
      e._resetState(), a.error(l);
    }, u.onclose = function(l) {
      u === e._socket && e._resetState();
      var p = e._config.closeObserver;
      p && p.next(l), l.wasClean ? a.complete() : a.error(l);
    }, u.onmessage = function(l) {
      try {
        var p = e._config.deserializer;
        a.next(p(l));
      } catch (f) {
        a.error(f);
      }
    };
  }, t.prototype._subscribe = function(e) {
    var r = this, s = this.source;
    return s ? s.subscribe(e) : (this._socket || this._connectSocket(), this._output.subscribe(e), e.add(function() {
      var i = r._socket;
      r._output.observers.length === 0 && (i && (i.readyState === 1 || i.readyState === 0) && i.close(), r._resetState());
    }), e);
  }, t.prototype.unsubscribe = function() {
    var e = this._socket;
    e && (e.readyState === 1 || e.readyState === 0) && e.close(), this._resetState(), n.prototype.unsubscribe.call(this);
  }, t;
}(vt);
function Tr(n) {
  return new wr(n);
}
class xr {
  constructor(t) {
    this.targetIP = t, this.reconnectTime = 2e3, this.keepaliveTime = 1e3, this.forceClose$ = new E(), this.statusSubject$ = new E(), this.outboundSubject$ = new E(), this.inboundSubject$ = new E(), this._status = I.Close, this.status$ = this.statusSubject$.asObservable(), this.outbound$ = this.outboundSubject$.asObservable(), this.inbound$ = this.inboundSubject$.asObservable(), this.allMessages$ = Cn(this.outbound$, this.inbound$), this.statusSubject$.subscribe((s) => {
      this._status = s.type;
    }), this.socket$ = Tr({
      url: `ws://${this.targetIP}`,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      WebSocketCtor: Le,
      // cast necessary since ws object is not fully compatible to WebSocket
      serializer: (s) => s,
      deserializer: ({ data: s }) => s,
      openObserver: {
        next: () => this.statusSubject$.next({ type: I.Open })
      },
      closingObserver: {
        next: () => this.statusSubject$.next({ type: I.Closing })
      },
      closeObserver: {
        next: () => this.statusSubject$.next({ type: I.Close })
      }
    });
    const e = this.status$.pipe(L((s) => s.type === I.Open)), r = this.status$.pipe(L((s) => s.type === I.Close));
    e.pipe(
      Y(() => be(this.keepaliveTime).pipe(bt(r))),
      v(() => "ALIVE")
    ).subscribe((s) => this.outboundSubject$.next(s)), this.outbound$.pipe(
      v((s) => `3:::${s}`)
      // tap(msg => console.log(new Date(), 'SENDING:', msg)) // log message
    ).subscribe(this.socket$);
  }
  /** Connection status */
  get status() {
    return this._status;
  }
  /** Connect to socket and retry if connection lost */
  connect() {
    return this.statusSubject$.next({ type: I.Opening }), this.socket$.pipe(
      Bt({
        // report errors
        error: (e) => this.statusSubject$.next({
          type: I.Error,
          payload: e
        })
      }),
      // reconnect on error
      Rn({
        delay: () => at(this.reconnectTime).pipe(
          bt(this.forceClose$),
          Bt(() => this.statusSubject$.next({ type: I.Reconnecting }))
        )
      }),
      // parse messages (only use those with `3:::` prefix)
      v((e) => {
        const r = e.match(/^(3:::)([\s\S]*)/);
        return r && r[2];
      }),
      L((e) => !!e),
      ot((e) => e.split(`
`))
      // one message can contain multiple lines with commands. split them into single emissions
    ).subscribe((e) => this.inboundSubject$.next(e)), ht(
      this.status$.pipe(
        L((e) => e.type === I.Open),
        v(() => {
        })
      )
    );
  }
  /** Disconnect from socket */
  disconnect() {
    return this.socket$.complete(), this.forceClose$.next(), ht(
      this.status$.pipe(
        L((t) => t.type === I.Close),
        v(() => {
        })
      )
    );
  }
  /**
   * Reconnect to the mixer:
   * disconnect, then wait 1 second before connecting again
   */
  reconnect() {
    return this.status$.pipe(
      L((t) => t.type === I.Close),
      b(1),
      Pn(1e3)
    ).subscribe(() => this.connect()), this.disconnect(), ht(
      this.status$.pipe(
        L((t) => t.type === I.Open),
        v(() => {
        })
      )
    );
  }
  /**
   * Send command to the mixer
   * @param msg Message to send
   */
  sendMessage(t) {
    this.outboundSubject$.next(t);
  }
}
class Ir {
  constructor() {
    this.store = /* @__PURE__ */ new Map();
  }
  get(t) {
    return this.store.get(t);
  }
  set(t, e) {
    this.store.set(t, e);
  }
}
class Mr {
  constructor(t) {
    this.conn = t, this.setdSetsMessageMatches$ = this.conn.allMessages$.pipe(
      v((e) => e.match(/(SETD|SETS)\^([a-zA-Z0-9.]+)\^(.*)/)),
      L((e) => !!e),
      jn()
    ), this.messages$ = this.setdSetsMessageMatches$.pipe(v(([e]) => e)), this.state$ = En(
      this.setdSetsMessageMatches$.pipe(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Fn((e, [, , r, s]) => (e[r] = Qn(s), e), {})
      ),
      { connector: () => new et(1) }
    ), this.channelStore = new Ir(), this.state$.connect();
  }
}
class Cr {
  constructor(t) {
    this.targetIP = t, this.conn = new xr(this.targetIP), this.store = new Mr(this.conn), this.deviceInfo = new or(this.store), this.status$ = this.conn.status$, this.master = new hr(this.conn, this.store), this.player = new yr(this.conn, this.store), this.recorderDualTrack = new ar(this.conn, this.store), this.recorderMultiTrack = new lr(this.conn, this.store), this.volume = {
      solo: new Kt(this.conn, this.store, "solovol"),
      headphone: (e) => new Kt(this.conn, this.store, "hpvol", e)
    }, this.shows = new gr(this.conn, this.store), this.automix = new rr(this.conn, this.store);
  }
  /**
   * Get AUX bus
   * @param bus Bus number
   */
  aux(t) {
    return new ir(this.conn, this.store, t);
  }
  /**
   * Get FX bus
   * @param bus Bus number
   */
  fx(t) {
    return new cr(this.conn, this.store, t);
  }
  /**
   * Get MUTE group or related groupings (MUTE ALL and MUTE FX)
   * @param id ID of the group: 1..6, all, fx
   */
  muteGroup(t) {
    return new br(this.conn, this.store, t);
  }
  /** Unmute all mute groups, "MUTE ALL" and "MUTE FX" */
  clearMuteGroups() {
    this.conn.sendMessage("SETD^mgmask^0");
  }
  /**
   * Get hardware channel. With 1:1 patching, those are the same as input channels.
   * However, if patched differently, HW channel 1 still is the first input on the hardware.
   *
   * @param channel Channel number
   */
  hw(t) {
    return new ur(this.conn, this.store, this.deviceInfo, t);
  }
  /** Connect to the mixer. Returns a Promise that resolves when the connection is open. */
  connect() {
    return this.conn.connect();
  }
  /** Disconnect from the mixer. Returns a Promise that resolves when the connection is closed. */
  disconnect() {
    return this.conn.disconnect();
  }
  /**
   * Reconnect to the mixer after 1 second.
   * Returns a Promise that resolves when the connection is open again.
   */
  reconnect() {
    return this.conn.reconnect();
  }
}
export {
  rr as AutomixController,
  Nt as AutomixGroup,
  ir as AuxBus,
  Z as AuxChannel,
  Ce as Channel,
  I as ConnectionStatus,
  G as DBToFaderValue,
  ft as DelayableMasterChannel,
  or as DeviceInfo,
  ar as DualTrackRecorder,
  P as Easings,
  cr as FxBus,
  Q as FxChannel,
  ur as HwChannel,
  hr as MasterBus,
  K as MasterChannel,
  Ee as MtkState,
  lr as MultiTrackRecorder,
  br as MuteGroup,
  yr as Player,
  ke as PlayerState,
  De as SendChannel,
  gr as ShowController,
  Cr as SoundcraftUI,
  Kt as VolumeBus,
  M as clamp,
  tr as constructReadableChannelName,
  Dt as faderValueToDB,
  st as getLinkedChannelNumber,
  kr as playerTimeToString,
  Er as setMixerModel,
  Qn as transformStringValue
};
