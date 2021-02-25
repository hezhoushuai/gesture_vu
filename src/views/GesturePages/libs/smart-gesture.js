const smartGesture = require('smart-gesture');
const renderGesture = function (el, { value: options }) {
  const { self } = options

  const finalOptions = {};
  Object.keys(options).forEach(function (key) {
    key !== 'self' && (finalOptions[key] = options[key]);
  });

  if (!self.canvas) {
    finalOptions.el = el;
    finalOptions.onSwipe = self['smart-gesture-onswipe'];
    finalOptions.onGesture = self['smart-gesture-ongesture'];
    self.canvas = self.$smartGesture = new smartGesture(finalOptions);
  } else {
    self.canvas.refresh(options);
  }
}


module.exports = {
  deep: true,
  bind: renderGesture,
  update: renderGesture
};
