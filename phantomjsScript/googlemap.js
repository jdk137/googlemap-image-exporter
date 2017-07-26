var page = require('webpage').create();

// view port, should be large than page content
page.viewportSize = { width: 7000, height: 5000 };
// url of page to open
var url = 'http://github.com'; //'your_path_to/googlemapExample/index.html';
page.open(url, function(status) {
  console.log("Status: " + status);
  if(status === "success") {
    setInterval(function () {
      page.render('example' + (+new Date()) + '.png');
      console.log('done');
      phantom.exit();
    }, 20000); // the time to wait the page to be fully loaded
  } else {
    phantom.exit();
  }
});