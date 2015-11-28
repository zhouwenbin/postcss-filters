"use strict";

var postcss = require("postcss");
var filters = {
  "Eureka": "brightness(1.6) contrast(1.1) grayscale(0) hue-rotate(0deg) invert(0.1) saturate(0.9) sepia(0)",
  "London": "brightness(1.3) contrast(0.8) grayscale(0.9) hue-rotate(0deg) invert(0) saturate(1) sepia(0)",
  "FlipFlop": "brightness(1.3) contrast(1.1) grayscale(0) hue-rotate(180deg) invert(0) saturate(2) sepia(0)",
  "Copper": "brightness(2.4) contrast(0.8) grayscale(0) hue-rotate(0deg) invert(0.3) saturate(1) sepia(1)",
  "LoFi": "brightness(1.5) contrast(9.99) grayscale(0.6) hue-rotate(0deg) invert(0.23) saturate(1) sepia(0.2)",
  "Night": "brightness(0.5) contrast(1.7) grayscale(0) hue-rotate(0deg) invert(0.13) saturate(0.1) sepia(0.2)",
  "Rocky": "brightness(1.3) contrast(1.4) grayscale(0) hue-rotate(0deg) invert(0.07) saturate(0.5) sepia(0)",
  "Karl": "brightness(1.1) contrast(2.4) grayscale(1) hue-rotate(0deg) invert(0.32) saturate(0) sepia(0.11)",
  "Gold": "brightness(1.2) contrast(1.2) grayscale(0) hue-rotate(0deg) invert(0) saturate(1) sepia(1)",
  "Silver": "brightness(1.9) contrast(1.6) grayscale(0) hue-rotate(0deg) invert(0.2) saturate(0) sepia(0)",
  "Butterfly": "brightness(1.3) contrast(1.2) grayscale(0) hue-rotate(0deg) invert(0.1) saturate(1.8) sepia(0)",
  "Introvert": "brightness(1.1) contrast(1.2) grayscale(0) hue-rotate(0deg) invert(0.9) saturate(0.7) sepia(0.3)"
};

module.exports = postcss.plugin("postcss-filters", function () {
  return function (css) {

    // Run handlers through all relevant CSS decls
    css.walkDecls("filter", function(decl) {

      if (!filters[decl.value]){
        return;
      }

      decl.value = decl.value.replace(decl.value, filters[decl.value]);
    });

  };
});