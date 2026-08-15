// MOSAIC APP - Core
(function () {
  "use strict";

  const MosaicApp = {
    version: "1.0.0",

    init() {
      console.log("Mosaic App v1.0.0 started.");

      // Prepare local storage for the app
      if (!localStorage.getItem("mosaic_user")) {
        localStorage.setItem(
          "mosaic_user",
          JSON.stringify({
            name: "",
            points: 0,
            posts: 0
          })
        );
      }
    },

    getUser() {
      return JSON.parse(localStorage.getItem("mosaic_user") || "{}");
    },

    saveUser(user) {
      localStorage.setItem("mosaic_user", JSON.stringify(user));
    }
  };

  window.MosaicApp = MosaicApp;

  document.addEventListener("DOMContentLoaded", function () {
    MosaicApp.init();
  });
})();
