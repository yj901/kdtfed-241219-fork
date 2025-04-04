const tl = anime.timeline({
  easing: "linear",
  duraion: 1000,
});

tl.add({
  targets: ".circle1",
  translateX: 500,
})
  .add({
    targets: ".circle1",
    translateY: 500,
  })
  .add({
    targets: ".circle1",
    translateX: 0,
  })
  .add({
    targets: ".circle1",
    translateY: 0,
  })
  .add({
    targets: ".circle2",
    rotate: 360,
    borderRadius: 0,
    scale: 1.5,
  });
