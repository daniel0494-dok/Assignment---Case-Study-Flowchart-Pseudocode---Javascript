function hitungCheckout(price, quantity, member) {
  if (
    !Number.isInteger(price) ||
    price <= 0 ||
    !Number.isInteger(quantity) ||
    quantity <= 0 ||
    typeof member !== "boolean"
  ) {
    return "input not valid";
  }

  const subTotal = price * quantity;
  const discount = member ? subTotal * 0.1 : 0;
  const total = subTotal - discount;
  const shppingCost = total < 250000 ? 15000 : 0;
  const totalPayment = total + shppingCost;

  return {
    total: subTotal,
    discount: discount,
    shippingCost: shppingCost,
    totalPayment: totalPayment,
  };
}

// console.log(hitungCheckout(4000, 26, true)); //testing jika member
// console.log(hitungCheckout(4000, 26, false)); //testing non-member
// console.log(hitungCheckout(3000, 20, true)); //testing total dibawah 250000
console.log(hitungCheckout(5000, 50, true)); //testing total tepat 250000
// console.log(hitungCheckout(4000, 82, true)); //testing total diatas 250000
// console.log(hitungCheckout(3000, 0, true)); //testing jumlah 0
// console.log(hitungCheckout(4000, 2.5, true)); //testing jumlah pecahan
// console.log(hitungCheckout(4000.5, 25, true)); //testing harga tidak valid
