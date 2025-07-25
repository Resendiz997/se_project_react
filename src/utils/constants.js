export const defaultClothingItems = [
    {
      _id: 0,
      name: "Cap",
      weather: "hot",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
    },
    {
      _id: 1,
      name: "Hoodie",
      weather: "warm",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
    },
    {
      _id: 2,
      name: "Jacket",
      weather: "cold",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
    },
    {
      _id: 3,
      name: "Sneakers",
      weather: "cold",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
    },
    {
      _id: 4,
      name: "T-Shirt",
      weather: "hot",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
    },
    {
      _id: 5,
      name: "Coat",
      weather: "cold",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
    }
  ]

  export const coordinates = {
    latitude :  33.7501,
    longitude : -84.3885 ,
  };
export const ApiKey = "275944ed31ca88e8cd70a8d5460fa2a8" ;

export const weatherOptions = [
  {day:true , 
    condition: "clear",
    url : new URL ("../images/daytime/clear.svg", import.meta.url).href
  },
  {
    day:true , 
    condition: "clouds",
    url : new URL ("../images/daytime/cloudy.svg", import.meta.url).href
  },{
    day:true , 
    condition: "fog",
    url : new URL ("../images/daytime/fog.svg", import.meta.url).href
  },{
    day:true , 
    condition: "rain",
    url : new URL ("../images/daytime/rain.svg", import.meta.url).href
  },{
    day:true , 
    condition: "snow",
    url : new URL ("../images/daytime/snow.svg", import.meta.url).href
  },{
    day:true , 
    condition: "storm",
    url : new URL ("../images/daytime/storm.svg", import.meta.url).href
  },{
    day:false , 
    condition: "clear",
    url : new URL ("../images/night-time/clear.png", import.meta.url).href
  },{
    day:false , 
    condition: "clouds",
    url : new URL ("../images/night-time/cloudy.png", import.meta.url).href
  },{
    day:false , 
    condition: "fog",
    url : new URL ("../images/night-time/fog.png", import.meta.url).href
  },{
    day:false , 
    condition: "rain",
    url : new URL ("../images/night-time/rain.png", import.meta.url).href
  },{
    day:false , 
    condition: "snow",
    url : new URL ("../images/night-time/snow.png", import.meta.url).href
  },{
    day:false , 
    condition: "storm",
    url : new URL ("../images/night-time/storm.png", import.meta.url).href
  },
]

export const defaultWeatherOptions = {
  day: {
    url : new URL ("../images/default-img/default-clear.svg", import.meta.url).href
   },
   night: {
  url : new URL ("../images/default-img/default-night.svg", import.meta.url).href
}
};