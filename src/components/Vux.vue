<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="登录页">
        <div class="mobileWrap fullColor">
          <div class="mHeader">
            <h1>XXXXXX</h1>
            <h1>XXXXXX</h1>
          </div>
          <div class="mContent">
            <group>
              <x-input title="" placeholder="请输入账号" v-model="user"></x-input>
              <x-input title="" placeholder="请输入密码" v-model="psw"></x-input>
            </group>
            <x-button type="default">登录</x-button>
          </div>
        </div>
        <!--<iphone></iphone>-->
      </el-tab-pane>
      <el-tab-pane label="主界面">
        <div class="mobileWrap fullColor">
          <div class="menu">
            <a href="#">客户下单</a>
            <a href="#">订单查询</a>
            <a href="#">配送定位</a>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="客户下单">
        <div class="mobileWrap">
          <group>
            <x-input title="订单号码" placeholder="订单号码" v-model="num"></x-input>
            <selector title="订单状态" :options="list" v-model="listValue"></selector>
            <datetime title="下单时间" v-model="dateValue" @on-change="change"></datetime>
            <x-input title="产品名称" placeholder="产品名称" v-model="good"></x-input>
            <x-switch title="是否过磅"></x-switch>
            <x-textarea title="备注" :max="20" placeholder="请输入备注信息"></x-textarea>
          </group>
        </div>
      </el-tab-pane>
      <el-tab-pane label="订单查询">
        <div class="mobileWrap">
          <div class="searchDiv">
            <x-button>筛选</x-button>
            <search></search>
            <x-button>排序</x-button>
          </div>
          <div class="listDiv">
            <ul>
              <li>hello world</li>
              <li>hello world</li>
              <li>hello world</li>
              <li>hello world</li>
              <li>hello world</li>
            </ul>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="配送定位">
        <div class="mobileWrap mapDiv">
          <el-amap vid="amapDemo" :plugin="plugin">
            <!--<el-amap-marker v-for="marker in markers" :position="marker.position" :key="marker.id"></el-amap-marker>-->
          </el-amap>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import iphone from './iphone'
import { Group, Cell, XInput, XButton, Selector, Datetime, XSwitch, XTextarea, Search, XDialog} from 'vux'
export default {
  name:'vux',
  data() {
    return {
      user: '',
      psw: '',
      num: '',
      good: '',
      listValue: '',
      list: [{key: 'gd', value: '广东'}, {key: 'gx', value: '广西'}],
      dateValue: '',
      switchValue: false,
      markers: [],
      plugin: [{
        pName: 'MapType',
        defaultType: 0,
        events: {
          init(instance) {
            console.log(instance);
          }
        }
      }]
    }
  },
  components: {
    Group,
    Cell,
    XInput,
    XButton,
    Selector,
    Datetime,
    XSwitch,
    XTextarea,
    Search,
    XDialog,
    iphone
  },
  methods: {
    change (value) {
      console.log('change', value)
    }
  },
  mounted(){
    // 姑且N为2
    // 为地图添加两个人
//    this.markers = [
//      {
//        position: [121.5273285, 31.21515044]
//      },
//      {
//        position: [1200.5273286, 310.21515045]
//      }
//    ];
    // 模拟实时更新位置
    // 开启一个1s的轮训，每个人的经纬度都自增0.00001
//    const step = 0.001;
//    setInterval(() => {
//      this.markers.forEach((marker) => {
//        marker.position = [marker.position[0] + step, marker.position[1] + step];
//      });
//    }, 1000);
  }
}
</script>

<style scoped lang="less">
  @import '~vux/src/styles/close';
  .mobileWrap {
    width: 370.8px;
    height: 600px;
    border: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .fullColor {
    background: #324157;
    a,h1 {
      color: white;
    }
    .mHeader {
      margin: 80px auto 0 auto;
    }
    .mContent {
      padding: 50px;
      button {
        margin-top: 30px;
      }
    }
  }
  .menu {
    display: flex;
    flex-direction: column;
    a {
      display: inline-block;
      margin: 20px auto;
    }
  }
  .searchDiv {
    display: flex;
    button {
      flex: 1
    }
    div {
      flex: 6
    }
  }
  .listDiv {
    margin: 50px auto;
    li {
      list-style: none;
    }
  }
  .mapDiv {
    div {
      height: 100%;
      width: 100%;
    }
  }

</style>
