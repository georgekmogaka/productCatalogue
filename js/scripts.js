$(document).ready(function () {

    $('.first-button').on('click', function () {
  
      $('.animated-icon1').toggleClass('open');
    });
    $('.second-button').on('click', function () {
  
      $('.animated-icon2').toggleClass('open');
    });
    $('.third-button').on('click', function () {
  
      $('.animated-icon3').toggleClass('open');
    });

  
    var email = $("#mce-EMAIL").val();
      $("button#mc-embedded-subscribe").click(function() {
        var result =  email + " has been successfully added to our email list. Thank you.";
        $("#output").text(result);
        alert( email + " has been successfully added to our email list. Thank you.")
      });

  });

  




  