
let questions = [
  {id:'q1', q:'What is 2+2?', choices:['3','4','5'], answer:1},
  {id:'q2', q:'Capital of France?', choices:['Berlin','Paris','Rome'], answer:1},
];

let idx = 0, score = 0;

const qbox = document.getElementById('qbox');
const scoreEl = document.getElementById('score');

function showQuestion(){
  const q = questions[idx];
  if(!q){ qbox.innerHTML = '<em>No more questions</em>'; return; }
  qbox.innerHTML = `<div><strong>${q.q}</strong></div>
    <div class="choices">${q.choices.map((c,i)=>`<button class="choice" data-i="${i}">${c}</button>`).join('')}</div>`;
}

document.addEventListener('click', e=>{
  if(e.target.matches('.choice')){
    const i = Number(e.target.dataset.i);
    const q = questions[idx];
    if(i === q.answer){ score++; scoreEl.textContent = score; e.target.classList.add('correct'); }
    else { e.target.style.borderColor = 'red'; }
    // reveal correct
    document.querySelectorAll('.choice')[q.answer].classList.add('correct');
    // disable further clicks
    document.querySelectorAll('.choice').forEach(b=>b.disabled = true);
  }
  if(e.target.id === 'nextBtn'){ idx++; showQuestion(); }
  if(e.target.id === 'startBtn'){ idx = 0; score = 0; scoreEl.textContent = score; showQuestion(); }
});

// TODOs:
// - Add question bank editor (add/edit/delete + tag/difficulty).
// - Implement timed mode (per-question and overall timer).
// - Persist high-scores & add review mode that shows explanations.
// - Add quiz categories and randomize question selection.
// - Improve UI/UX with better styles and animations.