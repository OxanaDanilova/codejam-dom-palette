/* eslint-disable no-undef */

var currentMode = 'none'
/// Hot keys///////////////

function hotKeys (event) {
  var id = event.keyCode - 48
  if (event.shiftKey) {
    if (id === 1) { // Shift+1
      currentMode = 'paintBucket'
      notDraggable()
      window.alert('Paint mode is on')
    }
    if (id === 2) { // Shift+2
      notDraggable()
      currentMode = 'chooseColor'
      window.alert('Color picker mode is on')
    }
    if (id === 3) { // Shift+3
      currentMode = 'mode'
      draggable()
      window.alert('Move mode is on')
    }
    if (id === 4) { // Shift+4
      currentMode = 'transform'
      notDraggable()
      window.alert('Transform mode is on')
    }
  }
}

const body = document.getElementById('body')
body.addEventListener('keyup', hotKeys)

/// Colors/////////

const currentColor = document.getElementById('cur-col-btn')
var current = getComputedStyle(currentColor).backgroundColor

const prevColor = document.getElementById('prev-col-btn')
var prev = getComputedStyle(prevColor).backgroundColor

/// PaintBucket////////////////
const paintBucket = document.getElementById('paint-btn')

paintBucket.addEventListener('click', function (event) {
  currentMode = 'paintBucket'
  notDraggable()
  window.alert('Paint mode is on')
})

/// ChooseColor////////////////////
const chooseColor = document.getElementById('choose-btn')
chooseColor.addEventListener('click', function (event) {
  currentMode = 'chooseColor'
  notDraggable()
  chooseColor.style.backgroundColor = current
  prevColor.style.backgroundColor = prev
  window.alert('Color picker mode is on')
})

/// Click Event  ///////////////////////
function clickEvent (event) {
  if (currentMode === 'chooseColor') {
    // prev = current
    var temp = currentColor.style.backgroundColor

    var computedStyle = window.getComputedStyle(event.target)
    current = computedStyle.backgroundColor
    currentColor.style.backgroundColor = current
    prevColor.style.backgroundColor = temp
  }
}

document.addEventListener('click', clickEvent)

/// Remove Click Event for chooseColor
chooseColor.removeEventListener('click', clickEvent)

/// Transform   ////////////////////////
const transform = document.getElementById('transform-btn')

transform.addEventListener('click', function (event) {
  currentMode = 'transform'
  notDraggable()
  window.alert('Transform mode is on')
})

///  Move   ///////

///  Make "Draggable" ////

function draggable () {
  document.getElementById('1').setAttribute('draggable', 'true')
  document.getElementById('2').setAttribute('draggable', 'true')
  document.getElementById('3').setAttribute('draggable', 'true')
  document.getElementById('4').setAttribute('draggable', 'true')
  document.getElementById('5').setAttribute('draggable', 'true')
  document.getElementById('6').setAttribute('draggable', 'true')
  document.getElementById('7').setAttribute('draggable', 'true')
  document.getElementById('8').setAttribute('draggable', 'true')
  document.getElementById('9').setAttribute('draggable', 'true')
}

/// Make Not-draggable ///

function notDraggable () {
  document.getElementById('1').setAttribute('draggable', 'false')
  document.getElementById('2').setAttribute('draggable', 'false')
  document.getElementById('3').setAttribute('draggable', 'false')
  document.getElementById('4').setAttribute('draggable', 'false')
  document.getElementById('5').setAttribute('draggable', 'false')
  document.getElementById('6').setAttribute('draggable', 'false')
  document.getElementById('7').setAttribute('draggable', 'false')
  document.getElementById('8').setAttribute('draggable', 'false')
  document.getElementById('9').setAttribute('draggable', 'false')
}

const move = document.getElementById('move-btn')

move.addEventListener('click', function (event) {
  currentMode = 'mode'
  draggable()
  window.alert('Move mode is on')
})

/// Canvas///////////////

function painting (e) {
  if (currentMode === 'paintBucket') {
    e.target.style.backgroundColor = current
  }
};

function transformation (e) {
  if (currentMode === 'transform') {
    e.target.classList.toggle('circle')
  }
}

function dragStarting (e) {
  document.body.appendChild(e.target)

  e.target.style.position = 'absolute'
  e.target.style.zIndex = 1000

  e.target.style.left = e.pageX - e.target.offsetWidth / 2 + 'px'
  e.target.style.top = e.pageY - e.target.offsetHeight / 2 + 'px'

  console.log('pos kursora ' + e.pageX + ',' + e.pageY)
  console.log('pos elem ' + e.target.style.left + ',' + e.target.style.top)
}

function dragStop (e) {
  e.target.style.left = e.pageX - e.target.offsetWidth / 2 + 'px'
  e.target.style.top = e.pageY - e.target.offsetHeight / 2 + 'px'
  console.log('pos elem v konce' + e.target.style.left + ';' + e.target.style.top)
  console.log('pos kursora v konce' + e.pageX + ',' + e.pageY)
}

///   Figure Event//////
const figure1 = document.getElementById('1')
figure1.addEventListener('click', painting)

figure1.addEventListener('click', transformation)

figure1.addEventListener('dragstart', dragStarting)

figure1.addEventListener('dragend', dragStop)

///   Figure Event//////
const figure2 = document.getElementById('2')
figure2.addEventListener('click', painting)

figure2.addEventListener('click', transformation)

figure2.addEventListener('dragstart', dragStarting)

figure2.addEventListener('dragend', dragStop)

///   Figure Event//////
const figure3 = document.getElementById('3')
figure3.addEventListener('click', painting)

figure3.addEventListener('click', transformation)

figure3.addEventListener('dragstart', dragStarting)

figure3.addEventListener('dragend', dragStop)

///   Figure Event//////
const figure4 = document.getElementById('4')
figure4.addEventListener('click', painting)

figure4.addEventListener('click', transformation)

figure4.addEventListener('dragstart', dragStarting)

figure4.addEventListener('dragend', dragStop)

///   Figure Event//////
const figure5 = document.getElementById('5')
figure5.addEventListener('click', painting)

figure5.addEventListener('click', transformation)

figure5.addEventListener('dragstart', dragStarting)

figure5.addEventListener('dragend', dragStop)

///   Figure Event//////
const figure6 = document.getElementById('6')
figure6.addEventListener('click', painting)

figure6.addEventListener('click', transformation)

figure6.addEventListener('dragstart', dragStarting)

figure6.addEventListener('dragend', dragStop)

///   Figure Event//////
const figure7 = document.getElementById('7')
figure7.addEventListener('click', painting)

figure7.addEventListener('click', transformation)

figure7.addEventListener('dragstart', dragStarting)

figure7.addEventListener('dragend', dragStop)

///   Figure Event//////
const figure8 = document.getElementById('8')
figure8.addEventListener('click', painting)

figure8.addEventListener('click', transformation)

figure8.addEventListener('dragstart', dragStarting)

figure8.addEventListener('dragend', dragStop)

///   Figure Event//////
const figure9 = document.getElementById('9')
figure9.addEventListener('click', painting)

figure9.addEventListener('click', transformation)

figure9.addEventListener('dragstart', dragStarting)

figure9.addEventListener('dragend', dragStop)
