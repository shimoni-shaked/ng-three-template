// zone.js hooks onto requestAnimateFrame, and runs angular’s change detection on each tick.
// This is very expensive when we have a massive use of requestAnimateFrame function and you will notice a big performance degradation.
// This will tell zone.js to not hook these events.

(window as any).__Zone_disable_requestAnimationFrame = true;
(window as any).__zone_symbol__BLACK_LISTED_EVENTS = [
  'scroll',
  'mousemove',
  'touchmove',
];
