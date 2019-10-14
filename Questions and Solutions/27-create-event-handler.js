// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

//SOLUTION 1:
class Events {
  constructor() {
    this.events = {};
  }
  // Register an event handler
  on(eventName, callback) {
    if(this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if(this.events[eventName]) {
      this.events[eventName].forEach(callback => callback());
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    if(this.events[eventName]) {
      this.events[eventName] = [];
    }
  }
}