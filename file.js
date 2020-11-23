var links = document.getElementsByClassName('menu-link');
for(let item of links) {
  item.addEventListener('click',() => {
    document.getElementsByClassName('menu-link active')[0].classList.remove('active');
    item.classList.add('active');
    //let name = item.querySelector('a.menu-link').attributes[0].value;
    //$('html, body').animate({scrollTop: $(name).offset().top -65 }, 1000);
  })
}