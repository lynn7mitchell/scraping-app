$.get("/api/articles", function(data){
    console.log(data)

    for(let i = 0; i < data.length; i++){
      let headline = data[i].headline;
      let URL = data[i].URL;

        $("#list").append("<li>" + headline + "<br>" + URL + "</li>")
    }
  })