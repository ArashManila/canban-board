import { useEffect } from "react";
import data from "../../DataManagment/dataM";
import { SubmitHandler, useForm } from "react-hook-form";

type AuthProps = {
  setActive: (active: boolean) => void;
};
interface authI{
  name:string
}
const AuthForm = ({ setActive }: AuthProps) => {

  const {register,handleSubmit,reset} = useForm<authI>({
    mode:"onChange"
  })

  useEffect(()=>{
    reset({
      name:""
    })
  },[reset])

  const onSubmit:SubmitHandler<authI> = (dataN)=>{
    if (!dataN.name) return;
    else {
      data.Set("User name", dataN.name);
      setActive(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">User name:</label>
      <input
        type="text"
        id="name"
        {...register("name",{required:true})}
        placeholder="Enter your name:"
      />
      <button className="button" type="submit">
        Save
      </button>
    </form>
  );
};

export default AuthForm;
