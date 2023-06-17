import React from 'react';
import './StudentList.css';
import Student from './Student';
import PropTypes from 'prop-types';

// StudentList is a container component, responsible for using presentational componenents
// This component displays a list of students, where each Student is an <li> element
const StudentList = (props) => {

  const studentComponents = props.students.map((student, index) => {
    return (
        <li key={student.id}>
          <Student 
            id={student.id}
            name={student.nameData} 
            email={student.emailData}>
            isPresent={student.isPresentData}
          </Student>
        </li>
    );
  });

  return (
    <section>
      <h2 className="student-list__heading">Student List</h2>
      <ul className="student-list">
        {studentComponents}
      </ul>
  </section>
  );
};

StudentList.propTypes = {
  students: PropTypes.arrayOf(PropTypes.shape({
      nameData: PropTypes.string.isRequired,
      emailData: PropTypes.string.isRequired,
      isPresentData: PropTypes.bool
  }))
};

export default StudentList;