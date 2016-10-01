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
              <input 
                 value={this.state.term} onChange={ (event) => this.onInputChange(event.target.value) }
                 id="search" name="search" type="text" placeholder="Search..." />
              <input id="search_submit" value="&#61447;" type="submit" />
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
  clickFind() {
    //this.props.onSearchTermChange(this.state.term);
    console.log(this.state.term);
  }
}

export default SearchBar;
//<input value={this.state.term} onChange={ (event) => this.onInputChange(event.target.value) } />
//<input id="search_submit" value="Search" type="submit" placeholder="Hi" />
//<button onClick={this.clickFind}>Find</button>