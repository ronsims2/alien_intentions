(function(w, d) {
  let babelFish = {
  ' ': 'A',
  '~': 'B',
  '@': 'C',
  '#': 'D',
  '$': 'E',
  '%': 'F',
  '^': 'G',
  '&': 'H',
  '*': 'I',
  '(': 'J',
  ')': 'K',
  '-': 'L',
  '_': 'M',
  '[': 'N',
  ']': 'O',
  '{': 'P',
  '}': 'Q',
  ';': 'R',
  ':': 'S',
  '+': 'T',
  '=': 'U',
  ',': 'V',
  '.': 'W',
  '2': 'X',
  '1': 'Y',
  '?': 'Z',
  '3': ' ',
  '0': '.',
  '|': ','
 };

 let msg = 'Boys and Girls Club, we came to take Kanye West home.';
 let msg2 = '';

 // let fishify = (bf) => {
 //   let fishBabel = {};
 //
 //   for (x in bf) {
 //     fishBabel[bf[x]] = x;
 //   }
 //
 //   return fishBabel;
 // }
 //
 // let fishBabel = fishify(babelFish);
 //
 // let translation = '';
 // let translation2 = '';
 // for (let i = 0; i < msg.length; i++) {
 //   translation += fishBabel[msg[i].toUpperCase()];
 //   console.log(translation);
 // }
 //
 // for (let j = 0; j < msg2.length; j++) {
 //   translation2 += babelFish[msg2[j].toUpperCase()];
 //   console.log(msg2[j].toUpperCase(), translation2);
 // }

let translateAlien = (text) => {
  let translation = '';

  for (let i = 0; i < text.length; i++) {
    translation += babelFish[text[i]];
  }

  let alienMonitor = d.querySelector('#alienMonitor');
  alienMonitor.innerHTML = translation;

  return translation
};

if (!w['translateAlien']) {
  w['translateAlien'] = translateAlien;
}


  let dbFactory = function() {
    var info = {
      a: null,
      b: null,
      c: null,
      gameOver: false
    };

    return {
      get: function(k) {
        return info[k];
      },
      set: function(k, v) {
        info[k] = v;
      }
    }
  }

  var db = new dbFactory();

  if (!w['db']) {
    w['db'] = db;
  }

  let level1 = () => {
    let masterPlan = d.querySelector('#masterPlan');

    if (masterPlan.value === 'area51') {
      let alienMonitor = d.querySelector('#alienMonitor');
      alienMonitor.classList.add('monitor-on');
      alienMonitor.classList.remove('monitor-off');
    }
  }

  let bonus = (text) => {
    let msg = w.prompt('Send a message to the Aliens') || '';
    w.alert('The aliens have received your message: ' + msg.toUpperCase() + '\n' + String(new Date()));
  }

  if (!w['transmitAlienMessage']) {
    w['transmitAlienMessage']  = bonus;
  }

  let intervalId = setInterval(() => {
    level1();
    if (db.get('a')) {
      alert('You won!');
      db.set('gameOver', true);

      if (db.get('gameOver')) {
        clearInterval(intervalId)
      }
    }
  }, 1000);
})(window, document);
