---
title: Standard formatting in Javascript
author: Dustin Deus
date: '2017-06-03'
categories:
  - javascript
tags:
  - javascript
---

Formatting in Javascript must not be pain.
You don't have to use any linting configurations files. **No** ~~.eslintrc~~, ~~.jshintrc~~, or ~~.jscsrc~~ files to manage. Beside linting it also warns you about programmer errors early e.g unused variables, unhandled errors and more. Give StandardJs a try!

## Installation

~~~javascript
npm install standard --save-dev
~~~

## Editor support
- vscode-standardjs
- vscode-standardjs-snippets

[Other editors](https://github.com/feross/standard#are-there-text-editor-plugins)

## Using
- Format your code with `standard`
- Fix code with `standard -fix`

## Examples
Simple integration in your build scripts.
~~~javascript
  "scripts": {
    "test": "standard && nyc mocha"
  }
~~~

## References
- https://github.com/feross/standard
- https://standardjs.com/