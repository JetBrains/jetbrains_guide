---
type: TutorialStep
date: 2020-10-12
title: Presentation and Container Components
technologies:
  - react
  - typescript
  - jest
topics: [ ]
author: pwe
subtitle: Follow the React pattern of container/presentation components by refactoring the code and tests.
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/SnCGW6JUo4E
---

React encourages a separation of concerns. UI components, aka presentation components, aka dumb components, are created by the bushel and managed by container components, aka smart components. The container maintains state, logic, and passes things into the presentation component.

Our Counter component is, as originally intended, a *class component* with state. Let's make it a *presentation component* by moving the state up to the container (App), as well as the incrementing logic.

## Code

The finished code for this tutorial step is [in the repository](https://github.com/JetBrains/jetbrains_guide/tree/master/sites/webstorm-guide/demos/tutorials/react_typescript_tdd/presentation_components/).

## Counter State

We'll start by removing state from the Counter component. Instead, the count is passed in as a prop. Also, the dumb child component will no longer decide the starting value, so remove `start` from the `Counter` type definition:

```typescript {3}
export type CounterProps = {
  label?: string;
  count: number;
};
```

As soon as we do that, the universe starts breaking. TypeScript yells at us in every one of our tests, as our `<Counter/>` component is not passing in a required prop. Too bad, TypeScript, you'll have to wait.

Next, let's change our `Counter` component to *not* have local state. Stateless presentation components are best done with stateless *functional* components. Let's change `<Counter/>` to an SFC:

```typescript
export const Counter = ({ label = "Count", count }: CounterProps) => {
  return (
    <div
      className="counter"
      // onClick={handleClick}
    >
      <label htmlFor="counter">{label}</label>
      <span id="counter" role="counter">
        {count}
      </span>
    </div>
  );
};
```

Note that we commented out, for now, the click handler. Finally, delete the import of `Component` (or use the IDE's `Optimize Imports` action.)

Let's fix the first two tests in `Counter.test.tsx`, to see if we are in the ballpark:

```typescript {2,10}
test("should render a label and counter", () => {
  const { getByLabelText, getByRole } = render(<Counter count={0} />);
  const label = getByLabelText("Count");
  expect(label).toBeInTheDocument();
  const counter = getByRole("counter");
  expect(counter).toBeInTheDocument();
});

test("should render a counter with custom label", () => {
  const { getByLabelText } = render(<Counter label={`Current`} count={0} />);
  const label = getByLabelText("Current");
  expect(label).toBeInTheDocument();
});
```

These two tests now pass.

Since the `<Counter/>` component will longer control the starting value, you can remove the `should default start at zero` and `should start at another value` tests from `Counter.test.tsx`.

## Passing In Click Function

The child component is no longer responsible for the count value. It's passed in from the parent, which keeps track of the count state. So how do we handle clicks?

It sounds weird, but...in the same way. We're going to *pass in an arrow function from the parent*. Meaning, the parent contains all the logic for what happens when there is a click. All the child needs to know is "when the click event comes in, call the function that was passed to me as a prop."

Here goes. First, since this click handler function will come in as a prop, we need to change `CounterProps` to model it:

```typescript {4}
export type CounterProps = {
  label?: string;
  count: number;
  onCounterIncrease: (event: React.MouseEvent<HTMLElement>) => void;
};
```

Now *that's* a type definition, baby. It captures quite a bit of the contract.

Next, use ES6 object destructuring to "unpack" that from the props into the local scope, then refer to that prop in the `onClick` handler:

```typescript {4,9}
export const Counter = ({
                          label = 'Count',
                          count,
                          onCounterIncrease,
                        }: CounterProps) => {
  return (
      <div
          className="counter"
          onClick={onCounterIncrease}
      >
        <label htmlFor="counter">{label}</label>
        <span id="counter" role="counter">
        {count}
      </span>
      </div>
  );
};
```

Note that the IDE, as you did the unpacking, knew how to autocomplete `onCounterIncrease`.

Our tests, though, are having compiler trouble again. We broke the component contract, because `onCounterIncrease` is a mandatory prop. It's easy to fix these first two tests in `Counter.test.tsx`, because we aren't testing click handling. For example, in the first test:

```typescript
  const handler = jest.fn();
  const { getByLabelText, getByRole } = render(
    <Counter count={0} onCounterIncrease={handler} />
  );
```

We are using [Jest](../../../technologies/jest) mock functions to create a disposable arrow function which we passed in as a prop.

Do this for both tests:

```typescript {2,4,13,15}
test("should render a label and counter", () => {
  const handler = jest.fn();
  const { getByLabelText, getByRole } = render(
    <Counter count={0} onCounterIncrease={handler} />
  );
  const label = getByLabelText("Count");
  expect(label).toBeInTheDocument();
  const counter = getByRole("counter");
  expect(counter).toBeInTheDocument();
});

test("should render a counter with custom label", () => {
  const handler = jest.fn();
  const { getByLabelText } = render(
    <Counter label={`Current`} count={0} onCounterIncrease={handler} />
  );
  const label = getByLabelText("Current");
  expect(label).toBeInTheDocument();
});
```

Event handling is a bit trickier. We need a "spy" that tells whether our passed-in handler gets called. Also, we don't test whether the value updates, since the container is responsible for that. In fact, we don't need to have a test for "shift-click", as that's part of the handler that will be passed in.

Let's change the third test and *delete* the last test:

```typescript
test("should call the incrementer function", () => {
  const handler = jest.fn();
  const { getByRole } = render(
    <Counter count={0} onCounterIncrease={handler} />
  );
  const counter = getByRole("counter");
  fireEvent.click(counter);
  expect(handler).toBeCalledTimes(1);
});
```

We are simply ensuring that clicking the value calls the callback. We don't even care what it was called with.

## Dumb Component Gets a Little Smarter

We deleted the final test because we don't really care how the calling happens. But is that strictly true? What if the *presentation* component took care of dissecting HTML event information, extracted the relevant data, and *then* called the callback? That's a better division of responsibilities. The container would then be truly UI-less for this functionality.

First, let's change the contract. Our callback will be called *not* with the raw event, but with a *boolean* for the shift information:

```typescript {4}
export type CounterProps = {
  label?: string;
  count: number;
  onCounterIncrease: (isShift: boolean) => void;
};
```

Mmmmhh, nice. No more type information details about events.

Our functional component gains a local arrow function which does the extraction and calling:

```typescript
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

Our third test can now change, to see if our "spy" was called with a boolean instead of an event object:

```typescript {8}
test("should call the incrementer function", () => {
  const handler = jest.fn();
  const { getByRole } = render(
    <Counter count={0} onCounterIncrease={handler} />
  );
  const counter = getByRole("counter");
  fireEvent.click(counter);
  expect(handler).toBeCalledWith(false);
});
```

The tests in `Counter.test.tsx` pass.

## Updating the Container

We now have a `<Counter/>` presentation component that passes tests. But we've shifted some important responsibility to the parent. Let's do the updates. Start by opening `App.tsx` and `App.test.tsx` side-by-side.

First, this `<App/>` component will now have some state. We need a type definition for the counter's state. We just so happen to have one left behind in `Counter.tsx`. *Remove the initialState and type definition* from that file and paste it into `App.tsx`:

```typescript
const initialState = { count: 0 };
export type CounterState = Readonly<typeof initialState>;
```

Our `App` component needs to maintain state, which for this tutorial means a class-based component for `App`. Let's use `Alt-Enter` and choose `Convert to class component` to make that change. We'll then add the generic information in `<>` and set the state, similar to what we did previously:

```typescript
class App extends React.Component<object, CounterState> {
  readonly state: CounterState = initialState;
```

The `object` is a placeholder for the props part of the generic. The `App` component doesn't have props.

Now it's time for the action. Let's make a "method" (arrow function property) that updates the state. This arrow function will be the handler that's passed into `<Counter/>`.

```typescript
  increment = (isShift: boolean) => {
    const inc: number = isShift ? 10 : 1;
    this.setState({ count: this.state.count + inc });
  };
```

Since it is an arrow function, it's `this` is bound to the component instance, *not* the event that will be triggered.

With this in place, we can now update the `render` function:

```typescript
  render() {
    return (
      <div>
        <Heading />
        <Counter
          label={`Current`}
          count={this.state.count}
          onCounterIncrease={this.increment}
        />
      </div>
    );
  }
```

State is maintained in the parent which it gives to the child, along with an update handler function.

## Test the State Updater

And with that, our tests pass again. However, we have dropped any testing to see whether the state actually updated.

Let's add tests in `App.test.tsx` for the increment operation:

```typescript
import userEvent from "@testing-library/user-event";
// ...

test("updates state when increment is called without shift", () => {
  const { getByRole } = render(<App />);
  const counter = getByRole("counter");
  expect(counter).toHaveTextContent("0");
  userEvent.click(counter);
  expect(counter).toHaveTextContent("1");
});

test("updates state when increment is called with shift", () => {
  const { getByRole } = render(<App />);
  const counter = getByRole("counter");
  expect(counter).toHaveTextContent("0");
  userEvent.click(counter, { shiftKey: true });
  expect(counter).toHaveTextContent("10");
});
```

After importing `userEvent` at the top, we wrote two new tests. Each checks the count before and after clicking. The second simulates a shift-click.

Fantastic, these tests pass. We now have enough confidence to head back over to the browser. Fire up the `start` run config, reload the browser, click and shift click, then shut down `start`.

## Testing Is Cool

This was a heck of a tutorial step. Let's take a moment and think about how development would have gone the "normal" way. How many times would you have switched to from IDE->browser->IDE? How many clicks would you have to do to each time, checking that your new stuff worked and didn't break your old stuff? When you ran into a problem, would the browser give you a convenient and accurate notice? And when you did have a problem, could you resort to setting browser `debugger` lines or worse, `console.log`-based debugging?

It's hard to make yourself get into TDD for React and TypeScript. Once you do, and once you get into the flow, it's a very positive development experience.
