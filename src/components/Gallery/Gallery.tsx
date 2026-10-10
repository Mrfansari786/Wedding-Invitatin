import GalleryCard from "./GalleryCard";

const images = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
];

export default function Gallery() {
  return (
    <section className="bg-[#090909] py-28">

      <h2 className="mb-16 text-center text-5xl text-[#D4AF37]">
        Our Gallery
      </h2>

      <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3">

        {images.map((img) => (
          <GalleryCard key={img} image={img} />
        ))}

      </div>

    </section>
  );
}