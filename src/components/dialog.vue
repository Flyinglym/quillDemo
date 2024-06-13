<template>
  <a-modal v-model:open="open" title="Basic Modal" @ok="handleOk">
    <div v-for="(item, key) in textList">
      <h3>{{ key }}</h3>
      <ul>
        <a-radio-group v-model:value="text" @change="() => onChange(key)">
          <a-radio v-for="text in item" :value="text">{{ text }} </a-radio>
        </a-radio-group>
      </ul>
    </div>
  </a-modal>
</template>

<script setup lang="ts">
  import { Modal as AModal, RadioGroup as ARadioGroup, Radio as ARadio } from "ant-design-vue"
  import { ref } from "vue"

  //Modal
  const open = ref(false)
  const textId = ref("")
  const text = ref("")

  const handleOk = () => {
    open.value = false

    callback({
      textId: textId.value,
      text: text.value,
    })
  }
  /**
   * 来自quill的回调函数，选择之后，需要把数值传回quill
   */
  let callback: any
  const textList = {
    关口通道: ["拱北口岸旅检现场无申报通道", "横琴口岸无申报通道", "大桥口岸无申报通道"],
    方式: ["瞒报", "欺骗", "隐瞒", "逃避"],
    地点: ["拱北口岸", "横琴口岸", "大桥口岸"],
    时间: ["2023年08月30日", "2023年08月31日", "2023年09月01日"],
    产品型号: ["“PENFOLDS”牌葡萄酒(规格:BIN 407，750ML/瓶，14.5%VOL，2021年，产地:澳大利亚)", "“PENFOLDS”牌葡萄酒(规格:BIN 407，750ML/瓶，14.5%VOL，2020年，产地:智利)"],
  }

  const onChange = (textIdInput: any) => {
    textId.value = textIdInput
  }

  defineExpose({
    open: (textIdFrom: string, textFrom: string, callbackFrom: (textId: string, text: string) => void) => {
      open.value = true
      textId.value = textIdFrom
      text.value = textFrom
      callback = callbackFrom
    },
  })
</script>
