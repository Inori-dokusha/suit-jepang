// Play Music
function playMusic() {
  const playButton = document.querySelector(".music");
  const icon = document.querySelector("i");
  const audio = document.querySelector("audio");
  playButton.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      icon.setAttribute("class", "ti ti-player-play-filled");
    } else {
      audio.pause();
      icon.setAttribute("class", "ti ti-player-pause-filled");
    }
  });
}
playMusic();