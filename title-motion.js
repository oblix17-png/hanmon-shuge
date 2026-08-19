/**
 * Pointer parallax for titles on the formal library page.
 *
 * The script only writes custom properties. It deliberately leaves each
 * element's existing transform untouched so the visual layer can compose the
 * motion with its own typography treatment.
 */
(function titleMotion() {
  'use strict';

  var HERO_SELECTOR = '#heroTitle';
  var SECTION_SELECTOR = '.section-heading h2';
  var MOTION_CLASS = 'has-pointer-title-motion';
  var RESET_VARS = {
    '--title-shift-x': '0px',
    '--title-shift-y': '0px',
    '--title-tilt': '0deg'
  };

  function ready(callback) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback, { once: true });
    } else {
      callback();
    }
  }

  ready(function init() {
    var elements = [];
    var activeElements = new Set();
    var pointer = { x: 0, y: 0, inside: false };
    var frame = 0;
    var observer;
    var supportsPointer = window.matchMedia && window.matchMedia('(pointer: fine)');
    var reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');

    function isDisabled() {
      return !supportsPointer || !supportsPointer.matches ||
        !reducedMotion || reducedMotion.matches ||
        document.body.classList.contains('intro-open') ||
        document.hidden;
    }

    function setReset(element) {
      Object.keys(RESET_VARS).forEach(function setVariable(name) {
        element.style.setProperty(name, RESET_VARS[name]);
      });
      element.classList.remove(MOTION_CLASS);
    }

    function resetAll() {
      pointer.inside = false;
      elements.forEach(function resetElement(item) {
        item.current.x = 0;
        item.current.y = 0;
        item.current.tilt = 0;
        item.target.x = 0;
        item.target.y = 0;
        item.target.tilt = 0;
        setReset(item.element);
      });
      if (frame) {
        cancelAnimationFrame(frame);
        frame = 0;
      }
    }

    function formalPageReady() {
      return !document.body.classList.contains('intro-open') && !document.hidden;
    }

    function schedule() {
      if (!frame && !isDisabled() && formalPageReady() && activeElements.size) {
        frame = requestAnimationFrame(tick);
      }
    }

    function tick() {
      frame = 0;
      if (isDisabled() || !formalPageReady()) {
        resetAll();
        return;
      }

      var settling = false;
      activeElements.forEach(function update(item) {
        var nextX = item.current.x + (item.target.x - item.current.x) * 0.13;
        var nextY = item.current.y + (item.target.y - item.current.y) * 0.13;
        var nextTilt = item.current.tilt + (item.target.tilt - item.current.tilt) * 0.13;
        item.current.x = nextX;
        item.current.y = nextY;
        item.current.tilt = nextTilt;
        item.element.style.setProperty('--title-shift-x', nextX.toFixed(3) + 'px');
        item.element.style.setProperty('--title-shift-y', nextY.toFixed(3) + 'px');
        item.element.style.setProperty('--title-tilt', nextTilt.toFixed(3) + 'deg');
        item.element.classList.add(MOTION_CLASS);
        if (Math.abs(item.target.x - nextX) > 0.01 ||
            Math.abs(item.target.y - nextY) > 0.01 ||
            Math.abs(item.target.tilt - nextTilt) > 0.01) {
          settling = true;
        }
      });

      if (settling || pointer.inside) schedule();
    }

    function updateTargets(event) {
      if (isDisabled() || !formalPageReady()) {
        resetAll();
        return;
      }
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.inside = true;
      var x = (event.clientX / Math.max(window.innerWidth, 1)) * 2 - 1;
      var y = (event.clientY / Math.max(window.innerHeight, 1)) * 2 - 1;

      activeElements.forEach(function setTarget(item) {
        item.target.x = x * item.strength.x;
        item.target.y = y * item.strength.y;
        item.target.tilt = x * item.strength.tilt;
      });
      schedule();
    }

    function handlePointerOut(event) {
      if (event.relatedTarget === null) resetAll();
    }

    function handleVisibility() {
      if (document.hidden) resetAll();
      else schedule();
    }

    function handleCapabilityChange() {
      if (isDisabled()) resetAll();
      else schedule();
    }

    function register(selector, strength) {
      document.querySelectorAll(selector).forEach(function addElement(element) {
        var item = {
          element: element,
          strength: strength,
          current: { x: 0, y: 0, tilt: 0 },
          target: { x: 0, y: 0, tilt: 0 }
        };
        elements.push(item);
        setReset(element);
        if (observer) observer.observe(element);
      });
    }

    if (!supportsPointer || !reducedMotion) return;

    if (typeof IntersectionObserver !== 'function') return;

    observer = new IntersectionObserver(function observe(entries) {
      entries.forEach(function updateVisibility(entry) {
        var item = elements.find(function findItem(candidate) {
          return candidate.element === entry.target;
        });
        if (!item) return;
        if (entry.isIntersecting && entry.intersectionRatio > 0) {
          activeElements.add(item);
        } else {
          activeElements.delete(item);
          item.current.x = 0;
          item.current.y = 0;
          item.current.tilt = 0;
          item.target.x = 0;
          item.target.y = 0;
          item.target.tilt = 0;
          setReset(item.element);
        }
      });
      schedule();
    }, { threshold: 0 });

    // Hero titles get a restrained drift; section headings use a quieter one.
    register(HERO_SELECTOR, { x: 14, y: 10, tilt: 1.2 });
    register(SECTION_SELECTOR, { x: 7, y: 5, tilt: 0.65 });
    if (!elements.length) return;

    document.addEventListener('pointermove', updateTargets, { passive: true });
    document.addEventListener('pointerout', handlePointerOut, { passive: true });
    document.addEventListener('visibilitychange', handleVisibility);
    window.addEventListener('blur', resetAll, { passive: true });
    window.addEventListener('resize', resetAll, { passive: true });
    supportsPointer.addEventListener('change', handleCapabilityChange);
    reducedMotion.addEventListener('change', handleCapabilityChange);
  });
}());
