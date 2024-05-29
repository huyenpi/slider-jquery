$(document).ready(function () {
  // 1. Xử lí sự kiện khi nhấp vào ảnh thumb
  $(".list-thumb .thumb-item").click(function () {
    let picture_src = $(this).find("img").attr("src");
    $(".show-picture img").attr("src", picture_src);
    $(".list-thumb .thumb-item").removeClass("active");
    $(this).addClass("active");
  });
  //   2. Xử lí sự kiện khi nhấp vào prev next
  $(".slider-nav .prev-btn").click(function () {
    if ($(".list-thumb .thumb-item:first-child").hasClass("active")) {
      $(".list-thumb .thumb-item:last-child").click();
    } else {
      $(".list-thumb .thumb-item.active").prev().click();
    }
  });
  $(".slider-nav .next-btn").click(function () {
    // if ($(".list-thumb .thumb-item.active").next().length == 0) {
    //   $(".list-thumb .thumb-item").eq(0).click();
    // }
    // console.log($(".list-thumb .thumb-item.active").next().length);
    if ($(".list-thumb .thumb-item:last-child").hasClass("active")) {
      $(".list-thumb .thumb-item:first-child").click();
    } else {
      $(".list-thumb .thumb-item.active").next().click();
    }
  });
  //   active phần tử ảnh thumb đầu tiên
  $(".list-thumb .thumb-item:first-child").click();
});
