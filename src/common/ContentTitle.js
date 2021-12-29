import React from 'react';

const ContentTitle = (props) => {
  return(
    <h6 className='fw-bold mb-4 text-center'><i className={`${ props.icon } pe-2`}></i>{ props.title }</h6>
  );
};
export default ContentTitle;