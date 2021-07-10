$(document).ready(function () {
    let productsList;
    let productKeyList;
    $.getJSON("./assets/product-list.json", function (data) {
        let products = data.responses[0][0].params.recommendedProducts;
        setProducts(products);
        let productsKeys = Object.keys(products);
        setTabs(productsKeys);
        listProducts(0);

    }).fail(function () {
        console.log("Hata Dosya Okunamadı...");
    });


    function setTabs(keys) {
        productKeyList = keys;
        var tabs = '<li class="nav-item"> <a class="nav-link active" data-indices="0">' + keys[0] + '</a> </li>';
        for (var i = 1; i < 6; i++) {
            let key = keys[i].split(">");
            key[1].length > 20 ? key[1] = key[1].substr(1, 20) + '...' : key[1] = key[1].substr(1, key[1].length);
            tabs = tabs + '<li class="nav-item"> <a class="nav-link" data-indices="' + i + '">' + key[1] + '</a> </li>';
        }
        $('.category-nav').html(tabs);
    }

    $(document.body).on('click', '.nav-link', function () {
        $('.category-nav .active').removeClass('active');
        $(this).addClass('active');
        var indices = $(this).attr('data-indices');
        listProducts(indices);
    });


    function setProducts(products) {
        productsList = products;
    }
    function listProducts(indices) {
        clearSwiper();
        var products = productsList[productKeyList[indices]];
        products.map(function (product) {

            let shipping = product.params.shippingFee == 'FREE' ? '<i class="fas fa-truck"></i> <span>Ücretsiz Kargo</span>' : '<div class="my-5"></div>';
            var listProducts = '<div class="swiper-slide">' +
                '<div class="card product-card ">' +
                '<div class="image-area mb-2">' +
                '<img data-src="' + product.image + '" class="card-img-top swiper-lazy" src="https://via.placeholder.com/400x400" >' +
                '</div>' +
                '<div class="card-body pt-0">' +
                '<h5 class="card-title">' + product.name + '</h5>' +
                '<div class="bottom-body">' +
                '<section class="price px-3 py-2">  <span>  ' + product.priceText + ' </span>  </section>' +
                '<section class="shipping px-2 py-0 mb-2">  ' + shipping + '  </section>' +
                '<section class="add-cart  w-100"> <button type="button" class="btn btn-primary  w-100">Sepete Ekle</button> </section>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>';

            swiper.appendSlide(listProducts);
            swiper.updateSlidesProgress();
            swiper.lazy.load();
        });

    }


    function clearSwiper() {
        if ($('.swiper-slide').length > 0) {
            swiper.removeSlide($('.swiper-slide').length - 1);
            clearSwiper();
        }
    }

});
