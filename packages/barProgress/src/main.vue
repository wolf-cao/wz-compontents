<template>
  <div class="wz-barProgress">
    <canvas class="drawProsess" ref="ctx"></canvas>
    <span>{{introduce}}</span>
    <p>{{percentages}}%</p>
  </div>
</template>

<script>
import './styles.less'
export default {
  name: 'wz-bar-progress',
  props: {
    percentage: {
      type: Number,
      default: 0
    },
    bgcolor: {
      type: String,
      default: '#FFFFCC'
    },
    linecolor: {
      type: String,
      default: '#FFFF00'
    },
    introduce: {
      type: String,
      default: '进度值'
    },
    cavWidth: {
      type: String,
      default: '100'
    },
    canHeight: {
      type: String,
      default: '70'
    },
    radius: {
      type: Number,
      default: 74
    }
  },
  data() {
    return {
      per: 0,
      percentages: '',
      drawCircleFond: '',
      m: 0.9
    }
  },
  watch: {
    percentage() {
      this.drawCircle()
    }
  },
  mounted() {
    this.drawCircle()
  },
  methods: {
    drawCircle() {
      this.per = this.percentage
      this.percentages = this.percentage.toFixed(2)
      if (!this.per) {
        this.per = 0
      }
      this.per > 100 ? (this.per = 100) : (this.per = this.per)
      this.$refs.ctx.width = this.cavWidth
      this.$refs.ctx.height = this.canHeight
      document.getElementsByClassName('wz-barProgress')[0].style.width = `${
        this.cavWidth
      }px`
      document.getElementsByClassName('wz-barProgress')[0].style.height = `${
        this.canHeight
      }px`
      this.drawCircleFond = this.$refs.ctx.getContext('2d')
      this.totalFun(4, this.bgcolor, 2.1)
      if (!this.per) {
        return
      }
      setTimeout(() => {
        this.begin()
      }, 300)
    },
    begin() {
      let deg = 1.2 * (this.per / 100) + 0.9
      if (this.percentage === 0) {
        return
      }
      if (this.m < deg) {
        this.totalFun(3, this.linecolor, this.m + 0.03)
        this.m += 0.8
        setTimeout(() => {
          this.begin()
        }, 30)
      } else {
        this.totalFun(3, this.linecolor, deg)
      }
    },
    totalFun(lineWidths, colorAll, totalNumber) {
      this.drawCircleFond.beginPath()
      this.drawCircleFond.lineWidth = lineWidths
      this.drawCircleFond.lineCap = 'round'
      this.drawCircleFond.strokeStyle = colorAll
      this.drawCircleFond.arc(50, 50, 47, 0.9 * Math.PI, totalNumber * Math.PI)
      this.drawCircleFond.stroke()
    }
  }
}
</script>


