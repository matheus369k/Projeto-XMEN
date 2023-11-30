$.ajax({
    type: "GET",
    url: "./xmen-api.json",
    dataType: "json",
    success: function (response) {

        response["personas"].map((persona) => {

            const img = document.createElement("img")

            img.setAttribute('src', `${persona.images['jpg']}`)

            img.setAttribute('class', 'persona')

            $(".list-persona").append(img);


        })

        document.querySelectorAll('.persona')[0].classList.add('selection')

        SelecedPersona(response["personas"]);
    }
});


function SelecedPersona(listPersonas) {
    document.querySelectorAll(".persona").forEach((pers, index) => {
        $(pers).mouseenter(function () { 

            $('.selection').removeClass('selection');

            $(pers).addClass('selection');

            $('.big-persona').attr('src', `${listPersonas[index]['images']['png']}`);

            $('#description-persona').text(listPersonas[index]['description']);

            $('#name-persona').text(listPersonas[index]['name']);

            if (window.innerWidth < 768 && window.innerHeight > window.innerWidth) {
                window.scroll(0, 1)
                
            }
            
        });
    });
}


