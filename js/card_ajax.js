// ////////////////////
// AJAX JSON REQUEST

$.ajax('./json/projects.json')

// WHAT TO DO WITH DATA HUMAN?


.then((data) => {
    $projectButtons.each(function(i) {
        $(this).css({
            'background-image': `url(${data[i].tile})`,
            'background-size': 'cover'
        }).text(`${data[i].name}`)
    })
    $projectButtons.each(function(i) {    
        $('<article>').addClass('project-cards display-none').attr('id',`card-${(i+1)}`).css({
            'background-image': `url(${data[i].card})`,
            'background-size': 'cover',
            'z-index': '2'
        }).html(`<h3>${data[i].name}</h3><p>${data[i].description}</p><a href="${data[i].deployed}"><button>Check it out!</button></a>`).appendTo($main)
   })
   

    // projectCard(1))
    // $projectButtons.on('click', projectCard(2))
    // $projectButtons.on('click', projectCard(3))
    // $projectButtons.on('click', projectCard())
    // $projectButtons.on('click', projectCard(5))
    // $projectButtons.on('click', projectCard(6))
    // $projectButtons.on('click', projectCard())
   


})
.catch((error) => {console.log(error)})
