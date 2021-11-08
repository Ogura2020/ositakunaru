/*
button.addEventListener("drag", function() {
    audio.play();
});
*/

/*
const sound_kaitenn = new Howl({
    src: ['audio/moving-cursor-3.mp3']
});

sound_kaitenn.play();

const kaitenn = document.getElementById('drag').addEventListener('drag', (e) => {
    if (sound.playing()) {
        sound.stop();
        console.log('otoganaru')
    } else {
        sound.play();
    }
});
*/

//以下コピペ
/* fun little example using GreenSock's Draggable: https://www.greensock.com/draggable/ */
var knob = document.getElementById("knob");
var needsRotationUpdate = false;
var sections = 3;

//when the user drags the knob, we must update the scroll position. We're using the special scrollProxy object of Draggable because it allows us to overscroll (normal browser behavior won't allow it to scroll past the top/bottom). 
function onRotateKnob() {
  needsRotationUpdate = false;
}

//this method updates the knob rotation, syncing it to wherever the content's scroll position is
function updateRotation() {
  needsRotationUpdate = false;
}

//if the user flicks/spins/drags with momentum, a tween is created, but if the user interacts again before the tween is done, we must kill that tweens (so as not to fight with the user). This method kills any tweens of the knob or the content's scrollProxy.
function killTweens() {
  TweenLite.killTweensOf(knob);
}

//whenever the content gets scrolled (like by using the mousewheel or dragging the content), we simply set a flag indicating we need to update the knob's rotation. We use a "tick" handler later to actually trigger the update because that optimizes performance since ticks happen on requestAnimationFrame and we want to avoid thrashing

TweenLite.ticker.addEventListener("tick", function() {
  if (needsRotationUpdate) {
    updateRotation();
  }
});

//create the knob Draggable
Draggable.create("#drag", {
  type:"rotation",
  throwProps:true,
  edgeResistance:0.85,
  bounds:{minRotation:0, maxRotation:63},
  onDragStart:killTweens,
  onDrag: onRotateKnob,
  onThrowUpdate: onRotateKnob,
  snap: function(endValue) {
    var step = 63 / (sections - 1);
    return Math.round( endValue / step) * step;
  }
});


//要るのか分からんやつgrab the Draggable instances for the content and the knob, and store them in variables so that we can reference them in other functions very quickly. 
var dragKnob = Draggable.get(knob);

