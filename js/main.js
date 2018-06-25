/* Make the dropdown menu grey when no state selected */
$("#state").css("color", "#555");
$("#state").on("change", function() {
    $(this).css("color", "black");
});
