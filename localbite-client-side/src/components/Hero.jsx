import React from "react";
import { Users, MapPin, Star } from "lucide-react";
import { Link } from "react-router";

const Hero = () => {
  return (
    <section
      className="bg-background py-16 lg:pt-16 lg:pb-24"
      aria-labelledby="hero-heading"
    >
      <div className="fix-alignment">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          {/* Left */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Fresh homemade meals near you
            </div>

            {/* Heading & subtext */}
            <div className="space-y-4">
              <h1
                id="hero-heading"
                className="text-4xl font-extrabold leading-tight tracking-tight text-neutral sm:text-5xl lg:text-6xl"
              >
                Share Meals.
                <br />
                Reduce Waste.
                <br />
                Connect Locally.
              </h1>
              <p className="max-w-xl text-sm text-muted-foreground sm:text-base">
                LocalBite connects home cooks with their neighbors, offering a
                platform to share authentic, homemade meals and build community.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link to={"/login"} className="btn-primary">
                Join as Cook
              </Link>
              <Link to={"/all-foods"} className="btn-secondary">
                Browse Meals
              </Link>
            </div>

            {/* Stats row */}
            <div className="mt-2 flex flex-wrap gap-6 text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-success" />
                <span>
                  <span className="font-semibold text-neutral">2,300+</span>{" "}
                  meals shared
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 fill-warning text-warning" />
                <span>
                  <span className="font-semibold text-neutral">4.9</span>{" "}
                  average rating
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-info" />
                <span>Active in 12 neighborhoods</span>
              </div>
            </div>
          </div>

          {/* Right: image card */}
          <div className="flex justify-center lg:justify-end">
            <div className="card w-full max-w-md rounded-4xl border border-border bg-card shadow-xl">
              <figure className="overflow-hidden rounded-4xl">
                <div
                  className="aspect-square w-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBoh68j8ANBlfOT5CzRccLdc_3BEFIkCXdrrV3qGIrhXPO1lNQVqbiArCW7HTk1o88i_ncbm3bRpwRXvq69DfrPH-m8Jm1RFthHUxdUx-1NcDQ1vuIA6vKGeHNJJSJGAk_rhuzxBcdo781kd0E-kjRcvIrPwNAvdm6DJBq--uxSJIk5LLMQ8ISv4E7uSRTgFbE6laylf6Ptei1EA-DTLJPp6AoGgR6sX8aLOoRZKk-hhGnxEsudgwNRUq6ch_GCrd9qP5DVAZy_C-k')",
                  }}
                  aria-label="Colorful homemade dishes arranged on a table."
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
