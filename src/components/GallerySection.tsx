import { useState } from "react";
import { FaTimes, FaSearchPlus } from "react-icons/fa";
import fieldTesting from "@/assets/gallery-field-testing.jpg";
import hardware from "@/assets/gallery-hardware.jpg";
import demo from "@/assets/gallery-demo.jpg";

// Dynamic JSON data structure for gallery
const galleryData = {
  items: [
    { src: fieldTesting, alt: "Field testing on public buses", label: "Field Testing" },
    { src: hardware, alt: "Hardware prototype setup", label: "Hardware Setup" },
    { src: demo, alt: "Prototype demonstration", label: "Prototype Demo" },
  ]
};

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="mx-auto max-w-3xl text-center flex flex-col items-center">
          <span className="mb-3 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary">
            Gallery
          </span>
          <h2 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Project in Action
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            A visual journey through our development, testing, and deployment phases.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {galleryData.items.map((img) => (
            <button
              key={img.label}
              onClick={() => setLightbox(img.src)}
              className="group relative overflow-hidden rounded-3xl shadow-md transition-all hover:shadow-2xl hover:-translate-y-2 border border-border/50"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                width={1024}
                height={768}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-foreground/40 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <FaSearchPlus className="text-white text-4xl drop-shadow-md mb-8 group-hover:mb-0 transition-all duration-300" />
              </div>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent">
                <div className="p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 w-full text-left">
                  <h3 className="font-display text-xl font-bold text-primary-foreground tracking-wide">
                    {img.label}
                  </h3>
                  <p className="text-primary-foreground/80 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300">
                    {img.alt}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/95 backdrop-blur-md p-4 transition-opacity"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute right-6 top-6 rounded-full bg-card/10 hover:bg-primary p-3 text-white transition-colors"
            onClick={() => setLightbox(null)}
          >
            <FaTimes size={24} />
          </button>
          <img
            src={lightbox}
            alt="Gallery preview"
            className="max-h-[90vh] max-w-[95vw] rounded-xl object-contain shadow-2xl ring-1 ring-white/10"
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
