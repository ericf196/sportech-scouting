import videojs from 'video.js';

// Default options for the plugin.
const defaults = {};

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
const onPlayerReady = (player, options) => {
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
const dncoffset = function (options) {
    this.ready(() => {
        var Player;
        this._offsetStart = options.startOffset || 0;
        this._offsetEnd = options.endOffset || 0;
        this._restartBeginning = options.restart_beginning || false;

        Player = this.constructor;
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

        this.on('timeupdate', function () {
            var curr = this.currentTime();
            if (curr < 0) {
                this.currentTime(0);
                this.play();
            }
            if (this._offsetEnd > 0 && (curr > (this._offsetEnd - this._offsetStart))) {
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
videojs.plugin('dncoffset', dncoffset);

// Include the version number.
dncoffset.VERSION = '__VERSION__';

export default dncoffset;
