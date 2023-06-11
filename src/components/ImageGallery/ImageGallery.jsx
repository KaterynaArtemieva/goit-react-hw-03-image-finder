import PropTypes from 'prop-types';
import { ImgGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export const ImageGallery = ({ images, openModal }) => {
  return (
    <Gallery onClick={e => openModal(e)}>
      {images.map(image => (
        <ImgGalleryItem
          key={image.id}
          image={image.webformatURL}
          largeImageURL={image.largeImageURL}
        />
      ))}
    </Gallery>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
};
