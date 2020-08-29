(() => {
  // เริ่มเขียนโค้ด

  // 1. How Asynchronous code works in JavaScript
  
  // function simulateAsycAPI(text,timeout){
  //   setTimeout(() => {console.log(text)}, timeout);
  // }

  // simulateAsycAPI('A',1000);//ผ่านไป1วิก่อนแสดงค่า
  // simulateAsycAPI('B',500);//ผ่านไป0.5วิก่อนแสดงค่า
  // simulateAsycAPI('C',100);//ผ่านไป0.1วิก่อนแสดงค่า
  
  // // 2. Callback
  //   function simulateAsycAPI(text,timeout,callback){
  //      setTimeout(() => {
  //         console.log(text)
  //         if(callback) callback();
  //       }, timeout);
  //    }//ผ่านไปtimeoutวิก่อนแสดงค่า
    
  //    //Callback hell
  //   simulateAsycAPI('A',1000,()=>{
  //     simulateAsycAPI('B',500,()=>{
  //       simulateAsycAPI('C',100);
  //     });
  //   } )

  // 3. Promise
  // function simulateAsycAPI(text,timeout){
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if(text=='B') return reject('B got rejected');
  //       console.log(text);
  //       resolve();
  //     }, timeout);
  //   })
  // }

  // simulateAsycAPI('A',1000)
  //   .then(()=>{
  //     return simulateAsycAPI('B',1000)
  //     .then(()=>{
  //       return simulateAsycAPI('C',1000);
  //     })
  //       .catch((error)=>
  //         console.error(error)
  //       )
  //   })

  // 4. Async/Await
  function simulateAsycAPI(text,timeout){
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          //if(text=='B') return reject('B got rejected');
          console.log(text);
          resolve();
        }, timeout);
    })
  }

  async function run(){
      try{
      await simulateAsycAPI('A',1000);
      await simulateAsycAPI('B',1000);
      await simulateAsycAPI('C',1000);
    } catch(error){
      console.error(error);
    }
  }

  run();

})();
