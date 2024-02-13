import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Request, aQRequest } from "../Redux-saga/Action/Action";
import Cards from "./Cards";
import { useNavigate, useParams } from "react-router-dom";
// import { data } from "autoprefixer";

const Index = () => {

  let { id } = useParams();

  console.log(id);
  const getData = useSelector((y) => y.product.data);
  const dispatch = useDispatch();
  const [filteredData, setFilteredData] = useState([]);
  const nav= useNavigate();

  //   const pageSize = 5;
  const totalCount = filteredData.length;
  const [pageSize, setPageSize] = useState(id??5);
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
   // dispatch(Request());

   alert(id);
   dispatch(aQRequest(parseInt(id??5)))
  }, [id]);

  useEffect(() => {
   setTotalPages(Math.ceil(totalCount / pageSize));
    setFilteredData(getData);
  }, [totalCount, pageSize,getData]);


  const handleSelectChange = (event) => {
    setPageSize(parseInt(event.target.value));
    
    nav("/"+ parseInt(event.target.value))
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
