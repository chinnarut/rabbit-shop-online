import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import productsReducer from "./slices/productsSlice";
import cartsReducer from "./slices/cartsSlice";
import checkoutReducer from "./slices/checkoutSlice";
import ordersReducer from "./slices/ordersSlice";
import adminReducer from "./slices/adminSlice";
import adminProductReducer from "./slices/adminProductSlice";
import adminOrderReducer from "./slices/adminOrderSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    carts: cartsReducer,
    checkout: checkoutReducer,
    orders: ordersReducer,
    admin: adminReducer,
    adminProduct: adminProductReducer,
    adminOrder: adminOrderReducer,
  },
});

export default store;
