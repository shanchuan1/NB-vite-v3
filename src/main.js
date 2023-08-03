import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css';





import {
  Button,
  Icon,
  Skeleton,
  Form,
  Field,
  Swipe, SwipeItem,
  ActionBar, ActionBarIcon, ActionBarButton,
  SwipeCell,
  Checkbox, CheckboxGroup,
  Card,
  Stepper,
  SubmitBar,
  AddressList, AddressEdit,
  Tab,Tabs,
  PullRefresh,List,
} from 'vant';


const app = createApp(App)
app.use(store)
app.use(router)
app.use(Button)
app.use(Icon)
app.use(Skeleton)
app.use(Form)
app.use(Field)
app.use(Swipe)
app.use(SwipeItem)
app.use(ActionBar)
app.use(ActionBarIcon)
app.use(ActionBarButton)
app.use(SwipeCell)
app.use(Checkbox)
app.use(CheckboxGroup)
app.use(Card)
app.use(Stepper)
app.use(SubmitBar)
app.use(AddressList)
app.use(AddressEdit)
app.use(Tab)
app.use(Tabs)
app.use(PullRefresh)
app.use(List)






// 全局过滤器
app.config.globalProperties.$filters = {
  prefix(url) {
    if (url && url.startsWith('http')) {
      return url
    } else {
      url = `http://backend-api-01.newbee.ltd${url}`
      return url
    }
  }
}

app.mount('#app')
