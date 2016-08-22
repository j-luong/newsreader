document.addEventListener('DOMContentLoaded', function(){
  var newsList = new NewsList();
  var newsView = new NewsListView();

  newsList.getNews(function(formattedNews) {
    newsView.render(formattedNews);
  });

  // function makeUrlChangeShowNewsForCurrentPage() {
  //   window.addEventListener("hashchange", showNewsForCurrentPage);
  // };
  //
  // function showNewsForCurrentPage() {
  //   showNews(getNewsFromUrl(window.location));
  // };
  //
  // function getNewsFromUrl(location) {
  //   message = location.hash.split("#")[1];
  //   return newsList.view()[message];
  // };
  //
  // function showNews(news) {
  //   document.getElementById("article").innerHTML = news;
  // };
  //
  // makeUrlChangeShowNewsForCurrentPage();
});
