# redux-ava

> Write [AVA](https://github.com/sindresorhus/ava) tests for [redux](https://github.com/reactjs/redux) pretty quickly

[![Build Status](https://img.shields.io/travis/sotojuan/redux-ava.svg?style=flat-square)](https://travis-ci.org/sotojuan/redux-ava)

**Note:** Tests that use this module and fail will not have [`power-assert`](https://github.com/power-assert-js/power-assert) enhancements. This is a current AVA issue, but it'll be fixed in the future.

## Install

```
npm install --save-dev redux-ava
```

## API

### actionTest(actionCreator, type, [description])

#### actionCreator

Type: `function`

The action creator you want to test.

#### type

Type: `object`

The type you expect your action creator to return.

#### description

Type: `string`

Optional test description.

### reducerTest(reducer, stateBefore, actionCreator, stateAfter, [description])

#### reducer

Type: `function`

The reducer you want to test.

#### stateBefore

Type: `object`

The state you expect before the reducer is ran.

#### actionCreator

Type: `function`

The action creator you want to give to the reducer.

#### stateAfter

Type: `object`

The state you expect after the reducer is ran.

#### description

Type: `string`

Optional test description.

## Examples

This is an AVA port of [tape-redux](https://github.com/KaleoSoftware/tape-redux). For more documentation, check there.

Let's test an action creator:

```js
import test from 'ava'
import {actionTest} from 'redux-ava'

import {openMenu} from '../actions'

test('openMenu action', actionTest(openMenu, {type: 'OPEN_MENU'}))
```

And now a reducer:

```js
import test from 'ava'
import {reducerTest} from 'redux-ava'

import app from '../reducers'
import {openMenu} from '../actions'

test('app reducer handles openMenu', reducerTest(
  app,
  {menuOpen: false},
  openMenu,
  {menuOpen: true}
))
```

## License

MIT © [Juan Soto](http://juansoto.me)
