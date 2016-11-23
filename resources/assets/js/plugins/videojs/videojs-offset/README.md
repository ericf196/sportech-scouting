# videojs-dncoffset

play a segment of a video

## Table of Contents

<!-- START doctoc -->
<!-- END doctoc -->
## Installation

```sh
npm install --save videojs-dncoffset
```

The npm installation is preferred, but Bower works, too.

```sh
bower install  --save videojs-dncoffset
```

## Usage

To include videojs-dncoffset on your website or web application, use any of the following methods.

### `<script>` Tag

This is the simplest case. Get the script in whatever way you prefer and include the plugin _after_ you include [video.js][videojs], so that the `videojs` global is available.

```html
<script src="//path/to/video.min.js"></script>
<script src="//path/to/videojs-dncoffset.min.js"></script>
<script>
  var player = videojs('my-video');

  player.dncoffset();
</script>
```

### Browserify

When using with Browserify, install videojs-dncoffset via npm and `require` the plugin as you would any other module.

```js
var videojs = require('video.js');

// The actual plugin function is exported by this module, but it is also
// attached to the `Player.prototype`; so, there is no need to assign it
// to a variable.
require('videojs-dncoffset');

var player = videojs('my-video');

player.dncoffset();
```

### RequireJS/AMD

When using with RequireJS (or another AMD library), get the script in whatever way you prefer and `require` the plugin as you normally would:

```js
require(['video.js', 'videojs-dncoffset'], function(videojs) {
  var player = videojs('my-video');

  player.dncoffset();
});
```

## License

MIT. Copyright (c) Pedro Gorrin &lt;pedro.gorrin@ngncloud.com&gt;


[videojs]: http://videojs.com/
