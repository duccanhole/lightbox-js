# Lightboxjs
The fast, simple lightbox package; support multiple type of file; no dependency.
## Installation
- 
## Usage
### API
* [open](#opendata-idata)
* [setGallery](#setgallerylist-arrayigalleryitem)
* [openGalleryItem](#opengalleryitemi-number)
### `open(data: IData)`
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
### `setGallery(list: Array<IGalleryItem>)`
```ts
interface IGalleryItem extends IData {
    thumnail: string // the display thumbnail link
}
```
### `openGalleryItem(i: number)`
After set gallery list, you can open gallery item with i is index of item in list.
## Example
- Javascript
```javascript
import Lightbox from "lightbox-js";

const lightbox = new Lightbox();
lightbox.open({
  type: "image",
  src: "https://picsum.photos/800/800",
  downloadUrl: "https://picsum.photos/200/300"
})
```
- Reactjs
```ts
import "lightbox-js/style/index.css";
import Lightbox from "lightbox-js";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";

export default function Test() {
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
      <Button color="default" className="text-gray-500" onClick={openLightbox}>Open lightbox</Button>
    </div>
  );
}
```


## Demo