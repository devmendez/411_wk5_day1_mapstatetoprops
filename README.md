npm## Setup

Clone this repo and run `npm i` and then `npm start`

## Project Instructions

#### Getting Familiar (DON'T SKIP THIS)

* You've already seen this app before (twice now) so you should be pretty familiar with it. In this assignment we will incorporate Redux into the application so all components have access to the cars. We will also add additional properties to the state and see how that effects things.

* We've removed the login/logout functionality so you don't have to login each time to see your changes.

* Note that the Redux setup is done for you, the purpose of this excercise is to get familiar with `mapStateToProps` to pass the data to your components. You will also be creating the containers.

* Even though the setup has been done, please go look at the files under the "redux" folder. Remember, there are __3 files__ needed for this setup. They are:
    * `state.js`: The inital state of your application
    * `reducers.js`: A file with functions that determine how to serve your state (more on that next lesson)
    * `store.js`: The combination of "state" and "reducers" that is injected into your application via the `Provider`

* Once you've navigated to (and gotten familiar) with the files above.. go to the `App.js` and see the `Provider` wrapping our application.

* Finally, click the Dashboard tab and notice that a new component was created with a table of all the cars. Look at the code for that component and see that it's mostly still components from Material UI.

#### Project Work

* Let's start with the `Home` component. Navigate to it and notice that is is importing `cars.json` and mapping through that to display the cars. We want to attach "cars" to the "props" of this component so that it can be re-used. Under the "containers" folder, create a new file called `Home.js`.

* Inside `Home.js` do the following:
    * Import "connect" from "react-redux"
    * Import the `Home` component from the components folder
    * Write a `mapStateToProps` function that maps "cars" to "state.cars"
    * Export the connected component and mapStateToProps combination

* Now, go to the `Router.js` file and see where `Home` is imported at the top of the file. Change it's path so that it references `containers` instead of `components`.

* Go to the `Home` component (in the components folder) and replace the use of "cars" with "props.cars". Everything should have stayed the same (that means it worked). If so, go ahead and remove the import for `cars.json` at the top of the file.

* The `Dashboard` and `Car` components need the exact same setup so follow the same instructions for them. Create files for them in the `containers` folder. You can copy/paste from the `Home` container but make sure to change `Home` to reference the appropriate component.

* Make the switch for `Dashboard` and `Car` in the `Router.js` file just like we did for `Home`. Make sure to use `props.cars` in these components as well and remove the import to `cars.json`.

* Everything look good so far? If not, ask the instructor.

* Navigate to the `Dashboard` component and see the text, "Welcome, Name". Let's change that. To do that we are going to add a user to our global state and then pull it into the dashboard component. 

* Go to the `redux/state.js` file and add a property called "user" above cars. Give it the following value:
```
{
    username: 'test-user-1',
    email: 'test-user@example.com'
}
```

* Now, go back to the Dashboard _container_ and add this user in the `mapStateToProps` function.

* Finally, in the Dashboard _component_, reference `props.user.username` to show the username instead of the word "NAME". Whenever another component needs access to the user, they can simply add it in their mapStateToProps function as well.

* Good work!