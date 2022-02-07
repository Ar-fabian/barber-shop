const $inputs = document.querySelectorAll('.input');
export const reservation = (e) =>{
    e.preventDefault();
    const fecha = new Date();
    const reserve ={
        name: $inputs[0].value,
        service: $inputs[1].value,
        pasword: $inputs[2].value,
        date: $inputs[3].value,
        hour: $inputs[4].value,
        id: fecha.getTime(),
        currentYear: fecha.getFullYear(),
        currentMonth: fecha.getMonth() + 1,
        currentDay: fecha.getDate(),
        currentHour: fecha.getHours()
    };
    console.log(reserve);
}