
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';


const Blog = () => {
      return (
        <div >
            <Accordion style={{minHeight:'100vh', width:'70%'}}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>what is the prupose of react router</Accordion.Header>
            <Accordion.Body>
            <p>React Router is a JavaScript library used to handle client and server-side routing in React applications. It allows the creation of single-page web or mobile apps that allows navigation without the page refreshing. React Router also gives us access to browser history features while maintaining the correct view of the application.React Router uses a component-based approach to routing. It provides different routing components as needed by the application. </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>How does context API Work?</Accordion.Header>
            <Accordion.Body>
            The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application. The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. React.createContext() is all we need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Using useRef and details about it</Accordion.Header>
            <Accordion.Body>
            The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly. If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render. To avoid this, we can use the useRef Hook.
            In general, we want to let React handle all DOM manipulation. But there are some instances where useRef can be used without causing issues. In React, we can add a ref attribute to an element to access it directly in the DOM.
            The useRef Hook can also be used to keep track of previous state values. This is because we are able to persist useRef values between renders.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        </div>
        
      );
    }
    


export default Blog;