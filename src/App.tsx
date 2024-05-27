import {useForm} from 'react-hook-form' ;

function App() {
    const {register ,handleSubmit,formState:{errors}} = useForm({
        initialValues:{name:""},
        defaultValues : {name:""}

    });
    console.log(errors)

    const onSubmit = (data) =>{
        console.log(data);
    }

  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label> name </label>
            <input type = "text"{...register("name",{required:"This is required Field"})} />
            <span className= "text-danger">{errors?.name?.message}</span>
        </div>

        <div>
            <input type = "submit"/>
        </div>
        </form>
    </>
  )
}

export default App
