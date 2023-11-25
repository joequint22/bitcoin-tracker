import { ChangeEventHandler } from "react";

export type InputFieldProps = {
    value: string
    onChange: ChangeEventHandler<HTMLInputElement>
    className?: string
    placeholder: string

}

export default function InputField (props: InputFieldProps) {
  return (
   <input
        placeholder={props.placeholder}
        className={"border border-white/10 bg-blue-950 p-2 " + props.className}
        type='text'
        value={props.value}
        onChange={props.onChange}
   />
  );
}
