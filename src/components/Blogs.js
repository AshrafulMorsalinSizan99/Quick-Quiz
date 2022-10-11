import React from 'react';

const Blogs = () => {
    return (
        <div className='p-5'>
            <h2 className='text-3xl'>Ques: What is the purpose of react router?</h2>
            <p>Ans: React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.</p>
            <h2 className='text-3xl'>Ques: How does context api work?</h2>
            <p>Ans: Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. More information can be found on React's documentation page.</p>
            <h2 className='text-3xl'>Ques: What is useRef hook?</h2>
            <p>Ans: The useRef hook is the new addition in React 16.8. Before proceeding to this article there is a prerequisite to know about the ref in react.
                The useRef is a hook that allows to directly create a reference to the DOM element in the functional component.

                Syntax:

                const refContainer = useRef(initialValue);

                The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. </p>
        </div>
    );
};

export default Blogs;