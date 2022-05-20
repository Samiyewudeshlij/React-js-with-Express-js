
import EmptyYes from './empyes';
import Notes from './notes';
import React from 'react';

export const Empty = () => {
  var isEmp = false;
    return (
        isEmp ? <EmptyYes/> : <Notes/>
    )
}


export default Empty;