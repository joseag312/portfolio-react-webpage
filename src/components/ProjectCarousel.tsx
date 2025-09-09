import { Carousel } from "react-bootstrap";

type ProjectProps = {
  variant: "light" | "dark";
  title1?: string;
  caption1?: string;
  img1: string;
  img1Mobile?: string;
  position1: "top" | "middle" | "bottom";
  color1: "light" | "dark";
  title2?: string;
  caption2?: string;
  img2: string;
  img2Mobile?: string;
  position2: "top" | "middle" | "bottom";
  color2: "light" | "dark";
  title3?: string;
  caption3?: string;
  img3: string;
  img3Mobile?: string;
  position3: "top" | "middle" | "bottom";
  color3: "light" | "dark";
};

const Img = ({ desktop, mobile, alt }: { desktop: string; mobile?: string; alt: string }) => (
  <picture>
    {mobile && <source media='(max-width: 768px)' srcSet={mobile} />}
    <img src={desktop} alt={alt} className='d-block w-100 h-100' style={{ objectFit: "cover" }} loading='lazy' decoding='async' />
  </picture>
);

function ProjectCarousel(props: ProjectProps) {
  let slide1: JSX.Element | null = null;
  let slide2: JSX.Element | null = null;
  let slide3: JSX.Element | null = null;

  if (props.title1) {
    slide1 = (
      <Carousel.Item className='h-100'>
        <Img desktop={props.img1} mobile={props.img1Mobile} alt={props.title1} />
        <Carousel.Caption className={`carousel-caption-${props.position1}`}>
          <div className={`caption-panel ${props.color1 === "dark" ? "caption-panel--light" : "caption-panel--dark"} caption-panel--ring caption-panel--accent`}>
            <h3>{props.title1}</h3>
            <p>{props.caption1}</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }

  if (props.title2) {
    slide2 = (
      <Carousel.Item className='h-100'>
        <Img desktop={props.img2} mobile={props.img2Mobile} alt={props.title2} />
        <Carousel.Caption className={`carousel-caption-${props.position2}`}>
          <div className={`caption-panel ${props.color2 === "dark" ? "caption-panel--light" : "caption-panel--dark"} caption-panel--ring caption-panel--accent`}>
            <h3>{props.title2}</h3>
            <p>{props.caption2}</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }

  if (props.title3) {
    slide3 = (
      <Carousel.Item className='h-100'>
        <Img desktop={props.img3} mobile={props.img3Mobile} alt={props.title3} />
        <Carousel.Caption className={`carousel-caption-${props.position3}`}>
          <div className={`caption-panel ${props.color3 === "dark" ? "caption-panel--light" : "caption-panel--dark"} caption-panel--ring caption-panel--accent`}>
            <h3>{props.title3}</h3>
            <p>{props.caption3}</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }

  return (
    <div className='h-100 position-relative border rounded rounded-clip white-fill-2'>
      <Carousel interval={2500} pause={false} id='carousel' className='h-100' variant={props.variant}>
        {slide1}
        {slide2}
        {slide3}
      </Carousel>
    </div>
  );
}

export default ProjectCarousel;
