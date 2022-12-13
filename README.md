# Class Based Component Notes

## The Component Lifecycle

Each component has "lifecycle methods" that you can override to run code at particular times in the process. The first section of methods are the Mounting methods

### Mounting

These methods get called when creating and instance of a component and while its being inserted into the DOM

### constructor()

1. the super(props) allow use of this.props within the constructor()
2. the constructor is only necessary when initializing state or binding methods
3. binding methods happened in the constructor, so that function defined later on had access to "this"
4. ES6 arrow functions do not require binding
