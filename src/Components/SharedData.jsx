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
        setProducts(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
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

    return () => {
      unsubscribeCategories();
      unsubscribeProducts();
      unsubscribeOrders();
      unsubscribeAUUsers();
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
      }}
    >
      {children}
    </AtUngDataContext.Provider>
  );
};

export { AtUngDataContext, AtUngDataProvider };
