<template lang="pug">
  .group
    button(
      type="button"
      @click="handler1"
    ) -
    button(
      type="button"
      @click="handler2"
    ) +
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class ButtonGroup extends Vue {
  @Prop({ required: true }) private handler1!: () => void;
  @Prop({ required: true }) private handler2!: () => void;
}
</script>

<style lang="scss">
  .group {
    display: flex;
    width: 100px;
    margin-left: 5px;
    button {
      width: 50%;
      font-weight: 700;
      font-size: 20px;
      border-style: solid;
      border-color: lightgrey;
      border-width: 1px 1px 1px 1px;
      border-radius: 5px 0 0 5px;
      box-shadow: none;
      outline: none;
      background: transparent;
      &:nth-child(2) {
        border-width: 1px 1px 1px 0;
        border-radius: 0 5px 5px 0;
      }
    }
  }
</style>