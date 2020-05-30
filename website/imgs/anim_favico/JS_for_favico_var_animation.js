var $parent = document.createElement("div")
    $gif = document.createElement("img")
   ,$favicon = document.createElement("link")

// Required for CORS
$gif.crossOrigin = "anonymous"

$gif.src = "https://i.imgur.com/v0oxdQ8.gif"

$favicon.rel = "icon"

// JS Fiddle always displays the result in an <iframe>,
// so we have to add the favicon to the parent window
window.parent.document.head.appendChild($favicon)

// libgif.js requires the GIF <img> tag to have a parent
$parent.appendChild($gif)

var supergif = new SuperGif({gif: $gif})
   ,$canvas

supergif.load(()=> {
  $canvas = supergif.get_canvas()
  updateFavicon()
})

function updateFavicon() {
  $favicon.href = $canvas.toDataURL()
  window.requestAnimationFrame(updateFavicon)
}

// use above code for icos extracted onto canvas with below bookmarklet tool
// extract frames with: https://github.com/buzzfeed/libgif-js

// http://lab.ejci.net/favico.js/



// alternate code 
// An important point is to note that you need to remove the favicon <link> tags first, and then re-insert it. Just changing the href attribute won't work.

var favicon_images = [
    'http://website.com/img/tmp-0.gif',
    'http://website.com/img/tmp-1.gif',
    'http://website.com/img/tmp-2.gif',
    'http://website.com/img/tmp-3.gif',
    'http://website.com/img/tmp-4.gif',
    'http://website.com/img/tmp-5.gif',
    'http://website.com/img/tmp-6.gif'
],
image_counter = 0; // To keep track of the current image

setInterval(function() {
$("link[rel='icon']").remove();
$("link[rel='shortcut icon']").remove();
$("head").append('<link rel="icon" href="' + favicon_images[image_counter] + '" type="image/gif">');

// If last image then goto first image
// Else go to next image    
if(image_counter == favicon_images.length -1)
image_counter = 0;
else
image_counter++;
}, 200);