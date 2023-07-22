# Next.js and Storyblok Workshop- CityJS Singapore 2023

This repository is a Next.js project with [Storyblok](https://www.storyblok.com). 
## Requirements

To use this project you have to have a Storyblok account. If you don't have one yet you can register at [Storyblok](https://www.storyblok.com), it's free.

### Find the slides [here](https://docs.google.com/presentation/d/1UATi12wdWPyv65ZRZ8-nFv4sww1_J2wUs8Q9co3PKdw/edit?usp=sharing)
### Find the notion page [here](https://storyblok.notion.site/CityJS-Singapore-Go-Headless-with-Next-js-13-and-Storyblok-02772a0023ca4328b513c7e943216b3d)

## Deployed URL - https://cityjs-singapore-2023-workshop.vercel.app/


## How to get started?

### 1. Clone the repo

```sh
  $ git clone https://github.com/arorachakit/cityjs-singapore-2023-workshop.git
```

### 2. Install all dependecies 
```sh
$  npm install # or yarn
```

### 3. Adding the Access token
Create a new empty Space and exchange the preview token with your own in ```app/layout.js``` and ```components/StoryblokProvider.js```.

```js
storyblokInit({
  accessToken: "your-preview-token",
  use: [apiPlugin],
});
```

### 4. Run your project
Set the preview domain in <strong>Storyblok</strong> to `http://localhost:3000/`

```sh
# to run in developer mode
$ npm run dev #or yarn dev
```

```sh
# to build your project
$ npm run build # or yanr build
```



## Resources

- [Next.js docs](https://nextjs.org/docs/#setup)
- [Storyblok Tutorial](https://www.storyblok.com/tp/add-a-headless-cms-to-next-js-13-in-5-minutes)