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
  document.getElementById('sum_per_days_with_discount').value = Number(sum_per_number_of_days) - Number(discount_per_day);
}