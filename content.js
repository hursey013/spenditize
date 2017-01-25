var withdrawals = document.querySelectorAll('.dashboard .bg-success');

// Adjust width of dashboard columns
for (let i = 0; i < withdrawals.length; ++i) {
  withdrawals[i].parentNode.parentNode.className = 'col-md-4';
}

// Get current balances of various accounts
var checking = document.querySelector('#balances > div:nth-child(2) .media-right h4');
var debitize = document.querySelector('#balances > div:nth-child(3) .media-right h4');
var credit = document.querySelector('#balances > div:nth-child(4) .media-right h4');

// Subtract the balance of checking & debitize account from credit balance
var spend = (getNumber(checking) + getNumber(debitize)) - getNumber(credit);

// Currency formatting function
var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});

// Insert new spend column into dashboard
document.querySelector('.dashboard > .row > div:nth-child(2)').insertAdjacentHTML('afterend',
  '<div class="col-md-4"><div class="panel panel-default">' +
  '<div class="panel-heading"><h3 class="panel-title">Safe to Spend</h3></div>' +
  '<div class="panel-body text-nowrap bg-' + (spend > 0 ? "success" : "danger") + '">' +
  formatter.format(spend) +
  '</div>' +
  '</div></div>');

// Strip symbols from numbers
function getNumber(val) {
  return Number(val.innerHTML.replace(/[^0-9\.]+/g,""));
}
