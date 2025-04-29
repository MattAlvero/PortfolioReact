import React, { useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

type SearchBarProps = {
  placeholder: string;
  onSearch: (query: string) => void;
};

const SearchBar = ({ placeholder, onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex items-center space-x-2">
      <Input
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-48"
      />
      <Button onClick={handleSearch} className="bg-blue-500 text-white">
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
