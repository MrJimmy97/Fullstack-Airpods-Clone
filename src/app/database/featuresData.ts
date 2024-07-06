export interface initialFeaturesData {
  title: string;
  image: string;
  description: string;
  className: string;
  content: string;
  sup?: number;
}
export interface featuresData {
  title: string;
  image: string;
  description: string;
  className: string;
  content: string;
  sup?: number;
  _id: string;
}

export const initialFeatures: initialFeaturesData[] = [
  {
    title: "One-tap setup",
    image: "/features/tile_onetap_setup_large.jpg",
    description: "onetap_setup",
    className: "n1",
    content: "Connect immediately to your iPhone or iPad.",
    sup: 1,
  },
  {
    title: "Personalized Spatial Audio",
    image: "/features/tile_spatial_audio_large.jpg",
    description: "spatial_audio",
    className: "n2",
    content:
      "Personalized Spatial Audio plays three-dimensional sound tuned for your specific ear shape — across all your devices.",
    sup: 2,
  },
  {
    title: "Audio Sharing",
    image: "/features/tile_audio_sharing_large.jpg",
    description: "audio_sharing",
    className: "n3",
    content:
      "Share a song, podcast, or other audio between two sets of AirPods with Audio Sharing.",
    sup: 3,
  },
  {
    title: "Automatic switching",
    image: "/features/tile_automatic_switching_large.jpg",
    description: "automatic_switching",
    className: "n4",
    content:
      "Automatic switching allows sound to move seamlessly between your iPhone, Apple Watch, iPad, Mac, and Apple TV.",
    sup: 1,
  },
  {
    title: "Siri",
    image: "/features/tile_siri_large.jpg",
    description: "siri",
    className: "n5",
    content:
      " A simple “Hey Siri” summons your favorite personal assistant. Control your music, calls, volume, directions, and more — without lifting a finger.",
  },
  {
    title: "Accessibility",
    image: "/features/tile_accessibility_large.jpg",
    description: "accessibility",
    className: "n6",
    content:
      "AirPods are loaded with features to assist with select hearing needs,from focusing on the voice in front of you in noisy surroundings to amplifying the frequencies you may need to hear more clearly.",
  },
];
