import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface/30 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="font-serif text-2xl font-bold text-cream">Bellé Bistro</h3>
            <p className="mt-3 text-sm text-muted">
              Cravings calling? We&apos;ve got you sorted.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-muted">Contact</p>
            <p className="mt-3 text-sm leading-relaxed text-cream">
              Model Town Blvd, Wapda Town Phase 1, Multan
            </p>
            <a
              href="tel:03372355333"
              className="mt-2 block text-sm text-accent-light transition-colors hover:text-accent"
            >
              0337 2355333
            </a>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-muted">Follow Us</p>
            <div className="mt-3 flex flex-col gap-2">
              <a
                href="https://instagram.com/bellebistromux"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-cream transition-colors hover:text-accent-light"
              >
                <Instagram className="h-4 w-4" />
                @bellebistromux
              </a>
              <a
                href="https://tiktok.com/@bellebistro1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-cream transition-colors hover:text-accent-light"
              >
                TikTok · @bellebistro1
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-8 text-center text-xs text-muted">
          © {new Date().getFullYear()} Bellé Bistro. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
