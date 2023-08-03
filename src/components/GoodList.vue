<template>
    <div class="good">
        <header class="good-header">{{ title }}</header>
        <van-skeleton title :row="3" :loading="loading">
            <div class="good-box">
                <div class="good-item" v-for="item in goodsArr" :key="item.goodsId" @click="goToDetail(item.goodsId)">
                    <img :src="$filters.prefix(item.goodsCoverImg)" alt="">
                    <div class="good-desc">
                        <div class="title">{{ item.goodsName }}</div>
                        <div class="price">¥ {{ item.sellingPrice }}</div>
                    </div>
                </div>
            </div>
        </van-skeleton>
    </div>
</template>

<script >
import { reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';

export default {
    props: {
        goodsArr: Array,
        title: String
    },
    setup() {
        const router = useRouter()
        const state = reactive({
            loading: true
        });

        // const goToDetail = (item) => {
        //     router.push({ path: `/product/${item.goodsId}` })
        // }
        const goToDetail = (id) => {
            // console.log(id);
            router.push({ path: '/product', query: { id: id } })
        }
        return {
            ...toRefs(state),
            goToDetail
        }
    },
    watch: {
        goodsArr(val) {
            if (val.length) this.loading = false
        }
    }

}



</script>
<style  lang='less' scoped>
@import "../common/style/mixin";

.good {
    .good-header {
        background: #f9f9f9;
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: @primary;
        font-size: 16px;
        font-weight: 500;
    }

    .good-box {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;

        .good-item {
            box-sizing: border-box;
            width: 50%;
            border-bottom: 1PX solid #e9e9e9;
            padding: 10px 10px;

            img {
                display: block;
                width: 120px;
                margin: 0 auto;
            }

            .good-desc {
                text-align: center;
                font-size: 14px;
                padding: 10px 0;

                .title {
                    color: #222333;
                }

                .price {
                    color: @primary;
                }
            }

            &:nth-child(2n + 1) {
                border-right: 1PX solid #e9e9e9;
            }
        }
    }
}
</style>