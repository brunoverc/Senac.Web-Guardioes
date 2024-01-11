const members = [
  { name: 'Peter Quill', id: 'peter' },
  { name: 'Gamora Titan', id: 'gamora' },
  { name: 'Drax o Destruidor', id: 'drax' },
  { name: 'Mantis', id: 'mantis' },
  { name: 'Rocket Raccoon', id: 'rocket' },
  { name: 'I am Groot', id: 'groot' },
]

let activeMember = 0;
const images = document.getElementById('images');
const memberName = document.getElementById('member__name');

function changeMember(memberId){
  activeMember = memberId;
  const member = members[activeMember];
  console.log(activeMember, member);

  images.style.transform = `translateY(${-100 * activeMember}vh)`;
  //alterar a classe do member name
  //alterar o nome escrito

  changeStatusButtons();
}

function changeStatusButtons(){
  const prev = document.getElementById('button__prev');
  const isFirst = activeMember === 0;
  prev.disabled = isFirst; 

  const next = document.getElementById('button__next');
  const isLast = activeMember === members.length - 1; 
  next.disabled = isLast;
}

function navigationMember(direction){
  changeMember(activeMember + direction);
}