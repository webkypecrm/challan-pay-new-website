"use client";

import React from "react";
import SearchBar from "../components/common/SearchBar";
import ChallanInfoTabs from "../components/track-status/ChallanInfoTabs";
import Header from "../components/common/Header";
import { useAuth } from "@/context/TrackStatusAuthContext";
import WebVersionCommonComponent from "../components/track-status/WebVersionCommonComponent";

function SearchResult() {
  const { setSearch } = useAuth();
  const handleSearch = (value: string) => {
    if (value) {
      setSearch(value);
    }
  };
  return (
    <>
      <div className="bg-slate-100 p-4 hidden">
        <Header />
        <div className="text-base font-bold mt-15 mb-2">Search Results</div>
        <SearchBar placeholder="Search Challans..." onSearch={handleSearch} />
        <ChallanInfoTabs />
      </div>
      <WebVersionCommonComponent
        LeftTabComponent={
          <div className="bg-white p-4 rounded-lg">
            <Header />
            <div className="text-base font-bold  mb-2">Search Results</div>
            <SearchBar
              placeholder="Search Challans..."
              onSearch={handleSearch}
            />
            <ChallanInfoTabs />
          </div>
        }
      />
    </>
  );
}

export default SearchResult;
