## Install packages global
```
npm i -g gulp
```

## Package in gulp config

- [gulp-jshint](https://github.com/spalger/gulp-jshint) (Read config in .jshinrc and check style of code)
- [jshint-stylish](https://github.com/sindresorhus/jshint-stylish) (Stylish reporter for JSHint)
- [gulp-jscs](https://github.com/jscs-dev/gulp-jscs) (Read config in .jscsrc and it want make sure you have curly braces, no multi-lined string, or no mixed,...)
- [gulp-inject](https://www.npmjs.com/package/gulp-inject) (It will inject css, js into html file, no more manual editing of your html!)
- [wiredep](https://github.com/taptapship/wiredep) (Wire Bower dependencies to your source code.)
- [gulp-nodemon](https://www.npmjs.com/package/gulp-nodemon) (It  looks almost exactly like regular nodemon, but it's made for use with gulp tasks)

## Tasks

- style: Make sure style code is valid
- inject: Inject css, js to html files.
- serve: Run 2 tasks above, after will config enviroment, watching code, and create port for web app.

## References
 - https://expressjs.com/en/guide/routing.html

