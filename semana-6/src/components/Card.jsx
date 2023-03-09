import './Card.css'
function Card(props){

    return(

        <div className="caixa">
            <div className="imagem">
                <img src={props.imagem} alt="github" />
            </div>
            <div className='info'>
                <h2>Nome : {props.nome}</h2>
                <p>Idade : {props.idade} anos</p>
                 <box-icon  type='logo' name='github'></box-icon>
                 <box-icon type='logo' name='linkedin-square'></box-icon>
            </div>
        </div>

    )
}

export default Card