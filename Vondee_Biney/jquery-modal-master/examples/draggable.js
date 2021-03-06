/*@preserve
 * Dragster - drag'n'drop library v1.6.2
 * https://github.com/sunpietro/dragster
 *
 * Copyright 2015-2017 Piotr Nalepa
 * http://blog.piotrnalepa.pl
 *
 * Released under the MIT license
 * https://github.com/sunpietro/dragster/blob/master/LICENSE
 *
 * Date: 2017-06-28T22:30Z
 */
!(function(e, t, n) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(t, n)
    : "object" == typeof exports
    ? (exports = module.exports = n())
    : (e[t] = n());
})(this, "Dragster", function() {
  "use strict";
  var e = function(e) {
    var t,
      n,
      o,
      r,
      a,
      s,
      d,
      l,
      i,
      c,
      m,
      u,
      g,
      p,
      f,
      h,
      v,
      E,
      L,
      w,
      y,
      C,
      b,
      D,
      B,
      T,
      H,
      M,
      N,
      P,
      R,
      S,
      I,
      A = "dragster-",
      O = "is-dragging",
      Y = "is-drag-over",
      x = A + "draggable",
      X = A + "drag-region",
      q = A + "drop-placeholder",
      F = A + "temp",
      U = F + "-container",
      j = A + "is-hidden",
      k = A + "replacable",
      z = "touchstart",
      J = "touchmove",
      W = "touchend",
      G = "mousedown",
      K = "mousemove",
      Q = "mouseup",
      V = "top",
      Z = "bottom",
      $ = "px",
      _ = "div",
      ee = !1,
      te = !0,
      ne = null,
      oe = function() {},
      re = {
        elementSelector: ".dragster-block",
        regionSelector: ".dragster-region",
        dragHandleCssClass: ee,
        dragOnlyRegionCssClass: A + "region--drag-only",
        replaceElements: ee,
        updateRegionsHeight: te,
        minimumRegionHeight: 60,
        onBeforeDragStart: oe,
        onAfterDragStart: oe,
        onBeforeDragMove: oe,
        onAfterDragMove: oe,
        onBeforeDragEnd: oe,
        onAfterDragEnd: oe,
        onAfterDragDrop: oe,
        scrollWindowOnDrag: ee,
        dragOnlyRegionsEnabled: ee,
        cloneElements: ee,
        wrapDraggableElements: te,
        shadowElementUnderMouse: ee
      },
      ae = { top: ee, bottom: ee },
      se = {
        drag: { node: ne },
        drop: { node: ne },
        shadow: { node: ne, top: 0, left: 0 },
        placeholder: { node: ne, position: ne },
        dropped: ne,
        clonedFrom: ne,
        clonedTo: ne
      },
      de = {},
      le = window.innerHeight,
      ie = Math.floor(65536 * (1 + Math.random())).toString(16);
    for (t in e) e.hasOwnProperty(t) && (re[t] = e[t]);
    return (
      (C = function() {
        return [].slice.call(document.querySelectorAll(re.elementSelector));
      }),
      (b = function() {
        return [].slice.call(document.querySelectorAll(re.regionSelector));
      }),
      (D = function(e) {
        return re.wrapDraggableElements === ee
          ? (console.warn(
              "You have disabled the default behavior of wrapping the draggable elements. If you want Dragster.js to work properly you still will have to do this manually.\n\nMore info: https://github.com/sunpietro/dragster/blob/master/README.md#user-content-wrapdraggableelements---boolean"
            ),
            ee)
          : void e.forEach(function(e) {
              var t = f(),
                n = e.parentNode;
              return n.classList.contains(x)
                ? ee
                : (n.insertBefore(t, e),
                  n.removeChild(e),
                  void t.appendChild(e));
            });
      }),
      (l = C()),
      (n = b()),
      re.replaceElements &&
        ((s = document.createElement(_)),
        s.classList.add(j),
        s.classList.add(U),
        document.body.appendChild(s)),
      (o = function(e, t) {
        var n = e.parentNode;
        if (
          n &&
          (!e.classList ||
            !e.classList.contains(X) ||
            e.classList.contains(re.dragOnlyRegionCssClass))
        )
          return t(e) ? e : t(n) ? n : o(n, t);
      }),
      (L = function(e) {
        var t = [].slice.call(document.getElementsByClassName(e));
        t.forEach(function(e) {
          e.dataset.dragsterId === ie && e.parentNode.removeChild(e);
        });
      }),
      (w = function(e, t) {
        t &&
          (n.forEach(function(e) {
            e.removeEventListener(t, i.mousemove);
          }),
          document.body.removeEventListener(t, i.mousemove)),
          e && e.classList.remove(O),
          [].slice
            .call(document.getElementsByClassName(x))
            .forEach(function(e) {
              e.firstChild || e.parentNode.removeChild(e);
            }),
          L(q),
          L(F),
          B();
      }),
      (y = function() {
        [].slice.call(document.getElementsByClassName(k)).forEach(function(e) {
          e.classList.remove(k);
        });
      }),
      (f = function() {
        var e = document.createElement(_);
        return e.classList.add(x), (e.dataset.dragsterId = ie), e;
      }),
      (v = function() {
        var e = document.createElement(_);
        return e.classList.add(q), (e.dataset.dragsterId = ie), e;
      }),
      (h = function() {
        var e = document.createElement(_);
        return (
          e.classList.add(F),
          e.classList.add(j),
          (e.style.position = "fixed"),
          (e.dataset.dragsterId = ie),
          document.body.appendChild(e),
          e
        );
      }),
      (g = function(e, t) {
        if (e && e.parentNode) {
          var n = re.wrapDraggableElements === ee ? e : e.nextSibling;
          e.parentNode.insertBefore(t, n);
        }
      }),
      (p = function(e, t) {
        e && e.parentNode && e.parentNode.insertBefore(t, e);
      }),
      (m = function(e) {
        return (
          e.classList && e.classList.contains(x) && e.dataset.dragsterId === ie
        );
      }),
      (c = function(e) {
        return e.classList && e.classList.contains(q);
      }),
      (u = function(e) {
        return e.classList && e.classList.contains(re.dragOnlyRegionCssClass);
      }),
      (B = function() {
        if (re.updateRegionsHeight) {
          var e = [].slice.call(document.getElementsByClassName(X));
          e.forEach(function(e) {
            var t = [].slice.call(e.querySelectorAll(re.elementSelector)),
              n = re.minimumRegionHeight;
            t.length &&
              (t.forEach(function(e) {
                var t = window.getComputedStyle(e);
                n +=
                  e.offsetHeight +
                  parseInt(t.marginTop, 10) +
                  parseInt(t.marginBottom, 10);
              }),
              (e.style.height = n + $));
          });
        }
      }),
      (M = function(e, t) {
        w(d, e), w(d, t);
      }),
      (i = {
        mousedown: function(e) {
          if (
            re.dragHandleCssClass &&
            ("string" != typeof re.dragHandleCssClass ||
              !e.target.classList.contains(re.dragHandleCssClass))
          )
            return ee;
          var t,
            s,
            l,
            c = e.type === z,
            u = e.changedTouches ? e.changedTouches[0] : e;
          return (
            (de = JSON.parse(JSON.stringify(se))),
            (e.dragster = de),
            re.onBeforeDragStart(e) === ee || 3 === e.which
              ? ee
              : (e.preventDefault(),
                (d = o(e.target, m))
                  ? ((s = c ? J : K),
                    (l = c ? W : Q),
                    n.forEach(function(e) {
                      e.addEventListener(s, i.mousemove, ee),
                        e.addEventListener(l, i.mouseup, ee);
                    }),
                    document.body.addEventListener(s, i.mousemove, ee),
                    document.body.addEventListener(l, i.mouseup, ee),
                    (t = d.getBoundingClientRect()),
                    (R = t.left - u.clientX),
                    (S = t.top - u.clientY),
                    (r = h()),
                    (r.innerHTML = d.innerHTML),
                    (r.style.width = t.width + $),
                    (r.style.height = t.height + $),
                    (r.dataset.dragsterId = ie),
                    (a = r.getBoundingClientRect()),
                    d.classList.add(O),
                    (de.drag.node = d),
                    (de.shadow.node = r),
                    (e.dragster = de),
                    void re.onAfterDragStart(e))
                  : ee)
          );
        },
        mousemove: function(e) {
          if (((e.dragster = de), re.onBeforeDragMove(e) === ee || !a))
            return ee;
          e.preventDefault();
          var t = e.changedTouches ? e.changedTouches[0] : e,
            n = t.view ? t.view.pageXOffset : 0,
            s = t.view ? t.view.pageYOffset : 0,
            l = t.clientY + s,
            i = t.clientX + n,
            c = document.elementFromPoint(t.clientX, t.clientY),
            g = o(c, m),
            p = re.shadowElementUnderMouse ? t.clientY + S : t.clientY,
            f = re.shadowElementUnderMouse ? i + R : i - a.width / 2,
            h = de.drag.node && de.drag.node.dataset,
            v = !(!g || !o(g, u)),
            L = c.dataset.dragsterId === ie,
            w = c.classList.contains(X) && L,
            y = c.classList.contains(re.dragOnlyRegionCssClass) && L,
            C = c.classList.contains(q),
            b = c.getElementsByClassName(x).length > 0,
            D = c.getElementsByClassName(q).length > 0;
          clearTimeout(E),
            (r.style.top = p + $),
            (r.style.left = f + $),
            r.classList.remove(j),
            (de.shadow.top = p),
            (de.shadow.left = f),
            h || w || C
              ? g && g !== d && !v
                ? (P.removePlaceholders(), P.addPlaceholderOnTarget(g, l, s))
                : !w || y || b || D
                ? w &&
                  !y &&
                  b &&
                  !D &&
                  (P.removePlaceholders(),
                  P.addPlaceholderInRegionBelowTargets(c))
                : (P.removePlaceholders(), P.addPlaceholderInRegion(c))
              : P.removePlaceholders(),
            re.scrollWindowOnDrag && T(e),
            B(),
            re.onAfterDragMove(e);
        },
        mouseup: function(e) {
          e.dragster = de;
          var t,
            n,
            r,
            a,
            s,
            l = e.type === z,
            i = l ? J : K,
            c = l ? W : Q;
          return re.onBeforeDragEnd(e) === ee
            ? (M(i, c), ee)
            : ((t = re.replaceElements ? k : q),
              (n = document.getElementsByClassName(t)[0]),
              (a = !(!d || !o(d, u))),
              (s = re.cloneElements && a),
              (E = setTimeout(M, 200)),
              y(),
              d && n
                ? ((r = o(n, m)),
                  (r = r || n),
                  d !== r &&
                    (re.replaceElements || s
                      ? re.replaceElements && !s
                        ? ((e.dragster = N.replaceElements(e.dragster, r)),
                          re.onAfterDragDrop(e))
                        : !re.replaceElements &&
                          s &&
                          ((e.dragster = N.cloneElements(e.dragster, n, r)),
                          re.onAfterDragDrop(e))
                      : ((e.dragster = N.moveElement(e.dragster, n, r)),
                        re.onAfterDragDrop(e)),
                    r.classList.remove(Y)),
                  M(i, c),
                  void re.onAfterDragEnd(e))
                : (M(i, c), ee));
        }
      }),
      (P = {
        addPlaceholderOnTarget: function(e, t, n) {
          var o = e.getBoundingClientRect(),
            r = v(),
            a = o.height / 2;
          y(),
            re.replaceElements
              ? e.classList.add(k)
              : t - n - o.top < a && !ae.top
              ? (L(q),
                (r.dataset.placeholderPosition = V),
                p(e.firstChild, r),
                (de.placeholder.position = V))
              : o.bottom - (t - n) < a &&
                !ae.bottom &&
                (L(q),
                (r.dataset.placeholderPosition = Z),
                e.appendChild(r),
                (de.placeholder.position = Z)),
            (de.placeholder.node = r),
            (de.drop.node = e);
        },
        addPlaceholderInRegion: function(e) {
          var t = v();
          e.appendChild(t),
            (de.placeholder.position = Z),
            (de.placeholder.node = t),
            (de.drop.node = e);
        },
        addPlaceholderInRegionBelowTargets: function(e) {
          var t = [].slice.call(e.getElementsByClassName(x)),
            n = t.filter(function(e) {
              return e.dataset.dragsterId === ie;
            }),
            o = n[n.length - 1],
            r = v();
          (r.dataset.placeholderPosition = Z),
            L(q),
            o.appendChild(r),
            (de.placeholder.position = Z),
            (de.placeholder.node = r),
            (de.drop.node = o);
        },
        removePlaceholders: function() {
          re.replaceElements ? y() : L(q);
        }
      }),
      (N = {
        moveElement: function(e, t, n) {
          var o = re.wrapDraggableElements === ee ? d : f(),
            r = t.dataset.placeholderPosition;
          return (
            r === V
              ? p(n, o)
              : re.wrapDraggableElements === ee
              ? g(o, n)
              : g(n, o),
            d.firstChild &&
              re.wrapDraggableElements === te &&
              o.appendChild(d.firstChild),
            (e.dropped = o),
            e
          );
        },
        replaceElements: function(e, t) {
          var n = document.getElementsByClassName(U)[0];
          return (
            (n.innerHTML = d.innerHTML),
            (d.innerHTML = t.innerHTML),
            (t.innerHTML = n.innerHTML),
            (n.innerHTML = ""),
            (e.dropped = n),
            e
          );
        },
        cloneElements: function(e, t, n) {
          var o = d.cloneNode(!0),
            r = t.dataset.placeholderPosition;
          return (
            r === V ? p(n, o) : g(n, o),
            w(o),
            (e.clonedFrom = d),
            (e.clonedTo = o),
            e
          );
        }
      }),
      (T = function(e) {
        var t = e.changedTouches ? e.changedTouches[0] : e,
          n = 60;
        le - t.clientY < n
          ? window.scrollBy(0, 10)
          : t.clientY < n && window.scrollBy(0, -10);
      }),
      (H = function() {
        le = window.innerHeight;
      }),
      D(l),
      (I = function() {
        n.forEach(function(e) {
          e.classList.add(X),
            (e.dataset.dragsterId = ie),
            e.addEventListener(G, i.mousedown, ee),
            e.addEventListener(z, i.mousedown, ee);
        });
      }),
      I(),
      window.addEventListener("resize", H, !1),
      {
        update: function() {
          (l = C()), D(l), B(), H();
        },
        updateRegions: function() {
          (n = b()), I();
        },
        destroy: function() {
          n.forEach(function(e) {
            e.classList.remove(X),
              e.removeEventListener(G, i.mousedown, ee),
              e.removeEventListener(K, i.mousemove, ee),
              e.removeEventListener(Q, i.mouseup, ee),
              e.removeEventListener(z, i.mousedown, ee),
              e.removeEventListener(J, i.mousemove, ee),
              e.removeEventListener(W, i.mouseup, ee);
          }),
            document.body.removeEventListener(K, i.mousemove, ee),
            document.body.removeEventListener(J, i.mousemove, ee),
            document.body.removeEventListener(Q, i.mouseup, ee),
            document.body.removeEventListener(W, i.mouseup, ee),
            window.removeEventListener("resize", H, !1);
        }
      }
    );
  };
  return e;
});
