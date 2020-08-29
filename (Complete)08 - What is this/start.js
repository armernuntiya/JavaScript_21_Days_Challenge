(() => {
  // เริ่มเขียนโค้ด

  // 1. Lexical scope & Dynamic scope
  // function printname(){
  //     console.log(this);

  // }
  
  // 2. How to know what is "this"?
  // function printname(){
  //   console.log(this);
  //   console.log(`My name is ${this.name}`);
  // }
  
  //// 2.1 Invoker object
  // const tayanon = {name:'Tayanon',printname};
  // const jane = {name:'Jane',printname};

  // tayanon.printname();
  // jane.printname();
  
  //// 2.2 Global object (window, global)
  // name = 'Global';
  // printname();
  
  //// 2.3 Constructor function
  // function Person(name){
  //   this.name=name;
  //   this.printname = printname;
  // }

  // const tayanon = new Person('Tayanon');

  // tayanon.printname();
  
  // 3. call(), apply(), and bind()
  function printName(nationality,city){
      console.log(this);
      console.log(`My name is ${this.name},I'm ${this.nationality} and am living in ${this.city}`);
  }
  
  function Person(name,nationality,city){
    this.name=name;
    this.nationality=nationality;
    this.city=city;
    
    printName(this.nationality,this.city);
    printName.call(this,this.nationality,this.city);
    printName.apply(this,[this.nationality,this.city]);
    
    
    const printTayanon = printName.bind(this);
    printTayanon(this.nationality,this.city);
  }

  const tayanon = new Person('Tayanon','Thai','Bangkok')

})();
