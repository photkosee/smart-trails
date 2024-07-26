# <p align="center"><a href="https://github.com/photkosee/smart-trails"><img width="350" src="./public/SmartTrails.png"></a></p>

<p align="center">Find your perfect trail with Gemini AI-powered search tailored to your requirements. <a href="https://github.com/photkosee/smart-trails">Try it out now!</a></p>

### Table of Contents

- [Inspiration](#inspiration)
- [What this does?](#what-this-does)
- [Built With](#built-with)
- [Author](#author)

## What this does?

This app, powered by Gemini AI, helps users find the perfect trails by matching their specific requirements. Simply input your preferences, and our AI will search and recommend the best trails just for you.

## Built With
- Vite 5
- React 18
- Tailwind CSS
- MUI
- Google APIs
- [react-google-places-autocomplete](https://github.com/Tintef/react-google-places-autocomplete#readme)
- React OAuth2 | Google

## Reflection

### Env Variables in Vite

I just realized that the way Vite handles environment variables is different from that in React and NextJs. Normally we'd use `process.env.*` but instead we need to use `import.meta.env.*` here in Vite.

And it does have extra functionality to prevent leaking env variables to the client, read more details [here](https://vitejs.dev/guide/env-and-mode), which is kinda cool.

## Further Improvements

### Performing API calls on server

Ideally you'd want to call them from the server side since performing the action that require keys on client side can be risky for security issue.

## Author

Phot Koseekrainiramon
- [LinkedIn](https://www.linkedin.com/in/phot-kosee/)
- [GitHub](https://github.com/photkosee)
