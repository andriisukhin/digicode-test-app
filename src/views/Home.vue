<template lang="pug">
  .container
    h1 Hello Digicode
    d-input(:value="displayedShapes" :label="'Displayed shapes'")
    Scene
    .bottom-line
      .bottom-item
        d-input(:value="shapesPerSecond" :label="'Shapes per second'")
        ButtonGroup(:handler1="minusShapePerSecond" :handler2="plusShapePerSecond")
      .bottom-item
        d-input(:value="speed" :label="'Gravity value'")
        ButtonGroup(:handler1="minsSpeed" :handler2="plusSpeed")

</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { State, Mutation } from 'vuex-class';
import Scene from '@/components/Scene.vue';
import Input from '@/components/ui/Input.vue';
import ButtonGroup from '@/components/ui/ButtonGroup.vue';

@Component({ components: { Scene, 'd-input': Input, ButtonGroup } })
export default class Home extends Vue {
  @State private displayedShapes!: number;
  @State private shapesPerSecond!: number;
  @State private speed!: number;
  @Mutation private plusShapePerSecond!: () => void;
  @Mutation private minusShapePerSecond!: () => void;
  @Mutation private plusSpeed!: () => void;
  @Mutation private minsSpeed!: () => void;
}
</script>

<style lang="scss">
  .container {
    width: 500px;
    margin: 0 auto;
  }

  .bottom-line {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .bottom-item {
      display: flex;
      align-items: flex-end; 
    }
  }
</style>
