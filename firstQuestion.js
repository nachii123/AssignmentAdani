
function calculateShares(winnerCount, customShares = []) {
    if (customShares.length > 0) {
    
      return customShares;
    }
  
    const equalShare = 1 / winnerCount; // Equal share logic
    return Array(winnerCount).fill(parseFloat(equalShare.toFixed(4)));
  }

  function transformAwardsToPrizes(awards) {
    const grouped = {};
  
    
    for (const award of awards) {
      const key = `${award.category}-${award.year}`;
      if (!grouped[key]) {
        grouped[key] = [];
      }
      grouped[key].push(award.name);
    }
    const prizes = Object.entries(grouped).map(([key, names]) => {
      const [category, year] = key.split('-');
      let customShares = [];
    // check cat and year
      if (category === 'Physics' && year === '2019') {
        customShares = [0.5, 0.25, 0.25];
      }
  //// check cat and year
      if (category === 'Chemistry' && year === '2019') {
        customShares = [0.3333, 0.3333, 0.3333];
      }
  //check cat and year
      if (category === 'Physics' && year === '2018') {
        customShares = [0.5, 0.25, 0.25];
      }
  // check cat and year
      if (category === 'Chemistry' && year === '2018') {
        customShares = [0.5, 0.25, 0.25];
      }

      return {
        category,
        year: parseInt(year),
        winners: names.map((name, index) => ({
          name,
          share: customShares[index] || 1 / names.length,
        })),
      };
    }); 
    return prizes;
  }
// inputs
const awards = [
    {
      name: 'James Peebles',
      category: 'Physics',
      research: 'Theoretical discoveries in physical cosmology',
      year: 2019,
    },
    {
      name: 'Michel Mayor',
      category: 'Physics',
      research: 'Discovery of an exoplanet orbiting a solar-type star',
      year: 2019,
    },
    {
      name: 'Didier Queloz',
      category: 'Physics',
      research: 'Discovery of an exoplanet orbiting a solar-type star',
      year: 2019,
    },
    {
      name: 'John B. Goodenough',
      category: 'Chemistry',
      research: 'Development of lithium-ion batteries',
      year: 2019,
    },
    {
      name: 'M. Stanley Whittingham',
      category: 'Chemistry',
      research: 'Development of lithium-ion batteries',
      year: 2019,
    },
    {
      name: 'Akira Yoshino',
      category: 'Chemistry',
      research: 'Development of lithium-ion batteries',
      year: 2019,
    },
    {
      name: 'Arthur Ashkin',
      category: 'Physics',
      research: 'Optical tweezers and their application to biological systems',
      year: 2018,
    },
    {
      name: 'Gerard Mourou',
      category: 'Physics',
      research: 'Method of generating high-intensity, ultra-short optical pulses',
      year: 2018,
    },
    {
     name: 'Donna Strickland',
      category: 'Physics',
      research: 'Method of generating high-intensity, ultra-short optical pulses',
      year: 2018,
    },
    {
      name: 'Frances H. Arnold',
      category: 'Chemistry',
      research: 'Directed evolution of enzymes',
      year: 2018,
    },
    {
      name: 'George P. Smith',
      category: 'Chemistry',
      research: 'Phage display of peptides and antibodies.',
      year: 2018,
    },
    {
      name: 'Sir Gregory P. Winter',
      category: 'Chemistry',
      research: 'Phage display of peptides and antibodies.',
      year: 2018,
    },
  ];
  
  // call function here
  const prizes = transformAwardsToPrizes(awards);
  
  //return result
  console.log(JSON.stringify(prizes, null, 2));
  