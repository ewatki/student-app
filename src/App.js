import './App.css';
import StudentList from './components/StudentList';
import ClassInfo from './components/ClassInfo';

function App() {
  // When we need to store multiple instances of some data, store the data in an array. JSX elements can embed and render arrays of other JSX elements in a comma separated list. 
  const studentData = [
    {
        id: 1,
        nameData: 'Ada',
        emailData: 'ada@dev.org'
    },
    {
        id: 2,
        nameData: 'Soo-ah',
        emailData: 'sooah@dev.org'
    },
    {
        id: 3,
        nameData: 'Chrissy',
        emailData: 'chrissy@dev.org'
    }
  ];
  return (
    <main>
      <h1>Attendance</h1>
      <ClassInfo></ClassInfo>
      <StudentList students={studentData}></StudentList>
    </main>
  );
}

export default App;

