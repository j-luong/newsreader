var NewsListView = (function() {

  function generateHTML(news) {
      var htmlString = "<ul>";
      for (var i=0; i < news.length; i++) {
        htmlString += "<li>" + news[i].webTitle + "</li>";
      }
      return htmlString + "</ul>";
  }
  
  return {
    render: function(news) {
      var element = document.getElementById('articleList');
      element.innerHTML = generateHTML(news);
    }
  }
});
