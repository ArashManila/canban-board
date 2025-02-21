import {  createSlice, PayloadAction } from "@reduxjs/toolkit";


export type commentId= string;
export type CommentsType= {
  text:string,
  commentId:string,
  user:string,
  cardId:string
}

export type CommentsObjectType={
  [cardId:string]: Record<commentId,CommentsType>
}

export type CommentContent={
  [key:string]:CommentsType
}


const initialCommentsState:CommentsObjectType={};

export const commentsSlice = createSlice({
  name:"comments",
  initialState:initialCommentsState,
  reducers:{
    addComment:(state,action:PayloadAction<{cardId:CommentsType}>)=>{
      const {cardId} = action.payload;
      if(!state[cardId.cardId]) state[cardId.cardId] ={};
      if(!state[cardId.cardId][cardId.commentId]) state[cardId.cardId][cardId.commentId] = cardId;
    },
    removeComment:(state,action:PayloadAction<{commentId:commentId,CardId:string}>)=>{
      delete state[action.payload.CardId][action.payload.commentId];
    },
    editComment: (state, action: PayloadAction<{ commentId: commentId, CardId: string, newCommentText: string }>) => {
      const { CardId, commentId, newCommentText } = action.payload;

      if (!state[CardId]) {
        state[CardId] = {};
      }

      if (state[CardId][commentId]) {
        state[CardId][commentId].text = newCommentText; 
      }
    }
  }
});

