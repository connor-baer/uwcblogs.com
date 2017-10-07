/**
 * Throttle a function
 *
 * @param {Function} func  The function to throttle.
 * @param {number} limit  The number of milliseconds to throttle invocations to.
 *
 * @returns {Function} Returns the new throttled function.
 */
function throttle(func, limit) {
  let timer = null;

  return function() {
    let context = this,
      args = arguments;

    clearTimeout(timer);
    timer = setTimeout(function() {
      func.apply(context, args);
    }, limit);
  };
}

/**
 * Show an error message
 *
 * @param  {Object} error  Error object
 */
function error(err) {
  alertify.closeLogOnClick(true).error(err.message);
}

/**
 * Set a cookie
 *
 * @param {String} cookieName  Name of the cookie
 * @param {String} cookieValue  Value of the cookie
 * @param {Integer} nDays  Number of days after which the cookie will expire, default: 1
 */
function setCookie(cookieName, cookieValue, nDays = 1) {
  const today = new Date();
  const expire = new Date();

  expire.setTime(today.getTime() + 3600000 * 24 * nDays);
  document.cookie =
    cookieName +
    '=' +
    escape(cookieValue) +
    ';expires=' +
    expire.toGMTString() +
    '; path=/';
}

/**
 * Get a cookie
 *
 * @param  {String} cookieName  Name of the cookie
 *
 * @return {String}  Value of the cookie
 */
function getCookie(cookieName) {
  let value = '; ' + document.cookie;
  let parts = value.split('; ' + cookieName + '=');

  if (parts.length === 2) {
    return parts
      .pop()
      .split(';')
      .shift();
  }
}

/**
 * Toggle the dark theme
 *
 * @param  {Boolean} darkMode  Turn darkmode on/off, optional
 */
function toggleDarkness(darkMode) {
  darkCookie = getCookie('darkMode') === 'true' ? true : false;
  darkMode = typeof darkMode !== 'undefined' ? darkMode : !darkCookie;

  const html = document.documentElement;

  if (darkMode && !darkCookie) {
    html.classList.add('theme-dark');
    alertify.closeLogOnClick(true).log('Darkmode turned on.');
  } else if (!darkMode && darkCookie) {
    html.classList.remove('theme-dark');
    alertify.closeLogOnClick(true).log('Darkmode turned off.');
  }
  setCookie('darkMode', darkMode, 1);
}

/**
 * Automatically toggle dark theme (ambient light)
 *
 * @param  {object} event  Ambient light event
 */
window.addEventListener(
  'devicelight',
  throttle(event => {
    if (event.value < 20) {
      toggleDarkness(true);
    } else {
      toggleDarkness(false);
    }
  }, 1000)
);
