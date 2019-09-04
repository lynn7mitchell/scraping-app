// $.get("/api/articles", function(data){
//     console.log(data)

//     for(let i = 0; i < data.length; i++){
//       let headline = data[i].headline;
//       let URL = data[i].URL;

//         $("#list").append("<li>" + headline + "<br>" + URL + "</li>")
//     }
//   })


let newCard = ""
$("#scrape").on('click', function(){
  $.get("/api/scrape", function(data){
  $.get("/api/articles", function(data){
    console.log(data)

    for(let i = 0; i < data.length; i++){
      let headline = data[i].headline;
      let link = data[i].URL; 
      console.log(headline)
      console.log(i)

      newcard = "<div class='col s12 m4'><div class='card'><div class='card-content'><span class='card-title'><a href ='"+link+"'>" + headline  + "</a> </span><div class='card-action'><a class='save'>Save Article</a><a class='comment'>Comment</a></div></div></div></div>"

      $("#articles").append(newcard);
      // $("#articles").append(col.append(card.append(cardContent.append(cardTitle.append(headline)).append(cardAction.append("<a class='save-article'>Save Article</a>").append( "<a class='comment'>leave a comment")).append(link))))
    }
  })

})
})