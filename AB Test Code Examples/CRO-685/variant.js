(function () {
  try {
    /* main variables */
    var debug = 1;
    var recipe_name = "cro685";

    function addClass(el, cls) {
      var el = document.querySelector(el);
      if (el) {
        el.classList.add(cls);
      }
    }

    function waitForElement(selector, trigger) {
      var interval = setInterval(function () {
        if (document && document.querySelector(selector) && document.querySelectorAll(selector).length > 0) {
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

    var step1dropdown = `
      <div class="cre-dropdown-icon cre-step1-dropdown-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M5.99994 9L11.9999 15L17.9999 9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    `;
    var step3dropdown = `
      <div class="cre-dropdown-icon cre-step3-dropdown-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M5.99994 9L11.9999 15L17.9999 9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    `;

    function addClassToParentRow(selector, className) {
      waitForElement(selector, function () {
        var cell = document.querySelector(selector);
        if (cell && cell.parentElement) {
          cell.parentElement.classList.add(className);
        }
      });
    }

    function checkoutStep1() {
      addClassToParentRow('#cart-totals tbody td.amount[data-th="Grand Total"]', "cro685-grand-total");
      addClassToParentRow("#cart-totals tbody th.button-continue-container.mark", "cro685-continue-cta");

      waitForElement(".cro685-grand-total", function () {
        if (!document.querySelector(".cre-step1-dropdown-icon")) {
          document.querySelector(".cro685-grand-total").insertAdjacentHTML("beforeend", step1dropdown);
        }
      });
      waitForElement("#checkout .opc-summary-wrapper .opc-block-summary", function () {
        if (!document.querySelector(".cre-step3-dropdown-icon")) {
          document.querySelector("#checkout .opc-summary-wrapper .opc-block-summary").insertAdjacentHTML("beforeend", step3dropdown);
        }
      });
    }

    function eventHandler() {
      live('html[data-cro-step="cro_my_cart"] body #cart-totals tbody tr.cro685-grand-total', "click", function () {
        var parent = this.closest("tbody");
        if (parent) {
          if (parent.classList.contains("cre-dropdown-active")) {
            parent.classList.remove("cre-dropdown-active");
          } else {
            parent.classList.add("cre-dropdown-active");
          }
        }
      });
      live('html[data-cro-step="cro_payment"] body #checkout .title[data-bind*="Order Summary"]', "click", function () {
        var parent = this.parentElement;
        if (parent) {
          if (parent.classList.contains("cre-dropdown2-active")) {
            parent.classList.remove("cre-dropdown2-active");
          } else {
            parent.classList.add("cre-dropdown2-active");
          }
        }
      });
    }

    /* Variation Init */
    function init() {
      addClass("body", recipe_name);
      checkoutStep1();
    }
    if (!window.cro685EventHandler) {
      eventHandler();
      window.cro685EventHandler = true;
    }

    waitForElement(".checkout-index-index", function () {
      if (window.innerWidth < 768) {
        init();
      }
    });
  } catch (e) {
    if (debug) console.log(e, "error in Test" + recipe_name);
  }
})();