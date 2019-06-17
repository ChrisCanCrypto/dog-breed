'use strict';

function getDogImg(breed){
    fetch('https://dog.ceo/api/breed/' + breed + '/images/random')
        .then(response => { 
            if (!response.ok) { throw response }
            return response.json()
        })
        .then(responseJson => {
            console.log(responseJson)
        })
        .catch( err => alert('Sorry, that breed is not in the database. Try another one!'));
}

function watchForm(){
    $('form').submit(event => {
        event.preventDefault();
        let breed = $('input[type=text]').val();
        getDogImg(breed);
    });
}

$(function(){
    console.log('App loaded... waiting for submit.');
    watchForm();
});