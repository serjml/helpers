async function getUsers(names) {
  let jobs = [];

  for (let name of names) {
    let job = fetch(`https://api.github.com/users/${name}`).then(
      (response) => {
        if (response.status != 200) {
          return null;
        } else {
          return response.json();
        }
      },
      (failResponse) => {
        return null;
      },
    );
    jobs.push(job);
  }

  let results = await Promise.all(jobs);

  return results;
}
