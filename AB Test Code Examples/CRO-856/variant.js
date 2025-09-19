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

    function waitForSwiper(trigger) {
      var interval = setInterval(function () {
        if (typeof window.Swiper != "undefined") {
          clearInterval(interval);
          trigger();
          console.log("swiper");
        }
      }, 50);
      setTimeout(function () {
        clearInterval(interval);
      }, 15000);
    }

    function addScript() {
      var scriptOne = document.createElement("script");
      scriptOne.src = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js";
      document.querySelector("head").appendChild(scriptOne);
      var swiperCss = '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.3.2/swiper-bundle.css" referrerpolicy="no-referrer" />';
      // document.head.insertAdjacentHTML("beforeend", swiperCss);

    }

    function swiperInit() {
      waitForElement(".cro-card-t-88-container .swiper-container", function () {
        new Swiper('.cro-card-t-88-container .swiper-container', {
          loop: true,
          navigation: {
            nextEl: '.cro-swiper-button-next',
            prevEl: '.cro-swiper-button-prev',
          },
          slidesPerView: 5,
          paginationClickable: true,
          spaceBetween: 20,
          breakpoints: {
            1440: {
              slidesPerView: 5,
              spaceBetween: 30
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            765: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            500: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            }
          }
        });
      });
    }

    addScript();

    /* Variation html */
    var croRecommendSection = `<div class="cro-card-t-88-container">
      <div class="cro-card-t-88-container-wrapper">
        <div class="cro-card-t-88-header-part">
          <h2 class="cro-card-t-88-header-text">Recommended Products</h2>
        </div>
        <div class="cro-card-t-88-container">
          <!-- Slider main container -->
          <div class="swiper-container cro-card-t-88-swiper-container">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper cro-card-t-88-swiper-wrapper">
              <div class="swiper-slide">
                <div class="product-item-info" data-container="product-grid">
                  <div class="product-item-top">
                    <a href="https://carrolboyes.com/za/bread-bin-loafer.html" class="product photo product-item-photo">
                      <span class="product-image-container">
                        <span class="product-image-wrapper" style="padding-bottom: 100%;"><img data-hasoptions="0" class="product-image-photo main-img" src="https://carrolboyes.com/media/catalog/product/cache/028797f040f8816c3dea910d277fa848/3/b/3bb-loa_4.jpg" alt="BREAD BIN - loafer"><img class="product-image-photo hovered-img" src="https://carrolboyes.com/media/catalog/product/cache/028797f040f8816c3dea910d277fa848/3/b/3bb-loa_4.jpg" alt="BREAD BIN - loafer"></span>
                      </span>
                    </a>
                    <div class="button-top-wrap">
                      <a href="#" data-post="{&quot;action&quot;:&quot;https:\/\/carrolboyes.com\/za\/guestwishlist\/index\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;313&quot;,&quot;uenc&quot;:&quot;aHR0cHM6Ly9jYXJyb2xib3llcy5jb20vemEva2l0Y2hlbi9raXRjaGVuLXN0b3JhZ2UvYnJlYWQtYmlucy5odG1s&quot;}}" class="action towishlist" data-action="add-to-wishlist" title="Add to Wish List"><span>Add to Wish List</span></a>
                      <a href="#" class="action tocompare" data-post="{&quot;action&quot;:&quot;https:\/\/carrolboyes.com\/za\/catalog\/product_compare\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;313&quot;,&quot;uenc&quot;:&quot;aHR0cHM6Ly9jYXJyb2xib3llcy5jb20vemEva2l0Y2hlbi9raXRjaGVuLXN0b3JhZ2UvYnJlYWQtYmlucy5odG1s&quot;}}" title="Add to Compare"><span>Add to Compare</span></a>
                    </div>
                  </div>
                  <div class="product details product-item-details">
                    <div class="product-item-inner" style="min-height: 67px;">
                      <strong class="product name product-item-name"><a class="product-item-link" title="BREAD BIN - loafer" href="https://carrolboyes.com/za/bread-bin-loafer.html"><span class="product-cb-name">BREAD BIN </span><br><span class="product-cb-range"> loafer</span></a></strong>
                      <div class="product-reviews-summary short">
                        <div class="rating-summary">
                          <span class="label"><span>Rating:</span></span>
                          <div class="rating-result" id="rating-result_313" title="100%">
                            <span style="width: 100%;"><span>100%</span></span>
                          </div>
                        </div>
                        <div class="reviews-actions">
                          <a class="action view" href="https://carrolboyes.com/za/bread-bin-loafer.html#reviews">17 &nbsp;<span>Reviews </span>
                          </a>
                        </div>
                      </div>
                      <div class="price-box price-final_price" data-role="priceBox" data-product-id="313" data-price-box="product-id-313">
    
                        <span class="price-container price-final_price tax weee">
                          <span id="product-price-313" data-price-amount="4199" data-price-type="finalPrice" class="price-wrapper "><span class="price">R4,199</span></span>
                        </span>
    
                      </div>
                    </div>
                    <div class="product-bottom">
                      <div class="product actions product-item-actions">
                        <div class="cro-actions-primary">
                          <div class="cro-card-t-88-btn">
                            <h4 class="cro-card-t-88-btnContent" cro-proRecId="313">Add To Cart</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="product-item-info" data-container="product-grid">
                  <div class="product-item-top">
                    <a href="https://carrolboyes.com/za/canister-combo-set-of-3-cover-girl.html" class="product photo product-item-photo">
                      <span class="product-image-container">
                        <span class="product-image-wrapper" style="padding-bottom: 100%;"><img data-hasoptions="0" class="product-image-photo main-img" src="https://carrolboyes.com/media/catalog/product/cache/028797f040f8816c3dea910d277fa848/p/r/product_block-canister_1600x1600_-_1_1.png" alt="CANISTER SET OF 3 - cover girl"><img class="product-image-photo hovered-img" src="https://carrolboyes.com/media/catalog/product/cache/028797f040f8816c3dea910d277fa848/p/r/product_block-canister_1600x1600_-_1_1.png" alt="CANISTER SET OF 3 - cover girl"></span>
                      </span>
                    </a>
                    <div class="button-top-wrap">
                      <a href="#" data-post="{&quot;action&quot;:&quot;https:\/\/carrolboyes.com\/za\/wishlist\/index\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:5102,&quot;uenc&quot;:&quot;aHR0cHM6Ly9jYXJyb2xib3llcy5jb20vemEva2l0Y2hlbi9raXRjaGVuLXN0b3JhZ2UvY2FuaXN0ZXJzLmh0bWw,&quot;}}" class="action towishlist" data-action="add-to-wishlist" title="Add to Wish List"><span>Add to Wish List</span></a>
                      <a href="#" class="action tocompare" data-post="{&quot;action&quot;:&quot;https:\/\/carrolboyes.com\/za\/catalog\/product_compare\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;5102&quot;,&quot;uenc&quot;:&quot;aHR0cHM6Ly9jYXJyb2xib3llcy5jb20vemEva2l0Y2hlbi9raXRjaGVuLXN0b3JhZ2UvY2FuaXN0ZXJzLmh0bWw,&quot;}}" title="Add to Compare"><span>Add to Compare</span></a>
                    </div>
                  </div>
                  <div class="product details product-item-details">
                    <div class="product-item-inner">
                      <strong class="product name product-item-name"><a class="product-item-link" title="CANISTER SET OF 3 - cover girl" href="https://carrolboyes.com/za/canister-combo-set-of-3-cover-girl.html"><span class="product-cb-name">CANISTER SET OF 3 </span><br><span class="product-cb-range"> cover girl</span></a></strong>
                      <div class="product-reviews-summary short">
                        <div class="rating-summary">
                          <span class="label"><span>Rating:</span></span>
                          <div class="rating-result" id="rating-result_5102" title="100%">
                            <span style="width: 100%;"><span>100%</span></span>
                          </div>
                        </div>
                        <div class="reviews-actions">
                          <a class="action view" href="https://carrolboyes.com/za/canister-combo-set-of-3-cover-girl.html#reviews">2 &nbsp;<span>Reviews </span>
                          </a>
                        </div>
                      </div>
                      <div class="price-box price-final_price" data-role="priceBox" data-product-id="5102" data-price-box="product-id-5102">
    
                        <span class="price-container price-final_price tax weee">
                          <span id="product-price-5102" data-price-amount="1459" data-price-type="finalPrice" class="price-wrapper "><span class="price">R1,459</span></span>
                        </span>
    
    
    
                      </div>
                    </div>
                    <div class="product-bottom">
                      <div class="product actions product-item-actions">
                        <div class="cro-actions-primary">
                          <div class="cro-card-t-88-btn">
                            <h4 class="cro-card-t-88-btnContent" cro-proRecId="5102">Add To Cart</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="product-item-info" data-container="product-grid">
                  <div class="product-item-top">
                    <a href="https://carrolboyes.com/za/stovetop-kettle-diver.html" class="product photo product-item-photo">
                      <span class="product-image-container">
                        <span class="product-image-wrapper" style="padding-bottom: 100%;"><img data-hasoptions="0" class="product-image-photo main-img" src="https://carrolboyes.com/media/catalog/product/cache/028797f040f8816c3dea910d277fa848/k/e/kettle_.png" alt="STOVETOP KETTLE - diver"><img class="product-image-photo hovered-img" src="https://carrolboyes.com/media/catalog/product/cache/028797f040f8816c3dea910d277fa848/k/e/kettle_.png" alt="STOVETOP KETTLE - diver"></span>
                      </span>
                    </a>
                    <div class="button-top-wrap">
                      <a href="#" data-post="{&quot;action&quot;:&quot;https:\/\/carrolboyes.com\/za\/wishlist\/index\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:5243,&quot;uenc&quot;:&quot;aHR0cHM6Ly9jYXJyb2xib3llcy5jb20vemEva2l0Y2hlbi9raXRjaGVuLWFwcGxpYW5jZXMva2V0dGxlcy5odG1s&quot;}}" class="action towishlist" data-action="add-to-wishlist" title="Add to Wish List"><span>Add to Wish List</span></a>
                      <a href="#" class="action tocompare" data-post="{&quot;action&quot;:&quot;https:\/\/carrolboyes.com\/za\/catalog\/product_compare\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;5243&quot;,&quot;uenc&quot;:&quot;aHR0cHM6Ly9jYXJyb2xib3llcy5jb20vemEva2l0Y2hlbi9raXRjaGVuLWFwcGxpYW5jZXMva2V0dGxlcy5odG1s&quot;}}" title="Add to Compare"><span>Add to Compare</span></a>
                    </div>
                  </div>
                  <div class="product details product-item-details">
                    <div class="product-item-inner" style="min-height: 67px;">
                      <strong class="product name product-item-name"><a class="product-item-link" title="STOVETOP KETTLE - diver" href="https://carrolboyes.com/za/stovetop-kettle-diver.html"><span class="product-cb-name">STOVETOP KETTLE </span><br><span class="product-cb-range"> diver</span></a></strong>
                      <div class="product-reviews-summary short">
                        <div class="rating-summary">
                          <span class="label"><span>Rating:</span></span>
                          <div class="rating-result" id="rating-result_5243" title="100%">
                            <span style="width: 100%;"><span>100%</span></span>
                          </div>
                        </div>
                        <div class="reviews-actions">
                          <a class="action view" href="https://carrolboyes.com/za/stovetop-kettle-diver.html#reviews">4 &nbsp;<span>Reviews </span>
                          </a>
                        </div>
                      </div>
                      <div class="price-box price-final_price" data-role="priceBox" data-product-id="5243" data-price-box="product-id-5243">
    
                        <span class="price-container price-final_price tax weee">
                          <span id="product-price-5243" data-price-amount="3199" data-price-type="finalPrice" class="price-wrapper "><span class="price">R3,199</span></span>
                        </span>
    
    
    
                      </div>
                    </div>
                    <div class="product-bottom">
                      <div class="product actions product-item-actions">
                        <div class="cro-actions-primary">
                          <div class="cro-card-t-88-btn">
                            <h4 class="cro-card-t-88-btnContent" cro-proRecId="5243">Add To Cart</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="product-item-info" data-container="product-grid">
                  <div class="product-item-top">
                    <a href="https://carrolboyes.com/za/flask-mystique.html" class="product photo product-item-photo">
                      <span class="product-image-container">
                        <span class="product-image-wrapper" style="padding-bottom: 100%;"><img data-hasoptions="0" class="product-image-photo main-img" src="https://carrolboyes.com/media/catalog/product/cache/028797f040f8816c3dea910d277fa848/f/l/flask_grey.jpg" alt="FLASK - mystique"><img class="product-image-photo hovered-img" src="https://carrolboyes.com/media/catalog/product/cache/028797f040f8816c3dea910d277fa848/f/l/flask_grey.jpg" alt="FLASK - mystique"></span>
                      </span>
                    </a>
                    <div class="button-top-wrap">
                      <a href="#" data-post="{&quot;action&quot;:&quot;https:\/\/carrolboyes.com\/za\/wishlist\/index\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:5182,&quot;uenc&quot;:&quot;aHR0cHM6Ly9jYXJyb2xib3llcy5jb20vemEvb24tdGhlLWdvL29uLXRoZS1nby1kcmlua3dhcmUvZmxhc2tzLmh0bWw,&quot;}}" class="action towishlist" data-action="add-to-wishlist" title="Add to Wish List"><span>Add to Wish List</span></a>
                      <a href="#" class="action tocompare" data-post="{&quot;action&quot;:&quot;https:\/\/carrolboyes.com\/za\/catalog\/product_compare\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;5182&quot;,&quot;uenc&quot;:&quot;aHR0cHM6Ly9jYXJyb2xib3llcy5jb20vemEvb24tdGhlLWdvL29uLXRoZS1nby1kcmlua3dhcmUvZmxhc2tzLmh0bWw,&quot;}}" title="Add to Compare"><span>Add to Compare</span></a>
                    </div>
                  </div>
                  <div class="product details product-item-details">
                    <div class="product-item-inner" style="min-height: 67px;">
                      <strong class="product name product-item-name"><a class="product-item-link" title="FLASK - mystique" href="https://carrolboyes.com/za/flask-mystique.html"><span class="product-cb-name">FLASK </span><br><span class="product-cb-range"> mystique</span></a></strong>
                      <div class="price-box price-final_price" data-role="priceBox" data-product-id="5182" data-price-box="product-id-5182">
    
                        <span class="price-container price-final_price tax weee">
                          <span id="product-price-5182" data-price-amount="589" data-price-type="finalPrice" class="price-wrapper "><span class="price">R589</span></span>
                        </span>
    
    
    
                      </div>
                    </div>
                    <div class="product-bottom">
                      <div class="product actions product-item-actions">
                        <div class="cro-actions-primary">
                          <div class="cro-card-t-88-btn">
                            <h4 class="cro-card-t-88-btnContent" cro-proRecId="5182">Add To Cart</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="product-item-info" data-container="product-grid">
                  <div class="product-item-top">
                    <a href="https://carrolboyes.com/za/cutlery-set-24pc-sketchbook.html" class="product photo product-item-photo">
                      <span class="product-image-container">
                        <span class="product-image-wrapper" style="padding-bottom: 100%;"><img data-hasoptions="0" class="product-image-photo main-img" src="https://carrolboyes.com/media/catalog/product/cache/028797f040f8816c3dea910d277fa848/1/8/18cut-set-skb-24_boxandproduct_2021.jpg" alt="CUTLERY 24pc SET - sketchbook"><img class="product-image-photo hovered-img" src="https://carrolboyes.com/media/catalog/product/cache/028797f040f8816c3dea910d277fa848/1/8/18cut-set-skb-24_boxandproduct_2021.jpg" alt="CUTLERY 24pc SET - sketchbook"></span>
                      </span>
                    </a>
                    <div class="button-top-wrap">
                      <a href="#" data-post="{&quot;action&quot;:&quot;https:\/\/carrolboyes.com\/za\/wishlist\/index\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:4590,&quot;uenc&quot;:&quot;aHR0cHM6Ly9jYXJyb2xib3llcy5jb20vemEvZGluaW5nL2ZsYXR3YXJlLWN1dGxlcnkvY3V0bGVyeS1zZXRzLmh0bWw,&quot;}}" class="action towishlist" data-action="add-to-wishlist" title="Add to Wish List"><span>Add to Wish List</span></a>
                      <a href="#" class="action tocompare" data-post="{&quot;action&quot;:&quot;https:\/\/carrolboyes.com\/za\/catalog\/product_compare\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;4590&quot;,&quot;uenc&quot;:&quot;aHR0cHM6Ly9jYXJyb2xib3llcy5jb20vemEvZGluaW5nL2ZsYXR3YXJlLWN1dGxlcnkvY3V0bGVyeS1zZXRzLmh0bWw,&quot;}}" title="Add to Compare"><span>Add to Compare</span></a>
                    </div>
                  </div>
                  <div class="product details product-item-details">
                    <div class="product-item-inner" style="min-height: 67px;">
                      <strong class="product name product-item-name"><a class="product-item-link" title="CUTLERY 24pc SET - sketchbook" href="https://carrolboyes.com/za/cutlery-set-24pc-sketchbook.html"><span class="product-cb-name">CUTLERY 24pc SET </span><br><span class="product-cb-range"> sketchbook</span></a></strong>
                      <div class="product-reviews-summary short">
                        <div class="rating-summary">
                          <span class="label"><span>Rating:</span></span>
                          <div class="rating-result" id="rating-result_4590" title="100%">
                            <span style="width: 100%;"><span>100%</span></span>
                          </div>
                        </div>
                        <div class="reviews-actions">
                          <a class="action view" href="https://carrolboyes.com/za/cutlery-set-24pc-sketchbook.html#reviews">3 &nbsp;<span>Reviews </span>
                          </a>
                        </div>
                      </div>
                      <div class="price-box price-final_price" data-role="priceBox" data-product-id="4590" data-price-box="product-id-4590">
    
                        <span class="price-container price-final_price tax weee">
                          <span id="product-price-4590" data-price-amount="4899" data-price-type="finalPrice" class="price-wrapper "><span class="price">R4,899</span></span>
                        </span>
    
    
    
                      </div>
                    </div>
                    <div class="product-bottom">
                      <div class="product actions product-item-actions">
                        <div class="cro-actions-primary">
                          <div class="cro-card-t-88-btn">
                            <h4 class="cro-card-t-88-btnContent" cro-proRecId="4590">Add To Cart</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="product-item-info" data-container="product-grid">
                  <div class="product-item-top">
                    <a href="https://carrolboyes.com/za/bottle-stopper-at-rest.html" class="product photo product-item-photo">
                      <span class="product-image-container">
                        <span class="product-image-wrapper" style="padding-bottom: 100%;"><img data-hasoptions="0" class="product-image-photo main-img" src="https://carrolboyes.com/media/catalog/product/cache/028797f040f8816c3dea910d277fa848/2/b/2bs-atr_3.jpg" alt="BOTTLE STOPPER  -  at rest"><img class="product-image-photo hovered-img" src="https://carrolboyes.com/media/catalog/product/cache/028797f040f8816c3dea910d277fa848/2/b/2bs-atr_3.jpg" alt="BOTTLE STOPPER  -  at rest"></span>
                      </span>
                    </a>
                    <div class="button-top-wrap">
                      <a href="#" data-post="{&quot;action&quot;:&quot;https:\/\/carrolboyes.com\/za\/wishlist\/index\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:304,&quot;uenc&quot;:&quot;aHR0cHM6Ly9jYXJyb2xib3llcy5jb20vemEvZW50ZXJ0YWluaW5nL2Jhci1hY2Nlc3Nvcmllcy9ib3R0bGUtc3RvcHBlcnMuaHRtbA,,&quot;}}" class="action towishlist" data-action="add-to-wishlist" title="Add to Wish List"><span>Add to Wish List</span></a>
                      <a href="#" class="action tocompare" data-post="{&quot;action&quot;:&quot;https:\/\/carrolboyes.com\/za\/catalog\/product_compare\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;304&quot;,&quot;uenc&quot;:&quot;aHR0cHM6Ly9jYXJyb2xib3llcy5jb20vemEvZW50ZXJ0YWluaW5nL2Jhci1hY2Nlc3Nvcmllcy9ib3R0bGUtc3RvcHBlcnMuaHRtbA,,&quot;}}" title="Add to Compare"><span>Add to Compare</span></a>
                    </div>
                  </div>
                  <div class="product details product-item-details">
                    <div class="product-item-inner" style="min-height: 67px;">
                      <strong class="product name product-item-name"><a class="product-item-link" title="BOTTLE STOPPER - at rest" href="https://carrolboyes.com/za/bottle-stopper-at-rest.html"><span class="product-cb-name">BOTTLE STOPPER </span><br><span class="product-cb-range"> at rest</span></a></strong>
                      <div class="product-reviews-summary short">
                        <div class="rating-summary">
                          <span class="label"><span>Rating:</span></span>
                          <div class="rating-result" id="rating-result_304" title="100%">
                            <span style="width: 100%;"><span>100%</span></span>
                          </div>
                        </div>
                        <div class="reviews-actions">
                          <a class="action view" href="https://carrolboyes.com/za/bottle-stopper-at-rest.html#reviews">11 &nbsp;<span>Reviews </span>
                          </a>
                        </div>
                      </div>
                      <div class="price-box price-final_price" data-role="priceBox" data-product-id="304" data-price-box="product-id-304">
    
                        <span class="price-container price-final_price tax weee">
                          <span id="product-price-304" data-price-amount="389" data-price-type="finalPrice" class="price-wrapper "><span class="price">R389</span></span>
                        </span>
    
    
    
                      </div>
                    </div>
                    <div class="product-bottom">
                      <div class="product actions product-item-actions">
                        <div class="cro-actions-primary">
                          <div class="cro-card-t-88-btn">
                            <h4 class="cro-card-t-88-btnContent" cro-proRecId="304">Add To Cart</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
            <!-- If we need navigation buttons -->
            <div class="swiper-button-prev cro-swiper-button-prev">
              <img src="https://cdn-3.convertexperiments.com/uf/1004973/10045476/CB_Recipe-88-left.png" alt="">
            </div>
            <div class="swiper-button-next cro-swiper-button-next">
              <img src="https://cdn-3.convertexperiments.com/uf/1004973/10045476/CB_Recipe-88-right.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>`;

    /* Variation Init */
    function init() {
      addClass("body", "cro-cartPage-t-88");

      waitForElement("#checkout-shopping-cart-items .cart-container", function () {
        if (!document.querySelector(".cro-card-t-88-container")) {

          insertHtml("#checkout-shopping-cart-items .cart-container", croRecommendSection, "afterend");
          waitForSwiper(swiperInit);
        }

        // localStorage.removeItem('product_data_storage')
      });
    }

    if (!window.cre88EventHandler) {
      eventHandler();
      window.cre88EventHandler = true;
    }

    function eventHandler() {
      live(".cro-card-t-88-btn", "click", function () {
        var btnText = this.querySelector('.cro-card-t-88-btnContent')
        if (document.querySelector('#form-validate [name="form_key"]')) {
          var formKey = document.querySelector('#form-validate [name="form_key"]').getAttribute('value')
          var croRecId = this.querySelector(".cro-card-t-88-btnContent").getAttribute("cro-prorecid");
          addToCart(formKey, croRecId)
          btnText.innerHTML = 'Adding...';
          // addClass('body', 'cro-t-88-Added')
          this.classList.add('cro-t-88-Added')
        }
      });
    }


    function addToCart(formKey, croRecId) {
      fetch("https://carrolboyes.com/za/checkout/cart/add/uenc/aHR0cHM6Ly9jYXJyb2xib3llcy5jb20vemEva2l0Y2hlbi9raXRjaGVuLXN0b3JhZ2UvYnJlYWQtYmlucy5odG1s/product/" + croRecId + "/", {
        "headers": {
          "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
          "accept-language": "en-US,en;q=0.9",
          "cache-control": "max-age=0",
          "content-type": "application/x-www-form-urlencoded",
          "priority": "u=0, i",
          "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-fetch-dest": "document",
          "sec-fetch-mode": "navigate",
          "sec-fetch-site": "same-origin",
          "sec-fetch-user": "?1",
          "upgrade-insecure-requests": "1"
        },
        "referrer": "https://carrolboyes.com/za/checkout/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "product=" + croRecId + "&uenc=aHR0cHM6Ly9jYXJyb2xib3llcy5jb20vemEvY2hlY2tvdXQvY2FydC9hZGQvdWVuYy9hSFIwY0hNNkx5OWpZWEp5YjJ4aWIzbGxjeTVqYjIwdmVtRXZhMmwwWTJobGJpOXJhWFJqYUdWdUxYTjBiM0poWjJVdlluSmxZV1F0WW1sdWN5NW9kRzFzL3Byb2R1Y3QvMzEzLw%2C%2C&form_key=" + formKey + "",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
      })
        .then(response => {
          if (response.ok) {
            console.log("Request succeeded with status:", response.status);
            document.querySelector('.cro-t-88-Added .cro-card-t-88-btnContent').innerHTML = 'Added';

            setTimeout(function () {
              document.querySelector('.cro-t-88-Added .cro-card-t-88-btnContent').innerHTML = 'Add To Cart';
              document.querySelector('.cro-card-t-88-btn.cro-t-88-Added').classList.remove('cro-t-88-Added');
              setTimeout(function () {
                location.reload();
              }, 400)
              // 
            }, 400)
          } else {
            console.log("Request failed with status:", response.status);
          }
        })
        .catch(error => {
          console.error("Request error:", error);
        });
    }

    /* Initialise variation */
    waitForElement('body', init);

  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();