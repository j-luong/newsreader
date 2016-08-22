var NewsList = (function() {

  function requestURL() {
    return "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?section=sport&show-fields=body&show-editors-picks=true";
  }

  return {
    getNews: function(callback) {
      console.log("1");
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
          console.log(JSON.parse(xhttp.responseText).response.results);
            callback(JSON.parse(xhttp.responseText).response.results);
        }
      };
      xhttp.open("GET", requestURL());
      xhttp.send();
    }
  };
});
