
var locModal = document.getElementById('locModal');
var btnChangeLocation = document.getElementById('w-change-btn');
var btnclose = document.querySelectorAll('.closeModal');
var popup = document.getElementById('w-change-location');
var city = document.getElementById('city');
var state = document.getElementById('state');


btnChangeLocation.addEventListener('click', (e) => {
    
});
//show the modal
popup.addEventListener('click', (e) => {
    locModal.style.display = "block";
    locModal.style.paddingRight = "17px";
    locModal.className = "modal fade show";
});
//close the modal
btnclose.forEach((element) => {
    element.addEventListener('click', (e) => {
        locModal.style.display = "none";
        locModal.className = "modal fade";
    });
});