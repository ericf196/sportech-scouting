/**
 * videojs-dncoffset
 * @version 0.0.0
 * @copyright 2016 Pedro Gorrin <pedro.gorrin@ngncloud.com>
 * @license MIT
 */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.videojsDncoffset = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

exports.__esModule = true;

var _video = (typeof window !== "undefined" ? window['videojs'] : typeof global !== "undefined" ? global['videojs'] : null);

var _video2 = _interopRequireDefault(_video);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Default options for the plugin.
var defaults = {};

/**
 * Function to invoke when the player is ready.
 *
 * This is a great place for your plugin to initialize itself. When this
 * function is called, the player will have its DOM and child components
 * in place.
 *
 * @function onPlayerReady
 * @param    {Player} player
 * @param    {Object} [options={}]
 */
var onPlayerReady = function onPlayerReady(player, options) {
    player.addClass('vjs-dncoffset');
};

/**
 * A video.js plugin.
 *
 * In the plugin function, the value of `this` is a video.js `Player`
 * instance. You cannot rely on the player being in a "ready" state here,
 * depending on how the plugin is invoked. This may or may not be important
 * to you; if not, remove the wait for "ready"!
 *
 * @function dncoffset
 * @param    {Object} [options={}]
 *           An object of options left to the plugin author to define.
 */
var dncoffset = function dncoffset(options) {
    var _this = this;

    this.ready(function () {
        var Player;
        _this._offsetStart = options.startOffset || 0;
        _this._offsetEnd = options.endOffset || 0;
        _this._restartBeginning = options.restart_beginning || false;

        Player = _this.constructor;
        if (!Player.__super__ || !Player.__super__.__offsetInit) {
            Player.__super__ = {
                __offsetInit: true,
                duration: Player.prototype.duration,
                currentTime: Player.prototype.currentTime,
                bufferedPercent: Player.prototype.bufferedPercent,
                remainingTime: Player.prototype.remainingTime
            };

            Player.prototype.duration = function () {
                if (this._offsetEnd > 0) {
                    return this._offsetEnd - this._offsetStart;
                }
                return Player.__super__.duration.apply(this) - this._offsetStart;
            };

            Player.prototype.currentTime = function (seconds) {
                if (seconds !== undefined) {
                    return Player.__super__.currentTime.call(this, seconds + this._offsetStart) - this._offsetStart;
                }
                return Player.__super__.currentTime.apply(this) - this._offsetStart;
            };

            Player.prototype.remainingTime = function () {
                var curr = this.currentTime();
                if (curr < this._offsetStart) {
                    curr = 0;
                }
                return this.duration() - curr;
            };

            Player.prototype.startOffset = function () {
                return this._offsetStart;
            };

            Player.prototype.endOffset = function () {
                if (this._offsetEnd > 0) {
                    return this._offsetEnd;
                }
                return this.duration();
            };
        }

        _this.on('timeupdate', function () {
            var curr = this.currentTime();
            if (curr < 0) {
                this.currentTime(0);
                this.play();
            }
            if (this._offsetEnd > 0 && curr > this._offsetEnd - this._offsetStart) {
                this.pause();
                if (!this._restartBeginning) {
                    this.currentTime(this._offsetEnd - this._offsetStart);
                } else {
                    this.trigger('loadstart');
                    this.currentTime(0);
                }
            }
        });
    });
};

// Register the plugin with video.js.
_video2.default.plugin('dncoffset', dncoffset);

// Include the version number.
dncoffset.VERSION = '0.0.0';

exports.default = dncoffset;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});