"use client";

import React from "react";
import { Carousel } from "@mantine/carousel";
import { BadgeCard  } from "../mucles/Card";
import eventImage from "../../../public/assets/event-banner1.jpg";

function Exhibitions() {
  return (
    <div className="container p-10 m-auto my-20">
      <div className="col-span-1">
        <h1 className="text-3xl font-bold ">Upcoming Events</h1>
        <p className="w-full md:w-1/2">
          We take part in the most important international industry events in
          London, Paris, Dubai, and Singapore. Come and visit our stand!
        </p>
      </div>
      <div className="mt-4">
        <Carousel
          withIndicators
          // height={200}
          slideSize="22%"
          slideGap="md"
          loop
          align="start"
          slidesToScroll={1}
          breakpoints={[
            { maxWidth: 'md', slideSize: '50%' },
            { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
          ]}
        >
          <Carousel.Slide>
            <BadgeCard
            rating="rating"
              image={eventImage.src}
              description="StayExpo at TTG Travel Experience 2022 in Italy, Rimini"
              
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <BadgeCard
            rating="rating"
              image={eventImage.src}
              description="StayExpo at TTG Travel Experience 2022 in Italy, Rimini"
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <BadgeCard
            rating="rating"
              image={eventImage.src}
              description="StayExpo at TTG Travel Experience 2022 in Italy, Rimini"
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <BadgeCard
            rating="rating"
              image={eventImage.src}
              description="StayExpo at TTG Travel Experience 2022 in Italy, Rimini"
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <BadgeCard
            rating="rating"
              image={eventImage.src}
              description="StayExpo at TTG Travel Experience 2022 in Italy, Rimini"
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <BadgeCard
            rating="rating"
              image={eventImage.src}
              description="StayExpo at TTG Travel Experience 2022 in Italy, Rimini"
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <BadgeCard
            rating="rating"
              image={eventImage.src}
              description="StayExpo at TTG Travel Experience 2022 in Italy, Rimini"
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <BadgeCard
            rating="rating"
              image={eventImage.src}
              description="StayExpo at TTG Travel Experience 2022 in Italy, Rimini"
            />
          </Carousel.Slide>
        </Carousel>
      </div>
    </div>
  );
}

export default Exhibitions;
