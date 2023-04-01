import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div>
            <div className='SingleQuestion'>
                <strong>1. What is The difference Between Props and state?</strong>
                <p>state is an updatable structure that is used to contain data or information about the component and can change over time. A state must be kept as simple as possible. It represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly.</p>
            </div>

            <div className='SingleQuestion'>
                <strong>2. How useState works?</strong>
                <p>useState is the ability to encapsulate local state in a functional component.useState hook is a special function that takes the initial state as an argument and returns an array of two entries. We can also pass a function as an argument if the initial state has to be computed. And the value returned by the function will be used as the initial state.</p>
            </div>

            <div className='SingleQuestion'>
                <strong>3. What is the work of useEffect?</strong>
                <p>By using this Hook, I can tell React that my component needs to do something after render. React will remember the function I passed and call it later after performing the DOM updates.</p>
            </div>

            <div className='SingleQuestion'>
                <strong>4. How Does react work?</strong>
                <p>React is a JavaScript library for building user interfaces.
                React's use of the virtual DOM and efficient diffing algorithms make it fast and performant, even for complex user interfaces. Additionally, React's modular architecture and focus on reusable components make it easy to build and maintain large-scale applications.
                </p>
            </div>
        </div>
    );
};

export default Questions;