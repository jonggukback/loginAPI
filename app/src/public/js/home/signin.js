const id = document.querySelector('#id'),
    pw = document.querySelector('#password'),
    email = document.querySelector('#email'),
    gender = document.querySelector('#gender'),
    address = document.querySelector('#address'),
    address2 = document.querySelector('#address2'),
    btn = document.querySelector('#signinbtn');

btn.addEventListener('click',()=>{
    const req = {
        id: id.value,
        pw: pw.value,
        email: email.value,
        gender: gender.options[gender.selectedIndex].text,
        address: address.value,
        address2: address2.value,
    }

    fetch("/signup", {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(req),
    })
    .then((res)=>res.json())
    .then((res)=>{
        if (res.success) {
            alert('가입이 완료되었습니다.');
            location.href = '/';
        }else {
            alert(res.msg);
        }
    })
    .catch((err)=>{
        console.error(new Error('회원가입 중 에러 발생!'));
    })
})