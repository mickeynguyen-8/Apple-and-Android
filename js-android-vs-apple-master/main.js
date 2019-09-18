//AddEventListener
document.getElementById('Android').addEventListener('click', clickAndroid);
document.getElementById('Apple').addEventListener('click', clickApple);


function clickAndroid() {
    //Change the image to Android solo
    document.getElementById('img1').src = 'images/Android-Logo.jpg';
    //Change the name link to Android Home
    document.getElementById('link1').innerHTML = 'Android Home';
    //Change the Explore button background color to #a4c93b
    document.getElementById('link1').style.backgroundColor = '#a4c93b';
    //Change the Explore link to http://wwww.android.com
    document.getElementById('link1').href = 'https://www.android.com/';
    //Change the body backgroundcolor
    document.body.style.backgroundColor = '#a4c93b';
}

function clickApple() {
    //Change the image to Android solo
    document.getElementById('img1').src = 'images/Apple-Logo.jpg';
    //Change the name link to Android Home
    document.getElementById('link1').innerHTML = 'Apple Home';
    //Change the Explore button background color to #a4c93b
    document.getElementById('link1').style.backgroundColor = '#b6bcca';
    //Change the Explore link to http://wwww.android.com
    document.getElementById('link1').href = 'https://www.apple.com/';
    //Change the body backgroundcolor
    document.body.style.backgroundColor = '#b6bcca';
}
