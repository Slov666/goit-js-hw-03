const findBestEmployee = function (employees) {
    const value = Object.values(employees);
    const key = Object.keys(employees);
    let topValueWork = 0;
    let topEmployee;

    for (let i = 0; i < value.length; i += 1) {
        if (topValueWork < value[i]) {
            topValueWork = value[i];
            topEmployee = key[i];
        }
    }
    return topEmployee;
};




console.log(
    findBestEmployee({
        ann: 29,
        david: 35,
        helen: 1,
        lorence: 99,
    }),
); // lorence

console.log(
    findBestEmployee({
        poly: 12,
        mango: 17,
        ajax: 4,
    }),
); // mango

console.log(
    findBestEmployee({
        lux: 147,
        david: 21,
        kiwi: 19,
        chelsy: 38,
    }),
); // lux