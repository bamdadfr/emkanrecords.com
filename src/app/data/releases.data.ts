import {StaticImageData} from 'next/image';

import EMK000 from '../../../public/releases/EMK000.jpg';
import EMK001 from '../../../public/releases/EMK001.jpg';
import EMK002 from '../../../public/releases/EMK002.jpg';
import EMK003 from '../../../public/releases/EMK003.jpg';
import EMK004 from '../../../public/releases/EMK004.jpg';
import EMK005 from '../../../public/releases/EMK005.jpg';
import EMK006 from '../../../public/releases/EMK006.jpg';
import EMK007 from '../../../public/releases/EMK007.jpg';
import EMK008 from '../../../public/releases/EMK008.jpg';

export interface Release {
  id: number;
  artist: string;
  name: string;
  image: StaticImageData;
  date: number;
  retailers: {
    youtube: string;
    spotify: string;
    itunes: string;
  };
}

export const ReleasesData: Release[] = [
  {
    id: 0,
    artist: 'Gary Stallman',
    name: 'Sudo Service Start',
    image: EMK000,
    date: 2016,
    retailers: {
      youtube:
        'https://www.youtube.com/playlist?list=PLOLsSaniv_GHhVOXVj_LgBCpMtE-AEtHw',
      spotify: 'https://open.spotify.com/album/4UxtQ2rbvihoPRHxyxcUxQ',
      itunes:
        'https://music.apple.com/album/sudo-service-start-single/1124554871',
    },
  },
  {
    id: 1,
    artist: 'Losless',
    name: 'Signature',
    image: EMK001,
    date: 2016,
    retailers: {
      youtube:
        'https://www.youtube.com/playlist?list=PLOLsSaniv_GHRvxjwb2JEEav9zlq8O1vw',
      spotify: '',
      itunes: 'https://music.apple.com/album/signature-single/1129053093',
    },
  },
  {
    id: 2,
    artist: 'Losless',
    name: "Rur'",
    image: EMK002,
    date: 2016,
    retailers: {
      youtube:
        'https://www.youtube.com/playlist?list=PLOLsSaniv_GHFFm_fnGfk1xRV3zYevXI8',
      spotify: 'https://open.spotify.com/album/2aCXnVkJDe7Gh6bSgLkD4H',
      itunes: 'https://music.apple.com/album/rur-single/1163898299',
    },
  },
  {
    id: 3,
    artist: 'Losless',
    name: 'Largo',
    image: EMK003,
    date: 2017,
    retailers: {
      youtube:
        'https://www.youtube.com/playlist?list=PLOLsSaniv_GFvZ3N_5k61At70fZ2bN0ho',
      spotify: 'https://open.spotify.com/album/4cZcFgBEfoQuYcxNV27Dps',
      itunes: 'https://music.apple.com/album/largo-single/1201307720',
    },
  },
  {
    id: 4,
    artist: 'Blinkhorn',
    name: 'Feedback',
    image: EMK004,
    date: 2017,
    retailers: {
      youtube:
        'https://www.youtube.com/playlist?list=PLOLsSaniv_GGqXEdF_rCHbXq33z7mYLwl',
      spotify: 'https://open.spotify.com/album/5p5SZKi6RV6oGRB6fHbrSh',
      itunes: 'https://music.apple.com/album/feedback-single/1207910490',
    },
  },
  {
    id: 5,
    artist: 'Gary Stallman',
    name: 'Son Of The Internet',
    image: EMK005,
    date: 2017,
    retailers: {
      youtube:
        'https://www.youtube.com/playlist?list=PLOLsSaniv_GGC42wHJZ4Pg0nu82-DDuUr',
      spotify: 'https://open.spotify.com/album/58qY51Jy2kDsaUwonDYJyC',
      itunes:
        'https://music.apple.com/album/son-of-the-internet-single/1215830034',
    },
  },
  {
    id: 6,
    artist: 'Gary Stallman',
    name: 'Cyber Syndrome',
    image: EMK006,
    date: 2017,
    retailers: {
      youtube:
        'https://www.youtube.com/playlist?list=PLOLsSaniv_GEifUUBN3GWpR_BUkFmKE_r',
      spotify: 'https://open.spotify.com/album/4TfxTG1Cni8a34Z5xR1POt',
      itunes: 'https://music.apple.com/album/cyber-syndrome-single/1220513302',
    },
  },
  {
    id: 7,
    artist: 'Losless',
    name: 'Synecku',
    image: EMK007,
    date: 2017,
    retailers: {
      youtube: 'https://www.youtube.com/watch?v=m3_LvxfYvXY',
      spotify: 'https://open.spotify.com/album/5pIHkau6ai91eRmXfRzgTD',
      itunes: 'https://music.apple.com/us/album/synecku-single/1245742162',
    },
  },
  {
    id: 8,
    artist: 'Losless',
    name: 'Sphere',
    image: EMK008,
    date: 2019,
    retailers: {
      youtube:
        'https://www.youtube.com/playlist?list=PLOLsSaniv_GHJLnh-3kX7kguROGVIzAtY',
      spotify: 'https://open.spotify.com/album/3Z2LutxXvtP3owhCojIlrT',
      itunes: 'https://music.apple.com/us/album/sphere-single/1448482712',
    },
  },
];
