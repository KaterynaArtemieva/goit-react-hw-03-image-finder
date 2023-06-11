import PropTypes from 'prop-types';
import { Component } from 'react';
import { ModalWindow, Overlay } from './Modal.styled';

export class Modal extends Component {
  closeByEsc = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  closeByBackdrop = e => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.closeByEsc);
    window.addEventListener('click', this.closeByBackdrop);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeByEsc);
    window.removeEventListener('click', this.closeByBackdrop);
  }

  render() {
    const { url } = this.props;
    return (
      <Overlay onClick={this.closeByBackdrop}>
        <ModalWindow>
          <img src={url} alt="" />
        </ModalWindow>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  url: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
