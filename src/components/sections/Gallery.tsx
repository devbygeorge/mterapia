import Image from "next/image";
import { Image as ImageIcon, Expand } from "lucide-react";
import { Gallery as Lightbox, Item } from "react-photoswipe-gallery";
import db from "@/db.json";

const Gallery = () => {
  const { gallery } = db;

  return (
    <section
      id="gallery"
      className="relative scroll-mt-16 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Header */}
        <div className="flex items-end justify-between gap-6">
          <div>
            <h3 className="text-[1.5rem] sm:text-[1.875rem] tracking-tight font-medium text-slate-900">
              გალერეა
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              სხვა სურათები სპეციალისტის პრაქტიკიდან
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-sm text-slate-500">
            <span className="inline-flex items-center gap-2 rounded-lg px-3 py-1 ring-1 ring-slate-200 bg-white">
              <ImageIcon className="w-4 h-4 text-slate-500" />
              სურათები: {gallery.length}
            </span>
          </div>
        </div>

        {/* Grid */}
        <Lightbox
          options={{
            bgOpacity: 0.93,
          }}
        >
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {gallery.map((image) => (
              <Item
                key={image.id}
                original={image.fullSize}
                thumbnail={image.thumbnail}
                width={image.width}
                height={image.height}
              >
                {({ ref, open }) => (
                  <button
                    type="button"
                    className="group relative overflow-hidden rounded-xl ring-1 ring-slate-200 bg-white shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 cursor-pointer"
                    aria-label="ფოტოს გახსნა"
                  >
                    <div className="relative h-56 sm:h-64 w-full transition duration-500 group-hover:scale-[1.03]">
                      <Image
                        ref={ref}
                        onClick={open}
                        src={image.thumbnail}
                        alt={image.alt}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                    <div className="pointer-events-none absolute right-2 top-2 rounded-md bg-white/90 px-2 py-1 text-slate-700 ring-1 ring-slate-200 opacity-0 transition duration-300 group-hover:opacity-100">
                      <Expand className="w-4 h-4" />
                    </div>
                  </button>
                )}
              </Item>
            ))}
          </div>
        </Lightbox>
      </div>
    </section>
  );
};

export default Gallery;
