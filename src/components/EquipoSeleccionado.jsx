import React from 'react'
import Suplentes from './Suplentes';
import Titulares from './Titulares';

function EquipoSeleccionado() {
    return (
        <section>
            <Titulares />
            <Suplentes />
        </section>
    )
}

export default EquipoSeleccionado;
