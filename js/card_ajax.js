// project array shuffler, found here: https://bost.ocks.org/mike/shuffle/. Incredible post.
function shuffle(array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
  }  
/////////////////////////
// array of the projects I want up.
var array = [0,1,2,3,4,5,6]
shuffle(array)
console.log(array)

// AJAX JSON REQUEST
$.ajax('./json/projects.json')

// WHAT TO DO WITH DATA HUMAN?
.then((data) => {   
    $projectButtons.each(function(i) {
        i = array[0]
        $(this).css({
            'background-image': `url(${data[i].tile})`,
            'background-size': 'cover'
        }).text(`${data[i].name}`)
        $('<article>').addClass('project-cards display-none').attr('id',`card-${(i+1)}`).css({
            'background-image': `url(${data[i].card})`,
            'background-color': 'darkslategray',
            'background-size': 'cover',
            'z-index': '2'
        }).html(`<h3>${data[i].name}</h3><p>${data[i].description}</p><a href="${data[i].deployed}" target="_blank" rel="noopener noreferrer">Check it out!</a>`).appendTo($main)
        array.shift()
    })
})
//WHAT IF IT DOESN'T WORK HUMAN?
.catch((error) => {console.log(error)})
