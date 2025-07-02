function Card(props) {
  return (
    <div className="card">
      {/* <h2></h2> {this is called components} */}
      <h2>{props.title}</h2>
       {/* props.title props.content this is called props  */}
      <p>{props.content}</p>
      {/* <p>{props.text}</p> */}
      <img src={props.image} alt={props.title} />
    </div>
  );
}

export default Card;





