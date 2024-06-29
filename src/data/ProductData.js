// src/data/ProductData.js

import BubbleUpImage1 from '../assets/graphics/games/bubbleup/BubbleUp1.png';
import BubbleUpImage2 from '../assets/graphics/games/bubbleup/BubbleUp2.png';
import AgniPhalImage1 from '../assets/graphics/games/agniphal/AgniPhal1.png';
import AgniPhalImage2 from '../assets/graphics/games/agniphal/AgniPhal2.png';

const ProductData = [
  {
    id: "1",
    name: "BubbleUp",
    price: 10,
    description: "A combined C++ 2D Game Engine with a built-in feature-rich demonstration 2D game.",
    systemRequirements: {
      os: [
        "Windows 10, 11",
        "MacOS 13 - 14",
        "Ubuntu 22.04 - 24.04"
      ],
      processor: "at least a Core i3 or AMD CPU equivalent",
      ram: "4 GB RAM",
      graphics: "at least a HD compatible CPU/GPU",
      storage: "5 GB Free"
    },
    images: [
      BubbleUpImage1,
      BubbleUpImage2
    ]
  },
  {
    id: "2",
    name: "AgniPhal",
    price: 15,
    description: "A modern gameboy highest score reaching game for all retro enthusiasts",
    systemRequirements: {
      os: [
        "Gameboy Color"
      ],
      processor: "Gameboy Color",
      ram: "Gameboy Color",
      graphics: "Gameboy Color",
      storage: "4 MBs"
    },
    images: [
      AgniPhalImage1,
      AgniPhalImage2
    ]
  },
  // Add more items as necessary
];

export default ProductData;
