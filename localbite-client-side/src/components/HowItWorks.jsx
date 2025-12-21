import React from "react";
import { Soup, MapPin, MessageSquareMore } from "lucide-react";

const steps = [
  {
    icon: Soup,
    title: "Cooks Post Meals",
    description:
      "Sign up as a cook and share your homemade meals with neighbors who appreciate real food.",
  },
  {
    icon: MapPin,
    title: "Eaters Browse Nearby",
    description:
      "Discover meals within walking distance, filter by cuisine or diet, and reserve a portion.",
  },
  {
    icon: MessageSquareMore,
    title: "Pick Up & Review",
    description:
      "Coordinate pickup, enjoy your meal, and leave a review to support your favorite cooks.",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className=" py-16 sm:py-20 lg:py-24"
      aria-labelledby="how-heading"
    >
      <div className="fix-alignment">
        <div className="text-center space-y-3">
          <h2
            id="how-heading"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral"
          >
            How It Works
          </h2>
          <p className="mx-auto max-w-2xl text-sm sm:text-base text-muted-foreground">
            Getting started is simple. Share your culinary creations or discover
            delicious homemade food in your neighborhood in just a few steps.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:gap-8 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="card border border-border bg-card shadow-lg transition-transform transition-shadow hover:-translate-y-1 hover:shadow-xl rounded-3xl"
            >
              <div className="card-body space-y-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary shadow-sm">
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

export default HowItWorks;
