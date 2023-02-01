import chalk from 'chalk';

const launch = async () => {
  try {
    const response = await fetch('http://localhost/api/forge', {
      method: 'POST',
    });
    if (response.status === 201) {
      console.log(chalk.green('Success! Fake data inserted into database.'));
    } else {
      console.log(chalk.red('Error! Is the server launched?'));
    }
  } catch (err) {
    console.log(chalk.red('Error! Is the server launched?'));
  }
};
launch();
