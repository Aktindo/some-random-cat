---
description: An example of how to generate a random cat image!
---

# Random Cat Image

## Code

```javascript
const somethingRandom = require('some-random-cat')
somethingRandom.Random.newCat()
.then(res => console.log(res)) // The function returns a pending promise and can be logged using .then
.catch(e => console.error(e)) // Catch the error
```

## Output

![](../.gitbook/assets/cat.png)

