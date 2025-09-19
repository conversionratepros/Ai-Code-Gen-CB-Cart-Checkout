(function () {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "RecipeCartContinue";
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

        function addClass(el, cls) {
            var el = document.querySelector(el);
            if (el) {
                el.classList.add(cls);
            }
        }

        function init() {
            addClass("body", variation_name);

            addClass("body", "cro-t-ki151_ki152")
        };

        waitForElement('#cart-totals', init);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();