[
  {
    id: "q_components_jsx_1",
    topicId: "components_jsx",
    question:
      "Which syntax extension allows writing HTML-like code in JavaScript?",
    options: ["JSX", "TypeScript", "Babel", "Webpack"],
    correctIndex: 0,
    explanation:
      "JSX is a syntax extension for JavaScript that looks similar to HTML and is commonly used with React.",
  },
  {
    id: "q_components_jsx_2",
    topicId: "components_jsx",
    question: "How must a React component's name start?",
    options: [
      "With a lowercase letter",
      "With an uppercase letter",
      "With a number",
      "With an underscore",
    ],
    correctIndex: 1,
    explanation:
      "React treats names starting with a lowercase letter as DOM tags, so components must start with an uppercase letter.",
  },
  {
    id: "q_components_jsx_3",
    topicId: "components_jsx",
    question:
      "What is the correct way to render a functional component called Welcome?",
    options: ["welcome()", "<welcome />", "<Welcome />", "{Welcome}"],
    correctIndex: 2,
    explanation:
      "In JSX, a component is rendered using a capitalized tag name: <Welcome />.",
  },

  {
    id: "q_state_events_1",
    topicId: "state_events",
    question: "Which hook is used to add state to a functional component?",
    options: ["useEffect", "useState", "useReducer", "useContext"],
    correctIndex: 1,
    explanation:
      "useState is the primary hook for managing local state in functional components.",
  },
  {
    id: "q_state_events_2",
    topicId: "state_events",
    question: "What is the correct way to update state in React?",
    options: [
      "Directly mutate the state variable",
      "Call the setter function returned by useState",
      "Assign a new value to this.state",
      "Use the forceUpdate method",
    ],
    correctIndex: 1,
    explanation:
      "State should be updated immutably using the setter function provided by useState or setState.",
  },
  {
    id: "q_state_events_3",
    topicId: "state_events",
    question:
      "Which JSX attribute is used to handle a click event on a button?",
    options: ["click", "handleClick", "onClick", "onPress"],
    correctIndex: 2,
    explanation:
      "React uses camelCase event names, so the correct attribute is onClick.",
  },
  {
    id: "q_props_1",
    topicId: "props",
    question: "What are props in React?",
    options: [
      "Data passed from parent to child components",
      "Internal state of a component",
      "Functions for updating the DOM",
      "Global variables",
    ],
    correctIndex: 0,
    explanation:
      "Props are read-only inputs passed from parent to child components.",
  },
  {
    id: "q_props_2",
    topicId: "props",
    question: "How do you access props in a functional component?",
    options: ["this.props", "props argument", "useProps()", "React.getProps()"],
    correctIndex: 1,
    explanation:
      "Functional components receive props as their first argument, while class components access them via this.props.",
  },
  {
    id: "q_props_3",
    topicId: "props",
    question: "Can a child component modify its own props directly?",
    options: [
      "Yes, using setProps",
      "Yes, if they are mutable",
      "No, props are read-only",
      "Only inside useEffect",
    ],
    correctIndex: 2,
    explanation:
      "Props are immutable; a child should use callbacks to communicate changes to the parent.",
  },
  {
    id: "q_effects_1",
    topicId: "effects",
    question: "What is the purpose of the dependency array in useEffect?",
    options: [
      "To specify when the effect should re-run",
      "To list all variables used in the component",
      "To prevent the effect from running",
      "To define the effect's return value",
    ],
    correctIndex: 0,
    explanation:
      "The dependency array controls when the effect runs by specifying which values, when changed, trigger the effect to re-run.",
  },
  {
    id: "q_effects_2",
    topicId: "effects",
    question:
      "What is the role of the cleanup function returned from useEffect?",
    options: [
      "It runs after every render",
      "It runs before the component unmounts or before the effect re-runs",
      "It runs only on initial mount",
      "It runs only when the component updates",
    ],
    correctIndex: 1,
    explanation:
      "The cleanup function is executed before the component unmounts or before the effect re-runs, allowing you to clean up subscriptions, timers, etc.",
  },
  {
    id: "q_effects_3",
    topicId: "effects",
    question:
      "Which of the following correctly runs an effect only once after the initial render?",
    options: [
      "useEffect(() => { ... })",
      "useEffect(() => { ... }, [])",
      "useEffect(() => { ... }, null)",
      "useEffect(() => { ... }, undefined)",
    ],
    correctIndex: 1,
    explanation:
      "Passing an empty array as the second argument to useEffect ensures the effect runs only once after the initial mount.",
  },
  {
    id: "q_forms_1",
    topicId: "forms",
    question: "Which attribute makes an input a controlled component in React?",
    options: ["value", "defaultValue", "initialValue", "placeholder"],
    correctIndex: 0,
    explanation:
      "A controlled input uses the value prop bound to state and an onChange handler to update it.",
  },
  {
    id: "q_forms_2",
    topicId: "forms",
    question:
      "How do you prevent the default page reload on form submission in React?",
    options: [
      "return false;",
      "event.preventDefault();",
      "event.stopPropagation();",
      "form.preventDefault();",
    ],
    correctIndex: 1,
    explanation:
      "Calling event.preventDefault() inside the onSubmit handler stops the browser's default form submission behavior.",
  },
  {
    id: "q_forms_3",
    topicId: "forms",
    question:
      "Which event handler is used to update state as the user types in a text input?",
    options: ["onChange", "onInput", "onKeyUp", "onSubmit"],
    correctIndex: 0,
    explanation:
      "In React, the onChange event fires on every keystroke, making it suitable for controlled inputs.",
  },
  {
    id: "q_usereducer_1",
    topicId: "usereducer",
    question:
      "Which hook is best suited for managing complex state logic with actions?",
    options: ["useState", "useReducer", "useEffect", "useContext"],
    correctIndex: 1,
    explanation:
      "useReducer is preferred when state transitions are complex or involve multiple sub-values.",
  },
  {
    id: "q_usereducer_2",
    topicId: "usereducer",
    question: "What arguments does a reducer function receive?",
    options: [
      "(state, action)",
      "(action, state)",
      "(initialState, dispatch)",
      "(state, props)",
    ],
    correctIndex: 0,
    explanation:
      "A reducer is a pure function that takes the current state and an action, then returns the next state.",
  },
  {
    id: "q_usereducer_3",
    topicId: "usereducer",
    question: "What does the useReducer hook return?",
    options: [
      "[state, dispatch]",
      "[dispatch, state]",
      "{ state, dispatch }",
      "[state, setState]",
    ],
    correctIndex: 0,
    explanation:
      "useReducer returns an array containing the current state and a dispatch function, similar to useState.",
  },
  {
    id: "q_react_router_1",
    topicId: "react_router",
    question: "Which component is used to define a route in React Router?",
    options: ["<Route>", "<Router>", "<Link>", "<Switch>"],
    correctIndex: 0,
    explanation:
      "The <Route> component maps a specific path to a component or element to render.",
  },
  {
    id: "q_react_router_2",
    topicId: "react_router",
    question: "How do you navigate programmatically in React Router v6?",
    options: ["useHistory", "useNavigate", "useLocation", "<Redirect>"],
    correctIndex: 1,
    explanation:
      "The useNavigate hook returns a function that lets you navigate programmatically.",
  },
  {
    id: "q_react_router_3",
    topicId: "react_router",
    question: "Which hook is used to access URL parameters in React Router?",
    options: ["useParams", "useSearchParams", "useLocation", "useRouteMatch"],
    correctIndex: 0,
    explanation:
      "useParams returns an object of key/value pairs from the current URL's dynamic segments.",
  },

  {
    id: "q_custom_hooks_1",
    topicId: "custom_hooks",
    question: "What is a custom hook in React?",
    options: [
      "A function that starts with 'use' and can call other hooks",
      "A built-in component for state management",
      "A method available only in class components",
      "A special type of CSS module",
    ],
    correctIndex: 0,
    explanation:
      "Custom hooks are JavaScript functions whose names start with 'use' and may call other hooks, allowing you to extract and reuse stateful logic.",
  },
  {
    id: "q_custom_hooks_2",
    topicId: "custom_hooks",
    question: "Which of the following is a valid name for a custom hook?",
    options: ["fetchData", "useFetchData", "dataFetchingHook", "hookFetchData"],
    correctIndex: 1,
    explanation:
      "Custom hooks must start with the prefix 'use' to follow the Rules of Hooks and to indicate that they contain hook calls.",
  },
  {
    id: "q_custom_hooks_3",
    topicId: "custom_hooks",
    question: "What is the primary benefit of using custom hooks?",
    options: [
      "To reuse stateful logic between components",
      "To improve CSS styling",
      "To replace the need for any state management",
      "To optimize JavaScript performance automatically",
    ],
    correctIndex: 0,
    explanation:
      "Custom hooks allow you to extract component logic into reusable functions, sharing stateful logic without changing the component hierarchy.",
  },
];
