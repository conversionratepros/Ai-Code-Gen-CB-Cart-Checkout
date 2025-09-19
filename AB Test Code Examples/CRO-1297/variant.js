(function () {
	try {
		/* main variables */
		var debug = 0;
		var variation_name = "";
		var updateTimer; // Declare updateTimer here for scope accessibility

		/* all Pure helper functions */

		function waitForElement(selector, trigger) {
			var interval = setInterval(function () {
				if (
					document &&
					document.querySelector(selector) &&
					document.querySelectorAll(selector).length > 0
				) {
					clearInterval(interval);
					trigger();
				}
			}, 50);
			setTimeout(function () {
				clearInterval(interval);
			}, 15000);
		}

		function live(selector, event, callback, context) {
			// helper for enabling IE 8 event bindings
			function addEvent(el, type, handler) {
				if (el.attachEvent) el.attachEvent("on" + type, handler);
				else el.addEventListener(type, handler);
			}
			// matches polyfill
			this &&
				this.Element &&
				(function (ElementPrototype) {
					ElementPrototype.matches =
						ElementPrototype.matches ||
						ElementPrototype.matchesSelector ||
						ElementPrototype.webkitMatchesSelector ||
						ElementPrototype.msMatchesSelector ||
						function (selector) {
							var node = this,
								nodes = (node.parentNode || node.document).querySelectorAll(selector),
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
					while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
					if (found) callback.call(el, e);
				});
			}
			live(selector, event, callback, context);
		}

		function addClass(selector, cls) {
			var el = document.querySelector(selector);
			if (el) {
				el.classList.add(cls);
			}
		}

		/* Function to attach event listeners */
		function attachEventListeners(selector, callback) {
			live(selector, 'input', callback);
			live(selector, 'keypress', callback);
			live(selector, 'keyup', callback);
			live(selector, 'keydown', callback);
		}

		/* Function to handle button click */
		function handleButtonClick(event) {
			triggerUpdate();
		}

		/* Function to trigger update */
		function triggerUpdate() {
			waitForElement(".cart.main.actions .update-shopping-container", function () {
				clearTimeout(updateTimer);
				updateTimer = setTimeout(function () {
					document.querySelector('.cart.main.actions .update-shopping-container').click();
				}, 1000);
			});
		}

		/* Variation Init */
		function init() {
			addClass("body", "cro-t-144-autoRefresh");

			// Attach event listeners to the input fields
			waitForElement(".cart-container .cart.table-wrapper .col.qty .input-text", function () {
				attachEventListeners('.cart-container .cart.table-wrapper .col.qty .input-text', triggerUpdate);
			});
		}

		/* Attach event listeners to the increase/decrease buttons */
		live('.control.qty button.decreaseQty', 'click', function (e) {
			// var parent = this.closest('.qty-container');
			var mainCard = this.closest('.item-info');

			if (mainCard) {
				var price = mainCard.querySelector('[data-th="Price"] .cart-price .price')
				var totalPrice = mainCard.querySelector('[data-th="Subtotal"] .cart-price .price')
				var qty = mainCard.querySelector('.qty-container input');

				if (qty.value >= 1 && price.textContent != totalPrice.textContent) {
					handleButtonClick();
				}
			}
		});



		live('.control.qty button.increaseQty', 'click', handleButtonClick);

		/* Initialise variation */
		waitForElement('body', init);

	} catch (e) {
		if (debug) console.log(e, "error in Test" + variation_name);
	}
})();