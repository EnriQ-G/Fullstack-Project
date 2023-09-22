import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {createTarea, getTareas} from '../features/tareas/tareaService'

const TareaForm = () => {
    
    const [texto, setTexto] = useState('')

    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(createTarea({texto}))
        setTexto('')
    }


  return (
    <section className='form'>
        <form onSubmit={onSubmit}>
            <div className='form-group'>
                <label htmlFor="texto">Tarea</label>
                <input 
                    type="text" 
                    name="texto" 
                    id="texto"
                    value={texto}
                    onChange={e => setTexto(e.target.value)} 
                    />
            </div>
            <div className='form-group'>
                <input type="submit" value="Agregar" className='btn btn-block' />
            </div>
        </form>
    </section>
    )
}

export default TareaForm