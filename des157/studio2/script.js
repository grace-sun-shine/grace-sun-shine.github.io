(function () {
    "use strict";
    console.log("reading js");

    const container = document.querySelector('#container');
    const hotSpots = document.querySelectorAll('#container div');
    const theImg = document.querySelector('div img');

    const closeBtns = document.querySelectorAll('.close');

    const topleft = document.querySelector('#topleft');
    const center = document.querySelector('#center');
    const topright = document.querySelector('#topright');
    const bottomleft = document.querySelector('#bottomleft');
    const bottomright = document.querySelector('#bottomright');

    /*-----------mouseover for zoom in------------*/
    hotSpots.forEach(function (eachSpot) {
        eachSpot.addEventListener('mouseover', zoomPhoto);
        eachSpot.addEventListener('mouseout', function () {
            theImg.className = 'start';
        });
    });

    function zoomPhoto(event) {
        const thisCorner = event.target.id;
        console.log(thisCorner);
        switch (thisCorner) {
            case 'topleft': theImg.className = 'topleft'; break;
            case 'topright': theImg.className = 'topright'; break;
            case 'bottomleft': theImg.className = 'bottomleft'; break;
            case 'bottomright': theImg.className = 'bottomright'; break;
            case 'center': theImg.className = 'center'; break;
        }
    }

    /*-----------close tab------------*/
    for (const eachBtn of closeBtns) {
        eachBtn.addEventListener('click', function (event) {
            event.preventDefault();
            document.querySelector('.showing').className = 'hidden';
        });
    }

    /*-----------click to turn on overlay------------*/
    topleft.addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('picFirst').className = 'showing';
        document.getElementById('overlay').className = 'showing';
    });

    center.addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('picSecond').className = 'showing';
        document.getElementById('overlay').className = 'showing';
    });

    topright.addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('picThird').className = 'showing';
        document.getElementById('overlay').className = 'showing';
    });

    bottomleft.addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('picForth').className = 'showing';
        document.getElementById('overlay').className = 'showing';
    });

    bottomright.addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('picFifth').className = 'showing';
        document.getElementById('overlay').className = 'showing';
    });

})();