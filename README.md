<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&amp;color=0:f97316,55:ec4899,100:8b5cf6&amp;height=110&amp;section=header" alt="Orange, pink and violet wave" width="100%" />

<img src="./src/assets/logo-text.png" alt="Dev Stack" width="190" />

<p><sub>EXPLORE &nbsp; / &nbsp; SELECT &nbsp; / &nbsp; BUILD</sub></p>

# Dev Stack Builder

**A thoughtful toolkit for your next project.**

<p>
  <a href="#what-it-does">Experience</a> &nbsp; &middot; &nbsp;
  <a href="#tech-stack">Technologies</a> &nbsp; &middot; &nbsp;
  <a href="#getting-started">Quick Start</a> &nbsp; &middot; &nbsp;
  <a href="#react-questions">React Questions</a> &nbsp; &middot; &nbsp;
  <a href="#submission">Submission</a>
</p>

</div>

<br />

<table>
<tr>
<td width="55%" valign="middle">
  <h3>Your next idea.<br />Your ideal stack.</h3>
  <p>Discover the tools behind modern development. Bring your frontend, backend and database choices together in one personal stack.</p>
  <p>Explore a card. Find your fit. Add it to your stack.</p>
  <br />
  <a href="#getting-started"><img src="https://img.shields.io/badge/GET_STARTED-f97316?style=for-the-badge" alt="Get started" /></a>
  <a href="https://github.com/SamaunRezvi/assignment_five"><img src="https://img.shields.io/badge/VIEW_SOURCE-8b5cf6?style=for-the-badge&amp;logo=github&amp;logoColor=white" alt="View source on GitHub" /></a>
</td>
<td width="45%" align="center" valign="middle">
  <img src="./src/assets/banner-stack.png" alt="A 3D illustration of stacked technology layers glowing in pink, violet and blue" width="360" />
</td>
</tr>
</table>

<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&amp;weight=500&amp;size=20&amp;duration=2800&amp;pause=1400&amp;color=EC4899&amp;center=true&amp;vCenter=true&amp;width=640&amp;height=65&amp;lines=Build+Your+Ideal+Development+Stack;Explore.+Select.+Make+It+Yours.;From+Your+First+Tool+to+Your+Full+Stack." alt="Animated heading: Build your ideal development stack. Explore, select, make it yours. From your first tool to your full stack." width="640" />

</div>

<table>
<tr>
<td width="33%" align="center"><h3>15</h3><sub>CURATED TECHNOLOGIES</sub><br /><br /></td>
<td width="34%" align="center"><h3>07</h3><sub>DEVELOPMENT CATEGORIES</sub><br /><br /></td>
<td width="33%" align="center"><h3>01</h3><sub>PERSONAL STACK</sub><br /><br /></td>
</tr>
</table>

<br />

## About the Project

Dev Stack Builder is a React frontend project for exploring development tools and collecting the ones you want to use. Browse technology cards, check their categories and ratings, then add your choices to the Your Stack panel.

The interface uses an orange, pink and violet gradient with a 3D stack illustration, simple cards and a responsive layout.

## What it does

<table>
<tr>
<td width="50%" valign="top">
  <sub>01 / DISCOVER</sub>
  <h3>A catalog worth exploring</h3>
  <p>Browse 15 technologies with icons, descriptions, categories, difficulty levels and ratings. Get the details before making a choice.</p>
</td>
<td width="50%" valign="top">
  <sub>02 / COLLECT</sub>
  <h3>Your stack, taking shape</h3>
  <p>Add a technology and see it appear in Your Stack. The selection count updates immediately, and added cards show their selected state.</p>
</td>
</tr>
<tr>
<td width="50%" valign="top">
  <sub>03 / REFINE</sub>
  <h3>Room to change your mind</h3>
  <p>Remove an individual tool or clear your selections and start fresh. Duplicate protection keeps each technology in the stack only once.</p>
</td>
<td width="50%" valign="top">
  <sub>04 / STAY INFORMED</sub>
  <h3>Feedback at every step</h3>
  <p>Toast notifications confirm selection changes. A loading indicator covers the catalog fetch, and the layout adapts to smaller screens.</p>
</td>
</tr>
</table>

### From browsing to building

1. Open **Explore the Technologies** and browse the cards.
2. Click **Add to Stack** on a technology you want to use.
3. Review your choices in **Your Stack** with the current selection count.
4. Remove an individual tool or use **Remove All** to start again.

Selections are kept in React state for the current page session. Refreshing the page resets the stack.

## Tech Stack

<p align="center">
  <img src="https://img.shields.io/badge/React-18-18181b?style=for-the-badge&amp;logo=react&amp;logoColor=61DAFB" alt="React 18" />
  <img src="https://img.shields.io/badge/Vite-6-18181b?style=for-the-badge&amp;logo=vite&amp;logoColor=A78BFA" alt="Vite 6" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3-18181b?style=for-the-badge&amp;logo=tailwindcss&amp;logoColor=38BDF8" alt="Tailwind CSS 3" />
  <img src="https://img.shields.io/badge/JavaScript-ES_Modules-18181b?style=for-the-badge&amp;logo=javascript&amp;logoColor=F7DF1E" alt="JavaScript ES modules" />
</p>

| Technology | Role in this project |
| :--- | :--- |
| React 18 | Components, props, state and UI updates |
| Vite 6 | Local development server and production build |
| Tailwind CSS 3 | Responsive layouts, spacing and brand colors |
| DaisyUI | Loading spinner styling |
| React Toastify | Selection feedback and notifications |
| Local JSON | Technology catalog loaded with `fetch` |

### Technology Catalog

| Category | Available technologies |
| :--- | :--- |
| Frontend | React, Vue.js, Svelte, Next.js |
| Backend | Node.js |
| Database | PostgreSQL, Redis, MongoDB |
| Language | JavaScript, TypeScript, Java |
| Styling | Tailwind CSS |
| DevOps | Docker |
| Tools | Git, Vite |

## Features

| Detail | How it works |
| :--- | :--- |
| Shared selection state | `TechnologiesSection` keeps the catalog and stack panel in sync. |
| Duplicate guard | Selected cards disable their add button. The add handler also checks for duplicates and can show a warning toast. |
| Mobile navigation | A collapsible menu provides navigation on smaller screens. |
| Brand palette | Orange `#f97316`, pink `#ec4899` and violet `#8b5cf6` connect the logo, hero and primary buttons. |
| Local catalog | Technology data is fetched from `public/data/technologies.json`. |

## Getting Started

Install Node.js and npm, then run these commands from the project folder:

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal, usually `http://localhost:5173`.

| Command | Purpose |
| :--- | :--- |
| `npm run dev` | Start the development server |
| `npm run build` | Create the production build in `dist` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Check the code with ESLint |

## React Questions

The React concepts used to build the catalog, selection flow and stack panel.

### 1. What is JSX, and why is it used in React?

JSX is a syntax extension for JavaScript that lets us write markup inside a component. A build tool transforms it into JavaScript calls that describe React elements. It makes the UI easier to read because the markup and the expressions used to display data can stay together. In this project, the technology cards and stack panel are written with JSX.

### 2. What is the difference between props and state?

Props are values a parent passes to a child component. The child reads them without changing them directly. State is data a component stores and updates, and updating it asks React to render the UI again. Here, `TechnologiesSection` owns the `stack` state and passes it to `YourStack` as a prop.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` stores a value between renders and provides a function to update it. In `TechnologiesSection.jsx`, it holds the fetched technologies, the loading flag and the selected stack. In `Navbar.jsx`, it stores whether the mobile menu is open.

```jsx
const [stack, setStack] = useState([])
```

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs an effect after React commits a render. In this project, it fetches `/data/technologies.json` and updates the technology list and loading state when the request completes. The empty dependency array means the effect does not run again for ordinary state updates. React Strict Mode can run an extra setup cycle during development.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A stable key helps React match a list item with the same item on the next render, even when items are added or removed. Keys should be unique among siblings. This project uses each technology's `id` as the key for both technology cards and selected stack items.

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).

Conditional rendering chooses which UI to show based on a condition. In `YourStack.jsx`, `stack.length === 0` shows the "Your stack is empty." placeholder. When the stack contains items, the component shows the selected technologies, their count and the **Remove All** button.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data through props. It can also pass a callback function for the child to call when an action happens.

```jsx
<TechCard tech={tech} isAdded={isAdded} onAdd={handleAdd} />
```

In this example, `tech` and `isAdded` supply the card's data and selection status. Clicking **Add to Stack** calls `onAdd(tech)` inside `TechCard`. The parent's `handleAdd` function then updates the stack state in `TechnologiesSection`.

## Submission

| Resource | Link |
| :--- | :--- |
| GitHub Repository Link | [SamaunRezvi/assignment_five](https://github.com/SamaunRezvi/assignment_five) |
| Live Site Link | Not provided yet. |

<div align="center">

<br />

<img src="./src/assets/logo-text.png" alt="Dev Stack" width="150" />

<p><strong>Good projects start with thoughtful choices.</strong><br /><sub>Explore. Select. Build.</sub></p>

<a href="#dev-stack-builder">Back to top &uarr;</a>

<img src="https://capsule-render.vercel.app/api?type=waving&amp;color=0:f97316,55:ec4899,100:8b5cf6&amp;height=100&amp;section=footer" alt="Orange, pink and violet footer wave" width="100%" />

</div>
