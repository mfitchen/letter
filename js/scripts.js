$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var personInput = $("input#person").val();

    $(".person").text(personInput);

    $("#letter").show();

    event.preventDefault();
  });
});
