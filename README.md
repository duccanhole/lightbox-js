# Lightbox-js
The fast and simple lightbox package, support multiple type of file, with no dependency.
## Installation
- **NPM**
```bash
npm install @duccanhole/lightbox
```
- **Yarn**
```bash
yarn add @duccanhole/lightbox
```
- **PNPM**
```bash
pnpm install @duccanhole/lightbox
```
- **Includes**
<br/>Copy or download javascript file from `index.js` and css file from `style/index.css` to your project
```html
<head>
  <link type="text/css" rel="stylesheet" href="/** link your css file here */" />
</head>
<body>
  <script type="module">
    import Lightbox from "/** link your js file here */"
    const lightbox = new Lightbox()
    lightbox.open({
      type: 'image',
      src: 'https://picsum.photos/800/800',
      downloadUrl: 'https://picsum.photos/200/300'
    })
  </script>
</body>
```
## Docs
- **open(data: IData)**
```ts
interface IData {
    type: "image" | "video" | "audio" | "iframe" | "custom"
    src: string // the source link of file
    sources: Array<ISource> // the data for source tag, need for "audio" & "video" type
    template: string // the html string template to render, need for "custom" type
    downloadUrl?: string // the link to download file 
}
```
```ts
interface ISource {
    src: string
    type: string
}
```
- **setGallery(list: Array<IGalleryItem>)**
```ts
interface IGalleryItem extends IData {
    thumnail: string // the display thumbnail link
}
```
- **openGalleryItem(i: number)**
<br/>After set gallery list, you can open gallery item with i is index of item in list.
## Usage
- **Javascript**
```javascript
import Lightbox from "@duccanhole/lightbox";

const lightbox = new Lightbox();
lightbox.open({
  type: "image",
  src: "https://picsum.photos/800/800",
  downloadUrl: "https://picsum.photos/200/300"
})
```
- **React**
```ts
import "@duccanhole/lightbox/style/index.css";
import Lightbox from "@duccanhole/lightbox";
import { useEffect, useState } from "react";

export default function LightboxComponent() {
  const [lightbox, setLightbox] = useState<any>(null);

  const openLightbox = () => {
    lightbox?.open({
      type: "image",
      src: "https://picsum.photos/800/800",
      downloadUrl: "https://picsum.photos/200/300",
    });
  };

  useEffect(() => {
    const initLightbox = () => {
      setLightbox(new Lightbox());
    };
    initLightbox();
  }, []);
  return (
    <div className="w-full h-screen bg-white">
      <button onClick={openLightbox}>Open lightbox</button>
    </div>
  );
}
```
- **Vue**
1. Import css file to your project
###### `main.ts`
```ts
import './assets/main.css'
import '@duccanhole/lightbox/style/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
```
2. In your component, init class and use
```ts
<template>
  <div>
    <button @click="openLightbox">Open lightbox</button>
  </div>
</template>
<script lang="ts" setup>
import Lighbox from 'lightbox-js'

const lighbox = new Lighbox()

function openLightbox() {
  lighbox.open({
    type: 'image',
    src: 'https://picsum.photos/800/800',
    downloadUrl: 'https://picsum.photos/200/300'
  })
}
</script>
```
- **Svelte**
1. Import css file to root css file of your project
###### `app.css`
```css
@import '@duccanhole/lightbox/style/index.css';
```
2. In your component, init class and use
```ts
<div>
    <button on:click={openLightbox}>Open lightbox</button>
</div>
<script>
import Lightbox from '@duccanhole/lightbox'
import { onMount } from 'svelte';

let lightbox = null

function openLightbox() {
    lightbox.open({
        type: 'image',
        src: 'https://picsum.photos/800/800',
        downloadUrl: 'https://picsum.photos/200/300'
    })
}

onMount(() => {
    lightbox = new Lightbox()
})
</script>
```
## Example
Your can view the demo [here](https://duccanhole.github.io/lightbox-js/)
