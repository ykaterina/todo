import { Component, Input, Output, EventEmitter,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from "../item";
import { EditdialogComponent } from './editdialog/editdialog.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule,MatDividerModule, MatButtonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})

export class ItemComponent {
  constructor(public dialog: MatDialog) {}

  editable = false;
  @Input() item!: Item;
  @Output() remove = new EventEmitter<Item>();

  saveItem(description: string){
    if(!description) return;

    this.editable = false;
    this.item.description = description;
  }

  openEditDialog(){
    const editDialog = this.dialog.open(EditdialogComponent, {
      width: '250px',
      data: this.item.description
    });

    editDialog.afterClosed().subscribe(result => {
      // console.log(result)
      this.saveItem(result)
    });
  }

}

