# Better Typescript Plugin

> ONLY USE THIS PLUGIN WHEN TARGETING ONLY MODERN BROWSERS CODE ONLY TRANSPILES TO ES2015!

## Install
1. Add this module to your dev-deps.
2. Register it in buildModules.
3. add typescript to your dev-deps.

## What changes are made?
Babel-loader is REPLACED with esbuild-loader wich is MUCH faster. But doesn't typecheck your code!

So also your JS code is transpiled wich esbuild.

