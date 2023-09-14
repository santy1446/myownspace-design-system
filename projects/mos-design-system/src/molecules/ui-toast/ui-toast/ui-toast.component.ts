import { Component } from '@angular/core';

@Component({
  selector: 'mos-ui-toast',
  templateUrl: './ui-toast.component.html',
  styleUrls: ['./ui-toast.component.scss']
})
export class UiToastComponent {
  notificationArray: ToastConfiguration[] = [];

  /**
   * Show a notification
   * @param type success, info or error 
   * @param message Message to show
   * @param duration duration in miliseconds
   */
  createNotification(type: string, message: string, duration: number): void {
    const notification: ToastConfiguration = {
      id: Date.now() + Math.random(), //unique identifier
      type,
      message,
      duration
    };

    this.notificationArray.push(notification);
    this.deleteNotification(notification.id, duration);
  }

  /**
   * Delete notification
   * @param id notification id 
   * @param duration duration on screen
   */
  private deleteNotification(id: number, duration: number): void {
    setTimeout(() => {
      const index = this.notificationArray.findIndex(toast => toast.id === id)
      this.notificationArray.splice(index, 1);
    }, duration)
  }
}

export interface ToastConfiguration {
  id: number;
  type: string;
  message: string;
  duration: number;
}
