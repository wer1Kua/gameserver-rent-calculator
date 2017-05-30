function f(){
  let discount = document.getElementById('discount').value;
  let price_per_month = document.getElementById('price_per_month').value;
  let slots = document.getElementById('slots').value;
  let sum_per_month = Number(price_per_month) * Number(slots);
  let amount_of_days = document.getElementById('amount_of_days').value;
  document.getElementById('sum_per_month').value = Number(price_per_month) * Number(slots);
  document.getElementById('price_per_day').value = Number(sum_per_month) / 30;
  let discount_per_month = Number(sum_per_month) * Number(discount);
  let price_per_day = document.getElementById('price_per_day').value;
  document.getElementById('sum_per_month_with_discount').value = Number(sum_per_month) - Number(discount_per_month);
  document.getElementById('sum_per_number_of_days').value = Number(price_per_day) * Number(amount_of_days);
  let sum_per_number_of_days = document.getElementById('sum_per_number_of_days').value;
  let discount_per_day = Number(price_per_day) * Number(discount);
  let sum_per_days_with_discount = document.getElementById('sum_per_days_with_discount').value = Number(sum_per_number_of_days) - Number(discount_per_day);
  let balance = document.getElementById('balance').value;
  let message = document.getElementById('message');
  message.innerHTML = "";

  try {
    if(balance == "")  throw "не заполнен";
    if(isNaN(balance)) throw "должен быть числовым значением";
    balance = Number(balance);
    if(balance < 0)    throw "не может быть меньше нуля";
    if(balance > 1000)   throw "слишком большой баланс";
  }
  catch(err) {
    message.innerHTML = "Баланс " + err;
  }

  if (balance > sum_per_days_with_discount) {
    document.getElementById('amount_of_days').value = Number(amount_of_days) + 1;
    console.log(amount_of_days + " " + sum_per_days_with_discount);
    document.getElementById('result').innerHTML = "Количество дней: " + amount_of_days +"<br>" + "Сумма денег с учетом скидки: ";
    document.getElementById('result-money').innerHTML = sum_per_days_with_discount;
    f();
  }

  let clipboard = new Clipboard('.btn', {
    target: function() {
      return document.getElementById('result-money');
    }
  });
}