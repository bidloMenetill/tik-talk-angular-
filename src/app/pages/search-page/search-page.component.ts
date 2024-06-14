import { Component, inject } from '@angular/core';
import { ProfileCardComponent } from '../../common-ui/profile-card/profile-card.component';
import { Profile } from '../../data/interfaces/profile';
import { ProfileService } from '../../data/services/profile.service';

@Component({
  selector: 'app-search-page',
  standalone: true,
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss',
  imports: [ProfileCardComponent],
})
export class SearchPageComponent {
  profileServices = inject(ProfileService);
  profiles: Profile[] = [];
  constructor() {
    this.profileServices.getTestAccount().subscribe((value) => {
      this.profiles = value;
    });
  }
}
