import { useState } from "react";
import { useHistory } from "react-router";

function NewColorForm({ addColor }) {
    
    const [formData, updateForm] = useState({name: '', hex: '#ffffff'});
    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target; 

        updateForm(newData => ({
            ...newData,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addColor({ [formData.name]: formData.hex })
        history.push("/colors");
    }

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <label for="name">Color Name: </label>
                <input 
                    type="text"
                    placeholder="Color Name"
                    id="name"
                    name="name"
                    value={ formData.name }
                    onChange={ handleChange }
                />
                <label for="hex">Hex #: </label>
                <input 
                    type="color"
                    name="hex"
                    id="hex"
                    onChange={ handleChange }
                    value= { formData.hex }
                />
                <button>Add new color.</button>
            </form>
        </div>
    )
}

export default NewColorForm;