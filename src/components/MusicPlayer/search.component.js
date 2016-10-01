import React, {Component} from 'react';
// using Es6 we don't have to use const Component = React.Component;


// State is a plain javascript object to record and react to user event.
// Each class base Component has it own state object.
// When ever a component state is change the component rerender and forces
// all of its children as well.

// Give SearchBar functionalities that belong to React
class SearchBar extends Component{

  constructor(props){
    super(props); // going to throw an error if you don't call super

    this.state = { }
  }
  render(){
    return (
      // <div className="search-bar">
          <div id="wrap">
            <form action="" autoComplete="on">
              <input id="search" name="search" type="text" placeholder="What're we looking for ?" />
              <label className="searchLabel" htmlFor="_search">
              </label>
              <input id="search_submit" value="Search" type="submit" placeholder="Hi" />
            </form>
          </div>
      // </div>
      
    );
  }

  onInputChange(term){
    this.setState({term: term});

    // Remember this is the from the parent component
    this.props.onSearchTermChange(term)
  }
}

export default SearchBar;
//<input value={this.state.term} onChange={ (event) => this.onInputChange(event.target.value) } />