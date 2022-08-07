const product1 = {
    name: 'Water',
    distributor: {
      name: 'Giraffe Water Company',
      address: {
        street: 'Phetchaburi',
        subdistrict: 'Thanonphetchaburi',
        district: 'Ratchathewi',
        province: 'Bangkok'
      }
    }
  };

let product2 = {}
console.log(product1.distributor.address.province)
// product2 = product1
console.log(product2.distributor?.address?.province)

