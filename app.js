const MyDavidFamily = [
  {
    name: "John",
    children: ["Ali", "MOhsin", "Alex", "Tajwar"],
  },
  {
    name: "Alx",
    children: ["Ayaz", "Faizan", "Karem", "Sajjad"],
  },
  {
    name: "Cendrella",
    children: ["Michelle", "Sarah", "Shireen", "Sajjad"],
  },
];

let david = document.createElement("h1");
david.innerHTML = "Mr David";
document.body.append(david);

let parent = document.createElement("ul");
document.body.append(parent);

let john = document.createElement("li");
parent.appendChild(john);
john.innerHTML = MyDavidFamily[0].name;

let johnChilderns = document.createElement("ul");
john.appendChild(johnChilderns);

let johnSon1 = document.createElement("li");
johnChilderns.appendChild(johnSon1);
johnSon1.innerHTML = MyDavidFamily[0].children[0];

let johnSon2 = document.createElement("li");
johnChilderns.appendChild(johnSon2);
johnSon2.innerHTML = MyDavidFamily[0].children[1];

let johnSon3 = document.createElement("li");
johnChilderns.appendChild(johnSon3);
johnSon3.innerHTML = MyDavidFamily[0].children[2];

let johnSon4 = document.createElement("li");
johnChilderns.appendChild(johnSon4);
johnSon4.innerHTML = MyDavidFamily[0].children[3];

// Alex

let Alex = document.createElement("li");
parent.appendChild(Alex);
Alex.innerHTML = MyDavidFamily[1].name;

let AlexChilderns = document.createElement("ul");
Alex.appendChild(AlexChilderns);

let AlexSon1 = document.createElement("li");
AlexChilderns.appendChild(AlexSon1);
AlexSon1.innerHTML = MyDavidFamily[1].children[0];

let AlexSon2 = document.createElement("li");
AlexChilderns.appendChild(AlexSon2);
AlexSon2.innerHTML = MyDavidFamily[1].children[1];

let AlexSon3 = document.createElement("li");
AlexChilderns.appendChild(AlexSon3);
AlexSon3.innerHTML = MyDavidFamily[1].children[2];

let AlexSon4 = document.createElement("li");
AlexChilderns.appendChild(AlexSon4);
AlexSon4.innerHTML = MyDavidFamily[1].children[3];

// Cendrella

let Cendrella = document.createElement("li");
parent.appendChild(Cendrella);
Cendrella.innerHTML = MyDavidFamily[2].name;

let CendrellaChilderns = document.createElement("ul");
Cendrella.appendChild(CendrellaChilderns);

let CendrellaSon1 = document.createElement("li");
CendrellaChilderns.appendChild(CendrellaSon1);
CendrellaSon1.innerHTML = MyDavidFamily[2].children[0];

let CendrellaSon2 = document.createElement("li");
CendrellaChilderns.appendChild(CendrellaSon2);
CendrellaSon2.innerHTML = MyDavidFamily[2].children[1];

let CendrellaSon3 = document.createElement("li");
CendrellaChilderns.appendChild(CendrellaSon3);
CendrellaSon3.innerHTML = MyDavidFamily[2].children[2];

let CendrellaSon4 = document.createElement("li");
CendrellaChilderns.appendChild(CendrellaSon4);
CendrellaSon4.innerHTML = MyDavidFamily[2].children[3];
// end
let end = document.createElement("h1");
end.innerHTML = " \nEND TASK";
document.body.append(end);
