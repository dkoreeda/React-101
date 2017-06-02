## Good news!  It's React Time!

![](https://media.giphy.com/media/xT77XWum9yH7zNkFW0/giphy.gif)


## Part 1 - ES6 is My Best Friend and Should Be Your Best Friend Too

Use the new ES6 syntax to complete the following problems:

##### 1. Explain the result of the following code:

```
{ let a = 'I am declared inside an anonymous block'; }
console.log(a); // ReferenceError: a is not defined
```

##### 2. Use .map to add an accomplishment attribute to each object with values: 'Javascript', 'Python', and 'Pizza Margherita'

```
const gods = [
  {name: 'Douglas Crockford'},
  {name: 'Guido van Rossum'},
  {name: 'Raffaele Esposito'}
];
```

##### 3. Use .filter to make a new array of only the vowels (`hint` - Regex would be useful here!):

```
const letters = ["a", "z", "b", "c", "u"];
```

##### 4. Make a class called Phone. Add a constructor method to the Phone class that takes in two arguments, "brand" and "model" which will be equal to `this.brand` and `this.model`.

##### 5. Add a method to the Phone class called `ring` that console logs "your `brand` `model` is getting a call". Create a new instance of the Phone class and invoke the ring method.






## Part 2 - If an actor plays the same part twice, does he... REACT???  🤣
Create a mini-react app that renders Gersh's favorite things!

#### Spec:
 * The react app should have 3 components: an app-level component, a list component and a list item component.
 * The array below should be exported as a module to be imported into the app component.
 * Use props to pass the data between components as needed.

#### Flow:
1. Create a file in your src directory called "gersh-faves.js".  Add the following array to that file and export it as a module:
  ```
  justGershThings = [
    'cat sitting',
    'guitar shredding',
    'competitive sychronized swimming',
    'button-up plaid shirts',
    'yoyo trick videos',
    't-$',
    'when you are cutting wrapping paper and the scissors just glide through to finish the cut'
  ]
  ```
2. Import that module into your app component and assign the data as a prop.
3. The app component file should render the list component.
4. The list component should map through the data and render a list item component for each element of the array.
  
