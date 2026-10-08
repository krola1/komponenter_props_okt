import PersonCard from "./PersonCard";

export default function PersonList(props) {
  return (
    <>
      <h1>Min meny</h1>
      {props.people.map((person, i) => (
        <PersonCard key={i} {...person} />
      ))}
    </>
  );
}
