# HashMap Implementation in JavaScript

A custom implementation of a HashMap data structure using separate chaining with linked lists for collision handling.

## Features

* Custom hash function
* Collision handling using linked lists
* Dynamic resizing and rehashing
* Load factor support
* Basic HashMap operations:

  * `set`
  * `get`
  * `has`
  * `remove`
  * `clear`
  * `length`
  * `keys`
  * `values`
  * `entries`



## How It Works

This HashMap stores key-value pairs inside buckets.

* Each bucket can contain:

  * `null`
  * or a linked list of nodes
* When collisions occur, values are chained together using linked lists.
* When the load factor exceeds `0.75`, the HashMap automatically:

  * doubles its capacity
  * rehashes all existing entries
  * redistributes them into new buckets



## Project Structure

```txt id="y0thw7"
.
├── hashMap.js
├── main.js
└── README.md
```


## Example Usage

```js id="5nlrm0"
import { HashMap } from "./hashMap.js";

const map = new HashMap();

map.set("name", "Wolf");
map.set("age", 30);

console.log(map.get("name"));
// Wolf

console.log(map.has("age"));
// true

console.log(map.entries());
// [ ['name', 'Wolf'], ['age', 30] ]

map.remove("age");

console.log(map.has("age"));
// false
```



## API

### `set(key, value)`

Adds a new key-value pair or updates an existing key.

```js id="6zw6v7"
map.set("language", "JavaScript");
```

---

### `get(key)`

Returns the value associated with a key.

```js id="j39ggt"
map.get("language");
```

---

### `has(key)`

Checks whether a key exists.

```js id="wj03ao"
map.has("language");
```

---

### `remove(key)`

Removes a key-value pair from the HashMap.

Returns:

* `true` if removed
* `false` if key was not found

```js id="hll5yl"
map.remove("language");
```

---

### `length()`

Returns the number of stored entries.

```js id="0vv6f2"
map.length();
```

---

### `clear()`

Removes all entries from the HashMap.

```js id="afz7d3"
map.clear();
```

---

### `keys()`

Returns an array of all keys.

```js id="m73c3z"
map.keys();
```

---

### `values()`

Returns an array of all values.

```js id="m0lbht"
map.values();
```

---

### `entries()`

Returns all key-value pairs.

```js id="i7ye6u"
map.entries();
```

---

## Resizing & Rehashing

The HashMap automatically resizes when:

```txt id="y84f9k"
(size + 1) / capacity > loadFactor
```

Current defaults:

```js id="0p3tx5"
loadFactor = 0.75
initial capacity = 16
```

During resizing:

1. Capacity is doubled
2. New buckets are created
3. Existing entries are rehashed
4. Data is redistributed into the new bucket array



## Concepts Used

* Hashing
* Collision resolution
* Linked Lists
* Dynamic arrays
* Rehashing
* Load factor management



## Future Improvements

* Support for non-string keys
* Better hash function
* Iterator support
* Doubly linked list chaining
* Shrinking capacity on low usage
* Performance benchmarking


## License

This project is open source and available under the MIT License.
