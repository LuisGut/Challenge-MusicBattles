function printN () {
    let strToPrint = ['Music', 'TI', 'Musical'];
    let arr = [];
    for (i = 1; i <= 100; i++) {
      if (i % 3 == 0 || i % 5 == 0) {
        arr.push(strToPrint[Number(i % 5 == 0 && i % 3 >= 1) + (Number(i % 3 == 0 && i % 5 == 0) * 2)]);
        continue;
      }
      arr.push(i);
    }
    console.log(arr);
    }
    
    printN();