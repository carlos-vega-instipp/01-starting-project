export default function CoreConcept({ image, title, description }) {
  // function CoreConcept(props) //puede ser una forma de recibir propiedades indicar props
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
