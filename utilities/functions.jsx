import { all_data, lack_cr_data, large_changet_data,missing_context_data, sleeping_review_data, ping_pong_data, pullRequestData } from '../data/data';
export const assignPullRequestsToFiles = () =>{

    // first finding the types
    const pullRequestsLackOfCr = pullRequestData.filter((item) => {
        return item.smells[0].result == true;
    });
    
    const pullRequestLargeChange = pullRequestData.filter((item) => {
        return item.smells[4].result == true;
    });

    const pullRequestPingPong = pullRequestData.filter((item) =>{
        return item.smells[1].result == true;
    });

    const pullRequestSleepingReview = pullRequestData.filter((item) =>{
        return item.smells[2].result == true;
    })

    const pullRequestMissingContext = pullRequestData.filter((item) =>{
        return item.smells[3].result == true;
    })

    const requestAndSmells = [];

    for(let i = 0; i < all_data.length; i++){

        // first lackOfCr
        let smellLackOfCrCount = lack_cr_data.filter((item) =>{
            return item.filename == all_data[i].filename;
        }).length == 0 ? 0: lack_cr_data.filter((item) =>{
            return item.filename == all_data[i].filename;
        })[0].smellCount;

        const lackOfCrArtifacts = [];
        for( let j = 0; j < smellLackOfCrCount; j++){
           lackOfCrArtifacts.push(pullRequestsLackOfCr[Math.floor(Math.random()*pullRequestsLackOfCr.length)]); 
        }

        // missing context
        let smellMissingCount = missing_context_data.filter((item) =>{
            return item.filename == all_data[i].filename;
        }).length == 0 ? 0: missing_context_data.filter((item) =>{
            return item.filename == all_data[i].filename;
        })[0].smellCount;

        const missingContextArtifacts = [];
        for( let j = 0; j < smellMissingCount; j++){
            missingContextArtifacts.push(pullRequestMissingContext[Math.floor(Math.random()*pullRequestMissingContext.length)]); 
        }

        // large changest
        let smellLargeChangesetCount = large_changet_data.filter((item) =>{
            return item.filename == all_data[i].filename;
        }).length == 0 ? 0: large_changet_data.filter((item) =>{
            return item.filename == all_data[i].filename;
        })[0].smellCount;

        const largeChangesetArtifacts = [];
        for( let j = 0; j < smellLargeChangesetCount; j++){
            largeChangesetArtifacts.push(pullRequestLargeChange[Math.floor(Math.random()*pullRequestLargeChange.length)]); 
        }

        //sleeping review
        let smellSleepingCount = sleeping_review_data.filter((item) =>{
            return item.filename == all_data[i].filename;
        }).length == 0 ? 0: sleeping_review_data.filter((item) =>{
            return item.filename == all_data[i].filename;
        })[0].smellCount;

        const sleepingArtifacts = [];
        for( let j = 0; j < smellSleepingCount; j++){
            sleepingArtifacts.push(pullRequestSleepingReview[Math.floor(Math.random()*pullRequestSleepingReview.length)]); 
        }

        // ping pong
        let smellPingPongCount = ping_pong_data.filter((item) =>{
            return item.filename == all_data[i].filename;
        }).length == 0 ? 0: ping_pong_data.filter((item) =>{
            return item.filename == all_data[i].filename;
        })[0].smellCount;

        const pingPongArtifacts = [];
        for( let j = 0; j < smellPingPongCount; j++){
            pingPongArtifacts.push(pullRequestPingPong[Math.floor(Math.random()*pullRequestPingPong.length)]); 
        }

        requestAndSmells.push({name: all_data[i].filename, lackOfCr: lackOfCrArtifacts, largeChange: largeChangesetArtifacts,
        missingContext: missingContextArtifacts, sleeping: sleepingArtifacts, pingPong: pingPongArtifacts});
    }
    return requestAndSmells;
}

export const add_smell_data = (row_number, data, initial_data) =>{
    for(let i = 0; i < data.length; i++){
        const path = data[i].filename.split('/');
        const new_data = [row_number, path[0], data[i].smellCount];
        var found = false;

        if(initial_data.map(item => item[1]).includes(path[0])){
            for(let j = 0; j < initial_data.length; j++){
                if(initial_data[j][1] == path[0]){
                    if(initial_data[j][0] == row_number){
                        found = true;
                        break;
                    }
                }
            }
        }

        if(found){
            for(let j = 0; j < initial_data.length; j++){
                if(initial_data[j][1] == path[0] && initial_data[j][0] == row_number){
                    initial_data[j][2] = initial_data[j][2] + data[i].smellCount;
                    break;
                }
            }
        }
        else{
            initial_data.push(new_data);
        }
    }
    if (data.length == 0){
        const filtered = initial_data.filter((item) => item[0] == 5);
        console.log(filtered);

        for(let i = 0; i < filtered.length; i++ ){
            const path = filtered[i][1];
            const new_data = [row_number, path, 0];
            initial_data.push(new_data);
        }
    }
};

export const filterPullRequest = (artifactsWithLackOfCodeReview, artifactWithLargeChangeset, artifactsWithMissingContext, artifactsWithPingPong, artifactsWithSleepingReview) =>{
    artifactsWithLackOfCodeReview = pullRequestData.filter((item) => {
        if (item.smells[0].result === true)
            return item;
    });
    artifactsWithLackOfCodeReview = artifactsWithLackOfCodeReview.map(item => item.artifactId);

    artifactWithLargeChangeset = pullRequestData.filter((item) => {
        if (item.smells[4].result === true)
            return item;
    });
    artifactWithLargeChangeset = artifactWithLargeChangeset.map(item => item.artifactId);

    artifactsWithMissingContext = pullRequestData.filter((item) => {
        if (item.smells[3].result === true)
            return item;
    });
    artifactsWithMissingContext = artifactsWithMissingContext.map(item => item.artifactId);

    artifactsWithPingPong = pullRequestData.filter((item) => {
        if (item.smells[1].result === true)
            return item;
    });
    artifactsWithPingPong = artifactsWithPingPong.map(item => item.artifactId);

    artifactsWithSleepingReview = pullRequestData.filter((item) => {
        if (item.smells[2].result === true)
            return item;
    });
    artifactsWithSleepingReview = artifactsWithSleepingReview.map(item => item.artifactId);
};

export const updateSmellData = (pullRequestSmell, start, end, lackOfCrNewData, largeNewdata,missingNewData, sleepingNewData) =>{
    const allNewData = [];

    for(let i = 0; i < pullRequestSmell.length; i++){
        const lackOfCrCount = pullRequestSmell[i].lackOfCr.filter((item) => {return start <=  new Date(item.createdAt).getTime() && end >= new Date(item.createdAt).getTime()}).length;
        const largeCount = pullRequestSmell[i].largeChange.filter((item) => {return start <=  new Date(item.createdAt).getTime() && end >= new Date(item.createdAt).getTime()}).length;
        const missingCount = pullRequestSmell[i].missingContext.filter((item) => {return start <=  new Date(item.createdAt).getTime() && end >= new Date(item.createdAt).getTime()}).length;
        const sleepingCount = pullRequestSmell[i].sleeping.filter((item) => {return start <=  new Date(item.createdAt).getTime() && end >= new Date(item.createdAt).getTime()}).length;

        lackOfCrNewData.push({'filename': pullRequestSmell[i].name, 'smellCount': lackOfCrCount});
        largeNewdata.push({'filename': pullRequestSmell[i].name, 'smellCount': largeCount});
        missingNewData.push({'filename': pullRequestSmell[i].name, 'smellCount': missingCount});
        sleepingNewData.push({'filename': pullRequestSmell[i].name, 'smellCount': sleepingCount});
        allNewData.push({'filename': pullRequestSmell[i].name, 'smellCount': sleepingCount + largeCount + missingCount + lackOfCrCount});
    }

    return allNewData;
};

export const findSubDirectories = (smellType, startDirectory, level) =>{
    let data = [];

    if (smellType == 5)
        data = all_data;
    else if ( smellType == 0)
        data = lack_cr_data;
    else if ( smellType == 1)
        data = large_changet_data;
    else if ( smellType == 2)
        data = missing_context_data;
    else if ( smellType == 3)
        data = sleeping_review_data;
    else 
        data = ping_pong_data;
    
    const subs = [];

    for (let i = 0; i < data.length; i++){
        if (data[i].filename.split('/')[level] === startDirectory){
            if ( level + 1 < data[i].filename.split('/').length)
                subs.push(data[i].filename.split('/')[level + 1]);
        }
    }
    return subs;
}