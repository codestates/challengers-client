import React from 'react';
import {
    FollowingDiv,
    FollowingTitle,
    Following,
    FollowerDiv,
    FollowerTitle,
    Follower
} from "./FollowingElements";

const FollowingList = ({name}) => {
    return (
        <>
            <FollowingTitle>Following</FollowingTitle>
                <FollowingDiv>
                {/* {followinger.map((name, index) => <Following key={index}>{name}</Following>)} */}
                <Following />
                <Following />
                <Following />
                </FollowingDiv>
            <FollowerTitle>Follower</FollowerTitle>
                <FollowerDiv>
                {/* {followered.map((name, index) => <Follower key={index}>{name}</Follower>)} */}
                <Follower />
                <Follower />
                <Follower />
                </FollowerDiv>
        </>
    )
}

export default FollowingList
