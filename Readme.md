# Theta ϴ

Syntatic Sugar for the default Math Object.

### Installation

`npm install thetajs`

### Usage

```js
// Use Destructuring for the functions.
// Without destructuring, this is a waste of space
const { qube, sqrt, sq, log, sin, pi } = require('thetajs');

qube(64); // 4
sqrt(36); // 6
sq(3); // 9
log(10); // 1
sin(30); // 0.5
console.log(pi); // 3.141592653589793
```

### API

**pi**: π. The ratio of the circumference of a circle to its diameter.

**e**: Euler's number. The mathematical constant e.

**log10**: The natural logarithm of 10.

**lg2**: The natural logarithms of 2.

**sqrt(_num_)**: Returns the square root of a number.

**cbrt(_num_)**: Returns the cube root of a number.

**sq(_num_)**: Returns the square of a number.

**cube(_num_)**: Returns the cube of a number.

**qube(_num_)**: Returns number raised to the power of 4.

**sin(_angle_)**: Returns the sine of an angle.

**cos(_angle_)**: Returns the cosine of an angle.

**tan(_angle_)**: Returns the tangent of an angle.

**sini(_angle_)**: Returns the inverse sine of an angle.

**cosi(_angle_)**: Returns the inverse cosine of an angle.

**tani(_angle_)**: Returns the tangent cosine of an angle.

**log(_num_)**: Returns the base 10 logarithm of a number.

**log2(_num_)**: Returns the base e logarithm of a number.

**loge(_num_)**: Returns the natural (base e) logarithm of a number.

**round(_num_)**: Returns the nearest integer of the supplied value.

**roundUp(_num_)**: Returns the highest nearest integer of the supplied value.

**roundDown(_num_)**: Returns the lowest nearest integer of the supplied value.

### Author

[Ephraim Atta-Duncan](https://dephraim.now.sh)

### License

[MIT](./license)
