$( document ).ready(function() {


$('.first-screen-slider').slick({
    dots: true,
    speed: 1000,
    appendArrows: ".container-arrows",
    responsive: [
        {
          breakpoint: 991,
          settings: {
            arrows: false,
            
          }
        },
    ]
});

});

function checkboxContainerPadding() {
  const checkButton = document.querySelectorAll('.check-button');

checkButton.forEach(element => {
  element.closest('[class*="col"]').classList.add('padding-top');
 
});
console.log(checkButton);
}
 
if (document.querySelector('.calculation-form')) {
    checkboxContainerPadding()
} else {
    null;
}
