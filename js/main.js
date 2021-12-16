function tabs () {
    const tabMenu = document.querySelector('.services-tabs');
    tabMenu.addEventListener('click', event => {
        if (event.target.tagName ==='LI') {
            change(event);
        }
    });
    const change = (event) => {
        if ( (event.target) !== (document.querySelector('.active_tab'))) {
            document.querySelector('.active_tab').classList.remove('active_tab');
        }
        if(!event.target.classList.contains('active_tab')){
            event.target.classList.add('active_tab');
        }
        /// знаю, що тут було б вірніше як в першому, щоб не видаляти, якщо клік на себе, але контент поки лишу так. Цикли прибрав)
        console.log(event.target.getAttribute('data-tab'));
        document.querySelector('.active_content').classList.remove('active_content');
        let id = event.target.getAttribute('data-tab');
        if(!document.getElementById(id).classList.contains('active_content')){
            document.getElementById(id).classList.add('active_content');

        }

    }



}

tabs();

document.addEventListener("DOMContentLoaded", function(event) {
    filterSelection("all");
});





function filterSelection(c) {
    let x, i;
    x = document.getElementsByClassName("work-filterDiv");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "work-show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "work-show");
    }
    colohead();
}

// Show filtered elements
function w3AddClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}



function colohead() {

// Add active class to the current control button (highlight it)
    let btnContainer = document.getElementById("work-myBtnContainer");
    let btns = btnContainer.getElementsByClassName("work-btn");

    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            let current = document.getElementsByClassName("active");
            console.log(current);
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }
}


function loadworks (){

    let s=document.querySelector('.work-container');
    console.log(s);

    for (let i = 0; i < 12; i++) {
        if (s.childElementCount<36) {
            s.insertAdjacentHTML('beforeend',`  <div class="work-filterDiv graphic wordpress landing work-show"><img src="./images/work/work1.png" alt="work"> <div class="work-item-ovelay">   <div class="work-item-ovelay-upline"></div><div class="work-item-ovelay-line1">  <a href="#" class="work-item-ovelay-line1-link1"><img src="./images/link-2-small.png" alt="link"></a>  <a href="#" class="work-item-ovelay-line1-link2"><div class="link2-design"></div></a>       </div>        <div class="work-item-ovelay-line2">    <p class="work-item-ovelay-headline">creative design</p>   <p class="work-item-ovelay-description">Web Design</p>   </div>          </div>        </div>`)
        }
        if (s.childElementCount===36) {
            console.log(s.childElementCount);
            document.querySelector(".work-load-more").remove();
        }



    }



}