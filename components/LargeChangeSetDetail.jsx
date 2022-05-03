import React from "react";
import ReactECharts from 'echarts-for-react';
import { large_changet_data } from "../data/data";
import { pullRequestSmell } from "../data/data";
import { useState } from "react";
import { List, ListItem } from "@mui/material";
import LinkDetails from "./LinkDetails";

const LargeChangeSetDetail = ({startDirectory}) =>{

  const [links, setLinks] = useState([]);

    const getLevelOption = () => {
        return [
          {
            itemStyle: {
              borderColor: '#777',
              borderWidth: 0,
              gapWidth: 1
            },
            upperLabel: {
              show: false
            }
          },
          {
            itemStyle: {
              borderColor: '#555',
              borderWidth: 5,
              gapWidth: 1
            },
            emphasis: {
              itemStyle: {
                borderColor: '#ddd'
              }
            }
          },
          {
            colorSaturation: [0.35, 0.5],
            itemStyle: {
              borderWidth: 5,
              gapWidth: 1,
              borderColorSaturation: 0.6
            }
          }
        ];
      };

      const largeChangeSetFiltered = large_changet_data.filter((item) => {return item.filename.split('/')[0] === startDirectory});

      const data = [];

      const addChildren = (level, startName, childs, path) =>{
            for (let i = 0; i < largeChangeSetFiltered.length; i++){

                let isRight = true;
                for (let j = 0; j < path.length; j++){
                    if(path[j] !== largeChangeSetFiltered[i].filename.split('/')[j])
                        isRight = false;
                }

                if (largeChangeSetFiltered[i].filename.split('/').length == level + 1 && largeChangeSetFiltered[i].filename.split('/')[level] === startName){
                    if (isRight){
                        if ( childs.filter((item) =>{ return item.name === largeChangeSetFiltered[i].filename.split('/')[level]}).length == 0){
                            childs.push({value: largeChangeSetFiltered[i].smellCount,
                                name: largeChangeSetFiltered[i].filename.split('/')[level],
                                path: largeChangeSetFiltered[i].filename.split('/').slice(0,level + 1)});
                        }
                    }
                    
                    continue;
                }
                if(largeChangeSetFiltered[i].filename.split('/')[level] === startName){

                    if (isRight){
                        if ( childs.filter((item) =>{ return item.name === startName}).length == 0){
                            const newChild = [];
                            childs.push({value: 0,
                                name: largeChangeSetFiltered[i].filename.split('/')[level],
                                path: largeChangeSetFiltered[i].filename.split('/').slice(0,level + 1),
                                children: newChild});
                            addChildren(level + 1, largeChangeSetFiltered[i].filename.split('/')[level + 1], newChild,largeChangeSetFiltered[i].filename.split('/').slice(0,level + 1));
                        }
                        else{
                            addChildren(level + 1, largeChangeSetFiltered[i].filename.split('/')[level + 1], childs.filter((item) =>{ return item.name === startName})[0].children, largeChangeSetFiltered[i].filename.split('/').slice(0,level + 1));
                        }

                    }
                    
                    
                }
            }
      }

      addChildren(0,startDirectory,data,[]);

      const addUpValues = (item) =>{
          if (item.hasOwnProperty('children') == false){
              return;
          }

          for( let i = 0; i < item.children.length; i++){
              addUpValues(item.children[i]);
              item.value = item.value + item.children[i].value;
          }
      }

      addUpValues(data[0]);

      const option = {
        title: {
          text: 'Smell Locations',
          left: 'center'
        },
        dataZoom:{
            type: 'inside',
            zoomOnMouseWheel: 'shift',
            moveOnMouseMove: false,
            moveOnMouseWheel: false
        },
        series: [
          {
            name: 'Smell Locations',
            type: 'treemap',
            visibleMin: 300,
            label: {
              show: true,
              formatter: '{b}'
            },
            upperLabel: {
              show: true,
              height: 30
            },
            itemStyle: {
              borderColor: '#fff'
            },
            levels: getLevelOption(),
            data: data
          }
        ]
      }


      const click_handler = (params) =>{
        let pathString = '';
        for(let i = 0; i < params.data.path.length - 1; i++){
          pathString = pathString + params.data.path[i] + '/';
        }
        pathString = pathString + params.data.path[params.data.path.length - 1];
        console.log(pullRequestSmell.filter((item) => item.name === pathString)[0].largeChange.map((d) => d.artifactId));
        setLinks(pullRequestSmell.filter((item) => item.name === pathString)[0].largeChange.map((d) => d.artifactId))
        console.log(params.data);
        console.log(pullRequestSmell);
    };

    const onEvents = {
        'click': click_handler
    };

    console.log(links);
      return <React.Fragment >
            <div >
            <ReactECharts option={option} onEvents={onEvents}></ReactECharts>
            <LinkDetails links={links}></LinkDetails>
            </div>
    </React.Fragment>

};
export default LargeChangeSetDetail;