import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TestimonialCarousel.css";

const TestimonialCarousel = () => {
  const testimonials = [
    {
      feedback: "I pinged my back and trapped a nerve. I was unable to walk, in a lot of pain and was not very mobile. Although not 100%, I can now walk and drive and I would strongly recommend Ben for his skill and knowledge.",
    },
    {
      feedback: "I went to see Ben after I hurt my back - he quickly diagnosed the issue. It felt so much better straight away and almost pain free after a couple of days. Would highly recommend.",
    },
    {
      feedback: "Had a very painful lower back, muscular and sciatica. Ben was brilliant and managed to ease both for me. Definitely recommend him.",
    },
    {
      feedback: "I had a severe frozen shoulder that made my fingers numb due to nerve entrapment. After over a year of ineffective injections and tablets, just three visits to Ben almost completely resolved it. Caring, friendly, reasonably priced, and highly professional – ten stars wouldn’t be enough!",
    },
    {
      feedback: "Ben is so wonderful and very knowledgeable. He has been a huge help in my recovery. I would recommend to anyone! Thank you so much, Ben :)",
    },
    {
      feedback: "Seen Ben for a few months, very friendly and professional. Will use again in the future and recommend.",
    },
    {
      feedback: "Ben got me an appointment 2 days after I enquired and I’m beyond grateful. My pain has been significantly improved after one session with Ben. He was really friendly and knowledgeable and really helped me a lot. Thank you! Will definitely return!",
    },
    {
      feedback: "Would highly recommend! I was in a lot of pain from a fall and barely walking and standing up straight. Ben really made my back feel relaxed and I was able to stand straight and walk out feeling much better! Ben was very friendly and welcoming. Would definitely go back and 100% recommend! ☺️",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3650,
    arrows: false,
  };

  return (
    <div className="testimonial-carousel-wrapper">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-slide">
            <p className="testimonial-feedback">"{testimonial.feedback}"</p>
       
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
