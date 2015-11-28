"use strict";

var postcss = require("postcss"),
    expect = require("chai").expect,
    fs = require("fs"),
    path = require("path"),
    plugin = require("../");

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


var test = function (fixture, opts, done) {
  var input = fixture + ".css",
      expected = fixture + ".expected.css";

  input = fs.readFileSync(path.join(__dirname, "fixtures", input), "utf8");
  expected = fs.readFileSync(path.join(__dirname, "fixtures", expected), "utf8");

  postcss([ plugin(opts) ])
    .process(input)
    .then(function (result) {
      expect(result.css).to.eql(expected);
      console.log(result.warnings());
      expect(result.warnings()).to.be.empty;
    done();
  }).catch(function (error) {
    done(error);
  });

};

describe("postcss-filters", function () {

  for(var i in filters){
    it("sets filter: "+ i +" correctly", function(done) {
     test(i, {}, done);
    });
  }

});
