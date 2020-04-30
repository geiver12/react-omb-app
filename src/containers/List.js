import React, { Fragment } from 'react'

import Card from '../components/Card/Card'

console.log(process.env.API)
const API = process.env.API

class List extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [],
            searchTerm:'',
            error:'',
            loading:true
        }
    }
    async componentDidMount() {
        //const res=  await  fetch('../../assets/data.json')
        const res = await fetch(`${API}&s=batman`)
        const resJSON = await res.json()
        console.log(resJSON)
        this.setState({ data: resJSON.Search,loading:false })
    } 
   async handleSubmit(e){
        e.preventDefault()
        if(!this.state.searchTerm){
            return this.setState({error:'Please write a valid text!'})
        }
        const res =await fetch(`${API}&s=${this.state.searchTerm}`)
        const data = await res.json()

        if(!data.Search)
            return this.setState({error:'There are no results!'})
        console.log(data)
        this.setState({ data: data.Search, error:'',searchTerm:''} )
    }
    render() {
        const {data,loading}=this.state
        if(loading)
        return <h3 className="text-light">Loading....</h3>
        return (
            <Fragment>
                <div className="col-md-4 offset-4 p-4">
                    <form onSubmit={(e)=>this.handleSubmit(e)}>
                        <input type="text" name="" id="" className="form-control" placeholder="Search"  value={this.state.searchTerm}
                        onChange={(e)=> this.setState({searchTerm:e.target.value})} autoFocus/>
                    </form>
        <p className="text-white">{this.state.error ? this.state.error : ''}</p>
                </div>
                     <div className="row">
            {
                this.state.data.map((movie,i) => {
                    return <Card Movie={movie} key={i} />
                })
            }
        </div>
            </Fragment>
        )
    }
}

export default List