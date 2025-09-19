(function () {
	console.log("variation worked");
	try {
		/* main variables */
		var debug = 0;
		var variation_name = "";

		/* helper liberary */
		var _$;
		!(function (factory) {
			_$ = factory();
		})(function () {
			var bm = function (s) {
				if (typeof s === "string") {
					this.value = Array.prototype.slice.call(document.querySelectorAll(s));
				}
				if (typeof s === "object") {
					this.value = [s];
				}
			};
			bm.prototype = {

				addClass: function (v) {
					var a = v.split(" ");
					return this.each(function (i) {
						for (var x = 0; x < a.length; x++) {
							if (i.classList) {
								i.classList.add(a[x]);
							} else {
								i.className += " " + a[x];
							}
						}
					});
				},
				live: function (selector, event, callback, context) {
					/****Helper Functions****/
					// helper for enabling IE 8 event bindings
					function addEvent(el, type, handler) {
						if (el.attachEvent) el.attachEvent("on" + type, handler);
						else el.addEventListener(type, handler);
					}
					// matches polyfill
					this && this.Element &&
						(function (ElementPrototype) {
							ElementPrototype.matches =
								ElementPrototype.matches ||
								ElementPrototype.matchesSelector ||
								ElementPrototype.webkitMatchesSelector ||
								ElementPrototype.msMatchesSelector ||
								function (selector) {
									var node = this,
										nodes = (
											node.parentNode || node.document
										).querySelectorAll(selector),
										i = -1;
									while (nodes[++i] && nodes[i] != node);
									return !!nodes[i];
								};
						})(Element.prototype);
					// live binding helper using matchesSelector
					function live(selector, event, callback, context) {
						addEvent(context || document, event, function (e) {
							var found,
								el = e.target || e.srcElement;
							while (
								el &&
								el.matches &&
								el !== context &&
								!(found = el.matches(selector))
							)
								el = el.parentElement;
							if (found) callback.call(el, e);
						});
					}
					live(selector, event, callback, context);
				},
				waitForElement: function (
					selector,
					trigger,
				) {
					var interval = setInterval(function () {
						if (_$(selector).value.length) {
							clearInterval(interval);
							trigger();
						}
					}, 50);
					setTimeout(function () {
						clearInterval(interval);
					}, 15000);
				},
			};
			return function (selector) {
				return new bm(selector);
			};
		});
		function listener() {
			window.addEventListener("locationchange", function () {
				helper.waitForElement("body", init);
			});
			history.pushState = ((f) =>
				function pushState() {
					var ret = f.apply(this, arguments);
					window.dispatchEvent(new Event("pushstate"));
					window.dispatchEvent(new Event("locationchange"));
					return ret;
				})(history.pushState);
			history.replaceState = ((f) =>
				function replaceState() {
					var ret = f.apply(this, arguments);
					window.dispatchEvent(new Event("replacestate"));
					window.dispatchEvent(new Event("locationchange"));
					return ret;
				})(history.replaceState);
			window.addEventListener("popstate", function () {
				window.dispatchEvent(new Event("locationchange"));
			});
		}




		var helper = _$();
		/* Variation Init */
		function init() {
			document.querySelector('body').classList.add('Test-72')

			if (window.location.hash.indexOf('#checkoutShippingCart') != -1) {
				document.querySelector('body').classList.add('cro-t-72-ShowNav')
				console.log('showw NAV')
			} else {
				if (document.querySelector('.cro-t-72-ShowNav')) {
					document.querySelector('body').classList.remove('cro-t-72-ShowNav')
					console.log('Hide NAV')
				}
			}
		}

		listener()
		/* Initialise variation */
		helper.waitForElement("body", init);

	} catch (e) {
		if (debug) console.log(e, "error in Test" + variation_name);
	}
})();