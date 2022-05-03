import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { smellCountByDeveloperLackofCodeReview, smellCountByDeveloperLargeChangeset, smellCountByDeveloperMissingContext, smellCountByDeveloperSleepingReview} from '../data/data';

const DeveloperTreeMap = () =>{

    const treeMapChilds = [];

    const dataNames = [];
    const values = [];

    for (let i = 0; i < smellCountByDeveloperLackofCodeReview.x.length; i++){
        dataNames.push(smellCountByDeveloperLackofCodeReview.x[i]);
        values.push(smellCountByDeveloperLackofCodeReview.y[i]);
    }

    for (let i = 0; i < smellCountByDeveloperLargeChangeset.x.length; i++){
        if(!dataNames.includes(smellCountByDeveloperLargeChangeset.x[i])){
            dataNames.push(smellCountByDeveloperLargeChangeset.x[i]);
            values.push(smellCountByDeveloperLargeChangeset.x[i]);
        }
        else{
            for(let j = 0; j < dataNames.length; j++){
                if (dataNames[j] === smellCountByDeveloperLargeChangeset.x[i]){
                    values[j] = values[j] + smellCountByDeveloperLargeChangeset.y[i];
                }
            }
        }
        
    }

    for (let i = 0; i < smellCountByDeveloperMissingContext.x.length; i++){
        if(!dataNames.includes(smellCountByDeveloperMissingContext.x[i])){
            dataNames.push(smellCountByDeveloperMissingContext.x[i]);
            values.push(smellCountByDeveloperMissingContext.x[i]);
        }
        else{
            for(let j = 0; j < dataNames.length; j++){
                if (dataNames[j] === smellCountByDeveloperMissingContext.x[i]){
                    values[j] = values[j] + smellCountByDeveloperMissingContext.y[i];
                }
            }
        } 
    }

    for (let i = 0; i < smellCountByDeveloperSleepingReview.x.length; i++){
        if(!dataNames.includes(smellCountByDeveloperSleepingReview.x[i])){
            dataNames.push(smellCountByDeveloperSleepingReview.x[i]);
            values.push(smellCountByDeveloperSleepingReview.x[i]);
        }
        else{
            for(let j = 0; j < dataNames.length; j++){
                if (dataNames[j] === smellCountByDeveloperSleepingReview.x[i]){
                    values[j] = values[j] + smellCountByDeveloperSleepingReview.y[i];
                }
            }
        } 
    }

    for(let i = 0; i < dataNames.length; i++){
        let value = {name: dataNames[i], value: values[i]};
        treeMapChilds.push(value);
    }

    const option = {
        series: [
          {
            type: 'treemap',
            data: [
              {
                name: 'Smells',
                children: treeMapChilds
              },
            ]
          }
        ]
      };

      return <React.Fragment >
            <Typography>
                Details of Developers
            </Typography>
            <ReactECharts option={option} ></ReactECharts>
        </React.Fragment>
}
export default DeveloperTreeMap