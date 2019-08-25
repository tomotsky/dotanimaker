'use strict';

let animation = [];
let current = 0;
let paintColor = 'black';
let repeatanime;
let komatime = 1000;
let sizetotal = 64;
let sizeclassname = 'dot';
let sizeclassnamep = 'dotp';

const komadraw = (current) => {
  for (let i = 0; i < sizetotal; i++) {
    document.getElementById('d_' + i).style.backgroundColor = animation[current][i];
  }
}

maintable();

const demoplay = () => {
  const demoanime = [
    ["white", "white", "navy", "white", "navy", "white", "navy", "white", "white", "white", "navy", "white", "navy", "white", "navy", "white", "white", "white", "navy", "white", "white", "white", "white", "white", "white", "white", "navy", "navy", "navy", "white", "white", "white", "white", "white", "navy", "white", "white", "navy", "navy", "white", "white", "white", "navy", "white", "white", "white", "white", "white", "white", "white", "navy", "white", "white", "white", "white", "white", "white", "white", "navy", "white", "white", "white", "white", "white"],
    ["white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "maroon", "white", "maroon", "white", "white", "maroon", "white", "white", "maroon", "white", "maroon", "white", "white", "maroon", "white", "white", "maroon", "white", "maroon", "white", "white", "maroon", "white", "white", "white", "white", "white", "white", "white", "maroon", "white", "white", "white", "white", "white", "white", "maroon", "white", "white", "white", "maroon", "maroon", "maroon", "maroon", "white", "white", "white"],
    ["white", "white", "teal", "white", "white", "white", "white", "white", "white", "white", "teal", "white", "white", "white", "white", "white", "white", "white", "teal", "white", "white", "white", "white", "white", "white", "white", "teal", "teal", "teal", "white", "white", "white", "white", "white", "teal", "white", "white", "teal", "teal", "white", "white", "white", "teal", "white", "white", "white", "white", "white", "white", "white", "teal", "white", "white", "white", "white", "white", "white", "white", "teal", "white", "white", "white", "white", "white"],
    ["white", "purple", "purple", "purple", "purple", "purple", "purple", "purple", "white", "white", "white", "white", "white", "white", "white", "purple", "white", "white", "white", "purple", "white", "white", "purple", "white", "white", "white", "white", "purple", "purple", "purple", "white", "white", "white", "white", "white", "purple", "white", "white", "white", "white", "white", "white", "white", "purple", "white", "white", "white", "white", "white", "white", "purple", "white", "white", "white", "white", "white", "white", "white", "purple", "white", "white", "white", "white", "white"],
    ["white", "white", "white", "white", "white", "white", "white", "white", "white", "green", "green", "green", "green", "green", "green", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "green", "green", "green", "green", "green", "green", "green", "green", "white", "white", "white", "white", "white", "white", "white", "white"],
    ["white", "white", "white", "white", "white", "white", "white", "maroon", "white", "maroon", "white", "white", "white", "white", "white", "maroon", "white", "white", "maroon", "white", "white", "white", "maroon", "white", "white", "white", "white", "maroon", "white", "maroon", "white", "white", "white", "white", "white", "white", "maroon", "white", "white", "white", "white", "white", "white", "maroon", "white", "maroon", "white", "white", "white", "white", "maroon", "white", "white", "white", "maroon", "white", "maroon", "maroon", "white", "white", "white", "white", "white", "white"],
    ["white", "white", "white", "white", "white", "white", "white", "olive", "white", "white", "white", "white", "white", "white", "olive", "white", "white", "white", "white", "white", "olive", "olive", "white", "white", "white", "olive", "olive", "olive", "olive", "white", "white", "white", "white", "white", "white", "white", "olive", "white", "white", "white", "white", "white", "white", "white", "olive", "white", "white", "white", "white", "white", "white", "white", "olive", "white", "white", "white", "white", "white", "white", "white", "olive", "white", "white", "white"],
    ["white", "white", "navy", "white", "white", "white", "white", "white", "white", "white", "navy", "white", "white", "white", "white", "white", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "white", "white", "white", "navy", "white", "white", "white", "navy", "white", "white", "white", "navy", "white", "white", "white", "navy", "white", "white", "white", "navy", "white", "white", "white", "navy", "white", "white", "white", "navy", "white", "white", "white", "navy", "white", "white", "navy", "white", "white", "white", "navy", "white", "white"],
    ["white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "black", "black", "black", "black", "black", "black", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white"],
    ["white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white"]];
  let d = 0;
  const repeatdemo = setInterval(function () {
    for (let i = 0; i < 64; i++) {
      document.getElementById('d_' + i).style.backgroundColor = demoanime[d][i];
    }
    d++;
    if (d === demoanime.length) { d = 0; }
  }, 1000);
  const stopdemo = () => {
    clearInterval(repeatdemo);
    animation = [];
    maintable();
    document.body.onkeydown = '';
    document.body.onclick = '';
    }
  document.body.onkeydown = stopdemo;
  document.body.onclick = stopdemo;
}
demoplay();

// dpi
const buttonx8 = document.getElementById('x8');
buttonx8.disabled = true;
buttonx8.onclick = () => {
  if (confirm('サイズの変更。\n今まで作ったものが消えてしまいますが、よろしいですか？')) {
    animation = [];
    sizetotal = 64;
    sizeclassname = 'dot';
    sizeclassnamep = 'dotp'
    maintable();
    seekNum(0);
    buttonx8.disabled = true;
    buttonx8.style.color = 'orange';
    buttonx8.style.textShadow = '0 0 8px orange';
    buttonx16.disabled = false;
    buttonx16.style.color = 'silver';
    buttonx16.style.textShadow = 'none';
  } else {
    return;
  }
}

const buttonx16 = document.getElementById('x16');
buttonx16.onclick = () => {
  if (confirm('サイズの変更。\n今まで作ったものが消えてしまいますが、よろしいですか？')) {
    animation = [];
    sizetotal = 256;
    sizeclassname = 'dot16';
    sizeclassnamep = 'dotp16';
    maintable();
    seekNum(0);
    buttonx8.disabled = false;
    buttonx8.style.color = 'silver';
    buttonx8.style.textShadow = 'none';
    buttonx16.disabled = true;
    buttonx16.style.color = 'orange';
    buttonx16.style.textShadow = '0 0 8px orange';
  } else {
    return;
  }
}

// fps
function komatimeChange() {
  komatime = document.getElementById('komatime').value;
}

// maintable
function maintable() {
  while (document.getElementById('maintable').firstChild) {
    document.getElementById('maintable').removeChild(document.getElementById('maintable').firstChild);
  }
  for (let i = 0; i < sizetotal; i++) {
    const dot = document.createElement('span');
    dot.id = 'd_' + i;
    dot.className = sizeclassname;
    dot.onclick = () => {
      dot.style.backgroundColor = paintColor;
      animation[current][i] = paintColor;
    }
    document.getElementById('maintable').appendChild(dot);
  }
  let koma = [];
  for (let i = 0; i < sizetotal; i++) {
    koma.push('white');
  }
  animation.push(koma);
  komadraw(current);
}

// colortable
const colors = ['black', 'white', 'gray', 'silver', 'blue', 'navy', 'teal', 'green', 'lime', 'aqua', 'yellow', 'red', 'fuchsia', 'olive', 'purple', 'maroon'];
for (let i = 0; i < 16; i++) {
  const colorbox = document.createElement('span');
  colorbox.className = 'colorbox';
  colorbox.style.backgroundColor = colors[i];
  colorbox.id = colors[i];
  colorbox.onclick = () => {
    const lastColor = paintColor;
    paintColor = colorbox.style.backgroundColor;
    document.getElementById(paintColor).className = 'colorbox2';
    document.getElementById(lastColor).className = 'colorbox';
  }
  document.getElementById('colortable').appendChild(colorbox);
  document.getElementById(paintColor).className = 'colorbox2';
}

// seek
function seekNum(n) {
  document.getElementById('seekbar').max = animation.length;
  document.getElementById('seekbar').value = n + 1;
  document.getElementById('seeknum').innerText = n + 1 + '/' + animation.length;
}

function seekchoice() {
  const num = document.getElementById('seekbar').value;
  current = num - 1;
  komadraw(current);
  document.getElementById('seeknum').innerText = num + '/' + animation.length;
}

// prev
const prevkoma = document.getElementById('prev');
prevkoma.onclick = () => {
  if (current === 0) {
    return;
  } else {
    current--;
    komadraw(current);
  }
  seekNum(current);
}

// add
const addkoma = document.getElementById('addkoma');
addkoma.onclick = () => {
  const newkoma = Array.from(animation[current]);
  animation.splice(current + 1, 0, newkoma);
  current++;
  komadraw(current);
  seekNum(current);
}

// delete
const delkoma = document.getElementById('delkoma');
delkoma.onclick = () => {
  if (animation.length > 1) {
    if (confirm('このコマを削除しますか？')) {
      animation.splice(current, 1);
      if (current > 0) { current--; }
      komadraw(current);
      seekNum(current);
      } else {
        return;
      }
  } else {
    return;
  }
}

// next
const nextkoma = document.getElementById('next');
nextkoma.onclick = () => {
  if (current === animation.length - 1) {
    return;
  } else {
    current++;
    komadraw(current);
    seekNum(current);
  }
}

// play
const playanime = document.getElementById('play');
playanime.onclick = () => {
  if (sizetotal === 64) {
    buttonx16.disabled = true;
    buttonx16.style.color = 'silver';
    buttonx16.style.textShadow = 'none';
  } else if (sizetotal === 256) {
    buttonx8.disabled = true;
    buttonx8.style.color = 'silver';
    buttonx8.style.textShadow = 'none';
  }
  prevkoma.disabled = true;
  addkoma.disabled = true;
  delkoma.disabled = true;
  nextkoma.disabled = true;
  playanime.disabled = true;
  for (let i = 0; i < sizetotal; i++) {
    document.getElementById('d_' + i).className = sizeclassnamep;
  }
  let k = 0;
  repeatanime = setInterval(function () {
    console.log(animation[k]);
    komadraw(k);
    seekNum(k);
    k++;
    k = k % animation.length;
  }, komatime);
}

// stop
const stopanime = document.getElementById('stop');
stopanime.onclick = () => {
  if (sizetotal === 64) {
    buttonx16.disabled = false;
  } else if (sizetotal === 256) {
    buttonx8.disabled = false;
  }
  prevkoma.disabled = false;
  addkoma.disabled = false;
  delkoma.disabled = false;
  nextkoma.disabled = false;
  playanime.disabled = false;
  clearInterval(repeatanime);
  for (let i = 0; i < sizetotal; i++) {
    document.getElementById('d_' + i).className = sizeclassname;
  }
  current = 0;
  komadraw(current);
  seekNum(current);
}