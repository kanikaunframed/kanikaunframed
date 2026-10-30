import React from "react";
import { motion } from "motion/react";
import { Play, ArrowUpRight } from "lucide-react";
import { ResumeControls } from "./ResumeControls";

interface PodcastEpisode {
  number: string;
  title: string;
  url: string;
}

const PODCAST_EPISODES: PodcastEpisode[] = [
  {
    number: "01",
    title: "Episode 1 – The Escape",
    url: "https://youtu.be/bTm-yIaf9N4",
  },
  {
    number: "02",
    title: "Episode 2 – When It Becomes Too Much",
    url: "https://youtu.be/0ovZIFnoKM8",
  },
  {
    number: "03",
    title: "Episode 3 – The Things I Notice",
    url: "https://youtu.be/ljWGj426mAc",
  },
  {
    number: "04",
    title: "Episode 4 – Why I Really Go",
    url: "https://youtu.be/rS8wPEFCjXM",
  },
  {
    number: "05",
    title: "Episode 5 – When the Workout Ends",
    url: "https://www.youtube.com/watch?v=hLOMVHHTKrA",
  },
];

export function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -14 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      style={{ willChange: "transform, opacity" }}
      className="absolute inset-0 w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth"
    >
      <div className="min-h-full w-full flex flex-col items-center px-4 sm:px-8 md:px-12 pt-6 sm:pt-10 lg:pt-12 pb-16 sm:pb-24">
        {/* Main About Me Card */}
        <div className="w-full max-w-5xl bg-transparent lg:bg-zinc-50/50 p-4 sm:p-10 lg:p-16 rounded-[2rem] lg:rounded-[2.5rem] flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 xl:gap-24 border-0 lg:border border-black/5 shadow-none lg:shadow-sm">
          {/* Portrait Side */}
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-end shrink-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-[220px] sm:max-w-[260px] md:max-w-[290px] lg:max-w-[320px] aspect-[3/4] relative overflow-hidden rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.14)] bg-zinc-100 border border-black/10 flex items-center justify-center group"
            >
              <img
                src="/About%20Profile%20Pic.jpeg"
                alt="Kanika Agrawal"
                width={960}
                height={1280}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                draggable={false}
                className="w-full h-full block object-contain select-none transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[2rem] z-20 pointer-events-none" />
            </motion.div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              style={{ willChange: "transform, opacity" }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-semibold tracking-tight text-zinc-900 mb-6 leading-[1.12] text-balance">
                The Person Behind The{" "}
                <span className="text-zinc-400 font-light italic">Pixels</span>
              </h2>

              <div className="text-sm sm:text-base lg:text-lg text-zinc-500 font-light space-y-4 sm:space-y-5 leading-relaxed max-w-lg mx-auto lg:mx-0">
                <p>
                  Hi I am Kanika Agrawal I am a visual communication designer who loves exploring branding, packaging, and logo design. I am curious about what goes into building a brand, from its story and personality to the little details that make it stand out. I love taking an idea and exploring how far I can take it, experimenting with color's, typography, and visuals along the way. For me the best part of design is diving deeper into a concept and turning it into something that feels unique and truly its own.
                </p>
              </div>

              <ResumeControls className="mt-7 sm:mt-8 justify-center lg:justify-start" />
            </motion.div>
          </div>
        </div>

        {/* Podcast Episodes Subsection */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          style={{ willChange: "transform, opacity" }}
          className="w-full max-w-5xl mt-10 sm:mt-14 lg:mt-16 px-2 sm:px-0"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 text-center sm:text-left">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900 leading-[1.15]">
              Podcast{" "}
              <span className="text-zinc-400 font-light italic">Episodes</span>
            </h3>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4">
            {PODCAST_EPISODES.map((episode) => (
              <a
                key={episode.url}
                href={episode.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Listen to ${episode.title} on YouTube`}
                className="group flex items-center justify-between gap-4 px-5 sm:px-7 py-4 sm:py-5 rounded-[1.5rem] sm:rounded-[1.75rem] bg-white/60 backdrop-blur-xl border border-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:bg-white hover:border-black/10 hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900"
              >
                <div className="flex items-center gap-4 sm:gap-5 min-w-0">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-zinc-100/90 border border-black/5 flex items-center justify-center shrink-0 group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-300">
                    <Play
                      size={15}
                      className="text-zinc-700 group-hover:text-white transition-colors duration-300 translate-x-[1px]"
                    />
                  </div>
                  <span className="text-sm sm:text-base lg:text-lg font-medium text-zinc-900 tracking-tight truncate sm:whitespace-normal">
                    {episode.title}
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0 text-zinc-400 group-hover:text-zinc-900 transition-colors duration-300">
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
