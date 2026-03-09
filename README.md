# Lightbox.js

Lightweight, dependency-free lightbox for image, video, audio, iframe, and custom HTML content.

- Fast setup
- Framework-agnostic
- Built-in gallery support

## Demo

Live demo: [https://duccanhole.github.io/lightbox-js/](https://duccanhole.github.io/lightbox-js/)

## Installation

```bash
npm install @duccanhole/lightbox
```

```bash
yarn add @duccanhole/lightbox
```

```bash
pnpm install @duccanhole/lightbox
```

## Publish (CLI)

Prerequisites:

- npm account with publish permission for `@duccanhole/lightbox`
- Logged in locally: `npm login`

Release flow:

```bash
# 1) Preview files that will be published
npm run pack:check

# 2) Bump version
npm run release:patch   # or release:minor / release:major

# 3) Publish to npm (public access is preconfigured)
npm run publish:npm
```

One-command publish:

```bash
npm run release:patch:publish
```

## Quick Start (Vanilla JS)

```js
import "@duccanhole/lightbox/style/index.css";
import Lightbox from "@duccanhole/lightbox";

const lightbox = new Lightbox();

lightbox.open({
  type: "image",
  src: "https://picsum.photos/1000/700",
  downloadUrl: "https://picsum.photos/1000/700",
});
```

## Manual Include

Copy `index.js` and `style/index.css` into your project:

```html
<head>
  <link rel="stylesheet" href="/path/to/style/index.css" />
</head>
<body>
  <script type="module">
    import Lightbox from "/path/to/index.js";

    const lightbox = new Lightbox();
    lightbox.open({
      type: "image",
      src: "https://picsum.photos/1000/700",
      downloadUrl: "https://picsum.photos/1000/700",
    });
  </script>
</body>
```

## API

### `open(data)`

Open one item in lightbox.

```ts
type LightboxType = "image" | "video" | "audio" | "iframe" | "custom";

interface ISource {
  src: string;
  type: string;
}

interface IData {
  type: LightboxType;
  src?: string; // required for image and iframe; optional for audio/video if using sources
  sources?: ISource[]; // used for audio and video
  template?: string; // required for custom
  downloadUrl?: string;
  transform?: {
    zoom?: number; // 1..5
    rotate?: number; // degree
    x?: number; // translateX in px
    y?: number; // translateY in px
    reset?: boolean;
  }; // image only
}
```

### `setGallery(list)`

Set gallery items and render gallery thumbnails.

```ts
interface IGalleryItem extends IData {
  thumbnail: string;
}
```

Note: `thumbnail` is the supported key. For backward compatibility, `thumnail` is also accepted.

### `openGalleryItem(index)`

Open gallery item by index after calling `setGallery`.

```ts
openGalleryItem(index: number): void;
```

## Examples

### Gallery mode

```js
const list = [
  {
    type: "image",
    src: "https://picsum.photos/id/1069/900/700",
    thumbnail: "https://picsum.photos/id/1069/300/220",
    downloadUrl: "https://picsum.photos/id/1069/900/700",
  },
  {
    type: "video",
    sources: [
      {
        src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        type: "video/mp4",
      },
    ],
    thumbnail: "https://picsum.photos/id/1011/300/220",
  },
];

lightbox.setGallery(list);
lightbox.openGalleryItem(0);
```

### Image transform

```js
lightbox.open({
  type: "image",
  src: "https://picsum.photos/1000/700",
  transform: {
    zoom: 1.5,
    rotate: 90,
    x: 20,
    y: 10,
  },
});

// Update transform later
lightbox.transform({ zoom: 2, x: 40, y: 0 });
```

### React

```tsx
import { useMemo } from "react";
import "@duccanhole/lightbox/style/index.css";
import Lightbox from "@duccanhole/lightbox";

export default function LightboxButton() {
  const lightbox = useMemo(() => new Lightbox(), []);

  const open = () => {
    lightbox.open({
      type: "image",
      src: "https://picsum.photos/1000/700",
      downloadUrl: "https://picsum.photos/1000/700",
    });
  };

  return <button onClick={open}>Open lightbox</button>;
}
```

### Vue

```vue
<script setup>
import "@duccanhole/lightbox/style/index.css";
import Lightbox from "@duccanhole/lightbox";

const lightbox = new Lightbox();

function openLightbox() {
  lightbox.open({
    type: "image",
    src: "https://picsum.photos/1000/700",
    downloadUrl: "https://picsum.photos/1000/700",
  });
}
</script>

<template>
  <button @click="openLightbox">Open lightbox</button>
</template>
```

### Svelte

```svelte
<script>
  import "@duccanhole/lightbox/style/index.css";
  import Lightbox from "@duccanhole/lightbox";

  const lightbox = new Lightbox();

  function openLightbox() {
    lightbox.open({
      type: "image",
      src: "https://picsum.photos/1000/700",
      downloadUrl: "https://picsum.photos/1000/700"
    });
  }
</script>

<button on:click={openLightbox}>Open lightbox</button>
```

## Notes

- For video/audio, provide either `src` or `sources`.
- For `custom` type, provide `template` HTML string.
- Lightbox creates one shared container in `document.body`.

## License

ISC
