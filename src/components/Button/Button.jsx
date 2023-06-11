import PropTypes from 'prop-types';

import { LoadBtn, ButtonBox } from './Button.styled';

export const ButtonLoad = ({ nextPage }) => {
  return (
    <ButtonBox>
      <LoadBtn type="button" onClick={nextPage}>
        Load more
      </LoadBtn>
    </ButtonBox>
  );
};
ButtonLoad.propTypes = {
  nextPage: PropTypes.func.isRequired,
};
