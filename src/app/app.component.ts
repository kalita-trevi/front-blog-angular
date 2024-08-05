import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  Escritora,
  EscritorasComponent,
} from './components/escritoras/escritoras.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { Card2Component } from './components/card2/card2.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';

interface Post {
  title: string;
  thumbnail: string;
  data: string;
  author: string;
}
interface Menu {
  title: string;
  link: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    EscritorasComponent,
    Card2Component,
    CardComponent,
    FooterComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  escolherEscritora($event: number) {
    if (this.escritoraIndex === 999 || $event === this.escritoraIndex) {
      this.detalhesEscritoraIsVisible = !this.detalhesEscritoraIsVisible;
    }

    this.escritoraIndex = $event;
  }

  title = 'Monster-Blog';
  escritoraIndex = 999;
  detalhesEscritoraIsVisible = false;
  escritoras: Escritora[] = [
    {
      escritora: 'Draculaura',
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPybiWfHFMaxrGJcItc4wuBJo3yRUKcR7F5Q&s',
      link: 'escritoras-1',
      bordaCor: 'rgb(184, 127, 204)',
      boxShadow: 'rgb(184, 127, 204)',
      detailThumbnail:
        'https://i.pinimg.com/564x/3d/ed/15/3ded1574e8e845b805d64ca8a7802cd1.jpg',
      detailDescription:
        'Draculaura é alegre, fofa, inteligente, ambiciosa, otimista e muito especial! Não só para uma vampira, ela é assim comparada a qualquer monstro! Ela é que mais se destaca em Monster High, e a mais especial entre todos os personagens. Foi criada por seu dedicado pai, Drácula. Ele era rígido, mas eles sempre se divertiram – especialmente quando ele a ensinou a voar – e ela manteve essa atitude positiva. Juntos – mas sozinhos – eles moravam em uma mansão em cima da colina, com vista para a cidade de Normie. laro amava seu pai, mas realmente queria ter amigos da sua idade. Falei que ela era inteligente e ambiciosa!s.',
    },
    {
      escritora: 'Frankie',
      thumbnail:
        'https://i.pinimg.com/564x/14/91/6f/14916f07f0376f07bfaed8b54f24a038.jpg',
      link: 'escritoras-5',
      bordaCor: 'rgb(6, 245, 245)',
      boxShadow: 'rgb(6, 245, 245)',
      detailThumbnail:
        'https://i.pinimg.com/564x/5c/dd/52/5cdd529d7d481dfacf128f2ab5fe0c27.jpg',
      detailDescription:
        'Frankie é retratada como uma adolescente doce, amigável e um pouco ingênua, já que é "nova no mundo" (tendo apenas 15 dias de idade no início da série). Ela é curiosa, otimista e sempre disposta a ajudar seus amigos. Ela adora moda e frequentemente experimenta com diferentes estilos. Além disso, ela é bastante ativa na vida escolar e social do colégio Monster High.',
    },
    {
      escritora: 'Ghoulia',
      thumbnail:
        'https://pm1.aminoapps.com/6474/0277e13ee21dfa650e2f9343d14155e7d75400b5_00.jpg',
      link: 'escritoras-2',
      bordaCor: 'rgb(6, 101, 245',
      boxShadow: 'rgb(6, 101, 245)',
      detailThumbnail:
        'https://i.pinimg.com/564x/de/31/3f/de313f577a245565d4380a0f07432f5b.jpg',
      detailDescription:
        "Ghoulia Yelps é uma personagem introduzida em 2010 e uma das personagens principais de Monster High. Ela é uma zumbi, irmã mais nova de Moan'ica Yelps e a aluna mais inteligente de Monster High. Ghoulia costumava ser solitária até Cleo de Nile coloca-la sob suas asas e ajudá-la a sair de sua concha. As duas têm sido amigas mais próximas desde então, Ghoulia é uma das poucas a desfrutar da total confiança de Cleo. Além de Cleo, Ghoulia favorece a companhia de outros zumbis, com Sloman  Slo Mo Mortavitch e Don sendo seus principais amigos zumbis.",
    },
    {
      escritora: 'Clawdeen',
      thumbnail:
        'https://i.pinimg.com/474x/b1/98/49/b19849f8fb811986bcbdd0bf7bae6e51.jpg',
      link: 'escritoras-3',
      bordaCor: 'rgb(121, 6, 245)',
      boxShadow: ' rgb(121, 6, 245)',

      detailThumbnail:
        'https://i.pinimg.com/564x/ef/bd/2e/efbd2e90a599ceeedd1fe7a9f2819916.jpg',
      detailDescription:
        'Clawdeen Wolf é uma personagem que foi introduzida em 2010/2016 e uma das protagonistas de Monster High. Ela é uma lobisomem, estudante da Monster High e que vem de uma família com muitos filhos - entre os quais estão Clawdia, Clawd e Howleen. No Reboot, somos apresentados a sua mãe, Harriet Wolf e seus irmãos mais novos. Ela é uma talentosa designer de moda, pronta para fazer seu nome com um portfólio impressionante, conexões que valem a pena e até um desfile de moda em Scaris.',
    },
    {
      escritora: 'Cléo',
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA-QNWmldNpXpgXTNiQdpUJzYeU_koil367Q&s',
      link: 'escritoras-4',
      bordaCor: 'rgb(245, 225, 6)',
      boxShadow: 'rgb(245, 225, 6)',
      detailThumbnail:
        'https://i.pinimg.com/564x/2c/0a/17/2c0a17eacd5425c9f42002ac183eeb1c.jpg',
      detailDescription:
        'Ela é uma múmia, apesar de ter nascido humana, e uma estudante na Monster High. Como realeza, Cleo é surpreendentemente a rainha do corpo estudantil, embora poucos saibam que sua confiança não é tão sólida quanto parece. Cleo tem uma relação difícil com seu pai, Ramsés, que exige o melhor dela e para ela, e sua irmã mais velha, Nefera, que não consegue lidar com Cleo sendo bem sucedida, como tal, trabalha regularmente para sabotar os esforços de Cleo e prejudicar a sua autoestima.',
    },
    {
      escritora: 'Lagoona',
      thumbnail:
        'https://i.pinimg.com/564x/ea/5f/cc/ea5fccc2a8e42e4124652ccd31cd37cc.jpg',
      link: 'escritoras-5',
      bordaCor: 'rgb(6, 245, 245)',
      boxShadow: 'rgb(6, 245, 245)',
      detailThumbnail:
        'https://i.pinimg.com/736x/5e/d7/2b/5ed72b28958f59ceddfab2c5a2bb516e.jpg',
      detailDescription:
        'Lagoona Blue é uma personagem introduzida em 2010/2016 e uma das personagens principais. Ela e seus irmãos mais novos (Kelpie, Dewey, Squirt, Tad e Ebbie) são um tipo incomum de monstro marinho, pois são filhos de um monstro marinho e de uma ninfa do oceano. Lagoona é uma estudante da Monster High, que veio da Assustadora Barreira de Corais para expandir seus horizontes.',
    },
  ];

  menus: Menu[] = [
    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'Sobre',
      link: '/sobre',
    },
  ];

  posts: Post[] = [
    {
      title: 'Post 1',
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2pjmheY6g2DWSj4_Na8Znh9hBajIumynaHg&s',
      data: '19/09/2022',
      author: 'Kil 1',
    },
    {
      title: 'Post 2',
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKpVRkgCaNiWN-nfggm1QVP9bGCJmNlaP2yg&s',
      data: '19/09/2022',
      author: 'Kil',
    },
  ];
}
