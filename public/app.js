// $.get("/api/articles", function(data){
//     console.log(data)

//     for(let i = 0; i < data.length; i++){
//       let headline = data[i].headline;
//       let URL = data[i].URL;

//         $("#list").append("<li>" + headline + "<br>" + URL + "</li>")
//     }
//   })


let newCard = ""
  $.get("/api/articles", function(data){
    console.log(data)

    for(let i = 0; i < data.length; i++){
      let headline = data[i].headline;
      let link = data[i].URL; 
      console.log(headline)
      console.log(i)

      newcard = "<div class='col s12 m4'><div class='card'><div class='card-content'><span class='card-title'>" + headline  + " </span> " + link + "<div class='card-action> </div></div></div></div>"
      $("#articles").append(newcard);
      // $("#articles").append(col.append(card.append(cardContent.append(cardTitle.append(headline)).append(cardAction.append("<a class='save-article'>Save Article</a>").append( "<a class='comment'>leave a comment")).append(link))))
    }
  })