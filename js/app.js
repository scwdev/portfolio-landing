
const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "bdqjrxtjqoco",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "LFS67GE6SECKEj2GctCmSKniTLiqU1rE2LI741uGyWM"
});
// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.

const carousel = document.getElementById("carousel-inner")

// console.log(client)
client.getEntries()
  .then(response => {
    const projects = response.items
    projects.forEach((item, index) => {
      const fields = item.fields
      carousel.insertAdjacentHTML('beforeend',
        `<div id="card-${index}" class="carousel-item active">
          <div class="card flex-row m-auto w-75" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${fields?.title}</h5>
              <p class="card-text">${fields?.description}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            <img src="${fields?.img.fields.file.url}" class="w-50 rounded" alt="..." />
          </div>
        </div>`
      );

      console.log(item.fields)
    })
    // console.log(response.items)
  })
  .catch(err => console.log(err));