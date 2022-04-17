import React from 'react'
import {PageHeader} from 'antd'
import Post from '../Post'
import api from '../../api/mock_api'
import _ from 'lodash'
import 'antd/dist/antd.css'

export default function Posts(props){
    return(
    <div className="post_container">
        <div className="page_header_conatiner">
            <PageHeader
                title="Posts"
                style={{
                    border: '1px solid rgb(235, 237, 240)',
                    fontWeight: 'bold'
                }}
            />
        </div>
       <div className="articles_container">
           
           {
               _.map(api,(article) =>{
                   return(
                    <Post title={article.title} content={article.content}/>
                   )
               })
           }
       </div>
    </div>
    )
}