import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{dataFake} from '../../data/datafake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover: string = "http://f.i.uol.com.br/folha/ilustrada/images/12173365.jpeg"
  contentTitle: string = "A mulher sentada"
  contentDescription: string = "A pintura Mulher Sentada de Picasso é um exemplo magistral do estilo cubista, caracterizado por formas geométricas abstratas e uma representação fragmentada da figura humana. Nesta obra, vemos uma mulher sentada com contornos angulares e cores vibrantes, mostrando sua habilidade em desafiar as convenções artísticas. As linhas dinâmicas e os ângulos intrincados criam uma sensação de movimento e profundidade, enquanto a expressão facial é distorcida, mas ainda assim transmite uma presença poderosa. Picasso, com sua genialidade, transforma a simplicidade de uma mulher sentada em uma obra de arte complexa e emocionalmente carregada, convidando o espectador a contemplar a beleza na abstração."
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

    console.log(result)
    }

  }

