var currentPage = '#home'

$('nav ul li').on('click',function(event){
  if(!$(event.target).parent().hasClass('active')){
    $(currentNavLink).removeClass('active')
    currentNavLink = 
  }
})
