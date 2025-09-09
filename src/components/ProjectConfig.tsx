import { CDN } from "../config/cdn";

const img = (file: string) => `${CDN}/projects/${file}`;

type Pos = "top" | "middle" | "bottom";
type Tone = "light" | "dark";
type Variant = "light" | "dark";

type Slide = {
  title: string;
  caption: string;
  img: string;
  imgMobile?: string;
  position: Pos;
  color: Tone;
};

type NumberedSlides = {
  title1: string;
  caption1: string;
  img1: string;
  img1Mobile?: string;
  position1: Pos;
  color1: Tone;
  title2: string;
  caption2: string;
  img2: string;
  img2Mobile?: string;
  position2: Pos;
  color2: Tone;
  title3: string;
  caption3: string;
  img3: string;
  img3Mobile?: string;
  position3: Pos;
  color3: Tone;
};

export type Project = { variant: Variant } & NumberedSlides;

function buildProject(variant: Variant, slides: [Slide, Slide, Slide]): Project {
  const [s1, s2, s3] = slides;
  return {
    variant,
    title1: s1.title,
    caption1: s1.caption,
    img1: s1.img,
    img1Mobile: s1.imgMobile,
    position1: s1.position,
    color1: s1.color,
    title2: s2.title,
    caption2: s2.caption,
    img2: s2.img,
    img2Mobile: s2.imgMobile,
    position2: s2.position,
    color2: s2.color,
    title3: s3.title,
    caption3: s3.caption,
    img3: s3.img,
    img3Mobile: s3.imgMobile,
    position3: s3.position,
    color3: s3.color,
  };
}

const slide = (title: string, caption: string, file: string, position: Pos, color: Tone, mobileFile?: string): Slide => ({
  title,
  caption,
  img: img(file),
  imgMobile: mobileFile ? img(mobileFile) : undefined,
  position,
  color,
});

export const PROJECT_CONFIG = {
  project1: buildProject("light", [
    slide("This Website!", "With an AWS Backend", "project1-slide1.png", "middle", "light", "project1-slide1-mobile.png"),
    slide("Project 1", "Caption 2", "project1-slide2.png", "bottom", "dark", "project1-slide2-mobile.png"),
    slide("Project 1", "Caption 3", "project1-slide3.png", "top", "light", "project1-slide3-mobile.png"),
  ]),
  project2: buildProject("dark", [
    slide("Project 2", "Caption 1", "project2-slide1.png", "middle", "dark", "project2-slide1-mobile.png"),
    slide("Project 2", "Caption 2", "project2-slide2.png", "bottom", "light", "project2-slide2-mobile.png"),
    slide("Project 2", "Caption 3", "project2-slide3.png", "top", "dark", "project2-slide3-mobile.png"),
  ]),
  project3: buildProject("dark", [
    slide("Project 3", "Caption 1", "project3-slide1.png", "middle", "dark", "project3-slide1-mobile.png"),
    slide("Project 3", "Caption 2", "project3-slide2.png", "bottom", "light", "project3-slide2-mobile.png"),
    slide("Project 3", "Caption 3", "project3-slide3.png", "top", "dark", "project3-slide3-mobile.png"),
  ]),
} as const;

export type ProjectKey = keyof typeof PROJECT_CONFIG;
