import { CDN } from "./CDN";

type CaptionPosition = "top" | "middle" | "bottom";
type CaptionColor = "light" | "dark";

export type Slide = {
  title: string;
  caption: string;
  position: CaptionPosition;
  color: CaptionColor;
  github: string;
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
        github: "https://github.com/joseag312/portfolio-react-webpage",
        position: "middle",
        color: "dark",
        imgDesktop: `${CDN}/project1-slide1.png`,
        imgMobile: `${CDN}/project1-slide1-mobile.png`,
      },
      {
        title: "Availability",
        caption: "Multi-Az & CloudFront",
        github: "https://github.com/joseag312/portfolio-react-webpage",
        position: "bottom",
        color: "dark",
        imgDesktop: `${CDN}/project1-slide2.png`,
        imgMobile: `${CDN}/project1-slide2-mobile.png`,
      },
      {
        title: "Monitoring",
        caption: "AWS Logging",
        github: "https://github.com/joseag312/portfolio-react-webpage",
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
        title: "Game with C#",
        caption: "Using Godot",
        github: "https://github.com/joseag312/portfolio-2d-arcade-game",
        position: "top",
        color: "dark",
        imgDesktop: `${CDN}/project2-slide1.png`,
        imgMobile: `${CDN}/project2-slide1-mobile.png`,
      },
      {
        title: "Best Practices",
        caption: "SOLID & Design Patterns",
        github: "https://github.com/joseag312/portfolio-2d-arcade-game",
        position: "bottom",
        color: "light",
        imgDesktop: `${CDN}/project2-slide2.png`,
        imgMobile: `${CDN}/project2-slide2-mobile.png`,
      },
      {
        title: "Data Persistence",
        caption: "Data-driven design",
        github: "https://github.com/joseag312/portfolio-2d-arcade-game",
        position: "middle",
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
        title: "CRUD Application",
        caption: "Using Spring Boot",
        github: "https://github.com/joseag312/portfolio-spring-app",
        position: "middle",
        color: "dark",
        imgDesktop: `${CDN}/project3-slide1.png`,
        imgMobile: `${CDN}/project3-slide1-mobile.png`,
      },
      {
        title: "Security and RBAC",
        caption: "AuthN & AuthZ",
        github: "https://github.com/joseag312/portfolio-spring-app",
        position: "bottom",
        color: "light",
        imgDesktop: `${CDN}/project3-slide2.png`,
        imgMobile: `${CDN}/project3-slide2-mobile.png`,
      },
      {
        title: "Normalized DB",
        caption: "Data JPA & Constraints",
        github: "https://github.com/joseag312/portfolio-spring-app",
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
      github: s.github,
      position: s.position,
      color: s.color,
      imgDesktop: s.imgDesktop,
      imgMobile: s.imgMobile,
    })),
  };
}
