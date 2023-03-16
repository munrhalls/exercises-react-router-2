import React from "react";
import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  const invoiceId = params.invoiceId;
  return invoiceId;
}

function Invoice(props) {
  const invoiceId = useLoaderData();

  return (
    <div>
      <h1>{invoiceId}</h1>
    </div>
  );
}

export default Invoice;
