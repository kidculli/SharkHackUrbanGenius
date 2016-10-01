import React from 'react';
//import Autocomplete from 'react-autocomplete';

class Search extends React.Component{
  handleRenderItem(item, isHighlighted){
    const listStyles = {
      item: {
        padding: '2px 6px',
        cursor: 'default'
      },

      highlightedItem: {
        color: 'white',
        background: '#F38B72',
        padding: '2px 6px',
        cursor: 'default'
      }
    };
    return (
      <div
        style={isHighlighted ? listStyles.highlightedItem : listStyles.item}
        key={item.id}
        id={item.id}
      >{item.title}</div>
    )
  }
  render() {
    return (
      <div className="search">
        
      </div>
    );
  }
}

export default Search
