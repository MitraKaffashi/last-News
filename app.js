const DOMAIN = 'https://newsapi.org/v2/everything?'
const API_KEY = '&pageSize=3&page=1&apikey=310115002acc44ea87efa3aaeb542ea9'

var my_input = document.getElementById("my_input");
var show_news = document.getElementById("show_news");

let getNews = async(url) => {
    try {
        const response = await fetch(url);
        const result = await response.json();
        showNews(result);        
    } catch (error){
        console.log("error");
    }   
}

let searchNews = () => {
    search_input = my_input.value;
    if(search_input == ""){
        alert("please write something");
    }else{
        url = DOMAIN + `q=${search_input}` + API_KEY ;
        console.log(url);
        getNews(url);
    }
   
}

let showNews = (result) => {
    all_news = result['articles'];
    html = "";
    number_of_news = 0;
    all_news.forEach(news => {
        if (number_of_news < 12) {
            html += `<li> ${news['title']}</li>`
            console.log(news['title']);
            number_of_news += 1;
        }
    });
    show_news.innerHTML = html
}
