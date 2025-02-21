import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";


export type TableId = number;
export type TableName = string;

export type Table ={
  id: TableId;
  tableName: TableName;
}

type TablesState ={
  tables:Record<TableId,Table>,
  ids:TableId[]
}

const initialTablesState:TablesState = {
  tables:{
    0: { id: 0, tableName: "To-Do" },
    1: { id: 1, tableName: "In progress" },
    2: { id: 2, tableName: "Testing" },
    3: { id: 3, tableName: "Done" },
  },
  ids:[0,1,2,3]
}

export const tablesSlice = createSlice({
  name: "tables",
  initialState: initialTablesState,
  selectors:{
    selectTablesNames:(state)=>state.tables,
    selecttablesIds:(state)=>state.ids
  },
  reducers: {
    setTableName:(state,action:PayloadAction<{newTableName:TableName,tableId:TableId}>)=>{
      state.tables[action.payload.tableId].tableName = action.payload.newTableName
    }
  }
}) 

export const selectTableName = createSelector(
  (state: TablesState) => state.tables,
  (_: TablesState, tableId: TableId) => tableId,
  (tables, tableId) => (tables[tableId] ? tables[tableId].tableName : '')
);