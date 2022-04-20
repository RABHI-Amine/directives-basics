import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;  
  images = [
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
    },{
      title: 'At the forest',
      url: 'https://media.istockphoto.com/photos/a-view-up-into-the-trees-direction-sky-picture-id1317323736?b=1&k=20&m=1317323736&s=170667a&w=0&h=VARnUilGZvG6Fq_yivfg_8qeXbGRfo5fio3d9ZGeKpw='
    },{
      title: 'At the mountain',
      url: 'https://media.istockphoto.com/photos/75mpix-panorama-of-beautiful-mount-ama-dablam-in-himalayas-nepal-picture-id1341288649?b=1&k=20&m=1341288649&s=170667a&w=0&h=tGS0ne3HTBPt-6CltooB9ChBtNHHvfFEbby-OP--MeY='
    },{
      title: 'At the mountain',
      url: 'https://media.istockphoto.com/photos/75mpix-panorama-of-beautiful-mount-ama-dablam-in-himalayas-nepal-picture-id1341288649?b=1&k=20&m=1341288649&s=170667a&w=0&h=tGS0ne3HTBPt-6CltooB9ChBtNHHvfFEbby-OP--MeY='
    }
  ];

}
