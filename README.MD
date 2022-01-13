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

# Examples

```js
/** (Question 2): (15000 Points)
 * 1. Write a class `Movie`, give it the following properties
 * - title
 * - duration (in minutes)
 * - genre
 * - [rating]
 *
 * 2. Add the constructor that initializes all properties except the rating array, you should not pass it in the constructor method, and just initialize it with empty array.
 *
 * 3. and the following the methods
 * + rate(rating),
 *      That adds a new rating to the rating array.
 *      Rating should be restricted to be greater than 0 and less than 10.
 *      This function will be used to make a single rating for the movie.
 * + averageRating(),
 *      That calculates the average of the rating array.
 *      if rating array includes the following data for example: [9, 9, 10, 10], then the averageRating should return 9.5 as an average
 *      the average equation: average = sumOfValues / countOfValues
 *      (*BONUS*): use the method reduce to calculate the average
 */

class Movie {
  // continue the code here
}

/** (Question 3): (1000 Points)
 * 1. Create a class `Actor` that inherits `Person`, and adds the following properties
 * - movies: array of `Movie`
 *
 * 2. Add the following methods
 * + addMovie(movie), that adds a movie to the actors movies
 * +
 */

// write the class here
```
