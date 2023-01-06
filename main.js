const hamburger = document.querySelector('.hamburger_menu');
const navMenu = document.querySelector('.nav_menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.menu_link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

window.addEventListener("resize", (event) => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
});



const councilCards = document.querySelector('.judges_wrapper');

const councilList = [
  {
    councilJudge: 'Morgan Linda',
    image: 'images/judge_one.jpeg',
    description: '2020 Chess masters tournament winner and Philanthropist',
    bio: 'Linda is an experienced chess judge known for fair decision making and upholding tournament integrity.',
  },
  {
    councilJudge: 'London Green',
    image: 'images/judge_two.jpeg',
    description: '2020 Chess masters tournament winner and Philanthropist',
    bio: 'Linda is an experienced chess judge known for fair decision making and upholding tournament integrity.',
  },
  {
    councilJudge: 'Melissa Fin Audrey',
    image: 'images/judge_three.png',
    description: '2020 Chess masters tournament winner and Philanthropist',
    bio: 'Linda is an experienced chess judge known for fair decision making and upholding tournament integrity.',
  },
  {
    councilJudge: 'Jordan P. Blue',
    image: 'images/judge_four.jpeg',
    description: '2020 Chess masters tournament winner and Philanthropist',
    bio: 'Linda is an experienced chess judge known for fair decision making and upholding tournament integrity.',
  },
  {
    councilJudge: 'Gretta Simons',
    image: 'images/judge_five.jpeg',
    description: '2020 Chess masters tournament winner and Philanthropist',
    bio: 'Linda is an experienced chess judge known for fair decision making and upholding tournament integrity.',
  },
  {
    councilJudge: 'Richard Lee',
    image: 'images/judge_six.jpeg',
    description: '2020 Chess masters tournament winner and Philanthropist',
    bio: 'Linda is an experienced chess judge known for fair decision making and upholding tournament integrity.',
  },
];
if(councilCards) { 
  for (let i = 0; i < councilList.length; i += 1) {
    councilCards.innerHTML += `
      <div class="judges">
          <div class="judges_image">
              <img src="${councilList[i].image}" alt="speakers">
          </div>
          <div class="judge_title_wrapper"> 
              <h4>${councilList[i].councilJudge}</h4>
              <div class="judge_description">
                  ${councilList[i].description}
              </div>
              <hr>
              <p>${councilList[i].bio}</p>
          </div>
    </div>`;
  }
};


const moreButton = document.querySelector(".more_button_wrapper");
const judges = document.querySelector(".judges_wrapper");

moreButton.addEventListener('click', () => {
  judges.classList.toggle('hidden_judges');
  
  if (moreButton.textContent.includes( 'More')) {
    moreButton.textContent = 'Less';
  } else {
    moreButton.textContent = 'More';
  };

});


// hamburger.addEventListener('click', () => {
//   hamburger.classList.toggle('active');
//   menu.classList.toggle('active');
// });

// closeMenu.addEventListener('click', () => {
//   hamburger.classList.remove('active');
//   menu.classList.remove('active');
// });


