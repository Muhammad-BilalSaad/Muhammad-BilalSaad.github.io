function toggleArticle(id){
  let all = document.querySelectorAll("[id^='article']");
  all.forEach(el => {
    if(el.id !== id) el.style.display = "none";
  });

  let x = document.getElementById(id);
  x.style.display = (x.style.display === "block") ? "none" : "block";
}
