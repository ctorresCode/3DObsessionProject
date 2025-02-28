document.addEventListener("DOMContentLoaded", () =>{
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get('id');
    console.log(id);
    getData(id);
});

async function getData(id){
    const url = 'cartas.json' ;
    try{
        const response = await fetch(url)
        .then(response => {
            if(!response.ok){
                throw new error("Error");
            }
            return response.json();
        })
        .then(data => {
            const item = data.cartas.find(item => item.id === id);
            let imageUrl = `${item.image}`;
            let title = `${item.title}`;
            let description = `${item.description}`;
            let state = `${item.state}`;
            let promoter = `${item.promoter}`;
            let creator = `${item.creator}`;
            let startDate = `${item.startdate}`;
            let modelImages = `${item.modelImages}`;
            console.log(item);

            document.querySelector("#image").src = imageUrl;
            document.querySelector("#title").innerHTML = title;
            document.querySelector("#description").innerHTML = description;
            document.querySelector("#state").innerHTML = state;
            document.querySelector("#promoter").innerHTML = promoter;
            document.querySelector("#creator").innerHTML = creator;
            document.querySelector("#startdate").innerHTML = startDate;
            document.querySelector("#modelImage").src = modelImages;


            /*
            modelImages.map(item =>{
                const imgElement = document.createElement('img');
                const container = document.getElementById('modelImage');
                container.appendChild(imgElement);
            });
            */
        });  

    }
    catch(error){
        console.error(error.message);
    }
}