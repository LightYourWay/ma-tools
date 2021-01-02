# MA Tools

:warning: **OPEN ALPHA** &rarr; software is not showready yet

a feature rich utility for MA3/2 to allow operators to take advantage of LUA easily.

## installation

The plugin can currently not be directly installed or tested by grandMA3/2 operators because there is **no release version** yet. Developers can `git clone` this repository and it's dependencies and transpile the plugin by themselves. - _see [#developers](#developers)_

## usage / possible future featureset

- `ma.cli` - commandline tools to navigate the consoles cli easily
- `ma.ui` - UI Tools to build great user experiences with e.g. Layout Views
- `ma.op` - easy to integrate tools for MA3/2 Operators
- `ma.cfg` - configuration helper functions
- `ma.utils` - generic helper ulilities mostly for internal use
- `ma.loop` - a main event loop kind of aproach to hook functions into for repeated execution.

## developers

### prerequisites

First up some dependencies have to be `git` cloned that are currently under development and thus not yet pushed to `npm` as packages. To make `ma-tools` work, you need

- [grandMA3-types](https://github.com/LightYourWay/grandMA3-types) - TypeScript definitions for the grandMA3 Lua API
- [grandMA3-tstl-plugin](https://github.com/LightYourWay/grandMA3-tstl-plugin) - a TypeScriptToLua plugin that allows for direct export to grandMA3 compatible Lua files

as well as `ma-tools` itself. After installing the project with `npm install` you can link `grandMA3-types` and `grandMA3-tstl-plugin` to your project via [`npm link`](https://docs.npmjs.com/cli/v6/commands/npm-link).

### transpile

You can either transpile once with

```sh
npm run build
```

or setup a watchdog for develoment with

```sh
npm run dev
```

### import to MA3

Currently importing the plugin into the MA3 is done manually by copy / pasting the transpiled code from `dist/ma.lua` into an empty plugin component in MA3's plugin pool.

## Bugs, Missing Features & Ideas

- [ ] :sparkles: literally every feature is missing
- [ ] :bulb: thousand ideas for the plugin are on the horizon &rarr; share yours by creating a GitHub issue or collaborating on the project!
  <!-- - [ ] :bug: **BUG DESCRIPTION** &rarr; SOLUTION -->
  <!-- - [ ] :sparkles: MISSING FEATURE -->
  <!-- - [ ] :bulb: IDEA -->
