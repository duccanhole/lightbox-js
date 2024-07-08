# Lightboxjs
The fast, simple lightbox package; support multiple type of file; no dependency.
## Installation

## Usage
### API
* [open](###open)
* [setGallery](###setGallery)
* [openGalleryItem](###openGalleryItem)
### `open(data: IData)`
```ts
interface IData {
    type: "image" | "video" | "audio" | "iframe" | "custom"
    src: string // the source link of file
    sources: Array<ISource> // the data for source tag, need for audio & video type
    template: string // the html string template to render, need for custom type
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
## Example