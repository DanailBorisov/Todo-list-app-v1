$("li").click(function() {
    $(this).toggleClass("completed");
});

//delete by clicking on the span / X
$("span").click(function(e) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    e.stopPropagation();
})