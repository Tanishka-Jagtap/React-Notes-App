import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ handleSearchNote }) => {
    return (
        <div className="search">
            <MdSearch 
                className="search-icon" 
                size='2.3rem' 
            />
            <input 
                onChange={(event) =>
                    handleSearchNote(event.target.value)
                } 
                type="text" 
                placeholder="type to search..." 
            />
        </div>
    );
};

export default Search;