export default function(){
    //实现头部点击切换class
    const LiNodes=document.querySelectorAll('.nav li');
    const arrowNode=document.querySelector('.arrow');
//缓存小箭头一半的宽度
    const arrowHalfWidth = arrowNode.offsetWidth / 2;
//便利绑定事件监听
    for (let i = 0; i < LiNodes.length; i++) {
        LiNodes[i].onclick =function () {
            //清除class样式
            for (var j = 0; j < LiNodes.length; j++) {
                LiNodes[j].className='';
            }
            //当前点击哪个谁添加样式
            this.className='active';
            //切换小箭头的位置
            arrowNode.style.left=LiNodes[i].getBoundingClientRect().left + LiNodes[i].offsetWidth /2 -arrowHalfWidth +'px';
        };
    }
    arrowNode.style.left =LiNodes[0].getBoundingClientRect().left + LiNodes[0].offsetWidth /2 -arrowHalfWidth +'px';
}