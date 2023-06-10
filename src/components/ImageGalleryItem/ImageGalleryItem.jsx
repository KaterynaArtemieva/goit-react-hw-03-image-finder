import PropTypes from 'prop-types';
import {ImageGalleryItem, ItemImg} from './ImageGalleryItem.styled'

export const ImageGalleryItem = ({ image, largeImageURL }, key) => {
  return (
    <ImageGalleryItem key={key} className={s.GalleryItem}>
      <ItemImg
        className={s.GalleryItemImage}
        src={image}
        alt=""
        data-url={largeImageURL}
      />
    </ImageGalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};