/**
 * centerADiv - Centers a target div inside a parent using different CSS techniques.
 * 
 * Usage:
 *   Call one of the exported functions and provide parent and child element selectors.
 * 
 * Example:
 *   centerWithFlexbox('#parent', '#child');
 */

/**
 * Centers a div using Flexbox.
 * @param {string} parentSelector - Selector for the parent element.
 * @param {string} childSelector - Selector for the child element.
 */
function centerWithFlexbox(parentSelector, childSelector) {
  const parent = document.querySelector(parentSelector);
  if (parent) {
    parent.style.display = 'flex';
    parent.style.justifyContent = 'center';
    parent.style.alignItems = 'center';
    parent.style.height = parent.style.height || '300px';
  }
}

/**
 * Centers a div using CSS Grid.
 * @param {string} parentSelector - Selector for the parent element.
 * @param {string} childSelector - Selector for the child element.
 */
function centerWithGrid(parentSelector, childSelector) {
  const parent = document.querySelector(parentSelector);
  if (parent) {
    parent.style.display = 'grid';
    parent.style.placeItems = 'center';
    parent.style.height = parent.style.height || '300px';
  }
}

/**
 * Centers a div horizontally using margin auto.
 * @param {string} childSelector - Selector for the child element.
 */
function centerWithMarginAuto(childSelector) {
  const child = document.querySelector(childSelector);
  if (child) {
    child.style.marginLeft = 'auto';
    child.style.marginRight = 'auto';
    child.style.display = 'block';
    // Optionally set width if not set
    if (!child.style.width) {
      child.style.width = '100px';
    }
  }
}

/**
 * Centers a div using absolute positioning.
 * @param {string} parentSelector - Selector for the parent element.
 * @param {string} childSelector - Selector for the child element.
 */
function centerWithAbsolute(parentSelector, childSelector) {
  const parent = document.querySelector(parentSelector);
  const child = document.querySelector(childSelector);
  if (parent && child) {
    parent.style.position = 'relative';
    parent.style.height = parent.style.height || '300px';
    child.style.position = 'absolute';
    child.style.top = '50%';
    child.style.left = '50%';
    child.style.transform = 'translate(-50%, -50%)';
  }
}

// Export functions for external use
export {
  centerWithFlexbox,
  centerWithGrid,
  centerWithMarginAuto,
  centerWithAbsolute
};
