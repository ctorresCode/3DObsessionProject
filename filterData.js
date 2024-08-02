document.getElementById('filterButton').addEventListener('click', function(){
    var selectedCategory = document.getElementById('stylesSelect').value;

    var cards = document.querySelectorAll('.card');

    cards.forEach(function(card) {
        var cardCategory = card.getAttribute('data-category');

        if(selectedCategory === 'all' || cardCategory === selectedCategory){
            card.classList.remove('hidden');
            card.classList.add('block')
        }
        else{
            card.classList.remove('block');
            card.classList.add('hidden')
        }

        if(selectedCategory == "Styles project"){
            window.location.href = "index.html";
        }
    });
});