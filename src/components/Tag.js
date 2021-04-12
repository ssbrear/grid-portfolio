import React from "react";

function Tag({ tag, hue }) {
  return (
    <button
      style={{ backgroundColor: `hsl(${hue}, 100%, 75%)` }}
      className="tag"
    >
      {tag}
    </button>
  );
}

export default Tag;
