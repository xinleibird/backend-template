import {
  BorderBox1,
  BorderBox10,
  Decoration6,
  Decoration8,
  FullScreenContainer,
} from '@jiaminghi/data-view-react';
import ReactEcharts from 'echarts-for-react';
import React, { FC } from 'react';
import { VisualizeScreenRoutes } from '../../routes';
import styles from './VisualizeScreen.module.css';

const option = {
  // backgroundColor: '#2c343c',

  title: {
    text: '自定义大饼',
    left: 'center',
    top: 20,
    textStyle: {
      color: '#ccc',
    },
  },

  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
  },

  visualMap: {
    show: false,
    min: 80,
    max: 600,
    inRange: {
      colorLightness: [0, 1],
    },
  },
  series: [
    {
      name: '人员分类',
      type: 'pie',
      radius: '55%',
      center: ['50%', '50%'],
      data: [
        { value: 335, name: '直接访问' },
        { value: 310, name: '邮件营销' },
        { value: 274, name: '联盟广告' },
        { value: 235, name: '视频广告' },
        { value: 400, name: '搜索引擎' },
      ].sort(function (a, b) {
        return a.value - b.value;
      }),
      roseType: 'radius',
      label: {
        color: 'rgba(255, 255, 255, 0.3)',
      },
      labelLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.3)',
        },
        smooth: 0.2,
        length: 10,
        length2: 20,
      },
      itemStyle: {
        color: '#c23531',
        shadowBlur: 200,
        shadowColor: 'rgba(0, 0, 0, 0.5)',
      },

      animationType: 'scale',
      animationEasing: 'elasticOut',
      animationDelay: function (idx) {
        return Math.random() * 200;
      },
    },
  ],
};

const VisualizeScreen: FC = () => {
  return (
    <FullScreenContainer>
      <BorderBox1>
        <div
        // style={{
        //   display: 'flex',
        //   justifyContent: 'center',
        //   alignItems: 'center',
        //   padding: '1rem',
        // }}
        >
          <div className={styles['screen-title-button-group']}>
            <button>联动报警</button>
            <button>联动报警</button>
            <button>联动报警</button>
            <button>联动报警</button>
          </div>
          <Decoration8 className={styles['screen-title-decoration-left']} />
          <div style={{ textAlign: 'center' }}>
            <h1 className={styles['screen-title-title']}>大数据可视分析决策平台</h1>
            <h4 className={styles['screen-title-sub-title']}>
              Visual Analysis and Decision Platform for Large Data
            </h4>
          </div>
          <Decoration8 reverse className={styles['screen-title-decoration-right']} />
          <div className={styles['screen-title-button-group']}>
            <button>联动报警</button>
            <button>联动报警</button>
            <button>联动报警</button>
            <button>联动报警</button>
          </div>
        </div>
        <div className={styles['screen-title-decoration-bottom-container']}>
          <Decoration6 className={styles['screen-title-decoration-bottom']} />
        </div>
        <VisualizeScreenRoutes />

        <div
        // style={{
        //   display: 'grid',
        //   gridTemplateColumns: '1fr 1fr 1fr 1fr',
        //   padding: '7rem 4rem',
        //   gridColumnGap: '1rem',
        //   gridRowGap: '1rem',
        //   height: '80vh',
        // }}
        >
          <BorderBox10>
            <ReactEcharts option={option} lazyUpdate notMerge style={{ height: '38vh' }} />
          </BorderBox10>
          <BorderBox10>
            <ReactEcharts option={option} lazyUpdate notMerge style={{ height: '38vh' }} />
          </BorderBox10>
          <BorderBox10>
            <ReactEcharts option={option} lazyUpdate notMerge style={{ height: '38vh' }} />
          </BorderBox10>
          <BorderBox10>
            <ReactEcharts option={option} lazyUpdate notMerge style={{ height: '38vh' }} />
          </BorderBox10>
          <BorderBox10>
            <ReactEcharts option={option} lazyUpdate notMerge style={{ height: '38vh' }} />
          </BorderBox10>
          <BorderBox10>
            <ReactEcharts option={option} lazyUpdate notMerge style={{ height: '38vh' }} />
          </BorderBox10>
          <BorderBox10>
            <ReactEcharts option={option} lazyUpdate notMerge style={{ height: '38vh' }} />
          </BorderBox10>
          <BorderBox10>
            <ReactEcharts option={option} lazyUpdate notMerge style={{ height: '38vh' }} />
          </BorderBox10>
        </div>
      </BorderBox1>
    </FullScreenContainer>
  );
};

export default VisualizeScreen;
