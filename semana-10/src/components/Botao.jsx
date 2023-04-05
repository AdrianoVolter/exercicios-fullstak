import { SCButton2 } from "./Button.style"

export default function Botao(props) {
    // const props = {
    //     backgroundColor: btnProps.backgroundColor || "#000",
    //     children: btnProps.children

    // }
  return (
    <SCButton2
      backgroundColor={props.backgroundColor || "#000"}
    >
      {props.children}
    </SCButton2>
  )
}