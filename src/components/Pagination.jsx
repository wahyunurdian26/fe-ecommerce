import React from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const Pagination = () => {
  const { pagination } = useLoaderData();
  const { page, totalPage } = pagination;
  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const handlePageChange = (number) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", number);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const pages = Array.from({ length: totalPage }, (_, index) => index + 1);

  return (
    <div className="join">
      {pages.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => handlePageChange(pageNumber)}
          className={`btn btn-lg border-none join-item ${
            pageNumber === page ? "bg-primary" : ""
          }`}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
