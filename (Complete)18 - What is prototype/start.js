(() => {
  // เริ่มเขียนโค้ด

  // 1. Class vs Prototype 
  //Class ทำให้สร้าง Prototype ได้ง่ายขึ้น
  // class Person {

  // }
  // const Tayanon = new Person();
  //Output : __proto__: Object

  // 2. What's prototype?
  // const name = 'Tayanon';
  // console.log(name);

  // const arr = [];
  // console.log(arr.__proto__);
  //มี method ของ Array อยู่ทำให้สามารถเรียกใช้ได้
  //เก็บใน Prototype เพื่อไม่ให้เปลือง Memory

  // 3. Prototype chain
  // const name = 'Tayanon';
  // console.log(name.__proto__);
  // console.log(name.toLocaleString())
  //มี __proto__ ซ้อนอยู่ซึ่งก็คือของตัว method ที่เราประกาศเอง


  // 4. Extend a prototype
  const name = 'Tayanon';
  function sayHello(val){
    console.log(`Hello ${val}`);
  }
  String.prototype.sayHello = sayHello;//ไม่นิยมเพราะหากมีคนมาตั้ง Method ทับจะทำให้ใช้ Method เราไม่ได้
  console.log(name.__proto__);
  name.sayHello('World');
})();
