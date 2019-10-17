# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a JavaScript library for building user interfaces. DOM operations are quite expensive in terms of performance, and will render slowly if there iare many DOM operations in the background. React solves this without having the page reload by a concept called th virtual DOM, and only updates certain parts of the 'state' with the parts that changed.

1. What does it mean to think in react?

It means you need to think about the component heirachy, what state your app might have and where it should live and what components if any need some data passed to it from props.

1. Describe state.

State is an internal data set which affects the rendering of the component. Once the state of a component changes it will re render itself according to the new state.

1. Describe props.

Props are properties of a react component. They look like html attributes and their values are commonly passed down by the parent component.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

A side effect is simply an operation you perform in a component, e.g data fetching, setting up a subscription or manually changing the DOM. You can use the useEffect hook which tells react to do something after initial render and then whenever the specified piece of state changes. 
