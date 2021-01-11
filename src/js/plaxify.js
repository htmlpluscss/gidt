!function(t) {
	function r(t) {
		for (var n = document.documentElement.clientHeight, r = t.getClientRects(), e = 0, o = r.length; o > e; e++) {
			var a = r[e]
			  , i = a.top > 0 ? a.top <= n : a.bottom > 0 && a.bottom <= n;
			if (i)
				return !0
		}
		return !1
	}
	function o(t) {
		var n = t.gamma
		  , r = t.beta;
		if (90 === Math.abs(window.orientation)) {
			var e = n;
			n = r,
			r = e
		}
		return window.orientation < 0 && (n = -n,
		r = -r),
		p = null === p ? n : p,
		u = null === u ? r : u,
		{
			x: n - p,
			y: r - u
		}
	}
	function a(t) {
		if (!((new Date).getTime() < f + s)) {
			f = (new Date).getTime();
			var n = 0
			  , a = 0
			  , i = t.pageX - n
			  , p = t.pageY - a;
			if (v === !1) return void (v = !0);
			var h, b, y, w, x, R = document.body.getBoundingClientRect(), F = i / R.width, S = p / R.height;
			for (b = g.length; b--; ) {
				h = g[b];
				if (r(h.obj.get(0).parentNode)) {
					y = h.transformStartX + h.inversionFactor * (h.xRange * F),
					w = h.transformStartY + h.inversionFactor * (h.yRange * S),
					x = h.transformStartZ,
					h.obj.css({
						transform: "translate3d(" + y + "px," + w + "px," + x + "px)"
					})
				}
			}
		}
	}
	var i = 25
	  , s = 1 / i * 1e3
	  , f = (new Date).getTime()
	  , g = []
	  , l = 30
	  , m = 1
	  , c = -1
	  , p = null
	  , u = null
	  , v = !1;
	t.plaxify = function(t, r) {
		return function() {
			var e = -1;
			r.xRange = r.xRange ? parseInt(r.xRange) : 0,
			r.yRange = r.yRange ? parseInt(r.yRange) : 0,
			r.zRange = r.zRange ? parseInt(r.zRange) : 0;
			for (var o = 0; o < g.length; o++)
				this === g[o].obj.get(0) && (e = o);
			if (r.inversionFactor = r.invert ? -1 : 1,
			r.obj = {
				get: function() {
					return t
				},
				css: function(n) {
					if ("string" == typeof n) {
						var r = n.replace(/-+(.)?/g, function(t, n) {
							return n ? n.toUpperCase() : ""
						});
						return t.style[r] || getComputedStyle(t, "").getPropertyValue(n)
					}
					var e = "";
					for (var o in n) {
						var a = n[o];
						a || 0 === a ? e += o + ":" + a + ";" : t.style.removeProperty(n)
					}
					t.style.cssText += ";" + e
				},
				position: function() {
					var n = t.getBoundingClientRect()
					  , r = t.offsetParent ? t.offsetParent.getBoundingClientRect() : {
						top: 0,
						left: 0
					};
					return {
						left: n.left - r.left + window.pageXOffset,
						top: n.top - r.top + window.pageYOffset
					}
				}
			}) {
				var a = r.obj.position()
				  , i = [0, 0, 0];
				r.obj.css({
					transform: i.join() + "px",
					top: a.top + "px",
					left: a.left + "px",
					right: "",
					bottom: ""
				}),
				r.originX = r.startX = a.left,
				r.originY = r.startY = a.top,
				r.transformOriginX = r.transformStartX = i[0],
				r.transformOriginY = r.transformStartY = i[1],
				r.transformOriginZ = r.transformStartZ = i[2]
			}
			r.startX -= r.inversionFactor * Math.floor(r.xRange / 2),
			r.startY -= r.inversionFactor * Math.floor(r.yRange / 2),
			r.transformStartX -= r.inversionFactor * Math.floor(r.xRange / 2),
			r.transformStartY -= r.inversionFactor * Math.floor(r.yRange / 2),
			r.transformStartZ -= r.inversionFactor * Math.floor(r.zRange / 2),
			e >= 0 ? g.splice(e, 1, r) : g.push(r)
		}()
	};
	var d = function() {
		var t, n = document.createElement("p");
		document.body.insertBefore(n, null);
		void 0 !== n.style.transform && (n.style.transform = "translate3d(1px,1px,1px)",
		t = window.getComputedStyle(n).getPropertyValue('transform'));
		return document.body.removeChild(n),
		void 0 !== t && t.length > 0 && "none" !== t
	}();
	if(d){
		document.body.addEventListener("mousemove", a);
		window.ondeviceorientation = a;
	}
}(window);

( elems => {

	if(elems.length) {

		Array.from(elems, el => {

			window.plaxify(el, {
				xRange: el.getAttribute('data-xrange'),
				yRange: el.getAttribute('data-yrange'),
				invert: el.getAttribute('data-invert') === 'true'
			})

		});

	}

})(document.querySelectorAll('.js-plaxify'));