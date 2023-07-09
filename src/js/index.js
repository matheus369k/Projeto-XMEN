//1.1

const personas = document.querySelectorAll('.persona');


//1.2

personas.forEach(persona => {
    persona.addEventListener('mouseenter', () => {
        if (window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        const personaSelection = document.querySelector('.selection');
        personaSelection.classList.remove('selection');

        persona.classList.add('selection');

        const bigpersona = document.querySelector('.big-persona');

        const idPersona = persona.attributes.id.value;
        bigpersona.src = `./src/imagens/card-${idPersona}.png`;

        const nomePersona = document.getElementById('name-persona');
        nomePersona.innerText = persona.getAttribute('data-name');

        const descpPersona = document.getElementById('description-persona');
        descpPersona.innerText = persona.getAttribute('data-description');
    })
})



