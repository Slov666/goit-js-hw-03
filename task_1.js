const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

const fnObjekt = function (objekt) {
    const keys = Object.keys(objekt);
    for(const key of keys){
     console.log(key);
    }
}
fnObjekt(user);