type Props = {
  image: string;
};

export default function GalleryCard({ image }: Props) {
  return (
    <div className="overflow-hidden rounded-2xl">
      <img
        src={image}
        alt="Wedding"
        className="h-80 w-full object-cover transition duration-500 hover:scale-110"
      />
    </div>
  );
}