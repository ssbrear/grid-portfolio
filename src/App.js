import "./App.css";
import React, { useState } from "react";
import Project from "./components/Project";
import Tag from "./components/Tag";

function App() {
  const [currentTag, setTag] = useState("All");
  const ProjectData = [
    {
      Title: "Super Similar",
      Image: "https://i.ibb.co/mBy44z5/similar.jpg",
      Description:
        "As part of a group project for my bootcamp, my group created a website using two movie-related APIs that presents the user with movies or shows similar to their input. My part of this project was primarily focused on learning and implementing the Foundation CSS framework. This includes both the structure of the HTML and the responsiveness of the page.",
      Link: "https://ssbrear.github.io/group-project/",
      Tags: ["jQuery", "API", "Foundation"],
    },
    {
      Title: "SupportX",
      Image: "https://i.ibb.co/52nPw4v/discordclone.jpg",
      Description:
        "This was the final project of the bootcamp I participated in, and where I learned everything I know about React. I was personally responsible for all of the front-end for this project, and so I decided on leaning in on my CSS skills to try and replicate a well-known interface, Discord. I am very pleased with how it turned out, and I'm excited to try and replicate another UI in the future, as it was very educational.",
      Link: "http://jbaxter-supportx.herokuapp.com/dashboard",
      Tags: ["Integrated Chat", "Flexbox", "React"],
    },
    {
      Title: "My List",
      Image: "https://i.ibb.co/F323y3t/list.jpg",
      Description:
        "This is a side project I started working on after learning how to use Local Storage to store data in the browser such that different users could keep track of and check off items in a list. Later on after learning how to create and implement a database, this project was completely redone with MySQL and Passport.",
      Link: "https://my-list-db.herokuapp.com/list",
      Tags: ["MongoDB", "Bootstrap", "jQuery"],
    },
    {
      Title: "Weather Dashboard",
      Image: "https://i.ibb.co/vJqWRhc/Capture.jpg",
      Description:
        "This dashboard was assigned to me to create from scratch early on in the bootcamp. As such, it runs almost entirely on jQuery. This is the project I am the most interested in remaking in the future as I would like to get even more comfortable and skilled with React, and this would be a good contender for that.",
      Link: "https://ssbrear.github.io/bootcamp-hw/6/index-6.html",
      Tags: ["jQuery", "Foundation", "API"],
    },
    {
      Title: "Tic-Tac-Toe",
      Image: "https://i.ibb.co/kx1FDGz/tictactoe.jpg",
      Description:
        "This is the first page I made using jQuery, and it was nice to not have to write as much code for the same functionality. The most frustrating part of this assignment is that I could not figure out how to make text sizes responsive without resorting to either media queries in CSS or an event listener in JS (I picked the media queries).",
      Link: "https://ssbrear.github.io/tic-tac-toe/",
      Tags: ["Bootstrap"],
    },
    {
      Title: "MagicSMS",
      Image: "https://i.ibb.co/nw7dStM/magicSMS.png",
      Description:
        "This is the first page I created after graduating from the bootcamp that I attended. I worked with John Baxter, a fellow graduate and I was personally responsible for all of the front-end development.",
      Link: "http://www.a-zsms.com/",
      Tags: ["React", "Flexbox", "API"],
    },
  ];
  const tagListNonUnique = ["All"];
  ProjectData.forEach((project) => {
    project.Tags.forEach((tag) => tagListNonUnique.push(tag));
  });
  const tagListUnique = tagListNonUnique.filter(
    (x, i, list) => i === list.indexOf(x)
  );
  const hues = [];
  tagListUnique.forEach((tag, i, list) => {
    hues.push((360 * i) / (list.length - 1));
  });
  return (
    <main className="App">
      <header>
        <h1>Websites focused on an intuitive user experience</h1>
      </header>
      <article id="about-article">
        <h2>About me</h2>
        <img alt="Me with my dog, Biscuit." src="images/profile.jpg"></img>
        <p>
          I'm a current UC Davis student pursuing a degree in Electrical
          Engineering, with a passion for coding and web development
        </p>
      </article>
      <article id="projects-article">
        <h2>Projects</h2>
        <h3>
          {tagListUnique.map((x, i) => {
            return <Tag setTag={setTag} key={i} hue={hues[i]} tag={x} />;
          })}
        </h3>
        <section id="projects-container">
          {ProjectData.map((project, i) => {
            return (
              <Project currentTag={currentTag} key={i} data={ProjectData[i]} />
            );
          })}
        </section>
      </article>
    </main>
  );
}

export default App;
