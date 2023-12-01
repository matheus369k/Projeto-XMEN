$.ajax({
    type: "GET",
    url: "./xmen-api.json",
    dataType: "json",
    success: function (response) {

        response["personas"].map((persona) => {

            const li = document.createElement("li")

            li.setAttribute('class', 'persona')

            li.setAttribute('id', `${persona.name}`)

            const img = document.createElement("img")

            img.setAttribute('src', `${persona.images['jpg']}`)

            $(".list-persona").append(li);

            $(`#${persona.name}`).append(img);


        })

        document.querySelectorAll('.persona')[0].classList.add('selection')

        SelecedPersona(response["personas"]);
    }
});


function SelecedPersona(listPersonas) {
    
    document.querySelectorAll(".persona").forEach((pers, index) => {

        $(pers).mouseenter(function () { 

            setTimeout(()=>{

                $('.select-persona').addClass('animation');

            }, 1)
            
            $('.selection').removeClass('selection');

            $(pers).addClass('selection');

            $('.select-persona').removeClass('animation')

            $('.big-persona').attr('src', `${listPersonas[index]['images']['png']}`);

            $('#description-persona').text(listPersonas[index]['description']);

            $('#name-persona').text(listPersonas[index]['name']);

            if (window.innerWidth < 768 && window.innerHeight > window.innerWidth) {

                window.scroll(0, 10)
                
            }else {

                window.scroll(0, 120)
            }
        });
    });
}


