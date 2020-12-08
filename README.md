# some-random-cat
![Total Downloads](https://img.shields.io/npm/dt/some-random-cat?label=Downloads)

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
[Click Here]('./Docs/SUMMARY.md)
## New features
Thinking of adding mroe random things.... Suggestions are welcome!