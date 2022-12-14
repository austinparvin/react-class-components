# Class Based Component Notes

## The Component Lifecycle

Each component has "lifecycle methods" that you can override to run code at particular times in the process. The first section of methods are the Mounting methods

### Mounting

These methods get called when creating and instance of a component and while its being inserted into the DOM

### `constructor()`

1. the super(props) allow use of this.props within the constructor()
2. the constructor is only necessary when initializing state or binding methods
3. binding methods happened in the constructor, so that function defined later on had access to "this"
4. ES6 arrow functions do not require binding

### `render()`

1. Render should be pure and contain no state modifications
2. This can be done in the componentDidMount()
3. render will not fire if shouldComponentUpdate() returns false
4. unless you forceUpdate()

### `componentDidMount()`

1. This is where you fetch for data and handle the response
2. This is also where you we setState based on the DOM's info. e.g. window.innderWidth
3. If you setState(newState) as the first thing here, the use will only ever see the newState, but probably don't and just adjust your initial state
