// Toggle Mobile Menu
document.addEventListener('DOMContentLoaded', function(){
  const toggleBtn = document.querySelector('.navbar .mobile-menu-toggle')
   const mobileItems = document.querySelector('.navbar .mobile-menu-items')

    toggleBtn.addEventListener('click', function(){
      mobileItems.classList.toggle('active')
    })
  
})


// Navbar Tranparency on Scroll
window.addEventListener('scroll', function(){
  const navbar = document.querySelector('.navbar')
  if(this.window.scrollY > 0){
    navbar.classList.add('navbar-scroll')
  } else {
    navbar.classList.remove('navbar-scroll')
  }
})