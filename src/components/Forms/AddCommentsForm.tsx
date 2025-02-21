import { useEffect } from "react";

import utiles from "../../utiles/utiles";

import { CommentsType } from "../../types/types";
import data from "../../DataManagment/dataM";
import { useAppDispatch } from "../../redux/store";
import { commentsSlice } from "../../modules/comments-slice";
import { SubmitHandler, useForm } from "react-hook-form";

type AddCommentFormProps = {
  close: () => void;
  placeholder: string;
  card: string;
};

interface addCommentI{
  text:string
}

const AddCommentsForm = ({
  card,
  close,
  placeholder,
}: AddCommentFormProps) => {
  const id = utiles.makeid(4);
  const {register,handleSubmit,reset} = useForm<addCommentI>({
    mode:"onChange"
  });

  const onSubmit:SubmitHandler<addCommentI> = (data)=>{
    if (data.text === "") return;
    const comment: CommentsType = {
      text: data.text,
      commentId: id,
      user: userName,
      cardId: card,
    };
    create(comment);
    close();
  }

  const userName: string = data.Get("User name") || "defult name";
  const dispatch = useAppDispatch();

  const create = (arg:CommentsType)=>{
    dispatch(commentsSlice.actions.addComment({cardId:arg}));
  }

  useEffect(()=>{
    reset({
      text:'comment text'
    })
  },[reset])


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("text",{
          required:"invalid text",
        })}
        placeholder={placeholder}
      ></input>
      <div className="flex p-1">
        <button
          className="p-1 rounded bg-sky-600 text-white mr-2"
          type="submit"
        >
          Add Comment
        </button>
      </div>
    </form>
  );
};

export default AddCommentsForm;
