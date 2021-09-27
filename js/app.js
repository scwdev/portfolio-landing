
const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "bdqjrxtjqoco",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "LFS67GE6SECKEj2GctCmSKniTLiqU1rE2LI741uGyWM"
});
// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
client
  .getEntry("6L6K8IiZMbisvqGPyWSqqk")
  .then(entry => console.log(entry))
  .catch(err => console.log(err));