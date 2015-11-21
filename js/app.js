// function makeCartScrollNicely() {
//   var cart = document.querySelector(...);
//   Ps.initialize(cart);
// }

window.onload = function() {
  console.log("page loaded");
  var $toggle = document.querySelector(".site__right-sidebar-toggle");
	$toggle.addEventListener("click",function() {
	  document.body.classList.toggle("js-show-right-sidebar");
	});
}