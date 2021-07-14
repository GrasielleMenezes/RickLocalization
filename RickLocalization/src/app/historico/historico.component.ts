import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViagensService } from '../app.service';
import { viagem } from "../formulario.model";
@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {
  viagens!: any[];
  displayedColumns: string[] = ['nome', 'endereco', 'dimensao', 'dataViagem', 'observacao'];
  dimensao: any;
  constructor(private viagensService: ViagensService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getViagens();
  }
  getViagens() {
    this.route.params.subscribe(params => this.dimensao = params['dimensao'])
    this.viagensService.getViagens().subscribe((viagem: viagem[]) => {
    this.viagens = viagem.filter(a => a.dimensao == this.dimensao);
    });
  }
  voltar(){
    this.router.navigate(['/home']);
  }
}
