function Card(props) {
  return ( 
    <div>
      <img src={props.imagem} width={props.width} href={props.imagem}/>
      <h3>{props.nome}</h3>
      <p>{props.idade}</p>
      <img src={props.iconGithub} alt="github" width={50} />
      


    </div>
   );
}

export default Card;