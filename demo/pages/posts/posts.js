//首先在页面里面，通过调用getApp获取到小程序的实例
var app = getApp();
//创建一个页面的实例
Page({
    //页面所需要的数据
    data:{
        posts:{
            username:'李志远',
            password:'123456',
            date:new Date()
        }
    },
    //相应一些事件
    toDo:function(e){
        console.log(1);
    }
})