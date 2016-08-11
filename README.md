# angular firebase-ui
[![Build Status](https://travis-ci.org/ackushiw/ng2-firebase-ui.svg?branch=master)](https://travis-ci.org/ackushiw/ng2-firebase-ui)
[![npm version](https://badge.fury.io/js/ng2-firebase-ui.svg)](http://badge.fury.io/js/ng2-firebase-ui)
[![devDependency Status](https://david-dm.org/ackushiw/ng2-firebase-ui/dev-status.svg)](https://david-dm.org/ackushiw/ng2-firebase-ui#info=devDependencies)
[![GitHub issues](https://img.shields.io/github/issues/ackushiw/ng2-firebase-ui.svg)](https://github.com/ackushiw/ng2-firebase-ui/issues)
[![GitHub stars](https://img.shields.io/github/stars/ackushiw/ng2-firebase-ui.svg)](https://github.com/ackushiw/ng2-firebase-ui/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/ackushiw/ng2-firebase-ui/master/LICENSE)

## Demo
https://ackushiw.github.io/ng2-firebase-ui/demo/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#licence)

## About

An unofficial library for ui components for angular2 apps using angularfire2

## Installation

Install through npm:
```
npm install --save ng2-firebase-ui
```

Then use it in your app like so:

```typescript
import {Component} from '@angular/core';
import {HelloWorld} from 'ng2-firebase-ui';

@Component({
  selector: 'demo-app',
  directives: [HelloWorld],
  template: '<hello-world></hello-world>'
})
export class DemoApp {}
```

You may also find it useful to view the [demo source](https://github.com/ackushiw/ng2-firebase-ui/blob/master/demo/demo.ts).

### Usage without a module bundler
```
<script src="node_modules/ng2-firebase-ui/ng2-firebase-ui.js"></script>
<script>
    // everything is exported ng2FirebaseUi namespace
</script>
```

## Documentation
All documentation is auto-generated from the source via typedoc and can be viewed here:
https://ackushiw.github.io/ng2-firebase-ui/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM (should come with)
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server
Run `npm start` to start a development server on port 8000 with auto reload + tests. 

### Testing
Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
npm run release
```

## License

MIT
