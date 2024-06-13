<template>
  <div style="width: 900px; margin: 0 auto">
    <a-button @click="onGetText"> 获取文本 </a-button>
    <div id="editor">
      2023年08月30日，当事人经拱
      <span class="event_link" data-name="案件发生地点" data-value="北口岸旅检现场无申报通道">北口岸旅检现场无申报通道</span>，以
      <span class="event_link" data-name="违法方式" data-value="瞒报">瞒报</span>
      的方式逃避海关监管， 携带国家限制进境的<span class="event_link" data-name="涉案物品类别">“PENFOLDS”牌葡萄酒(规格:BIN 407，750ML/瓶，14.5%VOL，2021年，产地:澳大利亚)1瓶</span
      >进境。经核定， 上述物品价值人民币0.076164万元，偷逃税款0.025388万元。经调查，当事人曾于2022年09月10日因走私葡萄酒进境被海关行政处罚过， 其逃避海关监管的主观故意明显。
    </div>
  </div>

  <DialogSetting ref="dialogRef" />
</template>
<script setup lang="ts">
  import "quill/dist/quill.core.css"
  import "quill/dist/quill.snow.css"
  import Quill from "quill"
  import { onMounted, ref } from "vue"
  import registerEventLink from "./components/EventLink"
  import DialogSetting from "../src/components/dialog.vue"

  import { Button as AButton } from "ant-design-vue"

  //执行注册
  registerEventLink()
  const dialogRef = ref()

  let qillEditor: any
  const onGetText = () => {
    const a = qillEditor.getText()
    alert(a)
  }
  onMounted(() => {
    qillEditor = new Quill("#editor", {
      theme: "bubble",
      modules: {
        toolbar: false,
        eventLink: {
          onShow: (info: any, callback: any) => {
            dialogRef.value.open(info?.textId ?? "", info?.text ?? "", callback)
          },
        },
      },
    })
  })
</script>
