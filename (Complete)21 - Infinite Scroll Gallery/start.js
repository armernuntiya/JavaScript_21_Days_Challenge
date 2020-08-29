(() => {

  const KEY = 'sWTIPIYrLvbGV1JWYMJmnU9psH3bqKzlnJO4sxVozBI';
  const loaderElem = document.querySelector('.loader');
  let page = 1;

  function showLoader(){
    loaderElem.classList.add('visible');
  }

  function hideLoader(){
    loaderElem.classList.remove('visible');
  }

  async function displatImages(){

    showLoader();

    const result = await fetch(`https://api.unsplash.com/photos/?client_id=${KEY}&page=${page}`);
    const images = await result.json();
    const galleryElem = document.querySelector('.gallery');

    images.forEach(image => {
      const imgElem = document.createElement('img');
      imgElem.src = image.urls.small;

      galleryElem.appendChild(imgElem);
      
    });
    
    hideLoader();

    page+=1;
  }

  function onScroll(){
    const {scrollTop,clientHeight,scrollHeight} = document.documentElement;
    
    if(scrollTop+clientHeight>=scrollHeight-10){
      displatImages();
    }
  }

  function run(){
    document.addEventListener('scroll',onScroll);
    displatImages();

  }

  run();
})();
