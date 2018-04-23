<template>
  <div class="wz-barProgress" ref='outBody'>
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
    }
  },
  data() {
    return {
      per: 0,
      percentages: '',
      drawCircleFond: '',
      canHeight: '',
      radius: '',
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
      if (this.per > 100) {
        this.per = 100
      }
      this.canHeight = this.cavWidth * 0.7
      this.radius = this.cavWidth * 0.47
      this.$refs.ctx.width = this.cavWidth
      this.$refs.ctx.height = this.canHeight
      this.$refs.outBody.style.width = `${this.cavWidth}px`
      this.$refs.outBody.style.height = `${this.canHeight}px`
      this.drawCircleFond = this.$refs.ctx.getContext('2d')
      this.totalFun(4, this.bgcolor, 2.1)
      setTimeout(this.begin(), 300)
    },
    begin() {
      let deg = 1.2 * (this.per / 100) + 0.9
      if (this.m < deg) {
        this.totalFun(3, this.linecolor, this.m + 0.03)
        this.m += 0.8
        setTimeout(this.begin(), 30)
      } else {
        this.totalFun(3, this.linecolor, deg)
      }
      if (!this.percentage) {
        this.per = 0
        return
      }
    },
    totalFun(lineWidths, colorAll, totalNumber) {
      this.drawCircleFond.beginPath()
      this.drawCircleFond.lineWidth = lineWidths
      this.drawCircleFond.lineCap = 'round'
      this.drawCircleFond.strokeStyle = colorAll
      this.drawCircleFond.arc(
        this.cavWidth / 2,
        this.cavWidth / 2,
        this.radius,
        0.9 * Math.PI,
        totalNumber * Math.PI
      )
      this.drawCircleFond.stroke()
    }
  }
}
</script>


