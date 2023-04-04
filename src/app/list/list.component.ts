import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  // https://stackoverflow.com/questions/52616172/how-to-initialize-an-object-in-typescript/
  // https://bobbyhadz.com/blog/typescript-property-has-no-initializer
  
  item: {id: number, title: string, text: string,status:boolean}={id:0,title:"",text:"",status:false};
  
  // items=[this.item]

  //this is temporary
  items=[ {id:0,title:"0",text:"zero",status:true},
          {id:1,title:"1",text:"one",status:false},
          {id:2,title:"2",text:"two",status:true},
          {id:3,title:"3",text:"three",status:false}
        ]

  newItemTitle: string = '';
  newItemText: string = '';
  isEditing :boolean=false;


  markItem(id: number) {
    this.items=this.items.filter((item)=>{
      if(item.id===id){
        item.status=!item.status
      }
      return item
    })
  }


  addItem() {
    if (this.newItemTitle !== '' && this.newItemText !== '') 
    {
      const newTodo={
                      id:this.items.length,
                      title:this.newItemTitle,
                      text:this.newItemText,
                      status:false
                    }
      this.items.push(newTodo);
      this.newItemTitle = '';
      this.newItemText = '';
    }
    else{
      alert("Fields cannot be empty!");
    }
  }
//filter() function does not modify the original array!
  removeItem(id: number) {
    this.items=this.items.filter((item)=>{
      return item.id!==id
    })
  }

  editItem(id: number) {
    this.items=this.items.filter((item)=>{
      return item.id!==id
    })
  }
}