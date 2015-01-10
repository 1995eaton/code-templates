LOG = console.log.bind(console);

window.Utils = {
  waitForLoad: function(callback, constructor) {
    if ((document.readyState === 'interactive' || document.readyState === 'complete') && document.activeElement) {
      return callback.call(constructor);
    }
    window.setTimeout(function() {
      Utils.waitForLoad(callback, constructor);
    }, 5);
  }
};
