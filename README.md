# some-random-cat
![Total Downloads](https://img.shields.io/npm/dt/some-random-cat?label=Downloads?style=for-the-badge)
![Discord](https://img.shields.io/discord/772129415005470740?color=%237289DA&label=Discord&logo=Discord?style=for-the-badge)
![npm](https://img.shields.io/npm/v/some-random-cat?style=for-the-badge)
![NPM](https://img.shields.io/npm/l/some-random-cat?style=for-the-badge)
![GitHub Repo stars](https://img.shields.io/github/stars/aktindo/some-random-cat?style=social?style=for-the-badge)

A very suitable API to generate random images of cats, dogs and random jokes, facts... A lot more! 
 
**Author:** Aktindo 

**Dependencies:** axios 

**Versions:** v1.0.5 (current) 

## How to use it? (Example) 
Generate a random picture of cat:
```javascript
const somethingRandom = require('some-random-cat')
somethingRandom.Random.newCat()
.then(res => console.log(res)) // The function returns a pending promise and can be logged using .then
.catch(e => console.error(e)) // Catch the error
```
 ## Documentation
[Click Here](https://github.com/Aktindo/some-random-cat/blob/main/Docs/SUMMARY.md)
## New features
Thinking of adding mroe random things.... Suggestions are welcome!