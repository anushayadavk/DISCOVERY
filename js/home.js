window.addEventListener('DOMContentLoaded', function () {

    console.log('loaded')
    const lbtn = document.getElementById('left-btn')
    const rbtn = document.getElementById('right-btn')
    console.log(lbtn, rbtn)


    let arr = [{ temp: "93F", speed: "1.99mph", campas: "61" }, { temp: "55f", speed: "4.5mph", campas: "6" }, { temp: "78f", speed: "8.5mph", campas: "8" }, { temp: "444f", speed: "0.5mph", campas: "12" }];
    let arr2 = [
        { city: "WestLake,Texas", place: "Vaquero" },
        { city: "whitefish,montana", place: "Iron Horse" },
        { city: "siliconvalley,caliornia", place: "CordeValle" },
        { city: "Scottsdale,Arizona", place: "Estanica" }
    ];

    let arr3 = [{ location: "32.965190/-97.194W" }, { location: "11.1094N/225.3287W" }, { location: "33.1094N/445.3287W" }, { location: "55.1094N/66.3287W" }];




    // row1
    let temp = document.getElementById('temp')
    temp.innerHTML = arr[0].temp

    let speed = document.getElementById('mp')
    speed.innerHTML = arr[0].speed

    let campas = document.getElementById('unit')
    campas.innerHTML = arr[0].campas

    // row2
    let city = document.getElementById('p-info')
    city.innerHTML = arr2[0].city

    let place = document.getElementById('p-info1')
    place.innerHTML = arr2[0].place

    //row3

    let location = document.getElementById('location')
    location.innerHTML = arr3[0].location


    let count = 0

   lbtn.addEventListener('click', function () {
        // console.log("i click left btn")

        // $('lbtn').click(function () {
        if (count > 0) {
            count--
            temp.innerHTML = arr[count].temp
            speed.innerHTML = arr[count].speed
            campas.innerHTML = arr[count].campas

            city.innerHTML = arr2[count].city
            place.innerHTML = arr2[count].place

            location.innerHTML = arr3[count].location


        }
        else {
            count = arr.length - 1
            temp.innerHTML = arr[count].temp
            speed.innerHTML = arr[count].speed
            campas.innerHTML = arr[count].campas

            city.innerHTML = arr2[count].city
            place.innerHTML = arr2[count].place

            location.innerHTML = arr3[count].location


        }


    })
    rbtn.addEventListener('click', function () {
        // console.log("i click right btn")
        // $('rbtn').click(function () {
        if (count < arr.length - 1) {
            count++
            temp.innerHTML = arr[count].temp
            speed.innerHTML = arr[count].speed
            campas.innerHTML = arr[count].campas

            city.innerHTML = arr2[count].city
            place.innerHTML = arr2[count].place

            location.innerHTML = arr3[count].location

        }
        else {
            count = 0
            temp.innerHTML = arr[count].temp
            speed.innerHTML = arr[count].speed
            campas.innerHTML = arr[count].campas

            city.innerHTML = arr2[count].city
            place.innerHTML = arr2[count].place

            location.innerHTML = arr3[count].location

        }

    })


})