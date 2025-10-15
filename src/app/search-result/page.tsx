"use client";

import React from "react";
import SearchBar from "../components/common/SearchBar";
import ChallanInfoTabs from "../components/track-status/ChallanInfoTabs";
import Header from "../components/common/Header";
import { useAuth } from "@/context/TrackStatusAuthContext";

function SearchResult() {
  const { setSearch } = useAuth();
  const handleSearch = (value: string) => {
    if (value) {
      setSearch(value);
    }
  };
  return (
    <div>
      <div className="bg-slate-100 p-4">
        <Header />
        <div className="text-base font-bold mt-15 mb-2">Search Results</div>
        <SearchBar placeholder="Search Challans..." onSearch={handleSearch} />
        <ChallanInfoTabs />
      </div>
    </div>
  );
}

export default SearchResult;
