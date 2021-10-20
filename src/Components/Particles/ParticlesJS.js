import React from "react";
import Particles from 'react-particles-js';
import '../Main/Main.css'

const ParticlesJS = () => {
  return (
    <>
       <Particles
	   className="particle-canvas"
	   params={{
		"background": {
		  "color": {
			"value": "#ededed"
		  }
		},
		"backgroundMask": {
		  "cover": {
			"color": {
			  "value": "#000000"
			}
		  }
		},
		"fullScreen": {
		  "enable": true,
		  "zIndex": 1
		},
		"interactivity": {
		  "events": {
			"onClick": {
			  "enable": true,
			  "mode": "push"
			},
			"onHover": {
			  "enable": true,
			  "mode": "repulse"
			}
		  },
		  "modes": {
			"light": {
			  "area": {
				"gradient": {
				  "start": {
					"value": "#000000"
				  }
				}
			  }
			}
		  }
		},
		"particles": {
		  "color": {
			"value": "#000000",
			"animation": {
			  "h": {
				"enable": true,
				"speed": 20
			  }
			}
		  },
		  "links": {
			"color": {
			  "value": "#ededed"
			},
			"enable": true,
			"opacity": 0.4,
			"shadow": {
			  "color": {
				"value": "#000000"
			  }
			}
		  },
		  "move": {
			"enable": true,
			"path": {},
			"outModes": {
			  "bottom": "out",
			  "left": "out",
			  "right": "out",
			  "top": "out"
			},
			"speed": 6,
			"spin": {}
		  },
		  "number": {
			"density": {
			  "enable": true
			},
			"value": 80
		  },
		  "opacity": {
			"value": 0.5,
			"animation": {}
		  },
		  "size": {
			"value": {
			  "min": 0.1,
			  "max": 3
			},
			"animation": {}
		  }
		}
	  }} />
    </>
  );
};
export default ParticlesJS;
