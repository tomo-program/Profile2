document.addEventListener("DOMContentLoaded", function () {
  $(function() {
    $('html,body').animate({ scrollTop: 0 }, '1');
  });
  const main = new Main();
});

class Main {
  constructor() {
    this.hero_title= document.querySelector('.hero-title');
    this._observers = [];
    this._init();
  }

  _init() {
    new MobileMenu();
    this._scrollInit();
    new Resize();
  }

  _heroTitleAnimation(el, inview) {
    if (inview) {
      el.classList.add("inview");
      this.hero_title.classList.remove("inview");
      this.hero_title.classList.add("outview");
      
    } else {
      el.classList.remove("inview");
      this.hero_title.classList.add("inview");
      this.hero_title.classList.remove("outview");
    }
  }

  _inviewAnimation(el, inview) {
      if(inview) {
          el.classList.add('inview');
      }else {
          el.classList.remove('inview');
      }
  }



  _textAnimation(el, inview) {
    if(inview) {
        const ta = new TweenTextAnimation(el);
        ta.animate();
    }
}

  _scrollInit() {
    this.observers = new ScrollObserver("#container", this._heroTitleAnimation.bind(this), {once:false,rootMargin: "-200px 0px"});
    this.observers = new ScrollObserver('.appear', this._inviewAnimation,{rootMargin: "-120px 0px"});
    this.observers = new ScrollObserver('.animate-title', this._textAnimation, {rootMargin: "-160px 0px"});
  }
}
