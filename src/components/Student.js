import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

// Student component is a presentational componenet responsible for displaying student data (name and email)
const Student = (props) => {
    const [isPresent, setIsPresent] = useState(false);

    const togglePresence = () => {
        setIsPresent(!isPresent);
    }

    const nameColor = isPresent? 'green' : 'red';
    return (
        <div>
            <ul>
                <li className ={nameColor}>Nickname: {props.name}</li>
                <li>Email: {props.email}</li>
                <button onClick={togglePresence}>Toggle if {props.name} is present</button>
            </ul>
        </div>
    )
}

Student.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    isPresent: PropTypes.bool
};

export default Student;