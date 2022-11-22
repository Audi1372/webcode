const url="https://www.anapioficeandfire.com/api/books"
let images=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg", "7.jpg","8.jpg","9.jpg",
    "10.jpg"]
let details=["https://en.wikipedia.org/wiki/A_Game_of_Thrones",
             "https://en.wikipedia.org/wiki/A_Clash_of_Kings",
             "https://en.wikipedia.org/wiki/A_Storm_of_Swords",
             "https://en.wikipedia.org/wiki/Tales_of_Dunk_and_Egg",
             "https://awoiaf.westeros.org/index.php/A_Feast_for_Crows",
             "https://awoiaf.westeros.org/index.php/The_Sworn_Sword",
             "https://awoiaf.westeros.org/index.php/The_Mystery_Knight",
             "https://en.wikipedia.org/wiki/A_Dance_with_Dragons",
             "https://en.wikipedia.org/wiki/The_Princess_and_the_Queen",
             "https://en.wikipedia.org/wiki/The_Rogue_Prince"
            ]
async function getBooks(){
    let books;
    try{
         const data= await fetch(url,{
            method:"GET",
            headers:{
                "Content-type":"application/json"
            }

        })
        books=await data.json();
        // console.log(books)
    }
    catch(err){
        console.log(err)
    }
 return books;
}
async function getBookDetails(){
                let books =await getBooks();
                
                const bookList = document.querySelector(".book-list")
                bookList.innerHTML=""
           for(let i=0;i<books.length;i++){
       let curl1 = books[i].characters[0]
       let curl2 = books[i].characters[1]
       let curl3 = books[i].characters[2]
       let curl4 = books[i].characters[3]
       let curl5 = books[i].characters[4]
       try{     
                    
            const data= await fetch(curl1,{
            method:"GET",
            headers:{
                    "Content-type":"application/json"
                 }

            })
                character1 = await data.json();
                    console.log(character1.name)
            }
            
            catch(err){
                console.log(err)
            }
        try{     
                    
                const data= await fetch(curl2,{
                method:"GET",
                headers:{
                        "Content-type":"application/json"
                     }
    
                })
                    character2 = await data.json();
                        console.log(character2.name)
                }
                
                catch(err){
                    console.log(err)
                }
         try{     
                    
                const data= await fetch(curl3,{
                method:"GET",
                headers:{
                        "Content-type":"application/json"
                     }
    
                })
                    character3 = await data.json();
                        console.log(character3.name)
                }
                
                catch(err){
                    console.log(err)
                }
        try{     
                    
                const data= await fetch(curl4,{
                method:"GET",
                headers:{
                        "Content-type":"application/json"
                     }
    
                })
                    character4 = await data.json();
                        console.log(character4.name)
                }
                
                catch(err){
                    console.log(err)
                }
                try{     
                    
                    const data= await fetch(curl5,{
                    method:"GET",
                    headers:{
                            "Content-type":"application/json"
                         }
        
                    })
                        character5 = await data.json();
                            console.log(character5.name)
                    }
                    
                    catch(err){
                        console.log(err)
                    }
    



        bookList.innerHTML += `<div class="user-container">
        <div class="main">
        <img src = "${images[i]}" width="300px" height="700px">
        </div>
        <div class="text">
            <h2>${books[i].name}</h2>
            <h4>Author : ${books[i].authors[0]}</h4>
            <h4>Isbn : ${books[i].isbn}</h4>
            <h4> number Of Pages: ${books[i].numberOfPages}</h4>
            <h4> Publisher: ${books[i].publisher}</h4>
            <h4>releasedDate : ${books[i].released}</h4>
            <h4>Charcter1 : ${character1.name}</h4>
            <h4>Charcter2 : ${character2.name}</h4>
            <h4>Charcter3 : ${character3.name}</h4>
            <h4>Charcter4 : ${character4.name}</h4>
           <h4>Charcter5 : ${character5.name}</h4>
           <button><a href="${details[i]}" target="_blank">MoreDetails</a></button>

            


           
            
        </div>`;
                
    }
}

    getBooks();
    getBookDetails();
    // getCharacter();
//     async function getCharacter(){ 
//         let character1;
//         let character2; 
//         let character3; 
//         let character4; 
//         let character5; 
//     let books =await getBooks();
//     for(let i=0;i<books.length;i++){
//                 try{     
//                         let curl1 = books[i].characters[0]
//                         const data= await fetch(curl1,{
//                         method:"GET",
//                         headers:{
//                             "Content-type":"application/json"
//                         }

//                     })
//                         character1 = await data.json();
//                             console.log(character1.name)
//                     }
                    
//                     catch(err){
//                         console.log(err)
//                     }

//                 try{     
//                     let curl2 = books[i].characters[1]
//                     const data= await fetch(curl2,{
//                     method:"GET",
//                     headers:{
//                         "Content-type":"application/json"
//                     }

//                   })
//                     character2=await data.json();
//                         console.log(character2.name)
//                   }
//                     catch(err){
//                         console.log(err)
//                  }

//                 try{     
//                         let curl3 = books[i].characters[2]
//                         const data= await fetch(curl3,{
//                         method:"GET",
//                         headers:{
//                             "Content-type":"application/json"
//                         }

//                     })
//                     character3=await data.json();
//                         console.log(character3.name)
//                 }
                
//                 catch(err){
//                     console.log(err)
//                 }
//         try{     
//             let curl4 = books[i].characters[3]
//             const data= await fetch(curl4,{
//             method:"GET",
//             headers:{
//                 "Content-type":"application/json"
//             }

//         })
//         character4=await data.json();
//             console.log(character4.name)
//     }
    
//     catch(err){
//         console.log(err)
//     }
//     try{     
//         let curl5 = books[i].characters[4]
//         const data= await fetch(curl5,{
//         method:"GET",
//         headers:{
//             "Content-type":"application/json"
//         }

//     })
//     character5=await data.json();
//         console.log(character5.name)
// }

// catch(err){
//     console.log(err)
// }
// }
//     }

   




   

        

    
    
    
    
       
   






