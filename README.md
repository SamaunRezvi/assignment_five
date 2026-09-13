# Dev Stack Builder

A frontend project where developers can browse a curated list of technologies (frontend, backend, database, languages, styling and DevOps tools), pick the ones they like, and build a personal "stack" out of them, kind of like a shopping cart but for tech choices.

The whole idea started because I always found it annoying to keep a mental list of the tools I wanted to try out for a new project, so I built a small app that lets me explore them and collect the ones I'm interested in on the side.

## What it does

- Browse 15 technologies across categories like Frontend, Backend, Database, Language, Styling, DevOps and Tools.
- Each technology card shows an icon, a badge, a short description, its category, difficulty level and a star rating.
- Click "Add to Stack" to save a technology to your personal stack panel on the side.
- The same technology can't be added twice — trying again shows a toast warning instead.
- Remove a single item from the stack, or clear everything at once with "Remove All".
- Fully responsive layout that works on mobile, tablet and desktop.

## Tech Stack

- React (with hooks — useState, useEffect)
- Vite as the build tool
- Tailwind CSS for styling
- React-Toastify for the alert/notification popups
- Plain JSON file as the data source for the technology list

## Features

1. **Live stack builder** — adding and removing technologies updates the "Your Stack" panel instantly, with a running count of how many are selected.
2. **Toast notifications everywhere** — every action (add, duplicate attempt, remove, remove all) gives you clear feedback through react-toastify instead of silently changing state.
3. **One shared brand gradient** — the orange → pink → violet gradient used on the logo, the hero heading and the primary buttons is defined once in the Tailwind config and CSS, so re-theming the whole site is a one-line change.

## Getting Started

```bash
npm install
npm run dev
```

Then open `http://localhost:5173` in your browser.

To build for production:

```bash
npm run build
```

---

## React Questions

**1. What is JSX, and why is it used in React?**

JSX is a syntax extension for JavaScript that lets you write HTML-looking markup directly inside your JS/JSX files. Under the hood it gets compiled into regular `React.createElement()` calls. It's used because it makes describing what the UI should look like a lot easier to read and write than nesting a bunch of function calls by hand.

**2. What is the difference between props and state?**

Props are values passed down into a component from its parent — the component receiving them can't change them, they're read-only from its point of view. State is data a component manages internally with something like `useState`, and it can change over time (usually because of user interaction), which triggers a re-render. In short: props come from outside, state lives inside.

**3. What does the `useState` hook do, and where did you use it in this project?**

`useState` lets a functional component hold and update its own piece of data between renders. In this project I used it in a few places — for example in `TechnologiesSection.jsx` to keep track of the list of technologies fetched from the JSON file, the loading flag, and the array of technologies the user has added to their stack. I also used it in `Navbar.jsx` to track whether the mobile menu is open or closed.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**

`useEffect` runs a side effect after a component renders — things like fetching data, subscribing to something, or manually touching the DOM, which shouldn't happen directly during rendering. I needed it to load the technology data because fetching from the JSON file is an async operation that has to happen once when the component first mounts, not on every render, so I used `useEffect` with an empty dependency array (`[]`) to run it a single time.

**5. Why does every item in a `.map()` list need a unique `key` prop?**

React uses the `key` to figure out which items changed, were added, or were removed between renders, so it can update the DOM efficiently instead of re-rendering the whole list. Without a stable, unique key, React can mix up items when the list changes, which leads to weird bugs like wrong items being highlighted or input state jumping to the wrong row. In this project I used each technology's `id` as the key since it's guaranteed to be unique.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**

Conditional rendering just means showing different UI depending on some condition, instead of always rendering the same thing. I used it in `YourStack.jsx` — if the stack array is empty, it shows a "Your stack is empty" placeholder message, and if there's at least one item, it renders the actual list of selected technologies along with the "Remove All" button instead.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**

A parent passes data down to a child through props, just like passing arguments to a function — for example `<TechCard tech={tech} isAdded={isAdded} onAdd={handleAdd} />`. For a child to send information back up, the parent passes down a function as a prop (like `onAdd`), and the child calls that function whenever it needs to, passing along whatever data the parent needs. That's how, for example, clicking "Add to Stack" inside `TechCard` is able to update the stack state that actually lives in `TechnologiesSection`.

---

## Submission

- GitHub Repository Link:
- Live Site Link:
