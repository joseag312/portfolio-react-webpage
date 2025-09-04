import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

interface ProjectProps {
  variant: string;
  title1: string;
  caption1: string;
  img1: string;
  position1: string;
  color1: string;
  title2?: string;
  caption2?: string;
  img2?: string;
  position2?: string;
  color2: string;
  title3?: string;
  caption3?: string;
  img3?: string;
  position3?: string;
  color3: string;
}

function GgCarousel(props: ProjectProps) {
  let slide1: any;
  let slide2: any;
  let slide3: any;

  if (props.title1) {
    slide1 = (
      <Carousel.Item className='h-100'>
        <Image src={props.img1} fluid={true} className='h-100'></Image>
        <Carousel.Caption className={`carousel-caption-${props.position1}`}>
          <h3 className={`${props.color1 == "dark" ? "text-dark" : "text-light"}`}>{props.title1}</h3>
          <p className={`${props.color1 == "dark" ? "text-dark" : "text-light"}`}>{props.caption1}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }

  if (props.title2) {
    slide2 = (
      <Carousel.Item className='h-100'>
        <Image src={props.img2} fluid={true} className='h-100'></Image>
        <Carousel.Caption className={`carousel-caption-${props.position2}`}>
          <h3 className={`${props.color2 == "dark" ? "text-dark" : "text-light"}`}>{props.title2}</h3>
          <p className={`${props.color2 == "dark" ? "text-dark" : "text-light"}`}>{props.caption2}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }

  if (props.title3) {
    slide3 = (
      <Carousel.Item className='h-100'>
        <Image src={props.img3} fluid={true} className='h-100'></Image>
        <Carousel.Caption className={`carousel-caption-${props.position3}`}>
          <h3 className={`${props.color3 == "dark" ? "text-dark" : "text-light"}`}>{props.title3}</h3>
          <p className={`${props.color3 == "dark" ? "text-dark" : "text-light"}`}>{props.caption3}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }

  return (
    <div className='h-100 positon-relative'>
      <Carousel interval={2500} pause={false} id='carousel' className='h-100' variant={`${props.variant}`}>
        {slide1}
        {slide2}
        {slide3}
      </Carousel>
    </div>
  );
}

export default GgCarousel;
