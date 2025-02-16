```javascript
function sum(a, b) {
 return a + b;
}
```

**Explanation:**

- **`function sum(a, b)`:** This defines a function named `sum`.
  - `function`: Keyword used to declare a function.
  - `sum`: The name of the function. You'll use this name to call the function.
  - `(a, b)`: The parameters of the function. `a` and `b` are variables that will hold the values passed into the function when it's called. They act as placeholders.
- **`{ ... }`:** The curly braces enclose the body of the function, which contains the code that will be executed when the function is called.
- **`return a + b;`:** This line performs the addition and returns the result.
  - `return`: Keyword that specifies the value the function will send back to the caller.
  - `a + b`: Adds the values of the parameters `a` and `b`.

**How to use the function:**

```javascript
let result = sum(5, 3); // Call the function with arguments 5 and 3.
console.log(result); // Output: 8

let x = 10;
let y = 20;
let anotherResult = sum(x, y); // Call the function with variables x and y.
console.log(anotherResult); // Output: 30
```

**Key Concepts:**

- **Functions:** Reusable blocks of code that perform a specific task. They help organize code and avoid repetition.
- **Parameters:** Variables declared in the function's definition that receive input values when the function is called.
- **Arguments:** The actual values passed to the function when it's called. Arguments are assigned to the corresponding parameters.
- **Return Value:** The value that a function sends back to the caller after it has finished executing. The `return` statement is used to specify this value.
- **Scope:** Parameters `a` and `b` are only accessible within the `sum` function. They don't exist outside of it.
