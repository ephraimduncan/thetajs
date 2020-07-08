module.exports = {
  /**
   * π. The ratio of the circumference of a circle to its diameter.
   */
  pi: Math.PI,

  /**
   * Euler's number. The mathematical constant e.
   */
  e: Math.E,

  /**
   * The natural logarithm of 10.
   */
  lg10: Math.LN10,

  /**
   * The natural logarithms of 2.
   */
  lg2: Math.LN2,

  /**
   * Returns the square root of a number.
   */
  sqrt: (num) => Math.sqrt(num),

  /**
   * Returns the cube root of a number.
   */
  cbrt: (num) => Math.cbrt(num),

  /**
   * Returns the square of a number.
   */
  sq: (num) => num ** 2,

  /**
   * Returns the cube of a number.
   */
  cube: (num) => Math.pow(num, 3),

  /**
   * Returns number raised to the power of 4.
   */
  qube: (num) => Math.pow(num, 4),

  /**
   * Returns the sine of an angle.
   */
  sin: (ang) => Math.sin(ang),

  /**
   * Returns the cosine of an angle.
   */
  cos: (ang) => Math.cos(ang),

  /**
   * Returns the tangent of an angle.
   */
  tan: (ang) => Math.tan(ang),

  /**
   * Returns the sine inverse of an angle.
   */
  sini: (ang) => Math.asin(ang),

  /**
   * Returns the cosine inverse of an angle.
   */
  cosi: (ang) => Math.acos(ang),

  /**
   * Returns the tangent inverse of an angle.
   */
  tani: (ang) => Math.atan(ang),

  /**
   * Returns the base 10 logarithm of a number.
   */
  log: (num) => Math.log10(num),

  /**
   * Returns the base 2 logarithm of a number.
   */
  log2: (num) => Math.log2(num),

  /**
   * Returns the natural (base e) logarithm of a number.
   */
  loge: (num) => Math.log(num),

  /**
   * Returns the nearest integer of the supplied value.
   */
  round: (num) => Math.round(num),

  /**
   * Returns the highest nearest integer of the supplied value.
   */
  roundUp: (num) => Math.ceil(num),

  /**
   * Returns the lowest nearest integer of the supplied value.
   */
  roundDown: (num) => Math.floor(num),
};
