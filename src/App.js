import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const status = 'Регистрация'

  return (
    <>
    <div className='status'>{status}</div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>Name:<input type="text" id="name" {...register("name", { required: true })} /></p>
      <p> Email:<input
        type="email"
        id="email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      /></p>
      <p>Number:<input
        type="number"
        id="age"
        {...register("age", { required: true, min: 18, max: 99 })}
      /> </p>
      <p>Possword:<input
        type="password"
        id="password"
        {...register("password", { required: true, minLength: 8 })}
      /> </p>
      <input type="submit" />
    </form>
    </> 
  );
}

export default App;
