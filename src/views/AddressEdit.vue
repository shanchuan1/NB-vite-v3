<template>
  <div class="address-edit-box">
    <s-header :title="type == 'add' ? '新增地址' : '编辑地址'"></s-header>
    <van-address-edit
      :area-list="areaList"
      :show-delete="type =='edit'"
      :address-info="addressInfo"
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
    />

  </div>
</template>

<script>
import { addAddress, getAddressDetail, EditAddress, DeleteAddress } from '../request/api'

import { reactive, toRefs , onMounted} from 'vue'
import sHeader from '@/components/SimpleHeader.vue'
import { areaList } from '@vant/area-data';
import { Toast } from 'vant';
import { useRoute, useRouter } from 'vue-router';
export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    const state = reactive({
      type: 'add',
      areaList: areaList,
      addressId: 0,
      addressInfo: {}
    })

    onMounted(async() => {
      const { addressId, type} = route.query
      state.type = type
      console.log(addressId);
      state.addressId = addressId
      if(type == 'edit'){
        const { data: addressDetail } = await getAddressDetail(addressId)
        console.log(addressDetail);
        state.addressInfo = {
          id: addressDetail.addressId,
          name: addressDetail.userName,
          tel: addressDetail.userPhone,
          addressDetail: addressDetail.detailAddress,
          isDefault: !!addressDetail.defaultFlag
        }
      }
    })
    const onSave = async(content) => {
      // console.log(content);
      const params = {
        userName: content.name,
        userPhone: content.tel,
        provinceName: content.province,
        cityName: content.city,
        regionName: content.county,
        detailAddress: content.addressDetail,
        defaultFlag: content.isDefault ? 1 : 0
      }
      if (state.type == 'edit') {
        params['addressId'] = state.addressId
      }
      // console.log(params);
      // 保存地址到服务器
      await state.type == 'add' ? addAddress(params) : EditAddress(params)
      Toast.success('保存成功！')
      setTimeout(() => {
        router.back()
      }, 1000)
    }
    const onDelete = async() => {
      await  DeleteAddress(state.addressId)
      Toast.success('删除成功')
      setTimeout(() => {
        router.back()
      }, 1000)
    }

    return {
      ...toRefs(state),
      onSave,
      onDelete
    }
  },
  components: {
    sHeader
  }
}
</script>

<style>

</style>