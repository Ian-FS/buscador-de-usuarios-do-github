let imgUser = document.querySelector("#img-user");
let infoUser = document.querySelector(".info");
let bibliography = document.querySelector(".bibliography");
let repositorios = document.querySelector(".repos");
let followers = document.querySelector(".followers");
let following = document.querySelector(".following");
// console.log(repositorios.children[1].innerHTML='7');

fetch(`https://api.github.com/users/octocat`)
  .then((res) => res.json())
  .then((data) => {
    //adiciona imagem do usuario
    imgUser.src = data.avatar_url;

    //adciona nome do usario
    infoUser.children[0].innerHTML = data.name;

    //adiciona link, caso tenha, ou nome com @
    infoUser.children[1].innerHTML = `@${data.login}`;

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
      date.getDate() + " " + meses[date.getMonth()] + " " + date.getFullYear();
    infoUser.children[2].innerHTML = `Joined ${dataFormatada}`;

    //adiciona bibliografia
    if (data.bio === null) {
      bibliography.children[0].innerHTML = "Este perfil não tem biografia.";
    } else {
      bibliography.children[0].innerHTML = data.bio;
    }
    //adiciona outras informações
    repositorios.children[1].innerHTML = data.public_repos;
    followers.children[1].innerHTML = data.followers;
    following.children[1].innerHTML = data.following;
  });

function pesquisar() {
  nomeUsuario = document.querySelector("#campo-pesquisa").value;
  console.log(nomeUsuario);
  fetch(`https://api.github.com/users/${nomeUsuario}`)
    .then((res) => res.json())
    .then((data) => {
      //adiciona imagem do usuario
      imgUser.src = data.avatar_url;

      //adciona nome do usario
      infoUser.children[0].innerHTML = data.name;

      //adiciona link, caso tenha, ou nome com @
      infoUser.children[1].innerHTML = `@${data.login}`;

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
      infoUser.children[2].innerHTML = `Joined ${dataFormatada}`;

      //adiciona biografia
      if (data.bio === null) {
        bibliography.children[0].innerHTML = "Este perfil não tem biografia.";
      } else {
        bibliography.children[0].innerHTML = data.bio;
      }

      //adiciona informações do box
      repositorios.children[1].innerHTML = data.public_repos;
      followers.children[1].innerHTML = data.followers;
      following.children[1].innerHTML = data.following;
    });
}
