import React from 'react';


// markup
const Make = ({pageContext}) => {
  console.log(pageContext)
  return (
    <div>
      {pageContext.make.name}
    </div>
  );
};

export default Make;

