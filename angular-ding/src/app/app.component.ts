
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { DeviceDetectorService } from 'ngx-device-detector';
import swal from 'sweetalert2';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   slider:boolean=false;
  constructor(
    public swUpdate: SwUpdate,
    private deviceService: DeviceDetectorService,
    private router: Router) {

    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        swal.fire({
          position: 'center',
          icon: 'success',
          title: 'دینگ ابدیت شد :)',
          showConfirmButton: true,
          confirmButtonText: "باشه",
        }).then(function (result) {

          window.location.reload();
        })


      })
    }

  }
  ngOnInit(): void {
     
    if (window.matchMedia('(display-mode: standalone)').matches) {
      this.slider=true;
    }
    else{
      this.slider=false;
    }

    // if (!this.deviceService.isMobile()) {
    //   this.router.navigate(["/WebPlatform"])
    // }
    // else {
    //   this.router.navigate(["/"])
    // }
  }

}
