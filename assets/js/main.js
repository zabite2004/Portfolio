var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 1000,
    },
});


// Form
const form = document.querySelector("#form")

const errFname = document.querySelector(".errFname")
const errLname = document.querySelector(".errLname")
const errEmail = document.querySelector(".errEmail")
const errmessage = document.querySelector(".errmessage")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    errFname.innerHTML = "";
    errLname.innerHTML = "";
    errEmail.innerHTML = "";
    errmessage.innerHTML = "";

    const fname = document.querySelector("#fname").value
    const lname = document.querySelector("#lname").value
    const email = document.querySelector("#email").value
    const message = document.querySelector("#message").value



    let isValid = true;

    const nameRegex = /^[A-Za-z]+$/;
    const surnameRegex = /^[A-Za-z]+$/;

    if (fname.trim() === "") {
        errFname.innerText = "*name field cannot be empty"
        isValid = false
    } else if (!nameRegex.test(fname)) {
        errFname.innerText = "*only letters are allowed"
        isValid = false
    }

    if (lname.trim() === "") {
        errLname.innerText = "*last name field cannot be empty"
        isValid = false
    } else if (!surnameRegex.test(lname)) {
        errLname.innerText = "*only letters are allowed"
        isValid = false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === "") {
        errEmail.innerText = "*email field cannot be empty"
        isValid = false
    } else if (!emailRegex.test(email)) {
        errEmail.innerText = "*email was not completed correctly"
        isValid = false
    }

    if (message.trim() === "") {
        errmessage.innerText = "*mesage field cannot be empty"
        isValid = false
    }

    if (isValid) {
        Swal.fire({
            icon: 'success',
            title: 'Done',
            text: "Message Sent",
        }).then(() => {
            document.querySelector("#fname").value = ""
            document.querySelector("#lname").value = ""
            document.querySelector("#email").value = ""
            document.querySelector("#message").value = ""
        })
    }
})

//Accordion
const accordion = document.getElementsByClassName("faq")
for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {

        for (let j = 0; j < accordion.length; j++) {
            console.log(accordion.length)
            if (j !== i) {
                accordion[j].classList.remove("active");
            }
        }
        this.classList.toggle("active");
    });

}





// Tab Section

let openSkill = (evt, skill) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(skill).style.display = "block";
    evt.currentTarget.className += " active";
}

const softBtn = document.querySelector("#softBtn")
const hardBtn = document.querySelector("#hardBtn")

softBtn.addEventListener("click", () => {
    openSkill(event, 'soft')
})

hardBtn.addEventListener("click", () => {
    openSkill(event, 'hard')
})


//Scroll to Top
const btnScrollToTop = document.querySelector(".btnScrollToTop");

// scroll to top of page when button clicked
btnScrollToTop.addEventListener("click", e => {
  window.scrollTo({
    top: 0,
    left: 0,
      behavior: "smooth"
  });
});

// toggle 'scroll to top' based on scroll position
window.addEventListener('scroll', e => {
  btnScrollToTop.style.display = window.scrollY > 20 ? 'block' : 'none';
});



//Sticky Navbar
const header=document.querySelector(".header");

window.onscroll=function(){
    if(window.scrollY >70){
header.classList.add("sticky")
    }else{
        header.classList.remove("sticky")
    }
}




