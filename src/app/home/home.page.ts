import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Storage } from '@ionic/storage-angular';
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

    //películas destacadas
  ];

  upcomingMovies = [                //url de las imagenes aca
    { title: 'Próximo Estreno 1', imageUrl: 'https://assets.cinemark-core.com/5db771be04daec00076df3f5/vista/movies/65775f5a1ab5c49538a0538b/common/pet-shop-boys-dreamworld-96057-1702327942574' },
    { title: 'Próximo Estreno 2', imageUrl: 'https://assets.cinemark-core.com/5db771be04daec00076df3f5/vista/movies/659d86083bab8c817c5a129a/common/el-nino-y-la-garza-96474-1704822320554' },
    { title: 'Proximo Estreno 3', imageUrl: 'https://assets.cinemark-core.com/5db771be04daec00076df3f5/vista/movies/659dc9f5b5cc6eee100ecb28/common/masha-y-el-oso-96435-1704839860215' },
    // próximos estrenos
  ]; 

  constructor(
    private router: Router,
    private storage: Storage
    ) {}

  goToIntro() {
   
  }
}
