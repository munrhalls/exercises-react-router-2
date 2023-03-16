import React from "react";
import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  const purchaseId = params.purchaseId;
  return String(purchaseId).toUpperCase();
}

function Purchase(props) {
  const purchaseId = useLoaderData();

  return (
    <div>
      <h1>{purchaseId}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        eligendi asperiores libero sit accusamus ipsum repellat debitis placeat
        iste dolore. Blanditiis, perferendis reprehenderit explicabo temporibus
        recusandae obcaecati iste minus asperiores.
      </p>
    </div>
  );
}

export default Purchase;
