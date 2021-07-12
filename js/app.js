

const $navButton = $('#nav-button')

const navShow = () => {
    // console.log('test')
    $('.nav-elements').css({
        'transition-duration': '.5s',
        'transform': 'rotateX(0deg)'
    })
}

const navHide = () => {
    if ($('.nav-elements').css('transform') === 'matrix(1, 0, 0, 1, 0, 0)') {
        $('.nav-elements').css('transform','rotateX(-90deg)')
    }   }

// navShow()

// Nav down
$navButton.on('click', navShow)
// Nav up
$(window).on('click', (e) => {
    console.log(e.target.className)
    if (e.target.className !== 'nav-elements') {
        navHide()
    }
})
