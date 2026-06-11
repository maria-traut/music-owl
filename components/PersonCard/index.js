import Image from "next/image";

export default function PersonCard({ person }) {
  const { name, birth_year, photo_url } = person;
  return (
    <section>
      <Image
        src={photo_url ? photo_url : "/placeholder.jpg"}
        alt={`Picture showing ${name}`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
      />
      <p>{name}</p>
      <p>{birth_year}</p>
    </section>
  );
}
