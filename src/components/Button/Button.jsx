import PropTypes from 'prop-types';

// import { AiOutlineSearch } from 'react-icons/ai';
import {LoadBtn} from './Button.styled'

// export const ButtonSubmit = () => {
//   return (
//     <button type="submit" className={s.buttonSubmit}>
//       <AiOutlineSearch className={s.buttonSubmitSvg} size={18} />
//     </button>
//   );
// };

export const ButtonLoad = ({ nextPage }) => {
  return (
    <LoadBtn type="button" onClick={nextPage}>
      Load more
    </LoadBtn>
  );
};
ButtonLoad.propTypes = {
  nextPage: PropTypes.func.isRequired,
};