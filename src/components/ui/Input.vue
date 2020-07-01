<template lang="pug">
  .d-input
    label(:for="uniqueId") {{ label }}
    input(
      type="text"
      readonly
      :id="uniqueId"
      :value="value"
    )
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class Input extends Vue {
  @Prop({ required: true }) private value!: string | number;
  @Prop({ required: true }) private label!: string;

  get uniqueId() {
    return this.label.toLowerCase().split(' ').join('_');
  }
}

</script>

<style lang="scss">
  .d-input {
    font-size: 12px;
    font-weight: 700;
    text-align: left;
    label {
      display: block;
      text-align: left;
    }
    input {
      margin: 5px 0;
      padding: 5px 10px;
      border: 1px solid lightgray;
      border-radius: 5px;
      margin :0;
      max-width: 100px;
    }
    
  }
</style>
