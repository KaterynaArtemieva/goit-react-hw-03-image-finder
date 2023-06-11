import PropTypes from 'prop-types';
import { GalleryItem, ItemImg } from './ImageGalleryItem.styled';

export const ImgGalleryItem = ({ image, largeImageURL }, key) => {
  return (
    <GalleryItem key={key}>
      <ItemImg src={image} alt="" data-url={largeImageURL} />
    </GalleryItem>
  );
};

ImgGalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
