import React from "react";
import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  const accomplishmentId = params.accomplishmentId;
  return String(accomplishmentId).toUpperCase();
}

export function AccomplishmentItem(props) {
  const accomplishmentId = useLoaderData();

  return (
    <div>
      <h1>Accomplishment in {accomplishmentId}</h1>
    </div>
  );
}
