import { useState } from "react";
import { X } from "lucide-react";
import fieldTesting from "@/assets/gallery-field-testing.jpg";
import hardware from "@/assets/gallery-hardware.jpg";
import demo from "@/assets/gallery-demo.jpg";

const images = [
  { src: fieldTesting, alt: "Field testing on public buses", label: "Field Testing" },
  { src: hardware, alt: "Hardware prototype setup", label: "Hardware Setup" },
  { src: demo, alt: "Prototype demonstration", label: "Prototype Demo" },
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-padding bg-secondary/50">
      <div className="container mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
            Gallery
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Project in Action
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img) => (
            <button
              key={img.label}
              onClick={() => setLightbox(img.src)}
              className="group relative overflow-hidden rounded-2xl shadow-md"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                width={1024}
                height={768}
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-foreground/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="p-4 font-display font-semibold text-primary-foreground">
                  {img.label}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute right-4 top-4 rounded-full bg-card p-2 text-foreground shadow-lg"
            onClick={() => setLightbox(null)}
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={lightbox}
            alt="Gallery preview"
            className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
