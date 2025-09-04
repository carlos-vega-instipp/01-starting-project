export default function Section({ title, children, ...props }) {
  //console.log("...props", ...props);

  return (
    <section {...props}>
      <h3>{title}</h3>
      {children}
    </section>
  );
}
