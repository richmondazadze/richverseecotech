import React, { useRef, useState } from "react";
import { cn } from "../../lib/utils"
import { TestimonialCard, TestimonialAuthor } from "./testimonial-card"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface TestimonialsSectionProps {
  title: string
  description: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
  }>
  className?: string
}

export function TestimonialsSection({ 
  title,
  description,
  testimonials,
  className 
}: TestimonialsSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  let pauseTimeout: NodeJS.Timeout;

  // Scroll by one card width
  const scrollByCard = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    setIsPaused(true);
    const card = scrollRef.current.querySelector("div > div"); // first card
    const cardWidth = card ? (card as HTMLElement).offsetWidth : 300;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth"
    });
    // Resume marquee after 5 seconds
    clearTimeout(pauseTimeout);
    pauseTimeout = setTimeout(() => setIsPaused(false), 5000);
  };

  return (
    <section className={cn(
      "bg-background text-foreground",
      "py-12 sm:py-24 md:py-32 px-0",
      className
    )}>
      <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
          <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
            {title}
          </h2>
          <p className="text-md max-w-[600px] font-medium text-muted-foreground sm:text-xl">
            {description}
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          {/* Left Button */}
          <button
            className="absolute left-2 top-1/2 z-20 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-blue-100 transition"
            onClick={() => scrollByCard("left")}
            aria-label="Scroll testimonials left"
            type="button"
          >
            <FaChevronLeft />
          </button>
          {/* Right Button */}
          <button
            className="absolute right-2 top-1/2 z-20 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-blue-100 transition"
            onClick={() => scrollByCard("right")}
            aria-label="Scroll testimonials right"
            type="button"
          >
            <FaChevronRight />
          </button>
          {/* Marquee/scrollable container */}
          <div
            ref={scrollRef}
            className={`group flex overflow-x-auto no-scrollbar p-2 [--gap:1rem] [gap:var(--gap)] flex-row transition-all duration-500 ${isPaused ? "" : "animate-marquee"}`}
            style={{ scrollBehavior: "smooth" }}
          >
            <div className="flex shrink-0 justify-around [gap:var(--gap)] flex-row">
              {[...Array(4)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`${setIndex}-${i}`}
                    {...testimonial}
                  />
                ))
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-background sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-background sm:block" />
        </div>
      </div>
    </section>
  )
} 