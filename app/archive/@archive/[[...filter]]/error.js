"use client";

export default function FilterError({ error }) {
  return (
    <div id="error">
      <h2>{error.message}</h2>
    </div>
  );
}
