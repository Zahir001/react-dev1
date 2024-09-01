import { useState } from "react";

const User = ({name}) => {
  const [count] = useState(0);
  const [count2] = useState(2);
    return (
        <div>
            <h1>Personal Detail</h1>
            <h1>count: {count}</h1>
            <h1>count: {count2}</h1>
            <h2>Name: {name}</h2>
            <h3>Age: 200 Year</h3>
            <h3>email: shadow123@gmail.com</h3>
            <h3>address: Near black ghaati</h3>
        </div>
    );
};

export default User;