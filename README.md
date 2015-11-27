# PostCSS clip-path
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

[PostCSS][PostCSS] PostCSS plugin that adds `clip-path` value from [clippy](http://bennettfeely.com/clippy/).

```css
.foo {
  clip-path: triangle;
}
```

```css
.foo {
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}
```

--

### Value

* `triangle`
* `trapezoid`
* `parallelogram`
* `rhombus`
* `pentagon`
* `hexagon`
* `heptagon`
* `octagon`
* `nonagon`
* `decagon`
* `bevel`
* `rabbet`
* `leftArrow`
* `rightArrow`
* `leftPoint`
* `rightPoint`
* `leftChevron`
* `rightChevron`
* `star`
* `cross`
* `message`
* `close`
* `frame`

--

### Usage

```js
postcss([ require('postcss-clip-path') ])
```

See [PostCSS][PostCSS] docs for examples for your environment.

--

### License

MIT © [zhouwenbin](http://zhouwenbin.com)

[npm-image]: https://badge.fury.io/js/postcss-clip-path.svg
[npm-url]: https://npmjs.org/package/postcss-clip-path
[travis-image]: https://travis-ci.org/zhouwenbin/postcss-clip-path.svg?branch=master
[travis-url]: https://travis-ci.org/zhouwenbin/postcss-clip-path
[daviddm-image]: https://david-dm.org/zhouwenbin/postcss-clip-path.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/zhouwenbin/postcss-clip-path
[PostCSS]: https://github.com/postcss/postcss
