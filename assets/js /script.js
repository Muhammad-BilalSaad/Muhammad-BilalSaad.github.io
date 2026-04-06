function toggleArticle(id){
  let articles = document.querySelectorAll("[id^='article']");
  
  articles.forEach(a => {
    if(a.id !== id){
      a.style.display = "none";
    }
  });

  let x = document.getElementById(id);
  if(x.style.display === "block"){
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
