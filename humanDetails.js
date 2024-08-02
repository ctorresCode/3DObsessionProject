document.addEventListener("DOMContentLoaded", () =>{
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get('id');
    getData(id);
});


async function getData(id){
    const url = 'human.json';
    try{
        const response = await fetch(url)
        .then(response => {
            if(!response.ok){
                throw new error("Error");
            }
            return response.json();
        })
        .then(data => {
            const item = data.humanCards.find(item => item.id === parseInt(id));
            let imageUrl = `${item.image}`;
            let nameLast = `${item.namesurname}`;
            let position = `${item.position}`
            let description = `${item.description}`;
            let dni = `${item.DNI}`;
            let name = `${item.name}`;
            let phone = `${item.phone}`;
            let email = `${item.email}`;
            let date = `${item.dateofhire}`;
            document.querySelector("#image").src = imageUrl;
            document.querySelector("#namelast").innerHTML = nameLast;
            document.querySelector("#position").innerHTML = position;
            document.querySelector("#description").innerHTML = description;
            document.querySelector("#dni").innerHTML = dni;
            document.querySelector("#name").innerHTML = name;
            document.querySelector("#phone").innerHTML = phone;
            document.querySelector("#email").innerHTML = email;
            document.querySelector("#date").innerHTML = date;
            
        });  

    }
    catch(error){
        console.error(error.message);
    }
}

