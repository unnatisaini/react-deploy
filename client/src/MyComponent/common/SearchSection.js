import React from 'react';


const SearchSection = (props) => {
  const labeltext =props.labeltext;
  const inputtype = props.inputtype;
  const onMonthChange = props.onMonthChange;
    return (
        <div className='search_section_box'>
             <h4>{labeltext}</h4>
              <input
                className="form-control form-control-dark w-50 search_input_type"
                type={inputtype}
                placeholder="Search"
                aria-label="Search"
                onChange={onMonthChange}
              />
        </div>
    );
}

export default SearchSection;
