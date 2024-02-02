import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Storage } from '@ionic/storage-angular';
import { EventsService } from '../services/events.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  slideOptions = {
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,

  };

  highlightedMovies = [         // url de las imagenes aca
    { title: 'Película 1', imageUrl: 'https://assets.cinemark-core.com/5db771be04daec00076df3f5/vista/movies/65adbfe40bf1c493b7e21ed4/common/anatomia-de-una-caida-96479-1705886899693' },
    { title: 'Película 2', imageUrl: 'https://assets.cinemark-core.com/5db771be04daec00076df3f5/vista/movies/659d86083bab8c817c5a1286/common/jack-en-la-caja-maldita-3-96430-1704839650786' },
    { title: 'Película 3', imageUrl: 'https://assets.cinemark-core.com/5db771be04daec00076df3f5/vista/movies/6582e9b9decfe797ac8354c1/common/aguas-siniestras-96336-1703078433318' },
    { title: 'Película 3', imageUrl: 'https://assets.cinemark-core.com/5db771be04daec00076df3f5/vista/movies/6579ba6902aa811a76e11b08/common/dogman-100467-1702476506754' },
    { title: 'Película 3', imageUrl: 'https://assets.cinemark-core.com/5db771be04daec00076df3f5/vista/movies/65b2dff5fded8aa2066a3458/common/cuando-acecha-la-maldad-100501-1706221790056' },
    { title: 'Película 3', imageUrl: 'https://assets.cinemark-core.com/5db771be04daec00076df3f5/vista/movies/65bbacf6b08c7794192f5689/common/el-juego-de-la-muerte-100511-1706798556595' },
    { title: 'Película 3', imageUrl: 'https://assets.cinemark-core.com/5db771be04daec00076df3f5/vista/movies/65b2dff5fded8aa2066a3477/common/mi-amigo-robot-100502-1706221775937' },
    { title: 'Película 3', imageUrl: 'https://assets.cinemark-core.com/5db771be04daec00076df3f5/vista/movies/6540322ecc304c000836b572/common/presencia-extrana-100429-1698851161739' },

    //películas destacadas
  ];

  upcomingMovies = [                //url de las imagenes aca
    { title: 'Próximo Estreno 1', imageUrl: 'https://assets.cinemark-core.com/5db771be04daec00076df3f5/vista/movies/65775f5a1ab5c49538a0538b/common/pet-shop-boys-dreamworld-96057-1702327942574' },
    { title: 'Próximo Estreno 2', imageUrl: 'https://assets.cinemark-core.com/5db771be04daec00076df3f5/vista/movies/659d86083bab8c817c5a129a/common/el-nino-y-la-garza-96474-1704822320554' },
    { title: 'Proximo Estreno 3', imageUrl: 'https://assets.cinemark-core.com/5db771be04daec00076df3f5/vista/movies/659dc9f5b5cc6eee100ecb28/common/masha-y-el-oso-96435-1704839860215' },
    { title: 'Proximo Estreno 4', imageUrl: 'https://assets.cinemark-core.com/5db771be04daec00076df3f5/vista/movies/65690034efb447000812eade/common/patos-96016-1701380178788' },
    { title: 'Proximo Estreno 5', imageUrl: 'https://assets.cinemark-core.com/5db771be04daec00076df3f5/vista/movies/659dc9f5b5cc6eee100ecb1d/common/beekeeper-96437-1705432492497' },
    { title: 'Proximo Estreno 6', imageUrl: 'https://assets.cinemark-core.com/5db771be04daec00076df3f5/vista/movies/64a0b6a9d1fc8200089b21b1/common/oppenheimer-94083-1706108328808' },
    { title: 'Proximo Estreno 6', imageUrl: 'https://assets.cinemark-core.com/5db771be04daec00076df3f5/vista/movies/65b96ffaa1e8a855e396865f/common/el-nino-detras-de-la-puerta-96438-1706741767010' },
    { title: 'Proximo Estreno 6', imageUrl: 'https://assets.cinemark-core.com/5db771be04daec00076df3f5/vista/movies/65b822c60bf2ec2d79a07bc7/common/vidas-pasadas-96480-1706566443540' },
    { title: 'Proximo Estreno 6', imageUrl: 'https://assets.cinemark-core.com/5db771be04daec00076df3f5/vista/movies/659fe3b95e60521617f4d21f/common/libres-96473-1704978907987' },
   
  ]; 

  event_list: any;
  constructor(
    private router: Router,
    private storage: Storage,
    private events: EventsService
    ) {}
    
    ionViewDidEnter(){
      this.events.getEvents().then(
        res =>{
          this.event_list = res;
          console.log(this.event_list)

        }
        )
        console.log("Local Events",this.events.getLocalEvents().events);
    }

  goToIntro() {
   
  }
}
