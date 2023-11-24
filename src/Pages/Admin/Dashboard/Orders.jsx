import React from 'react'
import { useEffect, useState } from "react";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { auth, db } from "../../../firebase/auth";
// import { useParams } from 'react-router';
import { NavLink } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning } from "@fortawesome/free-solid-svg-icons";
import { Pagination } from "@mui/material";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const Orders = () => {
    const [order, setOrder] = useState([]);
    const [search, setSearch] = useState("");
    const [productsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [prodictId, setOrderId] = useState("");

    useEffect(() => {
        // setLoading(true);
        const fetchOrder = async () => {
          try {
            // setLoading(true);
            const querySnapshot = await getDocs(collection(db, "orders"));
            const productsData = [];
            const productsIds = [];
            const tags = [];
            const categories = [];
    
            // Parallelize fetching data
            await Promise.all(
              querySnapshot.docs.map(async (doc) => {
                const productsDoc = doc.data();
                productsDoc.id = doc.id;
                productsData.push(productsDoc);
                productsIds.push(doc.id);
    
                if (Array.isArray(productsDoc.tags)) {
                  tags.push(...productsDoc.tags);
                }
    
                const category = productsDoc.category;
                if (category) {
                  categories.push(category);
                }
              })
            );
    
            // Set the productsId state with the collected order IDs
            setOrderId(productsIds);
            setOrder([...productsData]);
          } catch (error) {
            console.error("Error fetching productss:", error);
            setOrder([]);
            // setLoading(false);
          }
        };
    
        fetchOrder();
      }, []);
  return (
 
    <div>Orders</div>
  )
}

export default Orders