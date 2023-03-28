document.querySelector(".header-main-container").addEventListener("click", () => {
  requestGyroscopeAccess()
})
function requestGyroscopeAccess() {
    if (DeviceOrientationEvent) {
      DeviceOrientationEvent.requestPermission()
        .then(response => {
          if (response === 'granted') {
            window.addEventListener('deviceorientation', (event) => {
              console.log(event.alpha, event.beta, event.gamma);
            });
          }
        })
        .catch(console.error);
    } else {
      console.warn("Le gyroscope n'est pas pris en charge sur ce périphérique.");
    }
  };