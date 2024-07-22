function Proctform(){
    return(
        <form>
            <div>
                <input type="text" placeholder="Insira o Nome Do Projeto" />
            </div>
            <div>
                <input type="number" placeholder="Insira o Orçamento Total" />
            </div>
            <div>
                <select name="categoria_id">
                    <option disabled>Selecione a Categoria</option>
                </select>
            </div>
            <div>
                <input type="submit" value="Criar Projeto" />
            </div>
        </form>
    )
}

export default Proctform