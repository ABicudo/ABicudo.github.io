function addEvents(){

    let category =document.getElementById("categoryList")
    
    for (let i=0;i<category.children.length;i++)
        category.children[i].addEventListener('click',multipleChecks);

    let time = document.getElementById('timeList');

    for (let i=0;i<time.children.length;i++)
        time.children[i].addEventListener('click',onlyCheck);
    
}

addEvents()

function multipleChecks(){
    if (this.classList.contains('checked'))
        this.setAttribute('class', 'unchecked');
    else
        this.setAttribute('class', 'checked');
}

function onlyCheck(){
    let timeList = document.getElementById('timeList');
    for (let i=0;i<timeList.children.length;i++)
        timeList.children[i].setAttribute('class','unchecked');

    this.setAttribute('class','checked');
}

