//How Work Carousel
if ($('.how-work-carousel').length) {
    $('.how-work-carousel').bxSlider({
        pagerCustom: '.pager-one',
        auto: false,
        startSlide: 1,
        infiniteLoop: false,
        easing: 'swing',
        adaptiveHeight: true,
        pause: 5000,
        slideMargin: 50,
        captions: true,
    });
}

function copyContract() {
    var textToCopy = "0x3681D063F47F7230EE3F59A35A2873DAAAAAAAAA";

    // 使用 Clipboard API 复制文本到剪贴板
    navigator.clipboard.writeText(textToCopy).then(function () {
        // 显示自定义提示框
        var notification = document.getElementById("notification");
        notification.classList.add("show");

        // 设置定时器，2秒后隐藏提示框
        setTimeout(function () {
            notification.classList.remove("show");
        }, 2000);
    });
}
function handleDownloadClick(event) {
        event.preventDefault(); // Prevent default link behavior
        // Trigger download
        var link = document.getElementById("download-link");
        var url = link.href;
        var a = document.createElement('a');
        a.href = url;
        a.download = link.download;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        // Show notification
        var notification = document.getElementById("notification");
        notification.textContent = 'Download Successful!'; // Update notification text
        notification.classList.add("show");

        // Hide notification after 2 seconds
        setTimeout(function () {
            notification.classList.remove("show");
        }, 2000);
    }
// responsive
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 100,

    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,
        },
        1000: {
            items: 4,
        }
    }
})
