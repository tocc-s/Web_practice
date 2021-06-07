$(function () {
  $('a[href^="#"]').click(function () {
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let pos = target.offset().top;

    $("html, body").animate({ scrollTop: pos }, 600, "swing");

    return false;
  })
})