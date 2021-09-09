---
type: TutorialStep
date: 2020-10-12
title: TSX and ES6
technologies:
  - react
topics: [ ]
author: pwe
subtitle: Using React and TypeScript means good JSX and ES6+ support in the IDE. This section shows some useful features from both.
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/JXrZDUzkc2Q
---

TypeScript is a JavaScript superset with a compiler that enforces the types. It's also, though, one of those sexy new JavaScript flavors that implement "ES6", "ES7"...actually, a family of modern JavaScript standards for more productive programming. When combined with other tooling, it also supports JSX, React's sorta-templating system, but with TypeScript semantics.

We glazed over the ES6 and JSX (that is, TSX) in previous steps. Let's take more of a look.

## Code

The finished code for this tutorial step is [in the repository](https://github.com/JetBrains/jetbrains_guide/tree/master/sites/webstorm-guide/demos/tutorials/react_typescript_tdd/tsx_es6/).

## Cleanup

First, make sure our `All Tests` run config is running and watching our coding.

The previous steps made changes to the app to introduce topics. Let's clean up a little bit.

First, change `App.test.tsx` back to one simple test:

```typescript
import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders hello react", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/hello react/i);
  expect(linkElement).toBeInTheDocument();
});
```

Also, our component in `App.tsx`:

```typescript
import React from "react";

function App() {
  return (
    <div>
      <h1>Hello React</h1>
    </div>
  );
}

export default App;
```

Make sure the test runner is still running and watching. Let's also *keep* the `start` task as we'll use it later in this step.

Our two tests pass. Let's see some ES6 and TSX.

## Heading Subcomponent

Our heading is quite simple, but this isn't always the case. For example, it might have a event handler for clicks. Let's extract this heading into a standalone `Heading` component, and do so using TDD, thus first writing a test.

In `App.test.tsx`, let's add a test for what will be our new component:

```typescript
test("renders heading", () => {
  const { getByText } = render(<Heading />);
  const linkElement = getByText(/hello react/i);
  expect(linkElement).toBeInTheDocument();
});
```

Your test runner will now say that 1 test passed but 1 test failed. Which is good!

In `App.tsx` we'll add a `Heading` component:

```typescript
export function Heading() {
  return <h1>Hello React</h1>;
}
```

As a note, since so much of React is about refactoring big components into small "presentation" components, the IDE can automate this. Instead of typing the above, we could just select `<h1>Hello React</h1>`, invoked Refactor, and chosen `Extract Component`.

![Extract Component](./screenshots/extract_component.png)

With this component in place, we can now go back to the test and import it. Instead of doing so manually, click on `<Heading />`, hit `Alt-Enter`, and choose `Add import statement`. When you save, the test re-runs, and now both tests pass:

![Tests Pass](./screenshots/tests_pass.png)

Note that our `App` component isn't yet using this. Change the `App` to call the component:

```typescript
function App() {
  return (
    <div>
      <Heading />
    </div>
  );
}
```

When you save, the tests will run and pass, as the output remains the same.

## Arguments and Defaults

This `Heading` component is nice, but it isn't exactly re-usable: it says the same thing every time! Let's change it so "parent" components can pass in a value for the "name" to say hello to.

We'll first write a new test:

```typescript
test("renders heading with argument", () => {
  const { getByText } = render(<Heading name={`World`}/>);
  const linkElement = getByText(/hello world/i);
  expect(linkElement).toBeInTheDocument();
});
```

Thanks to TypeScript and the IDE, we "failed faster": it immediately told us, with a red-squiggly, that we violated the contract. `Heading` doesn't take a `name` prop.

![Red Squiggly](./screenshots/red_squiggly.png)

Let's head to the `Heading` component and fix it:

```typescript {1,2}
export function Heading({ name }) {
  return <h1>Hello {name}</h1>;
}
```

What's up with the `{ name }` in the function parameters? ECMAScript 6 -- aka ES6 -- introduced [destructing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) of arrays and objects. With this syntax, the "props" object was passed in, but we asked the `name` property from `props` to be "extracted" into a `const` variable in the function's scope.

Our new test now passes, but we're left with several problems:

- TypeScript is unhappy that the `name` prop parameter is untyped
- The usage of `Heading` in `App` also complains that it is missing an argument
- The second test no longer passes, as `Hello React` is no longer returned

Let's address each in the next two sections.

## Props and Typing

Components have props (and sometimes state) which make up the contract with the outside world. This works well for [component-driven development](https://www.chromatic.com/blog/component-driven-development/). Especially well, in fact, when used with IDEs that can not only autocomplete props but validate the types of the values.

TypeScript combines nicely with React to power this. Let's express the props contract with TypeScript typing, first doing so inline:

```typescript
export function Heading({ name }: {name: string}) {
  return <h1>Hello {name}</h1>;
}
```

With this, we said that the props for `Heading` are shaped like `{ name: string }`. We've thus written down the contract for the props.

But that's kind of ugly and doesn't allow us to reference that contract in, for example, sample data in tests. Let's move the contract into a standalone type definition:

```typescript
type HeadingProps = { name: string };

export function Heading({ name }: HeadingProps) {
  return <h1>Hello {name}</h1>;
}
```

As a note, many React examples use TypeScript *interfaces* for props, instead of types. This tutorial follows the [rationale for types](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/types_or_interfaces) as explained in the [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app). Namely:

- Use `interface` for public APIs because they are more expressive
- Use `type` for props and state because it is more constrained

## Default Prop Value

We fixed the problem with the TypeScript compiler complaining about missing type information. Let's now tackle the second problem: `App` isn't passing a prop into `Heading`. But let's solve that by showing another feature from ES6: default argument values.

As we saw, such changes can break existing contracts, which you have to find and fix. A better transition? Have a default value for parent components that don't provide the prop. Fortunately, ES6 introduced default values for arguments:

```typescript {1}
export function Heading({ name = "React" }: HeadingProps) {
  return <h1>Hello {name}</h1>;
}
```

Our test now passes. But the two usages of `Heading` -- in our code and our test -- still have TypeScript compiler errors:

```
Error:(12, 8) TS2741: Property 'name' is missing in type '{}' but required in type 'HeadingProps'.
```

The contract in `type HeadingProps` says that `name` is a required prop. Making it optional is a one-character change:

```typescript
type HeadingProps = { name?: string };
```

With this `?` added, all of our tests pass *and* TypeScript says we have obeyed all the contracts.

## Single Responsibility Principle

React likes to promote something called the [single responsibility principle](https://reactjs.org/docs/thinking-in-react.html). We saw this above, extracting the heading into a component focused on the heading. This frequently extends to files as well: one component per file.

Let's move the heading to its own file. This is another frequent task which the IDE can automate. Click somewhere in `Heading`, open the Refactor menu, and select `Move`. You will get a dialog like this:

![Move Members](./screenshots/move.png)

Make sure to choose `HeadingProps` as part of the move, and optionally do a preview first. Once done, the IDE will make the following changes for you:

- Make a new file
- Put it in VCS
- Cut the `type` and `function` from `App.tsx`
- Paste those into the new file
- Add the import for React
- Add an import in `App.tsx` to get the symbol from the new location
- Fixes the import in `App.test.tsx` to get `Heading` from the file

That's a lot of manual work, automated for us! With this, our `Heading.tsx` contains:

```typescript
import React from "react";

type HeadingProps = { name?: string };

export function Heading({ name = "React" }: HeadingProps) {
  return <h1>Hello {name}</h1>;
}
```

Next, `App.tsx` is much smaller:

```typescript
import React from "react";
import { Heading } from "./Heading";

function App() {
  return (
    <div>
      <Heading />
    </div>
  );
}

export default App;
```

We have one more step we can take with "single responsibility principle": move the `Heading` tests to their own `Heading.test.tsx` file. When you do so, the test runner will now show two "suites" of tests, from `Heading.test.tsx` and `App.test.tsx`:

![Two Suites](./screenshots/two_suites.png)

## JSX/TSX

React brought innovation to the concept of templating languages by extending JavaScript itself. Your "JSX" templating is mixed directly into your JavaScript file and component. TSX is the TypeScript flavor of JSX, with file extensions ending in `.tsx`.

Our professional IDEs have first-class support for JSX and TSX. What turns this on? In the project settings, look for `Languages & Frameworks -> JavaScript` which, for projects generated by the React App template, automatically sets the `JavaScript Language version:` to `React JSX`.

The easiest way to see TSX in action? Go to your `<h1>` and try to add `class=""`. TypeScript itself has JSX/TSX support in the compiler and gives a compiler error:

```
Error:(6, 14) TS2322: Type '{ children: string[]; class: string; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>'.
  Property 'class' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>'.
```

Also, the IDE refuses to autocomplete on `class`. It does, though, autocomplete on `className`, the JSX/TSX equivalent:

![Autocomplete](./screenshots/class_name.png)

Accepting the autocomplete shows that the IDE fills in `{}` for an attribute value instead of double-quotes. What's the difference? A double-quote contains a regular string, whereas brackets contain JavaScript expressions, which we saw above.

In components you frequently navigate around between markup and code. The IDE makes this easy. For example, in the `App` component, `Ctrl-B` or `Cmd-B` on `Heading` and you will navigate to that component.

You can go in the reverse direction as well. Click on the `Heading` then hit `Alt-F7`. This shows all the locations in your project which use that *symbol*, not the string. This is useful when you want the change a name through refactoring.

## Fail Faster: TDD+TypeScript

In this section we showed refactoring some TSX into its own component. We did so safely because we had tests. But we were also guided along the way with TypeScript, which told us when we were breaking contracts.

In fact, the two combined in test code to give us red-squigglies in the IDE. This is the essence of "fail faster": immediately see a problem, with a very precise description.