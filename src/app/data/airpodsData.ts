const airpodsData: {
  productName: string;
  generation: string;
  price: string;
  image: string;
  description: string;
  adaptiveAudio: boolean;
  noiseCancellation: boolean;
  conversationAwareness: boolean;
  spatialAudio: boolean;
  waterResistant: string;
  case: string;
  time: number;
}[] = [
  {
    productName: "AirPods",
    generation: "2nd generation",
    price: "HK$1,099",
    image: "./compares/AirPods2nd_spec.png",
    description: "AirPods2nd",
    adaptiveAudio: false,
    noiseCancellation: false,
    conversationAwareness: false,
    spatialAudio: false,
    waterResistant: "null",
    case: "Lighting",
    time: 5,
  },
  {
    productName: "AirPods",
    generation: "3rd generation",
    price: "From HK$1,399",
    image: "./compares/AirPods3rd_spec.png",
    description: "AirPods3rd",
    adaptiveAudio: false,
    noiseCancellation: false,
    conversationAwareness: false,
    spatialAudio: true,
    waterResistant: "sweat",
    case: "Lighting&MagSafe",
    time: 6,
  },
  {
    productName: "AirPods Pro",
    generation: "2nd generation",
    price: "HK$1,849",
    image: "./compares/AirPodsPro_spec.png",
    description: "AirPodsPro2nd",
    adaptiveAudio: true,
    noiseCancellation: true,
    conversationAwareness: true,
    spatialAudio: true,
    waterResistant: "dust",
    case: "USB-C",
    time: 6,
  },
  {
    productName: "AirPods Max",
    generation: "",
    price: "HK$4,599",
    image: "./compares/AirPodsMax_spec.png",
    description: "AirPodsMax",
    adaptiveAudio: false,
    noiseCancellation: true,
    conversationAwareness: false,
    spatialAudio: true,
    waterResistant: "null",
    case: "Smart",
    time: 20,
  },
];

export default airpodsData;
