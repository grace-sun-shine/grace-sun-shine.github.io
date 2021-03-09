(function () {
    "use strict";
    console.log("reading js");
    
    const submit = document.querySelector("#submit");
    const house = document.querySelector("#house");
    const madlib = document.getElementById("madlib");
    const closeBtns = document.querySelectorAll('.close');
    
    //reload the page after quit
    for (const eachBtn of closeBtns) {
        eachBtn.addEventListener('click', function (event) {
            location.reload();
        });
    }

    const myPage = [
        document.getElementById("name"),
        document.getElementById("selectHouse"),
        document.getElementById("animal"),
        document.getElementById("adjective"),
        document.getElementById("selectVerb")
    ];
    const nextPage = document.getElementById("nextPage");
    const sub = document.getElementById("sub");
    const order = document.getElementById("order");
    let currentPage = 0;

    //switch page after clicking on ">"
    document.getElementById("next").addEventListener("click",function(){
        currentPage++;
        console.log(myPage[currentPage]);
        if(currentPage > myPage.length-2){
            nextPage.className = "hidden";
            sub.className = "showing";
        }
        order.innerHTML = `${currentPage + 1}/5`;
        previous.className = "";
        myPage[currentPage - 1].className = "hidden";
        myPage[currentPage].className = "showing";
    });

    //switch page after clicking on "<"
    const previous = document.getElementById("previous");
    previous.addEventListener("click",function(){
        currentPage--;
        console.log(myPage[currentPage]);
        if(currentPage < 1){
            previous.className = "hidden";
            order.innerHTML = " ";
        }else{
            order.innerHTML = `${currentPage + 1}/5`;
        }
        myPage[currentPage + 1].className = "hidden";
        myPage[currentPage].className = "showing";
    });

    //go back one page after clicking on "back"
    const back = document.getElementById("back");
    back.addEventListener("click",function(){
        currentPage--;
        console.log(myPage[currentPage]);
        order.innerHTML = `${currentPage + 1}/5`;
        myPage[currentPage + 1].className = "hidden";
        myPage[currentPage].className = "showing";
        nextPage.className = "showing";
        sub.className = "hidden";
    });
   
    submit.addEventListener("click", function(e){
        console.log("submit buttom clicked");
        e.preventDefault();
        const formData = document.querySelectorAll("input[type=text]");
        console.log(formData);
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

        madlib.innerHTML = `<p>
        Dear <strong>${wordsArray[0]}, </strong> <br/><br/>
        We are pleased to inform you that you have been accepted at Witchcraft School in <span id="houseColor"><strong>${selectData}</strong></span>. You will need to <strong>${wordsArray[3]}</strong> to school with a <strong>${wordsArray[2]}</strong> <strong>${wordsArray[1]}</strong> ready. <br/><br/>
        Term begins on 1 September. We await your owl by no later than 31 July.<br/><br/>
        Yours sincerely, <br/><br/>
        Deputy Headmistress
        </p>`;

        //change the color for different house
        const houseColor = document.querySelector("#houseColor");
        const overlay = document.getElementById("overlay");
        const quit = document.getElementById("quit");
        if (selectData === "Gryffindor"){
            overlay.style.backgroundColor = "#670001";
            houseColor.style.color = "#CC9900";

           quit.addEventListener("mouseover",function(){
               console.log("over");
                quit.style.backgroundColor = "#CC9900";
                quit.style.color = "#670001";
            });
            quit.addEventListener("mouseout",function(){
                quit.style.backgroundColor = "whitesmoke";
                quit.style.color = "black";
            });
        }else if (selectData === "Slytherin"){
            overlay.style.backgroundColor = "#013300";
            houseColor.style.color = "#666666";

            quit.addEventListener("mouseover",function(){
                quit.style.backgroundColor = "#666666";
                quit.style.color = "#013300";
            });
            quit.addEventListener("mouseout",function(){
                quit.style.backgroundColor = "whitesmoke";
                quit.style.color = "black";
            });
        }else if (selectData === "Ravenclaw"){
            overlay.style.backgroundColor = "#032F5E";
            houseColor.style.color = "#946B2D";

            quit.addEventListener("mouseover",function(){
                quit.style.backgroundColor = "#946B2D";
                quit.style.color = "#032F5E";
            });
            quit.addEventListener("mouseout",function(){
                quit.style.backgroundColor = "whitesmoke";
                quit.style.color = "black";
            });
        }else if (selectData === "Hufflepuff"){
            overlay.style.backgroundColor = "#CC9900";
            houseColor.style.color = "#000005";

            quit.addEventListener("mouseover",function(){
                quit.style.backgroundColor = "#000005";
                quit.style.color = "#CC9900";
            });
            quit.addEventListener("mouseout",function(){
                quit.style.backgroundColor = "whitesmoke";
                quit.style.color = "black";
            });
        }

        document.getElementById('overlay').className = 'showing';

    }

    

})();