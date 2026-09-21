/**
 * Pointer parallax for titles on the formal library page.
 *
 * The script only writes custom properties. It deliberately leaves each
 * element's existing transform untouched so the visual layer can compose the
 * motion with its own typography treatment.
 */
(function titleMotion() {
  'use strict';

  var MOTION_CLASS = 'has-pointer-title-motion';
  var MOTION_GROUPS = [
    {
      selector: '#heroTitle',
      strength: { x: 14, y: 10, tilt: 1.05 }
    },
    {
      selector: '#classicsGatewayTitle',
      strength: { x: 11, y: 7.5, tilt: 0.78 }
    },
    {
      selector: '.section-heading h2, .special__header h2, #miniProgramTitle',
      strength: { x: 8, y: 5.5, tilt: 0.55 }
    },
    {
      selector: '.zone-visual__title strong',
      strength: { x: 6.5, y: 4.5, tilt: 0.42 }
    },
    {
      selector: '.club-intro h3, .zone-detail__header h3, #rokidFeatureTitle, #volumeTitle',
      strength: { x: 5, y: 3.5, tilt: 0.32 }
    }
  ];
  var RESET_VARS = {
    '--title-shift-x': '0px',
    '--title-shift-y': '0px',
    '--title-tilt': '0deg'
  };
  var EASING = 0.13;
  var SETTLE_THRESHOLD = 0.01;

  function ready(callback) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback, { once: true });
    } else {
      callback();
    }
  }

  ready(function init() {
    var elements = [];
    var elementItems = new WeakMap();
    var activeElements = new Set();
    var pointer = { x: 0, y: 0, available: false };
    var frame = 0;
    var observer;
    var intro = document.getElementById('intro');
    var supportsPointer = window.matchMedia && window.matchMedia('(pointer: fine)');
    var reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');

    if (!supportsPointer || !reducedMotion || typeof IntersectionObserver !== 'function') return;

    function openingIsFinished() {
      return !document.body.classList.contains('intro-open') && (!intro || intro.hidden);
    }

    function isDisabled() {
      return !supportsPointer.matches || reducedMotion.matches ||
        document.hidden || !openingIsFinished();
    }

    function setReset(item) {
      item.current.x = 0;
      item.current.y = 0;
      item.current.tilt = 0;
      item.target.x = 0;
      item.target.y = 0;
      item.target.tilt = 0;
      Object.keys(RESET_VARS).forEach(function setVariable(name) {
        item.element.style.setProperty(name, RESET_VARS[name]);
      });
      item.element.classList.remove(MOTION_CLASS);
    }

    function resetAll() {
      pointer.available = false;
      elements.forEach(setReset);
      if (frame) {
        cancelAnimationFrame(frame);
        frame = 0;
      }
    }

    function schedule() {
      if (!frame && !isDisabled() && activeElements.size) {
        frame = requestAnimationFrame(tick);
      }
    }

    function tick() {
      frame = 0;
      if (isDisabled()) {
        resetAll();
        return;
      }

      var settling = false;
      activeElements.forEach(function update(item) {
        var deltaX = item.target.x - item.current.x;
        var deltaY = item.target.y - item.current.y;
        var deltaTilt = item.target.tilt - item.current.tilt;

        if (Math.abs(deltaX) <= SETTLE_THRESHOLD &&
            Math.abs(deltaY) <= SETTLE_THRESHOLD &&
            Math.abs(deltaTilt) <= SETTLE_THRESHOLD) {
          item.current.x = item.target.x;
          item.current.y = item.target.y;
          item.current.tilt = item.target.tilt;
        } else {
          item.current.x += deltaX * EASING;
          item.current.y += deltaY * EASING;
          item.current.tilt += deltaTilt * EASING;
          settling = true;
        }

        item.element.style.setProperty('--title-shift-x', item.current.x.toFixed(3) + 'px');
        item.element.style.setProperty('--title-shift-y', item.current.y.toFixed(3) + 'px');
        item.element.style.setProperty('--title-tilt', item.current.tilt.toFixed(3) + 'deg');
        item.element.classList.add(MOTION_CLASS);

        if (!pointer.available && !settling &&
            item.current.x === 0 && item.current.y === 0 && item.current.tilt === 0) {
          item.element.classList.remove(MOTION_CLASS);
        }
      });

      if (settling) schedule();
    }

    function updateTarget(item) {
      item.target.x = pointer.x * item.strength.x;
      item.target.y = pointer.y * item.strength.y;
      item.target.tilt = pointer.x * item.strength.tilt;
    }

    function updateTargets(event) {
      if (isDisabled()) {
        resetAll();
        return;
      }

      pointer.x = (event.clientX / Math.max(window.innerWidth, 1)) * 2 - 1;
      pointer.y = (event.clientY / Math.max(window.innerHeight, 1)) * 2 - 1;
      pointer.available = true;
      activeElements.forEach(updateTarget);
      schedule();
    }

    function settleToRest() {
      pointer.available = false;
      activeElements.forEach(function clearTarget(item) {
        item.target.x = 0;
        item.target.y = 0;
        item.target.tilt = 0;
      });
      schedule();
    }

    function handlePointerOut(event) {
      if (event.relatedTarget === null) settleToRest();
    }

    function handleVisibility() {
      if (document.hidden) resetAll();
    }

    function handleCapabilityChange() {
      if (isDisabled()) {
        resetAll();
      } else if (pointer.available) {
        activeElements.forEach(updateTarget);
        schedule();
      }
    }

    function addMediaListener(query, listener) {
      if (typeof query.addEventListener === 'function') {
        query.addEventListener('change', listener);
      } else if (typeof query.addListener === 'function') {
        query.addListener(listener);
      }
    }

    function register(selector, strength) {
      document.querySelectorAll(selector).forEach(function addElement(element) {
        if (elementItems.has(element)) return;
        var item = {
          element: element,
          strength: strength,
          current: { x: 0, y: 0, tilt: 0 },
          target: { x: 0, y: 0, tilt: 0 }
        };
        elementItems.set(element, item);
        elements.push(item);
        setReset(item);
        observer.observe(element);
      });
    }

    observer = new IntersectionObserver(function observe(entries) {
      entries.forEach(function updateVisibility(entry) {
        var item = elementItems.get(entry.target);
        if (!item) return;
        if (entry.isIntersecting && entry.intersectionRatio > 0) {
          activeElements.add(item);
          if (pointer.available && !isDisabled()) updateTarget(item);
        } else {
          activeElements.delete(item);
          setReset(item);
        }
      });
      schedule();
    }, { threshold: 0 });

    MOTION_GROUPS.forEach(function registerGroup(group) {
      register(group.selector, group.strength);
    });
    if (!elements.length) return;

    document.addEventListener('pointermove', updateTargets, { passive: true });
    document.addEventListener('pointerout', handlePointerOut, { passive: true });
    document.addEventListener('visibilitychange', handleVisibility);
    window.addEventListener('blur', resetAll, { passive: true });
    window.addEventListener('resize', resetAll, { passive: true });
    addMediaListener(supportsPointer, handleCapabilityChange);
    addMediaListener(reducedMotion, handleCapabilityChange);
  });
}());
