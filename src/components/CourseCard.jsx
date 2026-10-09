import { images } from "../assets/exports";

export default function CourseCard(props) {
  console.log(images);

  return (
    <div className="course-card">
      {props.children}
      <h2>React grunnkurs</h2>
      <p>Hei {props.name}</p>
      <p>du er {props.age} år gammel og derfor passer dette kurset for deg</p>
      <p>Lær komponenter, props og state.</p>
      <button>Meld deg på</button>
      <img src={images.react} alt="" />
    </div>
  );
}
