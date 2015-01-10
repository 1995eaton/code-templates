chrome.runtime.onMessage.addListener(function(request, sender, callback) {
  var action = request.action;
  if (typeof RuntimeActions[action] === 'function') {
    RuntimeActions[action](sender, callback);
  }
});

chrome.extension.onConnect.addListener(function(port) {
  port.onMessage.addListener(function(request) {
    var action = request.action;
    if (typeof PortActions[action] === 'function') {
      PortActions[action](request);
    }
  });
});
