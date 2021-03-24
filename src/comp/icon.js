import React from "react";
import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";

const Icon = ({ name }) => {
  switch(name){
      case 'circle':
         return (<FaRegCircle className="p" /> )
      case 'cross':
        return (<FaTimes className="p" /> )
      default:
        return (<FaPen className="p" /> )  
  }
}; 

export default Icon;
