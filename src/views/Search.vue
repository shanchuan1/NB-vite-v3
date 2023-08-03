<template>
  <div class="product-list-wrap">
    <div class="product-list-content">
      <header class="category-header wrap">
        <i class="nbicon nbfanhui" @click="goBack"></i>
        <div class="header-search">
          <i class="nbicon nbSearch"></i>
          <input type="text" class="search-title" v-model="keyword" @keyup.enter="getSearch" />
        </div>
        <span class="search-btn" @click="getSearch">搜索</span>
      </header>
      <van-tabs type="card" color="#1baeae" @click="changeTab">
        <van-tab title="推荐" name=""></van-tab>
        <van-tab title="新品" name="new"></van-tab>
        <van-tab title="价格" name="price"></van-tab>
      </van-tabs>
    </div>


    <div class="content">
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh" class="product-list-refresh">
        <van-list v-model:loading="loading" :finished="finished"
          :finished-text="productList.length ? '没有更多了' : '搜索想要的商品'" @load="onLoad" @offset="10">
          <!-- <p v-for="item in list" :key="item">{{ item }}</p> -->
          <template v-if="productList.length">
            <div class="product-item" v-for="(item, index) in productList" :key="index" @click="productDetail(item.goodsId)">
              <img :src="$filters.prefix(item.goodsCoverImg)" />
              <div class="product-info">
                <p class="name">{{ item.goodsName }}</p>
                <p class="subtitle">{{ item.goodsIntro }}</p>
                <span class="price">￥ {{ item.sellingPrice }}</span>
              </div>
            </div>
          </template>
          <img class="empty" v-else src="https://s.yezgea02.com/1604041313083/kesrtd.png" alt="搜索">
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import { search } from '@/request/api'

import { reactive, toRefs } from 'vue'
import { useRoute, useRouter } from 'vue-router'
export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    const state = reactive({
      keyword: route.query.keyword || '',
      searchBtn: false,
      seclectActive: false,
      refreshing: false,
      list: [],
      loading: false,
      finished: false,
      productList: [],
      totalPage: 0,
      page: 1,
      orderBy: ''
    })

    // onMounted(() => {
    //   init()
    // })

    const init = async () => {
      const { categoryId } = route.query
      if (!categoryId && !state.keyword) {
        // Toast.fail('请输入关键词')
        state.finished = true
        state.loading = false;
        return
      }
      const { data, data: { list } } = await search({ pageNumber: state.page, goodsCategoryId: categoryId, keyword: state.keyword, orderBy: state.orderBy })
      console.log(data);


      state.productList = state.productList.concat(list)
      state.totalPage = data.totalPage
      state.loading = false;
      if (state.page >= data.totalPage) state.finished = true
    }

    // 回退
    const goBack = () => {
      router.go(-1)
    }

    const productDetail = (id) => {
      console.log(id);
      // router.push({ path: `/product/${item.goodsId}` })
      router.push({ path: '/product', query: { id: id } })
    }

    const getSearch = () => {
      onRefresh()
    }

    const onLoad = () => {
      if (!state.refreshing && state.page < state.totalPage) {
        state.page = state.page + 1
      }
      if (state.refreshing) {
        state.productList = [];
        state.refreshing = false;
      }
      init()
    }



    // 下拉刷新
    const onRefresh = () => {
      state.refreshing = true
      state.finished = false
      state.loading = true
      state.page = 1
      onLoad()
    }

    const changeTab = (name) => {
      console.log('name', name)
      state.orderBy = name
      onRefresh()
    }

    return {
      ...toRefs(state),
      goBack,
      productDetail,
      getSearch,
      changeTab,
      onLoad,
      onRefresh
    }
  }
}
</script>

<style lang="less" scoped>
@import '../common/style/mixin';

.product-list-content {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1000;
  background: #fff;

  .category-header {
    .fj();
    width: 100%;
    height: 3.125rem;
    line-height: 3.125rem;
    padding: 0 .9375rem;
    .boxSizing();
    font-size: .9375rem;
    color: #656771;
    z-index: 10000;

    &.active {
      background: @primary;
    }

    .icon-left {
      font-size: 1.5625rem;
      font-weight: bold;
    }

    .header-search {
      display: flex;
      width: 76%;
      height: 1.25rem;
      line-height: 1.25rem;
      margin: .625rem 0;
      padding: .3125rem 0;
      color: #232326;
      background: #F7F7F7;
      .borderRadius(1.25rem);

      .nbSearch {
        padding: 0 .3125rem 0 1.25rem;
        font-size: 1.0625rem;
      }

      .search-title {
        font-size: .75rem;
        color: #666;
        background: #F7F7F7;
      }
    }

    .icon-More {
      font-size: 1.25rem;
    }

    .search-btn {
      height: 1.75rem;
      margin: .5rem 0;
      line-height: 1.75rem;
      padding: 0 .3125rem;
      color: #fff;
      background: @primary;
      .borderRadius(.3125rem);
      margin-top: .625rem;
    }
  }
}

.content {
  height: calc(~"(100vh - 4.375rem)");
  overflow: hidden;
  overflow-y: scroll;
  margin-top: 4.875rem;
}

.product-list-refresh {
  .product-item {
    .fj();
    width: 100%;
    height: 7.5rem;
    padding: .625rem 0;
    border-bottom: .0625rem solid #dcdcdc;

    img {
      width: 8.75rem;
      height: 7.5rem;
      padding: 0 .625rem;
      .boxSizing();
    }

    .product-info {
      width: 56%;
      height: 7.5rem;
      padding: .3125rem;
      text-align: left;
      .boxSizing();

      p {
        margin: 0
      }

      .name {
        width: 100%;
        max-height: 2.5rem;
        line-height: 1.25rem;
        font-size: .9375rem;
        color: #333;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .subtitle {
        width: 100%;
        max-height: 1.25rem;
        padding: .625rem 0;
        line-height: 1.5625rem;
        font-size: .8125rem;
        color: #999;
        overflow: hidden;
      }

      .price {
        color: @primary;
        font-size: 1rem;
      }
    }
  }

  .empty {
    display: block;
    width: 9.375rem;
    margin: 3.125rem auto 1.25rem;
  }
}
</style>
