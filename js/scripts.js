$(document).ready(function() {
  $("form#fortune_teller").submit(function(event){
    event.preventDefault();
    $("#unlucky_responses").show()
    $("input:checkbox[name=unlucky_fortune]:checked").each(function() {
      var unluckyFortuneMode = $(this).val ();
      $('#unlucky_responses').append(unluckyFortuneMode + "<br>");
    });
    $("#lucky_responses").show()
    $("input:checkbox[name=lucky_fortune]:checked").each(function() {
      var luckyFortuneMode = $(this).val();
      $('#lucky_responses').append(luckyFortuneMode + "<br>");
    });
    $("#fortune_teller").hide();
  });
});
