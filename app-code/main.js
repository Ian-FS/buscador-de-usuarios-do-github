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
const tema = document.querySelector("#tema");
const sun =
  "M13.545 6.455c-.9-.9-2.17-1.481-3.545-1.481a4.934 4.934 0 00-3.545 1.481c-.9.9-1.481 2.17-1.481 3.545 0 1.376.582 2.646 1.481 3.545.9.9 2.17 1.481 3.545 1.481a4.934 4.934 0 003.545-1.481c.9-.9 1.481-2.17 1.481-3.545a4.934 4.934 0 00-1.481-3.545zM10 3.413a.7.7 0 00.688-.688V.688A.7.7 0 0010 0a.7.7 0 00-.688.688v2.037a.7.7 0 00.688.688zM15.635 5.344l1.455-1.455a.67.67 0 000-.952.67.67 0 00-.952 0l-1.455 1.455a.67.67 0 000 .952c.238.264.66.264.952 0zM19.312 9.312h-2.037a.7.7 0 00-.688.688.7.7 0 00.688.688h2.037A.7.7 0 0020 10a.7.7 0 00-.688-.688zM15.608 14.656a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455a.67.67 0 00.952 0 .67.67 0 000-.952l-1.455-1.455zM10 16.587a.7.7 0 00-.688.688v2.037A.7.7 0 0010 20a.7.7 0 00.688-.688v-2.037a.7.7 0 00-.688-.688zM4.365 14.656L2.91 16.111a.67.67 0 000 .952.67.67 0 00.952 0l1.455-1.455a.67.67 0 000-.952c-.238-.264-.66-.264-.952 0zM3.413 10a.7.7 0 00-.688-.688H.688A.7.7 0 000 10a.7.7 0 00.688.688h2.037A.7.7 0 003.413 10zM4.365 5.344a.67.67 0 00.952 0 .67.67 0 000-.952L3.862 2.937a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455z";
const moon =
  "M19.513 11.397a.701.701 0 00-.588.128 7.496 7.496 0 01-2.276 1.336 7.101 7.101 0 01-2.583.462 7.505 7.505 0 01-5.32-2.209 7.568 7.568 0 01-2.199-5.342c0-.873.154-1.72.41-2.49a6.904 6.904 0 011.227-2.21.657.657 0 00-.102-.924.701.701 0 00-.589-.128C5.32.61 3.427 1.92 2.072 3.666A10.158 10.158 0 000 9.83c0 2.8 1.125 5.342 2.967 7.19a10.025 10.025 0 007.16 2.98c2.353 0 4.527-.822 6.266-2.183a10.13 10.13 0 003.58-5.624.623.623 0 00-.46-.796z";

researchField.value = "octocat";
onload = load();
researchField.addEventListener("keypress", (ev) => {
  if (ev.key === "Enter") {
    search();
  }
});

tema.addEventListener("click", alteraTema);

function load() {
  search();
  alteraTema();
}

function alteraTema() {
  if (tema.children[0].innerHTML === "DARK") {
    document.getElementById("tema").children[0].classList.remove("dark-h2");
    document.getElementById("icone").classList.remove("dark-icone");
    temaDark();
  } else {
    document.getElementById("tema").children[0].classList.remove("light-h2");
    document.getElementById("icone").classList.remove("light-icone");
    temaLight();
  }

  function temaDark() {
    document.getElementById("tema").children[0].classList.add("light-h2");
    document.getElementById("icone").classList.add("light-icone");
    tema.children[0].innerHTML = "LIGTH";
    document.querySelector("#icone").children[0].attributes[0].value = sun;
    document.querySelector(".logo").style.color = "#FFFFFF";
    document.querySelector("body").style.backgroundColor = "#141D2F";
    document.querySelector("#research-field").style.backgroundColor = "#1E2A47";
    document.querySelector("#research-field").style.color = "#FFFFFF";
    document.querySelector(".search-container").style.backgroundColor =
      "#1E2A47";
    document.querySelector("#name-user").style.color = "#FFFFFF";
    document.querySelector(".joined").style.color = "#FFFFFF";
    document.querySelector(".bibliography").children[0].style.color = "#FFFFFF";
    document.querySelector(".container").style.backgroundColor = "#1E2A47";
    document.querySelector(".box-info").style.backgroundColor = "#141D2F";
    document.querySelector(".box-info").style.color = "#FFFFFF";
    document.querySelector(".box-info").children[0].children[0].style.color =
      "#FFFFFF";
    document.querySelector(".box-info").children[1].children[0].style.color =
      "#FFFFFF";
    document.querySelector(".box-info").children[2].children[0].style.color =
      document.querySelector(".box-other-info").style.color = "#FFFFFF";
    document.querySelector(
      ".box-other-info"
    ).children[0].children[0].style.color = "#FFFFFF";
    document.querySelector(
      ".box-other-info"
    ).children[0].children[0].style.filter = "brightness(4.4)";
    document.querySelector(
      ".box-other-info"
    ).children[1].children[0].style.color = "#FFFFFF";
    document.querySelector(
      ".box-other-info"
    ).children[1].children[0].style.filter = "brightness(4.4)";
    document.querySelector(
      ".box-other-info"
    ).children[2].children[1].style.color = "#FFFFFF";
    document.querySelector(
      ".box-other-info"
    ).children[2].children[0].style.filter = "brightness(4.4)";
    document.querySelector(
      ".box-other-info"
    ).children[3].children[0].style.color = "#FFFFFF";
    document.querySelector(
      ".box-other-info"
    ).children[3].children[0].style.filter = "brightness(4.4)";
  }

  function temaLight() {
    document.getElementById("tema").children[0].classList.add("dark-h2");
    document.getElementById("icone").classList.add("dark-icone");
    tema.children[0].innerHTML = "DARK";
    document.querySelector("#icone").children[0].attributes[0].value = moon;
    document.querySelector(".logo").style.color = "#222731";
    document.querySelector("body").style.backgroundColor = "#F2F2F2";
    document.querySelector("#research-field").style.backgroundColor = "#FFFFFF";
    document.querySelector("#research-field").style.color = "#4B6A9B";
    document.querySelector(".search-container").style.backgroundColor =
      "#FFFFFF";
    document.querySelector("#name-user").style.color = "#4B6A9B";
    document.querySelector(".joined").style.color = "#4B6A9B";
    document.querySelector(".bibliography").children[0].style.color = "#4B6A9B";
    document.querySelector(".container").style.backgroundColor = "#FFFFFF";
    document.querySelector(".box-info").style.backgroundColor = "#F6F8FF";
    document.querySelector(".box-info").style.color = "#2B3442";
    document.querySelector(".box-info").children[0].children[0].style.color =
      "#4B6A9B";
    document.querySelector(".box-info").children[1].children[0].style.color =
      "#4B6A9B";
    document.querySelector(".box-info").children[2].children[0].style.color =
      document.querySelector(".box-other-info").style.color = "#4B6A9B";
    document.querySelector(
      ".box-other-info"
    ).children[0].children[0].style.color = "#4B6A9B";
    document.querySelector(
      ".box-other-info"
    ).children[0].children[0].style.filter = "brightness(1)";
    document.querySelector(
      ".box-other-info"
    ).children[1].children[0].style.color = "#4B6A9B";
    document.querySelector(
      ".box-other-info"
    ).children[1].children[0].style.filter = "brightness(1)";
    document.querySelector(
      ".box-other-info"
    ).children[2].children[1].style.color = "#4B6A9B";
    document.querySelector(
      ".box-other-info"
    ).children[2].children[0].style.filter = "brightness(1)";
    document.querySelector(
      ".box-other-info"
    ).children[3].children[0].style.color = "#4B6A9B";
    document.querySelector(
      ".box-other-info"
    ).children[3].children[0].style.filter = "brightness(1)";
  }
}

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
      //remove uma classe ao botao de pesquisa
      buttonSearch.classList.remove("error-button");

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
      buttonSearch.classList.add("error-button");
    });
}
