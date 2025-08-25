import Image from "next/image";
import { ArrowRight } from "lucide-react";
import db from "@/db.json";

const Blog = () => {
  const { articles } = db;

  return (
    <section id="blog" className="relative bg-white scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="max-w-2xl">
          <p className="text-[0.75rem] tracking-wider text-slate-500">
            სწავლა
          </p>
          <h2 className="mt-2 text-[1.875rem] sm:text-[2.25rem] tracking-tight  font-medium text-slate-900">
            უახლესი სტატიები
          </h2>
          <p className="mt-2 text-slate-600">
            მოკლე საკითხავი ნათელი დასკვნებით, რომელთა გამოყენებაც დღესვე
            შეგიძლიათ.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <article
              key={index}
              className="flex flex-col overflow-hidden rounded-2xl ring-1 bg-slate-50 ring-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="relative h-44 w-full object-cover">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="h-44 w-full object-cover"
                />
              </div>

              <div className="p-5 flex-1">
                <div className="flex items-center gap-2 text-[0.75rem]">
                  <span
                    className={`inline-flex items-center rounded-full px-2 py-0.5 ${article.categoryColor}`}
                  >
                    {article.category}
                  </span>
                  <span className="text-slate-500">{article.readTime}</span>
                </div>
                <h3 className="mt-2 text-[1.125rem] font-semibold text-slate-900">
                  {article.title}
                </h3>
                <p className="mt-1 text-[0.875rem] text-slate-600">
                  {article.description}
                </p>
              </div>
              <div className="p-5 border-t border-slate-200 bg-white">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[0.875rem] font-semibold text-cyan-700 hover:text-cyan-800 transition"
                >
                  სტატიის წაკითხვა
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
