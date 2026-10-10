import EventCard from "./EventCard";
import { weddingConfig } from "../../config/weddingConfig";

export default function Events() {
  return (
    <section className="bg-[#090909] py-28">

      <h2 className="mb-16 text-center text-5xl text-[#D4AF37]">
        Wedding Events
      </h2>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2">

        {weddingConfig.events.map((event) => (
          <EventCard
            key={event.title}
            {...event}
          />
        ))}

      </div>

    </section>
  );
}