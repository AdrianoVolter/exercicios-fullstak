function Card(props){

    return(

        <div>
            <div>
                <img src={props.imagem} alt="github" />
            </div>
            <div>
                <h2>Nome : {props.nome}</h2>
                <p>Idade : {props.idade}</p>
            </div>
        </div>

    )
}

export default Card