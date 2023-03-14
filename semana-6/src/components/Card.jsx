import './Card.css'
function Card({usuario}){


    return(

        <div className="caixa">
            <div className="imagem">
                <img src={usuario.imagem} alt={usuario.alt} />
            </div>
            <div className='info'>
                <h2>{usuario.nome}</h2>
                <p>Idade : {usuario.idade} anos</p>
                
                <a href={usuario.github} target='_blank'>
                    <box-icon size="md" type='logo' name='github'></box-icon>
                </a>
                <a href={usuario.linkedin} target='_blank'>
                    <box-icon size='md' type='logo' name='linkedin-square'></box-icon>
                </a>
                 
            </div>
        </div>

    )
}

export default Card