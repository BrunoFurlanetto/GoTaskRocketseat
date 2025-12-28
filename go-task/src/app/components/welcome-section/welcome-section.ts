import {Component, inject} from '@angular/core';
import {ModalControllerService} from '../../services/modal-controller-service';
import {DialogRef} from '@angular/cdk/dialog';

@Component({
  selector: 'app-welcome-section',
  imports: [],
  templateUrl: './welcome-section.html',
  styleUrl: './welcome-section.css',
})
export class WelcomeSection {
    private readonly _modalController = inject(ModalControllerService)

    openNewTaskModal() {
        const dialog_ref = this._modalController.openNewTaskModal()

        dialog_ref.closed.subscribe((taskForm) => {
            console.log(taskForm)
        })
    }
}
