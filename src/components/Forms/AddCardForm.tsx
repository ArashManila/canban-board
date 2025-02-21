import { useEffect } from "react";

import utiles from "../../utiles/utiles";

import { CardType } from "../../types/types";
import { SubmitHandler, useForm } from "react-hook-form";

type AddCardFormProps={
  close:()=>void,
  create: (arg:CardType)=>void,
  tid:number
}

interface addCardI{
  title:string,
  desc:string
}

const AddCardForm = ({create,close,tid}:AddCardFormProps)=>{

  const {register,handleSubmit,reset} = useForm<addCardI>({
    mode:"onChange"
  });

  const id = utiles.makeid(5);

  const onSubmit:SubmitHandler<addCardI> = (data)=>{
    if(data.title === "" || data.desc === "") return;
    const dataSet:CardType ={
      title:data.title,
      desc:data.desc,
      cardId:id,
      tableId:tid
    }
    
    create(dataSet);
    close();
  }

  useEffect(()=>{
    reset({
      title:'card title',
      desc:'card desc'
    })
  },[reset])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input 
        {...register("title",{ //распаковываем register, говорим,что данное поле required, делаем ему паттерн ввода и указываем текст ошибки если не соотвествуем ему
          required:"This fiels is required",
          maxLength:15,
          minLength:3,
        })}
        name="" 
        id="" 
        placeholder='Enter Card Title...'>
        </input>
      <input 
        {...register("desc",{ //распаковываем register, говорим,что данное поле required, делаем ему паттерн ввода и указываем текст ошибки если не соотвествуем ему
          required:"This fiels is required",
          maxLength:24,
          minLength:3,
        })} 
        name="" 
        id="" 
        placeholder='Enter Card Desc...'>
        </input>
      <div className='flex p-1'>
        <button className='p-1 rounded bg-sky-600 text-white mr-2' type="submit">Add Card</button>
      </div>
    </form>
  );
}

export default AddCardForm;