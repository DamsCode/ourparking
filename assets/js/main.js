let montab = document.querySelectorAll('.feux');

montab[0].style.backgroundColor = "red";
//TODO : push les information de l'accueuils dans l'interface du handler.
//TODO : Place de parking doit etre inséré dans la visu du chauffeur.
//TODO : DE BASE FEU ROUGE
//TODO : QUAND HANDLER APPUIE OK -> FEU DEVIENT + Affiche COULEUR DE FLECHE en fonction du dépot
let addrow = (val) => {
    let tab = document.getElementById("tabhandler");
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    td.innerText = val;
    td2.innerText = h + ":" + m;

    let myselect = document.getElementById("combo").cloneNode(true);
    let btn = document.createElement("button");
    btn.addEventListener("click", () => btnaction(btn));
    btn.innerText = "Ok";
    td3.appendChild(myselect);
    td4.appendChild(btn);
    tr.appendChild(td);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    tab.appendChild(tr);
};
let recupid = (e) => {
    if (e.value == 1234) {

        document.getElementsByClassName("error")[0].innerHTML = "Acces Refused : Can Enter at 12:00"
    } else {
        let val = e.value;
        addrow(val);
        let plval = document.getElementById("selectpl").value;
        let divpl = document.getElementById("place");
        let p = divpl.querySelector("p");
        p.innerText = " ";
        p.innerText = plval;
        divpl.appendChild(p);
        window.location = '#wrapper';


    }

};
let val = document.getElementById("ref")

let btnaction = (e) => {
    let mybtn = e;
    mybtn.innerText = "Started";
    mybtn.disabled = true;
    montab[0].style.backgroundColor = "#393939";
    montab[2].style.backgroundColor = "green";
    document.getElementById("fleche").style.display = "block";
    let val = mybtn.parentElement.parentElement.getElementsByTagName('select')[0].value;
    switch (val) {
        case 'A':
            document.getElementById("fleche").style.color = "red";
            break;
        case 'B':
            document.getElementById("fleche").style.color = "blue";
            break;
        case "C":
            document.getElementById("fleche").style.color = "green";
            break;
        case "D":
            document.getElementById("fleche").style.color = "yellow";
            break;
    }
    // document.getElementById("fleche").style.color = "red";
};

document.getElementById("send").addEventListener("click", () => recupid(val));




document.getElementById('phone').addEventListener("click", () => {
    alert("Calling to : 5555")
})