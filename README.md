# Mpls Jr Devs
Website for the Mplr Jr Devs community. Live at https://mplsjrdevs.com.

This project was bootstrapped using [Create React App](https://github.com/facebookincubator/create-react-app).

# Application Setup

## Prerequisites

  1. [Node](https://nodejs.org/en/) installed
  2. [Yarn](https://yarnpkg.com/en/docs/install) or [NPM](https://www.npmjs.com/get-npm) installed

## Development Instructions

  1. Clone the repo
  2. Run `yarn install` (or `npm install`)
  3. Run `yarn start` to spin up the app (http://localhost:3000)

## Add Your Name to the Community Page

Are you a member of Mpls Jr Devs, and want to show it? You can add your name, picture, social links, and a short bio to our [Community page](https://mplsjrdevs.com/community)!

Here's how:

1. Follow the **Development Instructions** above
2. Create a file at `src/components/community/givenname-familyname.js`
3. In that file, export a [JSON object](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON). Update the fields with your information, and remove any you don't want to display:

```js
export default {
    id: 'givenname-familyname',
    name: 'Givenname Familyname',
    twitter: 'https://twitter.com/mplsjrdevs',
    website: 'http://mplsjrdevs.com',
    github: 'https://github.com/mplsjrdevs',
    bio: () => "The bio key can be a function that returns a string, a React component, or nothing at all -- you choose!"
}
```

3. Add your profile picture to `src/images/community/givenname-familyname.jpg`. It should be in the JPEG format, square, and approximately 500px in both dimensions.
4. Commit your bio to a branch, and open a Pull Request against this repository. Someone on the website team will review and merge your PR when it's ready.

# Deploying
This site is hosted on GitHub pages.

To deploy the app to https://mplsjrdevs.com, simply run `yarn deploy`.

# Contributing
This site was built by our community members. Thanks to everyone who's contributed so far:

* [Adriana Belinski](https://artadriana.com/)
* [Brandon Johnson](https://github.com/skylineproject)
* [Chelsey McKinney](https://github.com/camckin10)
* [Christiana Routon](https://github.com/crouton21)
* [Jenessa White](https://github.com/jenessawhite)
* [Garret Saarinen](https://github.com/gsaarinen)
* [Matt Decuir](https://github.com/experimatt)