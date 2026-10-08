// dynamisk måte å hnete ut bilder på

// const module = import.meta.glob("../assets/*.svg", {
//   import: "default",
//   eager: true,
// });

// const test = module[`../assets/Img/${title}`];

export default function PersonCard(props) {
  //   console.log(module);

  return (
    <>
      <p>Name: {props.name}</p>
      <p>Powerlevel: {props.age}</p>
      {/* <img src={test} alt="" /> */}
    </>
  );
}
