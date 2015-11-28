# PostCSS filters
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

[PostCSS][PostCSS] PostCSS plugin for a collection of CSS filter combos from [filter.css](http://simurai.com/filter.css/).

```css
.foo {
  filter: Eureka;
}
```

```css
.foo {
  filter: brightness(1.6) contrast(1.1) grayscale(0) hue-rotate(0deg) invert(0.1) saturate(0.9) sepia(0);
}
```

--

### Value

* `Eureka`
* `London`
* `FlipFlop`
* `Copper`
* `LoFi`
* `Night`
* `Rocky`
* `Karl`
* `Gold`
* `Silver`
* `Butterfly`
* `Introvert`

--

### Usage

```js
postcss([ require('postcss-filters') ])
```

See [PostCSS][PostCSS] docs for examples for your environment.

--

### License

MIT © [zhouwenbin](http://zhouwenbin.com)

--

### Thanks

[filter.css](http://simurai.com/filter.css/) 

[npm-image]: https://badge.fury.io/js/postcss-filters.svg
[npm-url]: https://npmjs.org/package/postcss-filters
[travis-image]: https://travis-ci.org/zhouwenbin/postcss-filters.svg?branch=master
[travis-url]: https://travis-ci.org/zhouwenbin/postcss-filters
[daviddm-image]: https://david-dm.org/zhouwenbin/postcss-filters.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/zhouwenbin/postcss-filters
[PostCSS]: https://github.com/postcss/postcss
