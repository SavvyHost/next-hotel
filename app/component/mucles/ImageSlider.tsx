import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
type ImageSlider_TP = {
  media: string[] | any;
};
function ImageSlider({ media }: ImageSlider_TP) {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const image = media?.map((photo) => ({
      original: photo?.full_path,
      thumbnail: photo?.full_path,
    }));
    setImages(image);
  }, []);

  return <ImageGallery items={images ? images : []} />;
}

export default ImageSlider;
