const sales = [
    { price: 1000, discount: 0.1 },
    { price: 500, discount: 0.05 },
    { price: 100 }
  ];
  
  
  let summary = [];

  sales.forEach((element,i)=> 
     {
    let netPay; 
    if(element['discount']){
        netPay = element['price']-element['price']*element['discount']
    }else{
        netPay = element['price']
     }
    summary.push({netPrice:netPay})
    }
  )

  

  console.log(summary)