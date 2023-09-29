import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover: string = "https://arteref.com/wp-content/uploads/2019/11/picasso-mate%CC%81ria-600x623.jpg"
  contentTitle: string = "Les Demoiselles dAvignon (1907)"
  contentDescription: string = "Les Demoiselles d'Avignon é uma famosa pintura cubista criada por Pablo Picasso em 1907. Nesta obra-prima, Picasso rompe com as convenções artísticas tradicionais, retratando cinco figuras femininas de forma angular e distorcida, influenciada pela arte africana e ibérica. A composição é marcada por linhas quebradas e formas geométricas, criando uma sensação de tensão e desordem. As máscaras africanas e a abstração das formas refletem a busca do artista por uma nova linguagem visual, que se tornou fundamental para o desenvolvimento da arte moderna no século XX. Les Demoiselles d'Avignon é considerada uma das obras mais importantes da história da arte."

  constructor() { }

  ngOnInit(): void {

  }
}
