<template>
  <div class="numberPad">
    <div class="output">{{ output || "0" }}</div>
    <div class="buttons">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button @click="backOff">删除</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="empty">清空</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button @click="ok" class="ok">OK</button>
      <button @click="inputContent" class="zero">0</button>
      <button @click="inputContent" class="spot">.</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component
export default class NumberPad extends Vue {
  output = "0";
  inputContent(event: MouseEvent): void {
    const text = (event.target as HTMLButtonElement).textContent as string;
    if (this.output.length === 16) return;
    if (this.output === "0") {
      if ("0123456789".indexOf(text) >= 0) {
        this.output = text;
      } else {
        this.output += text;
      }
      return;
    }
    if (this.output.indexOf(".") >= 0 && text === ".") return;
    this.output += text;
  }
  backOff(): void {
    this.output = this.output.slice(0, -1);
  }
  empty(): void {
    this.output = "0";
  }
  ok(): void {
    console.log("todo");
  }
}
</script>

<style lang="scss">
@import "~@/assets/style/help.scss";

.numberPad {
  .output {
    @extend %innerShadow;
    font-size: 36px;
    font-family: Consolas, monospace;
    padding: 9px 16px;
    text-align: right;
  }
  .buttons {
    @extend %clearFix;
    button {
      font-size: 18px;
      width: 25%;
      height: 64px;
      float: left;
      &.ok {
        height: 64 * 2px;
        float: right;
      }
      &.zero {
        width: 50%;
      }
      &.spot {
        font-weight: 900;
      }
      &:nth-child(1) {
        background: $bg;
      }
      &:nth-child(2),
      &:nth-child(5) {
        background: darken($bg, 4%);
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background: darken($bg, 4 * 3%);
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10) {
        background: darken($bg, 4 * 4%);
      }
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13) {
        background: darken($bg, 4 * 5%);
      }
      &:nth-child(14) {
        background: darken($bg, 4 * 6%);
      }
      &:nth-child(12) {
        background: darken($bg, 4 * 7%);
      }
    }
  }
}
</style>