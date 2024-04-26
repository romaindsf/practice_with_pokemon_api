export default function Thumbnail({ key, imgSrc, alt, version }) {
  return (
    <figure key={key}>
      <img src={imgSrc} alt={alt} />
      <figcaption>{version}</figcaption>
    </figure>
  )
}
