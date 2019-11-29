import React, { useState } from "react";


const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");
  
  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue("")
  }

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  }

  return (
      <form className="search">
        <input
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
        />
        <input onClick={callSearchFunction} type="submit" value="SEARCH" />
      </form>
    );
}

export default Search;

/* This is so exciting!!! I’m sure you’ve just seen the first hooks API that we are going to use, and it’s called useState . As the name implies, it lets us add React state to function components. 
The useState hook accepts one argument which is the initial state, and then it returns an array containing the current state (equivalent to this.state for class components) 
and a function to update it (equivalent to this.setState ).*/