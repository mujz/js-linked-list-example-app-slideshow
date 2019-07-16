const slideShow = new LinkedList();
let currentSlide = null;

function addSlide(txt) {
  const slide = new ListNode(txt);
  currentSlide = slide;
  slideShow.add(slide);
  updateViewPort();
}

function removeSlide() {
  slideShow.delete(currentSlide);
  currentSlide = slideShow.head;
  updateViewPort();
}

function nextSlide() {
  if (currentSlide !== null && currentSlide.next !== null) {
    currentSlide = currentSlide.next;
    updateViewPort();
  }
}

function replay() {
  currentSlide = slideShow.head;
  updateViewPort();
}

function goToLastSlide() {
  currentSlide = slideShow.tail;
  updateViewPort();
}

function updateViewPort() {
  const viewport = document.getElementById('viewport');
  if (currentSlide !== null) {
    viewport.innerHTML = currentSlide.data;
  } else {
    viewport.innerHTML = '';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const input = document.getElementById('slide-text');

  input.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      addSlide(input.value);
      input.value = '';
    }
  });

  const btnNextSlide = document.getElementById('btn-next-slide');

  btnNextSlide.addEventListener('click', nextSlide);

  const btnReplay = document.getElementById('btn-replay');

  btnReplay.addEventListener('click', replay);

  const btnLastSlide = document.getElementById('btn-last-slide');

  btnLastSlide.addEventListener('click', goToLastSlide);

  const btnDelete = document.getElementById('btn-delete-slide');

  btnDelete.addEventListener('click', removeSlide);
});
