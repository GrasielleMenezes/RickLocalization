import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
  dimensaoDetalhe: any;

  constructor(private route: ActivatedRoute, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.dimensaoDetalhe = params['dimensao']);
  }
  irParaHistorico(dimensao:number){
    this.router.navigate(['/historico/'+ dimensao]);
  }
  irParaModal(dimensao:number){
    let dialogRef = this.dialog.open(ModalComponent, {
      height: '500px',
      width: '310px',
      data: dimensao
    })
    
  }
}
