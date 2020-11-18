import createClient from 'contentful'

const contentful = require("contentful");
const Client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "9c106ofo6m84",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "uJGX8wWSwKrUgYbpp6H2qLmbdtiFWnHooj7M223ejG0"
});

export default Client