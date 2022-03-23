import React from 'react'
import { useDispatch } from 'react-redux'
import { filterBySearch } from '../redux/actions';
import styles from "./styles/Search.module.css"





function SearchBar() {
let dispatch = useDispatch();
const[search, setSearch]=React.useState("");

const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(filterBySearch(search));
    setSearch("")
  }

  return (
    <form className={styles.searchBar} onSubmit={(e)=>handleSubmit(e)}>
        <input onChange={(e)=>handleChange(e)}  value={search} />
        <button type="submit">Search</button>


    </form>
  )
}

export default SearchBar