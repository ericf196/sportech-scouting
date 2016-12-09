/**
 * videojs-externals
 * @version 1.0.12
 * @copyright 2016 Benjamin Pott
 * @license MIT
 */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.videojsExternals = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
/**
 * @file sub-poster-image.js
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _videoJs = (typeof window !== "undefined" ? window['videojs'] : typeof global !== "undefined" ? global['videojs'] : null);

var _videoJs2 = _interopRequireDefault(_videoJs);

var Component = _videoJs2['default'].getComponent('Component');
var PosterImage = _videoJs2['default'].getComponent('PosterImage');

/**
 * The component that handles showing the poster image.
 *
 * @param {Player|Object} player
 * @param {Object=} options
 * @extends Button
 * @class SubPosterImage
 */

var SubPosterImage = (function (_PosterImage) {
  _inherits(SubPosterImage, _PosterImage);

  function SubPosterImage(player, options) {
    _classCallCheck(this, SubPosterImage);

    _get(Object.getPrototypeOf(SubPosterImage.prototype), 'constructor', this).call(this, player, options);
  }

  /**
   * Event handler for updates to the player's poster source
   *
   * @method update
   */

  _createClass(SubPosterImage, [{
    key: 'update',
    value: function update(url) {

      this.setSrc(url);

      // If there's no poster source we should display:none on this component
      // so it's not still clickable or right-clickable
      if (url) {
        this.show();
      } else {
        this.hide();
      }
    }
  }]);

  return SubPosterImage;
})(PosterImage);

Component.registerComponent('SubPosterImage', SubPosterImage);
exports['default'] = SubPosterImage;
module.exports = exports['default'];
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
(function (global){
/**
 * @file Deezer.js
 * Externals (iframe) Media Controller - Wrapper for HTML5 Media API
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _videoJs = (typeof window !== "undefined" ? window['videojs'] : typeof global !== "undefined" ? global['videojs'] : null);

var _videoJs2 = _interopRequireDefault(_videoJs);

var _Externals2 = require('./Externals');

var _Externals3 = _interopRequireDefault(_Externals2);

var Component = _videoJs2['default'].getComponent('Component');
var Tech = _videoJs2['default'].getComponent('Tech');

/**
 * Externals Media Controller - Wrapper for HTML5 Media API
 *
 * @param {Object=} options Object of option names and values
 * @param {Function=} ready Ready callback function
 * @extends Tech
 * @class Deezer
 */

var Deezer = (function (_Externals) {
  _inherits(Deezer, _Externals);

  function Deezer(options, ready) {
    _classCallCheck(this, Deezer);

    _get(Object.getPrototypeOf(Deezer.prototype), 'constructor', this).call(this, options, ready);
  }

  _createClass(Deezer, [{
    key: 'injectCss',
    value: function injectCss() {
      var css = '.vjs-' + this.className_ + ' > .vjs-poster { display:block; width:50%; background-size:contain; background-position: 0 50%; background-color: #000; }\n    .vjs-' + this.className_ + ' .vjs-tech > .vjs-poster {  display:block; background-color: rgba(76, 50, 65, 0.35);}\n    .vjs-deezer-info{position:absolute;padding:3em 1em 1em 1em;left:50%;top:0;right:0;bottom:0;\n      text-align: center; pointer-events: none; text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.69);}';
      _get(Object.getPrototypeOf(Deezer.prototype), 'injectCss', this).call(this, css);
    }
  }, {
    key: 'createEl',
    value: function createEl() {

      var source = null;
      if ('string' === typeof this.options_.source) {
        source = this.options_.source;
      } else if ('object' === typeof this.options_.source) {
        source = this.options_.source.src;
      }

      source = this.parseSrc(source);

      var el_ = _get(Object.getPrototypeOf(Deezer.prototype), 'createEl', this).call(this, 'div', {
        width: '100%',
        height: '100%',
        src: '//www.deezer.com/plugins/player?type=tracks&id=' + source + '\n      &format=classic&color=007FEB&autoplay=' + this.options_.autoplay + '\n      &playlist=' + this.options_.playList + '&width=100%&height=100%'
      });

      this.infosEl_ = _videoJs2['default'].createEl('div', {
        className: 'vjs-deezer-info'
      });

      var deezerEl = _videoJs2['default'].createEl('div', {
        id: 'dz-root'
      });

      el_.firstChild.style.visibility = this.options_.visibility;
      el_.appendChild(this.infosEl_);
      el_.appendChild(deezerEl);

      return el_;
    }
  }, {
    key: 'isApiReady',
    value: function isApiReady() {
      return window['DZ'] && window['DZ']['player'];
    }
  }, {
    key: 'onStateChange',
    value: function onStateChange(event) {
      var state = event.type;
      switch (state) {
        case -1:
          this.trigger('loadstart');
          this.trigger('loadedmetadata');
          this.trigger('durationchange');
          this.trigger('waiting');
          break;

        case 'player_loaded':
          this.trigger('loadedmetadata');
          this.trigger('durationchange');
          this.trigger('canplay');
          this.updatePause();
          break;

        case 'track_end':
          this.updatePause();
          this.trigger('ended');
          break;

        case 'player_play':
          this.updateDuration();
          this.updatePause();
          this.trigger('play');
          break;

        case 'player_position':
          this.trigger('playing');
          this.currentTime_ = event[0];
          this.duration_ = event[1];
          this.trigger('timeupdate');
          break;

        case 'player_paused':
          this.updatePause();
          this.trigger('pause');
          break;

      }
    }
  }, {
    key: 'parseSrc',
    value: function parseSrc(src) {
      if (src) {
        // Regex that parse the video ID for any Dailymotion URL
        var regExp = /^https?:\/\/(?:www\.)?deezer\.com\/(track|album|playlist)\/(\d+)$/;
        var match = src.match(regExp);

        return match ? match[2] || match[2] : null;
      }
    }
  }, {
    key: 'onReady',
    value: function onReady() {
      _get(Object.getPrototypeOf(Deezer.prototype), 'onReady', this).call(this);
      this.updateDuration();
      this.updateVolume();
      this.updatePoster();
    }
  }, {
    key: 'initTech',
    value: function initTech() {
      DZ.init({
        channelUrl: window.location.protocol + '//' + window.location.hostname,
        appId: this.options_.appId,
        player: {
          container: this.options_.techId,
          width: 800,
          height: 300,
          onload: this.onReady.bind(this)
        }
      });
      this.widgetPlayer = DZ.player;
      _get(Object.getPrototypeOf(Deezer.prototype), 'initTech', this).call(this);
      this.onStateChange({ type: -1 });
    }
  }, {
    key: 'setupTriggers',
    value: function setupTriggers() {
      var _this = this;

      this.widgetPlayer.vjsTech = this;
      for (var i = Deezer.Events.length - 1; i >= 0; i--) {
        var eventName = Deezer.Events[i];
        /*jshint loopfunc: true */
        DZ.Event.subscribe(eventName, function (data, event) {
          _this.eventHandler(_videoJs2['default'].mergeOptions({ type: event || data }, data));
        });
      }
    }
  }, {
    key: 'ended',
    value: function ended() {
      return this.duration() === this.currentTime();
    }

    /**
     * Request to enter fullscreen
     *
     * @method enterFullScreen
     */
  }, {
    key: 'enterFullScreen',
    value: function enterFullScreen() {}

    /**
     * Request to exit fullscreen
     *
     * @method exitFullScreen
     */
  }, {
    key: 'exitFullScreen',
    value: function exitFullScreen() {}
  }, {
    key: 'updatePause',
    value: function updatePause() {
      this.paused_ = !this.widgetPlayer.isPlaying();
    }
  }, {
    key: 'updateDuration',
    value: function updateDuration() {
      var track = this.widgetPlayer.getCurrentTrack();
      this.duration_ = track && track.duration || 0;
      this.trigger('durationchange');
    }
  }, {
    key: 'updateVolume',
    value: function updateVolume() {
      this.volume_ = this.widgetPlayer.getVolume();
      this.trigger('volumechange');
    }
  }, {
    key: 'updatePoster',
    value: function updatePoster() {
      var _this2 = this;

      try {
        //const track = this.widgetPlayer.getCurrentTrack();
        var track = {};
        if ('string' === typeof this.options_.source) {
          track.id = this.options_.source;
        } else if ('object' === typeof this.options_.source) {
          track.id = this.options_.source.src;
        }

        track.id = this.parseSrc(track.id);

        DZ.api('/track/' + track.id, function (response) {
          _this2.setPoster('' + response.album['cover_big']);
          _this2.update(response);
        });
      } catch (e) {
        console.log('unable to set poster', e);
      }
    }
  }, {
    key: 'update',
    value: function update(sound) {
      this.infosEl_.innerHTML = sound.title;
    }
  }, {
    key: 'src',
    value: function src(source) {

      if (!source || !source.src) {
        if ('string' === typeof this.options_.source) {
          source = this.options_.source;
        } else if ('object' === typeof this.options_.source) {
          source = this.options_.source.src;
        }

        source = this.parseSrc(source);
      }

      this.widgetPlayer.playTracks([source]);
    }
  }, {
    key: 'duration',
    value: function duration() {
      return this.duration_;
    }
  }, {
    key: 'currentTime',
    value: function currentTime() {
      return this.currentTime_;
    }
  }, {
    key: 'setCurrentTime',
    value: function setCurrentTime(position) {
      this.trigger('seeking');
      this.widgetPlayer.seekTo(position * 1000);
    }
  }, {
    key: 'play',
    value: function play() {
      this.widgetPlayer.play();
      this.updatePause();
    }
  }, {
    key: 'pause',
    value: function pause() {
      this.widgetPlayer.pause();
      this.updatePause();
    }
  }, {
    key: 'paused',
    value: function paused() {
      return this.paused_;
    }
  }, {
    key: 'muted',
    value: function muted() {
      return this.muted_;
    }
  }, {
    key: 'volume',
    value: function volume() {
      return this.volume_;
    }
  }, {
    key: 'setVolume',
    value: function setVolume(percentAsDecimal) {
      if (percentAsDecimal !== this.volume_) {
        this.volume_ = percentAsDecimal;
        this.muted_ = !this.volume_;
        this.widgetPlayer.setVolume(this.volume_);
        this.updateVolume();
      }
    }
  }, {
    key: 'setMuted',
    value: function setMuted(muted) {
      this.muted_ = muted;
      this.widgetPlayer.setMute(this.muted_);
      this.updateVolume();
    }
  }]);

  return Deezer;
})(_Externals3['default']);

Deezer.prototype.className_ = 'deezer';

Deezer.prototype.options_ = {
  api: 'https://cdns-files.dzcdn.net/js/min/dz.js',
  appId: 213642,
  playList: false,
  visibility: 'hidden',
  children: ['subPosterImage']
};

/* Deezer Support Testing -------------------------------------------------------- */

Deezer.isSupported = function () {
  return true;
};

// Add Source Handler pattern functions to this tech
Tech.withSourceHandlers(Deezer);

/*
 * The default native source handler.
 * This simply passes the source to the video element. Nothing fancy.
 *
 * @param  {Object} source   The source object
 * @param  {Flash} tech  The instance of the Flash tech
 */
Deezer.nativeSourceHandler = {};

/**
 * Check if Flash can play the given videotype
 * @param  {String} type    The mimetype to check
 * @return {String}         'probably', 'maybe', or '' (empty string)
 */
Deezer.nativeSourceHandler.canPlayType = function (source) {
  return source.indexOf('deezer') !== -1;
};

/*
 * Check Deezer can handle the source natively
 *
 * @param  {Object} source  The source object
 * @return {String}         'probably', 'maybe', or '' (empty string)
 */
Deezer.nativeSourceHandler.canHandleSource = function (source) {

  // If a type was provided we should rely on that
  if (source.type) {
    return Deezer.nativeSourceHandler.canPlayType(source.type);
  } else if (source.src) {
    return Deezer.nativeSourceHandler.canPlayType(source.src);
  }

  return '';
};

Deezer.nativeSourceHandler.handleSource = function (source, tech) {
  tech.src(source.src);
};

/*
 * Clean up the source handler when disposing the player or switching sources..
 * (no cleanup is needed when supporting the format natively)
 */
Deezer.nativeSourceHandler.dispose = function () {};

Deezer.Events = 'player_loaded,player_play,player_paused,player_position,player_buffering,volume_changed,shuffle_changed,mute_changed,track_end,'.split(',');

// Register the native source handler
Deezer.registerSourceHandler(Deezer.nativeSourceHandler);

Component.registerComponent('Deezer', Deezer);

Tech.registerTech('Deezer', Deezer);

exports['default'] = Deezer;
module.exports = exports['default'];
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Externals":3}],3:[function(require,module,exports){
(function (global){
/**
 * @file videojs-externals.js
 * Externals (iframe) Media Controller - Wrapper for HTML5 Media API
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _videoJs = (typeof window !== "undefined" ? window['videojs'] : typeof global !== "undefined" ? global['videojs'] : null);

var _videoJs2 = _interopRequireDefault(_videoJs);

var Component = _videoJs2['default'].getComponent('Component');
//const ClickableComponent = videojs.getComponent('ClickableComponent');
var Tech = _videoJs2['default'].getComponent('Tech');

/**
 * Externals Media Controller - Wrapper for HTML5 Media API
 *
 * @param {Object=} options Object of option names and values
 * @param {Function=} ready Ready callback function
 * @extends Tech
 * @class Externals
 */

var Externals = (function (_Tech) {
  _inherits(Externals, _Tech);

  function Externals(options, ready) {
    _classCallCheck(this, Externals);

    _get(Object.getPrototypeOf(Externals.prototype), 'constructor', this).call(this, options, ready);
    this.params = {
      id: this.options_.techId,
      autoplay: parseInt(options.autoplay),
      chromeless: parseInt(options.controls),
      html: 1,
      info: 1,
      logo: 1,
      controls: 'html',
      wmode: 'opaque',
      format: 'json',
      url: options.source.src
    };

    // If we are not on a server, don't specify the origin (it will crash)
    if (window.location.protocol !== 'file:') {
      this.params.origin = window.location.protocol + '//' + window.location.hostname;
    }

    this.videoId = this.parseSrc(options.source.src);
    // Set the vjs-youtube class to the player
    // Parent is not set yet so we have to wait a tick
    setTimeout((function () {
      this.loadApi();
    }).bind(this));
  }

  _createClass(Externals, [{
    key: 'injectCss',
    value: function injectCss(overrideStyle) {
      var css = // iframe blocker to catch mouse events
      '.vjs-' + this.className_ + ' .vjs-iframe-blocker { display: none; }\n      .vjs-' + this.className_ + '.vjs-user-inactive .vjs-iframe-blocker { display: block; }\n      .vjs-' + this.className_ + ' .vjs-poster { background-size: cover; }';

      if (overrideStyle) {
        css += overrideStyle;
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      var style = document.createElement('style');
      style.type = 'text/css';

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }

      head.appendChild(style);
    }
  }, {
    key: 'parseSrc',
    value: function parseSrc(src) {
      return src;
    }
  }, {
    key: 'createEl',
    value: function createEl(type, options, blocker) {

      var el = _videoJs2['default'].createEl('div', {
        id: 'vjs-tech' + this.options_.techId,
        className: 'vjs-tech vjs-tech-' + this.className_
      });

      var iframeContainer = _videoJs2['default'].createEl(type, _videoJs2['default'].mergeOptions({
        id: this.options_.techId,
        scrolling: 'no',
        marginWidth: 0,
        marginHeight: 0,
        frameBorder: 0,
        webkitAllowFullScreen: '',
        mozallowfullscreen: '',
        allowFullScreen: ''
      }, options));

      iframeContainer.style.visibility = this.options_.visibility;
      iframeContainer.style.width = '100%';
      iframeContainer.style.height = '100%';
      iframeContainer.style.top = '0';
      iframeContainer.style.left = '0';
      iframeContainer.style.position = 'absolute';

      el.appendChild(iframeContainer);
      var isOnMobile = this.isOnMobile();
      if (!isOnMobile && blocker !== false || blocker) {
        var divBlocker = _videoJs2['default'].createEl('div', {
          className: 'vjs-iframe-blocker',
          style: 'position:absolute;top:0;left:0;width:100%;height:100%'
        });

        // In case the blocker is still there and we want to pause
        _videoJs2['default'].on(divBlocker, 'click', _videoJs2['default'].bind(this, this.togglePlayPause));
        _videoJs2['default'].on(divBlocker, 'tap', _videoJs2['default'].bind(this, this.togglePlayPause));
        _videoJs2['default'].on(divBlocker, 'touchend', _videoJs2['default'].bind(this, this.togglePlayPause));

        el.appendChild(divBlocker);
      }

      var tagPlayer = (0, _videoJs2['default'])(this.options_.playerId);

      tagPlayer.addClass('vjs-' + this.className_);
      if (isOnMobile) {
        tagPlayer.addClass('vjs-' + this.className_ + '-mobile');
      }

      return el;
    }
  }, {
    key: 'togglePlayPause',
    value: function togglePlayPause() {
      if (this.paused()) {
        this.play();
      } else {
        this.pause();
      }
    }
  }, {
    key: 'isOnMobile',
    value: function isOnMobile() {
      return _videoJs2['default'].browser.IS_EDGE || _videoJs2['default'].browser.IS_ANDROID || _videoJs2['default'].browser.IS_IOS;
    }
  }, {
    key: 'addScriptTag',
    value: function addScriptTag() {
      var r = false,
          self = this,
          d = document,
          s = d.getElementsByTagName('head')[0] || d.documentElement;
      var js = d.createElement('script');
      js.async = true;
      js.type = 'text/javascript';
      js.onload = js.onreadystatechange = function () {
        var rs = this.readyState;
        if (!r && (!rs || /loaded|complete/.test(rs))) {
          r = true;
          // Handle memory leak in IE
          js.onload = js.onreadystatechange = null;
          self.initTech();
        }
      };

      js.src = this.options_.api;
      s.insertBefore(js, s.firstChild);
    }
  }, {
    key: 'loadApi',
    value: function loadApi() {
      if (!this.isApiReady()) {
        Externals.apiReadyQueue.push(this);
        this.addScriptTag();
        this.injectCss();
      } else {
        //Add to the queue because the Externals API is not ready
        this.initTech();
      }
    }
  }, {
    key: 'isApiReady',
    value: function isApiReady() {
      return false;
    }
  }, {
    key: 'initTech',
    value: function initTech() {
      this.setupTriggers();
    }
  }, {
    key: 'setupTriggers',
    value: function setupTriggers() {
      this.widgetPlayer.vjsTech = this;
      for (var i = Externals.Events.length - 1; i >= 0; i--) {
        var listener = _videoJs2['default'].bind(this, this.eventHandler);
        this.widgetPlayer.addEventListener(Externals.Events[i], listener);
      }
    }
  }, {
    key: 'eventHandler',
    value: function eventHandler(e) {
      if (!e) {
        return;
      }
      this.onStateChange(e);
      this.trigger(e);
    }
  }, {
    key: 'onStateChange',
    value: function onStateChange(event) {
      var state = event.type;
      this.lastState = state;
      switch (state) {
        case -1:
          this.trigger('loadstart');
          this.trigger('waiting');
          break;

        case 'apiready':
          this.trigger('loadedmetadata');
          this.onReady();
          this.trigger('durationchange');
          break;

        case 'ended':
          break;

        case 'play':
          this.trigger('playing');
          break;

        case 'pause':
          break;

        case 'seeked':
          break;

        case 'timeupdate':
          break;

        case 'error':
          this.onPlayerError();
          break;
      }
    }
  }, {
    key: 'onReady',
    value: function onReady() {
      this.triggerReady();
    }
  }, {
    key: 'poster',
    value: function poster() {
      return this.poster_;
    }
  }, {
    key: 'setPoster',
    value: function setPoster(poster) {
      this.poster_ = poster;
      this.trigger('posterchange');
    }

    /**
     * Set video
     *
     * @param {Object=} src Source object
     * @method setSrc
     */
  }, {
    key: 'src',
    value: function src(_src) {
      if (typeof _src !== 'undefined') {
        this.src_ = this.parseSrc(_src);
      }
      return this.src_;
    }
  }, {
    key: 'currentSrc',
    value: function currentSrc() {
      return this.src_;
    }
  }, {
    key: 'play',
    value: function play() {}
  }, {
    key: 'ended',
    value: function ended() {
      if (this.isReady_) {
        return this.lastState === 0;
      } else {
        // We will play it when the API will be ready
        return false;
      }
    }
  }, {
    key: 'pause',
    value: function pause() {}
  }, {
    key: 'paused',
    value: function paused() {
      return false;
    }
  }, {
    key: 'currentTime',
    value: function currentTime() {
      return 0;
    }
  }, {
    key: 'setCurrentTime',
    value: function setCurrentTime(position) {
      this.currentTime = position;
    }
  }, {
    key: 'duration',
    value: function duration() {
      return 0;
    }
  }, {
    key: 'volume',
    value: function volume() {
      return this.volume_;
    }

    /**
     * Request to enter fullscreen
     *
     * @method enterFullScreen
     */
  }, {
    key: 'enterFullScreen',
    value: function enterFullScreen() {}

    /**
     * Request to exit fullscreen
     *
     * @method exitFullScreen
     */
  }, {
    key: 'exitFullScreen',
    value: function exitFullScreen() {}
  }, {
    key: 'setVolume',
    value: function setVolume(percentAsDecimal) {
      if (typeof percentAsDecimal !== 'undefined' && percentAsDecimal !== this.volume_) {
        this.volume_ = percentAsDecimal;
        this.trigger('volumechange');
      }
    }
  }, {
    key: 'buffered',
    value: function buffered() {
      return [];
    }
  }, {
    key: 'controls',
    value: function controls() {
      return false;
    }
  }, {
    key: 'muted',
    value: function muted() {
      return this.muted_;
    }
  }, {
    key: 'setMuted',
    value: function setMuted(muted) {
      this.muted_ = muted;
    }
  }, {
    key: 'supportsFullScreen',
    value: function supportsFullScreen() {
      return true;
    }
  }, {
    key: 'onPlayerError',
    value: function onPlayerError(e) {
      this.errorNumber = e.data;
      this.trigger('error');
    }
  }, {
    key: 'error',
    value: function error() {
      return { code: 'External unknown error (' + this.errorNumber + ')' };
    }
  }]);

  return Externals;
})(Tech);

Externals.prototype.className_ = ' vjs-externals';
Externals.prototype.widgetPlayer = {};

Externals.prototype.options_ = {
  visibility: 'hidden'
};

Externals.apiReadyQueue = [];

/* Externals Support Testing -------------------------------------------------------- */

/*
 * Set the tech's volume control support status
 *
 * @type {Boolean}
 */
Externals.prototype['featuresVolumeControl'] = true;

/*
 * Set the tech's playbackRate support status
 *
 * @type {Boolean}
 */
Externals.prototype['featuresPlaybackRate'] = false;

/*
 * Set the tech's status on moving the video element.
 * In iOS, if you move a video element in the DOM, it breaks video playback.
 *
 * @type {Boolean}
 */
Externals.prototype['movingMediaElementInDOM'] = false;

/*
 * Set the the tech's fullscreen resize support status.
 * HTML video is able to automatically resize when going to fullscreen.
 * (No longer appears to be used. Can probably be removed.)
 */
Externals.prototype['featuresFullscreenResize'] = false;

/*
 * Set the tech's timeupdate event support status
 * (this disables the manual timeupdate events of the Tech)
 */
Externals.prototype['featuresTimeupdateEvents'] = false;

/*
 * Set the tech's progress event support status
 * (this disables the manual progress events of the Tech)
 */
Externals.prototype['featuresProgressEvents'] = false;

/*
 * Sets the tech's status on native text track support
 *
 * @type {Boolean}
 */
Externals.prototype['featuresNativeTextTracks'] = true;

/*
 * Sets the tech's status on native audio track support
 *
 * @type {Boolean}
 */
Externals.prototype['featuresNativeAudioTracks'] = true;

/*
 * Sets the tech's status on native video track support
 *
 * @type {Boolean}
 */
Externals.prototype['featuresNativeVideoTracks'] = false;

Externals.Events = 'apiready,ad_play,ad_start,ad_timeupdate,ad_pause,ad_end,video_start,\n  \'video_end,play,playing,pause,ended,canplay,canplaythrough,timeupdate,progress,seeking,\n  \'seeked,volumechange,durationchange,fullscreenchange,error'.split(',');

Component.registerComponent('Externals', Externals);

Tech.registerTech('Externals', Externals);

exports['default'] = Externals;
module.exports = exports['default'];
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],4:[function(require,module,exports){
(function (global){
/**
 * @file Soundcloud.js
 * Externals (iframe) Media Controller - Wrapper for HTML5 Media API
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _videoJs = (typeof window !== "undefined" ? window['videojs'] : typeof global !== "undefined" ? global['videojs'] : null);

var _videoJs2 = _interopRequireDefault(_videoJs);

var _Externals2 = require('./Externals');

var _Externals3 = _interopRequireDefault(_Externals2);

var Component = _videoJs2['default'].getComponent('Component');
var Tech = _videoJs2['default'].getComponent('Tech');

/**
 * Externals Media Controller - Wrapper for HTML5 Media API
 *
 * @param {Object=} options Object of option names and values
 * @param {Function=} ready Ready callback function
 * @extends Tech
 * @class Soundcloud
 */

var Soundcloud = (function (_Externals) {
  _inherits(Soundcloud, _Externals);

  function Soundcloud(options, ready) {
    _classCallCheck(this, Soundcloud);

    _get(Object.getPrototypeOf(Soundcloud.prototype), 'constructor', this).call(this, options, ready);
  }

  _createClass(Soundcloud, [{
    key: 'injectCss',
    value: function injectCss() {
      var css = '.vjs-' + this.className_ + ' > .vjs-poster { display:block; width:50%; }\n    .vjs-' + this.className_ + ' .vjs-tech { }\n    .vjs-' + this.className_ + ' .vjs-tech > .vjs-poster {  display:block; }\n    .vjs-' + this.className_ + '.vjs-has-started .vjs-poster {display:block;}\n    .vjs-soundcloud-info{position:absolute;display: flex;justify-content: center;align-items: center;left:50%;top:0;right:0;bottom:0;\n      text-align: center; pointer-events: none; text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.69);}';
      _get(Object.getPrototypeOf(Soundcloud.prototype), 'injectCss', this).call(this, css);
    }
  }, {
    key: 'createEl',
    value: function createEl() {
      var soundcloudSource = null;
      if ('string' === typeof this.options_.source) {
        soundcloudSource = this.options_.source;
      } else if ('object' === typeof this.options_.source) {
        soundcloudSource = this.options_.source.src;
      }

      var el_ = _get(Object.getPrototypeOf(Soundcloud.prototype), 'createEl', this).call(this, 'iframe', {
        width: '100%',
        height: '100%',
        src: 'https://w.soundcloud.com/player/?url=' + soundcloudSource + '&auto_play=' + this.options_.autoplay + '\n      &buying=false&liking=false&sharing=false&show_comments=false&show_playcount=false&show_user=false'
      });

      this.infosEl_ = _videoJs2['default'].createEl('div', {
        className: 'vjs-soundcloud-info'
      });

      el_.firstChild.style.visibility = this.options_.visibility;
      el_.appendChild(this.infosEl_);

      return el_;
    }
  }, {
    key: 'isApiReady',
    value: function isApiReady() {
      return window['SC'];
    }
  }, {
    key: 'onStateChange',
    value: function onStateChange(event) {
      var state = event.type;
      switch (state) {
        case -1:
          this.trigger('loadstart');
          this.trigger('waiting');
          break;

        case SC.Widget.Events.READY:
          this.trigger('loadedmetadata');
          this.trigger('durationchange');
          this.trigger('canplay');
          this.onReady();
          break;

        case SC.Widget.Events.FINISH:
          this.updatePause();
          this.trigger('ended');
          break;

        case SC.Widget.Events.PLAY:
          this.updatePause();
          this.trigger('play');
          this.trigger('waiting');
          break;

        case SC.Widget.Events.PLAY_PROGRESS:
          this.trigger('canplay');
          this.trigger('playing');
          this.currentTime_ = this.duration_ * 1000 * event.relativePosition / 1000;
          //this.trigger('timeupdate');
          break;

        case SC.Widget.Events.PAUSE:
          this.updatePause();
          this.trigger('pause');
          break;

        case SC.Widget.Events.SEEK:
          this.trigger('seeked');
          break;

        case SC.Widget.Events.LOAD_PROGRESS:
          this.trigger('timeupdate');
          break;

        case SC.Widget.Events.ERROR:
          this.onPlayerError();
          break;
      }
    }
  }, {
    key: 'parseSrc',
    value: function parseSrc(src) {
      if (src) {
        // Regex that parse the video ID for any Dailymotion URL
        var regExp = /^(https?:\/\/)?(www.|api.)?soundcloud.com\//i;
        var match = src.match(regExp);

        return match ? match[5] || match[3] : null;
      }
    }
  }, {
    key: 'onReady',
    value: function onReady() {
      _get(Object.getPrototypeOf(Soundcloud.prototype), 'onReady', this).call(this);
      this.updatePause();
      this.updateDuration();
      this.updateVolume();
      this.updatePoster();
    }
  }, {
    key: 'initTech',
    value: function initTech() {
      this.widgetPlayer = SC.Widget(this.options_.techId);
      _get(Object.getPrototypeOf(Soundcloud.prototype), 'initTech', this).call(this);
      this.onStateChange({ type: -1 });
    }
  }, {
    key: 'setupTriggers',
    value: function setupTriggers() {
      var _this = this;

      this.widgetPlayer.vjsTech = this;

      var _loop = function () {
        var eventName = Soundcloud.Events[i];
        /*jshint loopfunc: true */
        _this.widgetPlayer.bind(eventName, function (data) {
          _this.eventHandler(_videoJs2['default'].mergeOptions({ type: eventName }, data));
        });
      };

      for (var i = Soundcloud.Events.length - 1; i >= 0; i--) {
        _loop();
      }
    }
  }, {
    key: 'ended',
    value: function ended() {
      return this.duration() === this.currentTime();
    }

    /**
     * Request to enter fullscreen
     *
     * @method enterFullScreen
     */
  }, {
    key: 'enterFullScreen',
    value: function enterFullScreen() {
      this.widgetPlayer.webkitEnterFullScreen();
    }

    /**
     * Request to exit fullscreen
     *
     * @method exitFullScreen
     */
  }, {
    key: 'exitFullScreen',
    value: function exitFullScreen() {
      this.widgetPlayer.webkitExitFullScreen();
    }
  }, {
    key: 'updatePause',
    value: function updatePause() {
      var _this2 = this;

      this.widgetPlayer.isPaused(function (paused) {
        _this2.paused_ = paused;
      });
    }
  }, {
    key: 'updateDuration',
    value: function updateDuration() {
      var _this3 = this;

      this.widgetPlayer.getDuration(function (duration) {
        _this3.duration_ = duration / 1000;
        _this3.trigger('durationchange');
      });
    }
  }, {
    key: 'updateVolume',
    value: function updateVolume() {
      var _this4 = this;

      this.widgetPlayer.getVolume(function (volume) {
        _this4.volume_ = volume;
        _this4.trigger('volumechange');
      });
    }
  }, {
    key: 'updatePoster',
    value: function updatePoster() {
      var _this5 = this;

      try {
        this.widgetPlayer.getCurrentSound(function (sound) {
          if (!sound) {
            return;
          }
          _this5.setPoster(sound['artwork_url'].replace('large.jpg', 't500x500.jpg'));
          _this5.subPosterImage.update(sound['waveform_url'].replace('wis', 'w1').replace('json', 'png'));
          _this5.update(sound);
        });
      } catch (e) {
        console.log('unable to set poster', e);
      }
    }
  }, {
    key: 'update',
    value: function update(sound) {
      this.infosEl_.innerHTML = sound.title;
    }
  }, {
    key: 'src',
    value: function src(_src) {
      this.widgetPlayer.load(_src, {
        'auto_play': this.options_.autoplay
      });
    }
  }, {
    key: 'duration',
    value: function duration() {
      return this.duration_;
    }
  }, {
    key: 'currentTime',
    value: function currentTime() {
      return this.currentTime_;
    }
  }, {
    key: 'setCurrentTime',
    value: function setCurrentTime(position) {
      this.trigger('seeking');
      this.widgetPlayer.seekTo(position * 1000);
    }
  }, {
    key: 'play',
    value: function play() {
      this.widgetPlayer.play();
      this.updatePause();
    }
  }, {
    key: 'pause',
    value: function pause() {
      this.widgetPlayer.pause();
      this.updatePause();
    }
  }, {
    key: 'paused',
    value: function paused() {
      return this.paused_;
    }
  }, {
    key: 'muted',
    value: function muted() {
      return this.muted_;
    }
  }, {
    key: 'volume',
    value: function volume() {
      return this.volume_;
    }
  }, {
    key: 'setVolume',
    value: function setVolume(percentAsDecimal) {
      if (percentAsDecimal !== this.volume_) {
        this.volume_ = percentAsDecimal;
        this.muted_ = !this.volume_;
        this.widgetPlayer.setVolume(this.volume_);
        this.updateVolume();
      }
    }
  }, {
    key: 'setMuted',
    value: function setMuted(muted) {
      this.muted_ = muted;
      this.widgetPlayer.setVolume(this.muted_ ? 0 : this.volume_);
      this.updateVolume();
    }
  }]);

  return Soundcloud;
})(_Externals3['default']);

Soundcloud.prototype.className_ = 'soundcloud';

Soundcloud.prototype.options_ = {
  api: '//w.soundcloud.com/player/api.js',
  visibility: 'hidden',
  children: ['subPosterImage']
};

/* Soundcloud Support Testing -------------------------------------------------------- */

Soundcloud.isSupported = function () {
  return true;
};

// Add Source Handler pattern functions to this tech
Tech.withSourceHandlers(Soundcloud);

/*
 * The default native source handler.
 * This simply passes the source to the video element. Nothing fancy.
 *
 * @param  {Object} source   The source object
 * @param  {Flash} tech  The instance of the Flash tech
 */
Soundcloud.nativeSourceHandler = {};

/**
 * Check if Flash can play the given videotype
 * @param  {String} type    The mimetype to check
 * @return {String}         'probably', 'maybe', or '' (empty string)
 */
Soundcloud.nativeSourceHandler.canPlayType = function (source) {
  return source.indexOf('soundcloud') !== -1;
};

/*
 * Check Soundcloud can handle the source natively
 *
 * @param  {Object} source  The source object
 * @return {String}         'probably', 'maybe', or '' (empty string)
 */
Soundcloud.nativeSourceHandler.canHandleSource = function (source) {

  // If a type was provided we should rely on that
  if (source.type) {
    return Soundcloud.nativeSourceHandler.canPlayType(source.type);
  } else if (source.src) {
    return Soundcloud.nativeSourceHandler.canPlayType(source.src);
  }

  return '';
};

Soundcloud.nativeSourceHandler.handleSource = function (source, tech) {
  tech.src(source.src);
};

/*
 * Clean up the source handler when disposing the player or switching sources..
 * (no cleanup is needed when supporting the format natively)
 */
Soundcloud.nativeSourceHandler.dispose = function () {};

Soundcloud.Events = 'ready,play,playProgress,loadProgress,pause,seek,finish,error'.split(',');

// Register the native source handler
Soundcloud.registerSourceHandler(Soundcloud.nativeSourceHandler);

Component.registerComponent('Soundcloud', Soundcloud);

Tech.registerTech('Soundcloud', Soundcloud);

exports['default'] = Soundcloud;
module.exports = exports['default'];
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Externals":3}],5:[function(require,module,exports){
(function (global){
/**
 * @file spotify.js
 * Externals (iframe) Media Controller - Wrapper for HTML5 Media API
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _videoJs = (typeof window !== "undefined" ? window['videojs'] : typeof global !== "undefined" ? global['videojs'] : null);

var _videoJs2 = _interopRequireDefault(_videoJs);

var _Externals2 = require('./Externals');

var _Externals3 = _interopRequireDefault(_Externals2);

var Component = _videoJs2['default'].getComponent('Component');
var Tech = _videoJs2['default'].getComponent('Tech');

/**
 * Externals Media Controller - Wrapper for HTML5 Media API
 *
 * @param {Object=} options Object of option names and values
 * @param {Function=} ready Ready callback function
 * @extends Tech
 * @class Spotify
 */

var Spotify = (function (_Externals) {
  _inherits(Spotify, _Externals);

  function Spotify(options, ready) {
    _classCallCheck(this, Spotify);

    _get(Object.getPrototypeOf(Spotify.prototype), 'constructor', this).call(this, options, ready);
  }

  _createClass(Spotify, [{
    key: 'createEl',
    value: function createEl() {
      var source = null;
      if ('string' === typeof this.options_.source) {
        source = this.options_.source;
      } else if ('object' === typeof this.options_.source) {
        source = this.options_.source.src;
      }

      var el_ = _get(Object.getPrototypeOf(Spotify.prototype), 'createEl', this).call(this, 'iframe', {
        width: '100%',
        height: '100%',
        src: 'https://embed.spotify.com/?uri=' + source
      }, false);

      el_.firstChild.style.visibility = this.options_.visibility;

      var tagPlayer = (0, _videoJs2['default'])(this.options_.playerId);
      tagPlayer.controls(false);

      return el_;
    }
  }, {
    key: 'addScriptTag',
    value: function addScriptTag() {
      this.initTech();
    }
  }, {
    key: 'isApiReady',
    value: function isApiReady() {
      return true;
    }
  }, {
    key: 'parseSrc',
    value: function parseSrc(src) {
      return src;
    }
  }, {
    key: 'setupTriggers',
    value: function setupTriggers() {
      //SPOTIFY don't have embed api
    }
  }, {
    key: 'ended',
    value: function ended() {
      return false;
    }
  }, {
    key: 'play',
    value: function play() {}
  }, {
    key: 'pause',
    value: function pause() {}

    /**
     * Request to enter fullscreen
     *
     * @method enterFullScreen
     */
  }, {
    key: 'enterFullScreen',
    value: function enterFullScreen() {}

    /**
     * Request to exit fullscreen
     *
     * @method exitFullScreen
     */
  }, {
    key: 'exitFullScreen',
    value: function exitFullScreen() {}
  }, {
    key: 'src',
    value: function src(_src) {
      this.el_.src(_src);
    }
  }]);

  return Spotify;
})(_Externals3['default']);

Spotify.prototype.className_ = 'spotify';

Spotify.prototype.options_ = {
  api: '',
  visibility: 'show'
};

/* Spotify Support Testing -------------------------------------------------------- */

Spotify.isSupported = function () {
  return true;
};

// Add Source Handler pattern functions to this tech
Tech.withSourceHandlers(Spotify);

/*
 * The default native source handler.
 * This simply passes the source to the video element. Nothing fancy.
 *
 * @param  {Object} source   The source object
 * @param  {Flash} tech  The instance of the Flash tech
 */
Spotify.nativeSourceHandler = {};

/**
 * Check if Flash can play the given videotype
 * @param  {String} type    The mimetype to check
 * @return {String}         'probably', 'maybe', or '' (empty string)
 */
Spotify.nativeSourceHandler.canPlayType = function (source) {
  return source.indexOf('spotify') !== -1;
};

/*
 * Check Spotify can handle the source natively
 *
 * @param  {Object} source  The source object
 * @return {String}         'probably', 'maybe', or '' (empty string)
 */
Spotify.nativeSourceHandler.canHandleSource = function (source) {

  // If a type was provided we should rely on that
  if (source.type) {
    return Spotify.nativeSourceHandler.canPlayType(source.type);
  } else if (source.src) {
    return Spotify.nativeSourceHandler.canPlayType(source.src);
  }

  return '';
};

Spotify.nativeSourceHandler.handleSource = function (source, tech) {
  tech.src(source.src);
};

/*
 * Clean up the source handler when disposing the player or switching sources..
 * (no cleanup is needed when supporting the format natively)
 */
Spotify.nativeSourceHandler.dispose = function () {};

Spotify.Events = ''.split(',');

// Register the native source handler
Spotify.registerSourceHandler(Spotify.nativeSourceHandler);

Component.registerComponent('Spotify', Spotify);

Tech.registerTech('Spotify', Spotify);

exports['default'] = Spotify;
module.exports = exports['default'];
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Externals":3}],6:[function(require,module,exports){
(function (global){
/**
 * @file Vimeo.js
 * Externals (iframe) Media Controller - Wrapper for HTML5 Media API
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _videoJs = (typeof window !== "undefined" ? window['videojs'] : typeof global !== "undefined" ? global['videojs'] : null);

var _videoJs2 = _interopRequireDefault(_videoJs);

var _Externals2 = require('./Externals');

var _Externals3 = _interopRequireDefault(_Externals2);

var Component = _videoJs2['default'].getComponent('Component');
var Tech = _videoJs2['default'].getComponent('Tech');

/**
 * Externals Media Controller - Wrapper for HTML5 Media API
 *
 * @param {Object=} options Object of option names and values
 * @param {Function=} ready Ready callback function
 * @extends Tech
 * @class Vimeo
 */

var Vimeo = (function (_Externals) {
  _inherits(Vimeo, _Externals);

  function Vimeo(options, ready) {
    _classCallCheck(this, Vimeo);

    _get(Object.getPrototypeOf(Vimeo.prototype), 'constructor', this).call(this, options, ready);
  }

  _createClass(Vimeo, [{
    key: 'createEl',
    value: function createEl() {

      var vimeoSource = null;
      if ('string' === typeof this.options_.source) {
        vimeoSource = this.options_.source;
      } else if ('object' === typeof this.options_.source) {
        vimeoSource = this.options_.source.src;
      }

      vimeoSource = this.parseSrc(vimeoSource);

      var el_ = _get(Object.getPrototypeOf(Vimeo.prototype), 'createEl', this).call(this, 'iframe', {
        id: this.options_.techId,
        src: this.options_.embed + '/' + vimeoSource + '??api=1&player_id=' + this.options_.techId + '&fullscreen=1&autoplay=' + this.options_.autoplay
      });

      var tagPlayer = (0, _videoJs2['default'])(this.options_.playerId);
      tagPlayer.controls(false);
      return el_;
    }
  }, {
    key: 'parseSrc',
    value: function parseSrc(src) {
      if (src) {
        // Regex that parse the video ID for any Vimeo URL
        var regExp = /^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/;
        var match = src.match(regExp);

        if (match && match[5]) {
          return match[5];
        }
      }
    }
  }, {
    key: 'isApiReady',
    value: function isApiReady() {
      return window['Vimeo'] && window['Vimeo']['Player'];
    }
  }, {
    key: 'initTech',
    value: function initTech() {
      if (!this.isApiReady()) {
        return;
      }
      var source = null;
      if ('string' === typeof this.options_.source) {
        source = this.options_.source;
      } else if ('object' === typeof this.options_.source) {
        source = this.options_.source.src;
      }

      source = this.parseSrc(source);

      var vimOpts = _videoJs2['default'].mergeOptions(this.options_, {
        id: source,
        byline: 0,
        color: '#00adef',
        portrait: 0,
        controls: 0,
        fullscreen: 1
      });

      this.widgetPlayer = new window.Vimeo.Player(this.options_.techId, vimOpts);
      this.widgetPlayer.ready().then(_videoJs2['default'].bind(this, this.onReady));
      _get(Object.getPrototypeOf(Vimeo.prototype), 'initTech', this).call(this);
      this.onStateChange({ type: -1 });
    }
  }, {
    key: 'setupTriggers',
    value: function setupTriggers() {
      var _this = this;

      this.widgetPlayer.vjsTech = this;

      var _loop = function () {
        var eventName = Vimeo.Events[i];
        /*jshint loopfunc: true */
        _this.widgetPlayer.on(eventName, function (data) {
          _this.eventHandler(_videoJs2['default'].mergeOptions({ type: eventName }, data));
        });
      };

      for (var i = Vimeo.Events.length - 1; i >= 0; i--) {
        _loop();
      }
    }
  }, {
    key: 'onStateChange',
    value: function onStateChange(event) {
      var state = event.type;
      this.lastState = state;
      _get(Object.getPrototypeOf(Vimeo.prototype), 'onStateChange', this).call(this, event);
      if (event.volume) {
        this.volume_ = event.volume;
      }
      if (event.duration) {
        this.duration_ = event.duration;
      }
      if (event.seconds) {
        this.currentTime_ = event.seconds;
      }
      if (event.percent) {
        this.buffered_ = event.percent;
      }
      switch (state) {
        case 'loaded':
          this.trigger('loadedmetadata');
          this.trigger('durationchange');
          this.trigger('canplay');
          break;
        case 'onLoadProgress':
          this.trigger('progress');
          this.trigger('durationchange');
          break;
        case 'playProgress':
          this.trigger('timeupdate');
          break;
      }
    }
  }, {
    key: 'updateVolume',
    value: function updateVolume() {
      var _this2 = this;

      this.widgetPlayer.getVolume().then(function (volume) {
        _this2.volume_ = volume;
        _this2.trigger('volumechange');
      });
    }
  }, {
    key: 'updateEnded',
    value: function updateEnded() {
      var _this3 = this;

      this.widgetPlayer.getEnded().then(function (ended) {
        _this3.ended_ = ended;
      });
    }
  }, {
    key: 'updatePaused',
    value: function updatePaused() {
      var _this4 = this;

      this.widgetPlayer.getPaused().then(function (paused) {
        _this4.paused_ = paused;
      });
    }
  }, {
    key: 'updateDuration',
    value: function updateDuration() {
      var _this5 = this;

      this.widgetPlayer.getDuration().then(function (duration) {
        _this5.duration_ = duration;
      });
    }
  }, {
    key: 'buffered',
    value: function buffered() {
      return _videoJs2['default'].createTimeRange(0, this.buffered_ * this.duration_ || 0);
    }
  }, {
    key: 'ended',
    value: function ended() {
      return this.ended_;
    }
  }, {
    key: 'duration',
    value: function duration() {
      return this.duration_;
    }
  }, {
    key: 'currentTime',
    value: function currentTime() {
      return this.currentTime_;
    }
  }, {
    key: 'setCurrentTime',
    value: function setCurrentTime(seconds) {
      var _this6 = this;

      this.widgetPlayer.setCurrentTime(seconds).then(function (seconds) {
        _this6.currentTime_ = seconds;
      });
    }
  }, {
    key: 'play',
    value: function play() {
      this.widgetPlayer.play();
    }
  }, {
    key: 'pause',
    value: function pause() {
      this.widgetPlayer.pause();
    }
  }, {
    key: 'paused',
    value: function paused() {
      return this.paused_;
    }
  }, {
    key: 'muted',
    value: function muted() {
      return this.muted_;
    }
  }, {
    key: 'volume',
    value: function volume() {
      return this.volume_;
    }
  }, {
    key: 'setVolume',
    value: function setVolume(percentAsDecimal) {
      var _this7 = this;

      if (percentAsDecimal !== this.volume_) {
        this.widgetPlayer.setVolume(percentAsDecimal).then(function () {
          _this7.updateVolume();
        });
      }
    }
  }, {
    key: 'setMuted',
    value: function setMuted(muted) {
      this.muted_ = muted;
      if (muted) {
        this.volumeBefore_ = this.volume_;
      }
      this.setVolume(muted ? 0 : this.volumeBefore_);
    }
  }]);

  return Vimeo;
})(_Externals3['default']);

Vimeo.prototype.options_ = {
  api: '//player.vimeo.com/api/player.js',
  embed: '//player.vimeo.com/video',
  visibility: 'visible'
};

Vimeo.prototype.className_ = 'Vimeo';

/* Vimeo Support Testing -------------------------------------------------------- */

Vimeo.isSupported = function () {
  return true;
};

// Add Source Handler pattern functions to this tech
Tech.withSourceHandlers(Vimeo);

/*
 * The default native source handler.
 * This simply passes the source to the video element. Nothing fancy.
 *
 * @param  {Object} source   The source object
 * @param  {Flash} tech  The instance of the Flash tech
 */
Vimeo.nativeSourceHandler = {};

/**
 * Check if Flash can play the given videotype
 * @param  {String} type    The mimetype to check
 * @return {String}         'probably', 'maybe', or '' (empty string)
 */
Vimeo.nativeSourceHandler.canPlayType = function (source) {
  return source.indexOf('vimeo') !== -1;
};

/*
 * Check Vimeo can handle the source natively
 *
 * @param  {Object} source  The source object
 * @return {String}         'probably', 'maybe', or '' (empty string)
 */
Vimeo.nativeSourceHandler.canHandleSource = function (source) {

  // If a type was provided we should rely on that
  if (source.type) {
    return Vimeo.nativeSourceHandler.canPlayType(source.type);
  } else if (source.src) {
    return Vimeo.nativeSourceHandler.canPlayType(source.src);
  }

  return '';
};

Vimeo.nativeSourceHandler.handleSource = function (source, tech) {
  tech.src(source.src);
};

/*
 * Clean up the source handler when disposing the player or switching sources..
 * (no cleanup is needed when supporting the format natively)
 */
Vimeo.nativeSourceHandler.dispose = function () {};

// Register the native source handler
Vimeo.registerSourceHandler(Vimeo.nativeSourceHandler);

Vimeo.Events = 'loaded,play,ended,timeupdate,progress,seeked,texttrackchange,cuechange,volumechange,error'.split(',');

Component.registerComponent('Vimeo', Vimeo);

Tech.registerTech('Vimeo', Vimeo);

exports['default'] = Vimeo;
module.exports = exports['default'];
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Externals":3}],7:[function(require,module,exports){
(function (global){
/**
 * @file Youtube.js
 * Externals (iframe) Media Controller - Wrapper for HTML5 Media API
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _videoJs = (typeof window !== "undefined" ? window['videojs'] : typeof global !== "undefined" ? global['videojs'] : null);

var _videoJs2 = _interopRequireDefault(_videoJs);

var _Externals2 = require('./Externals');

var _Externals3 = _interopRequireDefault(_Externals2);

var _globalWindow = require('global/window');

var _globalWindow2 = _interopRequireDefault(_globalWindow);

var Component = _videoJs2['default'].getComponent('Component');
var Tech = _videoJs2['default'].getComponent('Tech');

/**
 * Externals Media Controller - Wrapper for HTML5 Media API
 *
 * @param {Object=} options Object of option names and values
 * @param {Function=} ready Ready callback function
 * @extends Tech
 * @class Youtube
 */

var Youtube = (function (_Externals) {
  _inherits(Youtube, _Externals);

  function Youtube(options, ready) {
    _classCallCheck(this, Youtube);

    _get(Object.getPrototypeOf(Youtube.prototype), 'constructor', this).call(this, options, ready);
  }

  _createClass(Youtube, [{
    key: 'createEl',
    value: function createEl() {

      var el_ = _get(Object.getPrototypeOf(Youtube.prototype), 'createEl', this).call(this, 'div', {
        id: this.options_.techId
      });

      return el_;
    }
  }, {
    key: 'injectCss',
    value: function injectCss() {
      var css = '.vjs-' + this.className_ + ' .vjs-big-play-button { display: none; }';
      _get(Object.getPrototypeOf(Youtube.prototype), 'injectCss', this).call(this, css);
    }
  }, {
    key: 'loadApi',
    value: function loadApi() {
      _get(Object.getPrototypeOf(Youtube.prototype), 'loadApi', this).call(this);
      _globalWindow2['default'].onYouTubeIframeAPIReady = this.onYoutubeReady.bind(this);
    }
  }, {
    key: 'onStateChange',
    value: function onStateChange(event) {
      var state = event.data;
      switch (state) {
        case -1:
          this.trigger('loadstart');
          this.trigger('loadedmetadata');
          this.trigger('durationchange');
          break;

        case YT.PlayerState.PLAYING:
          this.trigger('timeupdate');
          this.trigger('durationchange');
          this.trigger('playing');
          this.trigger('play');

          if (this.isSeeking) {
            this.onSeeked();
          }
          break;

        case YT.PlayerState.ENDED:
          this.trigger('ended');
          break;

        case YT.PlayerState.PAUSED:
          this.trigger('canplay');
          if (this.isSeeking) {
            this.onSeeked();
          } else {
            this.trigger('pause');
          }
          break;

        case YT.PlayerState.BUFFERING:
          this.trigger('timeupdate');
          this.trigger('waiting');
          break;
      }
      this.lastState = state;
    }
  }, {
    key: 'parseSrc',
    value: function parseSrc(src) {
      if (src) {
        // Regex that parse the video ID for any Youtube URL
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var match = src.match(regExp);

        if (match && match[2].length === 11) {
          return match[2];
        }
      }
    }
  }, {
    key: 'onReady',
    value: function onReady() {
      _get(Object.getPrototypeOf(Youtube.prototype), 'onReady', this).call(this);
      this.updateVolume();
    }
  }, {
    key: 'isApiReady',
    value: function isApiReady() {
      return _globalWindow2['default']['YT'] && _globalWindow2['default']['YT']['Player'];
    }
  }, {
    key: 'onYoutubeReady',
    value: function onYoutubeReady() {
      YT.ready((function () {
        for (var i = 0; i < _Externals3['default'].apiReadyQueue.length; ++i) {
          _Externals3['default'].apiReadyQueue[i].initTech();
        }
      }).bind(this));
    }
  }, {
    key: 'initTech',
    value: function initTech() {
      if (!this.isApiReady()) {
        return;
      }
      var source = null;
      if ('string' === typeof this.options_.source) {
        source = this.options_.source;
      } else if ('object' === typeof this.options_.source) {
        source = this.options_.source.src;
      }

      source = this.parseSrc(source);

      var ytOpts = _videoJs2['default'].mergeOptions(this.options_, {
        controls: 0,
        playsinline: 1,
        rel: 0,
        showinfo: 0,
        autohide: 1,
        disablekb: 1,
        end: 0,
        modestbranding: 1,
        fs: 1
      });

      this.widgetPlayer = new YT.Player(this.options_.techId, {
        videoId: source,
        playerVars: ytOpts,
        events: {
          onReady: this.onReady.bind(this),
          onPlaybackQualityChange: this.onPlayerPlaybackQualityChange.bind(this),
          onStateChange: this.onStateChange.bind(this),
          onError: this.onPlayerError.bind(this)
        }
      });

      _get(Object.getPrototypeOf(Youtube.prototype), 'initTech', this).call(this);
    }
  }, {
    key: 'setupTriggers',
    value: function setupTriggers() {}
  }, {
    key: 'onPlayerPlaybackQualityChange',
    value: function onPlayerPlaybackQualityChange() {}
  }, {
    key: 'src',
    value: function src(source) {

      if (!source || !source.src) {
        return;
      }

      this.url = this.parseSrc(source.src);

      if (!this.options_.poster) {
        if (this.url) {
          // Set the low resolution first
          this.setPoster('//img.youtube.com/vi/' + this.url + '/0.jpg');
        }
      }
    }
  }, {
    key: 'ended',
    value: function ended() {
      return this.widgetPlayer ? this.lastState === YT.PlayerState.ENDED : false;
    }
  }, {
    key: 'duration',
    value: function duration() {
      return this.widgetPlayer ? this.widgetPlayer.getDuration() : 0;
    }
  }, {
    key: 'currentTime',
    value: function currentTime() {
      return this.widgetPlayer && this.widgetPlayer.getCurrentTime();
    }
  }, {
    key: 'setCurrentTime',
    value: function setCurrentTime(seconds) {
      if (this.lastState === YT.PlayerState.PAUSED) {
        this.timeBeforeSeek = this.currentTime();
      }

      //FIXME replace this (warn autoplay)
      if (!this.isSeeking) {
        this.wasPausedBeforeSeek = this.paused();
      }

      this.widgetPlayer.seekTo(seconds, true);
      this.trigger('timeupdate');
      this.trigger('seeking');
      this.isSeeking = true;

      // A seek event during pause does not return an event to trigger a seeked event,
      // so run an interval timer to look for the currentTime to change
      if (this.lastState === YT.PlayerState.PAUSED && this.timeBeforeSeek !== seconds) {
        this.clearInterval(this.checkSeekedInPauseInterval);
        this.checkSeekedInPauseInterval = this.setInterval((function () {
          if (this.lastState !== YT.PlayerState.PAUSED || !this.isSeeking) {
            // If something changed while we were waiting for the currentTime to change,
            //  clear the interval timer
            this.clearInterval(this.checkSeekedInPauseInterval);
          } else if (this.currentTime() !== this.timeBeforeSeek) {
            this.trigger('timeupdate');
            this.onSeeked();
          }
        }).bind(this), 250);
      }
    }
  }, {
    key: 'playbackRate',
    value: function playbackRate() {
      return this.widgetPlayer ? this.widgetPlayer.getPlaybackRate() : 1;
    }
  }, {
    key: 'setPlaybackRate',
    value: function setPlaybackRate(suggestedRate) {
      if (!this.widgetPlayer) {
        return;
      }

      this.widgetPlayer.setPlaybackRate(suggestedRate);
      this.trigger('ratechange');
    }
  }, {
    key: 'onSeeked',
    value: function onSeeked() {
      this.clearInterval(this.checkSeekedInPauseInterval);
      this.isSeeking = false;

      if (this.wasPausedBeforeSeek) {
        this.pause();
      }

      this.trigger('seeked');
    }
  }, {
    key: 'updateVolume',
    value: function updateVolume() {
      this.volume_ = this.widgetPlayer.getVolume();
      this.trigger('volumechange');
    }
  }, {
    key: 'play',
    value: function play() {
      this.widgetPlayer.playVideo();
    }
  }, {
    key: 'pause',
    value: function pause() {
      this.widgetPlayer.pauseVideo();
    }
  }, {
    key: 'paused',
    value: function paused() {
      return this.widgetPlayer && this.lastState !== YT.PlayerState.PLAYING && this.lastState !== YT.PlayerState.BUFFERING;
    }
  }, {
    key: 'muted',
    value: function muted() {
      return this.muted_;
    }
  }, {
    key: 'volume',
    value: function volume() {
      return this.widgetPlayer && this.widgetPlayer.getVolume() / 100.0;
    }
  }, {
    key: 'setVolume',
    value: function setVolume(percentAsDecimal) {
      if (percentAsDecimal !== this.volume_) {
        this.widgetPlayer.setVolume(percentAsDecimal * 100.0);
        this.updateVolume();
      }
    }
  }, {
    key: 'setMuted',
    value: function setMuted(muted) {
      this.muted_ = muted;
      if (muted) {
        this.volumeBefore_ = this.volume_;
      }
      this.widgetPlayer.setVolume(muted ? 0 : this.volumeBefore_);
      this.updateVolume();
    }
  }]);

  return Youtube;
})(_Externals3['default']);

Youtube.prototype.options_ = {
  api: '//www.youtube.com/iframe_api',
  visibility: 'visible'
};

Youtube.prototype.className_ = 'youtube';

/* Youtube Support Testing -------------------------------------------------------- */

Youtube.isSupported = function () {
  return true;
};

// Add Source Handler pattern functions to this tech
Tech.withSourceHandlers(Youtube);

/*
 * The default native source handler.
 * This simply passes the source to the video element. Nothing fancy.
 *
 * @param  {Object} source   The source object
 * @param  {Flash} tech  The instance of the Flash tech
 */
Youtube.nativeSourceHandler = {};

/**
 * Check if Flash can play the given videotype
 * @param  {String} type    The mimetype to check
 * @return {String}         'probably', 'maybe', or '' (empty string)
 */
Youtube.nativeSourceHandler.canPlayType = function (source) {
  return source.indexOf('youtube') !== -1;
};

/*
 * Check Youtube can handle the source natively
 *
 * @param  {Object} source  The source object
 * @return {String}         'probably', 'maybe', or '' (empty string)
 */
Youtube.nativeSourceHandler.canHandleSource = function (source) {

  // If a type was provided we should rely on that
  if (source.type) {
    return Youtube.nativeSourceHandler.canPlayType(source.type);
  } else if (source.src) {
    return Youtube.nativeSourceHandler.canPlayType(source.src);
  }

  return '';
};

Youtube.nativeSourceHandler.handleSource = function (source, tech) {
  tech.src(source.src);
};

/*
 * Clean up the source handler when disposing the player or switching sources..
 * (no cleanup is needed when supporting the format natively)
 */
Youtube.nativeSourceHandler.dispose = function () {};

Youtube.Events = 'ready,play,playProgress,loadProgress,pause,seek,finish,error'.split(',');

// Register the native source handler
Youtube.registerSourceHandler(Youtube.nativeSourceHandler);

Component.registerComponent('Youtube', Youtube);

Tech.registerTech('Youtube', Youtube);

exports['default'] = Youtube;
module.exports = exports['default'];
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Externals":3,"global/window":8}],8:[function(require,module,exports){
(function (global){
if (typeof window !== "undefined") {
    module.exports = window;
} else if (typeof global !== "undefined") {
    module.exports = global;
} else if (typeof self !== "undefined"){
    module.exports = self;
} else {
    module.exports = {};
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],9:[function(require,module,exports){
/**
 * @file videojs-externals.js
 * Externals (iframe) Media Controller - Wrapper for HTML5 Media API
 */
'use strict';

require('./tech/Externals');

require('./tech/Youtube');

require('./tech/Deezer');

require('./tech/Spotify');

require('./tech/Vimeo');

require('./tech/Soundcloud');

require('./component/sub-poster-image');
},{"./component/sub-poster-image":1,"./tech/Deezer":2,"./tech/Externals":3,"./tech/Soundcloud":4,"./tech/Spotify":5,"./tech/Vimeo":6,"./tech/Youtube":7}]},{},[9])(9)
});