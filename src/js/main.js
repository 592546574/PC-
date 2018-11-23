export default function(){
    //实现头部点击切换class
    const LiNodes=document.querySelectorAll('.nav li');
    const arrowNode=document.querySelector('.arrow');
    //获取li
    const ulNode = document.querySelector('#content>ul');
    //获取content
    const contentNode = document.querySelector('#content');

    //缓存小箭头一半的宽度
    const arrowHalfWidth = arrowNode.offsetWidth / 2;


    //缓存高度
    let contentHeight = contentNode.offsetHeight;
    //代表li的下表为0
    let nowIndex = 0;
    //先绑定ie/chrome
    document.onmousewheel = wheel;
    //绑定firefox
    document.addEventListener && document.addEventListener('DOMMouseScroll',wheel);
    function wheel(event) {
        event = event || window.event;

        var flag = '';
        if (event.wheelDelta) {
            //ie/chrome
            if (event.wheelDelta > 0) {
                flag = 'up';
            } else {
                flag = 'down';
            }
        } else if (event.detail) {
            //firefox
            if (event.detail < 0) {
                flag = 'up';
            } else {
                flag = 'down';
            }
        }

        switch (flag) {
            case 'up' :
                if (nowIndex > 0){
                    nowIndex--;
                    move(nowIndex);
                }
                break;
            case 'down' :
                if (nowIndex < 4){
                    nowIndex++;
                    move(nowIndex);

                }
                break;
        }

        //禁止默认行为
        event.preventDefault && event.preventDefault();
        return false;
    }


    function move() {
        //清除class样式
        for (var j = 0; j < LiNodes.length; j++) {
            LiNodes[j].className='';
            //当前点击哪个谁添加样式
            LiNodes[nowIndex].className='active';
            //切换小箭头的位置
            arrowNode.style.left=LiNodes[nowIndex].getBoundingClientRect().left + LiNodes[nowIndex].offsetWidth /2 -arrowHalfWidth +'px';
            //内容区的top
            ulNode.style.top = - nowIndex * contentHeight + 'px';
        }
    }



//便利绑定事件监听
    for (let i = 0; i < LiNodes.length; i++) {
        LiNodes[i].onclick =function () {
            //初始化nowIndex的值
            nowIndex = i;
            move(nowIndex);

        };
    }
    arrowNode.style.left =LiNodes[0].getBoundingClientRect().left + LiNodes[0].offsetWidth /2 -arrowHalfWidth +'px';
}