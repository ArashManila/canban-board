export interface CardType {
  title: string;
  desc: string;
  cardId: string; 
  tableId: number;
}

export interface CommentsType {
  text:string,
  commentId:string,
  user:string,
  cardId:string
}

export interface CardsData{
  [tableId:number]:{
    [cardId:string]:CardType
  }
}
export interface cardContent {
  [key: string]: CardType;
}



export interface CommentsObjectType{
  [key:string]: {[key:string]:CommentsType}
}

export type CommentContent={
  [key:string]:CommentsType
}
