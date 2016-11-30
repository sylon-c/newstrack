var http = require ('request');
var url ="https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=f457c6ceb3454658a08c0612a67413be";

var feeds= {
	host:''
}

http.get(url,function(err, res, body){
	if(err){
		// console.log(err)
	}
	body = JSON.parse(body);
	console.log(body.source);
	console.log(body.status)
	console.log(body.articles[0]['title'])
})


// http.get(url, function(response, err){
// var content = "";
// response.on('feeds', function(){
//      response.on('feeds', function(feeds) {
//      	content += feeds;
//      });
//   });
// response.on('end', function() {
//    var parsed = JSON.parse(content);
//    console.log(parsed);
//  });
// })
// .on('error', function(er) {
//  console.error("error" + "something went wrong");
// });
       
       







