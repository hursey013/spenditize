var manifest = chrome.runtime.getManifest();

var checking = document.querySelector('#balances > .wrap-media h4.text-nowrap');
var withdrawals = document.querySelectorAll('.dashboard .bg-success'), i;
var sum = 0;

for (i = 0; i < withdrawals.length; ++i) {
  withdrawals[i].parentNode.parentNode.className = 'col-md-4';
  sum += getNumber(withdrawals[i]);
}

var spend = getNumber(checking) - sum;

document.querySelector('.dashboard > .row').insertAdjacentHTML('afterbegin',
  '<div class="col-md-4"><div class="panel panel-default">' +
  '<div class="panel-heading"><h3 class="panel-title"><strong>Safe to Spend</strong></h3></div>' +
  '<div class="panel-body text-nowrap bg-success text-success"><strong>$' +
  spend.toFixed(2) +
  '</strong></div>' +
  '</div></div>');

function getNumber(val) {
  return Number(val.innerHTML.replace(/[^0-9\.]+/g,""));
}
