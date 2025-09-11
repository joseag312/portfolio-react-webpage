import { CDN } from "./CDN";

type CaptionPosition = "top" | "middle" | "bottom";
type CaptionColor = "light" | "dark";

export type Slide = {
  title: string;
  caption: string;
  position: CaptionPosition;
  color: CaptionColor;
  imgDesktop: string;
  imgMobile?: string;
};

export type Project = {
  variant: "light" | "dark";
  slides: Slide[];
};

export type ProjectKey = "project1" | "project2" | "project3";

export const PROJECTS = {
  project1: {
    variant: "light",
    slides: [
      {
        title: "This Website!",
        caption: "With an AWS Backend",
        position: "middle",
        color: "light",
        imgDesktop: `${CDN}/project1-slide1.png`,
        imgMobile: `${CDN}/project1-slide1-mobile.png`,
      },
      {
        title: "Availability",
        caption: "Multi-Az & CloudFront!",
        position: "middle",
        color: "dark",
        imgDesktop: `${CDN}/project1-slide2.png`,
        imgMobile: `${CDN}/project1-slide2-mobile.png`,
      },
      {
        title: "Monitoring",
        caption: "Using AWS Logging",
        position: "middle",
        color: "light",
        imgDesktop: `${CDN}/project1-slide3.png`,
        imgMobile: `${CDN}/project1-slide3-mobile.png`,
      },
    ],
  },

  project2: {
    variant: "dark",
    slides: [
      {
        title: "Project 2",
        caption: "Caption 1",
        position: "middle",
        color: "dark",
        imgDesktop: `${CDN}/project2-slide1.png`,
        imgMobile: `${CDN}/project2-slide1-mobile.png`,
      },
      {
        title: "Project 2",
        caption: "Caption 2",
        position: "bottom",
        color: "light",
        imgDesktop: `${CDN}/project2-slide2.png`,
        imgMobile: `${CDN}/project2-slide2-mobile.png`,
      },
      {
        title: "Project 2",
        caption: "Caption 3",
        position: "top",
        color: "dark",
        imgDesktop: `${CDN}/project2-slide3.png`,
        imgMobile: `${CDN}/project2-slide3-mobile.png`,
      },
    ],
  },

  project3: {
    variant: "dark",
    slides: [
      {
        title: "Project 3",
        caption: "Caption 1",
        position: "middle",
        color: "dark",
        imgDesktop: `${CDN}/project3-slide1.png`,
        imgMobile: `${CDN}/project3-slide1-mobile.png`,
      },
      {
        title: "Project 3",
        caption: "Caption 2",
        position: "bottom",
        color: "light",
        imgDesktop: `${CDN}/project3-slide2.png`,
        imgMobile: `${CDN}/project3-slide2-mobile.png`,
      },
      {
        title: "Project 3",
        caption: "Caption 3",
        position: "top",
        color: "dark",
        imgDesktop: `${CDN}/project3-slide3.png`,
        imgMobile: `${CDN}/project3-slide3-mobile.png`,
      },
    ],
  },
} as const;

export function buildProjectFromConfig(key: ProjectKey): Project | null {
  const source = PROJECTS[key];
  if (!source) return null;

  return {
    variant: source.variant,
    slides: source.slides.map((s) => ({
      title: s.title,
      caption: s.caption,
      position: s.position,
      color: s.color,
      imgDesktop: s.imgDesktop,
      imgMobile: s.imgMobile,
    })),
  };
}
