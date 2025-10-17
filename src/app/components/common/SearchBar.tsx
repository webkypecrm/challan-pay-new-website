"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import { Search } from "lucide-react";
import { useAuth } from "@/context/TrackStatusAuthContext";

interface SearchBarProps {
  placeholder?: string;
  onSearch: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search...",
  onSearch,
}) => {
  const { search, setSearch } = useAuth();
  const [query, setQuery] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
    setSearch(query);
  };

  useEffect(() => {
    if (search) {
      setQuery(search);
    }
  }, [search]);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 w-full max-w-md mt-2  "
    >
      {/* Input */}
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 " />
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="pl-10 pr-4 bg-white "
        />
      </div>
    </form>
  );
};

export default SearchBar;
