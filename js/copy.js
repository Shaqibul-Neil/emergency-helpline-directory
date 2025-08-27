//copy button functionality
copyBtns.forEach(copyBtn => {
  copyBtn.addEventListener('click', function (e) {
    //getting the number
    const getHotlineNumber = e.target
      .closest('.hotline-column')
      .querySelector('.hotline-number').innerText;
    console.log(getHotlineNumber);

    //copying to clipboard
    navigator.clipboard.writeText(getHotlineNumber);

    //increasing the copy count
    copyCount.innerText = parseInt(copyCount.innerText) + 1;
    alert(`Number Copied: ${getHotlineNumber}`);
  });
});
