//Heart Icon Functionality
hotlineHearts.forEach(hotlineHeart =>
  hotlineHeart.addEventListener('click', function () {
    //increasing the heartCount
    heartCount.innerText = parseInt(heartCount.innerText) + 1;
  })
);
