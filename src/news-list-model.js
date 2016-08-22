var NewsList = (function() {

  function requestURL() {
    return "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?section=sport";
  }

  return {
    getNews: function(callback) {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            callback(JSON.parse(xhttp.responseText).response.results);
        }
      }
      xhttp.open("GET", requestURL());
      xhttp.send();
    }
  }
});
