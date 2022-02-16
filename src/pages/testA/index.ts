import { Vue, Component } from 'vue-property-decorator';
import Taro,{getCurrentInstance,eventCenter} from '@tarojs/taro'
@Component({
    components:{
    }
})
export default class TestAPage extends Vue{
    mounted():void{
        if(getCurrentInstance().router){
            // 期望每次页面出现时都执行此处代码，及与原生的微信小程序保持一致
            const router:any = getCurrentInstance().router
            eventCenter.once(router.onShow, () => {
                console.log('执行一些页面返回时的刷新逻辑')
            })
        }
    }

    gotoB(){
        Taro.navigateTo({ url: `/pages/testB/index` });
    }
    // 此处生命周期永远不执行
    onShow(){
        console.log('onshow')
    }
}