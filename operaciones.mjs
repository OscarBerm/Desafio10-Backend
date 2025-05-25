import fs from 'fs';
import crypto from 'crypto';

const registrar = (name, age, typeAnimal, color, disease) => {
    try {
        const data = fs.readFileSync('citas.json', 'utf8');
        const citas = JSON.parse(data);
        const id = crypto.randomUUID();

        if (!name || !age || !typeAnimal || !color || !disease) {
            console.log('Por favor, ingrese todos los datos');
            return;
        }

        citas.push({id, name, age, typeAnimal, color, disease});

        fs.writeFileSync('citas.json', JSON.stringify(citas, null, 4));
        console.log('Registro exitoso');

    } catch (error) {
        console.error('Error al agregar cita',error);
    }
}

const leer = () => {
    const data = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
    console.log(data);
}

export { registrar, leer };