import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-home',
  imports: [],
  templateUrl: './image-home.component.html',
  styleUrl: './image-home.component.css'
})
export class ImageHomeComponent implements  OnInit {

  private  readonly _router = inject(Router)
  inHome:WritableSignal<boolean> = signal(true)

 ngOnInit(): void {
     this._router.url.includes('home') ? this.inHome.set(true) : this.inHome.set(false)
 }
}
