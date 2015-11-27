"use strict";

var postcss = require("postcss"),
    expect = require("chai").expect,
    fs = require("fs"),
    path = require("path"),
    plugin = require("../");

var clipPath = {
  "triangle": "polygon(50% 0%, 0% 100%, 100% 100%)",
  "trapezoid": "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
  "parallelogram": "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
  "rhombus": "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
  "pentagon": "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
  "hexagon": "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
  "heptagon": "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
  "octagon": "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
  "nonagon": "polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)",
  "decagon": "polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)",
  "bevel": "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
  "rabbet": "polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)",
  "leftArrow": "polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%)",
  "rightArrow": "polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)",
  "leftPoint": "polygon(25% 0%, 100% 1%, 100% 100%, 25% 100%, 0% 50%)",
  "rightPoint": "polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)",
  "leftChevron": "polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%)",
  "rightChevron": "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)",
  "star": "polygon(50% 0%, 63% 38%, 100% 38%, 69% 59%, 82% 100%, 50% 75%, 18% 100%, 31% 59%, 0% 38%, 37% 38%)",
  "cross": "polygon(10% 25%, 35% 25%, 35% 0%, 65% 0%, 65% 25%, 90% 25%, 90% 50%, 65% 50%, 65% 100%, 35% 100%, 35% 50%, 10% 50%)",
  "message": "polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)",
  "close": "polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)",
  "frame": "polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%)"
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

describe("postcss-clip-path", function () {

  for(var i in clipPath){
    it("sets clip-path: "+ i +" correctly", function(done) {
     test(i, {}, done);
    });
  }

});
