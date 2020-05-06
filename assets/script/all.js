$(document).ready(function () {
    // 漢堡選單
    $('.ham-icon').click(function(e) {
        e.preventDefault();
        $('.navbar').toggleClass('active')
    })

    //參考老師範例
    // 隱藏所有的 li 內文
    $('.faq-item-body').hide();
    // 預設讓第一個 li 加上 active
    $('.faq-item').eq(0).addClass('active');
    // 預設讓第一個 li 內文 顯示
    $('.faq-item-body').eq(0).show();

    // 點擊 li
    $('.faq-item').click(function (e) {
    // 取消預設 event 事件
    e.preventDefault(); 
    // 加上 active 屬性，並把其他有 active 的移除
    $(this).toggleClass('active').siblings().removeClass('active');
    // 讓自己的 li body 切換收合
    $(this).children().next().slideToggle();
    // 讓其他 li body 收合
    $(this).siblings().children().next().slideUp();
    })
});