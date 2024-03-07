import boostrapPNG from "./bootstrap.png";
import cssPNG from "./css.png";
import gitPNG from "./git.png";
import githubPNG from "./github.png";
import htmlPNG from "./html.png";
import jsPNG from "./js.png";
import mongoDB from "./mongoDB.png";
import nodePNG from "./node.png";
import reactPNG from "./react.png";
import socketPNG from "./socket.png";
import mysqlPNG from "./mysql.png";
import nginxPNG from "./nginx.png";
import typescriptPNG from "./typescript.png";
import vpsPNG from "./vps.png";
import dockerPNG from "./docker.png";
import agilePNG from "./agile-method.png";
import restfulPNG from "./restful.png";
import sassPNG from "./sass.png";

export type Skill = {
  name: string;
  image: string;
  type: string;
};

const skillsArray = [
  { name: "Bootstrap", image: boostrapPNG, type: "frontend" },
  { name: "CSS", image: cssPNG, type: "frontend" },
  { name: "git", image: gitPNG, type: "other" },
  { name: "github", image: githubPNG, type: "other" },
  { name: "HTML", image: htmlPNG, type: "frontend" },
  { name: "Javascript", image: jsPNG, type: "frontend" },
  { name: "mongoDB", image: mongoDB, type: "backend" },
  { name: "node", image: nodePNG, type: "backend" },
  { name: "React", image: reactPNG, type: "frontend" },
  { name: "socket.io", image: socketPNG, type: "backend" },
  { name: "Typescript", image: typescriptPNG, type: "other" },
  { name: "MySQL", image: mysqlPNG, type: "backend" },
  { name: "NginX", image: nginxPNG, type: "backend" },
  { name: "VPServers", image: vpsPNG, type: "other" },
  { name: "Docker", image: dockerPNG, type: "other" },
  { name: "Agile", image: agilePNG, type: "other" },
  { name: "RESTful", image: restfulPNG, type: "backend" },
  { name: "Sass", image: sassPNG, type: "frontend" },
];

export default skillsArray;
