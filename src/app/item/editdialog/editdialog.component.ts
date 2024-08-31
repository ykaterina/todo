
import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogTitle,MatDialogContent, MatDialogRef,MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-editdialog',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent,MatDialogModule],
  templateUrl: './editdialog.component.html',
  styleUrl: './editdialog.component.css'
})
export class EditdialogComponent {

  constructor(
    public editDialog: MatDialogRef<EditdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  
  onNoClick(): void {
    this.editDialog.close(this.data);
  }

  onSave(editedDesc: string): void {
    this.editDialog.close(editedDesc);
  }
}