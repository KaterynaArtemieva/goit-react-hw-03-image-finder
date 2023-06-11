import { Component } from 'react';
import { map } from '../utils/map';
import { fetchApi } from '../services/api';
import { ButtonLoad } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Searchbar } from './Searchbar/Searchbar';
import { Notification } from './Notification/Notification';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    imgPerPage: 12,
    images: [],
    query: '',
    page: 1,
    error: null,
    notFound: false,
    isLoading: false,
    imageInModal: null,
    imagesQuantity: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page, imgPerPage } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.fetchImg(query, page, imgPerPage);
    }
  }

  fetchImg = async (query, page, imgPerPage) => {
    this.setState({ notFound: false, error: null, isLoading: true });
    try {
      const data = await fetchApi(query, page, imgPerPage);
      const apiImages = data.hits;
      const totalHits = data.totalHits;
      if (apiImages.length) {
        this.setState(prevState => ({
          images: [...prevState.images, ...map(apiImages)],
          notFound: false,
          imagesQuantity: totalHits,
        }));
      } else
        this.setState({
          images: [],
          imagesQuantity: null,
          notFound: true,
        });
    } catch (err) {
      this.setState({
        error: err.message,
      });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  onSubmit = query => {
    this.setState({
      images: [],
      query,
      page: 1,
    });
  };

  nextPage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  openModal = e => {
    const imageInModal = e.target.dataset.url;
    this.setState({ imageInModal: imageInModal });
  };

  closeModal = () => {
    this.setState({ imageInModal: null });
  };

  render() {
    const {
      imgPerPage,
      images,
      page,
      error,
      notFound,
      isLoading,
      imageInModal,
      imagesQuantity,
    } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        {isLoading && <Loader />}
        {error && <Notification message={error} />}
        {notFound && !error && (
          <Notification message={'Nothing found for your request'} />
        )}
        {<ImageGallery images={images} openModal={this.openModal} />}
        {page < imagesQuantity / imgPerPage && !isLoading && !error && (
          <ButtonLoad nextPage={this.nextPage} />
        )}
        {imageInModal && (
          <Modal url={imageInModal} closeModal={this.closeModal} />
        )}
      </>
    );
  }
}
