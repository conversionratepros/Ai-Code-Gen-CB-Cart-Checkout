(function () {
	try {
		/* main variables */
		var debug = 0;
		var variation_name = "cro-t-149";
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
			function addEvent(el, type, handler) {
				if (el.attachEvent) el.attachEvent("on" + type, handler);
				else el.addEventListener(type, handler);
			}
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
		
		function insertHtml(selector, content, position) {
			var el = document.querySelector(selector);
			if (!position) {
				position = "afterend";
			}
			if (el && content) {
				el.insertAdjacentHTML(position, content);
			}
		}
		
		function addClass(el, cls) {
			var el = document.querySelector(el);
			if (el) {
				el.classList.add(cls);
			}
		}

		// variation html
		var croCbPayment = `<div class="cro-149-payments">
        <div class="cro-149-payments-wrapper">
            <div class="cro-149-payments-inner">
                <div class="cro-149-payments-header">
                    <h3>Buy Now. Pay Later.</h3>
                </div>
                <div class="cro-149-payments-content">
                    <p>Select your payment method at checkout</p>
                </div>
                <div class="cro-149-paymentMethods">
                    <div class="cro-149-paymentMethod cro-149-feverTree">
                        <img src="https://crp-clients-images.s3.af-south-1.amazonaws.com/Carrol+boyes/149+credit+payment+methods/CB-t-550-icon_fever+1.svg" alt="">
                    </div>
                    <div class="cro-149-paymentMethod cro-149-mobicred">
                        <img src="https://crp-clients-images.s3.af-south-1.amazonaws.com/Carrol+boyes/149+credit+payment+methods/CB-t-550-icon_mobi.svg" alt="">
                    </div>
                    <div class="cro-149-paymentMethod cro-149-pauJustNow">
                        <img src="https://crp-clients-images.s3.af-south-1.amazonaws.com/Carrol+boyes/149+credit+payment+methods/CB-t-550-icon_payjustnow.svg" alt="">
                    </div>
                    <div class="cro-149-paymentMethod cro-149-payFlix">
                        <img src="https://crp-clients-images.s3.af-south-1.amazonaws.com/Carrol+boyes/149+credit+payment+methods/CB-t-550-icon_payflext.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>`;


		// variation init
		function init() {
			addClass("body", variation_name);


			addingHtmlContent();
		}

		function addingHtmlContent(){
			waitForElement("#checkout-step-title", function () {
				if (!document.querySelector(".cro-149-payments")) {
					insertHtml("#checkout-step-title", croCbPayment, "afterend");
				}
			});
		}
		
		
		
		waitForElement('"#checkout-step-title', init);
	} catch (e) {
		if (debug) console.log(e, "error in Test" + variation_name);
	}
})();