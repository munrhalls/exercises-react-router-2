import "./Root.css";

function Root() {
  fetch("https://dummyjson.com/products/1")
    .then((res) => res.json())
    .then((json) => console.log(json));

  return (
    <div className="Root">
      <h1>Hello world</h1>
    </div>
  );
}

export default Root;
