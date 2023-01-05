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
for (let i = 0; i < councilList.length; i += 1) {
  councilCards.innerHTML += `
    <div class="judges">
        <div>
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
  </div>
    `;
}