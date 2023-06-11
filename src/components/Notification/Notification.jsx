import Notiflix from 'notiflix';
import PropTypes from 'prop-types';

export const Notification = message => {
  return Notiflix.Notify.info(`${message}`);
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};