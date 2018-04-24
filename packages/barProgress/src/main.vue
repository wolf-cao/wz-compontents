<template>
  <div class="wz-barProgress" ref='outBody'>
    <canvas class="drawProsess" ref="ctx"></canvas>
    <span>{{introduce}}</span>
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
      default: '#EEAEEE'
    },
    linecolor: {
      type: String,
      default: '#BF3EFF'
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
      m: 0.9,
      startAngle: '',
      xAngle: '',
      endAngle: '',
      tmpAngle: ''
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
      //开始角度
      this.startAngle = 0.9 * Math.PI
      //偏移量角度
      this.xAngle = 1 * (Math.PI / 180)
      //结束角度
      this.endAngle = 2.1 * Math.PI
      //临时角度变量
      this.tmpAngle = this.startAngle
      this.darwPublic(4,this.bgcolor)
      setTimeout(this.begin(), 300)
    },
    //绘制内层进度
    rander() {
      if (this.tmpAngle >= this.endAngle) {
        return
      } else if (this.tmpAngle + this.xAngle > this.endAngle) {
        this.tmpAngle = this.endAngle
      } else {
        this.tmpAngle += this.xAngle
      }
      //画布中文字进行清除
      this.drawCircleFond.clearRect(
        this.cavWidth * 0.06,
        this.canHeight * 0.6,
        this.cavWidth * 0.8,
        this.canHeight * 0.5
      )
      this.darwPublic(3,this.linecolor)
      this.fondDraw()
      requestAnimationFrame(this.rander)
    },
    //当前进度值判断
    begin() {
      let deg = 1.2 * (this.per / 100) + 0.9
      if (this.m < deg) {
        this.endAngle = (this.m + 0.03) * Math.PI
        this.rander()
        this.m += 0.8
        setTimeout(this.begin(), 30)
      } else {
        this.endAngle = deg * Math.PI
        this.rander()
      }
      if (!this.percentage) {
        this.fondDraw()
        this.per = 0
        return
      }
    },
    //文字动态显示
    fondDraw() {
      let fontSize = 25
      this.drawCircleFond.font = fontSize + 'px Microsoft Yahei'
      this.drawCircleFond.textAlign = 'center'
      this.drawCircleFond.fillText(
        Math.round(
          (this.tmpAngle - this.startAngle) /
            (2.1 * Math.PI - this.startAngle) *
            100
        ) + '%',
        this.cavWidth / 2,
        this.cavWidth / 2 + fontSize / 2
      )
    },
    //画圆
    darwPublic(lineWidths,colorAll){
      this.drawCircleFond.beginPath()
      this.drawCircleFond.lineWidth = lineWidths
      this.drawCircleFond.strokeStyle = colorAll
      this.drawCircleFond.arc(
        this.cavWidth / 2,
        this.cavWidth / 2,
        this.radius,
        this.startAngle,
        this.endAngle
      )
      this.drawCircleFond.stroke()
      this.drawCircleFond.closePath()
    }
  }
}
</script>


