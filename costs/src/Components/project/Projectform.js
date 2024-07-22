import {useEffect, useState} from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import style from './Projectform.module.css'

function Proctform({btnText}){

    const [categories, setCategories] = useState([])
    
    useEffect(() => {fetch("http://localhost:5000/categories", {
            method: "GET",
            headers:{
                'Content-type':'application/json'
            }})
                .then((resp) => resp.json())
                .then((data) => setCategories(data) )
                .catch((err) => console.log(err))},[]
        )
    
    return(
        <form className={style.form}>
           <Input
           type="text"
           text="Nome do Projeto"
           name="name"
           placeholder="Insira o Nome do Projeto"
           />
           <Input
           type="number"
           text="Orçamento do Projeto"
           name="budget"
           placeholder="Insira o orçamento total do Projeto"
           />
            <div>
                <Select name="category_id" text="Selecione a Categoria" option={categories}/>
            </div>
            <div>
                <SubmitButton text={btnText}/>
            </div>
        </form>
    )
}

export default Proctform