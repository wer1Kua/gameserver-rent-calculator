function f(){
  let balance = document.getElementById('balance').value,
  discount = document.getElementById('discount').value,
  price_per_month = document.getElementById('price_per_month').value,
  slots = document.getElementById('slots').value,
  sum_per_month = Number(price_per_month) * Number(slots),
  amount_of_days = document.getElementById('amount_of_days').value,
  discount_per_month = Number(sum_per_month) * Number(discount),
  sum_per_month_with_discount = Number(sum_per_month) - Number(discount_per_month),
  sum_per_days_with_discount = Number(amount_of_days) * Number(sum_per_month_with_discount) / 30,
  message = document.getElementById('message');

  message.innerHTML = "";

  try {
    if(balance == "") throw "не заполнен.";
    if(isNaN(balance)) throw "должен иметь числовое значение.";
    balance = Number(balance);
    if(balance === 0) throw "не может быть нулевым.";
    if(balance < 0) throw "не может быть меньше нуля.";
    if(balance > 1000) throw "слишком большой баланс.";
  }
  catch(err) {
    message.innerHTML = "Баланс " + err;
  }

  if (balance >= sum_per_days_with_discount) {
    document.getElementById('amount_of_days').value = Number(amount_of_days) + 1;
    document.getElementById('result').innerHTML = "Продлить на " + amount_of_days +" дней <br>" + "Будет потрачено: " + sum_per_days_with_discount;
    document.getElementById('money-left').innerHTML = (Number(balance) - sum_per_days_with_discount).toFixed(2);
    document.getElementById('copied').innerHTML = "Остаток баланса скопирован в буфер :)";
    f();
  }

  let clipboard = new Clipboard('.btn', {
    target: function() {
      return document.getElementById('money-left');
    }
  });
}
