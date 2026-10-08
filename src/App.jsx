import "./App.css";
import CourseCard from "./components/CourseCard";
import PersonList from "./components/PersonList";

function App() {
  const people = [
    { name: "Lars", age: 36 },
    { name: "Tony", age: 13 },
    { name: "Dan", age: 9001 },
  ];

  return (
    <>
      <PersonList people={people} />
    </>
  );
}

export default App;
