import jQuery from "jquery";

var acc = document.getElementsByClassName("footer__title");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var links = this.nextElementSibling;
    if (links.style.maxHeight) {
      links.style.maxHeight = null;
    } else {
      links.style.maxHeight = links.scrollHeight + "px";
    } 
  });
}


jQuery(document).ready(function () {
  jQuery("#burgermenu").hide();
});

jQuery("#burgeropen").click(function() {
  jQuery("#burgermenu").show();
})

jQuery("#burgerclose").click(function() {
  jQuery("#burgermenu").hide();
})


