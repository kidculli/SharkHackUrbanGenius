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
  _handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.setState({term:e.target.value});
      this.props.onEnterTermChange(e.target.value);
    }
  }
  render(){
    return (
      // <div className="search-bar">
          <div id="wrap">
            <form action="" autoComplete="on" onSubmit={this.submit}>
              <input onKeyUp={this._handleKeyPress.bind(this)}
                 id="search" name="search" type="text" placeholder="Search..." />
              <input id="search_submit" value="&#xf002;" type="submit" />
            </form>
          
          </div>
      // </div>
      
    );
  }
  submit(e) {
    e.preventDefault();
  }
}

export default SearchBar;
//<input value={this.state.term} onChange={ (event) => this.onInputChange(event.target.value) } />
//<input id="search_submit" value="Search" type="submit" placeholder="Hi" />
//<button onClick={this.clickFind}>Find</button>