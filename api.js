
// this part of the code i wrote indeed make a connection with 
// my asp.net core web api that sent email in contact part of my website 


const form = document.querySelector('#myform');

form.addEventListener('submit',async (e) =>{
    e.preventDefault();

    const name = document.querySelector('#Name').value;
    const email = document.querySelector('#Email').value;
    const body = document.querySelector('#Body').value;
    var BoxAlert = document.getElementById('BoxAlert');
    var WaitMessage = document.getElementById('WaitMessage');
    var SentMessage = document.getElementById('SentMessage');
    const data ={
        name,
        email,
        body
    };

    setTimeout(() => {
        BoxAlert.style.top ='0';
    }, 100);
    BoxAlert.style.visibility = 'visible';

    setTimeout(() => {
        WaitMessage.style.top ='0';
    }, 100);
    WaitMessage.style.visibility = 'visible';


    try{

        clearFormOnSubmit();

        const response = await fetch('https://emailapi.liara.run/SendEmail',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(data)
        });

        if (response.ok){

            WaitMessage.style.top ='-100px';
            
            setTimeout(() => {
                SentMessage.style.top ='0';
                BoxAlert.style.top = '0';
            }, 100);
            setTimeout(() => {
                SentMessage.style.top = '-100px'
                BoxAlert.style.top = '-100px';
            }, 2600);
            SentMessage.style.visibility = 'visible';
            console.log('ایمیل با موفقیت ارسال شد');
        }
        else{
            console.error('عملیات موفقیت آمیز نبود');
        }
    }
        
    catch (error){
        console.error('خطا ، دوباره تلاش کنید');
    }
});