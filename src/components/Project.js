import React from "react";

function Project({ data }) {
  return (
    <div>
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
