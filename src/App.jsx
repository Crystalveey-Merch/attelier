import { Footer, Header } from "./Components";
import { Home } from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./Pages/Login";
import NewArrival from "./Pages/NewArrival";
import Categories from "./Pages/Categories";
// import Collection from "./Pages/Collection";
// import Productdes from "./Pages/Productdes";
import Aboutus from "./Pages/Aboutus";
import Shoes from "./Pages/Shoes";
import Bags from "./Pages/Bags";
import Accessories from "./Pages/Accessories";
// import Cart from "./Pages/Cart";
import Refurblish from "./Pages/untagged/Refurblish/Refurblish";
// import Buy from "./Pages/untagged/Buy";
import Sell from "./Pages/untagged/Sell";
import Blog from "./Pages/Blog";
import Faq from "./Pages/Faq";
import Ready2Wear from "./Pages/Ready2Wear";
import CategoriesList from "./Pages/CategoriesList";
import UntagBuy from "./Pages/untagged/Buy";
// import Checkout from "./Pages/Checkout";
import Contact from "./Pages/Contact";
import Giftcard from "./Pages/Giftcard/Giftcard";
import Consultation from "./Pages/Consultation";
import { PaymentDetails } from "./Pages/Payment/PaymentDetails";
import { OrderNow } from "./Pages/Payment/OrderNow";
import BlogList from "./Pages/BlogList";
import Custompage1 from "./Pages/CustomMade/Custompage1";
import { onAuthStateChanged } from "firebase/auth";
import { auth, createUserProfileDocument } from "./firebase/auth";
import ProtectedRoute from "./firebase/ProtectedRouteProps";
import Sellpage1 from "./Pages/untagged/Sellpage1";
import RefurblishP1 from "./Pages/untagged/Refurblish/RefurblishP1";
import RefurbishP2 from "./Pages/untagged/Refurblish/RefurblishP2";
import RefurbishP3 from "./Pages/untagged/Refurblish/RefurblishP3";
import RefurblishandSell from "./Pages/untagged/Refurblish/RefurblishandSell";
import Dashboard from "./Pages/Dashboard/Dashboard";
import NotFound from "./Pages/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UploadProduct from "./Pages/Admin/Dashboard/UploadProduct";
import AdminDashboard from "./Pages/Admin/Dashboard/AdminDashboard";
import AllProducts from "./Pages/Admin/Dashboard/AllProducts";
import RefurblishList from "./Pages/Admin/Dashboard/Refurblish";
import UntagSell from "./Pages/Admin/Dashboard/UntagSell";
import RefurblishAndSell from "./Pages/Admin/Dashboard/RefurblishAndSell";
import CustonMade from "./Pages/Admin/Dashboard/CustomMade";
import Orders from "./Pages/Admin/Dashboard/Orders";
import UserSell from "./Pages/Dashboard/UntagSell";
import MyOrders from "./Pages/Dashboard/MyOrders";
import Users from "./Pages/Admin/Dashboard/Users";
import "aos/dist/aos.css";
import AOS from "aos";
import { AtUngDataProvider } from "./Components/SharedData";
import {
  Product,
  NewCart,
  NewCustomMade,
  NewNewArrival,
  NewCollection,
} from "./Pages";
import CheckoutPage from "./Pages/NewCheckout";
import { useDispatch } from "react-redux";
import { getDoc } from "firebase/firestore";
import { loginUser } from "./redux/user.slice";

AOS.init();

function App() {
  const dispatch = useDispatch();

  onAuthStateChanged(auth, async (userAuth) => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth, {});
      if (!userRef) return;

      const snapShot = await getDoc(userRef);

      if (!snapShot.exists()) return;
      const user = { id: snapShot.id, ...snapShot.data() };
      dispatch(loginUser(user));
      localStorage.setItem("user", JSON.stringify(user));

      // // Fetch all users from Firestore
      // const usersRef = collection(db, "users");
      // const usersSnapshot = await getDocs(usersRef);
      // const users = [];
      // usersSnapshot.forEach((doc) => {
      //   users.push({
      //     id: doc.id,
      //     ...doc.data(),
      //     photoURL: doc.data().photoURL,
      //     // || handleCreateDefaultAvatar(doc.data().displayName
      //   });
      // });

      // dispatch(addUsers(users));
    } else {
      dispatch(loginUser(null));
      localStorage.removeItem("user");
    }
  });

  const [animationIndex, setAnimationIndex] = useState(0);

  const colors = ["bg-gray-500", "bg-sky-600", "bg-gray-500", "bg-black"];

  const texts = [
    "Free Shipping on all orders over $100",
    "Discover our latest collection of trendy fashion",
    "Get exclusive deals and discounts",
    "Experience luxury at its finest",
    "Shop now for the best selection",
  ];

  useEffect(() => {
    const changeAnimation = () => {
      setAnimationIndex((prevIndex) => (prevIndex + 1) % colors.length);
    };

    const interval = setInterval(changeAnimation, 4000);

    return () => clearInterval(interval);
  }, [colors.length]);
  return (
    <>
      <AtUngDataProvider>
        <div
          className={`fixed top-0 left-0 w-full z-20 ${colors[animationIndex]} Aceh p-1 `}
        >
          <p className="text-gray-100 text-center text-sm">
            {texts[animationIndex]}
          </p>
        </div>
        <div className=" min-h-screen bg-white">
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/login" element={<Login />} />
            <Route path="/custommade" element={<NewCustomMade />} />
            <Route path="/newArrival" element={<NewArrival />} />
            <Route path="/new-arrivals" element={<NewNewArrival />} />
            <Route
              path="/collection/:collectionName"
              element={<NewCollection />}
            />
            <Route path="/products/:productId" element={<Product />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/bags" element={<Bags />} />
            <Route path="/cart" element={<NewCart />} />
            <Route path="/shoes" element={<Shoes />} />
            <Route path="/category/:categoryName" element={<Categories />} />
            <Route path="/refurblish" element={<Refurblish />} />
            <Route path="/sell" element={<Sell />} />
            <Route path="/untagbuy" element={<UntagBuy />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/readytowear" element={<Ready2Wear />} />
            <Route path="/categorylist" element={<CategoriesList />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="/payment" element={<PaymentDetails />} />
            <Route path="/ordernow/:productId" element={<OrderNow />} />
            <Route path="/bloglist" element={<BlogList />} />
            <Route path="/custompage1" element={<Custompage1 />} />

            <Route
              path="/sellpage1"
              element={
                <ProtectedRoute>
                  <Sellpage1 />
                </ProtectedRoute>
              }
            />
            <Route path="/refurblishpage1" element={<RefurblishP1 />} />
            <Route path="/refurblishpage2" element={<RefurbishP2 />} />
            <Route path="/refurblishpage3" element={<RefurbishP3 />} />
            <Route path="/refurblishandsell" element={<RefurblishandSell />} />
            <Route path="/giftcards" element={<Giftcard />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            >
              <Route path="/dashboard/untagsell" element={<UserSell />} />
              <Route path="/dashboard/myorders" element={<MyOrders />} />
            </Route>

            <Route path="*" element={<NotFound />} />
            <Route path="/admindash" element={<AdminDashboard />}>
              <Route
                path="/admindash/uploadproduct"
                element={<UploadProduct />}
              />
              <Route path="/admindash/products" element={<AllProducts />} />
              <Route
                path="/admindash/uploadproduct/:id"
                element={<UploadProduct />}
              />
              <Route
                path="/admindash/refurblish"
                element={<RefurblishList />}
              />
              <Route
                path="/admindash/RefurblishAndSell"
                element={<RefurblishAndSell />}
              />
              <Route path="/admindash/custommade" element={<CustonMade />} />
              <Route path="/admindash/orders" element={<Orders />} />

              <Route path="/admindash/untagsell" element={<UntagSell />} />
              <Route path="/admindash/users" element={<Users />} />
            </Route>
          </Routes>
          <ToastContainer />

          <Footer />
        </div>
      </AtUngDataProvider>
    </>
  );
}

export default App;
