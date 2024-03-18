
// this part of the code i wrote indeed make a connection with 
// my asp.net core web api that sent email in contact part of my website 


const form = document.querySelector('#myform');

form.addEventListener('submit',async (e) =>{
    e.preventDefault();

    const name = document.querySelector('#Name').value;
    const email = document.querySelector('#Email').value;
    const body = document.querySelector('#Body').value;
    
    const data ={
        name,
        email,
        body
    };

    try{

        const response = await fetch('https://emailapi.liara.run/SendEmail',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(data)
        });

        if (response.ok){
            console.log('ایمیل با موفقیت ارسال شد');
            alert("ایمیل با موفقیت ارسال شد")
        }
        else{
            console.error('عملیات موفقیت آمیز نبود');
        }
    }
        
    catch (error){
        console.error('خطا ، دوباره تلاش کنید');
    }
});