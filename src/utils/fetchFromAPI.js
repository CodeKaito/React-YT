import axios from 'axios';

const BASE_URL='https://youtube-v31.p.rapidapi.com/search';

const options = {
    url: BASE_URL,
    params: {
      relatedToVideoId: '7ghhRHRP6t4',
      part: 'id,snippet',
      type: 'video',
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': 'c3392a387fmsh1c129000a6c78bap1b9ec0jsn146fb46b7a87',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };