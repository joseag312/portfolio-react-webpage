import { Carousel } from "react-bootstrap";
import config from "../config/project-config.json";

type ProjectKey = keyof typeof config;

type ImgProps = {
  desktop: string;
  mobile?: string;
  alt: string;
  eager?: boolean;
  className?: string;
};

const Img = ({ desktop, mobile, alt, eager = false, className }: ImgProps) => {
  const mobileSrc = mobile || desktop;
  return (
    <picture className='d-block w-100 h-100'>
      {mobile && <source media='(max-width: 768px)' srcSet={mobile} />}
      <source media='(min-width: 769px)' srcSet={desktop} />
      <img src={mobileSrc} alt={alt} className={className ?? "d-block w-100 h-100"} style={{ objectFit: "cover" }} loading={eager ? "eager" : "lazy"} decoding='async' sizes='(max-width: 768px) 100vw, 100vw' />
    </picture>
  );
};

export default function ProjectCarousel({ project }: { project: ProjectKey }) {
  const entry = config[project];
  if (!entry) return null;

  return (
    <div className='h-100 position-relative border rounded rounded-clip white-fill-2'>
      <Carousel interval={2500} pause={false} className='h-100' variant={entry.variant}>
        {entry.slides.map((s, i) => (
          <Carousel.Item key={i} className='h-100'>
            <picture className='d-block w-100 h-100'>
              {s.imgMobile && <source media='(max-width: 768px)' srcSet={s.imgMobile} />}
              <source media='(min-width: 769px)' srcSet={s.imgDesktop} />
              <img src={s.imgMobile || s.imgDesktop} alt={s.title} className='d-block w-100 h-100' style={{ objectFit: "cover" }} loading={i === 0 ? "eager" : "lazy"} decoding='async' sizes='(max-width: 768px) 100vw, 100vw' />
            </picture>
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
