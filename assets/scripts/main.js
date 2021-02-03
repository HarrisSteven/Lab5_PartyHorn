var volumeNumber = document.getElementById('volume-number');
var volumeSlider = document.getElementById('volume-slider');
var volumeImage = document.getElementById('volume-image');
var soundImage = document.getElementById('sound-image');
var airHorn = document.getElementById('radio-air-horn');
var carHorn = document.getElementById('radio-car-horn');
var partyHorn = document.getElementById('radio-party-horn');
var honkButton = document.getElementById('honk-btn');
var hornSound = document.getElementById('horn-sound');

volumeNumber.addEventListener('input', setSliderValue);
volumeSlider.addEventListener('input', setNumberValue);
airHorn.addEventListener('input', setAirHorn);
carHorn.addEventListener('input', setCarHorn);
partyHorn.addEventListener('input', setPartyHorn);
honkButton.addEventListener('click', function(event) {
  event.preventDefault();
  hornSound.play();
});

function setSliderValue() {
  volumeSlider.value = volumeNumber.value;
  updateVolumeImage(volumeSlider.value);
}

function setNumberValue() {
  volumeNumber.value = volumeSlider.value;
  updateVolumeImage(volumeNumber.value);
}

function updateVolumeImage(loudnessVal) {
  if(loudnessVal != 0) {
    honkButton.disabled = false;
  }
  if(loudnessVal >= 67) {
    volumeImage.src="./assets/media/icons/volume-level-3.svg"
  }
  else if(loudnessVal >= 34) {
    volumeImage.src="./assets/media/icons/volume-level-2.svg"
  }
  else if(loudnessVal >= 1) {
    volumeImage.src="./assets/media/icons/volume-level-1.svg"
  }
  else {
    honkButton.disabled = true;
    volumeImage.src="./assets/media/icons/volume-level-0.svg"
  }
  hornSound.volume = loudnessVal/100;
}

function setAirHorn() {
  soundImage.src = './assets/media/images/air-horn.svg';
  hornSound.src = './assets/media/audio/air-horn.mp3';
}

function setCarHorn() {
  soundImage.src = './assets/media/images/car.svg';
  hornSound.src = './assets/media/audio/car-horn.mp3';
}

function setPartyHorn() {
  soundImage.src = './assets/media/images/party-horn.svg';
  hornSound.src = './assets/media/audio/party-horn.mp3';
}

