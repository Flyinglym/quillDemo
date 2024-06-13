import Emitter from "quill/core/emitter";
import { EventLinkBlot } from "./EventLinkBlot";

export class EventLinkDialogModule {
  constructor(quill: any, options: any) {
    EventLinkDialogModule.onListent(quill, options);
  }

  static onListent(quill: any, options: any) {
    quill.on(Emitter.events.SELECTION_CHANGE, (range, oldRange, source) => {
      if (range == null) return;
      if (range.length === 0 && source === Emitter.sources.USER) {
        const [link, offset] = quill.scroll.descendant(
          EventLinkBlot,
          range.index
        );

        if (link != null) {
          const domNode = link.domNode;
          //通过domNode获取到当前的Blot的信息。方便onShow方法读取
          const info = EventLinkBlot.formats(domNode);
          const callBack = (callbackInfo: any) => {
            domNode.setAttribute("data-value", callbackInfo.textId);
            domNode.innerText = callbackInfo.text;
          };
          options.onShow(info, callBack);

          return;
        } else {
          console.log("没有click中EventLink的Blot");
        }
      }
    });
  }
}
