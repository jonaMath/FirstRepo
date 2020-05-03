if('serviceWorker' in navigator){
    navigator.serviceWorker.register('sw.js').then((response) => {
        console.log("registrado", response);
    }).catch((err) => {
        console.log("ERROR", err);
    })
}