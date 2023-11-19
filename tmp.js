fetch("http://101.43.180.155:8888")
  .then((result) => {
    console.log({ result });
  })
  .catch((e) => {
    console.log({ e });
  });
