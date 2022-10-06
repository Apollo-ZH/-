var r = 250;//半径
var itemList = $('.news li');//选择元素的父元素
var count = itemList.length;//选择元素的个数
//平均分布到圆的边上
function dispatch(exDeg){ //exDeg：是增加的角度
    var pieceDeg = 360 /count;//每个单位的角度

    for(var i = 0 ; i < count ; i++){
        var li = itemList[i];//获得单位
        var deg = i * pieceDeg + exDeg;//每个单位转动的角度
        var rad = ((2 * Math.PI) / 360) * deg;//每个单位转动的弧度
        //设置单位坐标
        var x = Math.sin(rad) * r;
        var y = Math.cos(rad) * r;
        //把单位转标发送到html页面
        li.style.transform = 'translate('+x+'px,'+y+'px)';
    }
}
dispatch(0);

var timeId = null;//计时器
var curExDef = 0;//旋转额外角度
//自动旋转

function start(){
    if(timeId){
        return;//获得时间就退出
    }
    timeId = setInterval(function(){
        dispatch(curExDef);
        curExDef += 0.5;
        if(curExDef > 360){
            curExDef -= 360;
        }
    },16);
}
//停止自动旋转
itemList.mouseover(function (){
        clearInterval(timeId);
        timeId = null;
})

itemList.mouseout(function (){start()});
start();

var map =$('.map');
var tec = $('.teacher');
// map.onmousemove = function(e){
//     var x = e.clientX;
//     if(x > document.documentElement.clientWidth / 2){
//         //鼠标在右边
//         tec.className = 'teacher';
//     }else{
//         tec.className = 'teacher teacher-left'
//     }
// };
map.mousemove(function(e){
    var x = e.clientX;
    if(x > $(this).innerWidth()/2){
        tec.attr('class','teacher');
    }
    else{
        tec.attr('class','teacher teacher-left');
    }
})