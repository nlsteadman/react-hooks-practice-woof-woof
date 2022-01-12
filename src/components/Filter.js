import React from "react";

function Filter({ goodDogs, onFilter }) {

    return (
        <div id="filter-div">
            <button id="good-dog-filter" onClick={onFilter}>
                Filter good dogs: {goodDogs ? "ON" : "OFF"}
            </button>
        </div>
    )
}

export default Filter;