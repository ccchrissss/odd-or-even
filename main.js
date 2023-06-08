function oddOrEven(array) {

  //  declare a variable assigned to the sum of the array
  //  conditional that returns string "odd" if sum is odd and
  //  "even" if sum is even.
  //  sum modulus 2. if remainder is 1, return "odd", else return "even"

  let sum = array.reduce( (acc, c) => acc + c, 0 )

  // return sum % 2 ? "odd" : "even"

  return sum % 2 == 0 ? "even" : "odd"

}