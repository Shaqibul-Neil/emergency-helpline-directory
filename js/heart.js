//Heart Icon Functionality
let count = 0;
hotlineHearts.forEach(hotlineHeart =>
  hotlineHeart.addEventListener('click', function () {
    count++;
    const heartCounter = +heartCount.innerText;
    heartCount.innerText = count + heartCounter;
  })
);
