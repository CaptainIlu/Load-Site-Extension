document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {
	var newURL = "http://www.google.com";
    chrome.tabs.create({ url: newURL });
  }, false);
}, false);