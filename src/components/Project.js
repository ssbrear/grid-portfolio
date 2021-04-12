import React from "react";

function Project({ data, currentTag }) {
  let show = false;
  if (currentTag === "All") show = true;
  else {
    data.Tags.forEach((tag) => {
      if (tag === currentTag) show = true;
    });
  }
  return (
    <div className={`${show ? "" : "hide"}`}>
      <a href={data.Link} className="project-title">
        {data.Title}
      </a>
      <figure>
        <img
          src={data.Image}
          className="project-image"
          alt="Dashboard or home page for project"
        ></img>
        <figcaption>{data.Description}</figcaption>
      </figure>
    </div>
  );
}

export default Project;
