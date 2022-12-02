const bt = document.getElementById('bt');
bt.addEventListener('click',function(){
const amount = document.getElementById('amount').value;

    const rate = document.getElementById('rate').value;

    const month = document.getElementById('month').value;

    const interest = (amount * (rate * 0.01)) / month;

    const monthlypayment = ((amount / month) + interest).toFixed(2);
	
    const totalinterestcost = (interest * month).toFixed(2);
	const totalrepayment = (monthlypayment * month).toFixed(2);
    
    document.getElementById('result').innerHTML='  (₹)'+monthlypayment
	
    document.getElementById('interest').innerHTML='  (₹)'+totalinterestcost
	
    document.getElementById('final').innerHTML='  (₹)'+totalrepayment
    

})