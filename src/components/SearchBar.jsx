import React from "react";

const SearchBar = () => {
  return (
    <div className="flex justify-center items-center w-3/4">
      <div className="flex items-center bg-white rounded-full px-4 py-2 border border-gray-300 w-full max-w-lg md:max-w-2xl lg:max-w-4xl">
        {/* Search Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5" color="gray">
  <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" clip-rule="evenodd" />
</svg>

        {/* Input Field */}
        <input
          type="text"
          placeholder="Search your course...."
          className="flex-grow bg-transparent text-gray-600 placeholder-gray-400 focus:outline-none px-2"
        />
      </div>
    </div>
  );
};

export default SearchBar;
