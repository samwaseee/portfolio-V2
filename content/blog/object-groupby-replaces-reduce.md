---
title: "Object.groupBy(): one less reduce() to write"
date: "2026-11-12"
summary: "Grouping an array by a key used to mean reduce(), an empty object and an if check. JavaScript now does it in one call."
tags: ["javascript", "web-development"]
cover: "/images/blog/object-groupby.webp"
---

Turns out JavaScript already has a built-in solution for something I used to write manually.

Imagine you have a list of products and want to group them by category.

My usual approach would involve `reduce()`, an empty object, and a little bit of checking whether a category already exists.

Something like this:

```js
const grouped = products.reduce((acc, product) => {
  const category = product.category;

  if (!acc[category]) {
    acc[category] = [];
  }

  acc[category].push(product);

  return acc;
}, {});
```

It works. No complaints.

But JavaScript has `Object.groupBy()` now:

```js
const grouped = Object.groupBy(
  products,
  product => product.category
);
```

That's it.

It returns an object where each key represents a group and its value is an array of matching elements.

A few things worth knowing:

* It's part of modern JavaScript (ES2024).
* It works with any iterable.
* The grouping callback determines the key for each item.
* It returns a null-prototype object, so don't assume it behaves exactly like a regular `{}` in every situation.

In practice, that last point means:

```js
const grouped = Object.groupBy(products, (product) => product.category);

grouped.hasOwnProperty("electronics"); // TypeError: not a function
`${grouped}`; // TypeError: Cannot convert object to primitive value

Object.hasOwn(grouped, "electronics"); // true
"electronics" in grouped; // true
```

If your keys aren't strings, `Map.groupBy()` works the same way and returns a `Map`.

Not a revolutionary discovery. Just one less thing to write manually.

Sometimes the best coding improvement is finding out the language already does the boring part for you.

Docs: [Object.groupBy() on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy)