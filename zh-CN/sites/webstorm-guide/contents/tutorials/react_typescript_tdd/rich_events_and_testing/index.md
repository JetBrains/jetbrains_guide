---
type: TutorialStep
date: 2021-10-04
title: Rich Events and Testing
technologies:
  - react
  - typescript
  - jest
topics: [ ]
author: pwe
subtitle: Add event handling to a stateful class component by first writing tests during development.
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/OO7OmA5UlQM
---

Our counter component has local state, but doesn't respond to clicks. We need to add event handlers, but we'd like to do the same "fail faster" approach:

- Write tests first
- Use type information to give us red squigglies when we mess up
- Don't go to the browser until the end

As in previous steps, start with the following setup:

- `Counter.tsx` and `Counter.test.tsx` in side-by-side tabs

- Start the `Jest` run configuration

- Stop the `start` run configuration

## 代码

The finished code for this tutorial step is [in the repository](https://github.com/JetBrains/jetbrains_guide/tree/master/sites/webstorm-guide/demos/tutorials/react_typescript_tdd/rich_events_and_testing).

## First Failing Test

Let's start with a failing test that clicks on the count and checks if the number is updated. In `Counter.test.tsx`, clone the first test and change it as follows:

```typescript
import { render, fireEvent } from "@testing-library/react";
// ...

test("should increment the count by one", () => {
  const { getByTitle } = render(<Counter />);
  const counter = getByTitle("Current Count");
  expect(counter).toHaveTextContent("0");
  fireEvent.click(counter);
  expect(counter).toHaveTextContent("1");
});
```

This test renders the `Counter` component, checks its initial value, pretends to click, then checks the final value.

`fireEvent`, what's that? It's the big idea in this tutorial step. You can pretend to click, or dispatch other DOM events, even without a real browser or "mouse". Jest uses the [browser-like JSDOM environment](https://jestjs.io/docs/en/configuration#testenvironment-string) entirely inside NodeJS to fire the event.

This new test fails: the number didn't increment. Which is good!

What's really good: that was dead simple. In one line we automated doing a click and checking the result. Much more pleasurable than switching to the browser and clicking everything in your app, on every change, to see if your change works without breaking the universe.

## `onClick` Handler

The component doesn't handle clicks. Let's head to `Counter.tsx` and add a click handler on the `<span>`:

```typescript
<span
    id="counter"
    title="Current Count"
    onClick={() => this.setState({ count: this.state.count + 1 })}
>
  {this.state.count}
</span>
```

Our test passes. But that's putting some logic into the component TSX. Also, inline arrow functions inside the `render` can have a performance impact.

Let's move it out into a class method, which also makes that behavior easier to test in isolation:

```typescript
incrementCounter = () => {
  this.setState({ count: this.state.count + 1 });
};

render() {
  const { label = "Count" } = this.props;
  return (
    <div>
      <span title="Count Label">{label}</span>
      <span
        id="counter"
        title="Current Count"
        onClick={this.incrementCounter}
      >
        {this.state.count}
      </span>
    </div>
  );
}
```

The above was a bit of a lie: this isn't strictly a class *method*. It is a property that is an arrow function. This solves the issue of binding, allowing `this` to be bound to the component instance, not the event.

The `incrementCounter` arrow function actually gets an *event* passed in, which we aren't using. Let's add it in:

```typescript
incrementCounter = (event) => {
  this.setState({count: this.state.count + 1});
};
```

This works but TypeScript gives a compiler error. Our `tsconfig.json` disallows implicit `any`:

```
Error:(21, 23) TS7006: Parameter 'event' implicitly has an 'any' type.
```

That's easy enough to solve:

```typescript
incrementCounter = (event: any) => {
  this.setState({ count: this.state.count + 1 });
};
```

But that's cheating. What type is that event? It's a `MouseEvent`. Let's put the correct typing on the argument:

```typescript
incrementCounter = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({count: this.state.count + 1});
};
```

Ugh, that's a lot of keystrokes. Is it worth it? Let's show why. First, in`incrementCounter`, let's determine the value to increment by, first as a mistake:

```typescript {2,3}
incrementCounter = (event: React.MouseEvent<HTMLElement>) => {
    const inc = 10 ? event.shiftKey : 1;
    this.setState({count: this.state.count + inc});
}
```

TypeScript told us that we were trying to add a boolean to a number. Let's set the type of `inc` explicitly, instead of inferring it. Our first fix:

```typescript
const inc: number = 10 ? event.shiftKey : 1;
```

That's closer. TypeScript now moves the error to the correct line:

```shell script
Error:(28, 31) TS2365: Operator '+' cannot be applied to types 
'number' and 'boolean | 1'.
```

We see that we have the order wrong on the ternary...a frequent, maddening, easy-to-miss error: Here's the correct version:

```typescript
const inc: number = event.shiftKey ? 10 : 1;
```

Our test now passes.

## Advance By Ten with Shift-Click

Let's add one more feature: if you click with the Shift key pressed, you increase the count by 10.

`create-react-library` includes [Testing Library](https://testing-library.com) which, as we saw above, bundles simple event firing. We need to simulate "modifiers" to an event: a shift pressed during a mouse event. For simulating more complex events, we need to install [user-event](https://github.com/testing-library/user-event):

```bash
$ npm install @testing-library/user-event @testing-library/dom --save-dev
```

*Note: After installing this, you might get a TypeScript error in `pretty-format/build/index.d.ts`. If so, go to your `package.json` and upgrade the `typescript` version to be `^3.8.3` then `npm install`.*

Once installed, we import `userEvent` at the top of `Counter.test.tsx`:

```typescript
import userEvent from "@testing-library/user-event";
```

On to the feature, first by writing a test. Clone the last test and change it to the following:

```typescript
test("should increment the count by ten", () => {
  const { getByTitle } = render(<Counter />);
  const counter = getByTitle("Current Count");
  expect(counter).toHaveTextContent("0");
  userEvent.click(counter, { shiftKey: true });
  expect(counter).toHaveTextContent("10");
});
```

In this test, we changed from `fireEvent` in `testing-library` to `userEvent` in `user-event`. The click passes in some information saying `shiftKey` was "pressed".

The test passes! Our code in `Counter.handleIncrement` above worked and is now tested. Even better, we did this entire step -- adding a multi-featured click incrementer -- without visiting the browser.

Which we'll do now. As we have been doing at the end, give this a try in the browser by firing up the `start` run configuration and clicking, then shift-clicking, on the counter. When done, terminate the `start` process.
