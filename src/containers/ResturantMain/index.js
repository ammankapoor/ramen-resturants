import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { fetchResturantData} from "./actions";
import ResturantCard from "../../components/ResturantCard/index";
import MenuBar from "../../components/MenuBar/index";
import SearchBar from "../../components/SearchBar/index";

import  "./ResturantMain.css";

function ResturantMain() {

    const [listData, setListData] = useState([]); 
    const [filteredList, setFilteredList] =useState([]);

    useEffect(()=>{
        setListData(fetchResturantData());
    },[])

    useEffect(()=>{
        setFilteredList(listData);
    },[listData])

    return (
        <>
        <MenuBar />
        <div className="maincontainer">
            <div className="main-heading">
            <h1 style={{textDecoration:'underline'}}>List of Top Ramen Resturant</h1>
            <p><small>Showing {filteredList.length} results out of {listData.length}</small></p>
            <div>
            <SearchBar listData={listData} setListData={setFilteredList} />
            </div>
            </div>

            <div className="content-container">
                {filteredList.length>0 && filteredList.map((data,index)=>{
                    return   <ResturantCard cardData={data}/>;
                })
                }
            </div>
        </div>
        </>
    );
}

ResturantMain.propTypes = {

};

ResturantMain.defaultProps = {

};

export default ResturantMain;
