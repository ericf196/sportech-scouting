require('./bootstrap');
import dncPlayer from 'base/components/global/video/player.vue';
import Canva from './p5js/ui/Canva'
import Timeline from './p5js/ui/Timeline'
import ActionManager from './p5js/actions/ActionManager'
import Action from './p5js/actions/Action'
import VideoTimeMarker from './p5js/ui/VideoTimeMarker'
import VeeValidate, {Validator} from 'vee-validate';
import newActionModal from './components/modals/newActionModal.vue';
import editActionModal from './components/modals/editActionModal.vue';
import TimeConverter from './p5js/utils/TimeConverter'

Vue.use(VeeValidate);

window.vm = new Vue({
    el: '#app-layout',
    components: {
        dncPlayer,
        newActionModal,
        editActionModal,
    },
    data: {
        source: {},
        sketch: null,
        actionManager: null,
        newActionOpen: false,
        timeUtil: null,
        selectedAction: null,
        editActionOpen: false,
        playerTime: 0,
        offset: {
            start: 120,
            end: 465
        }
    },
    created()
    {
        this.source = window['source'];
        var that = this;
        this.sketch = (p)=> {
            let width = document.getElementById('timeline').offsetWidth;
            let height = document.getElementById('timeline').offsetHeight;
            let endTime = 336;
            let startTime = 0;
            let zoomFactor = 1;
            let isDragged;
            let timeline = null;
            let canva = null;
            let videoCurrentTime = 0;
            let videoTimeMarker = null;
            let setup = false;
            let zoomFactorChange = false;
            let initZoomFactor = 1;
            let duration = 0;
            let secondWidth = 0;
            let timelineWidth = 0;
            let colWidth = 0;
            p.setup = function () {
                var width = document.getElementById('timeline').offsetWidth;
                var myCanvas = p.createCanvas(width, 400);
                myCanvas.parent('timeline');
                canva = new Canva(p.width, p.height, zoomFactor);
                timeline = new Timeline(p.width, p.height, endTime, zoomFactor);
                videoTimeMarker = new VideoTimeMarker(p.width, p.height, endTime, zoomFactor);
                that.actionManager = new ActionManager([], endTime, p.height);
                p.colorMode(p.RGB, 255, 255, 255, 100)
                canva.setup();
                var zoomInBtn = document.getElementById('zoomIn');
                var zoomOutBtn = document.getElementById('zoomOut');
                var newActionBtn = document.getElementById('newAction');
                var removeActionBtn = document.getElementById('removeAction');
                zoomInBtn.addEventListener('click', zoomIn);
                zoomOutBtn.addEventListener('click', zoomOut);
                newActionBtn.addEventListener('click', newAction);
                removeActionBtn.addEventListener('click', pRemoveAction);
                p.frameRate(24);
            }

            p.draw = function () {
                videoCurrentTime = that.$refs.player.api().currentTime();
                var endVideo = that.$refs.player.api().duration();
                if (!endVideo) {
                    canva.draw();
                    p.fill(p.color(0, 0, 0, 100));
                    p.textSize(20);
                    p.textStyle(p.BOLD);
                    p.textAlign(p.CENTER);
                    p.text('Analyzing Video...', p.width / 2, p.height / 2);
                } else {
                    startTime = timeline.getStartTime();
                    that.actionManager.setStartTime(startTime);
                    timeline.setZoomFactor(zoomFactor);
                    timeline.setEndTime(endVideo);
                    colWidth = timeline.calculateColWidth();
                    timelineWidth = width - 30;
                    secondWidth = colWidth / 10;
                    that.actionManager.setSecondWidth(secondWidth);
                    that.actionManager.setTimelineWidth(timelineWidth);
                    that.actionManager.setEndVideo(endVideo);
                    canva.draw();
                    timeline.draw(that.actionManager, videoCurrentTime);
                    that.actionManager.draw(zoomFactorChange, isDragged);
                    zoomFactorChange = false;
                    videoTimeMarker.draw(videoCurrentTime, secondWidth, colWidth, startTime, that.actionManager);
                }
            }

            function zoomIn(event) {
                event.preventDefault();
                zoomFactor += 1
                zoomFactorChange = true;
            }

            function zoomOut(event) {
                event.preventDefault();
                if (zoomFactor > initZoomFactor) {
                    zoomFactor -= 1
                    zoomFactorChange = true;
                }
            }

            function newAction() {
                that.openNewActionModal();
            }

            function pRemoveAction() {
                if (that.actionManager.selectedAction) {
                    that.removeAction(that.actionManager.selectedAction)
                }
            }

            p.mouseDragged = function (event) {
                if (that.actionManager) {
                    that.actionManager.mouseDraggedAction(p.mouseX, p.mouseY)
                    timeline.drag(p.mouseX, p.mouseY, that.actionManager);
                }
            }

            p.mousePressed = function () {
                if (that.actionManager)
                    isDragged = that.actionManager.mousePressedAction(p.mouseX, p.mouseY)
            }

            p.mouseMoved = function () {
                if (that.actionManager)
                    that.actionManager.mouseOverAction(p.mouseX, p.mouseY)
            }

            p.mouseReleased = function () {
                if (that.actionManager)
                    that.actionManager.endMouseDraggedAction()
            }
        }
        window.p = new p5(this.sketch);
    },
    mounted(){
        this.$refs.player.api().play();
    },
    methods: {
        openNewActionModal(){
            this.$refs.player.api().pause();
            this.newActionOpen = true;
            this.playerTime = Math.floor(this.$refs.player.api().currentTime());
        },
        openEditActionModal(action){
            this.selectedAction = action;
            this.editActionOpen = true;
        },
        toHHMMSS(secs) {
            return TimeConverter.toHHMMSS(secs)
        },
        addAction(action, event)
        {
            this.newActionOpen = false;
            if (this.actionManager && action) {
                var act = new Action(action.start, action.end, action.text, action.color, action.textColor);
                this.actionManager.add(act);
            }
        },
        editAction(action, event)
        {
            this.editActionOpen = false;
            if (action && this.actionManager) {
                var index = this.actionManager.actions.indexOf(this.selectedAction);
                this.actionManager.actions[index] = action;
            }
        },
        removeAction(action){
            var index = this.actionManager.actions.indexOf(action);
            this.actionManager.actions[index].actionMenu.remove();
            this.actionManager.actions.splice(index, 1);
        },
        formatSeconds(seconds){
            return TimeConverter.toHHMMSS(seconds)
        }
    }
});


