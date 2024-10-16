
function TodayDate(){

    const date = new Date();

    const month = date.getMonth()+1 < 10 ? `0${date.getMonth()+1}` : `${date.getMonth()+1}`;
    const todaydate = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
    const year = date.getFullYear();

    return `${month}-${todaydate}-${year}`;

}

export default TodayDate;