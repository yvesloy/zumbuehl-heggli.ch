$(document).ready(function () {
    function showLargePictures(event) {    
        var image = $(event.target.parentElement.parentElement.parentElement).children(".images"),
            detailImage = $(event.target.parentElement.parentElement.parentElement).children('.imageDetail'),
            detailDescription = $(event.target.parentElement.parentElement.parentElement).children(".descriptionDetail"),
            overviewDescription = $(event.target.parentElement.parentElement.parentElement).children(".description"),
            text1 = $(event.target).attr("description1"),
            text2 = $(event.target).attr("description2"),
            text3 = $(event.target).attr("description3");

        detailImage.prop('src', $(event.target).attr("detailImage"));

        image.fadeOut("200", function(){
            detailImage.fadeIn("200");
        });
        overviewDescription.fadeOut("200", function(){
            $(detailDescription.children()[0]).text(text1);
            $(detailDescription.children()[1]).text(text2);
            $(detailDescription.children()[2]).text(text3);
            detailDescription.css("display", "flex");
            detailDescription.fadeIn();
        });
    }
    function closeLargePicture(event) {
        var image = $(event.target.parentElement).children(".images"),
            detailImage = $(event.target.parentElement).children('.imageDetail'),
            detailDescription = $(event.target.parentElement).children(".descriptionDetail"),
            overviewDescription = $(event.target.parentElement).children(".description");

        detailImage.fadeOut("200", function(){
            image.fadeIn("200");
        });
        detailDescription.fadeOut("200", function(){
            $(detailDescription.children()[0]).text("");
            $(detailDescription.children()[1]).text("");
            $(detailDescription.children()[2]).text("");
            overviewDescription.fadeIn();
        });
    }
    $(".imageDetail").click(function(e){
        closeLargePicture(e);
    });
    $(".images :not(.detailImage)").click(function (e) {
        showLargePictures(e);
    });
});