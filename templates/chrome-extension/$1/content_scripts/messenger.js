var port = chrome.extension.connect({});

(function() {
  var $ = function(FN) {
    return function(action, args, callback) {
      (args = args || {}).action = action;
      FN(args, typeof callback === 'function' ?
          callback : void 0);
    };
  };
  RUNTIME = $(chrome.runtime.sendMessage.bind(chrome.runtime));
  PORT = $(port.postMessage.bind(port));
})();

port.onMessage.addListener(function(request) {
  if (Actions[request.action]) {
    Actions[request.action](request);
  }
});

chrome.extension.onMessage.addListener(function(request) {
  if (Actions[request.action]) {
    Actions[request.action](request);
  }
});
