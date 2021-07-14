
// About Me section DOM
const $aboutMeH3 = $('<h3>').addClass('nav-item').attr('id','about-me-header').text('About Me')
const $aboutMeArticle = $('<article>').addClass('nav-item').attr('id', 'about-me-article').html(`<p id='about-me-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet nisl purus in. Odio pellentesque diam volutpat commodo sed egestas. Nam aliquam sem et tortor consequat id porta nibh venenatis. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Id ornare arcu odio ut sem nulla pharetra diam. Nec ultrices dui sapien eget mi proin sed. Hendrerit dolor magna eget est. Porta nibh venenatis cras sed felis. Nisl condimentum id venenatis a. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Tortor id aliquet lectus proin nibh. Quam nulla porttitor massa id neque. Aliquam ultrices sagittis orci a. Cum sociis natoque penatibus et magnis. Vel elit scelerisque mauris pellentesque. At lectus urna duis convallis. Tempor id eu nisl nunc mi ipsum</p>`)
    
// Contact Form section DOM
const $contactForm = $('<div>').addClass('nav-item').attr('id', 'contact-form').html(`
    <form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/xdoylebg" method="post">
        <fieldset id="fs-frm-inputs">
            <label for="full-name">Full Name</label>
            <input type="text" name="name" id="full-name" placeholder="First and Last" required="">
            <label for="email-address">Email Address</label>
            <input type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required="">
            <label for="message">Message</label>
            <textarea  name="message" id="message" placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus." required=""></textarea>
            <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission">
            <input id='contact-form-submit-button' type="submit" value="Submit">
        </fieldset>
    </form>`)


const navShow = () => {

    $navElements.removeClass('hide-nav-elements')
    $navElements.addClass('show-nav-elements')
}
const navHide = () => {
    $navElements.removeClass('show-nav-elements')
    $navElements.addClass('hide-nav-elements')
}
navHide()



const navToggle = () => {
    if ($('article').not('.display-none').length !== 0) {

    }
    else if ($navElements.hasClass('show-nav-elements')) {
        navHide()
    } else {
        navShow()
    }
}

const translateNavElements = (content) => {
    $navButton.addClass(`translate-nav-${content}`)
    $aboutMeButton.addClass(`translate-about-me-button-${content}`)
    $contactFormButton.addClass(`translate-contact-form-button-${content}`)
    $socialsButton.addClass(`translate-socials-button-${content}`)
}

const translateLogo = (content) => {
    $logo.addClass(`translate-logo-${content}`)
}


////////////////////////
// TRANSLATION FUNCTIONS
////////////////////////

const translateFor = (content) => {
    navItemRemove()
    hideCards()
    translateReturn()
    translateNavElements(content)
    translateNav(content)
    translateTiles(content)
    translateLogo(content)
}

const translateNav = (content) => {
        $navButton.addClass(`translate-nav-${content}`)
}
const translateTiles = (content) => {
    $projectButtons.each(function(i) {
        $(this).addClass(`translate-proj-${(i+1)}-${content}`)
   })
}

// this part is... ugly.
const translateReturn = () => {
    $projectButtons.each(function(i) {
        $(this).removeClass(`translate-proj-${(i+1)}-about`)
        $(this).removeClass(`translate-proj-${(i+1)}-contact`)
        $(this).removeClass(`translate-proj-${(i+1)}-cards`)
    })
    $navButton.removeClass('translate-nav-about')
    $navButton.removeClass('translate-nav-contact')
    $navButton.removeClass(`translate-nav-cards`)
    $aboutMeButton.removeClass(`translate-about-me-button-about`)
    $aboutMeButton.removeClass(`translate-about-me-button-contact`)
    $aboutMeButton.removeClass(`translate-about-me-button-cards`)
    $contactFormButton.removeClass(`translate-contact-form-button-about`)
    $contactFormButton.removeClass(`translate-contact-form-button-contact`)
    $contactFormButton.removeClass(`translate-contact-form-button-cards`)
    $socialsButton.removeClass(`translate-socials-button-about`)
    $socialsButton.removeClass(`translate-socials-button-contact`)
    $socialsButton.removeClass(`translate-socials-button-cards`)
    $logo.removeClass('translate-logo-cards')

}


const aboutMe = () => {
    // $aboutMeH3.css('transform', 'translateY(calc(4*(var(--tile))))')
    translateReturn()
    translateFor('about')
    navHide()
    $aboutMeH3.appendTo($main).delay(1).queue(() => {$aboutMeH3.css('transform', 'translateY(0)')})
    $aboutMeArticle.appendTo($main).delay(1).queue(() => {$aboutMeArticle.css('transform', 'translateY(0)')})
}
const contactForm = () => {
    translateReturn()
    translateFor('contact')
    navHide()
    $contactForm.appendTo($main)
}
const navItemRemove = () => {
    if ($('.nav-item').length > 0) {
        $('.nav-item').remove()
    }
}


const showCards = (i) => {
    translateReturn
    translateFor('cards')
    $('.project-cards').addClass('display-none')
    $('.project-cards').eq(i-1).removeClass('display-none')
}

const hideCards = () => {
    $('.project-cards').addClass('display-none')
    translateReturn()
}

/////////////////
// EVENT HANDLERS 
/////////////////
$navButton.on('click', () => {
    navToggle()
    hideCards()
})

$(window).on('click', (e) => {
    // console.log($(e.target).attr('id'))
    if ($(e.target).attr('id') === 'nav-button' || $(e.target).attr('id') == undefined || $(e.target).attr('id') === 'logo') {
        translateReturn()
        navItemRemove()
        hideCards()
    };
})


$aboutMeButton.on('click', aboutMe)
$contactFormButton.on('click', contactForm)


$proj1.on('click', () => {
    showCards(1)
})

$proj2.on('click', () => {
    showCards(2)
})

$proj3.on('click', () => {
    showCards(3)
})

$proj4.on('click', () => {
    showCards(4)
})

$proj5.on('click', () => {
    showCards(5)
})

$proj6.on('click', () => {
    showCards(6)
})

$proj7.on('click', () => {
    showCards(7)
})

