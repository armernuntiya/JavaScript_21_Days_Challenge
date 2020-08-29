(() => {
  // เริ่มเขียนโค้ด

  // 1. NaN

  // if(NaN===NaN){
  //   console.log('Equal');
  // } else {
  //   console.log('Not Equal'); //NaN ไม่เท่ากับตัวมันเองเพราะป้องกันการคำนวณที่ผิดพลาด
  // }
  // EX
  // if(NaN/NaN===1){
  //   console.log('Equal');
  // } else {
  //   console.log('Not Equal');
  // }
  
  // const result = 1/'hello';
  // if(Number.isNaN(result)){//Number.isNaN(val) เช็คว่าตัวแปรทมีค่าเป็นNaNเปล่า
  //   console.log('Equal to Nan');
  // }

  // 2. Type Coercion//การแปลงtypeเองในJS
  if(3 > 2 > 1){//จะแปลแบบ ( 3 > 2 ) > 1 = true > 1 ซึ่ง true=1 ดังนั้นจึงไม่จริง 
    console.log('Inside');
  }

  console.log(2-'1');//แปลง String '1' เป็น Int 1
  console.log(2+'1');//แปลง Int 2 เป็น String '2'

  //แก้ไขโดย Number.parse('1',10) จะได้เป็น Number มา Operation กัน

  //ดังนั้น Number + String จะแปลง Number
  //     Number - String จะแปลง String

  console.log(true+true);// แปลง Bool เป็น Number

  

  // 3. Interpreter & Compiler
  function getPerson(){
    return//เขียนแบบนี้จะถือว่าหลัง return มี ; ตามหลังแล้วจบคำสั่งเลย
    {
      name: 'Tayanon';    
    }//แก้ไขโดยใส่ ; หลัง } บรรทัดนี้

  }
  console.log(getPerson());
  // Outputได้ค่าว่างการเว้นบรรทัดตรงreturn

  // 4. Checking Object Type
  
  const person = null;//nullถือว่าเป็น Object Type
  if(typeof person === 'object' && person !== null){
    console.log('Yes, object');
  }

})();
