import Image from "next/image";
import { Star } from "lucide-react";
import { formatPrice } from "@/lib/formatPrice";
import type { MenuItem } from "@/data/menuData";

interface MenuCardProps {
  item: MenuItem;
  imageUrl?: string;
}

export default function MenuCard({ item, imageUrl }: MenuCardProps) {
  return (
    <article className="group relative rounded-2xl border border-white/5 bg-surface p-6 transition-all duration-300 hover:scale-[1.02] hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-serif text-lg font-semibold leading-snug text-cream">
            {item.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
        </div>

        <div className="flex flex-col items-end gap-3">
          {item.special && (
            <span className="flex items-center gap-0.5 rounded-full bg-gold/10 px-2 py-0.5 text-xs font-medium text-gold">
              <Star className="h-3 w-3 fill-gold" />
            </span>
          )}
          <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent-light">
            {formatPrice(item.price)}
          </span>
        </div>
      </div>

      {imageUrl && (
        <div className="mt-4 flex h-20 w-full items-center justify-end">
          <div className="relative h-20 w-20 overflow-hidden rounded-3xl border border-white/10 bg-zinc-950">
            <Image
              src={imageUrl}
              alt={item.name}
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </article>
  );
}
