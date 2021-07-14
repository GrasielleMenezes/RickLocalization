import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { viagem } from '../formulario.model';
import { ViagensService } from '../app.service';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  formViagem!: FormGroup;
  
  constructor(public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number, private viagensService: ViagensService) {}
   
  ngOnInit(): void {
    this.criarFormulario(new viagem());

  }
  cancelar(): void {
    this.dialogRef.close();
  }
  onSubmit() {
   
    if(this.formViagem.value.nome == '' 
    || this.formViagem.value.endereco == '' 
    || this.formViagem.value.date == '' 
    || this.formViagem.value.dimensao == 0){
      alert("Erro ao cadastrar, verifique os dados inseridos");
    }
    else{
     
      this.formViagem.value.dimensao = this.data;
      this.viagensService.saveViagem(this.formViagem.value).subscribe(() => {
      this.criarFormulario(new viagem());
      
      });
      
      this.dialogRef.close();
    }
  }
criarFormulario(cad:viagem){
  this.formViagem = new FormGroup({
    nome: new FormControl(cad.nome),
    endereco: new FormControl(cad.endereco),
    dimensao:  new FormControl({ value: this.data, disabled: true }),
    dataViagem: new FormControl(cad.dataViagem),
    observacao: new FormControl(cad.observacao)
});
}

}
