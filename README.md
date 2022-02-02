# react-counter

![cypress version](https://img.shields.io/badge/cypress-9.3.1-brightgreen) ![cypress-react-selector version](https://img.shields.io/badge/cypress--react--selector-2.3.15-brightgreen) ![react version](https://img.shields.io/badge/react-17.0.2-brightgreen) [![ci](https://github.com/bahmutov/react-counter/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/bahmutov/react-counter/actions/workflows/ci.yml)

Access the internal state of React components from Cypress E2E tests

![A test screenshot](./images/test.png)

Read the blog post [Access React Components From Cypress E2E Tests](https://glebbahmutov.com/blog/react-state-from-e2e-tests/). See [spec.js](./cypress/integration/spec.js) and other files in the [cypress/integration](./cypress/integration) folder.

## Install

```
$ npm i
```

Launch the server and open Cypress test runner

```
$ npm run dev
```

## Specs

- [fun-component.js](./cypress/integration/fun-component.js) plays with the functional counter from [src/FunCounter.js](./src/FunCounter.js)
- [click-state.js](./cypress/integration/click-state.js) spies on the `setState` method, see video [A Little Taste Of React App Actions](https://youtu.be/7tzstwfuA6g)

## Small print

Author: Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt; &copy; 2022

- [@bahmutov](https://twitter.com/bahmutov)
- [glebbahmutov.com](https://glebbahmutov.com)
- [blog](https://glebbahmutov.com/blog)
- [videos](https://www.youtube.com/glebbahmutov)
- [presentations](https://slides.com/bahmutov)
- [cypress.tips](https://cypress.tips)
- [Cypress Advent 2021](https://cypresstips.substack.com/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/react-counter/issues) on Github

## MIT License

Copyright (c) 2022 Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt;

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
