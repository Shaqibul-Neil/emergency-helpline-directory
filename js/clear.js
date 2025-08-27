//sidebar clear button functionality
clearBtn.addEventListener('click', function (e) {
  //selecting the history container
  const historyContainer = e.target
    .closest('.history')
    .querySelector('.sidebar-container');

  //if no history
  if (historyContainer.children.length === 0) {
    alert(`No history to delete`);
    return;
  }

  //removing history
  historyContainer.innerHTML = '';
});
