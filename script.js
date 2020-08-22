const text = document.getElementsByClassName("textArea");
const input = document.querySelector('.input');
const submit = document.getElementById("getpost");
const news = document.getElementsByClassName("newsList");

const apikey = "7952c22f536bbf81f3f83ac8b8adff47";


submit.addEventListener('click', getPosts);
 

async function getPosts(e){
  e.preventDefault();
  if (!input.value) return

  const data = await fetch(`https://gnews.io/api/v3/search?q=${input.value}&token=${apikey}`)

  const { articles } = await data.json()

 
 let output = '<h3>Articles</h3>';
  articles.forEach(function(articles){
    output += `
    <div class='outer-div'>
    ${articles.image ? `<img src="${articles.image}" />` : ''}
    <div class='inner-div'>
    <h4>${articles.title}</h4>
    <p>${articles.description}</p>
    <a target="_blank" href="${articles.url}">Read</a>
    </div>
    </div>
    `;
  });
  document.getElementById('container').innerHTML = output;
  input.value = ''
}