// Negative Zero

var trendRate = -0;
trendRate === -0;//true

trendRate.toString();//'0' oops!
trendRate ===0;//true oops!
trendRate<0//flase
trendRate>0//false

Object.is(trendRate,-0);//true
Object.is(trendRate,0);//false

Math.sign(-3)//-1
Math.sign(3)//1
Math.sign(-0)//0 Wtf
Math.sign(0)//0 wtf

// 'fix' math.sign(..)

function sign(v){
    return v !== 0 ? Math.sign(v) : Object.is(v,-0) ? -1 :1;
}

sign(-3);//-1
sign(3);//1
sign(-0);//-1
sign(0);//1

function formatTrend(trendRate){
    var direction = 
    (trendRate < 0||Object.is(trendRate,-0)) ? 'Down ':'up';
    return `${direction} ${Math.abs(trendRate)}`;
}
formatTrend(-3);//'Down3'
formatTrend(3);//'up3'
formatTrend(-0);//'Down0'
formatTrend(0);//'up'