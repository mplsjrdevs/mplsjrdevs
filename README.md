# Mpls Jr Devs
Website for the Mplr Jr Devs community. Live at https://mplsjrdevs.com.

This project was bootstrapped using [Create React App](https://github.com/facebookincubator/create-react-app).

# Application Setup

## Prerequisites

  1. [Node](https://nodejs.org/en/) installed
  2. [Yarn](https://yarnpkg.com/en/docs/install) installed

## Development Instructions

  1. Clone the repo
  2. Run `yarn install` (or `npm install`)
  3. Run `yarn start` to spin up the app (http://localhost:3000)

# Deploying
This site is hosted on GitHub pages.

To deploy the app to https://mplsjrdevs.com, simply run `yarn deploy`.

# Adding yourself to the website

Are you a member of the Mpls Jr Devs community, and want to be featured on our website? You can add your name, picture, social links, and a short bio to our [Community page](https://mplsjrdevs.com/community)!

Here's how:

1. Follow the <a href='#development-instructions'>**Development Instructions**</a> above
2. Add your profile picture to `src/images/community/firstname-lastname.jpg`. It should be square, a JPEG, and approximately 500px in both dimensions.
3. Create a component file for yourself and save it to `src/components/community/firstname-lastname.js`
4. In your component file, export a [JSON object](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON). Update the fields with your information, and remove any you don't want to display:

```js
export default {
    id: 'firstname-lastname',
    name: 'Firstname Lastname',
    twitter: 'https://twitter.com/username',
    website: 'http://example.com',
    github: 'https://github.com/username',
    bio: () => "The bio key can be a function that returns a string, a React component, or nothing at all -- you choose!"
}
```
5. Create a new branch, commit your work to it, and submit a pull request to this repo. Someone on the website team will review, leave feedback, and merge your PR when it's ready.

# Contributing
This site was built by our community members. Thanks to everyone who's contributed so far:

* [Adriana Belinski](https://artadriana.com/)
* [Brandon Johnson](https://github.com/skylineproject)
* [Chelsey McKinney](https://github.com/camckin10)
* [Christiana Routon](https://github.com/crouton21)
* [Jenessa White](https://github.com/jenessawhite)
* [Garret Saarinen](https://github.com/gsaarinen)
* [Matt Decuir](https://github.com/experimatt)
* [Sarah Cooke](https://github.com/marshcooke)
