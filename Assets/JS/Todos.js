$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

//delete by clicking on the span / X
$("ul").on("click", "span", function(e) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    e.stopPropagation();
});
$("input[type='text']").keypress(function(event) {
    if (event.which === 13) {
        var toDoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + toDoText + "</li>");

    }

});
$(".fa-plus-circle").click(function() {
    $("input").fadeToggle();
});