import { Component, Input } from '@angular/core';
import { Profile } from '../../data/interfaces/profile';
import { ImageUrlPipe } from "../../heplers/pipes/image-url.pipe";

@Component({
    selector: 'app-profile-card',
    standalone: true,
    templateUrl: './profile-card.component.html',
    styleUrl: './profile-card.component.scss',
    imports: [ImageUrlPipe]
})
export class ProfileCardComponent {
  @Input() profile!: Profile;
}
