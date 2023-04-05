import { SCButton2 } from "./Button.style"

export default function Botao(props) {
  return (
    <SCButton2
      backgroundColor={props.backgroundColor}
    >
      {props.children}
    </SCButton2>
  )
}