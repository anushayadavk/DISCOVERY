window.addEventListener('DOMContentLoaded', function () {
    const leftButton = document.getElementById("left-btn");
    const rightButton = document.getElementById("right-btn");
    
    const news = document.getElementById("newstext");
    const newspara = document.getElementById("carousel-description");

   // console.log(leftButton);


let arr = [{heading1:"Discovery’s newest property in Kaua’i North Shore Preserve" ,
               para: "Discovery Land Company is excited to announce our 25th residential club community on the majestic North Shore of Kaua’i. North Shore Preserve, a one-of-a-kind residential community, spans one thousand acres at the base of the mountains in the pastoral Hanalei valley. This newly re-imagined, low-density project is a secluded and peaceful island oasis with limited initial homesite and hale offerings."} ,
               { heading1:"James Island Discovery's Newest Property" ,
               para: "Discovery Land Company is excited to announce our 24th private luxury residential community. James Island Golf and Ocean Club, a 780-acre private island in British Columbia with only 76 lots, is Discovery Land Company’s most exclusive community to date and Discovery’s first project in Canada." },
               { heading1: "CostaTerra Discovery's 23rd property" ,
               para: "Discovery Land Company, the world’s leading developer of luxury private residential communities, clubs and resorts, has announced its 23rd property and first in Europe."},
                { heading1: "Troubadour To Open Golf Course Fall 2019" ,
               para: "Troubadour Golf & Field Club, a Discovery Land Company community, is pleased to announce the opening of its 18-hole Tom Fazio-designed golf course this fall."} ]
               
               
               //let cont = document.getElementById("counter");
             news.innerHTML = arr[0].heading1
             newspara.innerHTML = arr[0].para
            
               let count = 0;
               leftButton.addEventListener('click', function () {
                   if(count>0) {
                       count = count-1;
                   
                    news.innerHTML = arr[count].heading1
                    newspara.innerHTML = arr[count].para
                    
                    } 
                    else{
                   count=arr.length-1
                   news.innerHTML = arr[count].heading1
                   newspara.innerHTML = arr[count].para
              }
                //    console.log(leftButton);     
               })
    
           
               rightButton.addEventListener('click', function () {
                       if(count <arr.length-1) {
                       count = count + 1
                       
                       news.innerHTML = arr[count].heading1
                       newspara.innerHTML = arr[count].para
                    //    document.write(counter.innerHTML=count);
                   
                       }
                       else
            {
                count=0
                news.innerHTML = arr[count].heading1
                newspara.innerHTML = arr[count].para
                
            }
                       //console.log("rihht click".count)
                       
                    })
                
                
                
                })
                       
                
                
                





// window.addEventListener('DOMContentLoaded', function() {
//     console.log("hello ");
//     const x = document.getElementById("section1");
//     x.addEventListener('click', function(){
//         console.log("abcd");
//        console.log(x);
//     })
// })


// window.addEventListener('DOMContentLoaded', function() {
//     const lbtn = document.getElementById('left-btn')
//     const right_btn = document.getElementById('right-btn')

//     let arr = [ {title: `Discovery’s newest property in Kaua’i North Shore Preserve`, desc: `Discovery Land Company is excited to announce our 25th residential club community on the majestic North Shore of Kaua’i. North Shore Preserve, a one-of-a-kind residential community, spans one thousand acres at the base of the mountains in the pastoral Hanalei valley. This newly re-imagined, low-density project is a secluded and peaceful island oasis with limited initial homesite and hale offerings.`}, 
//     {title: `James Island Discovery's Newest Property`, desc: `Discovery Land Company is excited to announce our 24th private luxury residential community. James Island Golf and Ocean Club, a 780-acre private island in British Columbia with only 76 lots, is Discovery Land Company’s most exclusive community to date and Discovery’s first project in Canada.`}, 
//     {title: `CostaTerra Discovery's 23rd property`, desc:`Discovery Land Company, the world’s leading developer of luxury private residential communities, clubs and resorts, has announced its 23rd property and first in Europe.`}, 
//     {title: `Troubadour To Open Golf Course Fall 2019`, desc:`Troubadour Golf & Field Club, a Discovery Land Company community, is pleased to announce the opening of its 18-hole Tom Fazio-designed golf course this fall.`} ];

//     let title = document.getElementById('newstext')
//     let desc = document.getElementById('carousel-description')
//     title.innerHTML = arr[0].title
//     desc.innerHTML = arr[0].desc

//     let count = 0

//     const counterBtn = document.getElementById('counter')
//     counterBtn.innerHTML = `${count+1} - 4`

//     //lbtn.addEventListener('click', function() {
//         console.log("i click left btn")
//         if(count > 0) {
//             count--
//             desc.innerHTML = arr[count].desc
//             title.innerHTML = arr[count].title
//         } else {
//             count = arr.length - 1
//             desc.innerHTML = arr[count].desc
//             title.innerHTML = arr[count].title
//         }
//         counterBtn.innerHTML = ` ${count+1} - 4 `
//     })

//    // right_btn.addEventListener('click', function() {
//         console.log("i click right btn")
//         if(count < arr.length-1) {
//             count++
//             desc.innerHTML = arr[count].desc
//             title.innerHTML = arr[count].title
//         } else {
//             count = 0
//             desc.innerHTML = arr[count].desc
//             title.innerHTML = arr[count].title
//         }
//         counterBtn.innerHTML = `${count+1} - 4`
//     })

// })

