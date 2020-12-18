# Introduction

[![NPM](https://nodei.co/npm/some-random-cat.png)](https://nodei.co/npm/some-random-cat/)

![Total Downloads](https://img.shields.io/npm/dt/some-random-cat?style=flat&label=Downloads) ![Discord](https://img.shields.io/discord/772129415005470740?color=%237289DA&label=Discord&logo=Discord&style=flat) ![npm](https://img.shields.io/npm/v/some-random-cat?style=flat) ![NPM](https://img.shields.io/npm/l/some-random-cat?style=flat) ![GitHub Repo stars](https://img.shields.io/github/stars/aktindo/some-random-cat?style=flat)

Written in JavaScript ![](.gitbook/assets/javascript.svg)   
Edited in Visual Studio Code ![](.gitbook/assets/visualstudiocode.svg) 

Hi there, this is the insider build documentation that has new features documented! See the dev branch in GitHub for the same.

## Installation

To install the package, you would have to make sure that node.js is installed on your machine. After that, you can simply do `npm i some-random-cat` in the terminal where you want to install the package or `npm i some-random-cat -g` to install it globally.

## About

I saw that there were not many good packages for generating random stuff. So I decided to make one.  
A very suitable API to generate random images of cats, dogs and random jokes, facts... A lot more!

## Why?

* Object-oriented
* Speedy and efficient
* Feature-rich
* Easy
* Beginner-Friendly
* Flexible

## Example

Generate a random cat image:

```javascript
const somethingRandom = require('some-random-cat').Random //Import the package
somethingRandom.getCat()
.then(res => {
    console.log(res)
    return
}) // Get the result
.catch(e => {
    console.error(e)
    return
}) // Catch the error
```

## Statistics

* 600+ downloads
* 
{% page-ref page="docs/classes/random.md" %}

