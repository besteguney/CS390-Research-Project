import React from 'react';
import { useState,useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import Typography from '@mui/material/Typography';
import { all_data, lack_cr_data, large_changet_data,missing_context_data, sleeping_review_data, ping_pong_data, pullRequestData, pullRequestSmell } from '../data/data';
import { add_smell_data, assignPullRequestsToFiles, updateSmellData } from '../utilities/functions';
import BasicDateRangePicker from '../filterComponents/BasicDateRangePicker';
import LargeChangeSetDetail from './LargeChangeSetDetail';
import PingPongReview2 from './PingPongReview2';
import LinkDetails from './LinkDetails';
import { lime } from '@mui/material/colors';

const GeneralGraph = () =>{
    
    const x_axis_columns = [
        'lack_of_cr', 'large_changeset', 'missing_context', 'sleeping_review', 'ping_pong', 'all'
    ];

    const initial_data = [];
    add_smell_data(5, all_data, initial_data);
    const [y_axis_rows, set_y_axis_rows] = useState(initial_data.map((item) => item[1]));
    add_smell_data(0, lack_cr_data, initial_data);
    add_smell_data(1, large_changet_data, initial_data);
    add_smell_data(2, missing_context_data, initial_data);
    add_smell_data(3, sleeping_review_data, initial_data);
    add_smell_data(4, ping_pong_data, initial_data);

    // states
    const [displayData, setDisplayData] = useState(initial_data);
    const [timeRanges, setTimeRanges] = useState({start:null, end: null});
    const [firstRender, setFirstRender] = useState(false);
    const [showLargeChangeSetDetail, setShowLargeChangeSetDetail] = useState(false);
    const [showPingPongDetail, setPingPongDetail] = useState(false);
    const [currentDetails, setCurrentDetails] = useState({type:null, name:null});
    const [links, setLinks] = useState([]);

    // graph details
    const option = {
        title: {
            text: 'General Smell View',
            left: 'center'
        },
        tooltip: {
          position: 'top'
        },
        grid: {
          height: '80%',
          
        },
        xAxis: {
          type: 'category',
          data: x_axis_columns,
          splitArea: {
            show: true
          }
        },
        yAxis: {
          type: 'category',
          data: y_axis_rows,
          splitArea: {
            show: true
          },
          triggerEvent: true
        },
        visualMap: {
          min: 0,
          max: 50,
          calculable: true,
          orient: 'horizontal',
          left: 'center',
          bottom:'0%'
        },
        series: [
          {
            name: 'Process Smell',
            type: 'heatmap',
            data: displayData,
            label: {
              show: true
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            triggerEvent: true
          }
        ]
      };

    
    const click_handler = (params) =>{
        if (params.targetType !== 'axisLabel'){
            const smell_data = params.data[0];

            setCurrentDetails({type: smell_data, name: params.data[1]});
            if (smell_data == 1){
              //setPingPongDetail(false);
              setShowLargeChangeSetDetail(true);
            }
            else if (smell_data == 4){
                //setShowLargeChangeSetDetail(false);
                setPingPongDetail(true);
            }
            else if (smell_data == 5){
              const filtered = pullRequestSmell.filter((item) => item.name.split('/')[0] === params.data[1])[0];
          console.log(pullRequestSmell.filter((item) => item.name.split('/')[0] === params.data[1])[0]);
          let largeCh = (filtered.largeChange.map((item) => item.artifactId));
          let lackOfCode = (filtered.lackOfCr.map((item) => item.artifactId));
          let missing = (filtered.missingContext.map((item) => item.artifactId));
          let sleeping = (filtered.sleeping.map((item) => item.artifactId));

        setLinks([...largeCh, ...lackOfCode, ...missing, ...sleeping])
        
            }
        }
    };

    const onEvents = {
        'click': click_handler
    };

    console.log(links);    
    const handleRange = (start, end) =>{
        setTimeRanges({start:start, end:end});
        console.log(new Date(start).getTime());
    }

    useEffect(() =>{
        if(firstRender){
            const newLackOfCr = [];
            const newLargeChangeSet = [];
            const newMissing = [];
            const newSleeping = [];
            const newPingPong = [];

            const filteredData = updateSmellData(pullRequestSmell, timeRanges.start, timeRanges.end, newLackOfCr, newLargeChangeSet, newMissing, newSleeping);
            console.log(filteredData);
            const newDisplayData = [];
            
            add_smell_data(5, filteredData, newDisplayData);
            add_smell_data(0, newLackOfCr, newDisplayData);
            add_smell_data(1, newLargeChangeSet, newDisplayData);
            add_smell_data(2, newMissing, newDisplayData);
            add_smell_data(3, newSleeping, newDisplayData);
            add_smell_data(4, newPingPong, initial_data);

            setDisplayData(newDisplayData);
        }
        else{
            setFirstRender(true);
        }
        

    },[timeRanges])

    return <React.Fragment >
            <div >
            <div style={{margin: '15px'}}>
                <Typography> Time Filter </Typography>
                <BasicDateRangePicker rangeSetter={handleRange}></BasicDateRangePicker>
            </div>
            <ReactECharts  style={{height: '1500px', width: '100%'}}  option={option} onEvents={onEvents}></ReactECharts>
            {
                showLargeChangeSetDetail && <LargeChangeSetDetail startDirectory={currentDetails.name}></LargeChangeSetDetail>
            }
            {
              showPingPongDetail && <PingPongReview2 author='jack' reviewer='george'></PingPongReview2>
            }
            <LinkDetails links={links}></LinkDetails>
            </div>
    </React.Fragment>

};
export default GeneralGraph;