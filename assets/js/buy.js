$(function() {
    var firstimg = $('.slide-inner>.slide-item').first().clone();
    $('.slide-inner').append(firstimg).width($('.slide-inner>.slide-item').length * $('.slide-inner img').width());
    var i = 0;
    var timer = null;
    autoPlay();

    function autoPlay() {
        timer = setInterval(function() {
            i++;
            moveimg();
        }, 2000);
    }

    function moveimg() {
        //如果是最后一张图片
        if (i == $('.slide-inner>.slide-item').length) {
            i = 1;
            $('.slide-inner').css('left', '0px');
        }
        //移动图片
        $('.slide-inner').stop().animate({
            left: i * -$('.slide-inner img').width()
        }, 1000);
        $('.slide-paginator>li').removeClass('active').eq(i).addClass('active');
        if (i == $('.slide-paginator>li').length) {
            $('.slide-paginator>li').removeClass('active').eq(0).addClass('active');
        }
    }
    $('.slide').hover(function() {
        clearInterval(timer);
    }, function() {
        autoPlay();
    });
    $('.slide-button-prev').click(function() {
        i--;
        moveimg();
        if (i == 0) {
            i = $('.slide-inner>.slide-item').length;
            $('.slide-inner').stop().animate({
                left: 0
            }, function() {
                $('.slide-inner').css('left', '-1900px');
            });
        }
    });
    $('.slide-button-next').click(function() {
        i++;
        moveimg();
    });
    $('.slide-paginator>li').click(function() {
        i = $(this).index();
        moveimg();
    });
    $.get('assets/json/my.json', function(data) {
        var str = "";
        for (j = 0; j < data.buy.length; j++) {
            str += `
                <div class="grid-item">
                    <div class="product-item" data-id="90190">
                      <div class="p-img">
                        <a href="#" target="_blank" title="">
                          <img src="${data.buy[j].img}"/>
                        </a>
                      </div>
                      <div class="p-title">
                        <a href="#" target="_blank" title=""> ${data.buy[j].title}</a>
                      </div>
                      <div class="p-brand">
                        <a href="#" target="_blank">${data.buy[j].user}</a>
                      </div>
                      <div class="p-price">
                        <del class="price">${data.buy[j].dprice}</del>
                        <i class="price">${data.buy[j].price}</i>
                      </div>
                    </div>
                  </div>
                </div>
            `;
        }
        $('.homepage-hot-items').append(str);

        function aj() {
            var str2 = "";
            for (k = 0; k < data.shop.length; k++) {
                str2 += `
                <li class="hot-shop">
                  <div class="hot-shop-top">
                    <div class="shop-bg" style="background-color:${data.shop[k].bg}"></div>
                    <a class="shop-logo" href="#" target="_blank">
                      <img src="${data.shop[k].logo}"/>
                    </a>
                    <div class="shop-info">
                      <h2>
                        <a href="#" target="_blank">${data.shop[k].title}</a>
                      </h2>
                      <h3>${data.shop[k].content}</h3>
                    </div>
                  </div>
                  <div class="hot-shop-bd">
                    <div class="master-sku">
                      <div class="shop-pic">
                      <a href="#" target="_blank">
                        <img src="${data.shop[k].img}" />
                      </a>
                    </div>
                      <div class="shop-title">
                        <a href="#" target="_blank">${data.shop[k].name}</a>
                      </div>
                      <div class="shop-price">
                      <del class="price">${data.shop[k].dprice}</del>
                      <i class="price">${data.shop[k].price}</i>
                    </div>
                    </div>
                    <div class="hot-shop-btm">
                      <p class="gray bd-btm-gray">店主推荐</p>
                      <ul>
                        <li>
                          <a href="#"  target="_blank">
                            <img src="${data.shop[k].dimg1}"/>
                          </a>
                        </li>
                        <li>
                          <a data-id="202212" href="#"  target="_blank">
                            <img src="${data.shop[k].dimg2}"/>
                          </a>
                        </li>
                        <li>
                          <a data-id="187716" href="#" target="_blank">
                            <img src="${data.shop[k].dimg3}"/>
                          </a>
                        </li>
                        <li class="goto-shop">
                          <a href="#" target="_blank">
                            <i class="mui-icon arrow-right gray">
                                <img src="assets/images/more.png"/>
                            </i>
                            <p class="gray">进入店铺</p>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
            `;
            }
            $('.hot-shop-list').append(str2);
        }
        aj();
        $(window).scroll(function() {
            var sHeight = $(document).height();
            var height = $(window).height();
            var sTop = $(window).scrollTop();
            console.log(sHeight, sTop)
            if (sHeight - sTop - height <= 200) {
                aj();
            }
        });
    })
});
