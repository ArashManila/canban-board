import { useState } from "react";

import Modal from "../Modal/Modal";
import AddCardForm from "../Forms/AddCardForm";

import { CardType } from "../../types/types";
import { useAppDispatch } from "../../redux/store";
import { cardsSlice } from "../../modules/cards-slice";

type AddCardProps ={
  tableId:number,
}

const AddCard = ({tableId}:AddCardProps) => {
  
  const dispatch = useAppDispatch();
  const [activeCardCreate, setActiveCardCreate] = useState(false);

  const CloseModal = () => setActiveCardCreate(false);

  const CreateCard = (dataInfo:CardType)=>{
    dispatch(cardsSlice.actions.addCard({tableId:dataInfo}))
  }

  return (
    <>
      <button
        className="button-pink button-add board__item-button-add"
        onClick={()=>setActiveCardCreate(true)}
      >
        +
      </button>
      {activeCardCreate && (
        <Modal active={activeCardCreate} setActive={setActiveCardCreate}>
          <AddCardForm tid={tableId} create={CreateCard} close={CloseModal}  />
        </Modal>
      )}
    </>
  );
};

export default AddCard;