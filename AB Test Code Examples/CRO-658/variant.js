(function() {
	try {
	  /* main variables */
	  var debug = 0;
	  var variation_name = "";
  
	  /* helper liberary */
	  var _$;
	  !(function(factory) {
		_$ = factory();
	  })(function() {
		var bm = function(s) {
		  if (typeof s === "string") {
			this.value = Array.prototype.slice.call(document.querySelectorAll(s));
		  }
		  if (typeof s === "object") {
			this.value = [s];
		  }
		};
		bm.prototype = {
		  
		  addClass: function(v) {
			var a = v.split(" ");
			return this.each(function(i) {
			  for (var x = 0; x < a.length; x++) {
				if (i.classList) {
				  i.classList.add(a[x]);
				} else {
				  i.className += " " + a[x];
				}
			  }
			});
		  },
		  live: function(selector, event, callback, context) {
			/****Helper Functions****/
			// helper for enabling IE 8 event bindings
			function addEvent(el, type, handler) {
			  if (el.attachEvent) el.attachEvent("on" + type, handler);
			  else el.addEventListener(type, handler);
			}
			// matches polyfill
			this && this.Element &&
			  (function(ElementPrototype) {
				ElementPrototype.matches =
				  ElementPrototype.matches ||
				  ElementPrototype.matchesSelector ||
				  ElementPrototype.webkitMatchesSelector ||
				  ElementPrototype.msMatchesSelector ||
				  function(selector) {
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
			  addEvent(context || document, event, function(e) {
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
		  waitForElement: function(
			selector,
			trigger,
		  ) {
			var interval = setInterval(function() {
			  if (_$(selector).value.length) {
				clearInterval(interval);
				trigger();
			  }
			}, 50);
			setTimeout(function() {
			  clearInterval(interval);
			}, 15000);
		  },
		};
		return function(selector) {
		  return new bm(selector);
		};
	  });
  
      var htmlString =''+ 
        '  <div class="cro-Test-Click_Collect_context-alertBox">'+ 
        '      <div class="croHeading">'+ 
        '          <img src="https://crpimagebucket.s3.af-south-1.amazonaws.com/Group+29.png" alt="">'+ 
        '          <p>Seeing a delivery fee?</p>'+ 
        '      </div>'+ 
        '      <div class="crobody">'+ 
        '          <p>Our online store runs independently from our physical stores. Your item needs to be delivered to the selected store.</p>'+ 
        '      </div>'+ 
        '  </div>';

	  var helper = _$();
	  /* Variation Init */
	  function init() {
        if(document.querySelector('.shipping-address-items')){
            helper.waitForElement(".table-checkout-shipping-method tbody tr:nth-child(1) .price > .price", function(){
                var shippingPrice1 = document.querySelector('.table-checkout-shipping-method tbody tr:nth-child(1) .price > .price').innerHTML;
                var shippingPrice2 = document.querySelector('.table-checkout-shipping-method tbody tr:nth-child(2) .price > .price').innerHTML;

				if(!document.querySelector('#label_carrier_flatrate_flatrate + #croShippingPrice')){
					document.querySelector('#label_carrier_flatrate_flatrate').insertAdjacentHTML('afterend','<td class="col col-carrier croTop" id="croShippingPrice"><span>'+shippingPrice1+'</span> <span> Courier Fees</span></td>')
				}

                if(shippingPrice2.indexOf('R 0') != -1){
					if(!document.querySelector('#amstorepick-label + #croShippingPrice')){
						document.querySelector('#amstorepick-label').insertAdjacentHTML('afterend','<td class="col col-carrier" id="croShippingPrice"><span>R0.00</span> <span> Courier Fees</span></td>')
					}
                   
                }else{
					if(!document.querySelector('#amstorepick-label + #croShippingPrice')){
						document.querySelector('#amstorepick-label').insertAdjacentHTML('afterend','<td class="col col-carrier" id="croShippingPrice"><span>'+shippingPrice2+'</span> <span> Courier Fees</span></td>')
					}

                }
               
            });
        }else{
			if(!document.querySelector('#label_carrier_flatrate_flatrate + .croNoAddress')){
				document.querySelector('#label_carrier_flatrate_flatrate').insertAdjacentHTML('afterend','<td class="col col-carrier croTop croNoAddress" id="croShippingPrice"><span>Please enter your address to calculate courier fees</span></td>')
			}

			if(!document.querySelector('#amstorepick-label + .croNoAddress')){
				document.querySelector('#amstorepick-label').insertAdjacentHTML('afterend','<td class="col col-carrier croNoAddress" id="croShippingPrice"><span>Please enter your address to calculate courier fees</span></td>')
			}

        }

	  }

      function alert(){
		console.log('Inside Init')
		if(localStorage.getItem('mage-cache-storage')){
			var localValue = JSON.parse(localStorage.getItem('mage-cache-storage'));
			var totalAmmount = localValue.cart.subtotalAmount;
					
	
			// #wrapper-pickup-instore
			if(!document.querySelector('.cro-Test-Click_Collect_context-alertBox') && totalAmmount < 700){
				document.querySelector('#wrapper-pickup-instore').insertAdjacentHTML('afterbegin', htmlString)
			}
		}
	
      }
  
	  /* Initialise variation */
	  helper.waitForElement("#label_carrier_flatrate_flatrate", init);
      helper.waitForElement("#wrapper-pickup-instore", alert);

      helper.waitForElement("#amstorepick-label", function(){
        document.querySelector('#amstorepick-label').innerHTML = 'Click & Collect. Deliver to a selected store';
      });

	} catch (e) {
	  if (debug) console.log(e, "error in Test" + variation_name);
	}
  })();

  console.log('Test 104')