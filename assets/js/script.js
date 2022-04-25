toggleMenu = () => {
  const toggleMenu = document.querySelector(".toggle");
  const sidebar = document.querySelector(".sidebar");
  toggleMenu.classList.toggle("active");
  sidebar.classList.toggle("active");
};

const logoText = document.querySelector(".logoText");
const text1 = document.querySelector("#text1");
const text2 = document.querySelector("#text2");
const text3 = document.querySelector("#text3");
const text4 = document.querySelector("#text4");
const btn = document.querySelector(".btn");
const about = document.querySelector("#about-me");
const textBx = document.querySelector("#textBx");
const knowledgetittle = document.querySelector("#knowledgetittle");
const textKnow = document.querySelector("#textKnow");
const javasript = document.querySelector("#javascript");
const node = document.querySelector("#node");
const html = document.querySelector("#html");
const css = document.querySelector("#css");
const db = document.querySelector("#db");
const titleWorks = document.querySelector("#title-works");
const worksText = document.querySelector("#works-text");
const proj1 = document.querySelector("#proj1");
const proj2 = document.querySelector("#proj2");
const proj3 = document.querySelector("#proj3");
const proj4 = document.querySelector("#proj4");
const proj5 = document.querySelector("#proj5");
const contactText = document.querySelector("#contact-text");
const titleContact = document.querySelector("#title-contact");
const phone = document.querySelector("#phone");
const linkedin = document.querySelector("#linkedin");

translationEng = () => {
  logoText.textContent = "Portfolio";
  text1.textContent = "Hello, i'm";
  text2.textContent = "i'm FullStack JavaScript Developer Junior";
  text3.textContent =
    "I starting my carrer as a developer and i make this portfolio to tell about my self, show my knowledges and projects that i have developed until today during my journey.";
  btn.textContent = "Download my CV";
  text4.textContent = "A little about me and how I got into programming.";
  about.textContent = "About me";
  textBx.innerHTML =
    "My name is Marcos Thiago Alves da Silva, but most people call me call by their second name. Born in Rio de Janeiro. I've always been addicted to electronic games, but I never looked at it with other eyes, with the purpose of learning how it works behind the scenes, so I let myself lead by the circumstances of life. I studied marketing at Anhaguera University, and I have worked in the administrative area since then. In love with music and the sun, I love going to the beach and playing guitar that is one of my favorite hobbies, and of course super me attract. <br /><br/>One day, a friend of mine invited me to meet his work, and introduced me to the JavaScript language and some thing that could be done with it. I was delighted, and decided to go after knowledge about. And I met Blue EdTech where I am studying JavaScript Web FullStack. And honestly I'm in love all. The excitement of programming, writing code and solving bugs is catchy. Certainly today I'm thinking why no one presented programming before? lol. Today I'm totally focused and committed and start programming professionally so I can learn more and more about and show the results generated.";
  knowledgetittle.textContent = "Knowledges";
  textKnow.textContent =
    "Here I will pass on the technologies that I have knowledge of.";
  javasript.innerHTML =
    "Level: Intermediate<br /><br />I developed my projects including this portfolio using JavaScript";
  node.innerHTML =
    "Level: Intermediate<br /><br />I am currently using Node.Js in backend of all my projects.";
  html.innerHTML =
    "Level: Intermediate<br /><br />Using HTML5 I developed all front-end structure of my projects.";
  css.innerHTML =
    "Level: Intermediate<br /><br />Along with HTML, I have been using pure CSS3 to make my projects so far.";
  db.innerHTML =
    "Level: Beginner<br /><br />Some of my projects were using the database, PostgreSQL and MongoDb along with the backend. And API consumption.";
  titleWorks.textContent = "Recents Works";
  worksText.innerHTML = `Here are my main projects so far. I only selected some, the others can be accessed through my<a href="https://github.com/mthiagoalves?tab=repositories" target="_blank"> GitHub </a>`;
  proj1.innerHTML = ` <a href="https://mthiagoalves.github.io/Projeto01_Mod02/" target="_blank" style="text-decoration: none; color: #fff">Project 01</a>`;
  proj2.innerHTML = ` <a href="https://pokedex-blue-proj-02.herokuapp.com" target="_blank" style="text-decoration: none; color: #fff">Project 02</a>`;
  proj3.innerHTML = ` <a href="https://mod2-proj-final.herokuapp.com" target="_blank" style="text-decoration: none; color: #fff">Project 03</a>`;
  proj4.innerHTML = ` <a href="https://github.com/mthiagoalves/projeto01_mod03" target="_blank" style="text-decoration: none; color: #fff">Project 04</a>`;
  proj5.innerHTML = ` <a href="https://mthiagoalves.github.io/Slideshow/" target="_blank" style="text-decoration: none; color: #fff">Project 05</a>`;
  titleContact.textContent = "Contact me";
  contactText.textContent =
    "If you found all the content above interesting and about me too and want to contact me these are my contacts.";
  phone.textContent = "My phone number: +55 24 98113-1355";
  linkedin.innerHTML = `<a href="https://www.linkedin.com/in/thiago-alves-b05ab2b0" target="_blank" style="text-decoration: none; color: #fff"> > My linkedin < </a>`;
};

translationPt = () => {
  logoText.textContent = "Portifólio";
  text1.textContent = "Olá, me chamo";
  text2.textContent = "FullStack JavaScript Developer Junior";
  text3.textContent =
    " Estou começando a minha carreira como desenvolvedor e fiz esse portifólio para contar um pouco sobre mim e mostrar meus conhecimentos e projetos que desenvolvi até hoje durante minha   jornada.";
  btn.textContent = "Baixe meu CV";
  text4.textContent = "Um pouco sobre mim e sobre como entrei na programação.";
  about.textContent = "Sobre mim";
  textBx.innerHTML =
    "Me chamo Marcos Thiago Alves da Silva, mas a maioria das pessoas me chamam pelo segudo nome. Natural do Rio de Janeiro. Sempre fui apegado com jogos eletronicos, mas nunca olhei com outros olhos, com o intuito de aprender como funciona nos bastidores, entao me deixei levar pelas circunstacias da vida. Formei em marketing pela Universidade Anhaguera, e exerci área administrativa desde então. Apaixanado por música e pelo sol, amo ir a praia e tocar guitar que é uns dos meus hobbies preferidos, e claro jogos de RPG super me atraem. <br /><br />Certo dia, um amigo meu, me convidou a conhecer o trabalho dele, e me apresentou a linguagem JavaScript e algumas coisa que podiam ser feitas com ela. FIquei encantado, e decidi ir atrás de conhecimento sobre. E conheci a Blue EdTech onde estou estudando JavaScript Web FullStack. E sinceramente estou amando tudo. A emoção de programar, escrever códigos e resolver os bugs são cativantes. Certamente hoje estou pensando em porque ninguem me apresentou programação antes? rsrs. Hoje estou totalmente focado e empenhado e começar a programar profissionalmente para que eu possa aprender cada vez mais sobre e mostrar os frutos gerados.";
  knowledgetittle.textContent = "Conhecimentos";
  textKnow.textContent =
    "Aqui vou passar as tecnologias que tenho conhecimento";
  javasript.innerHTML =
    "Level: Intermediate<br /><br />I developed my projects including this portfolio using JavaScript";
  node.innerHTML =
    "Level: Intermediate<br /><br />I am currently using Node.Js in backend of all my projects.";
  html.innerHTML =
    "Level: Intermediate<br /><br />Using HTML5 I developed all front-end structure of my projects.";
  css.innerHTML =
    "Level: Intermediate<br /><br />Along with HTML, I have been using pure CSS3 to make my projects so far.";
  db.innerHTML =
    "Level: Beginner<br /><br />Some of my projects were using the database, PostgreSQL and MongoDb along with the backend. And API consumption.";
  titleWorks.textContent = "Recents Works";
  worksText.innerHTML = `Here are my main projects so far. I only selected some, the others can be accessed through my<a href="https://github.com/mthiagoalves?tab=repositories" target="_blank"> GitHub </a>`;
  proj1.innerHTML = ` <a href="https://mthiagoalves.github.io/Projeto01_Mod02/" target="_blank" style="text-decoration: none; color: #fff">Project 01</a>`;
  proj2.innerHTML = ` <a href="https://pokedex-blue-proj-02.herokuapp.com" target="_blank" style="text-decoration: none; color: #fff">Project 02</a>`;
  proj3.innerHTML = ` <a href="https://mod2-proj-final.herokuapp.com" target="_blank" style="text-decoration: none; color: #fff">Project 03</a>`;
  proj4.innerHTML = ` <a href="https://github.com/mthiagoalves/projeto01_mod03" target="_blank" style="text-decoration: none; color: #fff">Project 04</a>`;
  proj5.innerHTML = ` <a href="https://mthiagoalves.github.io/Slideshow/" target="_blank" style="text-decoration: none; color: #fff">Project 05</a>`;
  titleContact.textContent = "Contact me";
  contactText.textContent =
    "If you found all the content above interesting and about me too and want to contact me these are my contacts.";
  phone.textContent = "My phone number: +55 24 98113-1355";
  linkedin.innerHTML = `<a href="https://www.linkedin.com/in/thiago-alves-b05ab2b0" target="_blank" style="text-decoration: none; color: #fff"> > My linkedin < </a>`;
};
