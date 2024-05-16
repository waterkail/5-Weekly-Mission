import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import { GRAY3, PRIMARY, WHITE } from "../color";

const Input = styled.input`
  width: 100%;
  padding: 18px 31px 18px 15px;
  border-radius: 8px;
  border: 1px solid ${GRAY3};
  background: ${WHITE};
  outline: none;
  color: #373740;
  font-size: 16px;
  line-height: 24px;

  &:focus {
    border-color: ${PRIMARY};
  }
`;

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function AuthForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <Input defaultValue="test" {...register("example")} />

      {/* include validation with required or other standard HTML validation rules */}
      <Input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <Input type="submit" />
    </form>
  );
}
