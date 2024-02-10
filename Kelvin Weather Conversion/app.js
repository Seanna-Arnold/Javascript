//declaring today's forecast 293 kelvin
const kelvin = 0;

//celsius is always 273 units less than kelvin
const celsius = kelvin - 273;

//declared farenheit with the official conversion equation from celsius
let fahrenheit = Math.floor(celsius * (9/5) + 32);
//used a built-in Math object to round up all conversions from celsius to fahrenheit


console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

let newton = Math.floor(celsius * (33/100));
console.log(newton);
