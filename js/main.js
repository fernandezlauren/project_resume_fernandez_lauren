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

//X
