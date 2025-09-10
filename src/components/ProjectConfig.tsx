import { CDN } from "../config/cdn";

const img = (f: string) => `${CDN}/projects/${f}`;

export type Pos = "top" | "middle" | "bottom";
export type Tone = "light" | "dark";
export type Variant = "light" | "dark";

export type Slide = {
  title: string;
  caption: string;
  position: Pos;
  color: Tone;
  imgDesktop: string;
  imgMobile?: string;
};

export type Project = {
  variant: Variant;
  slides: [Slide, Slide, Slide];
};

const slide = (title: string, caption: string, position: Pos, color: Tone, d: string, m?: string): Slide => ({
  title,
  caption,
  position,
  color,
  imgDesktop: img(d),
  imgMobile: m ? img(m) : undefined,
});

export const PROJECT_CONFIG = {
  project1: {
    variant: "light",
    slides: [
      slide("This Website!", "With an AWS Backend", "middle", "light", "project1-slide1.png", "project1-slide1-mobile.png"),
      slide("Project 1", "Caption 2", "bottom", "dark", "project1-slide2.png", "project1-slide2-mobile.png"),
      slide("Project 1", "Caption 3", "top", "light", "project1-slide3.png", "project1-slide3-mobile.png"),
    ],
  },
  project2: {
    variant: "dark",
    slides: [
      slide("Project 2", "Caption 1", "middle", "dark", "project2-slide1.png", "project2-slide1-mobile.png"),
      slide("Project 2", "Caption 2", "bottom", "light", "project2-slide2.png", "project2-slide2-mobile.png"),
      slide("Project 2", "Caption 3", "top", "dark", "project2-slide3.png", "project2-slide3-mobile.png"),
    ],
  },
  project3: {
    variant: "dark",
    slides: [
      slide("Project 3", "Caption 1", "middle", "dark", "project3-slide1.png", "project3-slide1-mobile.png"),
      slide("Project 3", "Caption 2", "bottom", "light", "project3-slide2.png", "project3-slide2-mobile.png"),
      slide("Project 3", "Caption 3", "top", "dark", "project3-slide3.png", "project3-slide3-mobile.png"),
    ],
  },
} as const satisfies Record<string, Project>;

export type ProjectKey = keyof typeof PROJECT_CONFIG;
