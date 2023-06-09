(function() {
  function handleError(error) {
    console.error("An error occurred:", error);
  }

  function wrapFunctionInErrorHandler(func) {
    return function(...args) {
      try {
        return func.apply(this, args);
      } catch (error) {
        handleError(error);
      }
    };
  }

  window.wrapFunctionInErrorHandler = wrapFunctionInErrorHandler;
})();