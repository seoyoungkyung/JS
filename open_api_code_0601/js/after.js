 $(function(){

      //multipage
       var i =0;
       $("#booklist>li").mouseenter(function(){
         i = ($(this).index())+1
         $("section > article").hide()
         $("section > article:nth-of-type"+"("+i+")").stop().fadeIn("fast")
       })

        // title 
        $("#booklist li").click(function(){
          $("#titlelist").text($(this).text());
        });
      });