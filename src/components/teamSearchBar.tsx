import { setSearchTerm } from "../store";
import { useDispatch } from "react-redux";
import { useState } from "react";


// Denne komponent er ansvarlig for at håndtere søgningen efter hold i tabellen.
export default function TeamSearchBar() {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState<string>("");
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        dispatch(setSearchTerm(e.target.value));
    };
    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // dispatch(searchTerm(inputValue));
  
    };
  return (
    <form className="mb-4" onSubmit={handleSearchSubmit}>
      <input
        type="text"
        className="form-control"
        placeholder="Søg efter et hold..."
        value={inputValue}
        onChange={handleSearchChange}
      />
    </form> 
  );
}
