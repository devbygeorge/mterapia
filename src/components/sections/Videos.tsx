import db from "@/db.json";

const Videos = () => {
  const { videos } = db;

  return (
    <section id="videos" className="relative scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="max-w-2xl">
          <p className="text-[0.75rem] tracking-wider text-slate-500 ">
            ყურება
          </p>
          <h2 className="mt-2 text-[1.875rem] sm:text-[2.25rem] tracking-tight  font-medium text-slate-900">
            მოკლე ვიდეოები და რჩევები
          </h2>
          <p className="mt-2 text-slate-600">
            მარტივი რუტინები და ახსნა-განმარტებები, რომლებიც დაგეხმარებათ თავი
            უკეთ იგრძნოთ სესიებს შორის.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <article
              key={index}
              className="group overflow-hidden rounded-2xl ring-1 bg-white ring-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="aspect-video relative">
                <iframe
                  className="absolute inset-0 h-full w-full rounded-t-2xl"
                  src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
                    video.url
                  )}&show_text=false&width=560`}
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-slate-900">{video.title}</h3>
                <p className="mt-1 text-[0.875rem] text-slate-600 ">
                  {video.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;
