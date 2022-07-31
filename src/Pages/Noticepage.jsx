import React from "react";
import Table from "../Components/Table/Table";
import "./Noticepage.css";

const Noticepage = () => {
  return (
    <div className='notice-main'>
      <div className='notice-heading'>
        <h1>Latest Notice</h1>
        <svg
          className='notice-svg'
          width='150'
          height='50'
          viewBox='0 0 171 66'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M1.32106 58.0546C11.7502 65.8219 39.3222 72.9079 66.1764 39.1139C99.7441 -3.12852 119.603 -2.19542 136.596 5.69488C150.191 12.0071 164.869 10.2912 170.509 8.64414'
            stroke='#FF9900'
            stroke-width='2'
          />
        </svg>
      </div>
      <Table />
    </div>
  );
};

export default Noticepage;
