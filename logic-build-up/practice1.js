/* 
* Topic: Logic Build Up Technique (Converter Function)
* Page: 166
* Practice: 1 to 7
*/


// #1
function mileToGuz(mile) {
    const guz = mile * 1760;
    return guz;
}
console.log(mileToGuz(13));


// #2
function kwhToKcl(kwh) {
    const kcl = kwh * 860;
    return kcl;
}
console.log(kwhToKcl(10));


// #3
function hourToSecond(hour) {
    const second = hour * 3600;
    return second;
}
console.log(hourToSecond(5));


// #4
function cmToMeter(cm) {
    const meter = cm / 100;
    return meter;
}
console.log(cmToMeter(1));


// #5
function inchToCm(inch) {
    const cm = inch * 2.54;
    return cm;
}
console.log(inchToCm(100));


// #6
function poundToKg(pound) {
    const kg = pound * 0.453;
    return kg;
}
console.log(poundToKg(5));


// #7
function guzToMeter(guz) {
    const meter = guz * 0.91;
    return meter;
}
console.log(guzToMeter(10));
