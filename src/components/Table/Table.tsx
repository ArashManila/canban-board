import { useState } from "react";

import Edit from '../../icons/edit.png'

import Modal from "../Modal/Modal";
import SetDataForm from "../Forms/SetDataForm";
import CardItem from "../Cards/CardItem";

import { cardContent } from "../../types/types";
import AddCard from "../Cards/AddCard";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { selectTableName, tablesSlice } from "../../modules/tables-slice";
import {  selectCards } from "../../modules/cards-slice";


type TableProps={
  tableId:number,
}

const Table = ({tableId}:TableProps)=>{
  const [activeTableNameEdit,setActiveTableNameEdit] = useState<boolean>(false);

  const close=()=>setActiveTableNameEdit(false);

  const dispatch = useAppDispatch();
  const setNewTableName=(e:string)=>{
    dispatch(tablesSlice.actions.setTableName({tableId:tableId,newTableName:e}));
  }
  const tableName = useAppSelector((state)=>selectTableName(state.tables,tableId))

  const filteredCards:cardContent = useAppSelector((state)=>selectCards(state.cards,tableId)) || {};
  
  return(
    <li className="board-item" >
      <div className="board__title-wrapper">
        <h2 className="board__title">{tableName}</h2>
        <div>
          <img src={Edit} alt="edit" onClick={()=>setActiveTableNameEdit(true)}/>
          {activeTableNameEdit && <Modal active={activeTableNameEdit} setActive={setActiveTableNameEdit}>
            <SetDataForm changeData={setNewTableName} placeholder="Enter new title" prev={tableName} close={close}/>
          </Modal>}
        </div>
      </div>
      <AddCard tableId={tableId}/>
      <ul className="card__list">
      {Object.entries(filteredCards).map(([key, value]) => (
          <CardItem content={value} key={key} />
        ))} 
      </ul>
    </li>
  );
}

export default Table;