// console.log($(window).width())

const $main = $('main')
const $navButton = $('#nav-button')
const $navElements = $('.nav-elements')
const $aboutMeButton = $('#about-me-button')

const $projects = $('.projects')
const $logo = $('#logo')
const $proj1 = $('#proj-1')
const $proj2 = $('#proj-2')
const $proj3 = $('#proj-3')
const $proj4 = $('#proj-4')
const $proj5 = $('#proj-5')
const $proj6 = $('#proj-6')
const $proj7 = $('#proj-7')

// About Me section DOM
const $aboutMeH3 = $('<h3>').addClass('nav-item').attr('id','about-me-header').text('About Me')
const $aboutMeArticle = $('<article>').addClass('nav-item').attr('id', 'about-me-article').html(`<p id='about-me-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet nisl purus in. Odio pellentesque diam volutpat commodo sed egestas. Nam aliquam sem et tortor consequat id porta nibh venenatis. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Id ornare arcu odio ut sem nulla pharetra diam. Nec ultrices dui sapien eget mi proin sed. Hendrerit dolor magna eget est. Porta nibh venenatis cras sed felis. Nisl condimentum id venenatis a. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Tortor id aliquet lectus proin nibh. Quam nulla porttitor massa id neque. Aliquam ultrices sagittis orci a. Cum sociis natoque penatibus et magnis. Vel elit scelerisque mauris pellentesque. At lectus urna duis convallis. Tempor id eu nisl nunc mi ipsum</p>`)
    

const navShow = () => {
    $navElements.css({
        'transform': 'rotateX(0deg)'
    })
}

const navHide = () => {
    if ($navElements.css('transform') === 'matrix(1, 0, 0, 1, 0, 0)') {
        $navElements.css('transform','rotateX(-90deg)')
        $navElements.css('backface-visibility','hidden')
    }   }


const translate47 = () => {
    $proj4.css('transform','translateY(calc(-1*(var(--tile)))')
    $proj7.css('transform', 'translateY(calc(-1*(var(--tile)))')
}

const translate35 = () => {
    $proj3.css('transform','translateY(calc(-2*(var(--tile)))')
    $proj5.css('transform', 'translateY(calc(-1*(var(--tile)))')    
}

const translate26 = () => {
    $proj2.css('transform','translateY(calc(-1*(var(--tile)))')
    $proj6.css('transform', 'translateY(calc(-2*(var(--tile)))')
}

const translateNav = () => {
    $navButton.css('transform', 'translateY(calc(-3*(var(--tile)))')
}

const translateAll = () => {
    translate47()
    translate35()
    translate26()
    translateNav()
}

const translateReturn = () => {
    $projects.css('transform', 'translateY(0)')
    $navButton.css('transform', 'translateY(0)')
}

const aboutMe = () => {
    translateAll()
    navHide()
    // $aboutMeArticle.css('opacity', '1')
    $aboutMeH3.appendTo($main)
    $aboutMeArticle.appendTo($main)
}

const navItemRemove = () => {
    console.log($('.nav-item').length)
    if ($('.nav-item').length > 0) {
        $('.nav-item').css('transform', 'translateY(calc(4*(var(--tile))))')
            .delay(500).queue(() => {$('.nav-item').removeAttr('style').remove()})
    }
}


// Conditionals:
// aboutMeRemove()



// EVENT HANDLERS 

$navButton.on('click', navShow)
$(window).on('click', (e) => {
    // console.log($(e.target).attr('id'))
    if ($(e.target).attr('id') === 'nav-button' ||
        e.target.className == '') {
        translateReturn()
        navHide()
        navItemRemove()
    }
})
$aboutMeButton.on('click', aboutMe)