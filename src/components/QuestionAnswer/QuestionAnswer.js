import React from 'react';

const QuestionAnswer = () => {
    return (
        <div>
            <div className="flex flex-col w-full my-12 mx-auto">
                <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
                    <h1>Q1.How does react works?</h1>
                </div> 
                <div className="divider"></div> 
                <div className="grid card bg-base-300 rounded-box p-12 place-items-center">
                    <p className='text-secondary'>
                        A1. First of all, React is a JS library sololey focused on the User Interface making. Secondly, when a user interacts in the UI or changes any thing react immidietly detects it efficiently and updates the UI. Let's deep dive, react creates 2 (before change and after change) virtual dom which is very similar to the actual dom but not the actual dom, reacts dom are without the painting process in the browser. When a user interacts something changed react compares the before and after senerio and detects the node and it's child and updates them and finally send it to the real dom where the painting process occured at the final render. In order to compare react uses diff algorithm or the reconcilation which helps react to find out the changes.
                    </p>
                </div> 
                <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
                    <h1>Q2.What is the difference between props and state?</h1>
                </div> 
                <div className="divider"></div> 
                <div className="grid card bg-base-300 rounded-box p-12 place-items-center">
                    <p className='text-secondary'>
                        A1. First of all, React is a JS library sololey focused on the User Interface making. Secondly, when a user interacts in the UI or changes any thing react immidietly detects it efficiently and updates the UI. Let's deep dive, react creates 2 (before change and after change) virtual dom which is very similar to the actual dom but not the actual dom, reacts dom are without the painting process in the browser. When a user interacts something changed react compares the before and after senerio and detects the node and it's child and updates them and finally send it to the real dom where the painting process occured at the final render. In order to compare react uses diff algorithm or the reconcilation which helps react to find out the changes.
                    </p>
                </div> 
                <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
                    <h1>Q2.What is difference between props and state?</h1>
                </div> 
                <div className="divider"></div> 
                <div className="grid card bg-base-300 rounded-box p-12 place-items-center">
                    <p className='text-secondary'>
                        A1. First of all, React is a JS library sololey focused on the User Interface making. Secondly, when a user interacts in the UI or changes any thing react immidietly detects it efficiently and updates the UI. Let's deep dive, react creates 2 (before change and after change) virtual dom which is very similar to the actual dom but not the actual dom, reacts dom are without the painting process in the browser. When a user interacts something changed react compares the before and after senerio and detects the node and it's child and updates them and finally send it to the real dom where the painting process occured at the final render. In order to compare react uses diff algorithm or the reconcilation which helps react to find out the changes.
                    </p>
                </div> 
              
            </div>
        </div>
    );
};

export default QuestionAnswer;