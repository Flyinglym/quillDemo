import Quill from "quill";
import { EventLinkBlot } from "./EventLinkBlot";
import { EventLinkDialogModule } from "./EventLinkDialogModule";

export default () => {
  Quill.register(EventLinkBlot); // 格式化
  Quill.register("modules/eventLink", EventLinkDialogModule) //响应点击等事件;
};
