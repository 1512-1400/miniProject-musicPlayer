let $ = document;
let coverBox = $.querySelector(`.coverBox`);
let musicName = $.querySelector(`.musicName`);
let ownerName = $.querySelector(`.ownerName`);
let previous = $.querySelector(`.previous`);
let playPause = $.querySelector(`.play-pause`);
let next = $.querySelector(`.next`);
let musicFile = $.querySelector(`.musicFile`);
let musicList = [
  {aodiuSrc: "http://127.0.0.1:5500/01%20Love%20You%20Like%20a%20Love%20Song.mp3", imageSrc: `./large_1c5375bd-a805-4da3-8992-0bfdf59078ae.webp`, ownerName: `adele`, musicName:`set fire`},
  {aodiuSrc: "http://127.0.0.1:5500/Adele%20-%20Set%20Fire%20To%20The%20Rain%20(Navid%20Javadi%20Remix).mp3", imageSrc: `./large_9620dc27-30be-45b3-b54f-a531bc3cc213.webp`, ownerName: `eminem`, musicName:`never lose your mind`},
  {aodiuSrc: "http://127.0.0.1:5500/David%20Guetta%20ft.%20Taio%20Cruz%20-%20Little%20Bad%20Girl.mp3", imageSrc: `./upload_rVt13l3d.jpg`, ownerName: `shahan mozafari`, musicName:`yasi`},
];

function playPauseFiunction() {
  currentPlayPuseValidation =
    playPause.getAttribute(`src`) == `./icons8-play-48.png`;
  if (currentPlayPuseValidation) {
    playPause.src = `./icons8-pause-48.png`;
    musicFile.play();
  } else {
    playPause.src = `./icons8-play-48.png`;
    musicFile.pause();
  }
}

var nextI = 1;
function nextFunction() {
  musicFile.src = musicList[nextI].aodiuSrc;
  coverBox.style.backgroundImage = `url(${musicList[nextI].imageSrc})`;
  musicName.innerHTML = musicList[nextI].musicName;
  ownerName.innerHTML = musicList[nextI].ownerName;
  if ((nextI == musicList.length - 1)) {
    nextI = 0;
  }else{
    nextI++
  }
  musicFile.pause();
  playPause.src = `./icons8-play-48.png`;
}

var poeviousI = musicList.length - 1;
function previousFonction() {
  musicFile.src = musicList[poeviousI].aodiuSrc;
  coverBox.style.backgroundImage = `url(${musicList[poeviousI].imageSrc})`;
  musicName.innerHTML = musicList[poeviousI].musicName;
  ownerName.innerHTML = musicList[poeviousI].ownerName;
  console.log(poeviousI)
  if ((poeviousI <= 0)) {
    poeviousI = musicList.length - 1;
  }else{
    poeviousI--
  }
  musicFile.pause();
  playPause.src = `./icons8-play-48.png`;
}

playPause.addEventListener(`click`, playPauseFiunction);

next.addEventListener(`click`, nextFunction);

previous.addEventListener(`click`, previousFonction)
