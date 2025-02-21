import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";


export type CardId = string;
export type CardType ={
  title: string;
  desc: string;
  cardId: string; 
  tableId: number;
}
export type CardsData={
  [tableId:number]:Record<CardId,CardType>
}

const initialCardsState:CardsData={};

export const cardsSlice = createSlice({
  name:"cards",
  initialState:initialCardsState,
  selectors:{
  },
  reducers:{
    addCard:(state,action:PayloadAction<{tableId:CardType}>)=>{
      const {tableId} = action.payload;
      if(!state[tableId.tableId]) state[tableId.tableId] ={};
      if(!state[tableId.tableId][tableId.cardId]) state[tableId.tableId][tableId.cardId] = tableId;
    },
    removeCard:(state,action:PayloadAction<{tableId:number,cardId:CardId}>)=>{
      delete state[action.payload.tableId][action.payload.cardId] ;
    },
    setCardTitle:(state,action:PayloadAction<{tableId:number,cardId:CardId,newCardTitle:string}>)=>{
      state[action.payload.tableId][action.payload.cardId].title = action.payload.newCardTitle
    },
    setCardDesc:(state,action:PayloadAction<{tableId:number,cardId:CardId,newCardDesc:string}>)=>{
      state[action.payload.tableId][action.payload.cardId].desc = action.payload.newCardDesc
    }
  }
})

export const selectCards = createSelector(
  (state: CardsData) => state,
  (_: CardsData, tableId: number) => tableId,
  (cards, tableId) => (cards[tableId] ? cards[tableId] : {})
);