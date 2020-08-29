(() => {

  const konmiCode=[
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a'
  ];

  let index=0;

  function onKeyDown(event){
    event.key === konmiCode[index] ? index++:index=0;

    if(konmiCode.length===index){
        startSnowing();
    }
  }


  function run(){
    document.addEventListener('keydown', onKeyDown);



  }

  run();
})();
