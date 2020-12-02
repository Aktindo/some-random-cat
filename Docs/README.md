---
description: to Some Random Cat!
---

# Introduction

{% hint style="danger" %}
Please move to Docs [v1.0.5](https://cat-5.gitbook.io/some-random-cat/)! This documentation is no longer supported and is deprecated. Contains code that is no longer supported in the latest version.
{% endhint %}

This is the official **deprecated** documentation for some-random-cat. Docs version \(v1.0.0\)

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
const somethingRandom = require('some-random-cat')
const Random = new somethingRandom()
Random.newCat()
.then(res => console.log(res)) // The function returns a pending promise and can be logged using .then
.catch(e => console.error(e)) // Catch the error
```

## Statistics

* 200 weekly downloads
* and... growing!

{% page-ref page="classes/random.md" %}

