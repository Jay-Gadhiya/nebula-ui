//  javascript for scroll up button When the user scrolls down 20px from the top of the document, show the button

const floatUpBtn = document.querySelector('.btn-position');

window.onscroll = () => scrollFunction();

 const scrollFunction = () => {
  if (document.documentElement.scrollTop > 40) {
    floatUpBtn.style.display = "block";
  } else {
    floatUpBtn.style.display = "none";
  }
}




