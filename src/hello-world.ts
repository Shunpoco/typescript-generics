// Hello world generics
// https://www.typescriptlang.org/docs/handbook/2/generics.html#hello-world-of-generics

// Without generics, we would either have to five the identity function a specific type:
// function identity(arg: number): number {
//   return arg;
// }
// Or, we could describe the identity function using the any type:
// function identity(arg: any): any {
//   return arg;
// }
// While using `any` is certainly generic in that it will cause the function to accept any and all types for the type of `arg`,
// we actually are losing the information about what that type was when the function returns.
// If we passed in a number, the only information we have is that any type could be returned.

// Instead, we need a way of capturing the type of the argument in such a way that we can also use it to denote
// what is being retuned. Here, we will use a **type valiable**, a special kind of variable that works on types rather than values.
function identity<Type>(arg: Type): Type {
  return arg;
}

const output = identity<string>("hello world!");

console.log(output);

// The second way is also perhaps the most common.
// Here we use type asgument inference -- that is, we want the compiler to set the value of `Type`
// for us automatically based on the type of the argument we pass in:
const output2 = identity(1);

console.log(output2);

// Notice that we didn't have to explicitly pass the type in the angle brackets (`<>`);
// the compiler just looked at the value `1`, and set `Type` to its type (number). 
// While type argument inference can be a helpful tool to keep code shorter and more readable,
// you may need to explicitly pass in the type arguments as we did in the previous example
// when the compiler fails to infer the type, as may happen in more complex exmaples.
