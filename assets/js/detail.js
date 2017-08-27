$(function() {
    $('.pics-list a').click(function() {
        var index = $(this).index();
        $('.img-wrap img').eq(index).addClass('xianshi').siblings().removeClass('xianshi');
        $('.loader-box').show().delay(500).hide(0);
    });
    $.get('assets/json/1.json', function(msg) {
        var str = '';
        msg.forEach(function(value, key) {
            console.log(value);
            str += `
                 <div class='product-card-box col-1'>
                    <div class='product-card' data-id="102660">
                        <a class='product-photo' target='_blank' href='#'>
                            <div class='photo-box'>
                                <img class="lazy" src='${value.img}'/>
                            </div>
                        </a>
                        <div class='product-title'>
                            <p class='product-name'>
                                <a href='#' target='_blank'>
                                    ${value.title}
                                </a>
                            </p>
                            <p class='product-brand'>
                                <a href='#' target='_blank'>
                                    ${value.shop}
                                </a>
                            </p>
                        </div>
                        <div class='product-info'>
                            <del>${value.del}</del>
                            <span class="price">${value.price}</span>
                        <div class='actions'>
                            <a class="button-follow-product">
                                <i class="mui-icon heart"></i>
                                <em class="like_num">${value.like}</em>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            `;
        });
        $('.product-card-list').append(str);
    });
    $('.details-nav-box>li').click(function() {
        $(this).addClass('orange').siblings().removeClass('orange');
        var indexs = $(this).index();
        $(".details-content>.item-desc-box").eq(indexs).addClass('actives').siblings().removeClass('actives');
        $(window).scrollTop(839);
    })
    console.log($('.details-nav-box').offset().top);
});
