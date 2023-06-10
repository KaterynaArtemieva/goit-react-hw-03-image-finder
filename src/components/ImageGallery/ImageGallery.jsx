import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import {ImageGallery} from './ImageGallery.styled'

export const ImageGallery = ({ images, openModal }) => {
  return (
    <ImageGallery onClick={e => openModal(e)}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          image={image.webformatURL}
          largeImageURL={image.largeImageURL}
        />
      ))}
    </ImageGallery>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
};