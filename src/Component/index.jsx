import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Request } from "../Redux-saga/Action/Action";
import Cards from "./Cards";

const Index = () => {
  const getData = useSelector((y) => y.product.data);
  const dispatch = useDispatch();
  const [filteredData, setFilteredData] = useState([]);

  //   const pageSize = 5;
  const totalCount = filteredData.length;
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pageCount = Math.ceil(filteredData.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  // const endIndex = startIndex + pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalCount);
  const currentData = filteredData?.slice(startIndex, endIndex);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    dispatch(Request());
  }, []);

  useEffect(() => {
    setTotalPages(Math.ceil(totalCount / pageSize));
    setFilteredData(getData);
  }, [totalCount, pageSize,getData]);


  const handleSelectChange = (event) => {
    setPageSize(parseInt(event.target.value));
    setCurrentPage(1);
  };

  // console.log(pageSize);

  return (
    <>
      <Cards
        pageCustomData={{
          handleSelectChange,
          pageSize,
          pageCount,
          currentPage,
          setCurrentPage,
          currentData,
          handlePageChange,
          totalPages,
        }}
      />
    </>
  );
};

export default Index;
