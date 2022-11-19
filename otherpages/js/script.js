const head_default = [
  {
    name: "Parth Sharma",
    theme: "red",
    photoUrl: "parth.jpg",
    github_Url: "https://github.com/ParthSharma-jss",
    linkedIn: "https://www.linkedin.com/in/parth-sharma-1ba150197/",
    job: "President",
    jobIcon: "code.svg",
    year: "IV",
    
  },
  {
    name: "Kushal Gautam",
    theme: "blue",
    photoUrl: "kushal.jpg",
    github_Url: "https://github.com/kushalgautam",
    linkedIn: "https://www.linkedin.com/in/kushal-gautam-870b471a4",
    job: "CTC",
    jobIcon: "design.svg",
    year: "IV",
   
  },

  {
    name: "Neeraj Maurya",
    theme: "red",
    photoUrl: "neeraj.jpg",
    github_Url: "https://github.com/Neerajx11",
    linkedIn: "https://www.linkedin.com/in/mauryaneeraj11/",
    job: "General Secretory",
    jobIcon: "code.svg",
    year: "IV",
   
  },
];
const head_ex = [
  {
    name: "Shashank Mishra",
    theme: "red",
    photoUrl: "Shashank.jpg",
    github_Url: "https://github.com/Shashank03200",
    linkedIn: "https://www.linkedin.com/in/shashank03210/",
    job: "Recruitment head",
    jobIcon: "code.svg",
    year: "IV",
   
  },
  {
    name: "Nitya Tiwari",
    theme: "yellow",
    photoUrl: "nitya.jpg",
    github_Url: "https://github.com/nityatiwari13",
    linkedIn: "https://www.linkedin.com/in/nitya-tiwari-45bb491a4/",
    job: "Event head",
    jobIcon: "zero.svg",
    year: "IV",
   
  },
];
const tech_default = [
  {
    name: "Samyak Singh",
    theme: "green",
    photoUrl: "samyak.jpg",
    github_Url: "https://github.com/SAMYAK99",
    linkedIn: "https://www.linkedin.com/in/samyak-singh-007abc",
    job: "Android head",
    jobIcon: "android.svg",
    year: "IV",
    
  },
  {
    name: "Rudrakshi",
    theme: "red",
    photoUrl: "Rudrakshi.jpg",
    github_Url: "https://github.com/rudrakshi99",
    linkedIn: "https://www.linkedin.com/in/rudrakshi-soni/",
    job: "Web developer head",
    jobIcon: "code.svg",
    year: "IV",
    
  },
  {
    name: "Diksha Shukla",
    theme: "red",
    photoUrl: "diksha.jpg",
    github_Url: "https://github.com/dikshashukla455",
    linkedIn: "https://www.linkedin.com/in/deeksha-shukla-98aa1a196",
    job: "Technical lead",
    jobIcon: "code.svg",
    year: "IV",
    
  },
  {
    name: "Gauransh Verma",
    theme: "purple",
    photoUrl: "gauransh.jpg",
    github_Url: "https://github.com/gaurverma",
    linkedIn: "https://www.linkedin.com/in/gauransh-verma-5a5182191",
    job: "Programming head",
    jobIcon: "ml.svg",
    year: "IV",
    
  },
  {
    name: "Ayush Paharia",
    theme: "red",
    photoUrl: "ayush.jpg",
    github_Url: "https://github.com/AyushPaharia1812",
    linkedIn: "https://www.linkedin.com/in/ayushcodes1812",
    job: "Backend head",
    jobIcon: "code.svg",
    year: "IV",
  },

];
const tech_teams = [
  {
    name: "Anuj Agarwal",
    theme: "red",
    photoUrl: "anuj.jpeg",
    github_Url: "https://github.com/anujagarwal1161",
    linkedIn: "https://www.linkedin.com/in/anuj-agarwal-3396bb1bb",
    job: "Developer",
    jobIcon: "code.svg",
    year: "III",
  },
  {
    name: "Suyash Rastogi",
    theme: "red",
    photoUrl: "Suyash.jpg",
    github_Url: "https://github.com/suyashrastogi7",
    linkedIn: "https://www.linkedin.com/in/suyash-rastogi/",
    job: "Developer",
    jobIcon: "code.svg",
    year: "III",
  },
  {
    name: "Krapi ",
    theme: "red",
    photoUrl: "krapi.jpg",
    github_Url: "https://github.com/krapirastogi",
    linkedIn: "https://www.linkedin.com/in/krapi-rastogi-ab7307213",
    job: "Developer",
    jobIcon: "code.svg",
    year: "III",
  },
  {
    name: "Ayush Pandey",
    theme: "yellow",
    photoUrl: "ayushP.jpg",
    github_Url: "https://github.com/A-yush001",
    linkedIn: "https://www.linkedin.com/in/ayush-pandey-446447214/",
    job: "Programmer",
    jobIcon: "zero.svg",
    year: "III",
  },
];

const des_default = [
  {
    name: "Anmol Puri",
    theme: "blue",
    photoUrl: "anmol.jpg",
    github_Url: "https://github.com/1AnmolPuri1",
    linkedIn: "https://www.linkedin.com/in/anmol-puri-401b441a4",
    job: "Design head",
    jobIcon: "design.svg",
    year: "IV",
  },
];
const des_teams = [
  {
    name: "Arnika sharma",
    theme: "blue",
    photoUrl: "arnika.jpg",
    github_Url: "https://github.com/anika0318",
    linkedIn: "linkedin.com/in/arnika-sharma-53496320b",
    job: "Designer",
    jobIcon: "design.svg",
    year: "III",
  },
  {
    name: "Ashwin Raj Vats",
    theme: "blue",
    photoUrl: "ashwin.jpg",
    github_Url: "http://www.github.com/ashwinrajvats",
    linkedIn: "https://www.linkedin.com/in/ashwin-raj-vats-5911a41b7",
    job: "Designer",
    jobIcon: "design.svg",
    year: "III",
  },
];

const headDef = document.getElementById("head-def");
const headBtn = document.getElementById("head-btn");

const techDef = document.getElementById("tech-def");
const techBtn = document.getElementById("tech-btn");

const desDef = document.getElementById("des-def");
const desBtn = document.getElementById("des-btn");

let headClose = true;
let techClose = true;
let desClose = true;
let eventAdder = (booleanVal, el, btn, initial, extraCon) => {
  btn.addEventListener("click", () => {
    if (booleanVal) {
      cardAdder(extraCon, el);
      el.scrollIntoView({ behavior: "smooth" });
      btn.textContent = "-";
    } else {
      el.innerHTML = "";
      cardAdder(initial, el);
      el.scrollIntoView({ behavior: "smooth" });
      btn.textContent = "+";
    }
    booleanVal = !booleanVal;
  });
};
let cardAdder = (arr, el) => {
  arr.map((e) => {
    el.innerHTML += `
    <div class="tCard">
    <div class="tCard-inner">
    <div class="tCard-front">
    <div class="tCard-img">
    <img src="./media/team/${e.photoUrl}" alt="">
    <span class="tCard-yr">${e.year}</span>
    </div>
    <div class="tCard-text">
    <div class="tCard-ud">
    <div class="tCard-name">
    ${e.name}
                    </div>
                    <div class="tCard-job">
                    ${e.job}
                    </div>
                    </div>
                    <div class="tCard-jobicon bg-${e.theme}">
                    <img src="./media/${e.jobIcon}" alt="">
                    </div>
                    </div>
                    </div>
                    <div class="tCard-back">
                    <div class="tCard-btn">
                <a href=${e.github_Url}
                target="=blank" class="btn-git"><i class="fab fa-github tCard-back-icon"></i></a>
                <a href=${e.linkedIn}
                target="=blank" class="btn-link"><i class="fab fa-linkedin tCard-back-icon"></i></a>
             </div>
        </div>
        </div>
        </div>
        `;
  });
};
//For head section
eventAdder(headClose, headDef, headBtn, head_default, head_ex);
cardAdder(head_default, headDef);

//For technical section
eventAdder(techClose, techDef, techBtn, tech_default, tech_teams);
cardAdder(tech_default, techDef);
// cardAdder(tech_teams, techDef);

//For designing section
eventAdder(desClose, desDef, desBtn, des_default, des_teams);
cardAdder(des_default, desDef);
// cardAdder(des_teams, desDef);
