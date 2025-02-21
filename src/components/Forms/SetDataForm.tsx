import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type DataFormProps={
    placeholder?:string,
    prev:string,
    close:()=>void,
    changeData:(prev:string)=>void
}

interface dataFormI{
  data:string
}

const SetDataForm = ({changeData,placeholder,close,prev}: DataFormProps)=>{

  const {register,handleSubmit,reset} = useForm<dataFormI>({
    mode:"onChange"
  })

  useEffect(()=>{
    reset({
      data:prev
    })
  },[reset])

  const onSubmit:SubmitHandler<dataFormI> = (data)=>{
    if(!data) return;
    changeData(data.data);
    close();
  }
    
  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="ChangeData">{placeholder}</label>
      <input 
        type="text" 
        {...register("data",{required:true})}
        id="ChangeData" 
        maxLength={24}
      />
      <button className="button" type="submit">Confirm</button>
    </form>
  );
}

export default SetDataForm;