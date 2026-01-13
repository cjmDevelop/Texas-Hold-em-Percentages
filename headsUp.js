// Heads up (2 players) win probabilities
  const headsUpStrengths = {
    // Pairs
    'AA': 85.3, 'KK': 82.4, 'QQ': 79.9, 'JJ': 77.5, 'TT': 75.1,
    '99': 71.7, '88': 68.9, '77': 66.2, '66': 63.5, '55': 60.7,
    '44': 57.9, '33': 55.2, '22': 52.5,

    // Suited hands
    'AKs': 67.0, 'AQs': 66.1, 'AJs': 65.4, 'ATs': 64.7, 'A9s': 62.3,
    'A8s': 61.0, 'A7s': 59.8, 'A6s': 58.5, 'A5s': 59.9, 'A4s': 58.3,
    'A3s': 57.0, 'A2s': 55.8,
    'KQs': 63.4, 'KJs': 62.6, 'KTs': 61.9, 'K9s': 59.4, 'K8s': 57.7,
    'K7s': 56.3, 'K6s': 54.8, 'K5s': 53.5, 'K4s': 52.0, 'K3s': 50.7,
    'K2s': 49.4,
    'QJs': 60.3, 'QTs': 59.5, 'Q9s': 56.9, 'Q8s': 54.9, 'Q7s': 53.1,
    'Q6s': 51.5, 'Q5s': 50.0, 'Q4s': 48.4, 'Q3s': 47.0, 'Q2s': 45.6,
    'JTs': 57.5, 'J9s': 54.6, 'J8s': 52.4, 'J7s': 50.4, 'J6s': 48.6,
    'J5s': 46.9, 'J4s': 45.3, 'J3s': 43.7, 'J2s': 42.2,
    'T9s': 54.3, 'T8s': 51.9, 'T7s': 49.7, 'T6s': 47.6, 'T5s': 45.7,
    'T4s': 43.8, 'T3s': 42.0, 'T2s': 40.3,
    '98s': 51.3, '97s': 48.8, '96s': 46.5, '95s': 44.3, '94s': 42.2,
    '93s': 40.2, '92s': 38.4,
    '87s': 48.2, '86s': 45.6, '85s': 43.2, '84s': 40.9, '83s': 38.8,
    '82s': 36.8,
    '76s': 45.0, '75s': 42.4, '74s': 39.9, '73s': 37.6, '72s': 35.5,
    '65s': 41.8, '64s': 39.1, '63s': 36.7, '62s': 34.4,
    '54s': 38.5, '53s': 35.8, '52s': 33.3,
    '43s': 35.0, '42s': 32.3,
    '32s': 31.5,

    // Offsuit hands
    'AKo': 65.4, 'AQo': 64.5, 'AJo': 63.6, 'ATo': 62.9, 'A9o': 60.3,
    'A8o': 58.9, 'A7o': 57.6, 'A6o': 56.2, 'A5o': 57.5, 'A4o': 55.9,
    'A3o': 54.5, 'A2o': 53.2,
    'KQo': 61.4, 'KJo': 60.5, 'KTo': 59.7, 'K9o': 57.0, 'K8o': 55.2,
    'K7o': 53.6, 'K6o': 52.0, 'K5o': 50.5, 'K4o': 48.9, 'K3o': 47.5,
    'K2o': 46.1,
    'QJo': 58.0, 'QTo': 57.2, 'Q9o': 54.4, 'Q8o': 52.2, 'Q7o': 50.3,
    'Q6o': 48.5, 'Q5o': 46.8, 'Q4o': 45.1, 'Q3o': 43.5, 'Q2o': 41.9,
    'JTo': 55.0, 'J9o': 51.9, 'J8o': 49.5, 'J7o': 47.3, 'J6o': 45.3,
    'J5o': 43.4, 'J4o': 41.6, 'J3o': 39.8, 'J2o': 38.2,
    'T9o': 51.5, 'T8o': 48.9, 'T7o': 46.5, 'T6o': 44.2, 'T5o': 42.0,
    'T4o': 39.9, 'T3o': 37.9, 'T2o': 36.1,
    '98o': 48.1, '97o': 45.4, '96o': 42.9, '95o': 40.6, '94o': 38.3,
    '93o': 36.2, '92o': 34.2,
    '87o': 44.7, '86o': 41.9, '85o': 39.3, '84o': 36.9, '83o': 34.6,
    '82o': 32.5,
    '76o': 41.3, '75o': 38.5, '74o': 35.9, '73o': 33.5, '72o': 31.2,
    '65o': 37.9, '64o': 35.0, '63o': 32.4, '62o': 29.9,
    '54o': 34.3, '53o': 31.3, '52o': 28.6,
    '43o': 30.6, '42o': 27.7,
    '32o': 26.6
  };

  //Only have to convert 10's to T, every other character / number is represented in the precalculated 
  // hand percentages
  function normalizeValue(value) {
    if(value === '10') return 'T';
    return value;
  }


  //Get hand notation ("AKs", "72o", "QQ")-------------------------------------------------------------
  function getHandNotation(card1Value, card1Suit, card2Value, card2Suit) {
    let val1 = normalizeValue(card1Value);
    let val2 = normalizeValue(card2Value);

    //Card rankings converting characters to numeric values
    const ranks = {
                    '2': 2,
                    '3': 3,
                    '4': 4,
                    '5': 5,
                    '6': 6,
                    '7': 7,
                    '8': 8,
                    '9': 9,
                    'T': 10,
                    'J': 11,
                    'Q': 12,
                    'K': 13,
                    'A': 14
                };

    //Checking for pairs
    //Where do these values come from val1 and val2? its not seen anywhere else in code
    if(val1 === val2) {
        return val1 + val1; // AA KK
    }

    //Putting higher value card "first" into val1
    if(ranks[val1] < ranks[val2]) {
        let temp = val1;      
        val1 = val2;          
        val2 = temp;   
    }

    //Checking if suited or off suited
    const suited = card1Suit === card2Suit; //boolean
    const suffix = suited ? 's' : 'o';  //char

    return val1 + val2 + suffix;

  }
  //------------------------------------------------------------------------------------------------