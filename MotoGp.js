var motoGP = [
    {
      circuit: 'Losail',
      location: 'Qatar',
      winner: {
        firstName: 'Andrea',
        lastName: 'Dovizioso',
        country: 'Italy'
      }
    },
    {
      circuit: 'Autodromo',
      location: 'Argentine',
      winner: {
        firstName: 'Cal',
        lastName: 'Crutchlow',
        country: 'UK'
      }
    },
    {
      circuit: 'De Jerez',
      location: 'Spain',
      winner: {
        firstName: 'Valentino',
        lastName: 'Rossi',
        country: 'Italy'
      }
    },
    {
      circuit: 'Mugello',
      location: 'Italy',
      winner: {
        firstName: 'Andrea',
        lastName: 'Dovizioso',
        country: 'Italy'
      }
    }
  ];
  
  function groupRacersCountry(arr) {

    var result = {}
    for(var i = 0; i <= arr.length-1;  i++) {
      if(result[arr[i]["winner"]["country"]] === undefined) {
        result[arr[i]["winner"]["country"]] = {}
        result[arr[i]["winner"]["country"]].winningCircuits = []
      }
      result[arr[i]["winner"]["country"]].winningCircuits.push( {
        name: arr[i].winner.firstName + " " + arr[i].winner.lastName,
        winLocation: arr[i].circuit + ", " + arr[i].location
      })
  
      result[arr[i]["winner"]["country"]].totalWin = result[arr[i]["winner"]["country"]].winningCircuits.length
  
    }
  
    return JSON.stringify(result,null,2)
   
  }
  
  console.log(groupRacersCountry(motoGP));
  /*
  {
    Italy: {
      winningCircuits: [
        { name: 'Andrea Dovizioso', winLocation: 'Losail, Qatar' },
        { name: 'Valentino Rossi', winLocation: 'De Jerez, Spain' } ,
        { name: 'Andrea Dovizioso', winLocation: 'Mugello, Italy' }
      ],
      totalWin: 3 
    },
    UK: {
      winningCircuits: [
        { name: 'Cal Crutchlow', winLocation: 'Autodromo, Argentine' }
      ],
      totalWin: 1
    }
  }
  */
