### Table of Contents

1. [Inspiration](#inspiration)
2. [What this does?](#what-this-does)
3. [Data Source](#data-source)
4. [Credits](#credits)
5. [Built With](#built-with)
6. [Author](#author)
7. [Deployment](#deployment)

## Built With
- Vite
- React
- Tailwind CSS
- Ant Design
- Google APIs
- [react-google-places-autocomplete](https://github.com/Tintef/react-google-places-autocomplete#readme)

## Reflection

### Env Variables in Vite

I just realized that the way Vite handles environment variables is different from that in React and NextJs. Normally we'd use `process.env.*` but instead we need to use `import.meta.env.*` here in Vite.

And it does have extra functionality to prevent leaking env variables to the client, read more details [here](https://vitejs.dev/guide/env-and-mode), which is kinda cool.

## Author

Phot Koseekrainiramon
- [LinkedIn](https://www.linkedin.com/in/phot-kosee/)
- [GitHub](https://github.com/photkosee)
