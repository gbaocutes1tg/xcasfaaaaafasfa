$(function () {
  var title = document.title,
    animSeq = ["|"],
    animIndex = 0,
    titleIndex = 0;
  function doInverseSpinZeroPitch() {
    var loadTitle = title.substring(0, titleIndex);
    if (titleIndex > title.length) {
      animIndex = 0;
      titleIndex = 0;
    }
    if (animIndex > 1) {
      titleIndex++;
      animIndex = 0;
    }
    document.title = loadTitle + animSeq[0];
    animIndex++;
  }
  window.setInterval(doInverseSpinZeroPitch, 150);
});
$(function () {
  $(".typed").typed({
    strings: [
      "Hi, tôi tên là Gia Bảo :D",
      "Tôi thích chơi Minecraft",
      "Tôi đến từ Việt Nam thân yêu💖",
      "Tôi là 1 người đẹp trai , vì vậy tui cu bựa",
	],
    typeSpeed: 135,
    loop: true,
    cursorChar: "|",
  });
});
