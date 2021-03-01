import React, {Component} from 'react';
import {Button, InputGroup, FormControl} from 'react-bootstrap'
import {connect} from 'react-redux';
import {updateSearch, getEvents} from '../actions';
import '../assets/SearchBar.css';

class SearchBar extends Component {
	handleChange(e){
    const text = e.target.value;
    const {updateSearch} = this.props;
    updateSearch(text);
  }
  handleSubmit(e) {
    const {getEvents,city} = this.props;
    e.preventDefault();
    getEvents(city);
  }
  render() {
    return (
      <div className="w-50">
        <form>
        <InputGroup>
            <InputGroup.Prepend>
            <Button className="bg-light"variant="outline-secondary" onClick={(e) => this.handleSubmit(e)}>Search</Button>
            </InputGroup.Prepend>
            <FormControl className="bg-light"aria-describedby="basic-addon1" placeholder="Search by city " id="search"
            onChange={(e) => this.handleChange(e)} type="search"/>
        </InputGroup>
          
        </form>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const {city} = state.data;
    return {city};
}
export default connect(
  mapStateToProps, {
    updateSearch,
    getEvents
  }
)(SearchBar);