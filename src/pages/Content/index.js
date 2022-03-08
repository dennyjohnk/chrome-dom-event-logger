console.log('Content script works!');

document.addEventListener('keyup', (event) => {
  console.log(
    event.type,
    'at ',
    event.target.className,
    document.getElementsByClassName(event.target.className)[0].value
  );
});

Object.keys(window).forEach((key) => {
  if (/^on/.test(key)) {
    window.addEventListener(key.slice(2), (event) => {
      console.log(key, 'at ' + event.target.className);
    });
  }
});
