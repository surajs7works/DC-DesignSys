import styled from 'styled-components';

export const Cards = styled.div`
font-size: 1em;
margin: 0em 1.5em;
border: 1px solid #eee;
border-radius: 4px;
color:black;
background:#055BA6;
cursor: pointer;
background: none;
max-width:250px;
position: relative;
overflow: hidden;



:hover{
background:#eee;
}

img{
    width: 250px;
    height: 130px;
}
`;

export const CardSkeleton = styled.div`
font-size: 1em;
margin: 0em 1.5em;
border: 1px solid #eee;
border-radius: 4px;
color:black;
background:#e5e5e5;
cursor: pointer;
background: none;
max-width:250px;
position: relative;
overflow: hidden;

.ImgPlaceholder{
    width: 250px;
    height: 130px;
    background:#eee;
}
.Placeholder-title{
    margin:10px 0px;
    height:20px;
    width:200px;
    background:#eee;
}
.Placeholder-info{
    height:10px;
    width:100px;
    background:#eee;
    margin:10px 0px;
}
`;

export const ListCard = styled.div` 
font-size: 1em;
margin: 0em 1.5em;
border: 1px solid #eee;
border-radius: 4px;
color:black;
background:#055BA6;
cursor: pointer;
background: none;
max-width: 300px;
position: relative;
overflow: hidden;

:hover{
background:#eee;
}

img{
    width: 58px;
    height: 58px;
    float: left;
}
`;

export const SkeletonListCard = styled.div` 
font-size: 1em;
margin: 0em 1.5em;
border: 1px solid #eee;
border-radius: 4px;
color:black;
background:#e5e5e5;
cursor: pointer;
background: none;
max-width:300px;
position: relative;
overflow: hidden;

.ListImgPlaceholder{
    width: 58px;
    height: 58px;
    background:#eee;
    float:left;
}
.Placeholder-title{
    height:15px;
    width:200px;
    background:#eee;
}
.Placeholder-info{
    height: 8px;
    width: 100px;
    background: #eee;
    margin: 10px 0px 0px 0px;
}
`;