var APP_DATA = {
  "scenes": [
    {
      "id": "0-master-dormitor",
      "name": "master dormitor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.8562503883766386,
        "pitch": 0.11593100998649142,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": 0.4809611111302736,
          "pitch": 0.02748881451935148,
          "rotation": 0,
          "target": "1-balcon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-balcon",
      "name": "balcon",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.4669105184204305,
          "pitch": 0.07952312221413393,
          "rotation": 1.5707963267948966,
          "target": "2-coridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-coridor",
      "name": "coridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.0980689443304072,
          "pitch": 0.25079296416608443,
          "rotation": 0,
          "target": "0-master-dormitor"
        },
        {
          "yaw": 2.3017166467632038,
          "pitch": 0.28302171453559133,
          "rotation": 1.5707963267948966,
          "target": "3-coridor-bucatarie"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-coridor-bucatarie",
      "name": "coridor bucatarie",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.657726590479161,
          "pitch": 0.36267682231931886,
          "rotation": 0,
          "target": "4-bucatarie-1"
        },
        {
          "yaw": -0.7776631553380149,
          "pitch": 0.6397497060058814,
          "rotation": 0,
          "target": "2-coridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bucatarie-1",
      "name": "bucatarie 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.14646321343012758,
          "pitch": 0.39339308293291353,
          "rotation": 0,
          "target": "3-coridor-bucatarie"
        },
        {
          "yaw": 2.808356903161825,
          "pitch": 0.4387997081667141,
          "rotation": 0,
          "target": "5-bucatarie-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bucatarie-2",
      "name": "bucatarie 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.165478904439694,
          "pitch": 0.17960814573501516,
          "rotation": 1.5707963267948966,
          "target": "4-bucatarie-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "flat 1 test",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
