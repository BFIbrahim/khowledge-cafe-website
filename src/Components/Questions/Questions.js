import React from 'react';

const Questions = () => {
    return (
        <div>
            <div SingleQuestion>
                <strong>What is The difference Between Props and state?</strong>
                <p>state is an updatable structure that is used to contain data or information about the component and can change over time. A state must be kept as simple as possible. It represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly.</p>
            </div>
        </div>
    );
};

export default Questions;