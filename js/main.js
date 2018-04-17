!function(t){t.fn.confirmMailto=function(e){var n=t.extend({message:"Do you want to send an email to $to?",to:"href",callback:function(){},success:function(){},fail:function(){}},e),a=/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi,i=function(e){var i=n.message,c=n.to;if(c="href"==c?t(this).attr("href").match(a):"html"==c?t(this).html():c,i=i.replace("$to",c)==i?i+c:i.replace("$to",c),confirm(i)){n.success();var o=!0}else{e.preventDefault(),n.fail();var o=!1}return setTimeout(function(){n.callback(o)},1),o};return this.filter('[href^="mailto:"]').each(function(){t(this).bind("click",i)}),this}}(jQuery);


//Sticky Nav makes my nav bar show at all times as you scroll down the site

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


//Makes the modal at the bottom of the page
    var modalTinyNoFooter = new tingle.modal({
        onClose: function() {
            console.log('close');
        },
        onOpen: function() {
            console.log('open');
        },
        beforeOpen: function() {
            console.log('before open');
        },
        beforeClose: function() {
            console.log('before close');
            return true;
        },
        cssClass: ['class1', 'class2']
    });
    var btn = document.querySelector('.js-tingle-modal-1');
    btn.addEventListener('click', function(){
        modalTinyNoFooter.open();
    });
    modalTinyNoFooter.setContent(document.querySelector('.tingle-demo-tiny').innerHTML);

//Confirm mail function adds pop-up screen when email is clicked

$(document).ready(function(){
	$('a').confirmMailto();
});
