const costCal=(p,r,t,n)=>{
    var newcost=p*Math.pow((1-r/100),n*t);
    var low=newcost*(1-.05);
    var high=newcost*(1+.05);
    var arr=[low,high];
    return arr;
}

console.log(costCal(690000,24,3,1))