(function(w, d) {
  var dbFactory = function() {
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

  if (!window['db']) {
    window['db'] = db;
  }

  var intervalId = setInterval(() => {
    if (db.get('a')) {
      alert('You won!');
      db.set('gameOver', true);

      if (db.get('gameOver')) {
        clearInterval(intervalId)
      }
    }
  }, 1500);
})(window, document);
