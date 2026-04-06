function toggle(id){
document.getElementById(id).classList.toggle('hidden');
}

function openArticle(num){
document.getElementById('modal').style.display='flex';
document.getElementById('articleText').innerText = articles[num];
}

function closeModal(){
document.getElementById('modal').style.display='none';
}

const articles = {
1:"My First Days...",
2:"Finding Friendship...",
3:"I Was Alone...",
4:"Adjusting...",
5:"Crush Story...",
6:"Exams...",
7:"Chaos Month...",
8:"Online Classes...",
9:"Travel...",
10:"March April..."
};
