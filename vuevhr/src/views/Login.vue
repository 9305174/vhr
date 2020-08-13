<template>
    <div>
        <el-form :rules="rules" ref="loginForm" :model="loginForm" class="loginContainer">
            <h3 class="loginTitle">系统登录</h3>
            <el-form-item  prop="username" >
                <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item  prop="password">
                <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-checkbox class="loginRemember" v-model="checked">记住我</el-checkbox>
            <el-button type="primary" style="width: 100%;" @click="submitLogin">登录</el-button>
        </el-form>
    </div>
</template>

<script>


    export default {
        name: "Login",
        data(){
            return{
                checked:true,
                loginForm:{
                    username:'admin',
                    password:'123'
                },
                rules:{
                    username:[{required:true,message:'请输入用户名',trigger:'blur'}],
                    password:[{required:true,message:'请输入密码',trigger:'blur'}]
                }

            }
        },
        methods:{
            submitLogin(){
                this.$refs.loginForm.validate((valid) => {
                    if (valid) {
                        this.postKeyValueRequest('/doLogin',this.loginForm).then(resp=>{
                            if (resp){
                             window.sessionStorage.getItem("user",JSON.stringify(resp.obj));
                             this.$router.replace("/home")
                            }
                        })
                    } else {
                        this.$message.error('请输入全部字段!');
                        return false;
                    }
                });
            }
        }
    }
</script>

<style >
    .loginContainer{
        /* 边框 */
        border-radius: 15px;
        /* 卡片效果 */
        background-clip: padding-box;
        /* 边距 上下180px 左右自动 */
        margin: 180px auto;
        /* 宽度350px */
        width: 350px;
        /* 内边距   上   右   下   左*/
        padding: 15px 35px 15px 35px;
        /* 背景 */
        background: #ffffff;
        /* 边框 */
        border: 1px solid #eaeaea;
        /* 模糊效果   水平位置 垂直位置 可模糊的位置 模糊的颜色*/
        box-shadow: 0 0 25px #cac6c6;

    }
    .loginTitle{
        /* 边距  上  右   下    左 */
        margin: 0px auto 40px auto;
        /* 文本居中 */
        text-align: center;
        /* 颜色 */
        color: #505458;
    }
    .loginRemember{
        /* 文本居左 */
        text-align: left;
        /* 边距  上  右   下    左 */
        margin: 0px 0px 20px 0px;
    }

</style>