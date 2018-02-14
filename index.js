// Your code goes here:

jQuery( function(){

  let thumbnailAttribute = function(event) {
    $imgEle = jQuery(this);
    img_src = $imgEle.attr("src");

    let mainImg = jQuery("#main-image");
    mainImg.attr("src",img_src);

}

jQuery("#thumbnails img").on("click",thumbnailAttribute)

});
