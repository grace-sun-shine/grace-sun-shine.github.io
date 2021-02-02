(function () {
    "use strict";
    console.log("reading js");
    
    const myForm = document.querySelector("#myForm");
    const house = document.querySelector("#house");
    const madlib = document.querySelector("#madlib");
    const closeBtns = document.querySelectorAll('.close');
    
    for (const eachBtn of closeBtns) {
        eachBtn.addEventListener('click', function (event) {
            event.preventDefault();
            document.querySelector('.showing').className = 'overlay hidden';
            madlib.innerHTML = "";
        });
    }

    myForm.addEventListener("submit", function(e){
        e.preventDefault();
        const formData = document.querySelectorAll("input[type=text]");
        const selectData = house.value;
        processData(formData, selectData);
    });

    function processData(formData, selectData){
        var emptyFields = 0;
        var words = [];
        for(var eachWord of formData){
            if(eachWord.value){
                words.push(eachWord.value);
                eachWord.value = "";
            }else{
                emptyFields++;
            }
        }
        if(emptyFields > 0){
            alert("Please give me words so I can make your Mad Lib!");
        }else{
            makeMadlib(words, selectData);
        }
        
    }

    function makeMadlib(wordsArray, selectData){
        var myPara = document.createElement("p");
        let myText1 =document.createTextNode(`Dear ${wordsArray[0]}, `);
        myPara.appendChild(myText1);
        document.getElementById("madlib").appendChild(myPara);

        var myPara = document.createElement("p");
        let myText2 = document.createTextNode(`We are pleased to inform you that you have been accepted at Witchcraft School in ${selectData}. You will need to ${wordsArray[3]} to school with a ${wordsArray[2]} ${wordsArray[1]} ready. `);
        myPara.appendChild(myText2);
        document.getElementById("madlib").appendChild(myPara);
        
        var myPara = document.createElement("p");
        let myText3 = document.createTextNode(`Term begins on 1 September. We await your owl by no later than 31 July. `);
        myPara.appendChild(myText3);
        document.getElementById("madlib").appendChild(myPara);

        var myPara = document.createElement("p");
        let myText4 = document.createTextNode(`Yours sincerely, `);
        myPara.appendChild(myText4);
        document.getElementById("madlib").appendChild(myPara);
        
        var myPara = document.createElement("p");
        let myText5 = document.createTextNode(`Deputy Headmistress`);
        myPara.appendChild(myText5);
        document.getElementById("madlib").appendChild(myPara);

        document.getElementById('overlay').className = 'showing';

    }

    

})();