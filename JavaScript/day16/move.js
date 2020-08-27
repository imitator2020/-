        
        /*
         * 定义一个函数，用来获取指定元素的当前的样式
         * 参数：
         * 		obj 要获取样式的元素
         * 		name 要获取的样式名
         */

        function getStyle(obj, name) {

            if (window.getComputedStyle) {
                //正常浏览器的方式，具有getComputedStyle()方法
                return getComputedStyle(obj, null)[name];
            } else {
                //IE8的方式，没有getComputedStyle()方法
                return obj.currentStyle[name];
            }

            //return window.getComputedStyle?getComputedStyle(obj , null)[name]:obj.currentStyle[name];

        }
        /*定义一个动画移动函数
        obj:需要移动的对象
        arr:需要改变的属性
        target:移动的位置
        speed:移动速度
        callback:回调函数
        */
        function move(obj,arr,target,speed,callback) {
            //取消该元素上一次的点击而启动的定时器
            clearInterval(obj.timer);//用obj.timer是为了放置多个对象执行动画的时候，定时器产生冲突
            //获取初始位置，用于判断移动方向（速度的正负）
            var currentLocation = parseInt(getStyle(obj, arr));
            //如果目标位置在原来位置的左侧，速度为负值，即向左为负，向右为正
            if(target<currentLocation){
                speed=-speed;
            }
            //启动定时器，按下按钮后移动,需要给要移动的元素开启定位
            obj.timer = setInterval(function () {
                //获取原来的左边的距离，需要事先设置left值为零，不然获取到的是auto。该行代码需要放置在定时器内，不然会最终效果是点击按钮只移动一次
                var oldValue = parseInt(getStyle(obj, arr));
                //动画执行完成            
                if (oldValue == target) {

                    clearInterval(obj.timer);
                    callback && callback();
                };
                var newValue = oldValue + speed;
                if(speed>0&&newValue>target || speed<0&&newValue<target){
                    newValue=target;
                }
                obj.style[arr] = newValue+"px";    //因为arr是变量，所以用[]

            }, 30);
        }