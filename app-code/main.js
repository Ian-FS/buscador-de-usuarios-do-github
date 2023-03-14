const imgUser = document.querySelector("#img-user");
const nameUser = document.querySelector("#name-user");
const linkUser = document.querySelector("#link-user");
const dateJoined = document.querySelector("#date-joined");
const infoUser = document.querySelector(".info");
const bibliography = document.querySelector(".bibliography");
const repositories = document.querySelector(".repos");
const followers = document.querySelector(".followers");
const following = document.querySelector(".following");
const locationUser = document.querySelector(".location-user");
const blog = document.querySelector(".blog");
const twitter = document.querySelector(".twitter");
const company = document.querySelector(".company");
const buttonSearch = document.querySelector("#button-search");
var researchField = document.querySelector("#research-field");

researchField.value = "octocat";
onload = search();
researchField.addEventListener("keypress", (ev) => {
  if (ev.key === "Enter") search();
});

function search() {
  fetch(`https://api.github.com/users/${researchField.value}`)
    .then((res) => res.json())
    .then((data) => {
      //adiciona imagem do usuario
      imgUser.src = data.avatar_url;

      //adciona nome do usario
      nameUser.innerHTML = data.name;

      //adiciona link, caso tenha, ou nome com @
      linkUser.innerHTML = `@${data.login}`;

      //adiciona data de criação de conta
      const meses = [
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Mai",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
        "Nov",
        "Dez",
      ];
      let date = new Date(data.created_at);
      let dataFormatada =
        date.getDate() +
        " " +
        meses[date.getMonth()] +
        " " +
        date.getFullYear();
      dateJoined.innerHTML = `Joined ${dataFormatada}`;

      //adiciona biografia
      if (data.bio === null) {
        bibliography.children[0].innerHTML = "Este perfil não tem biografia.";
      } else {
        bibliography.children[0].innerHTML = data.bio;
      }

      //adiciona informações do box
      repositories.children[1].innerHTML = data.public_repos;
      followers.children[1].innerHTML = data.followers;
      following.children[1].innerHTML = data.following;

      locationUser.children[1].innerHTML = data.location;
      blog.children[1].innerHTML = data.blog;
      twitter.children[1].innerHTML = data.twitter;
      company.children[1].innerHTML = data.company;
    });
}
