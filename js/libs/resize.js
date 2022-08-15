class Resize {
  constructor() {
    window.addEventListener("scroll", handleResize);

    function handleResize() {
      var circlesize = 30 + window.pageYOffset / 10;
      var circl2_width = 300 + window.pageYOffset / 10;
      var circl2_height = 300 + window.pageYOffset / 10;
      var circl2_top = 230 - window.pageYOffset / 10;
      var circl2_right = 150 - window.pageYOffset / 20;
      var circl3_width = window.pageYOffset;
      var circl3_height = window.pageYOffset;
      var circl3_top = 380 - window.pageYOffset / 1.815;
      var circl3_right = 295 - window.pageYOffset / 2.08;
      var circle_opacity =(1- window.pageYOffset / 2000 );
      document.documentElement.style.setProperty(
        "--circle-size",
        `${circlesize}%`
      );
      document.documentElement.style.setProperty(
        "--circle2-width",
        `${circl2_width}px`
      );
      document.documentElement.style.setProperty(
        "--circle2-height",
        `${circl2_height}px`
      );
      document.documentElement.style.setProperty(
        "--circle2-top",
        `${circl2_top}px`
      );
      document.documentElement.style.setProperty(
        "--circle2-right",
        `${circl2_right}px`
      );
      document.documentElement.style.setProperty(
        "--circle3-width",
        `${circl3_width}px`
      );
      document.documentElement.style.setProperty(
        "--circle3-height",
        `${circl3_height}px`
      );
      document.documentElement.style.setProperty(
        "--circle3-top",
        `${circl3_top}px`
      );
      document.documentElement.style.setProperty(
        "--circle3-right",
        `${circl3_right}px`
      );
      document.documentElement.style.setProperty(
        // console.log(circle_opacity);
        "--circle-opacity",
        circle_opacity
      );
    }
  }
}
