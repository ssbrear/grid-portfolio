import React from "react";

function Tag({ tag, hue, setTag }) {
  return (
    <button
      style={{ backgroundColor: `hsl(${hue}, 100%, 75%)` }}
      className="tag"
      onClick={() => setTag(tag)}
    >
      {tag}
    </button>
  );
}

export default Tag;
