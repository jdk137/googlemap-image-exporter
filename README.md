# googlemap-image-exporter

Export large googlemap image by phantomjs

Usage:

1. edit googlemapExmaple/index.html

Set your google api map key to replace YOUR_API_KEY.
Set width, height, min-height, zoomlevel and so on, adjust to get your target image.
Default image config is terrain, no label, road and point.
[google map style](https://developers.google.com/maps/documentation/javascript/styling)
make sure you can load the map in your browser.

2. config phantomjsScript/googlemap.js

set viewport big enough to contain your map
set url to be filepath or url to googlemapExmaple/index.html
set wait time to full load your page, default is 20 seconds

3. download phantomjs of your OS and run command in terminal
```
bin/phantomjs your_path_to/phantomjsScript/googlemap.js
```
then you can find a png image in your present working directory.

warning: 
1. make sure you can access google map in your terminal env.
2. the largest image size is about 6500 * 5000 in zoom level 11, in zoom level 12 and 13000 * 10000 size, map tiles shows only in center, margin is gray.
