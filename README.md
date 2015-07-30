# jsxr (JSX Real) v1.2.0

> JSX transform for rendering real DOM nodes without React. Written in ES6.

## Installation

```bash
npm install jsxr
```

## Example Usage

### jsxPragma
```js
import jsxr from 'jsxr';

// The jsxPragma can also be configured in Babel
/** @jsx jsxr */

// Note that custom components should be written in PascalCase.
// Otherwise, the Babel JSX transpiler will pass the variable name
// as a string instead of a reference to the component.
const Letters = (
  <ul>
    {['A', 'B', 'C'].map(item => <li>{ item }</li>)}
  </ul>
)

const Container = (
  <div className='letters'><Letters /></div>
);
```

### Browserify + Babelify
```js
import fs from 'fs';
import browserify from 'browserify';
import babelify from 'babelify';

browserify('./script.js', { debug: true })
  .transform(babelify.configure({
    jsxPragma: 'jsxr'
  }))
  .bundle()
  .on('error', function (err) {
    console.log(`Error : ${ err.message }`);
  })
  .pipe(fs.createWriteStream('bundle.js'));

// script.js
// jsxr variable must be defined
import jsxr from 'jsxr';
```

### Gulp + Babel + Mocha
```js
// gulpfile.babel.js
import gulp from 'gulp';
import babel from 'babel/register';
import mocha from 'gulp-mocha';

gulp.task('test', function() {
  return gulp.src(['test/**/*.js'])
    .pipe(mocha({
      compilers: {
        js: babel({
          jsxPragma: 'jsxr'
        })
      }
    }));
});

// test/**/*.js
// jsxr variable must be defined
import jsxr from 'jsxr';
```

## Acknowledgments

Inspired by [callumlocke/plain-jsx](https://github.com/callumlocke/plain-jsx).
It adds support for custom component elements and using DOM property names
(e.g. className instead of class), in order to add consistency for
React developers.

## License

The MIT License (MIT)

Copyright (c) 2015 Casey R. White

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
