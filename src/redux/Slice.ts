import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface favori{data: any[]};

const initialState: favori= {data: []};

export const FavoriSlice = createSlice({name: 'favori', initialState, reducers: {addToFavorites: (state, action: PayloadAction<any>) => {if(!state.data.find(item => item.show.id === action.payload.show.id)) state.data = [...state.data, action.payload]}}});