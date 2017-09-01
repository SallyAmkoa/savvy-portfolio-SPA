$('nav ul li').on('click', function(event) {
  // console.log("event target", event.target)
  var currentNavLink =$("nav").find(".active")
    $(currentNavLink).removeClass('active')
  if(!$(event.target).parent().hasClass('active')){
    var newNavLink = $(event.target).parent()
    var currentPageName = $(currentNavLink).text().toLowerCase()
    var currentPageId = "#" + currentPageName
    // console.log('currentPageId', currentPageName)
    var newPageName = $(event.target).text().toLowerCase()
    var newPageId = "#" + newPageName
    // console.log('newPageId', newPageId)



    // console.log('newNavLink', newNavLink)
    $(currentNavLink).removeClass('active')
    $(newNavLink).addClass('active')
    $(currentPageId).addClass('hidden')
    $(newPageId).removeClass('hidden')
  }
})
