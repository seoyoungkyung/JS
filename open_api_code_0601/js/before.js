 $(function(){

        //multipage

        $('#booklist li:nth-of-type(1)').click(function(){


          $('#list_a').show();
          $('#list_b').hide();
          $('#list_c').hide();



        });




        $('#booklist li:nth-of-type(2)').click(function(){

          $('#list_a').hide();
          $('#list_b').show();
          $('#list_c').hide();

        });


        $('#booklist li:nth-of-type(3)').click(function(){


          $('#list_a').hide();
          $('#list_b').hide();
          $('#list_c').show();


        });



        // title 

        $("#booklist li").click(function(){

          $("#titlelist").text($(this).text());


        });




      });