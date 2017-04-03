import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { createContainer } from "meteor/react-meteor-data";
import { Employees } from "../../imports/collections/employees";

import EmployeeDetail from "./employee_detail";

const PER_PAGE = 10;

class EmployeeList extends Component {


    constructor(props) {
        super(props);

        this.state = { loadedItems: PER_PAGE };
    }

    loadData() {

        const itemsToLoad = this.state.loadedItems + PER_PAGE;
        Meteor.subscribe("employees", itemsToLoad );

        this.setState({ loadedItems: itemsToLoad });
    }

    render() {
        return (
            <div>
                <div className="employee-list">
                    { this.props.employees.map( employee => <EmployeeDetail key={employee._id} employee={employee}/> )}
                </div>
                <button onClick={this.loadData.bind(this)} className="btn btn-primary">Load More...</button>
            </div>
        );
    }
    
};

export default createContainer(() => {

    // setup subscription
    Meteor.subscribe("employees", PER_PAGE);
    // return the object that will be add to the component props
    // Employees is the Minimongo collection
    return { employees: Employees.find({}).fetch() };
}, EmployeeList);