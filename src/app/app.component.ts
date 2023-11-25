import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

//models
import { wishItem } from '../shared/models/wishItem';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  todoList:wishItem[] = [
    //new wishItem("create a project",true),
    //new wishItem("go to school",true),
    //new wishItem("create a project",false),
    //new wishItem("done somethin")
  ]
  title = 'hello_world_angular';
  titleTwo = "testing variables";
  wishItemText =""

  toggleItem(e:wishItem){
    e.isCompleted = !e.isCompleted
    console.log(this.todoList)
  }

  submitForm(){
    this.todoList.push(new wishItem(this.wishItemText))
    this.wishItemText = ""
  }
}
