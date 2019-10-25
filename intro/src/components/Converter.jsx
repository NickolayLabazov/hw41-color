import React, { useState } from 'react';

export default function Converter() {

    const [color, setColor] = useState({
        hex: '#ffffff',
        rgb: 'rgb(255, 255, 255)'
    });

    const newColor = (col) => {
        setColor((() => col))
    }

    const [form, setForm] = useState({
        name: '#',
    })

    const hexToRGB = (e) => {

        e.preventDefault();
        e.persist();
        setForm(prevForm => ({ ...prevForm, name: '#' }));
        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e.target.name.value);

        if (result) {
            newColor({
                hex: e.target.name.value,
                rgb: `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`,
            })
        } else (
            newColor({
                hex: color.hex,
                rgb: 'Ошибка!',
            })
        )
    }

    const inputChange = (e) => {
        e.persist();
        setForm(prevForm => ({ ...prevForm, name: e.target.value }));
    }

    return (
        <div>
            <form action="." className='converter-form' style={{ backgroundColor: color.hex }} onSubmit={hexToRGB}>
                <input name='name' value={form.name} type="text" className='converter-input' onChange={inputChange} />
                <label htmlFor="" className='converter-label'>{color.rgb}</label>
            </form>
        </div>
    );
}