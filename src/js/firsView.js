export default function(){
    //获取小圆点
    const pointsNodes = document.querySelectorAll('.home-points li');
    //获取li
    const liNodes = document.querySelectorAll('.home-carousel li');
    const homeNode = document.querySelector('.home')
    //记录上次的下标
    let lastIndex = 0;
    //记录当前下标
    let nowIndex = 0;
    //记录上一次触发的时间设置函数节流
    let lastTime = 0;
    let timer = null;
    //绑定单击事件
    for (let i = 0; i <pointsNodes .length; i++) {
        pointsNodes[i].onclick =function(){
            //函数节流
            const nowTime =Date.now();
            if (Date.now() - lastTime <= 2500) return
            //将当前下标同意小圆点下标
            nowIndex= i;
            if (nowIndex > lastIndex) {
                //说明点击的是右边
                liNodes[nowIndex].className = 'common-title rightShow';
                liNodes[lastIndex].className = 'common-title leftHide';
            } else {
                //说明点击是左边
                liNodes[nowIndex].className = 'common-title leftShow';
                liNodes[lastIndex].className = 'common-title rightHide';
            }
            //上一次的小圆点清空给当前点击的加上active
            pointsNodes[lastIndex].className = '';
            pointsNodes[nowIndex].className='active';
            //同步更新上一次下标
            lastIndex = nowIndex;
            //函数节流
            lastTime = nowTime;
        }
    }
    //自动轮播
    function autoPlay(){
        timer = setInterval(()=> {
            nowIndex++;
            if (nowIndex === 4) nowIndex = 0;
            //说明从右边循环
            liNodes[nowIndex].className = 'common-title rightShow';
            liNodes[lastIndex].className = 'common-title leftHide';
            //上一次的小圆点清空给当前点击的加上active
            pointsNodes[lastIndex].className = '';
            pointsNodes[nowIndex].className='active';
            //同步更新上一次下标
            lastIndex = nowIndex;
        },3000)
    }
    //开启自动轮播
    autoPlay();
    //绑定鼠标移入移出事件mouseenter mouseleave
    homeNode.onmouseenter = function(){
        //清除轮播
        clearInterval(timer);
    }
    homeNode.onmouseleave = autoPlay;

}