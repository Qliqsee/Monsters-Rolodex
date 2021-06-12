import React from 'react';

import  './search-box-styles.css';

export const SearchBox = ({placeholder, changeHandler}) => (
 <div>
     <input className='search-box' type='search' placeholder={placeholder} onChange={changeHandler} />
 </div>
)