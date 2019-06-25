---
type: tutorialstep
date: 2017-07-07
title: Presentation and Container Components
technologies: [react, typescript, jest]
topics: []
author: pwe
subtitle: Follow the React pattern of container/presentation components by refactoring the code and tests.
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://www.youtube.com/watch?v=FuV0R_n2whg
---

React encourages a separation of concerns. UI components, aka presentation
components, aka dumb components, are created by the bushel and managed by
container components, aka smart components. The container maintains state,
logic, and passes things into the presentation component.

Our Counter component is, as originally intended, a *class component* with 
state. Let's make it a *presentation component* by moving the state up to 
the container (App), as well as the incrementing logic.

## Counter State

We'll start by removing state from the Counter component. Instead, the count 
is passed in as a prop. Also, the dumb child component will no longer decide
the starting value, so remove `start` from the interface:

```typescript{4}
interface ICounterProps {
    label?: string
    count: number;
}
```

As soon as we do that, the universe starts breaking. TypeScript yells at us
in every one of our tests, as our `<Counter/>` component is not passing in
a required prop.  Too bad, TypeScript, you'll have to wait. 

Next, let's change our `Counter` component to not have local state. We 
mentioned in 
[Functional React Components in TypeScript](../functional_components/) 
that stateless presentation components are best done with stateless functional 
components. Let's change `<Counter/>` to an SFC:

```typescript{}
const Counter: FC<ICounterProps> = (
    {label = 'Count', count}
) => {
    return (
        <div
            className="counter"
            // onClick={handleClick}
        >
            <label>{label}</label>
            <span>{count}</span>
        </div>

    )
};
```

*Note: The IDE has a refactoring that will convert a React class 
component to a functional componet and vice-versa. Very useful.*

Change `Component` in the `import` to `FC`. Or, let the IDE do the cleanup 
for you: `Alt-Enter` to generate the import and `Optimize Imports` 
(`Ctrl-Alt-O` Win/Linux/macOS).

Note that we commented out, for now, the click handler. We can also delete
the `ICounterState` interface as it is no longer needed.

Let's fix the first two tests, to see if we are in the ballpark:

```typescript{2, 8}
it('should render a counter', () => {
    const wrapper = shallow(<Counter count={0}/>);

    expect(wrapper.find('.counter label').text()).toBe('Count');
});

it('should render a counter with custom label', () => {
    const wrapper = shallow(<Counter label={'Current'} count={0}/>);
    expect(wrapper.find('.counter label').text()).toBe('Current');
});
```

These two tests now pass.

Since the `<Counter/>` component will longer control the starting value,
you can remove the `should default start at zero` and
`should custom start at another value` tests from `Counter.test.tsx`.

## Passing In Click Function

The child component is no longer responsible for the count value. It's passed
in from the parent, which keeps track of the state. So how do we handle
clicks?

It sounds weird, but...in the same way. We're going to *pass in an arrow
function from the parent*. Meaning, the parent contains all the logic for what
happens when there is a click. All the child needs to know is "when the click
event comes in, call the function that was passed to me as a prop."

Here goes. First, since this click handler function will come in as a prop,
we need to change `ICounterProps` to model it:

```typescript{}
interface ICounterProps {
    label?: string;
    count: number;
    onCounterIncrease: (event: React.MouseEvent<HTMLElement>) => void;
}
```

Now *that's* an interface, baby. It captures quite a bit of the contract.

Next, use ES6 object destructuring to "unpack" that from the props into the
local scope, then refer to that prop in the `onClick` handler:

```typescript{}
const Counter: FC<ICounterProps> = (
    {label = 'Count', count, onCounterIncrease}
) => {
    return (
        <div
            className="counter"
            onClick={onCounterIncrease}
        >
            <label>{label}</label>
            <span>{count}</span>
        </div>

    )
}
```

Note that the IDE, as you did the unpacking, knew how to autocomplete
`onCounterIncrease`.

Our tests, though, are having compiler trouble again. We broke the component
contract, because `onCounterIncrease` is a mandatory prop. It's easy to
shut up this test, because we aren't testing click handling:

```typescript{}
const handler = jest.fn();
const wrapper = shallow(<Counter count={1} onCounterIncrease={handler}/>);
```

We used [Jest](../../../technologies/jest) mock functions to create a disposable arrow
function which we passed in as a prop.

Do this for both tests:

```typescript{}
it('should render a counter', () => {
    const handler = jest.fn();
    const wrapper = shallow(<Counter count={0}
                                     onCounterIncrease={handler}/>);
    expect(wrapper.find('.counter label').text()).toBe('Count');
});

it('should render a counter with custom label', () => {
    const handler = jest.fn();
    const wrapper = shallow(<Counter label={'Current'} count={0}
                                     onCounterIncrease={handler}/>);
    expect(wrapper.find('.counter label').text()).toBe('Current');
});
```

Event handling is a bit trickier. We need a "spy" that tells whether our
passed-in handler gets called, and called the right way. Also, we don't
test whether the value updates, since the container is responsible for
that.

Let's change the third test:

```typescript{}
it('should call the handler on click', () => {
    const handler = jest.fn();
    const wrapper = shallow(<Counter count={1} onCounterIncrease={handler}/>);
    wrapper.find('.counter').simulate('click', {shiftKey: false});
    expect(handler).toBeCalledWith({shiftKey: false});
});
```

We're simply ensuring that clicking the value calls the callback. 

We *could* delete the last test, as it isn't the responsibility of the 
`<Counter/>` to handle the click. All the logic is in container, not the 
presentation component.

## Dumb Component Gets a Little Smarter

But is that strictly true? What if the presentation component took care of
dissecting HTML event information, extracted the relevant data, and *then*
called the callback? That's a better division of responsibilities. The
container would then be truly UI-less for this functionality.

First, let's change the contract. Our callback will be called *not* with the
raw event, but with a *boolean* for the shift information:

```typescript{}
interface ICounterProps {
    label?: string;
    count: number;
    onCounterIncrease: (isShift: boolean) => void;
}
```

Our SFC gains a local arrow function which does the extraction and calling::

```typescript{}
const Counter: FC<ICounterProps> = (
    {label = 'Count', count, onCounterIncrease}
) => {
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        onCounterIncrease(event.shiftKey);
    };
    return (
        <div
            className="counter"
            onClick={handleClick}
        >
            <label>{label}</label>
            <span>{count}</span>
        </div>

    )
};
```

Our third test can now change, to see if our "spy" was called with a boolean
instead of an event object:

```typescript{}
it('should call the handler on click', () => {
    const handler = jest.fn();
    const wrapper = shallow(<Counter count={0} onCounterIncrease={handler}/>);
    wrapper.find('.counter').simulate('click', {shiftKey: false});
    expect(handler).toBeCalledWith(false);
});
```

The fourth test, for shift, can be deleted. It's simply a variation of this
test. And with that, our tests in `Counter.test.tsx` are passing.

## Updating the Container

We now have a `<Counter/>` presentation component that passes tests. But
we've shifted some responsibility to the parent. Let's do the updates. Start
by opening `App.tsx` and `App.test.tsx` side-by-side.

First, this `<App/>` component will now have some state. We need an 
interface for the counter's state. We just so happen to have one left 
behind in `Counter.tsx`. *Remove the interface* from that file and paste it 
into `App.tsx`:

```typescript{}
interface ICounterState {
    count: number
}
```

Change the class setup to use this, with a constructor that sets up the
initial state:

```typescript{}
class App extends Component<object, ICounterState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            count: 0
        };
    }
```

Now it's time for the action. Let's make a method that updates the state.
This method will be the handler that's passed into `<Counter/>`. We first 
try it as a normal method:

```typescript{}
increment(isShift: boolean) {
    const inc: number = isShift ? 10 : 1;
    this.setState({count: this.state.count + inc});
}
```

But this is going to have the same problem discussed previously: `this` is
bound to the event, not the component. As before, we solve this by converting
the method to an arrow function class property:

```typescript{}
increment = (isShift: boolean) => {
    const inc: number = isShift ? 10 : 1;
    this.setState({count: this.state.count + inc});
}
```

With this in place, we can now update the `render` function:

```typescript{}
render() {
    return (
        <div>
            <Heading/>
            <Counter
                label={'Current'}
                count={this.state.count}
                onCounterIncrease={this.increment}
            />
        </div>
    );
}
```

State is maintained in the parent which it gives to the child, along with an
update handler function.

## Test the State Updater

And with that, our tests pass again. However, we have dropped any testing to
see whether the state actually updated. The responsibility is spread a bit
between the two components.

Let's first add tests in `App.test.tsx` for the increment function:

```typescript{}
it('updates state when increment is called without shift', () => {
    const wrapper = shallow(<App/>);
    const instance = wrapper.instance() as App;
    expect(instance.state.count).toBe(0);
    instance.increment(false);
    expect(instance.state.count).toBe(1);
});

it('updates state when increment is called with shift', () => {
    const wrapper = shallow(<App/>);
    const instance = wrapper.instance() as App;
    expect(instance.state.count).toBe(0);
    instance.increment(true);
    expect(instance.state.count).toBe(10);
});
```

`shallow` needs importing so use the IDE's `Alt-Enter` to generate the 
import from `enzyme`.

We used Enzyme's `instance()` method to grab the component instead of the
DOM-like node. We then called `increment` and checked to see if the parent's
state increased appropriately.

Those tests pass, which is a good sign. We need though to test the
parent-child connection. For this we'll go back to Enzyme's `mount` and 
add these two tests:

```typescript{}
it('updates the count by 1 via the counter component', () => {
    const wrapper = mount(<App/>);
    wrapper.find('.counter').simulate('click', {shiftKey: false});
    expect(wrapper.find('.counter span').text()).toBe('1');
});

it('updates the count by 10 via the counter component', () => {
    const wrapper = mount(<App/>);
    wrapper.find('.counter').simulate('click', {shiftKey: true});
    expect(wrapper.find('.counter span').text()).toBe('10');
});
```

Fantastic, these tests pass. We now have enough confidence to head back
over to the browser. Fire up the `start` run config, reload the browser,
click and shift click, then shut down `start`.

## Testing Is Cool

This was a heck of a tutorial step. Let's take a moment and think about how
development would have gone the "normal" way. How many times would you have
switched to from IDE->browser->IDE? How many clicks would you have to do to
each time, checking that your new stuff worked and didn't break your old
stuff? When you ran into a problem, would the browser give you a convenient
and accurate notice?

It's hard to make yourself get into TDD for React and TypeScript. Once you
do, and once you get into the flow, it's a very positive development
experience.

## See Also

- https://www.codementor.io/vijayst/unit-testing-react-components-jest-or-enzyme-du1087lh8
