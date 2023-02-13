const
  titleBox = document.querySelector('.title__box'),
  titleBoxTimeout = 5
document.body.style.cssText = `--time__title-box: ${titleBoxTimeout}s;`
setTimeout(() => {
  titleBox.style.display = 'none'
}, titleBoxTimeout * 1000)
document.querySelectorAll('.slider').forEach((e, i) => {
  window[`slider__${i+1}`] = new Swiper(e, {
    freeMode: true,
    centeredSlides: true,
    direction: 'vertical',
    mousewheel: false,
    slidesPerView: 1.75,
    slidesOffsetBefore: -150,
  })
})
bindSwipers(slider__1, slider__2, slider__3, slider__4)