import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Header, Footer, BLOG_POSTS } from "./index";
import { ArrowRight, BookOpen, X } from "lucide-react";

export const Route = createFileRoute("/blog")({
  component: BlogPage,
});

function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<typeof BLOG_POSTS[0] | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      <Header />
      <main className="py-20 bg-secondary/5 min-h-[70vh] bg-pattern-transparent relative z-10">
        <div className="mx-auto max-w-6xl px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="font-mono text-xs font-bold uppercase tracking-widest text-primary flex items-center justify-center gap-1.5">
              <BookOpen className="h-4.5 w-4.5" />
              Insights & Guides
            </div>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
              From the Krait Desk
            </h2>
            <p className="mt-4 text-muted-foreground">
              Learn more about instant crypto swaps, stablecoin networks, and maximizing your trade volume commissions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 relative z-20">
            {BLOG_POSTS.map((post) => (
              <div
                key={post.slug}
                className="flex flex-col justify-between bg-card border border-border/60 rounded-3xl p-6 shadow-xl hover:border-primary/40 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-bold text-lg leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                <div className="pt-6">
                  <button
                    onClick={() => setSelectedPost(post)}
                    className="text-xs font-bold text-primary flex items-center gap-1 hover:underline cursor-pointer"
                  >
                    Read Full Article
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reader Modal Overlay */}
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="bg-card border border-border max-w-2xl w-full rounded-3xl shadow-2xl p-6 md:p-8 relative max-h-[85vh] overflow-y-auto animate-scale-up z-50">
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute right-4 top-4 p-2 rounded-full hover:bg-secondary/40 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
                  <span>{selectedPost.date}</span>
                  <span>•</span>
                  <span>{selectedPost.readTime}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold leading-tight">
                  {selectedPost.title}
                </h2>
                <div className="h-px bg-border/40" />
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                  {selectedPost.content}
                </p>
                <div className="pt-4 flex justify-end">
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="bg-secondary text-secondary-foreground font-bold px-6 py-2.5 rounded-full hover:bg-secondary/90 transition-all text-xs cursor-pointer"
                  >
                    Close Reader
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
