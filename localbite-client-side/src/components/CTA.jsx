import React from "react";
import { Link } from "react-router";

const CTA = () => {
  return (
    <section className=" py-16 sm:py-20 lg:py-24" aria-labelledby="cta-heading">
      <div className="fix-alignment">
        <div
          className="relative overflow-hidden rounded-4xl  bg-accent text-accent-foreground shadow-xl"
          style={{ backgroundImage: "var(--gradient-hero)" }}
        >
          {/* Glow blobs */}
          <div className="pointer-events-none absolute -left-10 top-0 h-40 w-40 rounded-full bg-primary/30 blur-3xl" />

          <div className="relative px-6 py-12 text-center sm:px-10 sm:py-16 lg:px-16">
            <h2
              id="cta-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight"
            >
              Join the LocalBite Community Today!
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-accent-foreground/80">
              Whether you&apos;re a passionate cook or a hungry neighbor,
              there&apos;s a place for you at our table. Share meals, meet
              people, and make a difference on your street.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link to={"/login"} className=" btn-primary  ">
                Join as Cook
              </Link>
              <Link
                to={"/all-foods"}
                className="btn btn-outline rounded-lg border border-accent-foreground/40 bg-transparent px-6 text-sm font-semibold text-accent-foreground hover:bg-accent-foreground/10"
              >
                Browse Meals
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
