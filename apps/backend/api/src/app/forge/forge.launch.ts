const launch = async () => {
  const axios = (await import('axios')).default;
  const chalk = (await import('chalk')).default;

  try {
    const response = await axios.post('http://localhost:3333/api/forge');
    if (response.status === 201) {
      console.log(chalk.green('Success! Fake data inserted into database.'));
    } else {
      console.log(chalk.red('Error! Try again please.'));
    }
  } catch (err) {
    console.log(chalk.red('Error! Is the server launched?'));
  }
};
launch();
