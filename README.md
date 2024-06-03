# BMI-calculator

## Characteristics of `useContext`

1. `useContext` allows you to create a context for your state, making it easy to share state between components without prop drilling.

2. Context has two main parts: the Provider and the Consumer:
    - The Provider component is used to pass the current state to the tree below.
    - useContext is used in the consumer components to access the state provided by the context.

3. Avoid Prop Drilling: It helps to avoid prop drilling, which is the process of passing data through many levels of a component tree.

4. Global State Management: `useContext` is useful for global state management, especially for smaller applications or specific parts of a larger application.

5. Static Context Value: Context values should be relatively static. If the value changes frequently, it can cause unnecessary re-renders and performance issues.

