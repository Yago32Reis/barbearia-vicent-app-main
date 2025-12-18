import { Component, Input, OnInit, signal, WritableSignal } from '@angular/core';
import { IonicModule } from "@ionic/angular";

type ImageProps = {
  src: string;
  alt: string;
  size: 'small' | 'medium' | 'large' | [
    width?: string,
    height?: string
    ]
};


@Component({
  selector: 'app-image-component',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  standalone: true,
  imports: [
    IonicModule
  ]
})
export class ImageComponent implements OnInit {
  @Input() set props(value: ImageProps | undefined) {
    if (value) {
      this.imageProps.set(value);
    }
  }

  imageProps: WritableSignal<ImageProps> = signal({
    src: '',
    alt: 'Image',
    size: 'medium'
  });

  constructor() { }

  ngOnInit() {}

  getSizeClass(): any {
    switch (this.imageProps().size) {
      case 'small':
       return  ['320px', '240px'];

      case 'medium':
        return ['640px', '480px'];
      case 'large':
        return ['1280px', '720px'];
      default:
        return this.imageProps().size;
    }
  }
}
