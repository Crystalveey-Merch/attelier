/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

import { db } from "../firebase/auth";
import { collection, onSnapshot } from "firebase/firestore";

// Define the context
const AtUngDataContext = createContext(null);

// Define the provider
const AtUngDataProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [auUsers, setAUUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [config, setConfig] = useState([]);
  const [customMades, setCustomMades] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);

  useEffect(() => {
    const unsubscribeCategories = onSnapshot(
      collection(db, "categories"),
      (snapshot) => {
        setCategories(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      }
    );

    const unsubscribeProducts = onSnapshot(
      collection(db, "products"),
      (snapshot) => {
        const products = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })); 
        // set product if it is pubished, then set newArrivals if product is newArrival and published
        setProducts(products.filter((product) => product.published));
        setNewArrivals(products.filter((product) => product.newArrival && product.published));
      }
    );

    const unsubscribeOrders = onSnapshot(
      collection(db, "orders"),
      (snapshot) => {
        setOrders(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      }
    );

    const unsubscribeAUUsers = onSnapshot(
      collection(db, "users"),
      (snapshot) => {
        setAUUsers(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      }
    );

    const unsubscribeCustomMades = onSnapshot(
      collection(db, "custom-mades"),
      (snapshot) => {
        setCustomMades(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      }
    );

    return () => {
      unsubscribeCategories();
      unsubscribeProducts();
      unsubscribeOrders();
      unsubscribeAUUsers();
      unsubscribeCustomMades();
    };
  }, []);

  return (
    <AtUngDataContext.Provider
      value={{
        auUsers,
        setAUUsers,
        categories,
        setCategories,
        products,
        setProducts,
        orders,
        setOrders,
        config,
        setConfig,
        customMades,
        setCustomMades,
        newArrivals,
        setNewArrivals,
      }}
    >
      {children}
    </AtUngDataContext.Provider>
  );
};

export { AtUngDataContext, AtUngDataProvider };
