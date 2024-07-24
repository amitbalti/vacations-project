import { Notyf } from "notyf";

class Notify {
  // Notification
  private notification = new Notyf({
    duration: 4000,
    position: { x: "left", y: "top" },
  });

  // Success notification
  public success(message: string) {
    this.notification.success(message);
  }

  // Error notification
  public error(message: string) {
    this.notification.error(message);
  }
}
const notify = new Notify();
export default notify;
