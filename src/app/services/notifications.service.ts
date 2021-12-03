import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {


  constructor(private toastr: ToastrService) { }
  warning(msg:string)
  {
    this.toastr.warning(msg);
  }
  success(msg:string)
  {
    this.toastr.success(msg);
  }
  info(msg:string)
  {
    this.toastr.info(msg);
  }
  error(msg:string)
  {
    this.toastr.error(msg);
  }
}
