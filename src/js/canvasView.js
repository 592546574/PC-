export default function(){
    //获取li
    const liNodes = document.querySelectorAll('.team-list li');
    //获取ul当鼠标移出所有透明度恢复
    const ulNode =document.querySelector('.team-list');
    //绑定鼠标移入移出事件改变透明度
    for (let i = 0; i <liNodes .length; i++) {
        liNodes[i].onmouseenter=function(){
            //改变li透明度
            for (var j = 0; j <liNodes .length; j++) {
                liNodes[j].style.opacity=0.5;
            }
            this.style.opacity=1;
        }
    }
    ulNode.onmouseleave=function(){
        for (var j = 0; j < liNodes.length; j++) {
            liNodes[j].style.opacity=1;
        }
    }


}