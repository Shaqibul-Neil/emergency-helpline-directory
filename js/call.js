//call button functionality
callBtns.forEach(callBtn =>
  callBtn.addEventListener('click', function (e) {
    if (+coinCount.textContent >= 20) {
      //coin count decreasing
      let currentCoin = +coinCount.textContent - 20;
      coinCount.textContent = currentCoin;

      //getting the parent to get the child
      const callBtnParent = e.target.closest('.hotline-column');

      //getting the title
      const hotlineCenter =
        callBtnParent.querySelector('.hotline-title').textContent;

      //getting the number
      const centerNumber =
        callBtnParent.querySelector('.hotline-number').textContent;

      //adding information in sidebar history
      const HTML = `
            <div class="sidebar-content">
              <div class="history-hotline">
                <h4 class="history-title">${hotlineCenter}</h4>
                <p>${centerNumber}</p>
              </div>
              <div class="history-date">
                <p class="date">${new Date().toLocaleTimeString()}</p>
              </div>
            </div>
      `;
      sidebarContainer.insertAdjacentHTML('afterbegin', HTML);

      //notifications
      alert(`📞 Calling ${hotlineCenter} ${centerNumber}...`);
    } else alert(`❌ Sorry! You don't have enough coins to make this call. Please recharge your account.`);
  })
);
