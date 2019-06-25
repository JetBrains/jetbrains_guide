---
type: tutorialstep
date: 2017-07-07
title: Class Components With Props
technologies: [react, typescript]
topics: []
author: pwe
subtitle: Make a simple class component with a single prop, again with a TypeScript interface describing the props.
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://www.youtube.com/watch?v=FTzKEWboixM
---

In the previous step we made a "dumb" presentational component with one
property. In React, components can have properties and state. When they
have state (or when they need access to React's lifecycle methods), we use
a class-based component instead.

We're going to build a stateful counter component. Each click increments the
click count, with the current count value stored in local component state.
The `<Counter/>` component will be passed in some props. In this step,
we'll show component props -- as done with a function in the previous
step -- for class-based components. We'll do state in the next step.

## Code

The finished code for this tutorial step is 
[in the repository](https://github.com/JetBrains/pycharm_guide/tree/master/demos/tutorials/react_typescript_tdd/class_props).

## First a Test

This tutorial series shows component development using testing instead of a
browser. Let's write a broken test first, then do the implementation which
fixes the test.

Make a new file called `Counter.test.tsx` with this test:

```typescript{}
it('should render a counter', () => {
    const wrapper = shallow(<Counter/>);
    expect(wrapper.find('.counter label').text())
        .toBe('Count');
});
```

It has several failures. For now, just click on `shallow` and hit
`Alt-Enter` to generate that import.

Now create a file `Counter.tsx`. We'll make it very simple to start:

```typescript{}
import React, { Component } from react;

class Counter extends Component {
    render() {
        return (
            <div className="counter">
                <label>Count</label>
                <span>1</span>
            </div>
        );
    }
}

export default Counter;
```

Back in our test, click on `<Counter/>` and hit `Alt-Enter`. Your import
is generated, but there's still an error: React isn't imported. Repeat the
`Alt-Enter` to generate the React import. Save the file and see that your
test passes.

Not a bad first step.

## Pass In a Prop

As we did in [Sharing Component Props Using Type Information](../props/), 
we'll use a consistent process:

- Work first in the test by writing a *failing* test

- Then fix the `Counter` presentation component

- Then fix the wrapper component that uses the `Counter`

Thus, let's add a test for the case of passing in a label:

```typescript{}
it('should render a counter with custom label', () => {
    const wrapper = shallow(<Counter label={'Current'}/>);
    expect(wrapper.find('.counter label').text())
        .toBe('Current');
});
```

The test fails, which is good. What's even better -- TypeScript helped us
"fail faster". Before running the test, it told us we broke the contract
saying no properties were expected. Even better, our IDE visually warned us
with a very specific mouseover message.

Let's now work on the implementation. Classes handle props with defaults a
little differently:

```typescript{}
class Counter extends Component<{ label?: string }> {
    static defaultProps = {
        label: 'Count'
    };
```
    
Remember, the `?` means an optional field in the interface. Now make the
`<label>` dynamic:

```jsx
<label>{this.props.label}</label>
```

When you save `Counter.tsx`, your tests will now pass.

As we saw in the previous step, it's nicer to put the props type information
into its own interface. Let's use `Ctrl-T -> Interface` that into `ICounterProps`:

```typescript{}
interface ICounterProps {
    label?: string;
}

class Counter extends Component<ICounterProps> {
    static defaultProps = {
        label: 'Count'
    };
```

## Wire Into UI

We have a `<Counter/>` prop that takes an optional label. Tests pass. Let's
now use it in our app and view it in the browser.

Open `App.tsx` and change the TSX that in `render`:

```typescript{}
render() {
    return (
        <div>
            <Heading/>
            <Counter label={'Current'}/>
        </div>
    );
}
```

Did you notice the autocompletion by the IDE, which knew there was a component
with a name starting with those letters, somewhere in the project? And when
you accepted the completion, it generated the import? Also, the IDE helped
on the available props and the types for those props.

All of our tests still pass. Let's change the
`renders the app and the heading` test in `App.test.tsx` to look for the
label in the new `<Counter/>` child component:

```typescript{}
it('renders the app and the heading', () => {
    const wrapper = mount(<App/>);
    expect(wrapper.find('h1').text())
        .toBe('Hello React');
    expect(wrapper.find('.counter label').text())
        .toBe('Current');
});
```

Now restart the `start` script and look at the UI in the browser. We
should now see `Current 1` in the UI.

While this step didn't do too much that was new -- after all, we had optional
props and interfaces in the previous step, with functions -- it paves the
way for stateful components.
