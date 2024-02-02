import React, { useState } from "react";

function Cards() {
    let [data,setData]=useState([
        {
            type : "Purchase Order",
            qty : "30"
        },
        {
            type : "Sales Order",
            qty : "85"
        },
        {
            type : "New Order",
            qty : "15"
        },
        {
            type : "Packed",
            qty : "20"
        },
        {
            type : "Shipped",
            qty : "55"
        },
        {
            type : "Delivered",
            qty : "8"
        },
        {
            type : "Returned",
            qty : "2"
        },
        {
            type : "Cancelled",
            qty : "7"
        }
    ])
  return (
    <>
      <div className="row">
            {  data.map((e,i)=>{
                return <div key={i} className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-danger shadow h-100 py-2">
                    <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">
                            {e.type}
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                            {e.qty}
                        </div>
                        </div>
                        <div className="col-auto">
                        <i className="fas fa-comments fa-2x text-gray-300"></i>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            })
                
            }
      </div>
    </>
  );
}

export default Cards;
