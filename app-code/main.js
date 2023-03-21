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
    .then((res) => {
      if (res.status != "200") {
        throw Error(res.status);
      } else {
        return res.json();
      }
    })
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

      const locationInfo = ["location", locationUser];
      const blogInfo = ["blog", blog];
      const twitterInfo = ["twitter_username", twitter];
      const companyInfo = ["company", company];

      const listInfo = [locationInfo, blogInfo, twitterInfo, companyInfo];
      verificaOtherbox();

      // aplica opacidade no elemento erro
      document.querySelector(".error").style.opacity = 0;

      function verificaOtherbox() {
        listInfo.forEach((item) => {
          if (data[item[0]] == null || data[item[0]] === "") {
            item[1].children[1].innerHTML = "Not Available";
            item[1].style.textDecoration = "none";
            item[1].style.opacity = "0.5";
            item[1].children[1].style.pointerEvents = "none";
            item[1].children[1].style.cursor = "default";
          } else {
            item[1].children[1].innerHTML = data[item[0]];
            item[1].children[1].href = data[item[0]];
            item[1].style.opacity = "1";
          }
        });
      }
    })
    .catch((erroStatus) => {
      console.log(erroStatus);
      document.querySelector(".error").style.opacity = "100";
    });
}
