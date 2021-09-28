export default {
  changeCss: () => {
    let arrayOfColors = [
      '#8970b4',
      '#ffb83d',
      '#8b6646',
      '#e68734',
      '#d66860',
      '#fd6163',
      '#7f69b8',
      '#504c46',
      '#5d8b42',
      '#3cafb3',
      '#794646',
      '#45aaf3',
      '#135166',
      '#0ab1a0',
      '#61b326',
      '#7327ee',
      '#c950c9',
    ];

    let randomColor = Math.floor(Math.random() * arrayOfColors.length);

    const bodyElement = document.getElementsByTagName('body')[0];
    const textElement = document.getElementById('text');
    const authorElement = document.getElementById('author');
    const tweetElement = document.getElementById('tweet-quote');
    const tumblrElement = document.getElementById('tumblr-quote');
    const buttonElement = document.getElementById('new-quote');

    bodyElement.style.cssText =
      'background-color:' + arrayOfColors[randomColor];
    textElement.style.cssText = 'color:' + arrayOfColors[randomColor];
    authorElement.style.cssText = 'color:' + arrayOfColors[randomColor];
    tweetElement.style.cssText =
      'background-color:' + arrayOfColors[randomColor];
    tumblrElement.style.cssText =
      'background-color:' + arrayOfColors[randomColor];
    buttonElement.style.cssText =
      'background-color:' + arrayOfColors[randomColor];
  },
};
