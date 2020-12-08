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
It will be soon available in v1.1.5

## New features
Soon in v1.1 , A new module called math will be implemented too!