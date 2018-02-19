$(document).ready(function() {
    $("#searchBox").hide(); 
});

function clickSearch() {
   $("#searchBox").show();    
}

$("#searchBox").keyup(function(event) {
    if (event.keyCode === 13) {
      searchTerm($("#searchBox").val());   
    }
});

function searchTerm(term) {
  $("#results").empty(); 
  $("#clickSearch").hide();
  var url = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=" + term + "&callback=?";
  $.getJSON(url, function(json){
    var resultLength= Object.keys(json.query.pages).length;
    for (i = 0; i < resultLength; i++) {
      var pageid = Object.keys(json.query.pages)[i];
      $("#results").append('<a href= "http://en.wikipedia.org/?curid=' + pageid + '" target="_blank"><div class = "result"><p><b>' + json.query.pages[pageid].title + '</b></p><p>' + json.query.pages[pageid].extract + '</p></div></a>');
     }   
 });  
}