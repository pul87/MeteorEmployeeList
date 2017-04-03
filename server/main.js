import { Meteor } from "meteor/meteor";
import _ from "lodash";
import { image, helpers } from "faker";

import { Employees } from "../imports/collections/employees";

Meteor.startup(() => {

    // Check if the Employees collaction has records
    const numberRecords = Employees.find({}).count();
    if (!numberRecords) {
        _.times(5000, () => {
            const { email, name, phone } = helpers.createCard();
            Employees.insert({
                email, name, phone,
                avatar: image.avatar(),
            });
        });
    }

    // publications
    Meteor.publish("employees", function(perPage) {
        return Employees.find({}, { limit: perPage });
    });
});