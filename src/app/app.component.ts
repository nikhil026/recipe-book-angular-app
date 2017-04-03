import { Component ,OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
  ngOnInit( )
  {
  firebase.initializeApp({
   apiKey: "AIzaSyBe3SgS_k3gyG51tx5yZ4d4aT5CDleGzP0",
    authDomain: "recipebook-f1430.firebaseapp.com"});
  }
}
