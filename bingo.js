const bingoItems = [
    "Comments on number of cops",
    "My Friend Let Me Borrow It",
    "Bench Trial",
    "I dont know his name",
    "No Eyebrows",
    "New Profile",
    "News Shows Up",
    "Dominator/Comet 10-80",
    "Motorcycle 10-80",
    "Call at Burgershot",
    "Someone asks for Job",
    "BMX hits Cruiser",
    "Person cant hear/talk",
    "Doesnt know how to First Person",
    "Civ walks up on Active Scene",
    "Color Blind",
    "Complains about Locals",
    "Asks to Repeat/Doesnt Understand Miranda",
    "Google Lawyer",
    "Call at apartments",
    "Mentions Scuff",
    "Tunnel Escape",
    "Threatens your Badge / Asks Badge Number",
    "Pleads Not Guilty",
    "Hides Evidence in Glovebox"
];

var bingoElement = document.getElementById('bingo-items');

function newBingoItem(item) {
    divElement = document.createElement('div');
    divElement.setAttribute("class", "bingo-item");

    textElement = document.createElement('p');
    textElement.setAttribute("class", "bingo-item-text")
    textElement.innerHTML = item

    checkElement = document.createElement('span');
    checkElement.setAttribute("id", item);
    checkElement.setAttribute("class", "far fa-circle");
    checkElement.setAttribute("onclick", "checkBingoItem(this)");


    divElement.appendChild(textElement);
    divElement.appendChild(checkElement);

    return divElement;

}

function checkBingoItem(item) {
    //item.classList.toggle('far');
    item.removeAttribute("class")
    item.classList.toggle('fas');
    item.classList.toggle('fa-check');
}

for (let item of bingoItems) {
   bingoElement.appendChild(newBingoItem(item));
}