$(function(){
    /*加载一级菜单和二级菜单*/
    $.get("js/data.json",function(data){
        $(".menu >ul >li").html("");
        var menu="";
        var subMenu="";
        var icons=["&#xe647;","&#xe627;"];
        for(var i=0;i<data.data.menu.length;i++){
            menu +="<li><p class='tit iconfont down'><i class='iconfont'>"+icons[i]+"</i>"+data.data.menu[i].name+"</p></li>";
            var subMenuStr="";
            for(var j=0;j<data.data.menu[i].submenu.length;j++){
                subMenuStr+="<li><a href="+data.data.menu[i].submenu[j].url+">"+data.data.menu[i].submenu[j].name+"</a>";
            }
            subMenu ="<ul class='menu-list'>"+subMenuStr+"</ul>";
        }
        $(".menu >ul").append(menu);
        $(".menu >ul >li").append(subMenu);
    })
    /*菜单折叠事件*/
    $(".menu>ul").on('click','.tit',function(){
        $(".tit").not($(this)).parent().children(".menu-list").hide();
        $(".tit").not($(this)).removeClass("up").addClass("down");
        $(this).siblings(".menu-list").toggle();
        var flag=$(this).siblings(".menu-list").css('display')=='block';
        if(flag){
            $(this).removeClass("down").addClass("up");
        }else{
            $(this).removeClass("up").addClass("down");
        }
    })

    $(".menu>ul").on('click','menu-list li',function(){
            alert($(this).index());
    })

})

/*登陆页面&&密码修改页面*/
$(function(){
    /*失去焦点时输入框检查*/
    $("#user-name,#changeName").blur(function(){
        checkName(this);
    })
    $("#user-password,#oldPassword,#newPassword").blur(function(){
        checkPassword(this);
    })
    $("#repeatPassword").blur(function(){
        checkRepeatPassword();
    })
    /*新密码重新输入时检查重复密码*/
    $("#newPassword").bind("change",function(){
        if($("#repeatPassword").val()!=""){
            checkRepeatPassword();
        }
    })
    /*登录操作*/
    $(".btn-login").click(function(){
        if(checkName("#user-name")&&checkPassword("#user-password")){
            alert("登录成功");
            window.location.href="page.html";
            /*var userName=$("#user-name").val();
            var password=$("#user-password").val();
            alert("登录");
            $.ajax({
                type:"POST",
                url:"",
                dataType:"json",
                data: {"userName":userName,"password":password},
                success:function(data){
                    if(data.code=1){
                        alert("ok");
                    }
                }
            })*/
        }
    })
    /*验证用户名*/
    function checkName(id){
        var reg=/(^[A-Za-z0-9]{3,16}$)|(^[\u4E00-\u9FA5]{2,8}$)/;
        var name=$(id).val();
        var flag=reg.test(name);
        if(!flag){
            $(id).siblings(".error-tips").css("display","block");
            return false;
        }else{
            $(id).siblings(".error-tips").css("display","none");
        }
        return true;
    }
   /* 验证密码*/
    function checkPassword(id){
        var reg=/^[a-zA-Z0-9~!@#$%^&*()=+\-_\|.\?\/\\\[\]{};:'",<>]{6,16}$/;
        var password=$(id).val();
        var flag=reg.test(password);
        if(!flag){
            $(id).siblings(".error-tips").css("display","block");
            return false;
        }else{
            $(id).siblings(".error-tips").css("display","none");
        }
        return true;
    }
    /*重复密码验证*/
    function checkRepeatPassword(){
        if($("#repeatPassword").val()!=$("#newPassword").val()){
            $("#repeatPassword").siblings(".error-tips").html("重复密码与新密码不一致！")
            $("#repeatPassword").siblings(".error-tips").css("display","block");
            return false;
        }else{
            $("#repeatPassword").siblings(".error-tips").html("请输入6-16位密码，区分大小写，不能使用空格！")
            checkPassword("#repeatPassword");
        }
        return true;
    }
    /*修改密码提交操作*/
    $(".btn-change").click(function(){
        var flag=checkName("#changeName")&&checkPassword("#oldPassword")&&checkPassword("#newPassword")&&checkRepeatPassword();
        console.log(flag);
        if(flag){
            var userName=$("#changeName").val();
            var oldPassword=$("#oldPassword").val();
            var newPassword=$("#newPassword").val();
            $.ajax({
                type:"POST",
                url:"",
                dataType:"json",
                data: {"userName":userName,"oldPassword":oldPassword,"newPassword":newPassword},
                success:function(data){
                    if(data.code=1){
                        alert("ok");
                    }
                },
                error:function(){
                    $(".change-tips").html("提交未成功，请重新操作！")
                    $(".change-tips").css("display","block");
                }
            })
        }
    })
})



