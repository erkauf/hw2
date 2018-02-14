// Your code goes here: event.preventDefault() $("img").attr("src")
let thumbnailAttribute = function(event) {

  event.preventDefault()
  let thumbnailClick = jQuery(this)
  jQuery("#main-image"),attr("src", thumbnailClick)
}

jQuery("#thumbnails").on("click",thumbnailAttribute)
