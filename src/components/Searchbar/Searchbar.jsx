import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Searchbox,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
} from './SearchBar.styled';
import Notiflix from 'notiflix';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  searchInput = ({ target: { name, value } }) => {
    this.setState({
      [name]: value.toLowerCase(),
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    if (this.state.query.trim() === '') {
      return Notiflix.Notify.info(
        'Enter the name of the category of images you want to search'
      );
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });  
  };

  render() {
    return (
      <Searchbox>
        <SearchForm onSubmit={e => this.onFormSubmit(e)}>
          <SearchFormBtn type="submit">
            Search
          </SearchFormBtn>
          <SearchFormInput
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.searchInput}
          />
        </SearchForm>
      </Searchbox>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
