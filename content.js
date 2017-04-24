var withdrawals = document.querySelectorAll('.dashboard .bg-success');
var checking = document.querySelector('#balances > div:nth-child(2) .media-right:last-child h4');
var debitize = document.querySelector('#balances > div:nth-child(3) .media-right:last-child h4');
var credit = document.querySelector('#balances > div:nth-child(4) .media-right:last-child h4');

// Subtract the credit balance from the balance of the checking & debitize accounts
var spend = (getNumber(checking) + getNumber(debitize)) - getNumber(credit);

// Currency formatting
var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});

// Adjust width of dashboard columns
for (let i = 0; i < withdrawals.length; ++i) {
  withdrawals[i].parentNode.parentNode.className = 'col-md-4';
}

// Insert new spend column into dashboard
document.querySelector('.dashboard > .row > div:nth-child(2)').insertAdjacentHTML('afterend',
  `<div class="col-md-4"><div class="panel panel-default">
    <div class="panel-heading"><h3 class="panel-title">Safe to Spend</h3></div>
      <div class="panel-body text-nowrap bg-${(spend > 0) ? 'success' : 'danger'}">
        ${formatter.format(spend)}
      </div>
    </div>
  </div>`);

// Strip symbols from numbers
function getNumber(val) {
  return Number(val.innerHTML.replace(/[^0-9\.]+/g,''));
}
