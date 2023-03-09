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
                <a href='https://github.com/AdrianoVolter' target='_blank'>
                    <box-icon size="md" type='logo' name='github'></box-icon>
                </a>
                <a href="https://www.linkedin.com/in/adrianovolter/" target='_blank'>
                    <box-icon size="md" type='logo' name='linkedin-square'></box-icon>
                </a>
                 
            </div>
        </div>

    )
}

export default Card