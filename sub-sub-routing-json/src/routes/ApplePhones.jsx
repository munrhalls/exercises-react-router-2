import React from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";

export async function loader() {
  const phoneList = await fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      return json;
    });

  return phoneList.products;
}

function ApplePhones(props) {
  const phoneList = useLoaderData();
  console.log(phoneList);

  return (
    <div>
      <h1>APPLE PHONES</h1>
      <nav>
        {phoneList.map((phone) => (
          <Link key={phone.id} to={`${phone.id}`}>
            {phone.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default ApplePhones;
