import { Vue } from 'vue-property-decorator';
import {getCurrentInstance,eventCenter} from '@tarojs/taro'
export default class TaroTest extends Vue{

    mounted():void{
        if(getCurrentInstance().router){
            const router:any = getCurrentInstance().router
            eventCenter.once(router.onShow, () => {
                console.log('执行一些页面返回值后的刷新逻辑')
            })
        }
    }
    // 此代码在任何情况下都不执行
    onShow(){
        console.log('onshow')
    }

}