window.onload = function() {
     fetch('playercharacters.json')

 .then(function(response) {

return response.json();

 })

 .then(function(json) {

var tableCode = '<table><caption>characters</caption><thead><tr><th>Name</th><th>Species</th><th>Class</th><th>Subclass</th></tr></thead><tbody>';

for (var i = 0; i < json.length; i++) {

 tableCode += '<tr><td>' + json[i].title + '</td><td>' + json[i].author + '</td><td>' + json[i].year + '</td><td>' + json[i].publisher + '</td></tr>';

 }

 tableCode += '</tbody><tfoot><tr><td colspan="4">Source: Some Books API</td></tr></tfoot></table>';

 document.getElementById('characters').innerHTML = tableCode;

 })

 }