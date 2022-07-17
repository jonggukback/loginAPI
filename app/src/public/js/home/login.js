const id = document.querySelector('#id'),
    pw = document.querySelector('#pw'),
    loginBtn = document.querySelector('#loginBtn');

loginBtn.addEventListener('click',login);

function login(){
    if(!id.value) return alert('아이디를 입력해주세요.');
    if(!pw.value) return alert('비밀번호를 입력해주세요.');

    const req = {
        id : id.value,
        pw : pw.value,
    }
    console.log(JSON.stringify(req));

    fetch("/", {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(req),
    })
    .then((res)=>res.json())
    .then((res)=>{
        if (res.success) {
            location.href = '/mypage';
        }else {
            alert(res.msg);
        }
    })
    .catch((err)=>{
        console.error(new Error('로그인 중 에러 발생!'));
    })
}