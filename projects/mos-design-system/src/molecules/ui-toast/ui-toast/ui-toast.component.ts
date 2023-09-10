import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'mos-ui-toast',
  templateUrl: './ui-toast.component.html',
  styleUrls: ['./ui-toast.component.scss']
})
export class UiToastComponent {
  messageTypes: string[] = ['info', 'success', 'error'];
  notificationArray: ToastConfiguration[] = [];

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
