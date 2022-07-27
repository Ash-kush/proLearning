var data = {
    name : 'Ashish',
    surname : 'Kuhwaha'
}
var sample = {
    rollno : "24"
}
var data1 = {...data, ...sample};
//console.log(data1);
var add = (data1) => {
    var arr = [];
    // [data1].map((e) => {

    //     console.log(e);
    //     arr.push(e.value);
    // })
    Object.values(data1).forEach(element => {
        arr.push(element);
    });
    
    return arr;
}
console.log(add(data1));
