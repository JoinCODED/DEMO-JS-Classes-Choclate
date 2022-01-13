# Classes Demo

### `class`

- naming convention

```js
// 1. Create a class. Naming convention
class Person {
  // 2. Add to the class properties.
  // 3. give the properties initial values
  age = 0;
  name = "";
}
```

### `new`

```js
// 2. Create the object of the class.
let ahmad = new Person();
let ali = new Person();
```

### constructor

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    // always use the same name
    // don't use weird parameter names (n, a)
  }
}
```
