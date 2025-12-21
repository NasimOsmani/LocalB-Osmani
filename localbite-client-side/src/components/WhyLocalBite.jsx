import React from "react";
import { HeartHandshake, Leaf, PiggyBank } from "lucide-react";

const reasons = [
  {
    icon: HeartHandshake,
    title: "Community-Driven",
    description:
      "Build real connections with neighbors and celebrate the stories behind every dish.",
  },
  {
    icon: Leaf,
    title: "More Sustainable",
    description:
      "Reduce food waste by sharing surplus portions and supporting a circular local food system.",
  },
  {
    icon: PiggyBank,
    title: "Affordable Homemade Food",
    description:
      "Enjoy the taste of home at fair prices, while cooks earn extra by doing what they love.",
  },
];

const WhyLocalBite = () => {
  return (
    <section
      id="why-localbite"
      className="bg-background py-16 sm:py-20 lg:py-24"
      aria-labelledby="why-heading"
    >
      <div className="fix-alignment">
        <div className="text-center space-y-3">
          <h2
            id="why-heading"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral"
          >
            Why LocalBite Works
          </h2>
          <p className="mx-auto max-w-2xl text-sm sm:text-base text-muted-foreground">
            We believe in the power of food to bring people together, reduce
            waste, and strengthen local economies.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:gap-8 md:grid-cols-3">
          {reasons.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="card border border-border bg-card shadow-lg rounded-3xl transition-transform transition-shadow hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="card-body space-y-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-semibold text-neutral">
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyLocalBite;
