import React, { Component } from 'react'
import items from './data'
const RoomContext=React.createContext();
 class RoomPriveder extends Component {
     state={
         rooms:[],
         sortedRooms:[],
         featuredRooms:[],
         loading:true,
         type:'all',
         capacity:1,
         price:0,
         minPrice:0,
         maxPrice:0,
         maxSize:0,
         minSize:0,
         breakfast:false,
         pets:false
     }
     componentDidMount(){
         let rooms =this.formatData(items)
         let featuredRooms=rooms.filter(room=>room.featured===true);
         let maxPrice=Math.max(...rooms.map(item=>
             item.price
     ))
         let maxSize=Math.max(...rooms.map(item=>
            item.size
        ))
         this.setState({
             rooms,featuredRooms,sortedRooms:rooms,
             loading:false,
             price:maxPrice,maxPrice,maxSize
         })
     }
     formatData(items){
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
      
            let room = { ...item.fields, images, id };
            return room;
          });
          return tempItems;
     }
     getRoom=(slug)=>{
         let tempRooms=[...this.state.rooms]
         const room =tempRooms.find(room=>room.slug===slug);
         return room
     }
     handleChange=(event)=>{
         const type=event.target.type
         const name=event.target.name
         const value=event.type==='checkbox'? event.target.checked : event.target.value
         this.setState({
             [name]:value
         },this.filterRooms)
     }
     filterRooms=()=>{
    let {rooms,type,capacity,price,minSize,maxSize,minPrice,maxPrice,breakfast,pets}=this.state;
    let tempRooms=[...rooms]
    capacity=parseInt(capacity)
    if(type !=='all'){
        tempRooms=tempRooms.filter(room=>room.type===type)
    }
    if(capacity !==1){
        tempRooms=tempRooms.filter(room=>room.capacity>=capacity)
    }
    this.setState({
        sortedRooms:tempRooms
    })
     }
    render() {
        return (
            <RoomContext.Provider value={{...this.state,getRoom:this.getRoom,handleChange:this.handleChange}}>
              {this.props.children}
            </RoomContext.Provider>
        )
    }
}
const RoomConsumer=RoomContext.Consumer;
export {RoomPriveder,RoomContext,RoomConsumer};