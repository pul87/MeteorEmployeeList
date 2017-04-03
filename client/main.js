// Any JS here is immediately invoked

// Import the react library
import React from "react";
import ReactDOM from "react-dom";

import EmployeeList from "./components/employee_list";

// Create a component
const App = () => {

    return (
        <div>
            <EmployeeList />
        </div>
    );
}
// Render the component to the screen
Meteor.startup(() => {
    ReactDOM.render(<App />, document.querySelector('.container'));
});
