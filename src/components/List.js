import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ekle } from "../store/actions/list";

const List = () => {
    const { counter} = useSelector((state)=> state);
    const { list} = useSelector((state)=> state);
    const dispatch = useDispatch();
    
  return (
    <div className="flex flex-col items-center">
      <button className="border-4 rounded-md border-teal-500 px-10 py-2 text-teal-500 font-bold hover:bg-teal-500 hover:text-white" onClick={()=> dispatch(ekle(counter))}>
        ekle
      </button>
      <ul>
        {
            list.map((list)=> {
                return<div key={list} className="text-3xl font-bold">{list}</div>
            })
        }
      </ul>
    </div>
  );
};

export default List;
