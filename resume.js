function  generateCV(){
    let name = document.getElementById('nameField').value;
    let namet = document.getElementById('nameFieldt');
    namet.innerHTML= name; 
    let namt = document.getElementById('namefielt');
    namt.innerHTML= name;

    
    document.getElementById('fbFieldt').innerHTML = document.getElementById('fbField').value;
    document.getElementById('instaFieldt').innerHTML = document.getElementById('instaField').value;
    document.getElementById('linkedFieldt').innerHTML = document.getElementById('linkedField').value;

    document.getElementById('objectivet').innerHTML = document.getElementById('Objective').value;

    document.getElementById('wet1').innerHTML = document.getElementById('work1').value;
    document.getElementById('wet2').innerHTML = document.getElementById('work2').value;
    document.getElementById('wet3').innerHTML = document.getElementById('work3').value;
    document.getElementById('wet4').innerHTML = document.getElementById('work4').value;

    document.getElementById('qua1').innerHTML = document.getElementById('aq1').value;
    document.getElementById('qua2').innerHTML = document.getElementById('aq2').value;
    document.getElementById('qua3').innerHTML = document.getElementById('aq3').value;
    document.getElementById('qua4').innerHTML = document.getElementById('aq4').value;

    document.getElementById('contactFieldt').innerHTML = document.getElementById('contactField').value;
    document.getElementById('addressFieldt').innerHTML = document.getElementById('AddressField').value;

    
    
}

