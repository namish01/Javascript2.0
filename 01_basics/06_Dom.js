// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body style="background-color: #212121; color: #fff;">
//     <div class="parent">
//         <div class="days">Monday</div>
//         <div class="days">Tuesday</div>
//         <div class="days">Wednesday</div>
//         <div class="days">Thursday</div>
//     </div>

//     <script>
//      Accessing Children from parents:
//         const parent= document.querySelector('.parent');
//         console.log(parent)
//         console.log(parent.children)
//         console.log(parent.children[1].innerHTML)

//         for (let index = 0 ;index<parent.children.length; index++  ) {
//          console.log(parent.children[index].innerHTML)
//       }  
       

//        parent.children[1].style.color='orange'
//        console.log(parent.firstElementChild)
//        console.log(parent.lastElementChild)

//     //    Accsessing parent from children:
//        const child=document.querySelector('.days')
//        console.log(child)
//        console.log(child.parentElement)
//        console.log(child.nextElementSibling)

//        console.log("Nodes: ", parent.ChildNodes)
       

//     </script>
// </body>
// </html>