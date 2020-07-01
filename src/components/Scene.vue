<template lang="pug">
  .scene
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Mixins, Watch } from 'vue-property-decorator';
import { State, Mutation } from 'vuex-class';
import Shape from '@/components/shapes/Shape.ts';
import * as PIXI from 'pixi.js';

@Component
export default class Scene extends Vue {
  private width = 500;
  private height = 500;
  private app: any;
  private scene: HTMLElement | null = null;
  private interval: any = null;

  @State private shapesPerSecond!: number;

  @State private speed!: number;

  @Mutation private setDisplayedShapes!: (val: number) => void;

  @Watch('shapesPerSecond') private onShapesChanged() {
    this.generateInterval();
  }

  private generateInterval() {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.renderShape(null, null);
    }, Math.floor(1000 / this.shapesPerSecond));
  }

  private getCurrentQuantity() {
    this.setDisplayedShapes(
      this.app.stage.children
        .filter((item: PIXI.Graphics) => (
          item.y < (this.height + item.height / 2))).length
          || 0,
    );
  }

  private renderShape(x: number | null, y: number | null) {
    const shape = new Shape(this.width, this.height, x, y);
    shape.on('pointerdown', () => {
        this.app.stage.pointerdown = null;
        shape.destroy();
        this.$nextTick(() => {
          this.app.stage.pointerdown = this.absShape;
        });
      });
    shape.on('removed', this.getCurrentQuantity);
    this.app.stage.addChild(shape);
    this.getCurrentQuantity();
  }

  private absShape(e: any) {
    const x = e.data.global.x;
    const y = e.data.global.y;
    this.renderShape(x, y);
  }

  private mounted() {
    this.scene = document.querySelector('.scene');
    this.app = new PIXI.Application({
      antialias: true,
      width: this.width,
      height: this.height,
    });
    if (this.scene) {
      this.scene.appendChild(this.app.view);
    }
    this.app.renderer.clearBeforeRender = true;
    this.app.stage.interactive = true;
    this.app.stage.hitArea = new PIXI.Rectangle(0, 0, this.width, this.height);
    this.app.stage.pointerdown = this.absShape;
    this.generateInterval();
    this.app.ticker.add(() => {
      this.app.stage.children.forEach((shape: PIXI.Graphics) => {
        shape.y += this.speed;
        this.getCurrentQuantity();
        if (shape.y > (this.app.screen.height + shape.height)) {
          shape.destroy();
        }
      });
    });
  }
}
</script>

<style lang="scss">
  .scene {
    width: 500px;
    height: 500px;
  }
</style>
;