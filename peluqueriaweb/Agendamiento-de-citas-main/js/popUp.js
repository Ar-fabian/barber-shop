export const popUp = (element, e) =>{
    e.preventDefault();
    document.getElementById('containerForm').classList.toggle('show');
    document.getElementById(element).classList.toggle('down');
}