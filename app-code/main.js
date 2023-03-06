let imgUser = document.querySelector("#img-user");

fetch("https://api.github.com/users/octocat")
  .then((res) => res.json())
  .then((data) => (imgUser.src = data.avatar_url));
