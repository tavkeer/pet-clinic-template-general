import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Plus, ShoppingBag, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { productCategories, products, type Product } from "@/data/site";
import { cn } from "@/lib/utils";

function ProductCard({ product, onAdd }: { product: Product; onAdd: () => void }) {
  const [wished, setWished] = useState(false);
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {product.badge && (
          <Badge variant="accent" className="absolute left-3 top-3 shadow-soft">
            {product.badge}
          </Badge>
        )}
        <button
          type="button"
          aria-label="Add to wishlist"
          onClick={() => setWished((v) => !v)}
          className="glass absolute right-3 top-3 grid size-9 place-items-center rounded-full border border-border/60 text-foreground transition-colors hover:text-destructive"
        >
          <Heart className={cn("size-4", wished && "fill-destructive text-destructive")} />
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wide text-primary">
            {product.category}
          </span>
          <span className="flex items-center gap-1 text-xs font-medium text-muted-foreground">
            <Star className="size-3.5 fill-accent-foreground text-accent-foreground" />
            {product.rating}
            <span className="text-muted-foreground/70">({product.reviews})</span>
          </span>
        </div>
        <h3 className="font-display text-base font-semibold leading-snug text-foreground">
          {product.name}
        </h3>
        <div className="mt-auto flex items-center justify-between pt-3">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-foreground">${product.price}</span>
            {product.oldPrice && (
              <span className="text-sm text-muted-foreground line-through">${product.oldPrice}</span>
            )}
          </div>
          <button
            type="button"
            onClick={onAdd}
            aria-label={`Add ${product.name} to cart`}
            className="grid size-10 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-110 active:scale-95"
          >
            <Plus className="size-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export function Shop() {
  const [active, setActive] = useState<(typeof productCategories)[number]>("All");
  const [cart, setCart] = useState(0);

  const filtered = useMemo(
    () => (active === "All" ? products : products.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section id="shop" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          <SectionHeading
            eyebrow="Pet Shop"
            title="Vet-approved essentials,"
            highlight="delivered to your door"
            description="Hand-picked nutrition, toys and care products our veterinarians actually recommend."
          />

          {/* Category filter */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {productCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active === cat
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {active === cat && (
                  <motion.span
                    layoutId="shop-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-primary shadow-lg shadow-primary/25"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((product) => (
              <ProductCard key={product.name} product={product} onAdd={() => setCart((c) => c + 1)} />
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="#" variant="outline" size="lg">
            <ShoppingBag />
            View Full Catalogue
          </Button>
          <AnimatePresence>
            {cart > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                className="flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground"
              >
                <ShoppingBag className="size-4" />
                {cart} item{cart > 1 ? "s" : ""} added to cart
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
