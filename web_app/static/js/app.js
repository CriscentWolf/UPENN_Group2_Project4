CATEGORIES = ['Edible', 'Poisonous']

function submit(event) {
    event.preventDefault();
    let str = createArray();
    mushroom(str);
}

function mushroom(form) {
    d3.json(`http://localhost:5000/api/model/${form}`)
        .then(function(apiData) {
            console.log(apiData)
            console.log(CATEGORIES[apiData])
            document.getElementById('mushroom-result').innerHTML = CATEGORIES[apiData]
        });
}

function createArray() {
    var myArr = new Array();
    myArr[0] = createSubArray('cap-shape');
    myArr[1] = createSubArray('cap-surface');
    myArr[2] = createSubArray('cap-color');
    myArr[3] = createSubArray('bruises');
    myArr[4] = createSubArray('odor');
    myArr[5] = createSubArray('gill-attachment');
    myArr[6] = createSubArray('gill-spacing');
    myArr[7] = createSubArray('gill-size');
    myArr[8] = createSubArray('gill-color');
    myArr[9] = createSubArray('stalk-shape');
    myArr[10] = createSubArray('stalk-root');
    myArr[11] = createSubArray('stalk-surface-above-ring');
    myArr[12] = createSubArray('stalk-surface-below-ring');
    myArr[13] = createSubArray('stalk-color-above-ring');
    myArr[14] = createSubArray('stalk-color-below-ring');
    myArr[15] = createSubArray('veil-type');
    myArr[16] = createSubArray('veil-color');
    myArr[17] = createSubArray('ring-number');
    myArr[18] = createSubArray('ring-type');
    myArr[19] = createSubArray('spore-print-color');
    myArr[20] = createSubArray('population');
    myArr[21] = createSubArray('habitat');
    var str = myArr.join('-');
    console.log(str);
    return str;
}

function createSubArray(name) {
    var arr = new Array();
    elems = document.getElementsByName(name);
    for (var i = 0; i < elems.length; i++) {
        if (elems[i].checked) {
            arr[name] = elems[i].value;
        }
    }
    return arr[name];
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', submit);
});