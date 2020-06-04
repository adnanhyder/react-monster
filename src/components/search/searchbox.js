import React from "react";

export const SearchBox = ({placeholder , chaing}) => (

    <input
        type="search"
        placeholder={placeholder}
        onChange={chaing}
       />
);