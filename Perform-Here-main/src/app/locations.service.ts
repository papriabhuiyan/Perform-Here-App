import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor() { }
  states(){
    return [
      {
        id: 1,
        name: "Alabama"
      },
      {
        id: 2,
        name: "Alaska"
      },
      {
        id: 3,
        name: "Arizona"
      },
      {
        id: 4,
        name: "Arkansas"
      },
      {
        id: 5,
        name: "California"
      },
      {
        id: 6,
        name: "Colorado"
      },
      {
        id: 7,
        name: "Connecticut"
      },
      {
        id: 8,
        name: "Washington D.C."
      },
      {
        id: 9,
        name: "Florida"
      },
      {
        id: 10,
        name: "Georgia"
      },
      {
        id: 11,
        name: "Hawaii"
      },
      {
        id: 12,
        name: "Idaho"
      },
      {
        id: 13,
        name: "Illinois"
      },
      {
        id: 14,
        name: "Indiana"
      },
      {
        id: 15,
        name: "Iowa"
      },
      {
        id: 16,
        name: "Kansas"
      },
      {
        id: 17,
        name: "Kentucky"
      },
      {
        id: 18,
        name: "Louisiana"
      },
      {
        id: 19,
        name: "Maryland"
      },
      {
        id: 20,
        name: "Masachusetts"
      },
      {
        id: 21,
        name: "Michigan"
      },
      {
        id: 22,
        name: "Minnesota"
      },
      {
        id: 23,
        name: "Mississippi"
      },
      {
        id: 24,
        name: "Missouri"
      },
      {
        id: 25,
        name: "Nebraska"
      },
      {
        id: 26,
        name: "Nevada"
      },
      {
        id: 27,
        name: "New Jersey"
      },
      {
        id: 28,
        name: "New Mexico"
      },
      {
        id: 29,
        name: "New York"
      },
      {
        id: 30,
        name: "North Carolina"
      },
      {
        id: 31,
        name: "Ohio"
      },
      {
        id: 32,
        name: "Oklahoma"
      },
      {
        id: 33,
        name: "Rhode Island"
      },
      {
        id: 34,
        name: "South Carolina"
      },
      {
        id: 35,
        name: "South Dakota"
      },
      {
        id: 36,
        name: "Tennessee"
      },
      {
        id: 37,
        name: "Texas"
      },
      {
        id: 38,
        name: "Utah"
      },
      {
        id: 39,
        name: "Virginia"
      },
      {
        id: 40,
        name: "Washington"
      },
      {
        id: 41,
        name: "Wisconsin"
      }
    ]
  }

  cities(){
    return [
      {
        id: 1,
        name: "Huntsville",
        longitude: '-86.601791',
        latitude: '34.738228'
      },
      {
        id: 1,
        name: "Montgomery",
        longitude: '-86.279167',
        latitude: '32.361668'
      },
      {
        id: 1,
        name: "Birmingham",
        longitude: '-86.779633',
        latitude: '33.543682'
      },
      {
        id: 1,
        name: "Mobile",
        longitude: '-88.039894',
        latitude: '30.695366'
      },
      {
        id: 2,
        name: "Anchorage",
        longitude: '-149.863129',
        latitude: '61.217381'
      },
      {
        id: 3,
        name: "Pheonix",
        longitude: '-112.074036',
        latitude: '33.448376'
      },
      {
        id: 3,
        name: "Tucson",
        longitude: '-110.911789',
        latitude: '32.253460'
      },
      {
        id: 3,
        name: "Mesa",
        longitude: '-111.833267',
        latitude: '33.424564'
      },
      {
        id: 3,
        name: "Chandler",
        longitude: '-111.844940',
        latitude: '33.307575'
      },
      {
        id: 3,
        name: "Gilbert",
        longitude: '-111.801682',
        latitude: '33.360355'
      },
      {
        id: 3,
        name: "Glendale",
        longitude: '-112.191696',
        latitude: '33.548264'
      },
      {
        id: 3,
        name: "Scottsdale",
        longitude: '-111.925278',
        latitude: '33.501324'
      },
      {
        id: 3,
        name: "Peoria",
        longitude: '-112.237068',
        latitude: '33.580944'
      },
      {
        id: 3,
        name: "Tempe",
        longitude: '-111.939896',
        latitude: '33.427204'
      },
      {
        id: 3,
        name: "Surprise",
        longitude: '-112.366669',
        latitude: '33.630554'
      },
      {
        id: 4,
        name: "Little Rock",
        longitude: '-92.289597',
        latitude: '34.746483'
      },
      {
        id: 5,
        name: "Los Angeles",
        longitude: '-118.243683',
        latitude: '34.052235'
      },
      {
        id: 5,
        name: "San Diego",
        longitude: '-117.161087',
        latitude: '32.715736'
      },
      {
        id: 5,
        name: "San Jose",
        longitude: '-121.893028',
        latitude: '37.335480'
      },
      {
        id: 5,
        name: "San Francisco",
        longitude: '-122.431297',
        latitude: '37.773972'
      },      
      {
        id: 5,
        name: "Fresno",
        longitude: '-119.772591',
        latitude: '36.746841'
      },      
      {
        id: 5,
        name: "Sacramento",
        longitude: '-121.478851',
        latitude: '38.575764'
      },      {
        id: 5,
        name: "Long Beach",
        longitude: '-118.193741',
        latitude: '33.770050'
      },      {
        id: 5,
        name: "Oakland",
        longitude: '-122.271111',
        latitude: '37.804363'
      },      {
        id: 5,
        name: "Bakersfield",
        longitude: '-119.043732',
        latitude: '35.393528'
      },      {
        id: 5,
        name: "Anaheim",
        longitude: '-117.914505',
        latitude: '33.835293'
      },      {
        id: 5,
        name: "Irvine",
        longitude: '-117.823059',
        latitude: '33.669445'
      },      {
        id: 5,
        name: "Stockton",
        longitude: '-121.275604',
        latitude: '37.961632'
      },      {
        id: 5,
        name: "Riverside",
        longitude: '-117.396156',
        latitude: '33.953350'
      },      {
        id: 5,
        name: "Santa Ana",
        longitude: '-117.867836',
        latitude: '33.745571'
      },      {
        id: 5,
        name: "Chula Vista",
        longitude: '-117.106705',
        latitude: '32.639954'
      },      {
        id: 5,
        name: "Santa Clarita",
        longitude: '-118.542587',
        latitude: '34.391663'
      },      {
        id: 5,
        name: "Fremont",
        longitude: '-121.988571',
        latitude: '37.548271'
      },      {
        id: 5,
        name: "San Bernardino",
        longitude: '-117.302399',
        latitude: '34.115784'
      },      {
        id: 5,
        name: "Modesto",
        longitude: '-120.994446',
        latitude: '37.661388'
      },      {
        id: 5,
        name: "Moreno Valley",
        longitude: '-117.229675',
        latitude: '33.942467'
      },      {
        id: 5,
        name: "Fontana",
        longitude: '-117.435051',
        latitude: '34.092232'
      },      {
        id: 5,
        name: "Oxnard",
        longitude: '-119.170898',
        latitude: '34.196411'
      },      {
        id: 5,
        name: "Huntington Beach",
        longitude: '-117.998970',
        latitude: '33.660057'
      },      {
        id: 5,
        name: "Glendale",
        longitude: '-118.255074',
        latitude: '34.142509'
      },      {
        id: 5,
        name: "Elk Grove",
        longitude: '-121.381943',
        latitude: '38.438332'
      },      {
        id: 5,
        name: "Santa Rosa",
        longitude: '-122.720306',
        latitude: '38.444660'
      },      {
        id: 5,
        name: "Ontario",
        longitude: '-117.651215',
        latitude: '34.068871'
      },      {
        id: 5,
        name: "Lancaster",
        longitude: '-118.154160',
        latitude: '34.686787'
      },      {
        id: 5,
        name: "Rancho Cucamonga",
        longitude: '-117.594429',
        latitude: '34.110489'
      },      {
        id: 5,
        name: "Oceanside",
        longitude: '-117.325836',
        latitude: '33.211666'
      },      {
        id: 5,
        name: "Palmdale",
        longitude: '-118.109291',
        latitude: '34.579449'
      },      {
        id: 5,
        name: "Garden Grove",
        longitude: '-117.973480',
        latitude: '33.785645'
      },      {
        id: 5,
        name: "Hayward",
        longitude: '-122.080795',
        latitude: '37.668819'
      },      {
        id: 5,
        name: "Salinas",
        longitude: '-121.655502',
        latitude: '36.677738'
      },      {
        id: 5,
        name: "Sunnyvale"
      },      {
        id: 5,
        name: "Corona"
      },      {
        id: 5,
        name: "Roseville"
      },      {
        id: 5,
        name: "Escondido"
      },      {
        id: 5,
        name: "Pomona"
      },      {
        id: 5,
        name: "Torrance"
      },      {
        id: 5,
        name: "Fullerton"
      },      {
        id: 5,
        name: "Visalia"
      },      
      {
        id: 6,
        name: "Denver"
      },      
      {
        id: 6,
        name: "Colorado Springs"
      },     
       {
        id: 6,
        name: "Aurora"
      },
      {
        id: 6,
        name: "Fort Collins"
      },
      {
        id: 6,
        name: "Lakewood"
      },
      {
        id: 6,
        name: "Thornton"
      },
      {
        id: 7,
        name: "Bridgeport"
      },
      {
        id: 8,
        name: "Washington D.C."
      },
      {
        id: 9,
        name: "Jacksonville"
      },
      {
        id: 9,
        name: "Miami"
      },
      {
        id: 9,
        name: "Tampa"
      },
      {
        id: 9,
        name: "Orlando"
      },
      {
        id: 9,
        name: "St. Petersburg"
      },
      {
        id: 9,
        name: "Hialeah"
      },
      {
        id: 9,
        name: "Port St. Lucie"
      },
      {
        id: 9,
        name: "Cape Coral"
      },
      {
        id: 9,
        name: "Tallahassee"
      },
      {
        id: 9,
        name: "Fort Lauderdale"
      },
      {
        id: 9,
        name: "Pembroke Pines"
      },
      {
        id: 9,
        name: "Hollywood"
      },
      {
        id: 10,
        name: "Atlanta"
      },
      {
        id: 10,
        name: "Columbus"
      },
      {
        id: 10,
        name: "Augusta"
      },
      {
        id: 10,
        name: "Savannah"
      },
      {
        id: 11,
        name: "Honolulu"
      },
      {
        id: 12,
        name: "Boise"
      },
      {
        id: 13,
        name: "Chicago"
      },
      {
        id: 13,
        name: "Aurora"
      },
      {
        id: 13,
        name: "Naperville"
      },
      {
        id: 13,
        name: "Joliet"
      },
      {
        id: 13,
        name: "Rockford"
      },
      {
        id: 14,
        name: "Indianapolis"
      },
      {
        id: 14,
        name: "Fort Wayne"
      },
      {
        id: 15,
        name: "Des Moines"
      },
      {
        id: 16,
        name: "Wichita"
      },
      {
        id: 16,
        name: "Overland Park"
      },
      {
        id: 16,
        name: "Kansas City"
      },
      {
        id: 17,
        name: "Louisville"
      },
      {
        id: 17,
        name: "Lexington"
      },
      {
        id: 18,
        name: "New Orleans"
      },
      {
        id: 18,
        name: "Baton Rouge"
      },
      {
        id: 18,
        name: "Shreveport"
      },
      {
        id: 19,
        name: "Baltimore"
      },
      {
        id: 20,
        name: "Boston"
      },
      {
        id: 20,
        name: "Worcester"
      },
      {
        id: 20,
        name: "Springfield"
      },
      {
        id: 21,
        name: "Detroit"
      },
      {
        id: 21,
        name: "Grand Rapids"
      },
      {
        id: 22,
        name: "Minneapolis"
      },
      {
        id: 22,
        name: "St. Paul"
      },
      {
        id: 23,
        name: "Jackson"
      },
      {
        id: 24,
        name: "Kansas City"
      },
      {
        id: 24,
        name: "St. Louis"
      },
      {
        id: 24,
        name: "Springfield"
      },
      {
        id: 25,
        name: "Omaha"
      },
      {
        id: 25,
        name: "Lincoln"
      },
      {
        id: 26,
        name: "Las Vegas"
      },
      {
        id: 26,
        name: "Henderson"
      },
      {
        id: 26,
        name: "Reno"
      },
      {
        id: 26,
        name: "North Las Vegas"
      },
      {
        id: 26,
        name: "Enterprise"
      },
      {
        id: 26,
        name: "Spring Valley"
      },
      {
        id: 26,
        name: "Sunrise Manor"
      },
      {
        id: 26,
        name: "Paradise"
      },
      {
        id: 27,
        name:"Newark"
      },
      {
        id: 27,
        name:"Jersey City"
      },
      {
        id: 27,
        name:"Paterson"
      },
      {
        id: 28,
        name:"Albuquerque"
      },
      {
        id: 29,
        name:"Syracuse"
      },
      {
        id: 29,
        name:"Rochester"
      },
      {
        id: 29,
        name:"Yonkers"
      },
      {
        id: 29,
        name:"Buffalo"
      },
      {
        id: 29,
        name:"New York City"
      },
      {
        id: 30,
        name:"Charlotte"
      },
      {
        id: 30,
        name:"Raleigh"
      },
      {
        id: 30,
        name:"Greensboro"
      },
      {
        id: 30,
        name:"Durham"
      },
      {
        id: 30,
        name:"Winston-Salem"
      },
      {
        id: 30,
        name:"Fayetteville"
      },
      {
        id: 30,
        name:"Cary"
      },
      {
        id: 31,
        name:"Columbus"
      },
      {
        id: 31,
        name:"Cleveland"
      },
      {
        id: 31,
        name:"Cincinnati"
      },
      {
        id: 31,
        name:"Toledo"
      },
      {
        id: 31,
        name:"Akron"
      },
      {
        id: 32,
        name:"Oklahoma City"
      },
      {
        id: 32,
        name:"Tulsa"
      },
      {
        id: 33,
        name:"Providence"
      },
      {
        id: 34,
        name:"Charleston"
      },
      {
        id: 35,
        name:"Sioux Falls"
      },
      {
        id: 36,
        name: "Nashville"
      },
      {
        id: 36,
        name: "Memphis"
      },
      {
        id: 36,
        name: "Knoxville"
      },
      {
        id: 36,
        name: "Chattanooga"
      },
      {
        id: 36,
        name: "Clarksville"
      },
      {
        id: 36,
        name: "Murfreesboro"
      },
      {
        id: 37,
        name: "Houston"
      },
      {
        id: 37,
        name: "San Antonio"
      },
      {
        id: 37,
        name: "Dallas"
      },
      {
        id: 37,
        name: "Austin"
      },
      {
        id: 37,
        name: "Fort Worth"
      },
      {
        id: 37,
        name: "El Paso"
      },
      {
        id: 37,
        name: "Arlington"
      },
      {
        id: 37,
        name: "Corpus Christi"
      },
      {
        id: 37,
        name: "Plano"
      },
      {
        id: 37,
        name: "Irving"
      },
      {
        id: 37,
        name:  "Lubbock"
      },
      {
        id: 37,
        name: "Laredo"
      },
      {
        id: 37,
        name: "Garland"
      },
      {
        id: 37,
        name: "Frisco"
      },
      {
        id: 37,
        name: "McKinney"
      },
      {
        id: 37,
        name: "Amarillo"
      },
      {
        id: 37,
        name:"Grand Prairie" 
      },
      {
        id: 37,
        name: "Brownsville"
      },
      {
        id: 37,
        name: "Killeen"
      },
      {
        id: 37,
        name: "Pasadena"
      },
      {
        id: 37,
        name: "Mesquite"
      },
      {
        id: 37,
        name: "Denton"
      },
      {
        id: 37,
        name: "McAllen"
      },
      {
        id: 38,
        name: "Salt Lake City"
      },
      {
        id: 39,
        name: "Virginia Beach"
      },
      {
        id: 39,
        name: "Chesapeake"
      },
      {
        id: 39,
        name: "Arlington"
      },
      {
        id: 39,
        name: "Norfolk"
      },
      {
        id: 39,
        name: "Richmond"
      },
      {
        id: 39,
        name: "Newport News"
      },
      {
        id: 39,
        name: "Alexandria"
      },
      {
        id: 40,
        name: "Seattle"
      },
      {
        id: 40,
        name: "Spokane"
      },
      {
        id: 40,
        name: "Tacoma"
      },

      {
        id: 40,
        name: "Vancouver"
      },

      {
        id: 40,
        name: "Bellevue"
      },

      {
        id: 40,
        name: "Kent"
      },

      {
        id: 41,
        name: "Milwaukee"
      },

      {
        id: 41,
        name: "Madison"
      }
    ]
  }
}
