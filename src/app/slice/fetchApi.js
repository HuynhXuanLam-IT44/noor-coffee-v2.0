import { createSlice } from "@reduxjs/toolkit";
import { API } from "../ItemTypes";

const fetchApi = createSlice({
	name: API,
	initialState: {
		about: null,
		products: {
			special: null,
			coffee: null,
			coldbrew: null,
			tea: null,
			macchiato: null,
			yogurt: null,
			juice: null,
		},
		productsList: null,
		posts: null,
		instaPosts: null,
		hero: null,
		heroProduct: null,
		heroBlog: null,
	},
	reducers: {
		setAboutData: (state, action) => {
			state.about = action.payload;
		},
		setPosts: (state, action) => {
			state.posts = action.payload;
		},
		setInstaPosts: (state, action) => {
			state.instaPosts = action.payload;
		},
		setHero: (state, action) => {
			state.hero = action.payload;
		},
		setProductSpecial: (state, action) => {
			state.products.special = action.payload;
		},
		setProductCoffee: (state, action) => {
			state.products.coffee = action.payload;
		},
		setProductColdbrew: (state, action) => {
			state.products.coldbrew = action.payload;
		},
		setProductTea: (state, action) => {
			state.products.tea = action.payload;
		},
		setProductMacchiato: (state, action) => {
			state.products.macchiato = action.payload;
		},
		setProductYogurt: (state, action) => {
			state.products.yogurt = action.payload;
		},
		setProductJuice: (state, action) => {
			state.products.juice = action.payload;
		},
		setHeroProduct: (state, action) => {
			state.heroProduct = action.payload;
		},
		setProductsList: (state, action) => {
			state.productsList = action.payload;
		},
		setHeroBlog: (state, action) => {
			state.heroBlog = action.payload;
		},
	},
});

const { reducer, actions } = fetchApi;

export const {
	setAboutData,
	setPosts,
	setInstaPosts,
	setHero,
	setProductSpecial,
	setProductCoffee,
	setProductColdbrew,
	setProductTea,
	setProductMacchiato,
	setProductYogurt,
	setProductJuice,
	setHeroProduct,
	setProductsList,
	setHeroBlog,
} = actions;

export default reducer;
