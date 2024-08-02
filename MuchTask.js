
function repetirDiv(){
    console.log('Botón clicado'); // Verifica si el botón está funcionando
    var newDiv = document.createElement('div');
    newDiv.className = 'cloned-div';
    newDiv.innerHTML = `
    
         <div class="bg-[#cbcbcb40] flex flex-col mt-5 p-4 h-[990px] md:p-[75px] md:w-[1000px] md:h-[990px] md:justify-center md:justify-center md:items-center" id="Task"> 
            <p class="text-lg text-left mt-2 md:text-2xl">Number task<span class="text-red-600">*</span></p>
            <input id="numberTask" class="w-[313px] h-10 mt-3 md:h-[190px] md:w-[500px] md:p-2" type="number">
            <p class="text-lg text-left mt-6 md:text-2xl">Name task<span class="text-red-600">*</span></p>
            <input id="nameTask" class="w-[313px] h-10 mt-3 md:h-[190px] md:w-[500px] md:p-2" type="text">
            <p class="text-lg text-left mt-6 md:text-2xl">Description task<span class="text-red-600">*</span></p>
            <textarea id="descriptionTask" class="w-[313px] h-40 mt-4 md:h-[400px] md:w-[500px]"></textarea>
            
           
            <p class="text-lg text-left mt-6 md:text-2xl" x-on:loadstart="text-left">Type task<span class="text-red-600">*</span></p>
            <select id="typeTask" class="w-[313px] h-10 mt-4 md:h-[120px] md:w-[500px] md:text-2xl md:p-2">
                <option>Type</option>
                <option>Canada</option>
                <option>Mexico</option>
            </select>
            <p class="text-lg text-left mt-5 md:text-2xl">Estimated start date<span class="text-red-600">*</span></p>
            <input id="estimatedTask" class="w-[313px] h-10 mt-4 md:h-[190px] md:w-[500px] md:p-2 " type="date">
            <p class="text-lg text-left mt-5 md:text-2xl">Actual start date<span class="text-red-600">*</span></p>
            <input id="actualStartDate" class="w-[313px] h-10 mt-4 md:h-[190px] md:w-[500px] md:p-2" type="date">
            <p class="text-lg text-left mt-5 md:text-2xl">Estimated duration (hours)<span class="text-red-600">*</span></p>
            <input id="estimatedDuration" class="w-[313px] h-10 mt-4 md:h-[190px] md:w-[500px] md:p-2 " type="number">
            <p class="text-lg text-left mt-5 md:text-2xl">Actual duration (hours)<spanc class="text-red-600">*</spanc></p>
            <input id="actualDuration" class="w-[313px] h-10 mt-4 md:h-[190px] md:w-[500px] md:p-2" type="number">
        </div>

        <div class="">
            <button class=" mt-10 text-2xl bg-[#468585] w-[230px] h-14 text-white" onclick="genPDF()">document</button>
        </div>
        <div class="mt-12">
            <button id="plusTask" class="text-4xl text-[#50B498]" onclick="repetirDiv()">+</button>
        </div>

        <div id="clonecontainer">
        
        </div>
    </div>
    `;
    var container = document.getElementById('clonecontainer');
    container.appendChild(newDiv);
}
