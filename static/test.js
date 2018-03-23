export default {
  "charts": [{
    "name": "line",
    "grid": {
      "position-x": 6,
      "position-y": 0,
      "width": 6,
      "height": 8
    },
    "contents": {
      "title": {
        "show": true,
        "text": "线图2",
        "link": "",
        "target": "blank",
        "textStyle": {
          "color": "#333",
          "fontStyle": "normal",
          "fontWeight": "bold",
          "fontFamily": "SimHei",
          "fontSize": 18
        },
        "rich": {},
        "subtext": "",
        "left": "auto",
        "top": "auto"
      },
      "tooltip": {
        "show": true,
        "trigger": "axis",
        "axisPointer": {
          "type": "line",
          "axis": "auto",
          "label": {
            "show": true,
            "formatter": "{value}",
            "color": "#fff",
            "fontSize": "12",
            "backgroundColor": "#000"
          },
          "lineStyle": {
            "color": "#555",
            "width": 1,
            "type": "solid"
          },
          "shadowStyle": {
            "color": "rgba(150,150,150,0.3)"
          },
          "crossStyle": {
            "color": "#555",
            "width": 1,
            "type": "solid"
          }
        },
        "showContent": true,
        "alwaysShowContent": false,
        "triggerOn": "mousemove|click",
        "formatter": "",
        "backgroundColor": "rgba(50,50,50,0.7)",
        "textStyle": {
          "color": "#fff",
          "fontSize": 12
        }
      },
      "legend": {
        "show": true,
        "right": "0%",
        "top": "2%",
        "orient": "horizontal",
        "itemGap": 10,
        "itemWidth": 30,
        "itemHeight": 12,
        "selectedMode": true,
        "textStyle": {
          "color": "#333",
          "fontSize": 12
        }
      },
      "grid": {
        "show": true,
        "left": "4%",
        "top": 65,
        "right": "4%",
        "bottom": 17,
        "height": "auto",
        "width": "auto",
        "backgroundColor": "transparent",
        "borderColor": "#ccc",
        "borderWidth": 1,
        "containLabel": true
      },
      "xAxis": {
        "name": "年份",
        "position": "bottom",
        "show": true,
        "type": "category",
        "nameLocation": "end",
        "nameTextStyle": {
          "color": "#333",
          "fontSize": "12"
        },
        "nameRotate": 0,
        "inverse": false,
        "axisLine": {
          "show": true,
          "symbol": "none",
          "lineStyle": {
            "color": "#333"
          }
        },
        "axisTick": {
          "show": true,
          "interval": "auto",
          "inside": false,
          "length": 5
        },
        "axisLabel": {
          "interval": 0,
          "inside": false,
          "rotate": 0,
          "margin": 8,
          "formatter": "{value}",
          "showMinLabel": null,
          "showMaxLabel": null,
          "color": "",
          "fontSize": 12,
          "show": true
        },
        "boundaryGap": false
      },
      "yAxis": {
        "name": "销售量",
        "position": "left",
        "show": true,
        "type": "value",
        "nameLocation": "end",
        "nameTextStyle": {
          "color": "#333",
          "fontSize": "12"
        },
        "nameRotate": 0,
        "inverse": false,
        "axisLine": {
          "show": true,
          "symbol": "none",
          "lineStyle": {
            "color": "#333"
          }
        },
        "axisTick": {
          "show": true,
          "interval": "auto",
          "inside": false,
          "length": 5
        },
        "axisLabel": {
          "interval": 0,
          "inside": false,
          "rotate": 0,
          "margin": 8,
          "formatter": "{value}",
          "showMinLabel": null,
          "showMaxLabel": null,
          "color": "",
          "fontSize": 12,
          "show": true
        },
        "boundaryGap": false
      },
      "series": [{
        "name": "销售量",
        "type": "line",
        "symbol": "emptyCircle",
        "symbolSize": 4,
        "symbolRotate": 0,
        "showAllSymbol": false,
        "areaStyle": {
          "color": "transparent"
        },
        "smooth": false,
        "step": false,
        "label": {
          "show": false,
          "position": "top",
          "rotate": 0,
          "fontSize": 12,
          "color": "#333"
        },
        "itemStyle": {
          "color": "#d53a35"
        },
        "encode": {
          "x": "",
          "y": ""
        }
      }],
      "dataset": {
        "source": [{
          "年份": "2015",
          "销售量": 820
        }, {
          "年份": "2016",
          "销售量": 932
        }, {
          "年份": "2017",
          "销售量": 1820
        }, {
          "年份": "2018",
          "销售量": 2820
        }, {
          "年份": "2019",
          "销售量": 3820
        }, {
          "年份": "2020",
          "销售量": 2850
        }, {
          "年份": "2021",
          "销售量": 2100
        }, {
          "年份": "2022",
          "销售量": 2820
        }]
      },
      "backgroundColor": "#fff"
    },
    "others": {
      "openMenu": [1, 2, 10, 9],
      "datasways": 1,
      "datasource": "",
      "datasql": "select a.natural_village_name,count(b.building_id ) as count from building b left join natural_village a on a.natural_village_id=b.natural_village_id GROUP BY a.natural_village_name",
      "datasurl": "",
      "datajson": "",
      "updated": 1
    },
    "id": "0a9db123-437b-4ed7-8862-be4273f66693"
  }, {
    "name": "bar",
    "grid": {
      "position-x": 0,
      "position-y": 0,
      "width": 6,
      "height": 8
    },
    "contents": {
      "title": {
        "show": true,
        "text": "柱图1",
        "link": "",
        "target": "blank",
        "textStyle": {
          "color": "#333",
          "fontStyle": "normal",
          "fontWeight": "bold",
          "fontFamily": "SimHei",
          "fontSize": 18
        },
        "rich": {},
        "subtext": "",
        "left": "auto",
        "top": "auto"
      },
      "tooltip": {
        "show": true,
        "trigger": "axis",
        "axisPointer": {
          "type": "shadow",
          "axis": "auto",
          "label": {
            "show": true,
            "formatter": "{value}",
            "color": "#fff",
            "fontSize": "12",
            "backgroundColor": "#000"
          },
          "lineStyle": {
            "color": "#555",
            "width": 1,
            "type": "solid"
          },
          "shadowStyle": {
            "color": "rgba(150,150,150,0.3)"
          },
          "crossStyle": {
            "color": "#555",
            "width": 1,
            "type": "solid"
          }
        },
        "showContent": true,
        "alwaysShowContent": false,
        "triggerOn": "mousemove|click",
        "formatter": "",
        "backgroundColor": "rgba(50,50,50,0.7)",
        "textStyle": {
          "color": "#fff",
          "fontSize": 12
        }
      },
      "legend": {
        "show": true,
        "right": "0%",
        "top": "2%",
        "orient": "horizontal",
        "itemGap": 10,
        "itemWidth": 30,
        "itemHeight": 12,
        "selectedMode": true,
        "textStyle": {
          "color": "#333",
          "fontSize": 12
        }
      },
      "grid": {
        "show": true,
        "left": "4%",
        "top": 65,
        "right": "4%",
        "bottom": 17,
        "height": "auto",
        "width": "auto",
        "backgroundColor": "transparent",
        "borderColor": "#ccc",
        "borderWidth": 1,
        "containLabel": true
      },
      "xAxis": {
        "name": "年份",
        "position": "bottom",
        "show": true,
        "type": "category",
        "nameLocation": "end",
        "nameTextStyle": {
          "color": "#333",
          "fontSize": "12"
        },
        "nameRotate": 0,
        "inverse": false,
        "axisLine": {
          "show": true,
          "symbol": "none",
          "lineStyle": {
            "color": "#333"
          }
        },
        "axisTick": {
          "show": true,
          "interval": "auto",
          "inside": false,
          "length": 5
        },
        "axisLabel": {
          "interval": 0,
          "inside": false,
          "rotate": 0,
          "margin": 8,
          "formatter": "{value}",
          "showMinLabel": null,
          "showMaxLabel": null,
          "color": "",
          "fontSize": 12,
          "show": true
        },
        "boundaryGap": true
      },
      "yAxis": {
        "name": "销售量",
        "position": "left",
        "show": true,
        "type": "value",
        "nameLocation": "end",
        "nameTextStyle": {
          "color": "#333",
          "fontSize": "12"
        },
        "nameRotate": 0,
        "inverse": false,
        "axisLine": {
          "show": true,
          "symbol": "none",
          "lineStyle": {
            "color": "#333"
          }
        },
        "axisTick": {
          "show": true,
          "interval": "auto",
          "inside": false,
          "length": 5
        },
        "axisLabel": {
          "interval": 0,
          "inside": false,
          "rotate": 0,
          "margin": 8,
          "formatter": "{value}",
          "showMinLabel": null,
          "showMaxLabel": null,
          "color": "",
          "fontSize": 12,
          "show": true
        },
        "boundaryGap": false
      },
      "series": [{
        "name": "销售量",
        "type": "bar",
        "smooth": false,
        "step": false,
        "barWidth": 0,
        "barGap": 0,
        "label": {
          "show": false,
          "position": "top",
          "rotate": 0,
          "fontSize": 12,
          "color": "#333"
        },
        "itemStyle": {
          "color": "#d53a35"
        },
        "encode": {
          "x": "年份",
          "y": "销售量"
        }
      }],
      "dataset": {
        "source": [{
          "年份": "2015",
          "销售量": 820
        }, {
          "年份": "2016",
          "销售量": 932
        }, {
          "年份": "2017",
          "销售量": 1820
        }, {
          "年份": "2018",
          "销售量": 2820
        }, {
          "年份": "2019",
          "销售量": 3820
        }, {
          "年份": "2020",
          "销售量": 2850
        }, {
          "年份": "2021",
          "销售量": 2100
        }, {
          "年份": "2022",
          "销售量": 2820
        }]
      },
      "backgroundColor": "#fff"
    },
    "others": {
      "openMenu": [1, 2, 9, 10],
      "datasways": 1,
      "datasource": "",
      "datasql": "select a.natural_village_name,count(b.building_id ) as count from building b left join natural_village a on a.natural_village_id=b.natural_village_id GROUP BY a.natural_village_name",
      "datasurl": "",
      "datajson": "",
      "updated": 1
    },
    "id": "eb39c3fd-85f8-4b89-9dd4-18810757cebb"
  }, {
    "name": "bar",
    "grid": {
      "position-x": 6,
      "position-y": 8,
      "width": 6,
      "height": 9
    },
    "contents": {
      "title": {
        "show": true,
        "text": "柱图4",
        "link": "",
        "target": "blank",
        "textStyle": {
          "color": "#333",
          "fontStyle": "normal",
          "fontWeight": "bold",
          "fontFamily": "SimHei",
          "fontSize": 18
        },
        "rich": {},
        "subtext": "",
        "left": "auto",
        "top": "auto"
      },
      "tooltip": {
        "show": true,
        "trigger": "axis",
        "axisPointer": {
          "type": "shadow",
          "axis": "auto",
          "label": {
            "show": true,
            "formatter": "{value}",
            "color": "#fff",
            "fontSize": "12",
            "backgroundColor": "#000"
          },
          "lineStyle": {
            "color": "#555",
            "width": 1,
            "type": "solid"
          },
          "shadowStyle": {
            "color": "rgba(150,150,150,0.3)"
          },
          "crossStyle": {
            "color": "#555",
            "width": 1,
            "type": "solid"
          }
        },
        "showContent": true,
        "alwaysShowContent": false,
        "triggerOn": "mousemove|click",
        "formatter": "",
        "backgroundColor": "rgba(50,50,50,0.7)",
        "textStyle": {
          "color": "#fff",
          "fontSize": 12
        }
      },
      "legend": {
        "show": true,
        "right": "0%",
        "top": "2%",
        "orient": "horizontal",
        "itemGap": 10,
        "itemWidth": 30,
        "itemHeight": 12,
        "selectedMode": true,
        "textStyle": {
          "color": "#333",
          "fontSize": 12
        }
      },
      "grid": {
        "show": true,
        "left": "4%",
        "top": 65,
        "right": "4%",
        "bottom": 17,
        "height": "auto",
        "width": "auto",
        "backgroundColor": "transparent",
        "borderColor": "#ccc",
        "borderWidth": 1,
        "containLabel": true
      },
      "xAxis": {
        "name": "年份",
        "position": "bottom",
        "show": true,
        "type": "category",
        "nameLocation": "end",
        "nameTextStyle": {
          "color": "#333",
          "fontSize": "12"
        },
        "nameRotate": 0,
        "inverse": false,
        "axisLine": {
          "show": true,
          "symbol": "none",
          "lineStyle": {
            "color": "#333"
          }
        },
        "axisTick": {
          "show": true,
          "interval": "auto",
          "inside": false,
          "length": 5
        },
        "axisLabel": {
          "interval": 0,
          "inside": false,
          "rotate": 0,
          "margin": 8,
          "formatter": "{value}",
          "showMinLabel": null,
          "showMaxLabel": null,
          "color": "",
          "fontSize": 12,
          "show": true
        },
        "boundaryGap": true
      },
      "yAxis": {
        "name": "销售量",
        "position": "left",
        "show": true,
        "type": "value",
        "nameLocation": "end",
        "nameTextStyle": {
          "color": "#333",
          "fontSize": "12"
        },
        "nameRotate": 0,
        "inverse": false,
        "axisLine": {
          "show": true,
          "symbol": "none",
          "lineStyle": {
            "color": "#333"
          }
        },
        "axisTick": {
          "show": true,
          "interval": "auto",
          "inside": false,
          "length": 5
        },
        "axisLabel": {
          "interval": 0,
          "inside": false,
          "rotate": 0,
          "margin": 8,
          "formatter": "{value}",
          "showMinLabel": null,
          "showMaxLabel": null,
          "color": "",
          "fontSize": 12,
          "show": true
        },
        "boundaryGap": false
      },
      "series": [{
        "name": "销售量",
        "type": "bar",
        "smooth": false,
        "step": false,
        "barWidth": 0,
        "barGap": 0,
        "label": {
          "show": false,
          "position": "top",
          "rotate": 0,
          "fontSize": 12,
          "color": "#333"
        },
        "itemStyle": {
          "color": "#d53a35"
        },
        "encode": {
          "x": "年份",
          "y": "销售量"
        }
      }],
      "dataset": {
        "source": [{
          "年份": "2015",
          "销售量": 820
        }, {
          "年份": "2016",
          "销售量": 932
        }, {
          "年份": "2017",
          "销售量": 1820
        }, {
          "年份": "2018",
          "销售量": 2820
        }, {
          "年份": "2019",
          "销售量": 3820
        }, {
          "年份": "2020",
          "销售量": 2850
        }, {
          "年份": "2021",
          "销售量": 2100
        }, {
          "年份": "2022",
          "销售量": 2820
        }]
      },
      "backgroundColor": "#fff"
    },
    "others": {
      "openMenu": [1, 2, 9, 10],
      "datasways": 1,
      "datasource": "",
      "datasql": "select a.natural_village_name,count(b.building_id ) as count from building b left join natural_village a on a.natural_village_id=b.natural_village_id GROUP BY a.natural_village_name",
      "datasurl": "",
      "datajson": "",
      "updated": 1
    },
    "id": "649ab180-ebe3-450d-872d-28022093fffd"
  }, {
    "name": "line",
    "grid": {
      "position-x": 0,
      "position-y": 8,
      "width": 6,
      "height": 9
    },
    "contents": {
      "title": {
        "show": true,
        "text": "线图3",
        "link": "",
        "target": "blank",
        "textStyle": {
          "color": "#333",
          "fontStyle": "normal",
          "fontWeight": "bold",
          "fontFamily": "SimHei",
          "fontSize": 18
        },
        "rich": {},
        "subtext": "",
        "left": "auto",
        "top": "auto"
      },
      "tooltip": {
        "show": true,
        "trigger": "axis",
        "axisPointer": {
          "type": "line",
          "axis": "auto",
          "label": {
            "show": true,
            "formatter": "{value}",
            "color": "#fff",
            "fontSize": "12",
            "backgroundColor": "#000"
          },
          "lineStyle": {
            "color": "#555",
            "width": 1,
            "type": "solid"
          },
          "shadowStyle": {
            "color": "rgba(150,150,150,0.3)"
          },
          "crossStyle": {
            "color": "#555",
            "width": 1,
            "type": "solid"
          }
        },
        "showContent": true,
        "alwaysShowContent": false,
        "triggerOn": "mousemove|click",
        "formatter": "",
        "backgroundColor": "rgba(50,50,50,0.7)",
        "textStyle": {
          "color": "#fff",
          "fontSize": 12
        }
      },
      "legend": {
        "show": true,
        "right": "0%",
        "top": "2%",
        "orient": "horizontal",
        "itemGap": 10,
        "itemWidth": 30,
        "itemHeight": 12,
        "selectedMode": true,
        "textStyle": {
          "color": "#333",
          "fontSize": 12
        }
      },
      "grid": {
        "show": true,
        "left": "4%",
        "top": 65,
        "right": "4%",
        "bottom": 17,
        "height": "auto",
        "width": "auto",
        "backgroundColor": "transparent",
        "borderColor": "#ccc",
        "borderWidth": 1,
        "containLabel": true
      },
      "xAxis": {
        "name": "年份",
        "position": "bottom",
        "show": true,
        "type": "category",
        "nameLocation": "end",
        "nameTextStyle": {
          "color": "#333",
          "fontSize": "12"
        },
        "nameRotate": 0,
        "inverse": false,
        "axisLine": {
          "show": true,
          "symbol": "none",
          "lineStyle": {
            "color": "#333"
          }
        },
        "axisTick": {
          "show": true,
          "interval": "auto",
          "inside": false,
          "length": 5
        },
        "axisLabel": {
          "interval": 0,
          "inside": false,
          "rotate": 0,
          "margin": 8,
          "formatter": "{value}",
          "showMinLabel": null,
          "showMaxLabel": null,
          "color": "",
          "fontSize": 12,
          "show": true
        },
        "boundaryGap": false
      },
      "yAxis": {
        "name": "销售量",
        "position": "left",
        "show": true,
        "type": "value",
        "nameLocation": "end",
        "nameTextStyle": {
          "color": "#333",
          "fontSize": "12"
        },
        "nameRotate": 0,
        "inverse": false,
        "axisLine": {
          "show": true,
          "symbol": "none",
          "lineStyle": {
            "color": "#333"
          }
        },
        "axisTick": {
          "show": true,
          "interval": "auto",
          "inside": false,
          "length": 5
        },
        "axisLabel": {
          "interval": 0,
          "inside": false,
          "rotate": 0,
          "margin": 8,
          "formatter": "{value}",
          "showMinLabel": null,
          "showMaxLabel": null,
          "color": "",
          "fontSize": 12,
          "show": true
        },
        "boundaryGap": false
      },
      "series": [{
        "name": "销售量",
        "type": "line",
        "symbol": "emptyCircle",
        "symbolSize": 4,
        "symbolRotate": 0,
        "showAllSymbol": false,
        "areaStyle": {
          "color": "transparent"
        },
        "smooth": false,
        "step": false,
        "label": {
          "show": false,
          "position": "top",
          "rotate": 0,
          "fontSize": 12,
          "color": "#333"
        },
        "itemStyle": {
          "color": "#d53a35"
        },
        "encode": {
          "x": "",
          "y": ""
        }
      }],
      "dataset": {
        "source": [{
          "年份": "2015",
          "销售量": 820
        }, {
          "年份": "2016",
          "销售量": 932
        }, {
          "年份": "2017",
          "销售量": 1820
        }, {
          "年份": "2018",
          "销售量": 2820
        }, {
          "年份": "2019",
          "销售量": 3820
        }, {
          "年份": "2020",
          "销售量": 2850
        }, {
          "年份": "2021",
          "销售量": 2100
        }, {
          "年份": "2022",
          "销售量": 2820
        }]
      },
      "backgroundColor": "#fff"
    },
    "others": {
      "openMenu": [1, 2, 10, 9],
      "datasways": 1,
      "datasource": "",
      "datasql": "select a.natural_village_name,count(b.building_id ) as count from building b left join natural_village a on a.natural_village_id=b.natural_village_id GROUP BY a.natural_village_name",
      "datasurl": "",
      "datajson": "",
      "updated": 1
    },
    "id": "63a3e065-ff48-40a3-887d-a10f2d8661b0"
  }],
  "contents": {}
}
