<div align="center">

<img src="./src/assets/logo-text.png" alt="Dev Stack" width="220" />

# Dev Stack Builder

**Explore technologies. Pick your tools. Build your stack.**

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&amp;weight=600&amp;size=22&amp;duration=2600&amp;pause=1000&amp;color=EC4899&amp;center=true&amp;vCenter=true&amp;width=600&amp;height=55&amp;lines=Build+Your+Ideal+Development+Stack;Frontend+to+Database;Your+Tools.+Your+Next+Project." alt="Animated heading: Build your ideal development stack. Frontend to database. Your tools, your next project." width="600" />

<br />

<img src="./src/assets/banner-stack.png" alt="A 3D illustration of stacked technology layers glowing in pink, violet and blue" width="360" />

<br />

<img src="https://img.shields.io/badge/React-18-8b5cf6?style=for-the-badge&amp;logo=react&amp;logoColor=white" alt="React 18" />
<img src="https://img.shields.io/badge/Vite-6-f97316?style=for-the-badge&amp;logo=vite&amp;logoColor=white" alt="Vite 6" />
<img src="https://img.shields.io/badge/Tailwind_CSS-3-ec4899?style=for-the-badge&amp;logo=tailwindcss&amp;logoColor=white" alt="Tailwind CSS 3" />

<p>
  <a href="#what-it-does">Features</a> &middot;
  <a href="#tech-stack">Tech Stack</a> &middot;
  <a href="#getting-started">Run Locally</a> &middot;
  <a href="#react-questions">React Questions</a> &middot;
  <a href="#submission">Submission</a>
</p>

**15 technologies &nbsp; / &nbsp; 7 categories &nbsp; / &nbsp; Your own stack**

</div>

## About the Project

Dev Stack Builder is a React frontend project for exploring development tools and collecting the ones you want to use. Browse technology cards, check their categories and ratings, then add your choices to the Your Stack panel.

The interface uses an orange, pink and violet gradient with a 3D stack illustration, simple cards and a responsive layout.

## What it does

| Explore | Build | Manage |
| :--- | :--- | :--- |
| Browse 15 technology cards across 7 categories. | Add technologies to your personal stack. | Remove one selection or clear the whole stack. |
| View each tool's icon, description, badge, difficulty and rating. | See the selected count update immediately. | Get toast feedback when the selection changes. |
| Use the layout on mobile, tablet and desktop. | Added cards show their selected state. | Duplicate entries are prevented. |

### From browsing to building

1. Open **Explore the Technologies** and browse the cards.
2. Click **Add to Stack** on a technology you want to use.
3. Review your choices in **Your Stack** with the current selection count.
4. Remove an individual tool or use **Remove All** to start again.

Selections are kept in React state for the current page session. Refreshing the page resets the stack.

## Tech Stack

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

- **Live stack panel:** Adding or removing a technology updates the list and selected count immediately.
- **Duplicate protection:** An added card has a disabled button, and the add handler also checks for existing selections.
- **Action feedback:** Toast messages confirm additions, removals and clearing the stack. The duplicate guard has a warning message.
- **Responsive navigation:** A collapsible menu supports smaller screens.
- **Loading state:** A spinner appears while the local technology catalog loads.
- **Consistent branding:** The logo, hero heading and primary buttons share the project's orange, pink and violet palette.

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

- **GitHub Repository Link:** [SamaunRezvi/assignment_five](https://github.com/SamaunRezvi/assignment_five)
- **Live Site Link:** Not provided yet.

<div align="center">

<br />

**Dev Stack Builder**

Explore. Select. Build.

</div>
