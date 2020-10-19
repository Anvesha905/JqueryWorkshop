
  $(document).ready(function(){
    $("#btn1").click(function(){
      
        $("#btn1").css("color", "red");
        $(".circle1").show();
        $(".circle2").hide();
        $(".circle3").hide();
        $(".circle4").hide();
    });


    $("#btn2").click(function(){
        $(".circle2").show();
        $(".circle1").hide();
        $(".circle3").hide();
        $(".circle4").hide();
        $("#btn2").css("color", "orange");


    });
    $("#btn3").click(function(){
        $(".circle3").show();
        $("#btn3").css("color", "blue");
        $(".circle2").hide();
        $(".circle1").hide();
        $(".circle4").hide();

    });
    $("#btn4").click(function(){
        $(".circle4").show();
        $("#btn4").css("color", "green");
        $(".circle2").hide();
        $(".circle3").hide();
        $(".circle1").hide();

    });

  });