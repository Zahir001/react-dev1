import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("Parent constructor");
    }
    componentDidMount() {
        console.log("Parent did mount");
    }
    render() {
        console.log("Parent render");
        return (
            <div>
                <h1>This is about Page</h1>
                <hr />
                <UserClass
                    name={"black shadow by class component"}
                    location={"Near black ghaati"}
                />
            </div>
        );
    }
}
export default About;
