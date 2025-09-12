import { useState } from "react";
import { Carousel } from "react-bootstrap";
import { type Project } from "../config/ProjectConfig";
import FavIcon from "./FavIcon";

export default function ProjectCarousel({ project }: { project: Project }) {
  const [firstIconAnimated, setFirstIconAnimated] = useState(false);
  return (
    <div className='h-100 position-relative border rounded rounded-clip'>
      <Carousel interval={2500} pause={false} className='h-100'>
        {project.slides.map((s, i) => (
          <Carousel.Item key={i} className='h-100 position-relative'>
            <picture className='d-block w-100 h-100'>
              {s.imgMobile && <source media='(max-width: 768px)' srcSet={s.imgMobile} />}
              <source media='(min-width: 769px)' srcSet={s.imgDesktop} />
              <img src={s.imgMobile || s.imgDesktop} alt={s.title} className='d-block w-100 h-100' style={{ objectFit: "cover" }} loading={i === 0 ? "eager" : "lazy"} />
            </picture>
            <a
              href={s.github}
              target='_blank'
              rel='noopener noreferrer'
              className={i === 0 ? `github-link ${firstIconAnimated ? "github-link-pop" : ""}` : "github-link github-link-pop"}
              aria-label='View source on GitHub'
              onAnimationEnd={() => {
                if (i === 0 && !firstIconAnimated) setFirstIconAnimated(true);
              }}
            >
              <FavIcon iconType='GitHub' />
            </a>
            <Carousel.Caption className={`carousel-caption-${s.position}`}>
              <div className={`caption-panel ${s.color === "dark" ? "caption-panel--light" : "caption-panel--dark"} caption-panel--ring caption-panel--accent`}>
                <h3>{s.title}</h3>
                <p>{s.caption}</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
