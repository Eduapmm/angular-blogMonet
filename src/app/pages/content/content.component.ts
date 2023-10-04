import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{dataFake} from '../../data/datafake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover: string = "https://i0.wp.com/www.historiadasartes.com/wp-content/uploads/2017/12/m_obra.jpg?resize=500%2C362&ssl=1"
  contentTitle: string = "Praia de Sainte Adress"
  contentDescription: string = "A Praia de Sainte-Adresse, situada na costa da Normandia, foi uma fonte inesgotável de inspiração para diversos artistas, incluindo Claude Monet. Nesta encantadora localidade à beira-mar, Monet encontrou o cenário perfeito para capturar a luz mágica do litoral e a serenidade do oceano em suas famosas pinturas impressionistas. As areias douradas se estendem até onde os olhos podem ver, enquanto as ondas suaves quebram na praia, criando uma melodia calmante. As velas coloridas dos barcos balançam ao vento, adicionando um toque de vivacidade à paisagem tranquila. Cada pincelada meticulosa de Monet retrata não apenas a beleza natural, mas também a atmosfera relaxante e atemporal da praia de Sainte-Adresse, transportando os espectadores para um estado de contemplação e admiração diante da majestade do mar. É um tributo artístico à simplicidade e à elegância da vida à beira-mar, preservando a memória desse local pitoresco através da arte intemporal."
  private id: string | null= "0"
  
  constructor(
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
      this.route.paramMap.subscribe( value =>
        this.id=value.get("id")
        )

        this.setValuesToComponent(this.id)

  }
  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]

    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover= result.photoCover
    }

  }

