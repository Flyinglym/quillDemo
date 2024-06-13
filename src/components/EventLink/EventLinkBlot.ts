/**
 * 对应呈现格式化的问题。
 */

import Quill from "quill";

const Inline = Quill.import("blots/inline") as any;

export class EventLinkBlot extends Inline {
  /**
   *
   * @param info 来源于formats
   * @returns
   */
  static create(info: any) {
    let node = super.create();
    node.dataset.value = info.textId;
    node.dataset.name = info.name;
    node.style.backgroundColor = "#E7F1FA";
    node.style.color = "#0000ff";
    return node;
  }

  static formats(node) {
    let textId = node.dataset.value
    let name = node.dataset.name
    return {
      textId,
      text: node.innerText,
      name
    };
  }
}

EventLinkBlot.tagName = "a";
EventLinkBlot.blotName = "EventLink";
// class名将用于匹配blot名称
EventLinkBlot.className = "event_link";
