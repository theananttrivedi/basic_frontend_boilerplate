/* Standard DOM Helpers */
// Query Selector
function qs(query) {
  return document.querySelector(query);
}

// Query Selector All
function qsa(query) {
  return document.querySelectorAll(query);
}

// Add Event Listener
function ael({ target, event, callback }) {
  target.addEventListener(event, callback);
}

// Remove Event Listener
function rel({ target, event, callback }) {
  target.removeEventListener(event, callback);
}
