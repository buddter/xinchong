$(function(){
	$.get('map/guangxi.json', function (guangxiJson) {
      console.log(guangxiJson);
   		echarts.registerMap('guangxi', guangxiJson);
    	var chart = echarts.init(document.getElementById('main'));
      	chart.setOption(option);
      //事件
      	chart.on('click', function(param){
          switch (param.name) {
            case '柳州市':
              trans('liuzhou');
              break;
            case '贺州市':
              trans('hezhou');
              break;
            case '南宁市':
              trans('nanning');
              break;
            case '来宾市':
              trans('laibin');
              break;
            default:
              alert('抱歉，数据目前仅限南宁、柳州、贺州、来宾四市，我们会尽快完善');
              break;
          }
          for(var i in option.series[0].data){
            if(param.name == option.series[0].data[i].name){
              chart.dispatchAction({
                type: 'mapSelect',
                name: option.series[0].data[i].name
              })
            }else{
              chart.dispatchAction({
                type: 'mapUnSelect',
                name: option.series[0].data[i].name
              }) 
            }
          }
      });
	  });
    $('.name-in>span').on('click',  function(event) {
      $('.name-in>span').removeClass('selected');
      $(this).addClass('selected');
      switch ($(this).index('span')) {
        case 0:
          $('.img>img').addClass('imghide');
          $('.img').children('.tieer').removeClass('imghide').addClass('imgshow');
          break;
        case 1:
          $('.img>img').addClass('imghide');
          $('.img').children('.luer').removeClass('imghide').addClass('imgshow');
          break;
        default:
          // statements_def
          break;
      }
    });
    function trans(city){
      $('.circle').removeClass().addClass('circle '+city+'C');
      $('.dashed').removeClass().addClass('dashed '+city+'D');
      $('.line').removeClass().addClass('line '+city+'L');
      $('.text').children().addClass('texthide').removeClass('textshow');
      $('.text').children('.'+city).removeClass('texthide').addClass('textshow');
      if(city == 'liuzhou'){
        $('.img>img').addClass('imghide');
        $('.img').children('.tieer').removeClass('imghide').addClass('imgshow');
        $('.name-in>span').removeClass('selected');
        $('.tieer').addClass('selected');
      }else{
        $('.img>img').addClass('imghide');
          $('.img').children('.'+city).removeClass('imghide').addClass('imgshow');
      }
      if(city =='nanning'){
        $('.capital').show();
      }else{
        $('.capital').hide();
      }
    }
    	option = {
  
        visualMap: [ 
        {
            type: 'piecewise',
            min: 300,
            max: 600,
            dimension: 0,      
            seriesIndex: 0,    
            inRange: {
                color: ['#eee','#f1c180']           
            },
        }
    ],
      series: [
          {
              name: '业务分布',
              type: 'map',
              mapType: 'guangxi',
              roam: false,
              label: {
                  normal: {
                      show: true
                  },
                  emphasis: {
                      show: true
                  }
              },
              itemStyle:{
                normal:{
                label:{show:true},
                borderWidth:3,
                borderColor:'#fff'
                }   
              },
              data:[
                  {
                    name: '百色市',
                    value: 600 ,
                    itemStyle:{
                      normal:{
                        color:'#32cd32',
                        label:{
                          show:true,
                          textStyle:{
                            color:'#e6801f',
                            fontSize:14,
                            fontWeight:500
                          }
                        }
                      }
                    }
                  },
                  {name: '河池市',value: 600,
                     itemStyle:{
                      normal:{
                        color:'#32cd32',
                        label:{
                          show:true,
                          textStyle:{
                            color:'#e6801f',
                            fontSize:14,
                            fontWeight:500
                          }
                        }
                      }
                    }
                  },
                  {name: '柳州市',value: 600 , itemStyle:{
                      normal:{
                        color:'#32cd32',
                        label:{
                          show:true,
                           textStyle:{
                            color:'#e6801f',
                            fontSize:14,
                            fontWeight:500
                          }
                        }
                      }
                    }},
                  {name: '桂林市',value: 600 , itemStyle:{
                      normal:{
                        color:'#32cd32',
                        label:{
                          show:true,
                           textStyle:{
                            color:'#e6801f',
                            fontSize:14,
                            fontWeight:500
                          }
                        }
                      }
                    }},
                  {name: '崇左市',value: 600, itemStyle:{
                      normal:{
                        color:'#32cd32',
                        label:{
                          show:true,
                           textStyle:{
                            color:'#e6801f',
                            fontSize:14,
                            fontWeight:500
                          }
                        }
                      }
                    } },
                  {name: '南宁市',value: 600 , itemStyle:{
                      normal:{
                        color:'#32cd32',
                        label:{
                          show:true,
                           textStyle:{
                            color:'#d91e18',
                            fontSize:14,
                            fontWeight:700
                          }
                        }
                      }
                    }},
                  {name: '来宾市',value: 600 , itemStyle:{
                      normal:{
                        color:'#32cd32',
                        label:{
                          show:true,
                           textStyle:{
                            color:'#e6801f',
                            fontSize:14,
                            fontWeight:500
                          }
                        }
                      }
                    }},
                  {name: '梧州市',value: 600 , itemStyle:{
                      normal:{
                        color:'#32cd32',
                        label:{
                          show:true,
                           textStyle:{
                            color:'#e6801f',
                            fontSize:14,
                            fontWeight:500
                          }
                        }
                      }
                    }},
                  {name: '贺州市',value: 600 , selected:true,itemStyle:{
                      normal:{
                        color:'#32cd32',
                        label:{
                          show:true,
                            textStyle:{
                            color:'#e6801f',
                            fontSize:14,
                            fontWeight:500
                          }
                        }
                      }
                    }},
                  {name: '贵港市',value: 600 , itemStyle:{
                      normal:{
                        color:'#32cd32',
                        label:{
                          show:true,
                            textStyle:{
                            color:'#e6801f',
                            fontSize:14,
                            fontWeight:500
                          }
                        }
                      }
                    }},
                  {name: '玉林市',value: 600 , itemStyle:{
                      normal:{
                        color:'#32cd32',
                        label:{
                          show:true,
                           textStyle:{
                            color:'#e6801f',
                            fontSize:14,
                            fontWeight:500
                          }
                        }
                      }
                    }},
                  {name: '钦州市',value: 600 , itemStyle:{
                      normal:{
                        color:'#32cd32',
                        label:{
                          show:true,
                           textStyle:{
                            color:'#e6801f',
                            fontSize:14,
                            fontWeight:500
                          }
                        }
                      }
                    }},
                  {name: '北海市',value: 600 , itemStyle:{
                      normal:{
                        color:'#32cd32',
                        label:{
                          show:true,
                           textStyle:{
                            color:'#e6801f',
                            fontSize:14,
                            fontWeight:500
                          }
                        }
                      }
                    }},
                  {name: '防城港市',value: 600 , itemStyle:{
                      normal:{
                        color:'#32cd32',
                        label:{
                          show:true,
                           textStyle:{
                            color:'#e6801f',
                            fontSize:14,
                            fontWeight:500
                          }
                        }
                      }
                    }}
              ]
          }
        ]};



});