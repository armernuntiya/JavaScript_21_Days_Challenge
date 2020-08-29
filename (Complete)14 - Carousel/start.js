(() => {

  let currentIndex = 0;

  function displayImage(imageElems,newIndex){



    const newImage = imageElems[newIndex];
    newImage.scrollIntoView({behavior:'smooth'});

    currentIndex=newIndex;
  }

  function run(){
    const imageElems = document.querySelectorAll('img');
    const previousBtnElem = document.querySelector('.previous');
    const nextBtnElem = document.querySelector('.next');
    
    previousBtnElem.addEventListener('click',()=> displayImage(imageElems,(currentIndex+imageElems.length-1)%imageElems.length));
    nextBtnElem.addEventListener('click',()=> displayImage(imageElems,(currentIndex+imageElems.length+1)%imageElems.length));

  }

  

  run();
})();
