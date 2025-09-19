(function () {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "";
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
        function insertHtml(selector, content, position) {
            var el = document.querySelector(selector);
            if (!position) {
                position = "afterend";
            }
            if (el && content) {
                el.insertAdjacentHTML(position, content);
            }
        }
        function innerHTMLContent(selector, content) {
            var el = document.querySelector(selector);
            if (el) {
                el.innerHTML = content;
            }
        }
        function innerChildContent(selector, childNumber, content) {
            var el = document.querySelector(selector);
            if (el.hasChildNodes()) {
                el.childNodes[childNumber].textContent = content;
            }
        }
        function addClass(el, cls) {
            var el = document.querySelector(el);
            if (el) {
                el.classList.add(cls);
            }
        }
        function toggleClass(el, cls) {
            var el = document.querySelector(el);
            if (el) {
                el.classList.toggle(cls);
            }
        }
        function removeClass(el, cls) {
            var el = document.querySelector(el);
            if (el) {
                el.classList.contains(cls) && el.classList.remove(cls);
            }
        }
        var popup = `<div class="cre-t-11-lightBox">
        <div class="cre-t-11-overlay"></div>
        <div class="cre-t-11-modal">
            <div class="cro-exitPopup-top">
            <div class="cro-exitPopup-top-img">
                <img src="https://crpimagebucket.s3.af-south-1.amazonaws.com/fontawesome/fa-times-black.png" alt="" class="cro-exitPopup-top-exitImg">
            </div>
        </div>
        <div class="cro-exitPopup-bottom">
            <div class="cro-exitPopup-bottom-top">
                <div class="cro-exitPopup-bottomBox-one">
                    <h2 class="cro-exitPopup-bottom-heading">Why wait?</h2>
                </div>
                <div class="cro-exitPopup-bottomBox-two">
                    <p class="cro-exitPopup-bottom-para">We offer a range of safe, easy and affordable ways to pay for your order at checkout.</p>
                </div>
                <div class="cro-exitPopup-bottomBox-three">
                    <h3 class="cro-exitPopup-bottom-subHeading">Split into manageable payments</h3>
                </div>
                <div class="cro-exitPopup-bottomBox-four">
                    <p class="cro-exitPopup-bottom-subPara">From <span class="cro-exitPopup-bottom-subPara-span"></span> pm</p>
                </div>
            </div>
            <div class="cro-exitPopup-bottom-middle">
                <div class="cro-exitPopup-bottom-middleBox-one cro-middle-box">
                    <div class="cro-middleBox-img">
                        <img src="https://widgets.payflex.co.za/assets/partpay_new.png" alt="" class="cro-middleBox-imgPhoto cro-payFlex-img">
                    </div>
                    <div class="cro-middleBox-text">
                        <p class="cro-middleBox-textLine">Payflex offers a free payment plan whereby you pay only 25% of the purchase today and the rest over 6 – weeks at no additional cost (zero fees, zero interest*).</p>
                    </div>
                    <div class="cro-middleBox-btn">
                        <div class="cro-middleBox-btnBtn"><a href="https://carrolboyes.com/za/payment-methods">Read more</a></div>
                    </div>
                </div>
                <div class="cro-exitPopup-bottom-middleBox-two cro-middle-box">
                    <div class="cro-middleBox-img">
                        <img src="https://crpimagebucket.s3.af-south-1.amazonaws.com/logos/logo-carrol-boyes-payments.png" alt="" class="cro-middleBox-imgPhoto cro-carrolBoyes-img">
                    </div>
                    <div class="cro-middleBox-text">
                        <p class="cro-middleBox-textLine">Shop in-store and online at Carrol Boyes and pay for your purchase over 12 months. Get pre-approval in seconds</p>
                    </div>
                    <div class="cro-middleBox-btn">
                        <div class="cro-middleBox-btnBtn"><a href="https://carrolboyes.com/za/payment-methods">Read more</a></div>
                    </div>
                </div>
                <div class="cro-exitPopup-bottom-middleBox-three cro-middle-box">
                    <div class="cro-middleBox-img">
                        <img src="https://crpimagebucket.s3.af-south-1.amazonaws.com/logos/logo-mobicred.png" alt="" class="cro-middleBox-imgPhoto cro-mobiCred-img">
                    </div>
                    <div class="cro-middleBox-text">
                        <p class="cro-middleBox-textLine">Mobicred is digital credit that allows you to shop safely at over 55,000 places, both online and in-store. You could qualify for up to R50,000* credit in less than 15 minutes*.</p>
                    </div>
                    <div class="cro-middleBox-btn">
                        <div class="cro-middleBox-btnBtn"><a href="https://carrolboyes.com/za/payment-methods">Read more</a></div>
                    </div>
                </div>
                <div class="cro-exitPopup-bottom-middleBox-four cro-middle-box">
                    <div class="cro-middleBox-img">
                        <img src="https://cdn-3.convertexperiments.com/uf/1004973/10045476/payJustNow.png" alt="" class="cro-middleBox-imgPhoto cro-payJust-img">
                    </div>
                    <div class="cro-middleBox-text">
                        <p class="cro-middleBox-textLine">PayJustNow has partnered with Carrol Boyes to allow you to pay for your purchase in three equal, interest-free instalments.
                        </p>
                    </div>
                    <div class="cro-middleBox-btn">
                        <div class="cro-middleBox-btnBtn"><a href="https://carrolboyes.com/za/payment-methods">Read more</a></div>
                    </div>
                </div>
            </div>
            <div class="cro-exitPopup-bottom-end">
                <div class="cro-exitPopup-bottom-endBox">
                    <div class="cro-exitPopup-bottom-endBtn">Continue Shopping</div>
                </div>
            </div>
        </div>
        </div>
  </div></div> `;
        /* Variation Init */
        function init() {
            addClass('body', 'cre-t-11')
            addClass('body', 'cre-t-11-hide')
            addClass('body', 'recipe-78-test-1')
            waitForElement("body", function () {
                if (!document.querySelector(".cre-t-11-modal")) {
                    insertHtml("body.checkout-index-index", popup, "afterbegin");
                }
            });
            // waitForElement('.catalog-product-view .product-info-main-inner span.price-wrapper[data-price-type="finalPrice"]', function () {
            //     var priceSpan = document.querySelector('.catalog-product-view .product-info-main-inner span.price-wrapper[data-price-type="finalPrice"]');
            //     var originalPrice = parseFloat(priceSpan.textContent.replace(/[^\d.]/g, ''));
            //     var dividedPrice = originalPrice / 12;
            //     var targetElement = document.querySelector('.cro-exitPopup-bottom-subPara-span');
            //     targetElement.textContent = 'R' + dividedPrice.toFixed(2);
            // });
            waitForElement('.checkout-index-index .grand.totals .price', function () {
                var priceSpan = document.querySelector('.checkout-index-index .grand.totals .price');
                var originalPrice = parseFloat(priceSpan.textContent.replace(/[^\d.]/g, ''));
                var dividedPrice = originalPrice / 12;
                var targetElement = document.querySelector('.cro-exitPopup-bottom-subPara-span');
                targetElement.textContent = 'R' + dividedPrice.toFixed(2);
            });
        }
        addExitIntentListener()
        function addExitIntentListener() {
        var exitModalShown = false;
        function handleExitIntent(event) {
            if (!exitModalShown && isExitIntent(event)) {
                // Show your modal here
                exitModalShown = true;
                if(!sessionStorage.getItem('cre-t-78')) {    
                    document.body.classList.add("cro-modal-open");
                    init();
                  }
            }
        }
    
        function isExitIntent(event) {
            if (event.clientY <= 0 || event.clientX <= 0 || (event.clientX >= window.innerWidth || event.clientY >= window.innerHeight)) {
                return true;
            }
            return false;
        }
        document.addEventListener('mouseout', handleExitIntent);
        document.addEventListener('mouseleave', handleExitIntent);
        }
        live('.cro-exitPopup-top-exitImg,.cro-exit-overLay,.cro-exitPopup-bottom-endBtn,.cre-t-11-overlay', 'click', function(e){
            addClass("body","cro-modal-none")
            removeClass("body","cro-modal-open")
            // closeExitPopup();
            sessionStorage.setItem('cre-t-78',true); 
        })
        
        live('a[href="https://batlgrounds.com/book-axe-throwing/"], a[href="/book-axe-throwing/"]', 'click', function(e){
          e.preventDefault();
          removeClass('body', 'cre-t-11-hide')
        })
        live(".cre-t-11-cross, .cre-t-11-overlay", "click", function () {
          addClass('body', 'cre-t-11-hide')
        })
        /* Initialise variation */
        waitForElement('body', init);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
  })();