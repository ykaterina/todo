import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from "./item";
import { ItemComponent } from './item/item.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button'
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';


@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, ItemComponent,MatButtonToggleModule,MatButtonModule,FormsModule, MatFormFieldModule, MatInputModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  componentTitle = 'My To Do List';
  
  filters = ["All","Done","Active"];
  filter = "All";

  allItems = [
    { description: "eat", done: true },
    { description: "sleep", done: false },
    { description: "play", done: false },
    { description: "laugh", done: false },
  ];

  onFilterChange(filter: string) {
    this.filter = filter;
  }

  get items() {
    if (this.filter === "All") {
      return this.allItems;
    } 

    return this.allItems.filter((item) => 
      this.filter === "Done" ? item.done : !item.done
    );
  }     

  addItem(description: string) {
    console.log(description)
    if (!description) return;
  
    this.allItems.unshift({
      description,
      done: false
    });
  }

  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item),1);
  }

}
