import { configureStore } from "@reduxjs/toolkit";
import fetchApiReducer from "./slice/fetchApi";

const rootReducer = {
	api: fetchApiReducer,
};

const store = configureStore({
	reducer: rootReducer,
});

export default store;
