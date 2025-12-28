import {Component, inject} from '@angular/core';
import {ModalControllerService} from '../../services/modal-controller-service';

@Component({
  selector: 'app-welcome-section',
  imports: [],
  templateUrl: './welcome-section.html',
  styleUrl: './welcome-section.css',
})
export class WelcomeSection {
    private readonly _modalController = inject(ModalControllerService)

    openNewTaskModal() {
        this._modalController.openNewTaskModal()
    }
}
