

function loadCart(evt){
  console.log(evt.currentTarget.id);
  evt.preventDefault();
  const id = evt.currentTarget.id;

  window.location.href = `projectdetails.html?id=${id}`;
}

/*
function humanDetails(){
    window.location.href = "humandetails.html";
}
*/
