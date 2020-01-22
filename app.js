function lightsensor(){
    if ( 'AmbientLightSensor' in window ) {
      const sensor = new AmbientLightSensor();
      sensor.onreading = () => {
        console.log('Current light level:', sensor.illuminance);
        if(sensor.illuminance > 100) {
          alert("Onpa kirkasta! Nkykyinen taso: " + sensor.illuminance);
        }
      };
      sensor.onerror = (event) => {
        console.log(event.error.name, event.error.message);
      };
      sensor.start();
    }
    else {
      console.log("Valosensori ei käytettävissä");
    }
    
  }
  lightsensor();
  console.log("Täällä ollaan");