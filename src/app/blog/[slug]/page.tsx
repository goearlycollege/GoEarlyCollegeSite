import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FinalCta } from "@/components/final-cta";
import { ShareButtons } from "@/components/blog/share-buttons";
import { RESOURCES } from "@/lib/resources-data";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return RESOURCES.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = RESOURCES.find((r) => r.slug === slug);
  if (!article) return buildMetadata({ title: "Article", description: "", path: `/blog/${slug}` });
  return buildMetadata({
    title: article.title,
    fullTitle: `${article.title} | Go Early College`,
    description: article.excerpt,
    path: `/blog/${article.slug}`,
    image: article.image,
  });
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = RESOURCES.find((r) => r.slug === slug);
  if (!article) notFound();

  const related = RESOURCES.filter((r) => r.slug !== article.slug && r.category === article.category)
    .concat(RESOURCES.filter((r) => r.slug !== article.slug && r.category !== article.category))
    .slice(0, 3);

  return (
    <>
      <section className="bg-charcoal pb-16 pt-[calc(var(--header-height)+3rem)] text-ivory md:pt-[calc(var(--header-height)+4.5rem)]">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.1em] text-gold">
              <span className="rounded-full border border-gold/40 px-3 py-1">{article.category}</span>
              <span className="text-ivory/50">{article.date}</span>
              <span className="text-ivory/50">&middot;</span>
              <span className="text-ivory/50">{article.readTime}</span>
            </div>
            <h1 className="mt-6 font-serif text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.1] text-balance">
              {article.title}
            </h1>
          </div>
        </Container>
      </section>

      <Container>
        <div className="mx-auto -mt-10 mb-16 max-w-3xl">
          <div className="relative aspect-[16/9] overflow-hidden rounded-sm shadow-[0_30px_60px_-20px_rgba(29,31,35,0.35)]">
            <Image src={article.image} alt="" fill className="object-cover" sizes="(min-width: 768px) 768px, 100vw" />
          </div>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="mb-10 rounded-sm border border-gold/30 bg-gold-tint/40 px-5 py-3 text-[13px] leading-relaxed text-charcoal-soft/75">
            Draft outline — this article is a placeholder pending final copy from
            Go Early College (brief specifies 1,200–2,500 words per article; full
            text has not been supplied yet).
          </div>

          <div className="flex flex-col gap-5 text-[16.5px] leading-relaxed text-charcoal-soft/85">
            {article.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="my-14 rounded-sm border border-crimson/20 bg-crimson/[0.04] p-8 text-center">
            <p className="font-serif text-xl text-charcoal">
              Thinking about Go Early College for your child?
            </p>
            <p className="mt-2 text-[14.5px] text-charcoal-soft/70">
              Take the free assessment — personalised report in 60 seconds.
            </p>
            <Button href="/assessment" className="mt-5">
              Take the Free Assessment →
            </Button>
          </div>

          <div className="flex flex-col gap-6 border-t border-charcoal/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[13.5px] text-charcoal-soft/60">
              Written by <span className="text-charcoal">Go Early College Admissions Team</span>
            </p>
            <ShareButtons path={`/blog/${article.slug}`} title={article.title} />
          </div>
        </div>

        {related.length > 0 && (
          <div className="mx-auto mt-20 max-w-5xl">
            <h2 className="font-serif text-2xl text-charcoal">Related articles</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group flex flex-col gap-3 overflow-hidden rounded-sm border border-charcoal/10 bg-cream transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(29,31,35,0.25)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={r.image} alt="" fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="33vw" />
                  </div>
                  <div className="flex flex-col gap-2 p-5">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-crimson">{r.category}</span>
                    <h3 className="font-serif text-lg text-charcoal group-hover:text-crimson">{r.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>

      <div className="mt-24">
        <FinalCta
          primaryLabel="Take the Free Assessment"
          primaryHref="/assessment"
          secondaryLabel="Apply Now"
          secondaryHref="/apply"
          secondaryVariant="secondary"
        />
      </div>
    </>
  );
}
