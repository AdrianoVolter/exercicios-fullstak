import './GrupoInput.css'

function GrupoInput() {

    return (
           <div className='container'>
                <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputData">Data</label>
                    <input type="date" className="form-control" id="inputData" />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputQuantidade">Quantidade</label>
                    <input type="number" className="form-control" id="inputQuantidade" />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputValor">Valor</label>
                    <input type="number" className="form-control" id="inputValor" />
                </div>
                </div>
           </div> 
            
    );

  
}

export default GrupoInput;