import React from "react";
import DataTable from 'react-data-table-component';
import {useEffect,useState} from "react";
import {Card, Form, Modal} from "react-bootstrap";
import Image from "next/image";

export default function ProductList({}){


    const [data,setData]= useState([])
    const [loading, setloading] = useState(false)
    const[perPage,setPage] = useState(10)
    const [list, setList] = useState([]);
    const [search, setSearch] = useState("");

    const columns=[
        {
            name:"Product ",
            selector : (row) => row.title,
            sortable:true
        },
        
        {
            name : "Category",
            selector : (row) => row.category,
            cell: row =>row.category.name
        },
        {
            name : "Image",
            selector : (row) => row.images,
            cell : row => (<Image 
                src={row.images[0]}   
                className={'img-style'}  
                alt={"thumbnail"}  
                width={30}
                height={30}/>)
        },
        {
            name : "Price",
            selector : (row) => row.price ,
            cell: row => row.price + " $"
        },
        {
            name : "Option",
            selector : (row) => row.action,
            cell :row => (
                <div    className="d-flex gap-2 ">
                    <button type="button" class="btn btn-danger">Edit</button>
                    <button type="button" class="btn btn-primary">Delete</button>
                </div>
            ),
        },

    ]
    useEffect(() =>{
        fetchdataStatic()
    },[])

    async function  fetchdataStatic(){
        setloading(true)
        const url=  `https://api.escuelajs.co/api/v1/products?limit=20&offet=1`
        const res = await fetch(url);
        const products= await res.json();
        setData(products)
        setList(products)
        setloading(false)
    }
    const filteredList = list.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );

    const handleSearch = (event)=>{
        setSearch(event.target.value);
    }
{/* <div>
        <div class="input-group">
          <div class="form-outline">
            <input id="search-focus" type="search" class="form-control">
            <label class="form-label" for="form1" style="margin-left: 0px;">Search</label>
          <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 47.2px;"></div><div class="form-notch-trailing"></div></div></div>
          <button type="button" class="btn btn-primary">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div> */}
    return(
        <>
            <div className='container mt-5 '>
                <div>
                    <h1 className={"text-center"}>Product List</h1>
                    <label htmlFor="search" mt-5>Search 
                        <Form.Control
                            type="search"
                            placeholder="Find Product Here"
                            className="me-2 "
                            aria-label="Search"
                            onChange={handleSearch}
                        />
                    </label>
                </div>
                <DataTable
                    className={"p-0 overflow-hidden"}
                    columns={columns}
                    data={filteredList}
                    progressPending={loading}
                    pagination
                />
            </div>

            {/* <Card.Body className="p-0 overflow-hidden">  
                            <DataTable
                                columns={columns}
                                data={filteredList}
                                pagination
                            />  
            </Card.Body> */}
        </>
    )
}



