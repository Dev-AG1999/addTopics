
"use client"
import Link from "next/link";
import RemoveBtn from "./removeBtn";
import { HiPencilAlt } from "react-icons/hi";
import { useEffect, useState } from "react";

const TopicsList = () => {
const [Topics,setTopics]=useState([])

  const fetchData=async()=>{
    try {
      const res = await fetch("http://localhost:3000/api/topics", {
  
      method:'GET',
  
      });
  
      if (!res.ok) {
        throw new Error("Failed to fetch topics");
      }
  
      const { topics } = await res.json();
  
  setTopics(topics)
    } catch (error) {
      console.error("Error loading topics: ", error);
  
  
    }

    
 

 
  
    
  }


useEffect(()=>{
  fetchData()
},[])



  return (
    <>
      { Topics?.map((t) => (
        <div
          key={t._id}
          className="flex justify-between items-center border px-8 mt-2"
        >
          <div>
          <b>  <h2 className="font-bold text-2xl">{t.title}</h2></b>
            <div>{t.description}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopicsList;


