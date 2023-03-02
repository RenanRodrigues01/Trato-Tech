import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const carrinhoSlice = createSlice({
    name: 'carrinho',
    initialState,
    reducers: {
        mudarCarrinho: (state, { payload }) => {
            const existeItem = state.some(item => item.id === payload);
            if(!existeItem) return [
                ...state,
                {
                    id: payload,
                    quantidade: 1
                }
            ]
            return state.filter(item => item.id !== payload);
        },
        mudarQuantidade: (state, { payload }) => {
            state = state.map(itemNocarrinho => {
                if(itemNocarrinho.id === payload.id) itemNocarrinho.quantidade += payload.quantidade
                return itemNocarrinho;
            })
        }
    }
});

export const { mudarCarrinho, mudarQuantidade } = carrinhoSlice.actions;

export default carrinhoSlice.reducer