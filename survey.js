const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Q1: What do you think of Node.js? ', (answer1) => {

  rl.question('Q2: Whats your name? Nicknames are also acceptable :) ', (answer2) => {
    console.log(`Thank you for your valuable feedback: ${answer2}`);
  
    rl.question('Q3: what an activity you like doing? ', (answer3) => {
      console.log('Thanks for your information!');
        
      rl.question('Q4: Whats your favorite type of music? ', (answer4) => {
        console.log(`That's cool!`);

        rl.question('Q5: whats your favorite meal of the day? ', (answer5) => {
                
          rl.question('Q6: what\'s your favorite thing to eat for that meal? ', (answer6) => {
            console.log('sounds delicious!');
            
            rl.question('Q7: which sport is your absoulte favorite? ', (answer7) => {

              rl.question('Q8: what is your superpower? In a few words, tell us what you are amazing at! ', (answer8) => {
                console.log('Amazing! Thanks for your information will be making your profile shortly..');
                
                rl.question('Would you like to see your profile that we made for you? ', (answer9) => {
                  console.log(`Name: ${answer2}`);
                  console.log(`Favorite activity:${answer3}`);
                  console.log(`Favorite Music:${answer4}`);
                  console.log(`Favorite Meal of the day: ${answer5}`);
                  console.log(`Favorite food: ${answer6}`);
                  console.log(`Favorite sport: ${answer7}`);
                  console.log(`Your superpower: ${answer8}`);
                  console.log(`Your converstional thoughts on node: ${answer1}`);
              
                  
                  rl.close();

                });
              });
            });
          });
        });
      });
    });
  });

});
