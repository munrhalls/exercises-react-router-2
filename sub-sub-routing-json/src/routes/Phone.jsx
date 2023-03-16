import React from "react";
import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  const phoneId = params.phoneId;

  const phone = await fetch(`https://dummyjson.com/products/${phoneId}`)
    .then((res) => res.json())
    .then((json) => {
      return json;
    });
  return phone;
}

function Phone(props) {
  const phone = useLoaderData();

  return (
    <div>
      <h1>{phone.title}</h1>
      {phone.images.map((src) => (
        <img
          key={phone.id * Math.random()}
          style={{ width: "8rem", height: "8rem" }}
          src={`${src}`}
          alt=""
        />
      ))}
    </div>
  );
}

export default Phone;
