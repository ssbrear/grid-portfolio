import React from "react";

function Tag({ thisTag, hue, currentTag, setTag }) {
  return (
    <button
      style={{
        backgroundColor: `hsl(${hue}, 100%, ${
          currentTag === thisTag ? "60%" : "75%"
        }`,
      }}
      className={`${currentTag === thisTag ? "selected-tag" : "tag"}`}
      onClick={() => setTag(thisTag)}
    >
      {thisTag}
    </button>
  );
}

export default Tag;
