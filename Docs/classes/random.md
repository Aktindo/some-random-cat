---
description: >-
  The class for generating random things such as cat images, dog images, jokes
  and much more!
---

# Random

{% hint style="danger" %}
Please do not instantiate this class! It is fully static. You can access it with `require('some-random-cat').Random`
{% endhint %}

## Methods

#### `.newCat()`  `STATIC`

Random method to generate a random cat image.

| Type | Description |
| :--- | :--- |
| any | URL for the image. |

{% hint style="success" %}
Returns: [`Promise<Pending>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\`\`
{% endhint %}

#### `.newDog()` `STATIC`

Random method to generate a random dog image.

| Type | Description |
| :--- | :--- |
| any | URL for the image. |

{% hint style="success" %}
Returns: [`Promise<Pending>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\`\`
{% endhint %}

#### `.newJoke()` `STATIC`

Random method to generate a random joke.

| Type | Description |
| :--- | :--- |
| any | An object with the title, description and URL |

{% hint style="success" %}
Returns: [`Promise<Pending>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\`\`
{% endhint %}

#### `.newString()` `STATIC`

Random method to generate a random string.

| Parameter | Type | Description |
| :--- | :--- | :--- |
| number | number | The length of the string. |

{% hint style="success" %}
Returns: [`Promise<Pending>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\`\`
{% endhint %}

