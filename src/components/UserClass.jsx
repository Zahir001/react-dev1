import React from "react";
import Shimmer from "./Shimmer";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: [],
        };
        // console.log("child constructor");
    }
    async componentDidMount() {
        const data = await fetch("https://dummyjson.com/users");
        const json = await data.json();
        this.setState({
            userInfo: json,
        });
        console.log(json);
    }
    render() {
        if (this.state.userInfo.length === 0) {
            return (
                <div>
                    <Shimmer />
                </div>
            );
        }
        // const { name, location } = this.props;

        console.log("child render");
        const { firstName, address, bloodGroup } = this.state.userInfo?.users?.[0];
        return (
            <div>
                <h1>Personal Detail</h1>
                <h2>Name: {firstName}</h2>
                <h2>Address: {address.address}-{address.city},{address.state}</h2>
                <h2>BloodGroup: {bloodGroup}</h2>
                {/* <h2>{this.state.userInfo}</h2> */}
            </div>
        );
    }
}

export default UserClass;
