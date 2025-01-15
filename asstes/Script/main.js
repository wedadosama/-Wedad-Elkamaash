document.getElementById("toggle-theme").onclick = () =>{
  if(document.body.classList.contains("dark-theme")){
    document.body.classList.remove("dark-theme")
    document.getElementById("toggle-theme").src ="asstes/Icon/dark.webp";
  }else{
    document.body.classList.add("dark-theme")
    document.getElementById("toggle-theme").src ="asstes/Icon/light.webp";

  }
};
let userData = document.getElementById("user-deta"); 
function getData() {
  let data = ""; 
  fetch(`https://api.github.com/users/wedadosama`)
    .then((res) => res.json())
    .then((data) => {
      userData.innerHTML = `
        <div class="avatar">
          <img src="${data.avatar_url}" alt="${data.name}" />
          <h1>${data.name}</h1>
          <a hraf="${data.html_url}"target="_blank" > GitHub Profile</a>
        </div>
      `;
    });
    
};
fetch(`https://api.github.com/users/wedadosama/repos`)
  .then((res) => res.json())
  .then((data) => {
    let repos = "";
    for (let i = 0; i < data.length; i++) {
      repos += `
        <li>
          <a href="${data[i].homepage}" target="_blank">${data[i].name}</a>
        </li>
      `;
    }
    document.getElementById("user-repos").innerHTML = repos;
  });

getData();


