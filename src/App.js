import "./App.css";
import React, { useState } from "react";
import Project from "./components/Project";
import Tag from "./components/Tag";

function App() {
  const [currentTag, setTag] = useState("All");
  const ProjectData = [
    {
      Title: "Conway's Game of Life",
      Image: "https://i.ibb.co/sJzrcNM/Capture.png",
      Description: "Conway's Game of Life is an automation game created by John Horton Conway in 1970. It's commonly used as an example of the halting problem, or an undecidable program. This basically means no algorithm exists that can tell if a certain pattern will appear eventually given certain initial conditions. I was inspired to create this after watching a Veritasium video on youtube titled Math's \"Fundamental Flaw\". I decided to build it in React to refamiliarize myself with a frontend framework I don't use often since we use Vue at my current job.",
      Link: "https://brear-life.netlify.app/",
      Tags: ["React"]
    },
    {
      Title: "WoW LP",
      Image: "https://i.ibb.co/DPdqYht/Capture.png",
      Description:
        "WoW LP is a 3rd-party player rating system I created for the online game World of Warcraft. Users can login to their game account using secure OAuth2.0 to rate other players, or simply browse ratings without logging in. This is a project I created to become more familiar with the tech stack that my employer uses. Many of the challenges I came across in this problem helped me prepare for similar challenges at work. I also wanted to go all the way for this project so I learned how to register a domain and configure DNS records with Cloudflare.",
      Link: "https://www.wow-lp.com",
      Tags: ["Laravel", "PHP", "Vue", "Postgres", "API"],
    },
    {
      Title: "Minesweeper",
      Image: "https://i.ibb.co/0tpgtTf/Capture.png",
      Description:
        "I decided to pick up a new frontend framework, and I see a lot of people using Vue.js so I thought I would give it a shot. I found it similar to React.js, which is something I'm comfortable using so that definitely helped a lot. Overall, I'm actually much happier with Vue, and I plan to use it moving forward as a replacement for React, at least until I find out it's missing something I need.",
      Link: "https://ssbrear-minesweeper.netlify.app/?",
      Tags: ["Vue", "CSS Grid"],
    },
    {
      Title: "Snake",
      Image: "https://i.ibb.co/V3wVnRC/Capture.png",
      Description:
        "I wanted to get some recent practice with jQuery and an excuse to try out some basic SCSS. Nothing else to say other than the style is similar to the Minesweeper clone I created and it's the same as the classic Snake game.",
      Link: "https://ssbrear.github.io/snake/",
      Tags: ["jQuery", "CSS Grid", "SCSS"],
    },
    {
      Title: "Super Similar",
      Image: "https://i.ibb.co/mBy44z5/similar.jpg",
      Description:
        "As part of a group project for my bootcamp, my group created a website using two movie-related APIs that presents the user with movies or shows similar to their input. My part of this project was primarily focused on learning and implementing the Foundation CSS framework. This includes both the structure of the HTML and the responsiveness of the page.",
      Link: "https://ssbrear.github.io/group-project/",
      Tags: ["jQuery", "API", "Foundation"],
    },
    // {
    //   Title: "SupportX",
    //   Image: "https://i.ibb.co/52nPw4v/discordclone.jpg",
    //   Description:
    //     "This was the final project of the bootcamp I participated in, and where I learned everything I know about React. I was personally responsible for all of the front-end for this project, and so I decided on leaning in on my CSS skills to try and replicate a well-known interface, Discord. I am very pleased with how it turned out, and I'm excited to try and replicate another UI in the future, as it was very educational.",
    //   Link: "http://jbaxter-supportx.herokuapp.com/dashboard",
    //   Tags: ["Chat", "Flexbox", "React", "Passport", "MongoDB", "Express"],
    // },
    {
      Title: "My List",
      Image: "https://i.ibb.co/F323y3t/list.jpg",
      Description:
        "This is a side project I started working on after learning how to use Local Storage to store data in the browser such that different users could keep track of and check off items in a list. Later on after learning how to create and implement a database, this project was completely redone with MySQL and Passport.",
      Link: "https://my-list-db.herokuapp.com/list",
      Tags: ["MySQL", "Bootstrap", "jQuery", "Passport", "Express"],
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
      Tags: ["Bootstrap", "jQuery"],
    },
    // {
    //   Title: "MagicSMS",
    //   Image: "https://i.ibb.co/nw7dStM/magicSMS.png",
    //   Description:
    //     "This is the first page I created after graduating from the bootcamp that I attended. I worked with John Baxter, a fellow graduate and I was personally responsible for all of the front-end development.",
    //   Link: "https://www.a-zsms.com/",
    //   Tags: ["React", "Flexbox", "API", "Passport", "MongoDB", "Express"],
    // },
    {
      Title: "Coffee Blog",
      Image: "https://i.ibb.co/jz6Qfjt/Capture.png",
      Description:
        "This project was designed to help me catch up on my backend skills. It's easy to forget technologies that you never use! I created a very basic frontend design, as I wanted to spend most of the time working with Sequelize and Express. I even solved a CORS error for the first time, which felt great since that was a roadblock for me in the past.",
      Link: "https://ssbrear-blog.herokuapp.com/?",
      Tags: ["React", "CSS Grid", "API", "MySQL", "Express"],
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
        <h1>Web development focused on an intuitive user experience</h1>
      </header>
      <article id="about-article">
        <h2>About me</h2>
        <a
          id="linkedin-link"
          className="socials"
          href="https://www.linkedin.com/in/sebastian-brear-966033189/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            alt=""
            src="data:image/png;base64,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"
          ></img>
          LinkedIn
        </a>
        <a
          id="github-link"
          className="socials"
          href="https://www.github.com/ssbrear"
          target="_blank"
          rel="noreferrer"
        >
          <img
            alt=""
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          ></img>
          GitHub
        </a>
        <img alt="Me with my dog, Biscuit." src="images/profile.jpg"></img>
        <p>
          I'm a full stack web developer with a background in Electrical Engineering and a passion for learning and utilizing new technologies
        </p>
      </article>
      <article id="projects-article">
        <h2>Projects</h2>
        <h3>
          {tagListUnique.map((x, i) => {
            return (
              <Tag
                currentTag={currentTag}
                setTag={setTag}
                key={i}
                hue={hues[i]}
                thisTag={x}
              />
            );
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
