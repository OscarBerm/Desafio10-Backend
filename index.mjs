import { registrar, leer } from './operaciones.mjs';

const data = process.argv.slice(2);
const action = data[0];

if (action === 'registrar') {
    const name = data[1];
    const age = data[2];
    const typeAnimal = data[3];
    const color = data[4];
    const disease = data[5];

    registrar(name, age, typeAnimal, color, disease);
}
else if (action === 'leer') {
    leer();
}
else {
    console.error('Opción no reconocida');
}


