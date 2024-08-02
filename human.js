function loadHuman(evt){
    console.log(evt.currentTarget.id);
    evt.preventDefault();
    const id = evt.currentTarget.id;
    window.location.href = `humandetails.html?id=${id}`;
  }