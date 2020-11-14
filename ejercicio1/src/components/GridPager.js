import React from 'react';


const GridPager = (props) => {

  var li = [];
  var pageCount = props.Size;
  for (var i = 1; i <= pageCount; i++) {
    if (props.currentPage == i) {
     li.push(
        <li key={i} className="active">
          <a href="#">{i}</a>
        </li>
      ); 
    } else {
      li.push(
        <li key={i}>
          <a href="#" onClick={props.onPageChanged.bind(null,i)}>
            {i} 
          </a>
        </li>
      );
    }
  }
    return <ul className="pagination">{li}</ul>;
};

export default GridPager;