const client = contentful.createClient({
  space: "bdqjrxtjqoco",
  accessToken: "LFS67GE6SECKEj2GctCmSKniTLiqU1rE2LI741uGyWM"
});

const carousel = document.getElementById("carousel-inner")
const indicators = document.getElementById("carousel-indicators")


client.getEntries({content_type:'projectCard'})
  .then(response => {
    
    response.items.forEach((item, index) => {
      
      const { title, description, img, gitFront, gitBack, deployment} = item.fields

      if (gitBack) {var repo = gitBack}
      else {var repo = gitFront}

      carousel.insertAdjacentHTML('beforeend',
        `<div id="card-${title}" class="carousel-item">
          <div class="card text-center flex-row m-auto w-75" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <p class="card-text">${description}</p>
              <a href="${deployment}" target="_blank" class="btn btn-primary">Deployment</a>
              <a href="${repo}" target="_blank" class="btn btn-primary">Git Repository</a>
            </div>
            <img src="${img.fields.file.url}" class="w-50 rounded" alt="..." />
          </div>
        </div>`
      );

      indicators.insertAdjacentHTML('beforeend',
        `<button type="button" data-bs-target="#project-carousel" data-bs-slide-to="${index+1}" aria-label="Slide ${index+2}"></button>`
      );
    })
  })
  .catch(err => console.log(err));