import Post from 'pages/posts/Post'
import React from 'react'
import { Virtuoso } from 'react-virtuoso'

const getRandomHeight = (index) => {
    return index % 2 ? 100 : 200
}

const GenerateItem = (index) => {
    let ranHeight = getRandomHeight(index);
    return <Post/>
// return <><div style={{height: ranHeight, border: 1}}>Row {index} - {ranHeight}</div></>
}

export default function Test1() {
    return (
        <div>
            <Virtuoso
                totalCount={10000}
                overscan={10}
                item={GenerateItem}
                style={{ height: '500px', width: '500px' }}
  />
        </div>
    )
}
