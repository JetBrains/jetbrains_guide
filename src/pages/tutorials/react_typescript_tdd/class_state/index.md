---
type: 'tutorialstep'
date: 2017-07-07
title: 'Model Class State With TypeScript Interfaces'
technologies: ['react', 'typescript', 'jest']
topics: []
author: 'pauleveritt'
subtitle: 'Make a very simple class component with local counter state, then make an interface for that state.'
thumbnail: './thumbnail.png'
longVideo:
  poster: './poster_long.png'
  url: 'https://www.youtube.com/watch?v=9HWkImburic'
---

In [Class Components With Props](../class_props/) we made a child component using a class,
with one property passed in. We use classes for child components when they
have state or need hooking into one of React's lifecycle methods.

That's the topic of this step. We're going to have a reusable counter
component that has a count of clicks.

This step, though, will be just the minimum: no actual clicking to update
state, for example. We will stick to introducing component state and
modeling it in TypeScript.


## Always Start With a Test

It's becoming our pattern: we write a failing test first, then implement,
then wire into the parent. To begin, have `Counter.tsx` in the left-hand
tab and `Counter.test.tsx` in the right-hand tab. Also, stop the
`start` process if it is running and make sure the `Jest` run config is
running.

Here's a `Counter.test.tsx` test to show that the counter starts at zero,
which fails, because we have a static `<span>1</span>`:

```typescript
it('should default start at zero', () => {
    const wrapper = shallow(<Counter label={'Current'}/>);
    expect(wrapper.find('.counter span').text())
        .toBe('0');
});
```

Over in `Counter.tsx`, let's write our interface first. What does the
local state look like? Pretty easy:

```typescript
interface ICounterState {
    count: number
}
```

Now the class definition and constructor can setup state, which we'll use
in the `render` method:

```typescript
class Counter extends React.Component<ICounterProps, ICounterState> {
    public static defaultProps = {
        label: 'Count'
    };

    constructor(props: ICounterProps) {
        super(props);
        this.state = {
            count: 0
        };
    }

    public render() {
        return (
            <div className="counter">
                <label>{this.props.label}</label>
                <span>{this.state.count}</span>
            </div>
        );
    }
}
```

Several things changed in this:

- `React.Component<>` has a generic with a second value, for the state

- We added a class constructor, which per the TSLint style, comes after
  static methods

- This constructor is passed the props (which we'll use in a moment)

- The constructor *must* call the superclass's constructor

- We assign some local state

- In the JSX/TSX, we got autocompletion not only on `.state`, but also
  `.count`

## Starting Value

Sometimes we want a counter that starts somewhere besides zero. Let's pass
in an optional prop for the starting value. First, the test in
`Counter.test.tsx`:

```typescript
it('should custom start at another value', () => {
    const wrapper = shallow(<Counter label={'Current'} start={10}/>);
    expect(wrapper.find('.counter span').text())
        .toBe('0');
});
```

As before, our test fails, but before that, our IDE warns us that we have
violated the `<Counter/>` contract. We'll fix the interface in
`Counter.tsx`:

```typescript{3}
interface ICounterProps {
    label?: string
    start?: number
}
```

Then, add it to the `defaultProps`:

```typescript{3}
public static defaultProps = {
    label: 'Count',
    start: 0
};
```

Finally, change the component *state* to get its initial value from the
component *props*:

```typescript{4}
constructor(props: ICounterProps) {
    super(props);
    this.state = {
        count: props.start
    };
}
```

When we do this, though, TypeScript gets mad. We said the `start`
property was optional, by putting a `?` in the interface field. As the
compiler error explains, this means it can be a `number` *or* a
`null`. In the component *state*, though, we say it can only be a
`number`.

`TypeScript 2.7 <https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html>`_
provides an elegant fix for this with *definite assignment assertion*.
Sometimes you know better than the compiler. At the point of assignment,
make an "I'm sure" assignment -- a *definite* assignment -- by suffixing the
value with an exclamation:

```typescript{4}
constructor(props: ICounterProps) {
    super(props);
    this.state = {
        count: props.start!
    };
}
```

Not only is the compiler happy, but our test is happy. We have a
`<Counter/>` component which shows a value from local component state and
which can optionally be passed in a starting value.

## Wire Into UI

We wrap up each step by wiring the standalone component changes into the
parent component, first through testing, then by looking in the browser.
First up, we open `App.test.tsx` and add a single line to test the
initial counter value:

```typescript{5}
it('renders the app and the heading', () => {
    const wrapper = mount(<App/>);
    expect(wrapper.find('h1').text())
        .toBe('Hello React');
    expect(wrapper.find('.counter label').text())
        .toBe('Current');
    expect(wrapper.find('.counter span').text())
        .toBe('10');
});
```

What changes in `App.tsx`? In this case, nothing. We want to use the default
value of zero.

If you'd like, restart the `start` run configuration and view this in the
browser, so make sure everything still looks good. When done, terminate the
`start` script.

## See Also

- https://www.stevefenton.co.uk/2018/01/typescript-definite-assignment-assertions/

TODO

- `.toBe('0');` put a JS comment saying "this fails" since people might
  not read the next paragraph

- Dennis said definite assignment wasn't needed as it wasn't broken, check
  to see if example is wrong or TS has changed
