import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

/* Create a new component. This component should produce some HTML*/
class Index extends Component {

  constructor(props) {
    super(props);

  }

  render(){

    return (
      <App />

    )
  }


}
// Take this component's generated HTML and put it on the page (in the DOM)
//
ReactDOM.render(<Index />, document.querySelector('.container'));
